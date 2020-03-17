const Discord = require("discord.js");
const bot = new Discord.Client();

const TOKEN = "Njg3MzE5NTgzNjQ3OTg5NzYw.XmkMhg.j89Xf_oSBum18KunH3X25q8YDnE";
const PRE = "!";

bot.login(TOKEN);

bot.on("ready", () => {
	console.log("Hello there");
});

bot.on("message", msg => {
	if(msg.author.bot)
		return;

	if(!msg.content.startsWith(PRE))
		return;

	msg.reply("R U Peruano?");

	let args = msg.content.substring(PRE.length).split(" ");

	let cmd = args.shift().toLowerCase();

	try{

		delete require.cache[require.resolve(`./commands/${cmd}.js`)]

		let cmdScript = require(`./commands/${cmd}.js`);
		cmdScript.run(bot, msg, args);
	}catch (e) {console.log(e.stack);}

});