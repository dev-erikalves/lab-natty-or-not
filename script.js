const rounds = [
  {
    id: "bolo",
    title: "Bolo de caramelo",
    realUrl: "https://images.unsplash.com/photo-1791793266757-01205c75cf62?auto=format&fit=crop&w=1100&q=85",
    aiPath: "images/bolo.png",
    alt: "Bolo de caramelo com fatias de maçã seca e nozes",
    explanation: "Compare as texturas do bolo e do caramelo, os contornos das fatias e a forma como a luz toca a cobertura. Esses sinais ajudam a observar, mas não provam sozinhos se uma imagem é real."
  },
  {
    id: "capaCelular",
    title: "Capa de celular sobre um livro",
    realUrl: "https://images.unsplash.com/photo-1791775424023-7d17602fec21?auto=format&fit=crop&w=1100&q=85",
    aiPath: "images/capa-celular.png",
    alt: "Capa de celular marrom com detalhes azuis apoiada em um livro de capa dura",
    explanation: "Observe as bordas da capa, o alinhamento com o livro, as sombras de contato e a textura dos materiais."
  },
  {
    id: "abacaxi",
    title: "Abacaxi maduro",
    realUrl: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=1100&q=85",
    aiPath: "images/abacaxi.png",
    alt: "Abacaxi maduro com folhas verdes",
    explanation: "Olhe para o padrão repetido da casca, as pontas das folhas, as sombras e a transição entre as partes claras e escuras."
  },
  {
    id: "cervo",
    title: "Cervo no campo",
    realUrl: "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=1100&q=85",
    aiPath: "images/cervo.png",
    alt: "Cervo marrom em pé em uma área verde com fundo desfocado",
    explanation: "Repare na textura do pelo, no formato das orelhas e dos chifres, nas patas e na continuidade entre o animal e o fundo desfocado."
  }
];

const $ = (id) => document.getElementById(id);
let playableRounds = [];
let gameOrder = [];
let currentRound = 0;
let score = 0;
let answered = false;
let realOnA = true;

function imageLoads(src) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(true);
    image.onerror = () => resolve(false);
    image.src = src;
  });
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function setImages(round) {
  realOnA = Math.random() < 0.5;
  const imageA = $("image-a");
  const imageB = $("image-b");
  imageA.src = realOnA ? round.realUrl : round.aiPath;
  imageB.src = realOnA ? round.aiPath : round.realUrl;
  imageA.alt = `Imagem A: ${round.alt}`;
  imageB.alt = `Imagem B: ${round.alt}`;
}

function showRound() {
  answered = false;
  const round = gameOrder[currentRound];
  setImages(round);
  $("quiz").hidden = false;
  $("round-number").textContent = String(currentRound + 1);
  $("round-total").textContent = String(gameOrder.length);
  $("score").textContent = String(score);
  $("feedback").hidden = true;
  $("feedback").className = "feedback";
  $("feedback").textContent = "";
  $("choose-a").disabled = false;
  $("choose-b").disabled = false;
  $("next-round").hidden = true;
  $("final-results").hidden = true;
  $("credits").hidden = true;
}

function answer(guessA) {
  if (answered) return;
  answered = true;
  const round = gameOrder[currentRound];
  const correct = guessA === realOnA;
  if (correct) score++;
  $("score").textContent = String(score);
  $("choose-a").disabled = true;
  $("choose-b").disabled = true;

  const realLetter = realOnA ? "A" : "B";
  const feedback = $("feedback");
  feedback.className = `feedback ${correct ? "good" : "bad"}`;
  feedback.textContent = `${correct ? "Acertou!" : "Dessa vez não."} A fotografia real era a imagem ${realLetter}. ${round.explanation}`;
  feedback.hidden = false;

  if (currentRound < gameOrder.length - 1) {
    $("next-round").hidden = false;
  } else {
    $("final-results").hidden = true;
    $("final-results").textContent = `Você acertou ${score} de ${gameOrder.length} rodada(s).`;
    
    $("quiz").hidden = true;
    $("final-results").hidden = false;
    $("credits").hidden = false;
  }
}

async function initGame() {
  $("setup-notice").hidden = false;
  $("setup-notice").querySelector("p").textContent = "Verificando as imagens...";
  const checks = await Promise.all(rounds.map(async (round) => {
    const [realReady, aiReady] = await Promise.all([
      imageLoads(round.realUrl),
      imageLoads(round.aiPath)
    ]);
    return { round, ready: realReady && aiReady, realReady, aiReady };
  }));

  playableRounds = checks.filter((item) => item.ready).map((item) => item.round);
  const missing = checks.filter((item) => !item.aiReady).map((item) => item.round.aiPath);

  if (playableRounds.length === 0) {
    $("quiz").hidden = true;
    $("setup-notice").hidden = false;
    $("setup-notice").querySelector("h2").textContent = "Prepare as imagens de IA";
    $("setup-notice").querySelector("p").textContent = `Ainda não há pares prontos. Gere imagens correspondentes às fotografias e salve-as na pasta images com estes nomes: ${missing.join(", ")}. Quando ao menos uma imagem IA estiver no lugar certo, atualize ou reabra a página.`;
    $("round-number").textContent = "0";
    $("round-total").textContent = "0";
    return;
  }

  $("quiz").hidden = false;
  $("setup-notice").hidden = missing.length === 0;
  if (missing.length > 0) {
    $("setup-notice").querySelector("h2").textContent = `${playableRounds.length} desafio(s) pronto(s)`;
    $("setup-notice").querySelector("p").textContent = `Para adicionar as outras rodadas, salve as imagens geradas por IA com estes nomes: ${missing.join(", ")}.`;
  }
  startGame();
}

function startGame() {
  gameOrder = shuffle(playableRounds);
  currentRound = 0;
  score = 0;
  showRound();
}

$("choose-a").addEventListener("click", () => answer(true));
$("choose-b").addEventListener("click", () => answer(false));
$("next-round").addEventListener("click", () => {
  currentRound++;
  showRound();
});
$("play-again").addEventListener("click", startGame);

initGame();
