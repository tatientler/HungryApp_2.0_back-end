import meals from "../models/mealSchema.js";

class MealController {
    static allMeals = (req, res) => {
        meals
            .find()
            .exec((error, meals) => {
                if (error) {
                    res.status(400).send({ message: `${error.message}` })
                } else {
                    res.status(200).json(meals)
                }
            })
    }

    static showMealsById = (req, res) => {
        const id = req.params.id
        meals
            .findById(id)
            .exec((error, meals) => {
                if (error) {
                    res.status(400).send({ message: `${error.message} - Id inválido` })
                } else {
                    res.status(200).send(meals)
                }
            })
    }

    static createMeal = (req, res) => {
        const restaurant = new meals(req.body)
        restaurant.save((error) => {
            if (error) {
                res.status(500).send({ message: `${error.message}` })
            } else {
                res.status(201).send(restaurant.toJSON())
            }
        })
    }

    static updateMeal = (req, res) => {
        const id = req.params.id
        console.log(id)
        meals.findByIdAndUpdate(id, { $set: req.body }, (error) => {
            if (error) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(200).send({ message: "Refeição atualizada com sucesso" })
            }
        })
    }

    static deleteMeal = (req, res) => {
        const id = req.params.id
        meals.findByIdAndDelete(id, (error) => {
            if (error) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(200).send({ message: "Refeição excluída com sucesso" })
            }
        })
    }
}

export default MealController
