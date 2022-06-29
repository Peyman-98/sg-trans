import { SelectedTrans } from '../src/main.js';

describe('initialize SelectedTrans', () => {
  const selectedTrans = SelectedTrans.init({ key: '/languages' });

  test('Fetch Languages', async () => {
    const languages = await selectedTrans.getLanguages();
    expect(languages).toBe(true);
  });

  test('Fetch Todo', async () => {
    const todo = await selectedTrans.getTodo();
    expect(todo.id).toBe(1);
  });
});
