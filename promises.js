'use strict';

function minhaPromise(text) {
  return new Promise((resolve, reject) => {
    if (text === 'User-Agent') {
      reject(new Error('404'));
    } else {
      resolve(text);
    }
  });
}

minhaPromise('hello')
  .then(result => console.log('P1 Finalizada ', result))
  .then( () => minhaPromise('User-Agent'))
  .then( () => console.log('Todas promises acabaram'))
  .catch( (err) => console.log('Aconteceu um erro... ', err.message))
  .then( () => console.log('FIM'))

