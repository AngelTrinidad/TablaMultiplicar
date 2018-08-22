const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
  console.log('================'.green);
  console.log(`Tabla del ${base}:`.green);
  console.log('================'.green);
  if(!Number(base)){
    console.log(`El valor introducido ${base} no es un número`);
    return;
  }

  let data = '';

  for (let i = 0; i <=limite; i++) {
    data += `${base} x ${i} = ${base*i}\n`;
  }
  console.log(data);
}

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {

    if(!Number(base)){
      reject(`El valor introducido ${base} no es un número`);
      return;
    }


    let data = '';
    let nameFile = `Tabla-${base}.txt`;

    for (let i = 0; i <= limite; i++) {
      data += `${base} x ${i} = ${base*i}\n`;
    }

    fs.writeFile(nameFile, data, err => {
      if(err) reject(err); else resolve(colors.green(nameFile));
    });
  });
}

module.exports = {crearArchivo, listarTabla}
