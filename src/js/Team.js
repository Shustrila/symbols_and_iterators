export default class Team {
  constructor() {
    this.characters = [];
  }

  add(name, type, health, level, attack, defence) {
    this.characters.push({
      name, type, health, level, attack, defence,
    });
  }
}
