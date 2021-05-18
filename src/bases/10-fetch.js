
const api_key = 'ZNctPmo8Snd3974OlUrgQqEycv8LhS5C';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ api_key }`);

peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );

    })
    .catch( console.warn );
    

