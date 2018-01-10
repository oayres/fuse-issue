import { Server } from 'http'
import chalk from 'chalk'
import app from './app'

const server = new Server(app)

server.listen(4445, err => {
  if (err) {
    return console.error(chalk.bgRed.bold(`👎  ${err}`))
  }
  console.info(chalk.bgGreen.bold(`👍  Server launched at: localhost:4445`))
})
