const dotenv = require('dotenv');
dotenv.config(); // ✅ FIRST

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Load Routes
const chatbotRoutes = require('./routes/chatbot');
const progressRoutes = require('./routes/progress');
const userRoutes = require('./routes/user.routes');
const surveyRoutes = require('./routes/survey.routes');
const contactRoutes = require('./routes/contact.routes');
const authRoutes = require('./routes/auth');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use('/api/chatbot', chatbotRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/users', userRoutes);
app.use('/api/surveys', surveyRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
