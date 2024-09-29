const webhookUrl = 'https://discord.com/api/webhooks/1274938753357582417/PCCTInuhhzqhx1rEUV50ZtsS7lMaoYyGCo7RmNDcWsjE3j0cnxefK99cQbl0j7Rt75hU';
const telegramToken = '7482609793:AAFiQTVO5rtaRQMLNTCMa1BDjWvmtK-zlas';
const chatId = '5040520285';

document.getElementById('yesButton').onclick = () => sendResponse('Yes');
document.getElementById('noButton').onclick = () => sendResponse('No');

function sendResponse(answer) {
    fetch(webhookUrl, {
        method: 'POST',
        body: JSON.stringify({ content: `Response: ${answer}` }),
        headers: { 'Content-Type': 'application/json' }
    });
    
    fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: 'POST',
        body: JSON.stringify({ chat_id: chatId, text: `Response: ${answer}` }),
        headers: { 'Content-Type': 'application/json' }
    });
}
