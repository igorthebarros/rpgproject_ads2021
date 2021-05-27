const express = require("express");
const path = require("path");
const port = 3001;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "./static")));
app.use(express.static(path.join(__dirname, "./data")));


let aboutContent = {
    background: "/images/background/background.jpg",
    logo: "/images/icons/escudo.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repudiandae excepturi provident maxime, accusantium distinctio doloremque obcaecati debitis laborum explicabo dolores atque voluptates eligendi sit, id aut saepe temporibus? Dicta Rerum repudiandae excepturi provident maxime, accusantium distinctio doloremque obcaecati debitis laborum explicabo dolores atque voluptates."
}
app.get("/",(req, res) => {
    res.render("layout/template", { about: aboutContent, content: "index" });
});

app.get("/register", (req, res) => {
    res.render("layout/template", {content: "register"})
})

const dataCharacters = require("../rpgproject_ads2021/data/characters.json");
app.get("/characters", (req, res) => {
    res.render("layout/template", {charactersRegistered: dataCharacters, content: "characters"});
});

app.get("editRegister", (req, res) => {
    res.sendFile(path.join(__dirname, "./static/html/editRegister.html"))
});

app.listen(port, () => {
    console.log(`Servidor ON (${port})`);
});