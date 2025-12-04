import { BlogItem } from '../components'
import PostsList from '../db/PostsList'
import './css/Post.css'

const Post = () => {
    return (
        <>
            <main className='post-main d-f jc-sb'>
                <h2 className="h2-title">Convergent and divergent plate margins</h2>
                <button className='btn-clear d-b'>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="46" height="46" rx="23" stroke="#E6E8EC" stroke-width="2" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9986 22.0401C21.028 22.5916 20.6047 23.0625 20.0532 23.0919C19.3005 23.132 18.7044 23.1811 18.2385 23.2302C17.6129 23.2962 17.2328 23.6805 17.1696 24.2333C17.0789 25.0269 17 26.2279 17 28.0002C17 29.7724 17.0789 30.9735 17.1696 31.7671C17.2329 32.3208 17.6121 32.7041 18.2368 32.77C19.3308 32.8855 21.1392 33.0002 24 33.0002C26.8608 33.0002 28.6692 32.8855 29.7632 32.77C30.3879 32.7041 30.7671 32.3208 30.8304 31.7671C30.9211 30.9735 31 29.7724 31 28.0002C31 26.2279 30.9211 25.0269 30.8304 24.2333C30.7672 23.6805 30.3871 23.2962 29.7615 23.2302C29.2956 23.1811 28.6995 23.132 27.9468 23.0919C27.3953 23.0625 26.972 22.5916 27.0014 22.0401C27.0308 21.4886 27.5017 21.0653 28.0532 21.0947C28.8361 21.1364 29.4669 21.1881 29.9712 21.2412C31.4556 21.3978 32.6397 22.4509 32.8175 24.0061C32.9188 24.8925 33 26.1717 33 28.0002C33 29.8287 32.9188 31.1079 32.8175 31.9943C32.6398 33.5486 31.4585 34.6022 29.9732 34.7589C28.7919 34.8836 26.9108 35.0002 24 35.0002C21.0892 35.0002 19.2081 34.8836 18.0268 34.7589C16.5415 34.6022 15.3602 33.5486 15.1825 31.9943C15.0812 31.1079 15 29.8287 15 28.0002C15 26.1717 15.0812 24.8925 15.1825 24.0061C15.3603 22.4509 16.5444 21.3978 18.0288 21.2412C18.5331 21.1881 19.1639 21.1364 19.9468 21.0947C20.4983 21.0653 20.9692 21.4886 20.9986 22.0401Z" fill="#777E91" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2071 18.2071C20.8166 18.5976 20.1834 18.5976 19.7929 18.2071C19.4024 17.8166 19.4024 17.1834 19.7929 16.7929L23.2929 13.2929C23.6834 12.9024 24.3166 12.9024 24.7071 13.2929L28.2071 16.7929C28.5976 17.1834 28.5976 17.8166 28.2071 18.2071C27.8166 18.5976 27.1834 18.5976 26.7929 18.2071L25 16.4142V26C25 26.5523 24.5523 27 24 27C23.4477 27 23 26.5523 23 26V16.4142L21.2071 18.2071Z" fill="#777E91" />
                    </svg>
                </button>
            </main>
            <div className="post-content d-f">
                <div className="post-info d-f">
                    <div>
                        <h4 className="post-bl-title">Convergent</h4>
                        <p className="post-bl-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div style={{ marginTop: "24px", marginBottom: "24px" }}>
                            <img src="/images/post1.png" alt="post1" />
                        </div>
                        <p className="post-bl-desc">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div>
                        <h4 className="post-bl-title">Divergent plate margins</h4>
                        <div><img src="/images/post2.png" alt="post2" /></div>
                        <p className="post-bl-desc" style={{ marginTop: "24px" }}>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                            unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <ul className="post-bl-list">
                            <li>Specialized bilingual guide</li>
                            <li>Private Transport</li>
                            <li>Entrance fees (Cable and car and Moon Valley)</li>
                            <li>Box lunch water, banana apple and chocolate</li>
                        </ul>
                        <p className="post-bl-desc">
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className="post-popular">
                    <h4 className="post-popular-title">Popular Post</h4>
                    <div className="post-popular-box d-f">
                        {
                            [1, 2, 3, 4, 5].map((num) => {
                                return (
                                    <div className="post-popular-item d-f" key={`popular-post${num}`}>
                                        <div><img src="/images/post-popular1.png" alt="post-popular1" /></div>
                                        <dl>
                                            <dt>Convergent and divergent plate margins</dt>
                                            <dd>Isabelle O'Conner</dd>
                                        </dl>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <section className="tour-review">
                <div className="d-f jc-sb">
                    <div>
                        <h4 className="tour-review-title">Add a review</h4>
                        <p className="tour-review-desc">
                            Be the first to review <span>Spectacular views of Venice, Rome & Milan</span>
                        </p>
                    </div>
                    <div className="tour-review-rating d-f">
                        <img src="/images/rating-four.png" alt="rating-four" width={136} height={24} />
                    </div>
                </div>
                <form action="" className='tour-review-fm'>
                    <input type="text" name="reviewText" placeholder='Share your thoughts' />
                    <div className="actions d-f align-center">
                        <button type='button' className='btn-clear d-b'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM8.97195 13.7648C8.84206 13.228 8.30161 12.8982 7.76481 13.028C7.22802 13.1579 6.89816 13.6984 7.02805 14.2352C7.29096 15.3217 7.9358 16.2791 8.84106 16.958C9.74527 17.6362 10.8592 18 12 18C13.1408 18 14.2547 17.6362 15.1589 16.958C16.0642 16.2791 16.709 15.3217 16.972 14.2352C17.1018 13.6984 16.772 13.1579 16.2352 13.028C15.6984 12.8982 15.1579 13.228 15.028 13.7648C14.8786 14.3824 14.5072 14.9468 13.9589 15.358C13.4096 15.77 12.719 16 12 16C11.281 16 10.5904 15.77 10.0411 15.358C9.49278 14.9468 9.12138 14.3824 8.97195 13.7648ZM10.1786 10.9839C9.63515 11.0825 9.11469 10.722 9.01607 10.1786C9.01169 10.1544 9.00616 10.1326 9 10.1131C8.99384 10.1326 8.98831 10.1544 8.98393 10.1786C8.88531 10.722 8.36485 11.0825 7.82144 10.9839C7.27803 10.8853 6.91745 10.3648 7.01607 9.82144C7.09929 9.36286 7.31014 8.91656 7.65316 8.57354C8.00072 8.22598 8.47316 8 9 8C9.52683 8 9.99928 8.22598 10.3468 8.57354C10.6899 8.91656 10.9007 9.36286 10.9839 9.82144C11.0825 10.3648 10.722 10.8853 10.1786 10.9839ZM15.0161 10.1786C15.1147 10.722 15.6352 11.0825 16.1786 10.9839C16.722 10.8853 17.0825 10.3648 16.9839 9.82144C16.9007 9.36286 16.6899 8.91656 16.3468 8.57354C15.9993 8.22598 15.5268 8 15 8C14.4732 8 14.0007 8.22598 13.6532 8.57354C13.3101 8.91656 13.0993 9.36286 13.0161 9.82144C12.9175 10.3648 13.278 10.8853 13.8214 10.9839C14.3648 11.0825 14.8853 10.722 14.9839 10.1786C14.9883 10.1544 14.9938 10.1326 15 10.1131C15.0062 10.1326 15.0117 10.1544 15.0161 10.1786Z" fill="#777E91" />
                            </svg>
                        </button>
                        <button className='post d-b'>Post it!</button>
                    </div>
                </form>
                <div className="tour-review-comments">
                    <div className="d-f jc-sb">
                        <h4 className="tour-review-title">3 comments</h4>
                        <div className='comments-sort d-f jc-sb align-center'>
                            <p className="comments-sort-name">Newest</p>
                            <button type="button" className='btn-clear d-b'>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="1" width="30" height="30" rx="15" stroke="#E6E8EC" stroke-width="2" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2071 13.7929C19.8166 13.4024 19.1834 13.4024 18.7929 13.7929L16 16.5858L13.2071 13.7929C12.8166 13.4024 12.1834 13.4024 11.7929 13.7929C11.4024 14.1834 11.4024 14.8166 11.7929 15.2071L15.2929 18.7071C15.6834 19.0976 16.3166 19.0976 16.7071 18.7071L20.2071 15.2071C20.5976 14.8166 20.5976 14.1834 20.2071 13.7929Z" fill="#777E91" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="comments-box d-f">
                        <div className="comments-item d-f">
                            <div><img src="/images/blog-avatars/1.png" alt="blog-avatars1" width={40} height={40} /></div>
                            <div>
                                <h4 className="commets-item-name">Samson Heathcote</h4>
                                <p className="comments-item-desc">
                                    We had the most spectacular view. Unfortunately it was
                                    very hot in the room from 2-830 pm due to no air conditioning and no shade.
                                </p>
                                <div className="comments-item-actions d-f">
                                    <p className="comments-item-time">about 1 hour ago</p>
                                    <button className='comments-item-btn btn-clear d-b'>Like</button>
                                    <button className='comments-item-btn btn-clear d-b'>Reply</button>
                                </div>
                            </div>
                            <div><img src="/images/rating-five.png" alt="rating-five" width={88} height={16} /></div>
                        </div>
                        <div className="comments-item d-f">
                            <div><img src="/images/blog-avatars/2.png" alt="blog-avatars2" width={40} height={40} /></div>
                            <div>
                                <h4 className="commets-item-name">Samson Heathcote</h4>
                                <p className="comments-item-desc">
                                    We had the most spectacular view. Unfortunately it was very hot
                                </p>
                                <div className="comments-item-actions d-f">
                                    <p className="comments-item-time">about 1 hour ago</p>
                                    <button className='comments-item-btn btn-clear d-b'>Like</button>
                                    <button className='comments-item-btn btn-clear d-b'>Reply</button>
                                </div>
                            </div>
                            <div><img src="/images/rating-five.png" alt="rating-five" width={88} height={16} /></div>
                        </div>
                        <div className="comments-item d-f">
                            <div><img src="/images/blog-avatars/3.png" alt="blog-avatars3" width={40} height={40} /></div>
                            <div>
                                <h4 className="commets-item-name">Samson Heathcote</h4>
                                <p className="comments-item-desc">
                                    We had the most spectacular view. Unfortunately it was very hot in the room
                                    from 2-830 pm due to no air conditioning and no shade.
                                </p>
                                <div className="comments-item-actions d-f">
                                    <p className="comments-item-time">about 1 hour ago</p>
                                    <button className='comments-item-btn btn-clear d-b'>Like</button>
                                    <button className='comments-item-btn btn-clear d-b'>Reply</button>
                                </div>
                            </div>
                            <div><img src="/images/rating-five.png" alt="rating-five" width={88} height={16} /></div>
                        </div>
                    </div>
                    <button className='comments-more'>Loading</button>
                </div>
            </section>
            <section className='post-related'>
                <p className="above">the perfect trip</p>
                <h2 className="h2-title">Related articles</h2>
                <div className="d-f jc-sb align-center">
                    <div className="post-related-tabs d-f">
                        <button className='tab-btn'>All</button>
                        <button className='tab-btn tab-btn__active'>Tips and Tricks</button>
                        <button className='tab-btn'>Exploring</button>
                        <button className='tab-btn'>Off Topic</button>
                        <button className='tab-btn'>Travel</button>
                        <button className='tab-btn'>How To</button>
                    </div>
                    <div className="post-related-actions d-f">
                        <button className='btn-clear d-b'>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9091 15.2652C17.5032 14.8906 16.8706 14.9159 16.496 15.3217L13.2652 18.8217C12.9116 19.2047 12.9116 19.7952 13.2652 20.1782L16.496 23.6783C16.8706 24.0841 17.5032 24.1094 17.909 23.7348C18.3149 23.3602 18.3402 22.7276 17.9656 22.3217L16.284 20.5L26 20.5C26.5523 20.5 27 20.0523 27 19.5C27 18.9477 26.5523 18.5 26 18.5L16.284 18.5L17.9656 16.6783C18.3402 16.2725 18.3149 15.6398 17.9091 15.2652Z" fill="#777E91" />
                            </svg>
                        </button>
                        <button className='btn-clear d-b'>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="38" height="38" rx="19" stroke="#E6E8EC" stroke-width="2" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0909 15.2652C22.4968 14.8906 23.1294 14.9159 23.504 15.3217L26.7348 18.8217C27.0884 19.2047 27.0884 19.7952 26.7348 20.1782L23.504 23.6783C23.1294 24.0841 22.4968 24.1094 22.091 23.7348C21.6851 23.3602 21.6598 22.7276 22.0344 22.3217L23.716 20.5L14 20.5C13.4477 20.5 13 20.0523 13 19.5C13 18.9477 13.4477 18.5 14 18.5L23.716 18.5L22.0344 16.6783C21.6598 16.2725 21.6851 15.6398 22.0909 15.2652Z" fill="#777E91" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="post-related-box d-f">
                    {
                        PostsList.filter((elem) => elem.id < 5).map((post)=> {
                            return (
                                <BlogItem
                                    key={`related-post${post.id}`}
                                    {... post}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Post