import questions from "./questions.js";
import pokemon from "./pokemon.js";

function calculateUserScores(responses) {
  let scores = {
    Onesta: 0,
    Emotivita: 0,
    Estroversione: 0,
    Amicalita: 0,
    Coscienziosita: 0,
    Apertura: 0,
  };
  
  const count = { ...scores };

  // Calcola punteggi e conteggi
  responses.forEach((response, index) => {
    const question = questions[index];
    if (!question) {
      console.error("No question data available at index:", index);
      return;
    }
    
    const questionTrait = question.trait;
    let increment = response;

    // Inverti il punteggio se la domanda è invertita
    if (question.reverse) {
      increment = 6 - increment;
    }

    // Incrementa il punteggio per il tratto specifico
    scores[questionTrait] += increment;
    count[questionTrait] += 1;
  });

  // Normalizza i punteggi in base al numero di domande per tratto
  Object.keys(scores).forEach((trait) => {
    if (count[trait] > 0) {
      scores[trait] /= count[trait];
    }
    console.log(`Punteggio normalizzato per ${trait}: ${scores[trait].toFixed(2)}`);
  });

  return scores;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Scambia gli elementi
  }
}

function findBestMatch(userScores) {
  let topMatches = [];
  let highestScore = -Infinity;
  const scoreThreshold = 0.3;

  pokemon.forEach((p) => {
    let compatibilityScore = 0;

    p.traits.forEach((trait) => {
      let score = userScores[trait.name] || 0;

      // Inverti il punteggio se il tratto non è positivo
      if (!trait.positive) {
        score = 6 - score;
      }

      compatibilityScore += score * trait.weight;
    });

    console.log(`Compatibilità con ${p.name}: ${compatibilityScore.toFixed(2)}`);

    if (compatibilityScore > highestScore) {
      highestScore = compatibilityScore;
      topMatches = [p];
    } else if (compatibilityScore >= highestScore - scoreThreshold) {
      topMatches.push(p);
    }
  });

  // Garantisci diversità nella selezione
  if (topMatches.length > 10) {
    shuffleArray(topMatches);
    topMatches = topMatches.slice(0, 10);
  }

  // Ritorna un abbinamento casuale dai migliori
  return topMatches[Math.floor(Math.random() * topMatches.length)];
}

export { calculateUserScores, findBestMatch };
