module.exports.config = {
  name: "اوامر",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MrTomXxX",
  description: "Beginner's Guide",
  commandCategory: "Command list",
  usages: "[Module type]",
  cooldowns: 5,
  envConfig: {
    autoUnsend: true,
    delayUnsend: 60
  }
};

module.exports.handleEvent = function ({ api, event, args }) {
    const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
  const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Dhaka").format("D/MM/YYYY || HH:mm:ss");
    var thu = moment.tz('Asia/Dhaka').format('dddd');
     if (thu == 'Sunday') thu = 'Sunday'
  if (thu == 'Monday') thu = 'Monday'
  if (thu == 'Tuesday') thu = 'Tuesday'
  if (thu == 'Wednesday') thu = 'Wednesday'
  if (thu == "Thursday") thu = 'Thursday'
  if (thu == 'Friday') thu = 'Friday'
  if (thu == 'Saturday') thu = 'Saturday'
  const timeStart = Date.now();
	let today = new Date();
    const { commands } = global.client;
    const { threadID, messageID, body } = event;
    if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
    const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
    if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
    const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
    const command = commands.get(splitBody[1].toLowerCase());
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
        return axios.get('https://apimyjrt.nguyenhaidang.ml/loli.php').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let callback = function () {
    
          api.sendMessage({body:`
╭────────╮\n ${command.config.name}\n╰────────╯

●▬▬▬▬๑۩۩๑▬▬▬▬●

» 📜يصف: ${command.config.description}
» 🧞ائتمان: ${command.config.credits}
» 📄تعليمات الاستخدام: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : "لا توجد تعليمات محددة حتى الآن"}
» 🌟تنتمي إلى المجموعة: ${command.config.commandCategory}
» ⏱وقت الانتظار: ${command.config.cooldowns}
» 👥قوة: ${((command.config.hasPermssion == 0) ? `مستخدم` : (command.config.hasPermssion == 1) ? `مسؤول المجموعة` : `مسؤول بوت`)}
💥💢💥 تشغيل بواسطة ZINO 💥💢💥

●▬▬▬▬๑⇩⇩๑▬▬▬▬●

[⚜️] وقت [⚜️]
${thu} || ${gio}`, 
            attachment: fs.createReadStream(__dirname + `/cache/4723.${ext}`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/4723.${ext}`), event.messageID);
        }; request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/4723.${ext}`)).on("close", callback);
     });
}

module.exports.run = function({ api, event, args }) {
    const axios = require('axios');
    const request = require('request');
    const fs = require("fs-extra");
   const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Dhaka").format("D/MM/YYYY || HH:mm:ss");
    var thu = moment.tz('Asia/Dhaka').format('dddd');
     if (thu == 'Sunday') thu = 'Sunday'
  if (thu == 'Monday') thu = 'Monday'
  if (thu == 'Tuesday') thu = 'Tuesday'
  if (thu == 'Wednesday') thu = 'Wednesday'
  if (thu == "Thursday") thu = 'Thursday'
  if (thu == 'Friday') thu = 'Friday'
  if (thu == 'Saturday') thu = 'Saturday'
  const timeStart = Date.now();
	let today = new Date();
    const { commands } = global.client;
    const { threadID, messageID } = event;
    const command = commands.get((args[0] || "").toLowerCase());
    const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
    const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
  
  if (args[0] == "all") {
    const command = commands.values();
    var group = [], msg = "";
    for (const commandConfig of command) {
      if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
      else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
    }
    group.forEach(commandGroup => msg += `[⚜️] ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)} [⚜️]\n${commandGroup.cmds.join(' ⁜ ')}\n\n`);
    return axios.get('https://apimyjrt.nguyenhaidang.ml/loli.php').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let callback = function () {
        api.sendMessage({ body:`[⚜️] قائمة الطلبات [⚜️]\n●▬▬▬▬๑☣️๑▬▬▬▬●\n\n` + رسالة + `●▬▬▬▬๑☢️๑▬▬▬▬●\n\n🏰🏰🏰 حاليا لديك: ${commands.size} الأوامر في هذا الروبوت.\🤖الصبي ومالك النص هو زينو.\n[💟] استمتع بخدمة  Luna Bot الخاصة بي. 
[❗]\🔰 يرجى عدم إرسال بريد عشوائي إلى برنامجي الآلي. 
وإلا فإنه سيتم حظرك. 
[❗]\📣سيتم إزالة هذه الرسالة بعد𝟞𝟘دقيقة 🏯🏯🏯\n\n●▬▬▬▬๑💛๑▬▬▬▬●\n\n[⚜️] وقت [⚜️]\n${thu} || ${gio}`, 
            attachment: fs.createReadStream(__dirname + `/cache/472.${ext}`)
        }, event.threadID, (err, info) => {
        fs.unlinkSync(__dirname + `/cache/472.${ext}`);
        if (autoUnsend == true) {
            setTimeout(() => { 
                return api.unsendMessage(info.messageID);
            }, delayUnsend * 30000);
        }
        else return;
    }, event.messageID);
        }
         request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/472.${ext}`)).on("close", callback);
     })
};
if (!command) {
    const commandsPush = [];
    const page = parseInt(args[0]) || 1;
    const pageView = 10;
    let i = 0;
    let msg = "[⚜️] قائمة الطلبات [⚜️]\n●▬▬▬▬๑☣️๑▬▬▬▬●\n\n";
    for (var [name, value] of (commands)) {
        name += `
» يصف: ${value.config.description}
» وقت الانتظار: ${value.config.cooldowns}s
» المبرمج: ${value.config.credits}
» قوة: ${((value.config.hasPermssion == 0) ? `مستخدم` : (value.config.hasPermssion == 1) ? `مدراء المجموعة` : `BOT إدارة`)}\n\n●▬▬▬▬๑🔱๑▬▬▬▬●\n`;
        commandsPush.push(name);
    }

    commandsPush.sort((a, b) => a.data - b.data);

    const first = pageView * page - pageView;
    i = first;
    const helpView = commandsPush.slice(first, first + pageView);

    for (let cmds of helpView)
        msg += `[⚜️] ${++i} [⚜️] ${cmds}\n`;
    const cmdsView = `
📝 صفحة ${page}/${Math.ceil(commandsPush.length/pageView)}
✅ حاضِر ${commandsPush.length} أمر قابل للاستخدام
🚀 Type ${prefix}help <command name> for more details about that command
🍁 Use ${prefix}help all to see all\n\n●▬▬▬▬๑💛๑▬▬▬▬●\n\n[⚜️] وقت [⚜️]\n${thu} || ${gio}`;
    return axios.get('https://apimyjrt.nguyenhaidang.ml/loli.php').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let callback = function () {
        api.sendMessage({body: msg + cmdsView, attachment: fs.createReadStream(__dirname + `/cache/478.${ext}`)
        }, event.threadID, (err, info) => {
        fs.unlinkSync(__dirname + `/cache/478.${ext}`);
        if (autoUnsend == true) {
            setTimeout(() => { 
                return api.unsendMessage(info.messageID);
            }, delayUnsend * 30000);
        }
        else return; 
        }, event.messageID);
    }
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/478.${ext}`)).on("close", callback);
     })
};
return axios.get('https://apimyjrt.nguyenhaidang.ml/loli.php').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let callback = function () {
        api.sendMessage({body:`
╭────────╮\n ${command.config.name}\n╰────────╯

●▬▬▬▬๑۩۩๑▬▬▬▬●

» 📜يصف: ${command.config.description}
» 🧞ائتمان: ${command.config.credits}
» 📄تعليمات الاستخدام: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : "No specific instructions yet"}
» 🌟تنتمي إلى المجموعة: ${command.config.commandCategory}
» ⏱وقت الانتظار: ${command.config.cooldowns}
» 👥قوة: ${((command.config.hasPermssion == 0) ? `User` : (command.config.hasPermssion == 1) ? مسؤول المجموعة` : `مسؤول BOT`)}
💥💢💥 Bot Luna 💥💢💥

●▬▬▬▬๑⇩⇩๑▬▬▬▬●

[⚜️] وقت [⚜️]
${thu} || ${gio}`,
        attachment: fs.createReadStream(__dirname + `/cache/475.${ext}`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/475.${ext}`), event.messageID);
        }; request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/475.${ext}`)).on("close", callback);
     })
};
