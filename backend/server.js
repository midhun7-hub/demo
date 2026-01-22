const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/task', taskRoutes);
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


app.get('/api', (req, res) => {
    res.send('Hello World!');
});

app.post('/api', (req, res) => {
    const temp=req.body;
    res.send(temp);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});