interface Family<T> {
  name: String,
  age: Number,
  isMarried: Boolean,
  birthPosition: String | Number,
  occupation: T
}

const yourFamily = (member: Family<String>) => {
  console.log(`${member.name}\n${member.age}\n${member.isMarried}\n${member.birthPosition}\n${member.occupation}`)
}

let lare: Family<String> = {
  name: 'Damilare',
  age: 31,
  isMarried: false,
  birthPosition: 'Fifth',
  occupation: 'Computer Scientist & Machine Learning Engineer'
}

yourFamily(lare);