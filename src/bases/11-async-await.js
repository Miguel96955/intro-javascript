

const getImagen = async() => {

    try{
        const api_key = 'ZNctPmo8Snd3974OlUrgQqEycv8LhS5C'
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    } catch (error) {

    }

}

getImagen();





