class Character {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  Who() {
    return `The ${this.name}`;
  }
}

const character = new Character('Doctor');
console.log(`Who is it? ${character.Who()}!`);
