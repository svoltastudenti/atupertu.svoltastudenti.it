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
  const count = {
    Onesta: 0,
    Emotivita: 0,
    Estroversione: 0,
    Amicalita: 0,
    Coscienziosita: 0,
    Apertura: 0,
  };

  responses.forEach((response, index) => {
    if (!questions[index]) {
      console.error("No question data available at index:", index);
      return;
    }
    const questionTrait = questions[index].trait;
    let increment = response;

    // Invert score if the question is reverse scored
    if (questions[index].reverse) {
      increment = 6 - increment;
    }

    // Incrementing the score for the specific trait
    scores[questionTrait] += increment;
    count[questionTrait] += 1;
  });

  // Normalize scores by the number of questions per trait
  Object.keys(scores).forEach((trait) => {
    if (count[trait] > 0) {
      scores[trait] = scores[trait] / count[trait];
    }
    console.log(`Normalized score for ${trait}: ${scores[trait].toFixed(2)}`);
  });

  return scores;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
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

      // Invert score if trait is not positive
      if (!trait.positive) score = 6 - score;

      compatibilityScore += score * trait.weight;
    });

    if (compatibilityScore > highestScore) {
      highestScore = compatibilityScore;
      topMatches = [p];
    } else if (compatibilityScore >= highestScore - scoreThreshold) {
      topMatches.push(p);
    }
  });

  // Ensure diversity in selection if possible
  if (topMatches.length > 10) {
    shuffleArray(topMatches);
    topMatches = topMatches.slice(0, 10);
  }

  return topMatches[Math.floor(Math.random() * topMatches.length)];
}

export { calculateUserScores, findBestMatch };
