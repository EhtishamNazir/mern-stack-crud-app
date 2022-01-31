const express = require("express");
const mongoose = require("mongoose");
const FoodModel = require("./models/Food");

const app = express();

mongoose.connect("mongodb://localhost:27017/food", {useNewUrlParser: true});

app.get("/", (req, res) => {
    const food = new FoodModel({
        foodName: "Apple",
        daySinceIAte: 3
    });

    food.save(function(err){
        if(!err){
            console.log("Data saved");
        } else{
            console.log("Something went wrong");
        }
    });
})

app.listen(3000, () => {
    console.log("Listening at port 3000");
});