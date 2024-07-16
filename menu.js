import { request, text } from "express"
import { keyboard, removeKeyboard } from "telegraf/markup"

export const showMenu = (bot, chatID) => {
    bot.telegram.sendMessage(chatID, "Choose action", {
        reply_markup: {
            keyboard: [
                [
                    {
                        text: "Check the weather",
                        request_location: true

                    }
                ],
                ["Get cat mem"],
                ["Close"]
            ]
        }
    })
}

export const closeMenu = (bot, chatID) => {
    bot.telegram.sendMessage(chatID, "Keyboard close", {
        reply_markup: {
            remove_keyboard: true
        }
    });
}