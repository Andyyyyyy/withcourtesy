require("dotenv").config();
const Telegraf = require("telegraf");
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on("inline_query", (ctx) => {
  let text = ctx.inlineQuery.query;
  let regex = /^(.*?), ?(.*)/;
  let match = regex.exec(text);

  let name = ctx.inlineQuery.from.first_name || ctx.inlineQuery.from.username;

  if (match == null) {
    ctx.answerInlineQuery([]);
    return;
  }

  result = [
    {
      type: "article",
      id: 1,
      title: "🇩🇪 M",
      description: `Lieber ${match[1]}...`,
      thumb_url: "",
      input_message_content: {
        message_text: `Lieber ${match[1]},\n${match[2]}\nGruß,\n${name}`,
      },
    },
    {
      type: "article",
      id: 2,
      title: "🇩🇪 F",
      description: `Liebe ${match[1]}...`,
      thumb_url: "",
      input_message_content: {
        message_text: `Liebe ${match[1]},\n${match[2]}\nGruß,\n${name}`,
      },
    },
    {
      type: "article",
      id: 3,
      title: "🇬🇧/🇺🇸",
      description: `Dear ${match[1]}...`,
      thumb_url: "",
      input_message_content: {
        message_text: `Dear ${match[1]},\n${match[2]}\nSincerely,\n${name}`,
      },
    },
  ];

  ctx.answerInlineQuery(result);
});

bot.launch();
