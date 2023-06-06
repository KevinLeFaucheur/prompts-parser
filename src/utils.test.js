// import { promptParser } from "./utils";

import { promptParser } from "./utils";

it('should return an array of objects', () => { 
  expect(promptParser('hair')).toStrictEqual ([{ prompt:'hair' }]);
});
  