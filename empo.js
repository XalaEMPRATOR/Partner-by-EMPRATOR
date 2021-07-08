const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})



emprator.on('message', message => { 

if (!message.guild) return; 

if (message.content === 'setup') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**Please you go to the voice🐱**'); 

} 

} 

});

emprator.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

emprator.on("message", msg => {
  if (msg.content === "Slaw reklam ") {
    msg.reply("**tkaiia rawasta takU wlammt dadretaua kissing_cat: ");
  }
}); 


emprator.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

emprator.on("message", msg => {
  if (msg.content === "سلاو رێکلام ") {
    msg.reply("**تکایە راوەستە تاکوو وڵام دەدرێیتەوە kissing_cat: ");
  }
}); 


emprator.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(`  https://discord.gg/kq4KWJnBaw`) ///Link Server Never ///RaWeN
    
  emprator.channels.get("ID Channel").send(
`> RaWeN Up | By: <@${message.author.id}> 
${message.content}`)
}
    }
        })




emprator.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Send Me Linke Your Server | RaWeN Up`) 
});




emprator.login("");///RaWeN ///Token