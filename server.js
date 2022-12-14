import express from 'express'
import cors from 'cors'
import db from './src/config/dbConnect.js'

import userRoutes from './src/routes/userRoutes.js'
import restaurantRoutes from './src/routes/restaurantRoutes.js'
import mealRoutes from './src/routes/mealRoutes.js'

const PORT = process.env.PORT || 3000
const app = express()

//Localhost Connection
app.listen(PORT, () => {
    console.log(`    
    Servidor local rodando na porta ${PORT}`)
})

//Routes
const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Conectado')
    })

    app.use(
        express.json(),
        cors(),
        userRoutes,
        restaurantRoutes,
        mealRoutes
    )
}

routes(app)



//MongoDB Atlas Connection
db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
    console.log(`    MondoDB Atlas conectado
    `)
})
