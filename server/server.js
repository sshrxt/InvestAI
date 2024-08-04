import express from 'express'
import cors from 'cors'
import aiSummaryRouter from './routes/aiSummary.js'

const app = express()
const PORT = process.env.PORT || 8000

app.use(cors());
app.use(express.json());

app.use('/aiSummary', aiSummaryRouter)

app.all("*", (req, res) => {
    res.status(404);
})

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));