var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  countryLifeExpectancy: () => countryLifeExpectancy
});
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  countryLifeExpectancy
});
//# sourceMappingURL=data.js.map
