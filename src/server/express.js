import express from "express"
import path from "path"

const server = express()

const webpack = require("webpack")
const config = require("../../config/webpack.dev")
const compiler = webpack(config)

const webpackDevMiddleware = 
require("webpack-dev-middleware")(
    compiler,
    config.devServer
)

const webpackhotMiddleware =
require("webpack-hot-middleware")(compiler)

server.use(webpackDevMiddleware)
server.use(webpackhotMiddleware)

const staticMiddleware = express.static("dist")
server.use(staticMiddleware)

server.listen(3010, ()=>{
    console.log("Server is listening")
})