import dotenv from "dotenv";
import connectDb from "./src/dbConfig/index.db.js";
import { app } from "./app.js";

dotenv.config({
    path: "./.env",
});

console.log(process.env.PORT);

connectDb()
    .then(() => {
        app.on("error", (err) => {
            console.log("Error:", err);
        });

        app.listen(process.env.PORT || 8000, (req, res) => {
            console.log(`Server is listening on port: ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log(`MongoDB connection failed !!!`, err);
    });
