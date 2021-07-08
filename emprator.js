const Discord = require("discord.js");
const emprator = new Discord.Client({disableEveryone: true})



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
  console.log(`Logged in as ${emprator.user.tag}!`);
});

emprator.on("message", msg => {
  if (msg.content === "Slaw reklam ") {
    msg.reply("**tkaiia rawasta takU wlammt dadretaua kissing_cat: ");
  }
}); 


emprator.on("ready", () => {
  console.log(`Logged in as ${emprator.user.tag}!`);
});

emprator.on("message", msg => {
  if (msg.content === "سلاو رێکلام ") {
    msg.reply("**تکایە راوەستە تاکوو وڵام دەدرێیتەوە kissing_cat: ");
  }
}); 



emprator.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(`  https://discord.gg/kq4KWJnBaw`) ///Link Server Never ///E M P R A T O R#2419 
    
  client.channels.get("ID Channel").send(
`> EMPRTOR Up | By: <@${message.author.id}> 
${message.content}`)
}
    }
        })

///////////////@E M P R A T O R#2419

emprator.on('ready', () => {
console.log(`ON ${emprator.guilds.size} Servers`);
console.log(`Logged in as ${emprator.user.tag}!`);
emprator.user.setGame(`Send Me Linke Your Server | EMPRATOR Up`) 
});



emprator.login("");///E M P R A T O R#2419 ///Token
