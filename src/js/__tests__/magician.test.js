import Magician from '../Magician';

import Daemon from '../Daemon';

test('Mage`s attack should be changed', () => {
  const mishka = new Magician(100, 2, false);
  expect(mishka.attack).toBe(90);
});

test('Daemon`s attack should be stoned', () => {
  const alex = new Daemon(101.13, 2, true);
  expect(alex.attack).toBe(86);
});

test('Attack should be zero', () => {
  const alex = new Daemon(100, 12, true);
  expect(alex.attack).toBe(0);
});
