import express from 'express'
import cors from 'cors'
import db from './src/config/dbConnect.js'
import chalk from 'chalk'

import userRoutes from './src/routes/userRoutes.js'
import restaurantRoutes from './src/routes/restaurantRoutes.js'
import mealRoutes from './src/routes/mealRoutes.js'

const PORT = process.env.PORT || 3000
const app = express()

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


//Localhost Connection
app.listen(PORT, () => {
    console.log(chalk.bgCyan(`    
    Servidor local rodando na porta ${PORT}`))
})

//MongoDB Atlas Connection
db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
    console.log(chalk.bgCyan(`    MondoDB Atlas conectado
    `))
})
