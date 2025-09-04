const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jobRoutes = require("./routes/jobs");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/jobboard", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/jobs", jobRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
