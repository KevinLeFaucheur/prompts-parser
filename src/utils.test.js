// import { promptParser } from "./utils";

import { promptParser } from "./utils";

it('should return an array of prompt objects', () => { 
  expect(promptParser('hair')).toStrictEqual([{ prompt:'hair', weight: 1 }]);
  expect(promptParser('hair, eyes')).toStrictEqual([{ prompt: 'hair', weight: 1 }, { prompt: 'eyes', weight: 1}]);
  expect(promptParser('brown hair:0.5')).toStrictEqual([{ prompt:'brown hair', weight: 0.5 }]);
  expect(promptParser('brown hair:')).toStrictEqual([{ prompt:'brown hair', weight: 1 }]);
});
  