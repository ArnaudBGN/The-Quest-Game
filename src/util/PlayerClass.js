class PlayerCharacter {
  constructor(name, level, race, spells, stats) {
    this.name = name;
    this.level = level;
    this.race = race;
    this.spells = spells;
    this.stats = stats;
  }

  fight(enemy) {
    do {
      enemy.life -= this.stats.str + Math.floor(Math.random() * 6);
      this.stats.life -= enemy.str;
    } while (this.stats.life > 0 && enemy.life > 0);

    if (this.stats.life < 0) {
      return false;
    } else {
      return true;
    }
  }
}

export default PlayerCharacter;
