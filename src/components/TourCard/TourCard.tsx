import React from 'react'
import classes from './TourCard.module.css'

type TourCardProps = {
    id: number
    image: string
    title: string
    price: string
    salePrice: string
    duration: string
    rating: string
}

const TourCard = ({ image, title, price, salePrice, duration, rating }: TourCardProps) => {
    const [liked, setLiked] = React.useState(false)
    const handleLiked = ()=> {
        setLiked((prevState)=> {
            return (
                !prevState
            )
        })
    }

    return (
        <div className={classes.tour_card}>
            <div className={classes.tour_card_main} style={{ background: `url(${image}) no-repeat` }}>
                <button className={classes.tour_card_liked} onClick={handleLiked}>
                    <img src={liked ? "/images/heart-filled.png" : "/images/heart.png" } alt="heart" />
                </button>
                <a href="" className={classes.tour_card_link}>Explore</a>
            </div>
            <h3 className={classes.tour_card_title}>{title}</h3>
            <div className={classes.tour_card_price}>
                <p className={classes.price_name}>Price</p>
                <div className={classes.price_info}>
                    <p className={classes.old_price}>${price}</p>
                    <p className={classes.sale_price}>${salePrice}</p>
                </div>
            </div>
            <div className={classes.tour_card_bottom}>
                <p className={classes.tour_card_duration}>{duration}</p>
                <p className={classes.tour_card_rating}>{rating}</p>
            </div>
        </div>
    )
}

export default TourCard