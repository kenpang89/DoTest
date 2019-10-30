/**
 * Module dependencies.
 */
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
const whitelist = () => {
    return ['http://localhost:8080', 'http://localhost:8888']
}

const corsOptions = {
    allowedHeaders: ['Origin', 'Content-Type', 'Accept', 'Authorization'],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    preflightContinue: true,
    origin: (origin, callback) => {
        if (whitelist().indexOf(origin) !== -1 || process.env.NODE_ENV === 'test' || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};
app.use(cors(corsOptions));
app.set('env', 'development');
app.set('host', '127.0.0.1');
app.set('port', 3000);
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '10mb'
}));

/**
 * APIs
 */
app.get('/api/user/:userId/profile', (req, res) => {
    return res.status(200).json({
        id: '12',
        avatar: 'https://justice.org.au/wp-content/uploads/2017/08/avatar-icon.png',
        firstName: 'Ken',
        lastName: 'Pang',
        followers: '3',
        followedByMe: true
    });
});
app.post('/api/user/:userId/follow', (req, res) => {
    return res.status(200).json({
        success: true,
        followedByMe: true
    });
});
app.post('/api/user/:userId/unfollow', (req, res) => {
    return res.status(200).json({
        success: true,
        followedByMe: false
    });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.sendStatus(401);
    }
});
module.exports = app;
