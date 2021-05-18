//import {heroes} from './data/heroes';
//import {heroes} from './data/heroes';

import heroes from "../data/heroes";

//console.log(owners);
//const getHEroeById = (id) =>{
//    return heroes.find( ( heroe ) => {
//        if ( heroe.id === id) {
//                return true;
//        }else {
//            return false;
//        }            
//    } );
//}
const getHEroeById = (id) => heroes.find( ( heroe ) => heroe.id === id );


//console.log( getHEroeById(2) );

export const getHeroesByOwner = ( owner ) => heroes.filter((heroe) => heroe.owner === owner);

//console.log( getHeroesByOwner('DC') );

export default getHEroeById;