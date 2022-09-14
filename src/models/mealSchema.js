import mongoose from "mongoose";

const mealSchema = new mongoose.Schema(
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
        description: {
            type: String
        },
        price: {
            type: Number
        }
    }
)

const meals = mongoose.model('meals', mealSchema)

export default meals
