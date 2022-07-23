interface Poetry {
  name: string | Number,
  author: string | Number,
  nobel: Boolean,
  genre: string[],
  age: Number
}

const arthur : Poetry = {
  name: 'Happy As If I Kissed A Girl',
  author: 'Arthur Rimbaud',
  nobel: false,
  genre: ['Romantic', 'Lyrical'],
  age: 45
}

const PrintPoetry = (poet : Poetry) => {
  console.log(`Name: ${poet.name},\nAuthor: ${poet.author},\nNobel Prize: ${poet.nobel},\nGenre: ${poet.genre},\nAge: ${poet.age}`)}

PrintPoetry(arthur)