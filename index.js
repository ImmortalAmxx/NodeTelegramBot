const TelegramBot = require('node-telegram-bot-api');

// Ваш токен бота, який ви отримали від BotFather
const token = process.env.TELEGRAM_BOT_TOKEN; // Змінна середовища з токеном

// Створюємо бота
const bot = new TelegramBot(token, { polling: false });

// Встановлення веб-хука для Telegram
const webhookUrl = 'https://your-vercel-app-url.now.sh'; // Замініть на свій URL
bot.setWebHook(`${webhookUrl}/bot${token}`);

// Обробник подій для команди /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привіт, я бот! Введіть /help для довідки.');
});

// Обробник подій для команди /help
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Це довідка для бота.');
});

// Додайте інші обробники подій за потреби

console.log('Бот запущений');
