const express = require('express')
const app = express();
const port = 3000
const Discord = require('discord.js');
const config = require('./config.json')
const client = new Discord.Client();
app.get('/', (req, res) => res.send('Please connect me into a hosting website to enable 24/7 hosting. ItzNexus#5354'))

app.listen(port, () =>
console.log(`Creator: ItzNexus`)
);
const { MessageButton, MessageActionRow } = require('discord-buttons'); 
require('discord-buttons')(client);

client.on("message", (message) => {
if (message.content !== `${config.command}`) return;
  const embed = new Discord.MessageEmbed()
  .setTitle("Verify")
  .setDescription("To verify in this server, please verify by clicking the button below.")
  .setColor('#2f3136')
  .setFooter('Verification System | ItzNexus')
  
  let verify = new MessageButton()
   .setLabel("Verify")
   .setStyle("blurple")
   .setEmoji("✅")
   .setID("Verify")


  message.channel.send({
    button: verify,
    embed: embed 
  });
})

client.on("ready", () => {
    client.user.setActivity("Verification Manager | ItzNexus")
})

client.on('clickButton', async (button) => {
    if (button.id !== "Verify") return;
    button.reply.send('You are now sucessfully verified.', true)
    const role = button.guild.roles.cache.get(`${config.roleID}`)
    const member = button.clicker.member
    await member.roles.add(role)
})

client.login(process.env.TOKEN)