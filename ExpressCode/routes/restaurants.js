const express = require('express');
const router = express.Router();

const restaurants = require('../data');
let currentRestaurantId = 2;

router.get('/',(req,res)=>{
    res.json(restaurants);
});
router.get('/:id',(req,res)=>{
   const restaurantsId = Number.parseInt(req.params.id,10);
   const restaurant = restaurants.find((restaurant)=> restaurant.id === restaurantsId);
 res.json(restaurant)
});

router.post('/',(req,res)=>{
    currentRestaurantId += 1;
    const newrestaurant = {
        id: currentRestaurantId,
                name: req.body.name,
        ...req.body
    };
    restaurants.push(newrestaurant);
    res.json(newrestaurant);
});

router.put('/:id',(req,res)=>{
    const restaurantsId = Number.parseInt(req.params.id,10);
    const restaurantsIndex = restaurants.findIndex((restaurant)=> restaurant.id === restaurantsId);

    const updatedRestaurant = {
        id: restaurantsId,
        ...req.body
    };
    restaurants[restaurantsIndex] = updatedRestaurant;
    res.json(updatedRestaurant);
});

router.delete('/:id',(req,res)=>{
    const restaurantsId = Number.parseInt(req.params.id,10);
    const restaurantsIndex = restaurants.findIndex((restaurant)=> restaurant.id === restaurantsId);
    restaurants.splice(restaurantsIndex,1);
    res.sendStatus(204);
});



module.exports = router;