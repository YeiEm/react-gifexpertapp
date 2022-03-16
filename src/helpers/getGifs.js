export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=5&q=${encodeURI(category)}&api_key=yKcFGXFmyWXzLooUsGNIOVYtevqzvC8Q`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url  //pongo el signo de ? para preguntar si tiene imagenes usalo tal valor

        }
    })
    return gifs; //asiganmos los gifs a images
}