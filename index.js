const Discord = require('discord.js')
const client = new Discord.Client()
const {token, selectedGuilds, delay} = require('./config.json')
const findInMessage = require('./embed-find.js')
const wait = require('util').promisify(setTimeout);
client.login(token)

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}\nTrick'cord Treat, Let's fight!`)
    if (selectedGuilds == "any" || !selectedGuilds){
        selectedGuilds = []
        client.guilds.forEach(g=>{
            selectedGuilds.push(g.id)
        })
    }
})

client.on('message', async message => {
    if (message.author.id == '755580145078632508'){
        if (selectedGuilds.includes(message.guild.id)){
            if (findInMessage(message, 'h!trick')){
                console.log('h!trick found on server: ' + message.guild.name)
                await wait(100)
                message.channel.startTyping()
                await wait(delay)
                message.channel.send('h!trick')
                .then(m=>message.channel.stopTyping(true))
            } else if (findInMessage(message, 'h!treat')){
                console.log('h!treat found in server: ' + message.guild.name)
                await wait(100)
                message.channel.startTyping()
                await wait(delay)
                message.channel.send('h!treat')
                .then(m=>message.channel.stopTyping(true))
            }
        }  
    }
})