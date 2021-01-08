/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
export default class Magician {
  constructor(attack) {
    this.attack = attack;
    this._attack = attack;
    this._stonedAttack = attack;
  }

  set attack(distance) {
    if (distance[0] !== 1) {
      this._attack -= this._attack * distance[1];
    }
  }

  get attack() {
    return this._attack;
  }

  set stoned(distance) {
    this._stonedAttack = this._attack - Math.log2(distance[0]) * 5;
  }

  get stoned() {
    return this._stonedAttack;
  }
}

const mishka = new Magician(100);
console.log(mishka);
console.log(mishka.attack = [2, 0.1]);
console.log(mishka.attack);
console.log(mishka.stoned = [2, 0.1]);
console.log(mishka.stoned);
