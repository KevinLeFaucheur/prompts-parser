import { promptParser } from "./utils";

it('should return an array of prompt objects', () => { 
  expect(promptParser('hair')).toStrictEqual([{ prompt:'hair', weight: 1, color: '#9FF' }]);
  expect(promptParser('hair, eyes'))
    .toStrictEqual([{ prompt: 'hair', weight: 1, color: '#9FF' }, { prompt: 'eyes', weight: 1, color: '#9FF' }]);
});
  
// Recognize aside weight
it('should parse a float number and calculate a weight', () => { 
  expect(promptParser('brown hair:0.5')).toStrictEqual([{ prompt:'brown hair', weight: 0.5, color: '#9FF' }]);
  expect(promptParser('brown hair:')).toStrictEqual([{ prompt:'brown hair', weight: 1, color: '#9FF' }]);
  expect(promptParser('brown hair:.25')).toStrictEqual([{ prompt:'brown hair', weight: 0.25, color: '#9FF' }]);
  expect(promptParser('brown hair:1.')).toStrictEqual([{ prompt:'brown hair', weight: 1, color: '#9FF' }]);
  expect(promptParser('brown hair:.')).toStrictEqual([{ prompt:'brown hair', weight: 1, color: '#9FF' }]);
});

// Recognize parenthesis
it('should catch parenthesis and calculate a weight', () => { 
  expect(promptParser('(hair)')).toStrictEqual([{ prompt:'hair', weight: 1.1, color: '#9FF' }]);
  expect(promptParser('((hair))')).toStrictEqual([{ prompt:'hair', weight: 1.21, color: '#9FF' }]);
});

// Recognize brackets
it('should catch brackets and calculate a weight', () => { 
  expect(promptParser('[hair]')).toStrictEqual([{ prompt:'hair', weight: 0.91, color: '#9FF' }]);
  expect(promptParser('[[hair]]')).toStrictEqual([{ prompt:'hair', weight: 0.83, color: '#9FF' }]);
});

/** 
 * validatePrompt, returns false when prompt is not valid
 */
it('should catch empty keywords', () => { 
  // expect(promptParser('')).toStrictEqual([{ prompt:'No keyword found.', weight: 1, color: '#9FF' }]);
  // expect(promptParser('   ')).toStrictEqual([{ prompt:'hair', weight: 0.83, color: '#9FF' }]);
});