'use strict';

const request = require('request').defaults({
  headers: {
    Accept: '*/*',
    'User-Agent': 'ALL'
  }
});

request.get('https://api.github.com/users/dougtq/repos', (err, res, body) => {
  if (err) {
    throw err;
  }

  if (res.statusCode !== '200') {
    const repos = JSON.parse(body);

    repos.forEach( (rep) => {
      console.log(rep.name)  
    });

  }else{
  
    console.log('Status da requisição: ', res.statusCode);
  
  }
  
});
