const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 3001;

const blogController = require('./controller/blog');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/blogCollection', { useNewUrlParser: true })
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connection to MongoDB:', error.message)
    })

app.use(express.json());
app.use(cors());
app.use('/blog', blogController);


app.get('/', (req, res) => {
    res.send('Welcome back guys!!');
});

app.post('/data', (req, res) => {
    console.log("response--> ", req.body);
    res.json(req.body);
})


const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint);

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
});