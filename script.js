const volumeSelect = document.getElementById("audio-volume");
const genreSelectBtn = document.querySelectorAll(".genre-select-btn");
const startQuizBtn = document.getElementById("start-quiz-btn");

const startScreen = document.querySelector(".start-screen");
const quizScreen = document.querySelector(".quiz-screen");
const endScreen = document.querySelector(".result-screen");

const genreDisplay = document.getElementById("genre-display");

function isMobile() {
    return window.matchMedia("(max-width: 540px)").matches;
}

const quizData = {
  House: [
    {
      songName: "Fire Fire",
      audioSrc: "assets/audio/Fire Fire.mp3",
      correctAnswer: "Fire Fire",
      options: ["Fire Fire", "Move", "7 Seconds", "Talk to You"],
    },
    {
      songName: "Edge of Desire",
      audioSrc: "assets/audio/Edge Of Desire.mp3",
      correctAnswer: "Edge of Desire",
      options: ["Can't Decide", "Gorah", "Edge of Desire", "Show me Love"],
    },
    {
      songName: "Gorah",
      audioSrc: "assets/audio/Gorah.mp3",
      correctAnswer: "Gorah",
      options: ["Show Me Love", "I Adore You", "Gorah", "Can't Decide"],
    },
    {
      songName: "Show Me Love",
      audioSrc: "assets/audio/Show Me Love.mp3",
      correctAnswer: "Show Me Love",
      options: ["Move", "Show Me Love", "Gorah", "Afraid To Feel"],
    },
    {
      songName: "7 Seconds",
      audioSrc: "assets/audio/7 Seconds.mp3",
      correctAnswer: "7 Seconds",
      options: ["Afraid To Feel", "7 Seconds", "Show Me Love", "Gorah"],
    },
    {
      songName: "Move",
      audioSrc: "assets/audio/Move.mp3",
      correctAnswer: "Move",
      options: ["Gorah", "Move", "Show Me Love", "Talk To You"],
    },
    {
      songName: "Afraid To Feel",
      audioSrc: "assets/audio/Afraid To Feel.mp3",
      correctAnswer: "Afraid To Feel",
      options: ["7 Seconds", "Can't Decide", "Fire Fire", "Afraid To Feel"],
    },
    {
      songName: "Talk To You",
      audioSrc: "assets/audio/Talk To You.mp3",
      correctAnswer: "Talk To You",
      options: ["Move", "I Adore You", "Fire Fire", "Talk To You"],
    },
    {
      songName: "I Adore You",
      audioSrc: "assets/audio/I Adore You.mp3",
      correctAnswer: "I Adore You",
      options: ["Edge Of Desire", "Show Me Love", "I Adore You", "7 Seconds"],
    },
    {
      songName: "Can't Decide",
      audioSrc: "assets/audio/Can't Decide.mp3",
      correctAnswer: "Can't Decide",
      options: ["Afraid To Feel", "Gorah", "Can't Decide", "Show Me Love"],
    },
  ],
  RnB: [
    {
      songName: "sneaky",
      audioSrc: "assets/audio/sneaky.mp3",
      correctAnswer: "sneaky",
      options: ["Mystery Lady", "sneaky", "No Pole", "DILUVIO"],
    },
    {
      songName: "Do Not Disturb",
      audioSrc: "assets/audio/Do Not Disturb.mp3",
      correctAnswer: "Do Not Disturb",
      options: ["rockstar", "DILUVIO", "Do Not Disturb", "Press Me"],
    },
    {
      songName: "Private Landing",
      audioSrc: "assets/audio/Private Landing.mp3",
      correctAnswer: "Private Landing",
      options: ["Private Landing", "Maui Wowie", "DILUVIO", "sneaky"],
    },
    {
      songName: "Mystery Lady",
      audioSrc: "assets/audio/Mystery Lady.mp3",
      correctAnswer: "Mystery Lady",
      options: ["No Pole", "Do Not Disturb", "Mystery Lady", "rockstar"],
    },
    {
      songName: "Maui Wowie",
      audioSrc: "assets/audio/Maui Wowie.mp3",
      correctAnswer: "Maui Wowie",
      options: ["Ride Or Die Pt.2", "Maui Wowie", "Private Landing", "sneaky"],
    },
    {
      songName: "No Pole",
      audioSrc: "assets/audio/No Pole.mp3",
      correctAnswer: "No Pole",
      options: ["Mystery Lady", "DILUVIO", "No Pole", "Do Not Disturb"],
    },
    {
      songName: "Press Me",
      audioSrc: "assets/audio/Press Me.mp3",
      correctAnswer: "Press Me",
      options: ["Press Me", "rockstar", "Ride Or Die Pt.2", "No Pole"],
    },
    {
      songName: "DILUVIO",
      audioSrc: "assets/audio/DILUVIO.mp3",
      correctAnswer: "DILUVIO",
      options: ["Maui Wowie", "Mystery Lady", "sneaky", "DILUVIO"],
    },
    {
      songName: "rockstar",
      audioSrc: "assets/audio/rockstar.mp3",
      correctAnswer: "rockstar",
      options: ["No Pole", "rockstar", "Private Landing", "DILUVIO"],
    },
    {
      songName: "Ride Or Die Pt.2",
      audioSrc: "assets/audio/Ride Or Die Pt.2.mp3",
      correctAnswer: "Ride Or Die Pt.2",
      options: ["Ride Or Die Pt.2", "Do Not Disturb", "sneaky", "No Pole"],
    },
  ],
  AfroBeat: [
    {
      songName: "Raindance",
      audioSrc: "assets/audio/Raindance.mp3",
      correctAnswer: "Raindance",
      options: ["KANTE", "Ifeoma", "Raindance", "Sere"],
    },
    {
      songName: "No Wahala",
      audioSrc: "assets/audio/No Wahala.mp3",
      correctAnswer: "No Wahala",
      options: ["No Wahala", "PUSH 2 START", "Emiliana", "KANTE"],
    },
    {
      songName: "Sere",
      audioSrc: "assets/audio/Sere.mp3",
      correctAnswer: "Sere",
      options: ["Love Nwantiti", "Sere", "Ifeoma", "Rush"],
    },
    {
      songName: "Calm Down",
      audioSrc: "assets/audio/Calm Down.mp3",
      correctAnswer: "Calm Down",
      options: ["Rush", "Raindance", "No Wahala", "Calm Down"],
    },
    {
      songName: "KANTE",
      audioSrc: "assets/audio/KANTE.mp3",
      correctAnswer: "KANTE",
      options: ["KANTE", "Love Nwantiti", "Sere", "Rush"],
    },
    {
      songName: "Love Nwantiti",
      audioSrc: "assets/audio/Love Nwantiti.mp3",
      correctAnswer: "Love Nwantiti",
      options: ["Sere", "Love Nwantiti", "Ifeoma", "PUSH 2 START"],
    },
    {
      songName: "Ifeoma",
      audioSrc: "assets/audio/Ifeoma.mp3",
      correctAnswer: "Ifeoma",
      options: ["Ifeoma", "Rush", "Emiliana", "KANTE"],
    },
    {
      songName: "Rush",
      audioSrc: "assets/audio/Rush.mp3",
      correctAnswer: "Rush",
      options: ["Emiliana", "Raindance", "Rush", "No Wahala"],
    },
    {
      songName: "Emiliana",
      audioSrc: "assets/audio/Emiliana.mp3",
      correctAnswer: "Emiliana",
      options: ["Calm Down", "Sere", "Emiliana", "Raindance"],
    },
    {
      songName: "PUSH 2 START",
      audioSrc: "assets/audio/PUSH 2 START.mp3",
      correctAnswer: "PUSH 2 START",
      options: ["PUSH 2 START", "Calm Down", "Sere", "Ifeoma"],
    },
  ],
};

let indexNumber = 0;

function displayGenres() {
  if (indexNumber === 3) {
    indexNumber = 0;
  }
  let display = (genreDisplay.textContent = Object.keys(quizData)[indexNumber]);
  indexNumber++;
  return display;
}

setInterval(displayGenres, 350);

let selectedGenre = undefined;
let currentQuestionIndex = 0;
let score = 0;
let currentAudio = null;

genreSelectBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
      genreSelectBtn.forEach((btn) => btn.classList.remove("selected-genre"));
      btn.classList.add("selected-genre");
      selectedGenre = btn.textContent;
      const genreLower = selectedGenre.toLowerCase();
      if (selectedGenre && isMobile()) {
        document.body.style.backgroundImage = `url(assets/images/${genreLower}-bg-phone.jpg)`;
      } else if (selectedGenre) {
        document.body.style.backgroundImage = `url(assets/images/${genreLower}-bg.jpg)`;
      }
    });
});

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function randomizeQuestions(genre) {
  return quizData[genre].sort(() => Math.random() - 0.5);
}

const displayScore = document.getElementById("right-questions");
const menuBtn = document.getElementById("go-to-menu-btn");

function showResults() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  quizScreen.classList.add("hidden");
  endScreen.classList.remove("hidden");
  displayScore.textContent = score;
}

let progressInterval = null;

function displayQuestions(genre) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  if (progressInterval) {
    clearInterval(progressInterval);
  }

  quizScreen.innerHTML = "";

  let currentData = quizData[genre];
  let displayContainer = document.createElement("div");
  displayContainer.classList.add("question-container");

  let currentQuestion = currentData[currentQuestionIndex];
  let shuffledOptions = shuffle(currentQuestion.options);

  currentAudio = new Audio(currentQuestion.audioSrc);

  if (volumeSelect) {
    currentAudio.volume = volumeSelect.value;
    volumeSelect.addEventListener("input", () => {
      if (currentAudio) {
        currentAudio.volume = volumeSelect.value;
      }
    });
  }

  displayContainer.innerHTML = `
        <h1>Question <span id="question-counter">${currentQuestionIndex + 1}</span> out of 10</h1>
        <h2>What's the name of this song?</h2>
        <div class="quiz-btns">
            <button type="button" class="quiz-btn">${shuffledOptions[0]}</button>
            <button type="button" class="quiz-btn">${shuffledOptions[1]}</button>
            <button type="button" class="quiz-btn">${shuffledOptions[2]}</button>
            <button type="button" class="quiz-btn">${shuffledOptions[3]}</button>
        </div>
        <input type="range" id="song-progress-bar" min="0" max="10" value="0" disabled>
        <button type="button" id="replay-btn"><i class="fa-solid fa-repeat"></i></button>
    `;

  quizScreen.appendChild(displayContainer);

  let endsTime = 0;
  let startTime = 0;
  let currentSecond = 1;
  const progressBar = document.getElementById("song-progress-bar");

  const startProgressTimer = () => {
    if (progressInterval) clearInterval(progressInterval);
    currentSecond = 1;
    progressBar.value = 0;

    progressInterval = setInterval(() => {
      progressBar.value = currentSecond;
      currentSecond++;
      if (currentSecond > 10) {
        clearInterval(progressInterval);
      }
    }, 1000);
  };

  currentAudio.addEventListener("loadedmetadata", () => {
    const songDuration = currentAudio.duration;
    const maxStartTime = Math.max(0, songDuration - 10);

    startTime = Math.random() * maxStartTime;
    endsTime = startTime + 10;

    currentAudio.currentTime = startTime;

    const checkTime = () => {
      if (currentAudio.currentTime >= endsTime) {
        currentAudio.pause();
        currentAudio.removeEventListener("timeupdate", checkTime);
      }
    };

    currentAudio.addEventListener("timeupdate", checkTime);
    currentAudio.play();
    startProgressTimer();
  });

  const replayBtn = document.getElementById("replay-btn");
  if (replayBtn) {
    replayBtn.addEventListener("click", () => {
      if (currentAudio) {
        currentAudio.currentTime = startTime;

        const checkTime = () => {
          if (currentAudio.currentTime >= endsTime) {
            currentAudio.pause();
            currentAudio.removeEventListener("timeupdate", checkTime);
          }
        };

        currentAudio.addEventListener("timeupdate", checkTime);
        currentAudio.play();
        startProgressTimer();
      }
    });
  }

  const quizButtons = document.querySelectorAll(".quiz-btn");
  quizButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.textContent === currentQuestion.correctAnswer) {
        score++;
      }
      currentQuestionIndex++;
      if (currentQuestionIndex < 10) {
        displayQuestions(selectedGenre);
      } else {
        showResults();
      }
    });
  });
}

startQuizBtn.addEventListener("click", () => {
  if (!selectedGenre) {
    alert("Please select a genre");
  } else {
    score = 0;
    currentQuestionIndex = 0;

    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    randomizeQuestions(selectedGenre);
    displayQuestions(selectedGenre);
  }
});

menuBtn.addEventListener("click", () => {
  endScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  selectedGenre = undefined;
  if (isMobile()) {
    document.body.style.backgroundImage = "url(assets/images/bg-main-phone.jpg)";
  } else {
    document.body.style.backgroundImage = "url(assets/images/bg-main.jpg)";
  }
});
