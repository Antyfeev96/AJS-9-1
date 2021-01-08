import Magician from '../Magician';

import Daemon from '../Daemon';

test('mage`s attack should be changed', () => {
  const mage = new Magician(100);
  mage.attack = [2, 0.1];
  expect(mage.attack).toBe(90);
});

test('mage`s attack should be stoned', () => {
  const mage = new Magician(100);
  mage.stoned = [2, 0.1];
  expect(mage.stoned).toBe(85);
});
