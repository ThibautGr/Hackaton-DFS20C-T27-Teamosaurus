const express = require('express');
const data = require('./data/apd_apidae.apdlieutourisme_latest.json');
let app = express();


app.get('/tourism/points', (req,res) => {
    res.status(200).json(data)
});

app.get('/tourism/points/:id', (req,res) => {
    const id = req.params.id
    const tourism = data.features.find(tourism => tourism.properties.id === id)
    res.status(200).json(tourism)
})

//TODO: get all theme
app.get('/tourism/points/themes/:theme', (req,res) => {
    const theme = req.params.theme
    let tourisms = [];
    for (const elm of data.features) {
       if ( elm.properties.theme.map(str => str.replace(/\s/g, '')).includes(theme) ){
           tourisms.push(elm)
       }
    }
    res.status(200).json(tourisms)
})

//TODO: get all type
app.get('/tourism/points/types/all', (req,res) => {
    let result = [];
    console.log("hi")
    // for (const [key, value] of Object.entries(data.features.properties)) {
    //     console.log(`${key}: ${value}`);
    // }
    //console.log(data.features.properties.type)


    for (const elem of data.features){
            if (!result.includes(elem.properties.type)){
                result.push(elem.properties.type)
            }
    }
    res.status(200).json(result)
})

//TODO: get all by type
app.get('/tourism/points/types/:type', (req,res) => {
    const type = req.params.type
    let result = [];
    for (const elm of data.features) {
        if (elm.properties.type.includes(type)){
            result.push(elm)
        }
    }
    res.status(200).json(result)
})





app.listen(3000, () => {
    console.log("Serveur à l'écoute");
});