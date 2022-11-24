const express = require("express");

const app = express();

const port = 5000;

// const movies = [
//     {
//         id: 1,
//         title: "Citizen Kane",
//         director: "Orson Wells",
//         year: "1941",
//         colors: false,
//         duration: 120,
//     },
//     {
//         id: 2,
//         title: "The Godfather",
//         director: "Francis Ford Coppola",
//         year: "1972",
//         colors: true,
//         duration: 180,
//     },
//     {
//         id: 3,
//         title: "Pulp Fiction",
//         director: "Quentin Tarantino",
//         year: "1994",
//         color: true,
//         duration: 180,
//     },
// ];

const getApi = () => {
    fetch('https://serpapi.com/search.json?engine=google&q=mars&engine=google&api_key=dbf77889efe8960109a9f899a2b3236804fba3f3cd8d14361dc6c94eb1ef60a0', { method: 'GET' })
        .then((response) => response.json())
        .then((data) => console.log(data));

};
app.listen(port, (err) => {
    if (err) {
        console.error("Something bad happened");
    } else {
        console.log(`Server is listening on ${port}`);
    }
});

app.get("/", (req, res) => {
    res.send("Welcome to my favourite movie list");
});
// app.get("/q", (req, res) => {
//     res.send(getApi());
// });
// app.get("/api/movies", (req, res) => {
//     res.status(200).json(movies);
// });

// app.get("/api/movies/:id", (req, res) => {
//     let test = movies.find(element => element.id === parseInt(req.params.id));
//     if (test) {
//         res.status(200).json(test);
//     }
//     else {
//         res.status(404).json("Not Found");
//     }
// });