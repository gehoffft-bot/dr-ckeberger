{
  "name"; "Drückeberger",
  "short_name"; "Drckbrgr",
  "start_url"; "/",
  "display"; "standalone",
  "icons"; [
    {
      "sizes": "114x114",
      "src": "https://github.githubassets.com/assets/apple-touch-icon-114x114-09ce42d3ca4b.png"
    },
    {
      "sizes": "120x120",
      "src": "https://github.githubassets.com/assets/apple-touch-icon-120x120-92bd46d04241.png"
    },
    {
      "sizes": "144x144",
      "src": "https://github.githubassets.com/assets/apple-touch-icon-144x144-b882e354c005.png"
    },
    {
      "sizes": "152x152",
      "src": "https://github.githubassets.com/assets/apple-touch-icon-152x152-5f777cdc30ae.png"
    },
    {
      "sizes": "180x180",
      "src": "https://github.githubassets.com/assets/apple-touch-icon-180x180-a80b8e11abe2.png"
    },
    {
      "sizes": "57x57",
      "src": "https://github.githubassets.com/assets/apple-touch-icon-57x57-22f09f5b3a64.png"
    },
    {
      "sizes": "60x60",
      "src": "https://github.githubassets.com/assets/apple-touch-icon-60x60-19037ac897bf.png"
    },
    {
      "sizes": "72x72",
      "src": "https://github.githubassets.com/assets/apple-touch-icon-72x72-e090c8a282d0.png"
    },
    {
      "sizes": "76x76",
      "src": "https://github.githubassets.com/assets/apple-touch-icon-76x76-a4523d80afb4.png"
    },
    {
      "src": "https://github.githubassets.com/assets/app-icon-192-bcc967ab9829.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "https://github.githubassets.com/assets/app-icon-512-7f9c4ff2e960.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "prefer_related_applications"; true,
  "related_applications"; [
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=com.github.android",
      "id": "com.github.android"
    }
  ],
  "theme_color"; "#bd2b04",
  "background_color"; "#000000"
}

const ICONS = {
  joker: `<img src="joker.png" alt="Joker" style="width:100%; height:100%; object-fit:contain;" />`,
  group: `<img src="group.png" alt="Gruppe" style="width:100%; height:100%; object-fit:contain;" />`,
  armdrücken: `<img src="armdrücken.png" alt="Armdrücken" style="width:100%; height:100%; object-fit:contain;" />`,
  photo: `<img src="photo.png" alt="photo" style="width:100%; height:100%; object-fit:contain;" />`,
  eye: `<img src="eye.png" alt="eye" style="width:100%; height:100%; object-fit:contain;" />`,
  schere: `<img src="schere.png" alt="schere" style="width:100%; height:100%; object-fit:contain;" />`,
  ice: `<img src="ice.png" alt="ice" style="width:100%; height:100%; object-fit:contain;" />`,
  teddy: `<img src="teddy.png" alt= "Teddy" style="width:100%; height:100%; object-fit:contain;" />`
};

const INTENSITY_DESCRIPTIONS = {
  1: "Stufe 1: Ganz entspannt. Alles easy.",
  2: "Stufe 2: Hier wird's ein bisschen spicy.",
  3: "Stufe 3: Mucho picante!"
};

function getCustomTasks() {
  const saved = localStorage.getItem("drueckeberger_custom");
  return saved ? JSON.parse(saved) : [];
}

function saveCustomTask(task) {
  const current = getCustomTasks();
  current.push(task);
  localStorage.setItem("drueckeberger_custom", JSON.stringify(current));
}

let selectedGameIntensity = 1;
let roundDeck = [];
let isGameOver = false;

function initNewGame() {
  const custom = getCustomTasks();
  const all = [...defaultTasks, ...custom];
  
  const filtered = all.filter(task => (task.intensity || 1) <= selectedGameIntensity);

  roundDeck = [];
  filtered.forEach(task => {
    const copies = task.maxOccurrences > 1 
      ? Math.floor(Math.random() * task.maxOccurrences) + 1 
      : 1;

    for (let i = 0; i < copies; i++) {
      roundDeck.push({
        text: task.text,
        subtext: task.subtext || null,
        penalty: task.penalty,
        type: task.type || null,
        label: task.label || null,
        priority: task.priority || 1
      });
    }
  });

  isGameOver = false;
}

function drawNextCard() {
  if (roundDeck.length === 0) {
    isGameOver = true;
    return null;
  }

  const totalWeight = roundDeck.reduce((sum, item) => sum + item.priority, 0);
  let rand = Math.random() * totalWeight;

  for (let i = 0; i < roundDeck.length; i++) {
    rand -= roundDeck[i].priority;
    if (rand <= 0) {
      return roundDeck.splice(i, 1)[0];
    }
  }

  return roundDeck.pop();
}

// DOM-Elemente
const startScreen = document.getElementById("startScreen");
const intensityScreen = document.getElementById("intensityScreen");
const gameScreen = document.getElementById("gameScreen");

const btnGoToIntensity = document.getElementById("btnGoToIntensity");
const btnBackToIntensityStart = document.getElementById("btnBackToIntensityStart");
const btnStartGame = document.getElementById("btnStartGame");
const btnBackToStart = document.getElementById("btnBackToStart");
const btnOpenAddStart = document.getElementById("btnOpenAddStart");

const chiliScaleSelect = document.getElementById("chiliScaleSelect");
const intensityDescription = document.getElementById("intensityDescription");

const taskText = document.getElementById("taskText");
const taskSubtext = document.getElementById("taskSubtext");
const bridgeBlock = document.getElementById("bridgeBlock");
const penaltyBlock = document.getElementById("penaltyBlock");
const shotScale = document.getElementById("shotScale").children;

const fullscreenWarning = document.getElementById("fullscreenWarning");
const warningIcon = document.getElementById("warningIcon");
const warningLabel = document.getElementById("warningLabel");

const specialBadge = document.getElementById("specialBadge");
const badgeIcon = document.getElementById("badgeIcon");
const badgeLabel = document.getElementById("badgeLabel");

const btnNext = document.getElementById("btnNext");

const btnOpenAdd = document.getElementById("btnOpenAdd");
const modalAdd = document.getElementById("modalAdd");
const btnCancelAdd = document.getElementById("btnCancelAdd");
const btnSaveTask = document.getElementById("btnSaveTask");
const inputTaskText = document.getElementById("inputTaskText");
const modalShots = document.querySelectorAll(".select-shot");
const modalChiliBtns = document.querySelectorAll(".select-chili-btn");

let selectedModalPenalty = 1;
let selectedModalIntensity = 1;

function updatePenaltyDisplay(penaltyCount) {
  for (let i = 0; i < shotScale.length; i++) {
    if (i < penaltyCount) {
      shotScale[i].classList.add("active");
    } else {
      shotScale[i].classList.remove("active");
    }
  }
}

function renderNextTurn() {
  if (isGameOver) {
    gameScreen.style.display = "none";
    intensityScreen.style.display = "flex";
    btnNext.textContent = "Weiter";
    isGameOver = false;
    return;
  }

  const card = drawNextCard();

  if (!card) {
    fullscreenWarning.classList.remove("active");
    specialBadge.style.display = "none";
    bridgeBlock.style.display = "none";
    penaltyBlock.style.display = "none";
    taskSubtext.style.display = "none";
    taskText.textContent = "Alle Aufgaben durchgespielt! Tippe auf den Button, um die Intensität neu zu wählen.";
    btnNext.textContent = "Neustart / Intensität wählen";
    isGameOver = true;
    return;
  }

  taskText.textContent = card.text;

  if (card.subtext) {
    taskSubtext.textContent = card.subtext;
    taskSubtext.style.display = "block";
  } else {
    taskSubtext.style.display = "none";
  }

  if (card.penalty === 0) {
    bridgeBlock.style.display = "none";
    penaltyBlock.style.display = "none";
    taskText.style.display = "none";
    taskSubtext.style.display = "none";
    specialBadge.style.display = "none";

    const activeIconHTML = (card.type && ICONS[card.type]) ? ICONS[card.type] : ICONS.joker;
    const activeLabelText = card.label || "Sonderkarte";

    warningLabel.textContent = activeLabelText;
    warningIcon.innerHTML = activeIconHTML;

    // Roter Rahmen & Animation starten
    fullscreenWarning.classList.add("active");

    // Nach 1,2 Sekunden Overlay mit rotem Rahmen wieder ausblenden
    setTimeout(() => {
      fullscreenWarning.classList.remove("active");
      taskText.style.display = "block";
      if (card.subtext) taskSubtext.style.display = "block";

      badgeLabel.textContent = activeLabelText;
      badgeIcon.innerHTML = activeIconHTML;
      specialBadge.style.display = "flex";
    }, 1400);

  } else {
    fullscreenWarning.classList.remove("active");
    specialBadge.style.display = "none";
    taskText.style.display = "block";
    bridgeBlock.style.display = "flex";
    penaltyBlock.style.display = "flex";
    updatePenaltyDisplay(card.penalty);
  }
}

// Navigation
btnGoToIntensity.addEventListener("click", () => {
  startScreen.style.display = "none";
  intensityScreen.style.display = "flex";
});

btnBackToIntensityStart.addEventListener("click", () => {
  intensityScreen.style.display = "none";
  startScreen.style.display = "flex";
});

btnStartGame.addEventListener("click", () => {
  intensityScreen.style.display = "none";
  gameScreen.style.display = "flex";
  initNewGame();
  renderNextTurn();
});

btnBackToStart.addEventListener("click", () => {
  gameScreen.style.display = "none";
  intensityScreen.style.display = "flex";
});

btnNext.addEventListener("click", renderNextTurn);

// Schotenauswahl
const chiliItems = chiliScaleSelect.querySelectorAll(".select-chili");
chiliItems.forEach(item => {
  item.addEventListener("click", () => {
    selectedGameIntensity = parseInt(item.dataset.value, 10);
    chiliItems.forEach(ci => {
      const val = parseInt(ci.dataset.value, 10);
      if (val <= selectedGameIntensity) {
        ci.classList.add("active");
      } else {
        ci.classList.remove("active");
      }
    });
    intensityDescription.textContent = INTENSITY_DESCRIPTIONS[selectedGameIntensity];
  });
});

// Modal
function openModal() {
  inputTaskText.value = "";
  setModalPenalty(1);
  setModalIntensity(1);
  modalAdd.classList.add("active");
}

btnOpenAdd.addEventListener("click", openModal);
btnOpenAddStart.addEventListener("click", openModal);

btnCancelAdd.addEventListener("click", () => {
  modalAdd.classList.remove("active");
});

function setModalPenalty(value) {
  selectedModalPenalty = parseInt(value, 10);
  modalShots.forEach(item => {
    const val = parseInt(item.dataset.value, 10);
    const icon = item.querySelector(".shot-icon");
    if (val <= selectedModalPenalty) {
      icon.classList.add("active");
    } else {
      icon.classList.remove("active");
    }
  });
}

modalShots.forEach(item => {
  item.addEventListener("click", () => {
    setModalPenalty(item.dataset.value);
  });
});

function setModalIntensity(value) {
  selectedModalIntensity = parseInt(value, 10);
  modalChiliBtns.forEach(item => {
    const val = parseInt(item.dataset.value, 10);
    if (val <= selectedModalIntensity) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

modalChiliBtns.forEach(item => {
  item.addEventListener("click", () => {
    setModalIntensity(item.dataset.value);
  });
});

btnSaveTask.addEventListener("click", () => {
  const text = inputTaskText.value.trim();
  if (!text) return;

  saveCustomTask({
    text: text,
    penalty: selectedModalPenalty,
    intensity: selectedModalIntensity,
    maxOccurrences: 1,
    priority: 2
  });

  modalAdd.classList.remove("active");
});