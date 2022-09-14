import mongoose from "mongoose";
import meals from "./mealSchema.js";

const restaurantSchema = new mongoose.Schema(
    {
        id: mongoose.Schema.Types.ObjectId,
        createdAt: {
            type: Date,
            default: new Date()
        },
        name: {
            type: String, 
            required: true
        },
        avatar: {
            type: String, 
        },
        rating: {
            type: Number, 
            
        },
        address: {
            type: String, 
        },
        phone: {
            type: String, 
        },
        backgroundImage: {
            type: String, 
        },
        meals: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'meals'
        }]
    }
)

const restaurants = mongoose.model('restaurants', restaurantSchema)

export default restaurants
