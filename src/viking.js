// Soldier
class Soldier {
  constructor(health, strength) {
    this.strength = strength;
    this.health = health;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  // constructor(health, strength) {
  //   super(health, strength);
  // }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  constructor() {}
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    this.saxonArmy[0].strength -= this.saxonArmy[0].receiveDamage(
      this.vikingArmy[0].strength
    );
    if (this.saxonArmy[0].health <= 0) {
      this.saxonArmy.pop();
      return `A Saxon has died in combat`;
      // Saxon.receiveDamage(this.vikingArmy[0].strength)
      // console.log(Saxon.receiveDamage);
    }
  }
  saxonAttack() {
    this.vikingArmy[0].strength -= this.vikingArmy[0].receiveDamage(
      this.saxonArmy[0].strength
    );
    if (this.vikingArmy[0].health <= 0) {
      this.vikingArmy.pop();
      return `random`;
      // console.log( `${this.saxonArmy[0].strength}`)
      // console.log(`${Viking.name}`)
    }
    return `Harald has received ${this.saxonArmy[0].strength} points of damage`;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
