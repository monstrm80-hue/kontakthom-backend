const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session"); 
const app = express();
const multer = require('multer');
const { Mehsul } = require('./database');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../frondend")); 

app.get("/", (req, res) => {
    res.render("anasayfa");
});



// İndi:
app.get('/mehsullar', async (req, res) => {
    const mehsullar = await Mehsul.find();
    res.render('mehsullar', { mehsullar });
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
app.get("/sebet", (req, res) => {
    res.render("sebet", { sebetMehsulları: [] });
});
app.get('/admin', (req, res) => res.render('admin'));

app.post('/admin/mehsul-elave', upload.single('shekil'), async (req, res) => {
    const { ad, brend, qiymet, eskiQiymet, kateqoriya, kredit, populyar } = req.body;
    const shekil = req.file ? '/uploads/' + req.file.filename : '';

    await Mehsul.create({
        ad, brend,
        qiymet: parseFloat(qiymet),
        eskiQiymet: parseFloat(eskiQiymet) || null,
        kateqoriya, kredit, shekil,
        populyar: populyar === 'on'
    });

    res.redirect('/admin');
});

app.listen(3000, () => {
    console.log("Sunucu 3000 portunda başlatildi.");
});