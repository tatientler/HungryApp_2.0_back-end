import express from "express";
import MealController from "../controllers/mealController.js";

const router = express.Router()

router
    .get("/meals/all", MealController.allMeals)
    .post("/meals/create", MealController.createMeal)
    .get("/meals/update/:id", MealController.updateMeal)
    .delete("/meals/delete/:id", MealController.deleteMeal)

export default router
