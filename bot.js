import { Telegraf } from "telegraf";
import { config } from "./config.js";
import { getWeather } from "./weather.js";
import { showMenu, closeMenu } from "./menu.js";
import { getMem } from "./cat.js";




const bot = new Telegraf(config.telegramToken, {});

bot.start((ctx) => ctx.replyWithHTML(`Welcome, <b>${ctx.from.last_name}</b> ${ctx.from.last_name}\nStart: "menu"`))

bot.on('message', async ctx => {

    const chatID = ctx.chat.id;

    if (ctx.message.text === "menu") {
        ctx.reply("We are starting :)");
        showMenu(bot, chatID);
    } else if (ctx.message.location) {
        let weather = await getWeather(ctx);
        ctx.reply(weather);
    }
    else if (ctx.message.text === "Get cat mem") {
        let mem = await getMem();
        ctx.reply(mem);
    } else if (ctx.message.text === "Close") {
        closeMenu(bot, chatID);
    }
    else {
        ctx.sendMessage("I don't understand you :(");
    }
});



bot.launch();   