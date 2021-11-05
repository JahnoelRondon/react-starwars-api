
export function getAllStarShips(endpoint){
    return (
        fetch(endpoint)
        .then(res => res.json())
        .then(json => json.results)        
    )

}