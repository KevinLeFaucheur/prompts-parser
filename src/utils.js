export const promptParser = (prompt) => {
  let newPrompt = [];
  let keywords = prompt.trim().split(',');

  keywords.forEach(keyword => {
    let newKeyword = keyword.trim();


    // Checks for a weight
    const weightedKeyword = keyword.split(':');
    let weight = 1;

    if(weightedKeyword.length > 1 && weightedKeyword[1] !== '') {
      newKeyword = weightedKeyword[0];

      let weightKeywords = weightedKeyword[1].split('.');
      if(weightKeywords[0] === '') weightKeywords[0] = 0;

      let parsedWeight = weightKeywords.map(weight => parseInt(weight, 10));
      weight = parseFloat((parsedWeight[0] + '.' + parsedWeight[1]), 10);

      console.log(weight);
      console.log(weightedKeyword[1].match(/(\d+)(.\d+)?/g));
    }

    // Push if not empty string
    if(newKeyword !== '') newPrompt.push({ prompt: newKeyword, weight: weight, color: '#9EE' });
  });

  return newPrompt;
}

export const validatePrompt = (prompt) => {
  return !(prompt === '');
}