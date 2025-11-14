import React from 'react'
import classes from './TipCard.module.css'

type TipCardProps = {
    id: number
    image: string
    title: string
    description: string
    date: string
}

const TipCard = ({ image, title, description, date }: TipCardProps) => {
    const [liked, setLiked] = React.useState(false)
    const handleLiked = () => {
        setLiked((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <div className={classes.tip_card}>
            <div className={classes.tip_card_main} style={{ background: `url(${image}) no-repeat` }}>
                <button className={classes.tip_card_like} onClick={handleLiked}>
                    <img src={liked ? "/images/heart-filled.png" : "/images/heart.png" } alt="heart" />
                </button>
                <a href="" className={classes.tip_card_more}>Read More</a>
            </div>
            <h3 className={classes.tip_card_title}>{title}</h3>
            <p className={classes.tip_card_desc}>{description}</p>
            <p className={classes.tip_card_date}>{date}</p>
        </div>
    )
}

export default TipCard