const urls = [
  `https://jsonplaceholder.typicode.com/users`, //users
  `https://jsonplaceholder.typicode.com/posts`, //posts
  `https://jsonplaceholder.typicode.com/albums`, // albums
];
Promise.all(
  urls.map((url) => {
    return fetch(url).then((res) => res.json());
  })
)
  .then((result) => {
    console.log(result[0]), console.log(result[1]), console.log(result[2]);
  })
  //url we typed wrong or the request did not return
  .catch(() => {
    console.log(`error`);
  });
