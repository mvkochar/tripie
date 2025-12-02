import React from 'react'
import classes from './TourPlanItem.module.css'

type TourPlanItemProps = {
    id: number
    title: string
    description: string
}

const TourPlanItem = ({ id, title, description }: TourPlanItemProps) => {
    const [viewDesc, setViewDesc] = React.useState(false)
    const handleDesc = ()=> {
        setViewDesc((prevState)=> {
            return (
                !prevState
            )
        })
    }

    return (
        <div className={classes.item}>
            <p className={classes.day}>
                Day {id < 10 ? `0${id}` : id}
            </p>
            <div>
                <h4 className={classes.title}>{title}</h4>
                <p className={viewDesc ? classes.desc : classes.d_n}>{description}</p>
            </div>
            <button className={classes.action} onClick={handleDesc}>
                <img src={viewDesc ? "/images/arrow-up.png" : "/images/arrow-down.png"} alt="arrow" />
            </button>
        </div>
    )
}

export default TourPlanItem