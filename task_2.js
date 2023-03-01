const jsonString = `
{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}
`;
// console.log(jsonString);

const data = JSON.parse(jsonString);

const result = {
  name: data.name,
  age: data.age,
  skills: data.skills,
  salary: data.salary
};
console.log(result);