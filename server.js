const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello from Node.js + GitHub Actions + Docker + Kubernetes!
	    succeefully");
});

app.get("/health", (req, res) => {
    res.json({ status: "UP" });
});

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});
