//Async Await

//syntax
async function fetchUsers() {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await resp.json();
  console.log(data);
}

const urls = [
  'https://jsonplaceholder.typicode.com/posts', 
  'https://jsonplaceholder.typicode.com/users', 
  'https://jsonplaceholder.typicode.com/albums' 
];

const getData = async function () {
    try {
        const [users, posts, albums] = await Promise.all(
            urls.map(url =>fetch(url).then(res => res.json()))
          );
          console.log(`users`,users)
          console.log(`post`,posts)
          console.log(`albums`,albums)
    }catch (err) {
        console.log(`Opps`,err);
    }
}
const getData2 = async function () {
  const arrayOfPromises = urls.map(url => fetch(url))
  for  await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
}