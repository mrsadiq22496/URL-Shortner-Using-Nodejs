import express from 'express';
import "dotenv/config";
import connectToDB from './Config/db.js';
import urlRouter from './routes/url.js';
import { redirectToUrl } from './controllers/URL.js';


const app = express();
const PORT = process.env.PORT;

//Connect To DB
connectToDB();

app.use(express.json());

// API Routes

app.use("/api/url", urlRouter);
app.get("/:shortId", redirectToUrl);


app.listen(PORT, () => console.log("Server Started On Port " + PORT));