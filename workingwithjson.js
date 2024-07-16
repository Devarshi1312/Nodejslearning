const fs = require('fs')
//reading data
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const jsonData = JSON.parse(data);
  console.log(jsonData);
});

//writing data
const data = {
    name: "Jane",
    age: 25,
    city: "Los Angeles"
  };
  
  
  fs.writeFile('output.json', data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Data written to file');
  });

//parsing JSON strings
const jsonString = '{"name": "Alice", "age": 28, "city": "Chicago"}';
const jsonObj = JSON.parse(jsonString);

console.log(jsonObj.name); // Output: Alice

//stringify javascript objects

const obj = {
  name: "Bob",
  age: 32,
  city: "San Francisco"
};

const jsonString1 = JSON.stringify(obj, null, 2);
console.log(jsonString1);