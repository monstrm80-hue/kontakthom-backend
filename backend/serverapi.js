const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session"); 
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../frondend")); 

app.get("/", (req, res) => {
    res.render("anasayfa");
});

app.get("/mehsullar", (req, res) => {
    res.render("mehsullar");
});

app.get("/brendler", (req, res) => {
    res.render("brendler");
});


app.get("/kampaniyalar", (req, res) => {
    res.render("kampani");
});


app.get("/magazalar", (req, res) => {
    res.render("magazalar");
});


app.get("/kreditler", (req, res) => {
    res.render("kreditler");
});


app.listen(3000, () => {
    console.log("Sunucu 3000 portunda başlatildi.");
});