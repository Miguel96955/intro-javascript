



    const nombre = 'Miguel';
    const apellido = 'Vega';

    const nombreCompleto = `${ nombre } ${ apellido }`;
    console.log( nombreCompleto );
    


function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un mensaje: ${ getSaludo(nombre) }`);