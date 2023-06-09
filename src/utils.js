export const promptParser = (prompts) => {
  let keywords = prompts.split(',');

  return keywords.map(keyword => { 
    let prompt = 'Error';
    let weight = 1;
    
    // Outer Weight
    weight = calculateParenthesisWeight(keyword, weight);
    weight = calculateBracketWeight(keyword, weight);
    keyword = keyword.replace(/(\()|(\))|(\[)|(\])/g, '');

    // Side Weight 
    let weightedWord = keyword.split(':');

    prompt = weightedWord[0].trim();
    // This tests if something is after ':' and if it has any digit then it parseFloat or return initial value of weight
    weight = weightedWord[1] && /\d/g.test(weightedWord[1]) ? parseFloat(weightedWord[1]) : weight;
    weight = formatDecimal(weight);

    return { prompt: prompt, weight: weight, color: '#9FF' } 
  });
}

const calculateParenthesisWeight = (keyword, weight) => {
  let count = (keyword.match(/\(/g) || []).length; // match returns null with no result, || []
  for (let i = 1; i <= count; i++) {
    weight *= 1.1;
  }
  return weight;
}

const calculateBracketWeight = (keyword, weight) => {
  let count = (keyword.match(/\[/g) || []).length;
  for (let i = 1; i <= count; i++) {
    weight /= 1.1;
  }
  return weight;
}

const formatDecimal = (number) => {
  return number % 1 !== 0 ? parseFloat(number.toFixed(2)) : number;
}

export const validatePrompt = (prompt) => {
  // let weightedWord = prompt.split(',').split(':');
  return !(prompt === '');
}

export const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
}

export const colors = [
  "#ffe3d1", "#ffbe95", "#dda3a7", "#7792d6", 
  "#2acaea", "#20daa5", "#77d375", "#b0e0e6",
  "#c6e2ff", "#f0f8ff", "#cecece", "#bfaee6"
];
