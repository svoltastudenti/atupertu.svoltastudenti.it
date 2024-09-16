import { calculateUserScores, findBestMatch } from "./logic.js";
import questions from "./questions.js";

document.addEventListener("DOMContentLoaded", function () {
  const buttonUp = document.getElementById("button-up");
  const buttonDown = document.getElementById("button-down");
  const buttonA = document.getElementById("button-a");
  var quizCompleted = false;

  if (buttonUp && buttonDown && buttonA) {
    buttonUp.addEventListener("click", () => navigateOptions("up"));
    buttonDown.addEventListener("click", () => navigateOptions("down"));
    buttonA.addEventListener("click", handleButtonA);
  } else {
    console.error("SVG buttons not found");
  }

  const dialogueText = [
    "Benvuenuto nel mondo delle associazioni del Politecnico di Milano!",
    "Il mio nome è Oak. Ma puoi chiamarmi Professor PoliMi!",
    "Ti farò qualche domanda per trovare la tua associazione.",
    "Preparati ad andare olter le lezioni!",
    "Let's go!",
  ];

  const quizForm = document.getElementById("quiz-form");
  const questionsContainer = document.getElementById("questions-container");
  const dialogueContainer = document.getElementById("dialogue-container");
  const dialogueP = document.getElementById("dialogue-text");
  let dialogueIndex = 0;
  let textPosition = 0;
  let currentDialoguePart = "";
  let responses = [];

  dialogueContainer.addEventListener("click", advanceDialogue);
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && event.target === dialogueContainer) {
      advanceDialogue();
    }
  });

  function typeWriter() {
    if (textPosition < currentDialoguePart.length) {
      dialogueP.textContent += currentDialoguePart.charAt(textPosition);
      textPosition++;
      setTimeout(typeWriter, 50);
    }
  }

  function advanceDialogue() {
    if (textPosition < currentDialoguePart.length) {
      dialogueP.textContent = currentDialoguePart;
      textPosition = currentDialoguePart.length;
    } else if (dialogueIndex < dialogueText.length) {
      currentDialoguePart = dialogueText[dialogueIndex++];
      textPosition = 0;
      dialogueP.textContent = "";
      typeWriter();
    } else {
      dialogueContainer.style.display = "none";
      quizForm.style.display = "block";
      loadQuestion(0);
    }
  }

  function loadQuestion(index) {
    const totalQuestions = questions.length; // Usa la lunghezza dell'array delle domande
    const questionCounter = document.getElementById("question-counter");
    questionCounter.textContent = `Q: ${index + 1}/${totalQuestions}`;

    questionsContainer.innerHTML = "";

    if (index < totalQuestions) {
      const question = questions[index];
      const questionDiv = document.createElement("div");
      questionDiv.className = "question";
      questionDiv.innerHTML = `
            <label>${question.text}</label>
            <div class="custom-options" tabindex="0"> <!-- Make options focusable -->
                <span class="custom-option" data-value="1" tabindex="-1">Mai</span>
                <span class="custom-option" data-value="2" tabindex="-1">Raramente</span>
                <span class="custom-option" data-value="3" tabindex="-1">A volte</span>
                <span class="custom-option" data-value="4" tabindex="-1">Spesso</span>
                <span class="custom-option" data-value="5" tabindex="-1">Sempre</span> <!-- Translated "Always" -->
            </div>
        `;
      questionsContainer.appendChild(questionDiv);
      setupCustomSelect(questionDiv.querySelector(".custom-options"), index);
    } else {
      calculateAndDisplayResults(responses);
    }
  }

  function setupCustomSelect(options, questionIndex) {
    let selectedOptionIndex = -1;
    const allOptions = options.querySelectorAll(".custom-option");

    function updateSelectedOption() {
      if (selectedOptionIndex >= 0) {
        allOptions.forEach((opt) => opt.classList.remove("selected"));
        allOptions[selectedOptionIndex].classList.add("selected");
        allOptions[selectedOptionIndex].focus();
      }
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        if (allOptions.length > 0) {
          const move = e.key === "ArrowDown" ? 1 : -1;
          selectedOptionIndex =
            (selectedOptionIndex + move + allOptions.length) %
            allOptions.length;
          updateSelectedOption();
        }
      }
    });

    allOptions.forEach((option, idx) => {
      option.addEventListener("click", () => {
        selectedOptionIndex = idx;
        updateSelectedOption(allOptions, selectedOptionIndex);
        proceedAfterSelection(idx, questionIndex);
      });
    });

    function proceedAfterSelection(selectedIndex, questionIndex) {
      responses[questionIndex] = parseInt(
        document
          .querySelectorAll(".custom-option")
          [selectedIndex].getAttribute("data-value")
      );
      console.log("Current responses:", responses);

      if (questionIndex < questions.length - 1) {
        loadQuestion(questionIndex + 1);
      } else {
        calculateAndDisplayResults(responses);
      }
    }
  }

  function navigateOptions(direction) {
    const allOptions = document.querySelectorAll(".custom-option");
    let currentIndex = Array.from(allOptions).findIndex((opt) =>
      opt.classList.contains("selected")
    );

    if (direction === "up") {
      currentIndex =
        currentIndex > 0 ? currentIndex - 1 : allOptions.length - 1;
    } else if (direction === "down") {
      currentIndex =
        currentIndex < allOptions.length - 1 ? currentIndex + 1 : 0;
    }

    allOptions.forEach((opt) => opt.classList.remove("selected"));
    allOptions[currentIndex].classList.add("selected");
    allOptions[currentIndex].focus();
  }

  function selectOption() {
    const selectedOption = document.querySelector(".custom-option.selected");
    if (selectedOption) {
      selectedOption.click();
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const buttonUp = document.getElementById("button-up");
    const buttonDown = document.getElementById("button-down");
    const buttonA = document.getElementById("button-a");

    buttonUp.addEventListener("click", () => navigateOptions("up"));
    buttonDown.addEventListener("click", () => navigateOptions("down"));
    buttonA.addEventListener("click", selectOption);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !quizCompleted) {
      event.preventDefault();
      const selectedOption = document.querySelector(".custom-option.selected");
      if (selectedOption) {
        selectedOption.click();
      }
    }
  });

  function handleButtonA() {
    if (dialogueContainer.style.display !== "none") {
      advanceDialogue();
    } else if (!quizCompleted) {
      const selectedOption = document.querySelector(".custom-option.selected");
      if (selectedOption) {
        selectedOption.click();
      }
    }
  }

  function calculateAndDisplayResults(responses) {
    const userScores = calculateUserScores(responses);
    const bestMatch = findBestMatch(userScores);

    for (const element of document.getElementsByClassName("fade-out")) {
      element.style.display = "none";
    }

    // Supponendo che "bestMatch" contenga i dati del Pokémon e che tu
    // abbia accesso anche all'associazione ideale associata.

    const messageElement = document.getElementById("final-message");

    // Modifica il messaggio per includere il nome dell'associazione
    const associationName = bestMatch.title; // Assicurati che "bestMatch" contenga l'oggetto dell'associazione

    messageElement.innerHTML = `La tua associazione ideale è: <strong>${associationName}</strong>`;

    showPokemonResult(bestMatch);
    quizCompleted = true;

    showPokemonResult(bestMatch);
    quizCompleted = true;
  }

  function showPokemonResult(pokemon) {
    const pokemonName = document.getElementById("pokemon-name");
    const pokemonImage = document.getElementById("pokemon-image");
    const pokemonResultDiv = document.getElementById("pokemon-result");
    const shareButton = document.getElementById("share-button");

    pokemonName.textContent = pokemon.name;
    pokemonImage.src = pokemon.img;
    pokemonImage.alt = pokemon.name;

    const tweetText = encodeURIComponent(
      `My perfect Pokémon match is ${pokemonName.textContent}! Check out which Pokémon is yours!`
    );
    const url = encodeURIComponent(window.location.href);
    shareButton.href = `https://twitter.com/intent/tweet?text=${tweetText}&url=${url}`;

    pokemonResultDiv.style.display = "block";
    pokemonResultDiv.classList.add("fade-in");
    shareButton.style.display = "block";

    shareButton.onclick = function () {
      window.open(shareButton.href, "_blank");
    };
  }

  advanceDialogue();
});
