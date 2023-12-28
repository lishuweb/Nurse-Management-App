const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

Nurse = [];
app.get('/', async(req, res) => {
    const nurseDetails = await prisma.Nurse.findMany();
    res.json(nurseDetails);
});

app.post('/create', async(req, res) => {
    // const {contact} = parseInt(req.body.contact);
    // const { name,
    //     email,
    //     contact,
    //     workingDays,
    //     startDutyTime,
    //     endDutyTime,
    //     roundingManager,
    //     image, } = req.body;
    // const { contact } = parseInt(req.body.contact)
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
    res.json(newNurse);
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
    res.json(updatedData); 
});

app.delete('/delete/:id', async(req, res) => {
    const id = parseInt(req.params.id);
    const deletedData = await prisma.Nurse.delete({
        where: {
            id: id
        },
    });
    res.json({
        message: "Deleted Successfully",
    });
});

module.exports = app;