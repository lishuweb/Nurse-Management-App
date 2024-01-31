const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// const cloud_name=process.env.Cloud_Name;
// const api_key=process.env.API_KEY;
// const secret_key=process.env.SECRET_KEY;

// cloudinary.config({
//     cloud_name: cloud_name,
//     api_key: api_key,
//     secret_key: secret_key
// })

Nurse = [];
app.get('/', async(req, res) => {
    const nurseDetails = await prisma.Nurse.findMany();
    res.json(nurseDetails);
});

app.get('/:id', async(req, res) => {
    const id = parseInt(req.params.id);
    const getNurse = await prisma.Nurse.findUnique({
        where: {
            id: id
        }
    });
    if(getNurse)
    {
        res.json(getNurse);
    }
});

app.post('/create', async(req, res) => {
    try{
        if(await prisma.register.findUnique({
            where:{email: req.body.email}}))
        {
            return res.json({error: "Email already exists!"});
        }

        // const {image} = re.files;
        // const fileTypes = ["image/jpeg", "image/png", "image/jpg"];
        // const imageSize = 1024;

        // if(!fileTypes.includes(image.mimetype))
        // {
        //     return res.status(400).send("Image formats supported: JPG, PNG, JPEG");
        // }

        // const upload = async(file) => {
        //     try{
        //         const cloudFile = await cloudinary.uploader.upload(
        //             file,
        //             (result) => result
        //         );
        //         return cloudFile;
        //     } catch(uploadError)
        //     {
        //         throw new Error("Failed to upload image");
        //     }
        // };

        // const cloudFile = await upload(image.tempFilePath);

        const newNurse = await prisma.Nurse.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                contact: req.body.contact,
                workingDays: req.body.workingDays,
                startDutyTime: req.body.startDutyTime,
                endDutyTime: req.body.endDutyTime,
                roundingManager: req.body.roundingManager,
                image: req.body.image,
            },
        });
        if(newNurse)
        {
            res.json("Success");
        } 
    }
    catch(e) 
    {
        console.log(e);
    }  
});

app.put('/update/:id', async(req, res) => {
    const id = parseInt(req.params.id);
    const updatedData = await prisma.Nurse.update({
            where: {
                id: id,
            },
            data:{
                name: req.body.name,
                email: req.body.email,
                contact: req.body.contact,
                workingDays: req.body.workingDays,
                startDutyTime: req.body.startDutyTime,
                endDutyTime: req.body.endDutyTime,
                roundingManager: req.body.roundingManager,
                image: req.body.image,
            },
        });
    if(updatedData)
    {
        res.json("Success");
    }
});

app.delete('/delete/:id', async(req, res) => {
    const id = parseInt(req.params.id);
    const deletedData = await prisma.Nurse.delete({
        where: {
            id: id
        },
    });
    if(deletedData)
    {
        res.json("Success");
    }
});

module.exports = app;