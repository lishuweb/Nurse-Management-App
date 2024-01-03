const express = require("express");
const app = express();
const cors = require("cors");
const nurseControllers = require("./controllers/createNurse");
const userControllers = require("./controllers/createUser");
const config = require("./utils/config");
const {
    errorHandler,
    userExtractor,
    tokenExtractor
} = require('./utils/middleware');

app.use(express.json());
app.use(cors());

app.use("/api/nurse", nurseControllers);
app.use("/api/register", userControllers);

app.use(errorHandler);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});