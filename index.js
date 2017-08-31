'use strict';

setTimeout(() => console.log('Deu o Tempo'), 100);

function cbteste(parametro, callback) {
  if (parametro === 'erro') {
    callback(new Error('Deu merda'));
  } else {
    callback(null, parametro);
  }
}

cbteste('Sucesso', (err, resultado) => {
  console.log('Acabou');

  if (err) {
    console.log(err.message);
  } else {
    console.log(resultado)
  }
});


cbteste('erro', (err, resultado) => {
  console.log('Acabou');

  if (err) {
    console.log(err.message);
  } else {
    console.log(resultado)
  }
});
