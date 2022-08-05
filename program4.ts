interface Color <T> {
  name: String,
  intensity: String | Number,
  family: T
}

const red : Color<String> = {
  name: 'Red',
  intensity: 'Passion',
  family: 'Primary'
}

const PrintColor = (c : Color<String>) => {
  console.log(c.family);  
}

PrintColor(red);