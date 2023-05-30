export const promptParser = (prompt) => {
  let newPrompt = [];
  let keywords = prompt.trim().split(',');

  keywords.forEach(keyword => {
    const newKeyword = keyword.trim();

    if(newKeyword !== '') newPrompt.push({ prompt: newKeyword, weight: 1, color: '#9EE' });

  });

  return newPrompt;
}

export const validatePrompt = (prompt) => {
  return !(prompt === '');
}