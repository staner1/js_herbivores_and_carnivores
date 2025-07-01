'use strict';

class Animal {
  static alive = [];
  #type = 'none';

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  setType(type) {
    this.#type = type;
  }

  get getType() {
    return this.#type;
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;
    this.setType('herbivore');
  }

  hide() {
    if (this.hidden === false) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    this.setType('carnivore');
  }

  bite(object) {
    if (object.getType !== 'carnivore' && object.hidden !== true) {
      object.health -= 50;
    }

    if (object.health <= 0) {
      const indexItem = Animal.alive.indexOf(object);

      if (indexItem !== -1) {
        Animal.alive.splice(indexItem, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
