import { Telegraf } from "telegraf";
import { config } from "./config.js";
import { getWeather } from "./weather.js";
import { showMenu, closeMenu } from "./menu.js";
import { getMem } from "./cat.js";




const bot = new Telegraf(config.telegramToken, {});

bot.start((ctx) => ctx.replyWithHTML(`Welcome, <b>${ctx.from.last_name}</b> ${ctx.from.last_name}\nStart: "menu"`))

bot.on('message', (ctx) => {
    ctx.reply("We are starting :)")
    const chatID = ctx.chat.id;

    if (ctx.message.text === "menu") {
        showMenu(bot, chatID);
    } else if (ctx.message.location) {
        getWeather();
    } else if (ctx.message.text === "get cat mem") {
        getMem();
    } else { closeMenu(bot, chatID); }
});



bot.launch();   