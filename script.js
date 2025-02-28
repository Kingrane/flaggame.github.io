const flags = [
  { name: "Россия", image: "https://flagcdn.com/w320/ru.png" },
  { name: "США", image: "https://flagcdn.com/w320/us.png" },
  { name: "Германия", image: "https://flagcdn.com/w320/de.png" },
  { name: "Франция", image: "https://flagcdn.com/w320/fr.png" },
  { name: "Иран", image: "https://flagcdn.com/w320/ir.png" },
  { name: "Израиль", image: "https://flagcdn.com/w320/il.png" },
  { name: "Китай", image: "https://flagcdn.com/w320/cn.png" },
  { name: "Япония", image: "https://flagcdn.com/w320/jp.png" },
  { name: "Индия", image: "https://flagcdn.com/w320/in.png" },
  { name: "Бруней", image: "https://flagcdn.com/w320/bn.png" },
  { name: "Кения", image: "https://flagcdn.com/w320/ke.png" },
  { name: "Албания", image: "https://flagcdn.com/w320/al.png" },
  { name: "Индонезия", image: "https://flagcdn.com/w320/id.png" },
  { name: "Польша", image: "https://flagcdn.com/w320/pl.png" },
  { name: "Аргентина", image: "https://flagcdn.com/w320/ar.png" },
  { name: "Панама", image: "https://flagcdn.com/w320/pa.png" },
  { name: "Уругвай", image: "https://flagcdn.com/w320/uy.png" },
  { name: "Лаос", image: "https://flagcdn.com/w320/la.png" },
  { name: "Пакистан", image: "https://flagcdn.com/w320/pk.png" },
  { name: "ОАЭ", image: "https://flagcdn.com/w320/ae.png" },
  { name: "Йемен", image: "https://flagcdn.com/w320/ye.png" },
  { name: "Сирия", image: "https://flagcdn.com/w320/sy.png" },
  { name: "Грузия", image: "https://flagcdn.com/w320/ge.png" },
  { name: "Бельгия", image: "https://flagcdn.com/w320/be.png" },
  { name: "Белоруссия", image: "https://flagcdn.com/w320/by.png" },
  { name: "Мальта", image: "https://flagcdn.com/w320/mt.png" },
  { name: "Иордания", image: "https://flagcdn.com/w320/jo.png" },
  { name: "Колумбия", image: "https://flagcdn.com/w320/co.png" },
  { name: "Малайзия", image: "https://flagcdn.com/w320/my.png" },

];

let score = 0;
let currentFlag;
let previousFlag;
let recentFlags = [];

function generateOptions() {
  const options = [currentFlag];
  while (options.length < 3) {
    const randomIndex = Math.floor(Math.random() * flags.length);
    if (!options.includes(flags[randomIndex]) && !recentFlags.includes(flags[randomIndex])) {
      options.push(flags[randomIndex]);
    }
  }
  options.sort(() => Math.random() - 0.5);
  return options;
}

function displayFlag() {
  let newFlag;
  do {
    newFlag = flags[Math.floor(Math.random() * flags.length)];
  } while (recentFlags.includes(newFlag));

  currentFlag = newFlag;

  recentFlags.unshift(currentFlag);

  if (recentFlags.length > 4) {
    recentFlags.pop();
  }

  document.getElementById("flag").src = currentFlag.image;
  const options = generateOptions();
  document.getElementById("option1").textContent = options[0].name;
  document.getElementById("option2").textContent = options[1].name;
  document.getElementById("option3").textContent = options[2].name;
}

function checkAnswer(event) {
  const selectedOption = event.target.textContent;
  if (selectedOption === currentFlag.name) {
    score++;
    document.getElementById("score").textContent = score;
    event.target.classList.add("correct");
    setTimeout(() => {
      event.target.classList.remove("correct");
      displayFlag();
    }, 1000);
  } else {
    event.target.classList.add("incorrect");
    setTimeout(() => {
      event.target.classList.remove("incorrect");
    }, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  displayFlag();
  document.getElementById("option1").addEventListener("click", checkAnswer);
  document.getElementById("option2").addEventListener("click", checkAnswer);
  document.getElementById("option3").addEventListener("click", checkAnswer);
});
