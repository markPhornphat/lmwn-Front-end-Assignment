// const res = fetch("https://jsonplaceholder.typicode.com/posts/1");
// if (res !== 200) {
//   console.log(res);
// }
// const json = res.json();
// console.log(json);

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json()) //Change json to JS object
  .then((data) => console.log(data));
