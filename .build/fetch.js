let url = "https://www.worldometers.info/demographics/life-expectancy/";
const fetchData = async () => {
  let data = await fetch(url);
  let text = await data.text();
  console.log(text);
};
fetchData();
//# sourceMappingURL=fetch.js.map
