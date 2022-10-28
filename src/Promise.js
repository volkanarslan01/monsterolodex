const promise = new Promise((resolve,reject) => {
    if(true) {
        resolve(`Stuff Worked`);
    }else {
        reject(`Error, it broke`)
    }
})
// promise
//  .then(resolve => {
//  throw Error  
//  return resolve + `?`})
//  .then ((result) => {
//  console.log(result);
// })
// .catch( () => console.log (`Error !`));

const promise2 = new Promise((resolve,reject) => {
    setTimeout(resolve, 100,`HII`)
})

const promise3 = new Promise((resolve,reject) => {
    setTimeout(resolve, 1000 , `POOKIE`)
})
const promise4 = new Promise((resolve,reject) => {
    setTimeout(resolve, 3000 , `It is me you are looking for?`)
})

Promise.all([promise,promise2,promise3,promise4]).then(value =>{
    console.log(value);
})