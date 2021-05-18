

// Desestructuración
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman'
};

//const { edad, nombre, clave, } = persona;

//console.log( nombre );
//console.log( edad );
//console.log( clave );

const otronombre = ({ clave, nombre, edad, rango = 'Capitán'}) =>{

    //console.log( nombre, edad, rango );

    return{
        nombreClave: clave,
        anios:edad,
        latlng: {
            lat: 26.454154,
            lng: -12.45484
        }
    }
}

const { nombreClave, anios, latlng: { lat, lng } } = otronombre( persona );

console.log(nombreClave, anios);
console.log( lat, lng );
