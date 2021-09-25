const mineflayer = require('mineflayer')
require('dotenv').config()
const options = {
  username: process.env.USERNAME,
  auth: 'microsoft',
  host: process.env.HOST,
  port: parseInt(process.env.PORT)
}

const bot = mineflayer.createBot(options)
bot.once('spawn', () => {
  console.log('LOGGED IN')
  bot.chat(process.env.JOINMSG ? process.env.JOINMSG : 'afk bot : \'help\' for help')
  console.log(bot.scoreboard.list)

  console.log('[Debug] Logged in as user: [' + bot._client.username + ']')
})
bot.on('chat', (username, message) => {
  console.log('u:' + username + ' m: ' + message)
  if (username === bot.username) return
  switch (message) {
    case process.env.SLEEPCOMMAND:
      bot.end()
      console.log('leave command rejoining')
      break
    case process.env.HELPCOMMAND:
      bot.chat('sleep => leave and join')
      break

    case process.env.STATSCOMMAND:
      bot.chat('stats:')
      bot.chat('This world was loaded for  ' + Math.floor((bot.time.age / 20 / 60)) + ' minutes or ' + bot.time.age / 20 / 60 / 60 / 24 + ' days.')
      break
  }
})
bot.on('kicked', console.log)
bot.on('error', console.log)
function checkNight () {
  console.log('checking for night.')
  if (bot.time.timeOfDay > 12541) {
    bot.chat('You can sleep now.')
    console.log('beds can be used now')
  }
}
bot.on('playerLeft', (player) => {
  // eslint-disable-next-line eqeqeq
  if (process.env.GOODBYEMSG == undefined) { return }
  console.log(player.username + 'left')
  bot.chat(player.displayName + process.env.GOODBYEMSG)
})
if (process.env.NIGHTCHECK === true) {
  setInterval(checkNight, 60 * 1000)
}
