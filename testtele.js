require('dotenv').config();
const { sendTelegramMessage } = require('./src/services/telegramServices');

const testmessage = "hello i am sujal";
sendTelegramMessage(testmessage);