import express from 'express';
import cors from 'cors';
import { handicapIndex } from './handicap.js';

const PORT = 5888;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

app.post('/handicap', async (req, res) => {
    const rounds = req.body.rounds;

    if (!rounds) {
        return res.status(400).json({
            error: "No rounds send in request"
        })
    }

    if (rounds.length > 20) {
        return res.status(400).json({
            error: "Limit to last 20 chronological rounds"
        })
    }

    if (rounds.length < 3) {
        return res.status(400).json({
            error: "Not enough rounds to calculate handicap"
        })
    }

    const handicap = handicapIndex(rounds)

    return res.status(200).json({'Handicap': handicap})
})