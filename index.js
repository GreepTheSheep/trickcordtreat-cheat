const Discord = require('discord.js')
const client = new Discord.Client()
const {token, selectedGuilds} = require('./config.json')
const findInMessage = require('./embed-find.js')
client.login(token)

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}\nTrick'cord Treat, Let's fight!`)
    if (selectedGuilds == "any"){
        var selectedGuilds = []
        client.guilds.forEach(g=>{
            selectedGuilds.push(g.id)
        })
    }
})

client.on('message', message => {
    if (message.author.id == '755580145078632508'){
        if (selectedGuilds.includes(message.guild.id)){
            if (findInMessage(message, 'h!trick')){
                console.log('h!trick found on server: ' + message.guild.name)
                message.channel.send('h!trick')
            } else if (findInMessage(message, 'h!treat')){
                console.log('h!treat found in server: ' + message.guild.name)
                message.channel.send('h!treat')
            }
        }  
    }
})