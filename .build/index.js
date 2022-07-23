const countryLifeExpectancy = {
  HongKong: {
    male: 82.38,
    female: 88.17
  },
  Japan: {
    male: 81.91,
    female: 88.09
  }
};
const remainingYears = (life) => {
  let date = new Date();
  let year = date.getFullYear();
  let currentAge = year - life.yearOfBirth;
  let countryExpectancy = life.residentCountry;
  let lifeExpectancy = 0;
  for (let i in countryLifeExpectancy) {
    if (i == countryExpectancy) {
      if (life.gender == "male") {
        lifeExpectancy = countryLifeExpectancy[i].male - currentAge;
      }
      if (life.gender == "female") {
        lifeExpectancy = countryLifeExpectancy[i].female - currentAge;
      }
    }
  }
  return lifeExpectancy.toFixed();
};
const satoglu = {
  yearOfBirth: 1989,
  residentCountry: "Japan",
  gender: "male"
};
console.log(`You have ${remainingYears(satoglu)} years left.`);
//# sourceMappingURL=index.js.map
