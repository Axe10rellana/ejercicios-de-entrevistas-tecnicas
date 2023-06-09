//variables
const userMessageInputForm = document.getElementById("userMessageInputForm");
const messageUlElement = document.getElementById("message");
const capitalizeButton = document.getElementById("capitalizeButton");
const inputMessage = document.getElementById("inputMessage");

//funciones
const createMessageElement = (message) => {
  let messageLi = document.createElement("li");
  messageLi.className = "user-message";
  let messageTextElement = document.createTextNode(message);
  messageLi.appendChild(messageTextElement);
  return messageLi;
};

const clearInput = () => inputMessage.value = "";

const messageToCapitalizeWithClass = () => {
  let allUserMessage = document.getElementsByClassName("user-message");
  for (let i = 0; i < allUserMessage.length; i++) {
    let textMessage = allUserMessage[i].textContent;
    allUserMessage[i].textContent = textToCapitalize(textMessage);
  }
};

const upperFirstChar = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const textToCapitalize = (text) => {
  let wordText = text.trim().split(" ");
  wordText = wordText.map((word) => upperFirstChar(word));
  return wordText.join(" ");
};

//eventos
userMessageInputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let formDataElement = new FormData(e.target);
  let userInputValue = formDataElement.get("inputMessage");
  let messageLi = createMessageElement(userInputValue);
  messageUlElement.appendChild(messageLi);
  clearInput();
});

capitalizeButton.addEventListener("click", () => messageToCapitalizeWithClass());
