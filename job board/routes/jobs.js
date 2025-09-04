const express = require("express");
const Job = require("../models/Job");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.json(job);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
