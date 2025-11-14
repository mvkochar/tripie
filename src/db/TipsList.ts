type TTip = {
    id: number
    image: string
    title: string
    description: string
    date: string
}

const TipsList: TTip[] = [
    {
       id: 1,
       image: "/images/tips/1.png",
       title: "Pack wisely before traveling",
       description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
       date: "25 May, 2021"
    },

    {
       id: 2,
       image: "/images/tips/2.png",
       title: "Introducing this amazing city",
       description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
       date: "25 May, 2021"
    },

    {
       id: 3,
       image: "/images/tips/3.png",
       title: "How to travel with paper map",
       description: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
       date: "25 May, 2021"
    },
]

export default TipsList