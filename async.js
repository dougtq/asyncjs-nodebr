'use strict';

const request = require('request-promise').defaults({
  headers: {
    Accept: '*/*',
    'User-Agent': 'BitBucket',
    json: true
  }
});

function repo(user) {
  return request(`https://api.github.com/users/${user}/repos`);
}

async function teste3() {
  if ( await repo('dougtq').then( (repos) => ( repos.length) ) > 9 ){
    console.log(' É maior que 9 ')
  }
}

async function teste2() {
  const [doug, alan] = await Promise.all([
    repo('dougtq'), repo('alanhoff')
  ]);

  console.log('DougTQ tem %s repositórios', doug.length)
  console.log('AlanHoff tem %s repositórios', alan.length)
}

async function teste() {
  console.log('Iniciando');
  const repos = await request('https://api.github.com/users/dougtq/repos');
  console.log('Número de repositórios:', repos.length);
}

// teste()
// .then(() => console.log('Terminou'))
// .catch(err => console.error(err.message));


teste3()
.then(() => console.log('Terminou'))
.catch(err => console.error(err.message));



// teste2()
//   .then(() => console.log('Terminou'))
//   .catch(err => console.error(err.message));
