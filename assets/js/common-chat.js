// Dynamic Chats
(function () {
  const msgerForm = get(".msger-inputarea");
  const msgerInput = get(".msger-input");
  const msgerChat = get(".msger-chat");

  const BOT_MSGS = ["Hi, how are you?", "Ohh... I can't understand what you trying to say. Sorry!", "I like to play games... But I don't know how to play!", "Sorry if my answers are not relevant. :))", "I feel sleepy! :("];

  const BOT_IMG = "./assets/images/dashboard/user/13.jpg";
  const PERSON_IMG = "./assets/images/dashboard-11/user/10.jpg";
  const BOT_NAME = "Shepherd Doyle";
  const PERSON_NAME = "Alden Barker";

  msgerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const msgText = msgerInput.value;
    if (!msgText) return;

    appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
    msgerInput.value = "";

    botResponse();
  });

  function appendMessage(name, img, side, text) {
    const msgHTML = `
      <div class="msg ${side}-msg">
        <div class="msg-img" style="background-image: url(${img})"></div>
  
        <div class="msg-bubble">
          <div class="msg-info">
            <div class="msg-info-name">${name}</div>
            <div class="msg-info-time">${formatDate(new Date())}</div>
          </div>
  
          <div class="msg-text">${text}</div>
        </div>
      </div>
    `;

    msgerChat.insertAdjacentHTML("beforeend", msgHTML);
    msgerChat.scrollTop += 500;
  }

  function botResponse() {
    const r = random(0, BOT_MSGS.length - 1);
    const msgText = BOT_MSGS[r];
    const delay = msgText.split(" ").length * 100;

    setTimeout(() => {
      appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
    }, delay);
  }
  function get(selector, root = document) {
    return root.querySelector(selector);
  }

  function formatDate(date) {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();

    return `${h.slice(-2)}:${m.slice(-2)}`;
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const add_To_Favorites = document.querySelectorAll(".add-favorites");

  add_To_Favorites.forEach(function (svg) {
    svg.addEventListener("click", function () {
      svg.classList.toggle("active");
    });
  });
})();
