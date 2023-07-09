import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3001, () => console.log("SERVER STARTED"));

dotenv.config();

const connectionString = process.env.ATLAS_URI;

mongoose.connect(connectionString);
