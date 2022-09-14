import express from "express";
import RestaurantController from "../controllers/restaurantController.js";

const router = express.Router()

router
    .get("/restaurants/all", RestaurantController.allRestaurants)
    .post("/restaurants/addMeal/:id", RestaurantController.addMealToRestaurant)
    .post("/restaurants/create", RestaurantController.createRestaurant)
    .get("/restaurants/:id", RestaurantController.showRestaurantsById)
    .patch("/restaurants/update/:id", RestaurantController.updateRestaurant)
    .delete("/restaurants/delete/:id", RestaurantController.deleteRestaurant)

export default router
