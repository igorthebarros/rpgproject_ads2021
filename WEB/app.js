const express = require("express");
const PORT = 3001;
const app = express();

app.use(express.static('www'));

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, archive, callback){
        callback(null, 'www./img/');
    },
    filename: function (req, archive, callback) {
        callback(null, archive.originalname);
    }
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single('archive'), (req, res) => {
    res.status(200).send();
});

const msg = `Servidor On! Port: ${PORT}`;
app.listen(PORT, () => console.log(msg));