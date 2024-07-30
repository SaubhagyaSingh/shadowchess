const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const app = express();

// Use CORS middleware
app.use(cors());

const UPLOAD_FOLDER = './uploads';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOAD_FOLDER);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ filename: req.file.filename });
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
