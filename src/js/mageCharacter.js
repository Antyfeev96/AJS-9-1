/* eslint-disable no-underscore-dangle */

export default class MageCharacter {
  constructor(attack, distance, stoned) {
    this.attack = attack;
    this.distance = distance;
    this.stoned = stoned;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    let attack = this._attack * ((11 - this.distance) / 10);
    if (this.stoned) {
      attack -= Math.log2(this.distance) * 5;
    }
    return (attack > 0) ? Math.round(attack) : 0;
  }
}
