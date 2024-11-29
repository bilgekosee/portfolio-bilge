const express = require("express");
const cors = require("cors");
const app = express();
app.options("*", cors());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Mesaj Alındı:", { name, email, message });

  res.status(200).json({ message: "Mesaj başarıyla alındı" });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
