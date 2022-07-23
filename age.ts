/*
Simple Program to determine how long one has to live based on average live expectancy and current age.

Steps:
1. Calculate the current age
2. A dictionary or list item that contains the average life expectancy in various countries.
3. The persons nationality
4. Substract the life expectancy from the current age to know how many years left.
*/

interface age {
  yearOfBirth: number,
  residentCountry: string,
  gender: string
}

const countryLifeExpectancy = {
  HongKong: {
    male: 82.38,
    female: 88.17
  },
  Japan: {
    male: 81.91,
    female: 88.09
  }
}

const remainingYears = (life: age) => {
  let date = new Date()
  let year = date.getFullYear()
  let currentAge = year - life.yearOfBirth
  let countryExpectancy = life.residentCountry
  let lifeExpectancy = 0

  for (let i in countryLifeExpectancy) {
    if (i == countryExpectancy) {
      if (life.gender == 'male') {
        lifeExpectancy = countryLifeExpectancy[i].male - currentAge
      }
      if (life.gender == 'female') {
        lifeExpectancy = countryLifeExpectancy[i].female - currentAge
      }
    }
  }

  return lifeExpectancy.toFixed()
}

const satoglu: age = {
  yearOfBirth: 1989,
  residentCountry: 'Japan',
  gender: 'male'
}

console.log(`You have ${remainingYears(satoglu)} years left.`)