const express = require("express");
const app = express();
const cors = require("cors");
const nurseControllers = require("./controllers/createNurse");
const userControllers = require("./controllers/createUser");
// const PrismaClient = require("@prisma/client");
// const Prisma = PrismaClient();

app.use(express.json());
app.use(cors());

app.use("/api/nurse", nurseControllers);
app.use("/api/register", userControllers);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});