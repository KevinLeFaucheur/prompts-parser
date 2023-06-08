import { promptParser } from "./utils";

it('should return an array of prompt objects', () => { 
  expect(promptParser('hair')).toStrictEqual([{ prompt:'hair', weight: 1, color: '#FFF' }]);
  expect(promptParser('hair, eyes'))
    .toStrictEqual([{ prompt: 'hair', weight: 1, color: '#FFF' }, { prompt: 'eyes', weight: 1, color: '#FFF' }]);
});
  
// Recognize aside weight
it('should parse a float number and calculate a weight', () => { 
  expect(promptParser('brown hair:0.5')).toStrictEqual([{ prompt:'brown hair', weight: 0.5, color: '#FFF' }]);
  expect(promptParser('brown hair:')).toStrictEqual([{ prompt:'brown hair', weight: 1, color: '#FFF' }]);
});

// Recognize parenthesis
it('should catch parenthesis and calculate a weight', () => { 
  expect(promptParser('(hair)')).toStrictEqual([{ prompt:'hair', weight: 1.1, color: '#FFF' }]);
  expect(promptParser('((hair))')).toStrictEqual([{ prompt:'hair', weight: 1.21, color: '#FFF' }]);
});

// Recognize brackets
it('should catch brackets and calculate a weight', () => { 
  expect(promptParser('[hair]')).toStrictEqual([{ prompt:'hair', weight: 0.91, color: '#FFF' }]);
  expect(promptParser('[[hair]]')).toStrictEqual([{ prompt:'hair', weight: 0.83, color: '#FFF' }]);
});

/** 
 * validatePrompt, returns false when prompt is not valid
 */
it('should catch empty keywords', () => { 

});