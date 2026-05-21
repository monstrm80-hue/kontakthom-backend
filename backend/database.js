const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/')
    .then(() => console.log('MongoDB qoşuldu!'))
    .catch(err => console.log('MongoDB xətası:', err));

const MehsulSchema = new mongoose.Schema({
    ad:         { type: String, required: true },
    brend:      { type: String, required: true },
    qiymet:     { type: Number, required: true },
    eskiQiymet: { type: Number },
    kateqoriya: { type: String },
    reytinq:    { type: Number, default: 5 },
    shekil:     { type: String },
    populyar:   { type: Boolean, default: false },
    kredit:     { type: String }
});

const Mehsul = mongoose.model('Mehsul', MehsulSchema);

module.exports = { Mehsul };