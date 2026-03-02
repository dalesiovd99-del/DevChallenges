export interface Card {
    id: number,
    name: string,
    image: string,
    price: number,
    rating: number,
    votes: number,
    popular: boolean,
    available: boolean
}


async function JsonExtractor(): Promise<Card[]> {
    const url = "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json";
    return fetch(url)
        .then(response => response.json())
        .then((data: any) => {
            return data.map((item:any) => {
                return {
                    id: item.id,
                    name: item.name,
                    image: item.image,
                    price: item.price,
                    rating: item.rating,
                    votes: item.votes,
                    popular: item.popular,
                    available: item.available
                }
            })
        })


}
export default JsonExtractor;
//  "id": 1,
//     "name": "Cappuccino",
//     "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg",
//     "price": "$5.20",
//     "rating": 4.7,
//     "votes": 65,
//     "popular": true,
//     "available": true