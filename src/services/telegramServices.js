const axios = require("axios");

const sendTelegramMessage = async (message) => {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const response = await axios.post(url, {
      chat_id: chatId,
      text: message,
    });

    console.log("Message sent successfully:", response.data);
  } catch (error) {
    console.error("Error sending message:", error.response?.data || error.message);
  }
};

module.exports = { sendTelegramMessage };