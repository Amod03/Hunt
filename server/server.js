import express from "express";
import { routes } from './routes/route.js';
import cors from "cors";
import dotenv from 'dotenv';
import { connectDB } from "./db/connection.js";

dotenv.config({path:"./config.env"});

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS with credentials
app.use(cors());

//mongodb connection
const con = connectDB();

con.then((db) => {
  if (!db) return process.exit(1);
  //listen only when valid connection
  app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
  });
  app.on('error', err => console.log(`failed to connect with http server ${err}`));
  //error in mongodb connection
}).catch(error => {
  console.log(`connection failed ${error}`)
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use routes
app.use('/', routes);
