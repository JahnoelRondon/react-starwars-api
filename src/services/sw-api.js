const baseurl = process.env.REACT_APP_BASEURL;

export function getAllStarShips(){
    return (
        fetch(`${baseurl}/starships`)
        .then(res => res.json())
        .then(json => json.results)        
    )

}