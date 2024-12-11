const quotes = [
  {
    id: 1,
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    id: 2,
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  {
    id: 3,
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    id: 4,
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
  {
    id: 5,
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    id: 6,
    quote: "The unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    id: 7,
    quote: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
  },
  {
    id: 8,
    quote: "I think, therefore I am.",
    author: "René Descartes",
  },
  {
    id: 9,
    quote: "Happiness depends upon ourselves.",
    author: "Aristotle",
  },
  {
    id: 10,
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
  },
  {
    id: 11,
    quote:
      "Those who are not looking for happiness are the most likely to find it.",
    author: "Kierkegaard",
  },
  {
    id: 12,
    quote:
      "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    author: "Buddha",
  },
  {
    id: 13,
    quote: "What doesn't kill us makes us stronger.",
    author: "Friedrich Nietzsche",
  },
  {
    id: 14,
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    id: 15,
    quote: "Not all those who wander are lost.",
    author: "J.R.R. Tolkien",
  },
  {
    id: 16,
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    id: 17,
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    id: 18,
    quote: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
  },
  {
    id: 19,
    quote:
      "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
    author: "Ralph Waldo Emerson",
  },
  {
    id: 20,
    quote: "I am not afraid... I was born to do this.",
    author: "Joan of Arc",
  },
];

const newQuoteButton = document.getElementById("new-quote");
newQuoteButton.addEventListener("click", getQuote);
function generateRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
}

window.addEventListener("load", function () {
  let bodyBackgroundColor = generateRandomColor();
  document.body.style.transition = "background-color 1.3s ease";

  document.body.style.backgroundColor = bodyBackgroundColor;

  let changeColorButton = document.getElementById("new-quote");
  changeColorButton.style.transition = "background-color 1.3s ease";
  changeColorButton.style.backgroundColor = bodyBackgroundColor;

  let changeColorTweet = document.getElementById("tweet-quote");
  changeColorTweet.style.transition = "background-color 1.3s ease";
  changeColorTweet.style.backgroundColor = bodyBackgroundColor;

  let textBox = document.getElementById("text");
  textBox.style.transition = "color 1.3s ease";
  textBox.style.color = bodyBackgroundColor;

  let autorBox = document.getElementById("author");
  autorBox.style.transition = "color 1.3s ease";
  autorBox.style.color = bodyBackgroundColor;

  let faElement = document.getElementById("fa");
  faElement.style.transition = "color 1.3s ease";
  faElement.style.color = bodyBackgroundColor;

  let authorMinus = document.getElementById("authorMinus");
  authorMinus.style.transition = "color 1.3s ease";
  authorMinus.style.color = bodyBackgroundColor;
});

let changeColorButtonn = document.getElementById("new-quote");
let changeColorTweet = document.getElementById("tweet-quote");
let textAutorBox = document.getElementById("text-autor-box");

changeColorButtonn.addEventListener("click", function () {
  let bodyBackgroundColor = generateRandomColor();
  document.body.style.transition = "background-color 1.3s ease";
  document.body.style.backgroundColor = bodyBackgroundColor;
  changeColorTweet.style.transition = "background-color 1.3s ease";
  changeColorTweet.style.backgroundColor = bodyBackgroundColor;
  changeColorButtonn.style.transition = "background-color 1.3s ease";
  changeColorButtonn.style.backgroundColor = bodyBackgroundColor;

  let textBox = document.getElementById("text");
  textBox.style.transition = "color 1.3s ease";
  textBox.style.color = bodyBackgroundColor;

  let autorBox = document.getElementById("author");
  autorBox.style.transition = "color 1.3s ease";
  autorBox.style.color = bodyBackgroundColor;

  let faElement = document.getElementById("fa");
  faElement.style.transition = "color 1.3s ease";
  faElement.style.color = bodyBackgroundColor;

  let authorMinus = document.getElementById("authorMinus");
  authorMinus.style.transition = "color 1.3s ease";
  authorMinus.style.color = bodyBackgroundColor;
});

document.addEventListener("DOMContentLoaded", getQuote);

function getQuote() {
  let randomNumebr = 1;
  if (Math.floor(Math.random() * 20) === 0) {
    randomNumebr = 1;
  } else {
    randomNumebr = Math.floor(Math.random() * 20);
  }

  const quoteId = quotes[randomNumebr];
  const quoteText = quoteId.quote;
  const quoteAuthor = quoteId.author.replace(/, type\.fit$/, "");
  const quoteTextElement = document.getElementById("text");
  const quoteAuthorElement = document.getElementById("author");
  const faElement = document.getElementById("fa");
  const authorMinus = document.getElementById("authorMinus");

  //TEXT
  quoteTextElement.classList.remove("fade-in-text");
  void quoteTextElement.offsetWidth;
  quoteTextElement.textContent = quoteText;
  quoteTextElement.classList.add("fade-in-text");

  //AUTHOR
  quoteAuthorElement.classList.remove("fade-in-animation");
  quoteAuthorElement.textContent = quoteAuthor;
  void quoteAuthorElement.offsetWidth;
  quoteAuthorElement.classList.add("fade-in-animation");

  //FA Element
  faElement.classList.remove("fade-in-animation");
  void faElement.offsetWidth;
  faElement.classList.add("fade-in-animation");

  //MINUS
  authorMinus.classList.remove("fade-in-animation");
  void authorMinus.offsetWidth;
  authorMinus.classList.add("fade-in-animation");
}
