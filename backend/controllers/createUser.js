const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

User = [];
app.get('/', async(req, res) => {
    const userDetails = await prisma.Register.findMany();
    res.json(userDetails);
});

app.post('/create', async(req, res) => {
    // const { email, password } = req.body;
    const newUser = await prisma.Register.create({
        data: {
            email: req.body.email,
            password: req.body.password
        }
    });
    if(newUser)
    {
        res.json(newUser);
    }
});

app.put('/update/:id', async(req, res) => {
    const { id } = req.params;
    const updatedUser = await prisma.Register.update({
        where: {
            id: Number(id)
        },
        data: {
            email: req.body.email,
            password: req.body.password
        }
    });
    if(updatedUser)
    {
        res.json(updatedUser);
    }
});

app.delete('/delete/:id', async(req, res) => {
    const { id } = req.params;
    const deletedUser = await prisma.Register.delete({
        where: {
            id: Number(id)
        }
    });
    if(deletedUser)
    {
        res.json("Deleted Successfully");
    }
});

app.post('/login', async(req, res) => {
    const { email, password } = req.body;
    const loggedData = await prisma.Register.findMany();
    const userData = loggedData.find((val) => val.email === email);
    if(userData)
    {
        if(userData.password === password)
        {
            res.json("Success");
        }
        else 
        {
            res.json("UnSuccess");
        }
    }
    else 
    {
        res.json("No code available to handle");
    }
});

module.exports = app;