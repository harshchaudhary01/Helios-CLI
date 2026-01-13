import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()
const app = express();

app.get("/health", (req, res) => {
    res.send("Server is running!");
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})