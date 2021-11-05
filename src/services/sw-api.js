
export function getAllStarShips(endpoint){
    fetch(endpoint)
    .then(res => res.json())
    .then(json => console.log(json.results))
}