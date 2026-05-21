const mongoose = require("mongoose");

// MongoDB-yə qoşuluruq
mongoose.connect("mongodb://localhost:27017/")
    .then(() => console.log("Kontakt Home Bazasına Uğurla Bağlanıldı!"))
    .catch(err => console.error("Baza bağlantı xətası:", err));

// Məhsul strukturunu təyin edirik
const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    image: String,
    brand: String,
    category: String,
    badge: String
});

// Modeli yaradırıq
const Product = mongoose.model("Product", productSchema);

// Məhsulları bazaya yazan funksiya
async function seedData() {
    try {
        // Təkrarlanma olmasın deyə əvvəlcə bazanı tam təmizləyirik
        await Product.deleteMany({});
        console.log("Köhnə məlumatlar bazadan təmizləndi.");

        // İndi isə yeni məhsullarımızı tək-tək massiv daxilində əlavə edirik
        await Product.insertMany([
            { 
                title: "iPhone 15 Pro Max 256 GB", 
                price: 3199, 
                image: "iPhone 15 Pro", 
                brand: "APPLE", 
                category: "Smartfonlar", 
                badge: "YENİ" 
            },
            { 
                title: "Samsung Galaxy S24 Ultra", 
                price: 2799, 
                image: "Galaxy S24", 
                brand: "SAMSUNG", 
                category: "Smartfonlar", 
                badge: "ENDİRİM" 
            },
            { 
                title: "Sirab Premium Qazlı Su 1L", 
                price: 1, 
                image: "Sirab Su", 
                brand: "SİRAB", 
                category: "İçkilər", 
                badge: "YENİ" 
            },
            { 
                title: "Xiaomi Redmi Note 13 Pro", 
                price: 699, 
                image: "Redmi Note 13", 
                brand: "XIAOMI", 
                category: "Smartfonlar", 
                badge: "" 
            },
            { 
                title: "Acer Nitro 5 Gaming Noutbuk", 
                price: 1899, 
                image: "Acer Nitro", 
                brand: "ACER", 
                category: "Noutbuklar", 
                badge: "ENDİRİM" 
            }
        ]);

        console.log("Məhsullar uğurla bazaya yazıldı!");
        process.exit(); // İşimiz bitəndə terminal prosesini avtomatik bağlayırıq
    } catch (error) {
        console.error("Məlumatlar yazılarkən xəta baş verdi:", error);
        process.exit(1);
    }
}

// Funksiyanı icra edirik
seedData();