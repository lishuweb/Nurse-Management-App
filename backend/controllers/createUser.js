const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../utils/config');

User = [];
app.get('/', async(req, res) => {
    const userDetails = await prisma.Register.findMany();
    res.json(userDetails);
});

app.post('/create', async(req, res, next) => {
    try {
        const { email, password } = req.body;
        if(!email || !password)
        {
            return res.json({
                error: 'Email or password is missing!'
            });
        }
        const oldUser = await prisma.Register.findUnique({
            where:{
                    email: email
            }
        });
        if(oldUser)
        {
            return res.json({
                error: "Email already exists!"
            });
        }
        if(password.length < 8)
        {
            return res.json({
                error: "Password must be atleast 8 characters!"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);
        const newUser = await prisma.Register.create({
            data: {
                email: req.body.email,
                password: passwordHash
            }
        });
        if(newUser)
        {
            res.json(newUser);
        }
    }
    catch(error)
    {
        next(error);
    }
    
});

// app.put('/update/:id', async(req, res) => {
//     const { id } = req.params;
//     const updatedUser = await prisma.Register.update({
//         where: {
//             id: Number(id)
//         },
//         data: {
//             email: req.body.email,
//             password: req.body.password
//         }
//     });
//     if(updatedUser)
//     {
//         res.json(updatedUser);
//     }
// });

// app.delete('/delete/:id', async(req, res) => {
//     const { id } = req.params;
//     const deletedUser = await prisma.Register.delete({
//         where: {
//             id: Number(id)
//         }
//     });
//     if(deletedUser)
//     {
//         res.json("Deleted Successfully");
//     }
// });

app.post('/login', async(req, res, next) => {
    try{
        const { email, password } = req.body;
        const loggedData = await prisma.Register.findMany();
        const userData = loggedData.find((val) => val.email === email);
        console.log(userData);
        const isCorrect = await bcrypt.compare(password, userData.password);
        if(!isCorrect)
        {
            return res.json({ error: "Wrong password" });
        }

        const userForToken = {
            email: userData.email,
            id: userData.id,

        };

        const accessToken = jwt.sign(userForToken, config.ACCESS_TOKEN_SECRET, {
            expiresIn: 60 * 60,
        });

        const refreshToken = jwt.sign(userForToken, config.REFRESH_TOKEN_SECRET, {
            expiresIn: 24 * 60 * 60,
        });
        res.status(200).json({ accessToken, refreshToken, email });
    }
    catch(error)
    {
        next(error);
    }
    
    // if(userData)
    // {
    //     if(userData.password === password)
    //     {
    //         res.json("Success");
    //     }
    //     else 
    //     {
    //         res.json("UnSuccess");
    //     }
    // }
    // else 
    // {
    //     res.json("No code available to handle");
    // }
});

app.post("/refresh", async(req, res, next) => {
    try{
        const { refreshToken } = req.body;
        if(!refreshToken)
        {
            return res.json({error: "Refresh token is missing!"});
        }
        const user = jwt.verify(refreshToken, config.REFRESH_TOKEN_SECRET);
        const userForToken = {
            email: user.email,
            id: user.id,
        };
        const accessToken = jwt.sign(userForToken, config.ACCESS_TOKEN_SECRET, {
            expiresIn: 60 * 60,
        });
        res.status(200).json({accessToken});
    }
    catch(error)
    {
        next(error);
    }
});

module.exports = app;