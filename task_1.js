const parser = new DOMParser();
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

// console.log("xmlString", xmlString);

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

let listNode = xmlDOM.querySelector("list");
let studentNode = xmlDOM.querySelector("student");
let nameNode = xmlDOM.querySelector("name");
let firstNode = xmlDOM.querySelector("first");
let secondNode = xmlDOM.querySelector("second");
let ageNode = xmlDOM.querySelector("age");
let profNode = xmlDOM.querySelector("prof");
let langAttr = nameNode.getAttribute("lang");

// console.log(listNode);

// let iterable = [listNode];
// for (let item of iterable) {
//   console.log(iterable);
// }

const result = {
  list: [
    {
      name: firstNode.textContent + " " + secondNode.textContent,
      age: parseInt(ageNode.textContent),
      prof: profNode.textContent,
      lang: langAttr
    }
  ]
};

console.log(result);

// Научите меня как достать все элементы с одинаковым тегом student