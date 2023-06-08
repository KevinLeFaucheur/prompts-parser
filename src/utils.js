export const promptParser = (prompts) => {
  let keywords = prompts.split(',');
  let prompt = 'Error';
  let weight = 1;

  return keywords.map(keyword => { 
    
    let parenthesisCount = (keyword.match(/\(/g) || []).length; // match returns null with no result, || []
    for (let i = 1; i <= parenthesisCount; i++) {
      weight *= 1.1;
    }
    let bracketsCount = (keyword.match(/\[/g) || []).length;
    for (let i = 1; i <= bracketsCount; i++) {
      weight /= 1.1;
    }

    keyword = keyword.replace(/(\()|(\))|(\[)|(\])/g, '');

    let weightedWord = keyword.split(':');

    prompt = weightedWord[0].trim();
    weight = weightedWord[1] ? parseFloat(weightedWord[1]) : weight;
    weight = weight % 1 !== 0 ? parseFloat(weight.toFixed(2)) : weight;

    return { prompt: prompt, weight: weight, color: '#FFF' } 
  });
}

export const validatePrompt = (prompt) => {
  return !(prompt === '');
}

export const colors = [
  "#ffe3d1", "#ffbe95", "#dda3a7", "#7792d6", 
  "#2acaea", "#20daa5", "#77d375", "#b0e0e6",
  "#c6e2ff", "#f0f8ff", "#cecece", "#bfaee6"
];
