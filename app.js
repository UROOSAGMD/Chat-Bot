 function chatBot(input) {
    let output = "";
    input = input.toLowerCase();

    if (input.includes("hello") || input.includes("hey") || input.includes("hi")) {
        output = "Hello nice to meet you!";
    } else if (input.includes("how are you")) {
        output = "I am doing fine! Thank you for asking.";
    } else if (input.includes("what is your name")) {
        output = "My name is Gamini and I am a chatbot.";
    } else if (input.includes("what can you do")) {
        output = "I can chat with you and answer simple questions.";
    } else {
        output = "Sorry, I don't understand that. Please try something else.";
    }

    return output;
}

// USER MESSAGE 
function displayUserMessage(message) {
    var chatArea = document.getElementById("chatArea");
    var userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    userMessage.textContent = "You: " + message;
    chatArea.appendChild(userMessage);
    chatArea.scrollTop = chatArea.scrollHeight;
}

// BOT MESSAGE
function displayBotMessage(message) {
    var chatArea = document.getElementById("chatArea");
    var botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    botMessage.textContent = "Bot: " + message;
    chatArea.appendChild(botMessage);
    chatArea.scrollTop = chatArea.scrollHeight;
}

function sendMessage() {
    var inputField = document.getElementById("input");
    var input = inputField.value.trim();

    if (input) {
        displayUserMessage(input);
        var output = chatBot(input);

        setTimeout(function () {
            displayBotMessage(output);
        }, 1000);

        inputField.value = "";
    }
}

document.getElementById("send").addEventListener("click", sendMessage);

document.getElementById("input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
