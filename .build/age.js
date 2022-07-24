var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var import_data = __toModule(require("./data.js"));
const remainingYears = (life) => {
  let date = new Date();
  let year = date.getFullYear();
  let currentAge = year - life.yearOfBirth;
  let countryExpectancy = life.residentCountry;
  let lifeExpectancy = 0;
  for (let i in import_data.countryLifeExpectancy) {
    if (i == countryExpectancy) {
      if (life.gender == "male") {
        lifeExpectancy = import_data.countryLifeExpectancy[i].male - currentAge;
      }
      if (life.gender == "female") {
        lifeExpectancy = import_data.countryLifeExpectancy[i].female - currentAge;
      } else {
        alert("Enter the right country");
        console.log("Country not in the list");
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
//# sourceMappingURL=age.js.map
