import React from 'react'
import { BlogItem } from '../components'
import PostsList from '../db/PostsList'
import './css/Blog.css'

const Blog = () => {
    const [categoryName, setCategoryName] = React.useState("All")

    return (
        <>
            <main className='blog-main'>
                <h1 className="h2-title">Blog</h1>
                <p className="blog-main-desc">
                    Track your workouts, get better results,
                    and be the best version of you. Less thinking
                </p>
            </main>
            <section className='blog-featured d-f align-center'>
                <div><img src="/images/blog-featured-pic.png" alt="blog-featured-pi" /></div>
                <div>
                    <p className="blog-featured-catgory">Tips and Tricks</p>
                    <h3 className="blog-featured-title">Convergent and divergent plate margins</h3>
                    <p className="blog-featured-desc">
                        Track your workouts, get better results, and be the best version of you. Less thinking
                    </p>
                    <a href="" className="blog-featured-more">Read more</a>
                </div>
            </section>
            <div className="blog-filters d-f jc-sb align-center">
                <div className="blog-tabs d-f">
                    <button
                        className={categoryName === "All" ? 'tab-btn tab-btn__active' : 'tab-btn'}
                        onClick={() => setCategoryName("All")}
                    >
                        All
                    </button>
                    <button
                        className={categoryName === "Tips and Tricks" ? 'tab-btn tab-btn__active' : 'tab-btn'}
                        onClick={() => setCategoryName("Tips and Tricks")}
                    >
                        Tips and Tricks
                    </button>
                    <button
                        className={categoryName === "Exploring" ? 'tab-btn tab-btn__active' : 'tab-btn'}
                        onClick={() => setCategoryName("Exploring")}
                    >
                        Exploring
                    </button>
                    <button
                        className={categoryName === "Off Topic" ? 'tab-btn tab-btn__active' : 'tab-btn'}
                        onClick={() => setCategoryName("Off Topic")}
                    >
                        Off Topic
                    </button>
                    <button
                        className={categoryName === "Travel" ? 'tab-btn tab-btn__active' : 'tab-btn'}
                        onClick={() => setCategoryName("Travel")}
                    >
                        Travel
                    </button>
                    <button
                        className={categoryName === "How To" ? 'tab-btn tab-btn__active' : 'tab-btn'}
                        onClick={() => setCategoryName("How To")}
                    >
                        How To
                    </button>
                </div>
                <form action="" className='blog-search'>
                    <button type="button" className='btn-clear d-b'>
                        <img src="/images/search2.png" alt="search2" />
                    </button>
                    <input type="text" name='searchQuery' placeholder='Search everything' />
                </form>
            </div>
            <div className="blog-box d-f">
                {
                    PostsList.filter((elem) => elem.category === categoryName || categoryName === "All").map((post) => {
                        return (
                            <BlogItem
                                key={`post${post.id}`}
                                {...post}
                            />
                        )
                    })
                }
            </div>
            <button className='blog-more'>Loading</button>
        </>
    )
}

export default Blog