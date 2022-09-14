import restaurants from '../models/restaurantSchema.js'

class RestaurantController {
    static allRestaurants = (req, res) => {
        restaurants
            .find()
            .populate('meals')
            .exec((error, restaurants) => {
                if (error) {
                    res.status(400).send({ message: `${error.message}` })
                } else {
                    res.status(200).json(restaurants)
                }
            })
    }

    static showRestaurantsById = (req, res) => {
        const id = req.params.id
        restaurants
            .findById(id)
            .populate('meals')
            .exec((error, restaurants) => {
                if (error) {
                    res.status(400).send({ message: `${error.message} - Id inválido` })
                } else {
                    res.status(200).send(restaurants)
                }
            })
    }

    static createRestaurant = (req, res) => {
        const restaurant = new restaurants(req.body)
        restaurant.save((error) => {
            if (error) {
                res.status(500).send({ message: `${error.message}` })
            } else {
                res.status(201).send(restaurant.toJSON())
            }
        })
    }

    static updateRestaurant = (req, res) => {
        const id = req.params.id
        console.log(id)
        restaurants.findByIdAndUpdate(id, { $set: req.body }, (error) => {
            if (error) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(200).send({ message: "Restaurante atualizado com sucesso" })
            }
        })
    }

    static deleteRestaurant = (req, res) => {
        const id = req.params.id
        restaurants.findByIdAndDelete(id, (error) => {
            if (error) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(200).send({ message: "Restaurante excluído com sucesso" })
            }
        })
    }

    static addMealToRestaurant = (req, res) => {
        restaurants.findOneAndUpdate(
            {_id: req.params.id},
            {$push: {meals: req.body.meals}},
            )
            .exec((error) => {
                if(error) {
                    res.status(400).send({message: `${error.message}`})
                } else {
                    res.status(200).send('Refeição adiconada com sucesso.')
                }
            })
    }

    
}

export default RestaurantController
