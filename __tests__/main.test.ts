import { SelectedTrans } from '../src/main.js';

describe('initialize SelectedTrans', () => {
  const token = 'as12lolw1253plo';
  const selectedTrans = SelectedTrans.init(token);

  it('run getToken method', () => {
    expect(selectedTrans.getToken()).toBe(token);
  });
});
