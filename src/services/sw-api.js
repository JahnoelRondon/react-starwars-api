const baseurl = process.env.REACT_APP_BASEURL || 'https://swapi.dev/api/';

export function getAllStarShips(){
    return (
        fetch(`${baseurl}/starships`)
        .then(res => res.json())
        .then(json => json.results)        
    )

}