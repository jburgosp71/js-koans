export default class DeathKnight {
  constructor (name, defense) {
    this.name = name
    this.defense = defense
    this.hitPoints = 100
  }

  recieveDamage (hitPoints) {
    if (hitPoints > this.defense) {
      this.hitPoints -= (hitPoints - this.defense)
    }
  }
 }