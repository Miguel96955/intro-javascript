

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 553512842,  
        lat: 12.45425,
        lng: 35.544522154
    }
};



const persona2 = {...persona};
persona2.nombre = 'Peter';


console.log(persona);
console.log(persona2);


