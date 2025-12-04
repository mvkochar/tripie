import { Link } from 'react-router-dom'
import classes from './BlogItem.module.css'

type BlogItemProps = {
    id: number
    image: string
    category: string
    avatar: string
    title: string
    author: string
    date: string
    views: number
}

const BlogItem = ({ image, category, avatar, title, author, date, views }: BlogItemProps) => {
    return (
        <div className={classes.blog_item} style={{background: `url(${image}) no-repeat`}}>
            <div className={classes.blog_item_main}>
                <p className={classes.blog_item_category}>{category}</p>
                <Link to='/post' className={classes.blog_item_more}>Read more</Link>
            </div>
            <div className={classes.blog_item_about}>
                <div><img src={avatar} alt="avatar" /></div>
                <div>
                    <h3 className={classes.blog_item_title}>{title}</h3>
                    <p className={classes.blog_item_author}>{author}</p>
                </div>
            </div>
            <div className={classes.blog_item_info}>
                <p className={classes.blog_item_date}>{date}</p>
                <p className={classes.blog_item_views}>{views}</p>
            </div>
        </div>
    )
}

export default BlogItem