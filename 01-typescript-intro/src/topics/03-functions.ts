interface Character {
  name: string;
  hp: number;
  showHP: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

const strider: Character = {
  name: "Strider",
  hp: 50,
  showHP() {
    console.log(`Vida: ${this.hp}`);
  },
};

healCharacter(strider, 230);

export {};
