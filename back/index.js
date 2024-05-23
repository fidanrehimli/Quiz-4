const express = require("express");
const app = express();
const cors = require("cors")
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
dotenv.config()
const { Schema } = mongoose

const clothSchema=new Schema({
    img:{
        type: String,
        require: true
    },
    title:{
        type: String,
        require: true
    },
    parag:{
        type: String,
        require: true
    },
    price:{
        type: String,
        require: true
    }
})

const Cloth = mongoose.model("Cloth",clothSchema)

app.post("/cloth", async (req, res) => {
    try {
        const { img, title, price } = req.body
        const newCloth = new Cloth({
            img,
            title,
            price
        })
        await newCloth.save()
        res.status(201).send(newCloth)
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }

})

app.get("/cloth", async (req, res) => {
    try {
        const cloth = await Cloth.find({})
        res.status(200).send(cloth)
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
})


app.delete("/cloth/:id", async (req, res) => {
    try {
        const { id } = req.params
        const clothDelete = await Cloth.findByIdAndDelete(id)
        res.status(200).send(clothDelete)
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
})

app.get("/cloth/:id", async (req, res) => {
    try {
        const { id } = req.params
        const clothFind = await Cloth.findById(id)
        res.status(200).send(clothFind)
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
})

app.put("/cloth/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { img, title,parag, price } = req.body
        const clothUpdate = await Cloth.findByIdAndUpdate(id, {
            img, 
            title,
            parag, 
            price
        })
        res.status(200).send(clothUpdate)
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
})



const PORT = process.env.PORT;
const DB = process.env.DB_URL;

app.listen(PORT, console.log("Port is Active", PORT))
mongoose.connect(DB)
    .then(() => console.log('Connected!'));