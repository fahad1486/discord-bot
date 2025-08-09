import 'dotenv/config';
import { Client, GatewayIntentBits, Partials, Events } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Message, Partials.Channel, Partials.GuildMember],
});

client.once(Events.ClientReady, (c) => {
  console.log(`✅ Logged in as ${c.user.tag}`);
});

client.on(Events.MessageCreate, (msg) => {
  if (msg.author.bot) return;
  if (msg.content.toLowerCase() === '!ping') {
    msg.reply('Pong! 🏓');
  }
});

client.login(process.env.DISCORD_TOKEN);
