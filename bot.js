const Discord = require('discord.js');
const client = new Discord.Client();
ot.on('ready', () => {//Toxic Codes
    console.log(`[Start] ${new Date()}`);//Toxic Codes
    console.log(`[INFO] ${bot.user.username}`)//Toxic Codes
    console.log(`[INFO] ${bot.users.size}`)
    console.log(`[INFO] ${bot.guilds.size}`)
    console.log(`[BOT] Auto Role `)
});
 
bot.on('guildMemberAdd', (member) => {//Toxic Codes
member.addRole(member.guild.roles.find('name', role));
});
client.login(process.env.NTI5NzE0ODgzOTk5MTcwNTcy.Dw1CZQ.Ld1V6qnGSzayakdxMl8urrdaRkw);
