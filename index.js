import express, { application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

app.get("/",(req, res) => {
    res.send("Response");
})

app.use