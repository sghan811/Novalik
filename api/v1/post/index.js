const express = require('express')
const passport = require('../utils/auth/local')
const send = require('../utils/send')

const {
    create
} = require('./controller')
const {
    post_upload
} = require('./middlewares')
const postRouter = express.Router();

postRouter.post('/upload', post_upload, create, send);

module.exports = postRouter