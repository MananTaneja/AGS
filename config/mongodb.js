const mongoose = require('mongoose')
console.log("db")

mongoose
    .connect('mongodb+srv://manan:4J30ugQiV2mmE3eZ@ongobilling.szuxe.mongodb.net/ongoBilling?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => console.log("Mongo connected"))
    .catch((e) => {
        console.log('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db