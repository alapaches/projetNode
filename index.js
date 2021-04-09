const express = require('express')
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/categorie', (req, res) => {
    res.send('Categorie')
})

app.get('/categorie/new', (req, res) => {
    const categorie = {
        "titre": "",
        "slug" : "",
        "description": ""
    };

    const test = Object.create(categorie);
    test.titre = "Figurines";
    test.slug = "toto";
    test.description = "Ceci est une description";

    res.send(test);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});