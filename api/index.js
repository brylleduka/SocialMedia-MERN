const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

dotenv.config();

const hostname = process.env.HOST;

// MongoDb Connecttion
const port = process.env.PORT || 8800;
const mongoHost = process.env.MONGODB_HOST;
const mongoPort = process.env.MONGODB_PORT;
const mongoDbName = process.env.MONGODB_NAME;
const connectionString = `mongodb://${mongoHost}:${mongoPort}/${mongoDbName}`;

mongoose.connect(connectionString, { useNewUrlParser: true }, () => {
	console.log('MongoDB Connected');
});

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);

app.listen(port, () => {
	console.log(`Server is listening at http://${hostname}:${port}`);
});
