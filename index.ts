/*
type stringOrNumber = string | Number;

type PersonObject = {
  name: string,
  surname: string,
  id: stringOrNumber
}

const PersonOne : PersonObject = {
  name: 'Damilare',
  surname: 'Adeola',
  id: 2
}

const PersonTwo : PersonObject = {
  name: 'Sholape',
  surname: 'Ogunjobi',
  id: 'three'
}

const PersonThree : PersonObject = {
  name: 'Chikam',
  surname: 'Odi',
  id: 10
}

const PrintPersonOne = (person : PersonObject) => {
  console.log(`Name: ${person.name}, ID: ${person.id}`)
}

const PrintFullName = (person : PersonObject) => {
  console.log(`Fullname: ${person.name} ${person.surname}`)
}

PrintPersonOne(PersonTwo)
PrintFullName(PersonThree

*/
/*
type Book = {
  title: string | Number,
  author: string,
  yearOfPublication: Number | null,
  publicationHouse: string | null,
  genre: string | null
}

const thingsFallApart : Book = {
  title: 'Things Fall Apart',
  author: 'Chinua Achebe',
  yearOfPublication: 1962,
  publicationHouse: 'Heinamann',
  genre: 'Literature'
}

const lionAndJewel : Book = {
  title: 'Lion and the Jewel',
  author: 'Wole Soyinka',
  yearOfPublication: 1970,
  publicationHouse: null,
  genre: 'Literature'
}

const PrintLiterature = (book : Book) => {
  console.log(`Title: ${book.title},\n Author: ${book.author}`)
}

PrintLiterature(thingsFallApart)
*/

/*
interface Poetry {
  name: string | Number
  author: string | Number
  nobel: Boolean
  genre: string[]
  age: Number
}

const arthur: Poetry = {
  name: 'Happy As If I Kissed A Girl',
  author: 'Arthur Rimbaud',
  nobel: false,
  genre: ['Romantic', 'Lyrical'],
  age: 45
}

const PrintPoetry = (poet: Poetry) => {
  console.log(`Name: ${poet.name},\nAuthor: ${poet.author},\nNobel Prize: ${poet.nobel},\nGenre: ${poet.genre[1]},\nAge: ${poet.age}`)
}

PrintPoetry(arthur)
*/

/*
interface language {
  id: number,
  language: string,
  englishFirstLanguage: boolean
}

const languageOne : language = {
  id: 1,
  language: 'Yoruba',
  englishFirstLanguage: true
}

const printLanguage = (lang : language) => {
  console.log(`${lang.id},\n${lang.language},\n${lang.englishFirstLanguage}`)
}

printLanguage(languageOne)
*/

/*
import { countryLifeExpectancy } from './life.js'

interface age {
  yearOfBirth: number,
  residentCountry: string
}
*/

/*
const countryLifeExpectancy = {
  HongKong : {
    male: 82.38,
    female: 88.17 
    }, 
  Japan : {
    male: 81.91,
    female: 88.09
    }
}
*/
//console.log(countryLifeExpectancy)

/*
var lifeExpectancy: number

const remainingYears = (life: age) => {
  let date = new Date()
  let year = date.getFullYear()
  let currentAge = year - life.yearOfBirth
  let countryExpectancy = life.residentCountry
*/
// Destructuring countries

/*
  const [countries, expectancies] = countryLifeExpectancy
  const countryNames = countries.country
  const listOfCountries = Object.values(countryNames)
*/
// Destructuring life expectancy

/*
  const expectancyYears = expectancies.years
  const listOfExpectancies = Object.values(expectancyYears)
*/
//console.log(listOfExpectancies)
/*
  for (let value in listOfCountries) {
    if (listOfCountries[value] == countryExpectancy) {
      lifeExpectancy = Number(listOfExpectancies[(listOfCountries.indexOf(countryExpectancy))].toFixed())
      lifeExpectancy = lifeExpectancy - currentAge
    }
  }

  return lifeExpectancy
}

const satoglu: age = {
  yearOfBirth: 2000,
  residentCountry: 'Mali'
}

if (lifeExpectancy === 0) {
  console.log(`Sorry ${satoglu.residentCountry}\'s data is not available`)
} else {
  console.log(`You have ${remainingYears(satoglu)} years left.`)
}
*/

/*
interface Color<T> {
  name: String,
  intensity: String | Number,
  family: T
}

const red: Color<String> = {
  name: 'Red',
  intensity: 'Passion',
  family: 'Primary'
}

const PrintColor = (c: Color<String>) => {
  console.log(c.family);
  console.log(c.name);
  console.log(c.intensity);
}

PrintColor(red);
*/

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