import React from 'react'
import { TourCard, TourPlanItem } from '../components'
import './css/TourDetails.css'
import ToursList from '../db/ToursList'

const TourDetails = () => {
    const [nightsCount, setNightsCount] = React.useState(2)
    const incrementNights = () => {
        setNightsCount((prevState) => {
            return (
                prevState + 1
            )
        })
    }

    const decrementNights = () => {
        setNightsCount((prevState) => {
            return (
                prevState - 1
            )
        })
    }

    return (
        <>
            <main className='tour-main d-f jc-sb'>
                <div>
                    <h2 className="h2-title">Venice, Rome & Milan</h2>
                    <div className="tour-main-info d-f">
                        <p className="tour-main-reviews"><span>4.8</span> (256 reviews)</p>
                        <p className="tour-main-location">Queenstown, Otago, New Zealand</p>
                    </div>
                </div>
                <div className='tour-main-actions d-f'>
                    <button className='btn-clear d-b'>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="38" height="38" rx="19" stroke="#E6E8EC" stroke-width="2" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.253 10.4782C28.3136 9.61966 30.3809 11.6869 29.5223 13.7475L23.5988 27.9639C22.4403 30.7442 18.3655 30.2743 17.8703 27.3033L17.1313 22.8692L12.6972 22.1302C9.72626 21.635 9.25632 17.5602 12.0366 16.4018L26.253 10.4782ZM27.6761 12.9782C27.8478 12.5661 27.4344 12.1527 27.0223 12.3244L12.8058 18.2479C11.8791 18.6341 12.0357 19.9923 13.026 20.1574L17.4601 20.8964C18.3031 21.0369 18.9636 21.6974 19.1041 22.5404L19.8431 26.9745C20.0082 27.9648 21.3665 28.1214 21.7526 27.1947L27.6761 12.9782Z" fill="#777E91" />
                        </svg>
                    </button>
                    <button className='btn-clear d-b'>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="38" height="38" rx="19" stroke="#E6E8EC" stroke-width="2" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9986 18.0401C17.028 18.5916 16.6047 19.0625 16.0532 19.0919C15.3005 19.132 14.7044 19.1811 14.2385 19.2302C13.6129 19.2962 13.2328 19.6805 13.1696 20.2333C13.0789 21.0269 13 22.2279 13 24.0002C13 25.7724 13.0789 26.9735 13.1696 27.7671C13.2329 28.3208 13.6121 28.7041 14.2368 28.77C15.3308 28.8855 17.1392 29.0002 20 29.0002C22.8608 29.0002 24.6692 28.8855 25.7632 28.77C26.3879 28.7041 26.7671 28.3208 26.8304 27.7671C26.9211 26.9735 27 25.7724 27 24.0002C27 22.2279 26.9211 21.0269 26.8304 20.2333C26.7672 19.6805 26.3871 19.2962 25.7615 19.2302C25.2956 19.1811 24.6995 19.132 23.9468 19.0919C23.3953 19.0625 22.972 18.5916 23.0014 18.0401C23.0308 17.4886 23.5017 17.0653 24.0532 17.0947C24.8361 17.1364 25.4669 17.1881 25.9712 17.2412C27.4556 17.3978 28.6397 18.4509 28.8175 20.0061C28.9188 20.8925 29 22.1717 29 24.0002C29 25.8287 28.9188 27.1079 28.8175 27.9943C28.6398 29.5486 27.4585 30.6022 25.9732 30.7589C24.7919 30.8836 22.9108 31.0002 20 31.0002C17.0892 31.0002 15.2081 30.8836 14.0268 30.7589C12.5415 30.6022 11.3602 29.5486 11.1825 27.9943C11.0812 27.1079 11 25.8287 11 24.0002C11 22.1717 11.0812 20.8925 11.1825 20.0061C11.3603 18.4509 12.5444 17.3978 14.0288 17.2412C14.5331 17.1881 15.1639 17.1364 15.9468 17.0947C16.4983 17.0653 16.9692 17.4886 16.9986 18.0401Z" fill="#777E91" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2071 14.2071C16.8166 14.5976 16.1834 14.5976 15.7929 14.2071C15.4024 13.8166 15.4024 13.1834 15.7929 12.7929L19.2929 9.29289C19.6834 8.90237 20.3166 8.90237 20.7071 9.29289L24.2071 12.7929C24.5976 13.1834 24.5976 13.8166 24.2071 14.2071C23.8166 14.5976 23.1834 14.5976 22.7929 14.2071L21 12.4142V22C21 22.5523 20.5523 23 20 23C19.4477 23 19 22.5523 19 22V12.4142L17.2071 14.2071Z" fill="#777E91" />
                        </svg>
                    </button>
                    <button className='btn-clear d-b'>
                        <svg width="72" height="40" viewBox="0 0 72 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_5314_86640)">
                                <rect x="16" width="40" height="40" rx="20" fill="#FCFCFD" />
                                <rect x="17" y="1" width="38" height="38" rx="19" stroke="#E6E8EC" stroke-width="2" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M36.6924 14.9171C36.3055 15.2884 35.6945 15.2884 35.3076 14.9171L34.6152 14.2526C33.8048 13.4749 32.7099 13 31.5 13C29.0147 13 27 15.0147 27 17.5C27 19.8826 28.2898 21.8501 30.1518 23.4666C32.0153 25.0844 34.2434 26.1574 35.5746 26.7051C35.853 26.8196 36.147 26.8196 36.4254 26.7051C37.7566 26.1574 39.9847 25.0844 41.8482 23.4666C43.7102 21.85 45 19.8826 45 17.5C45 15.0147 42.9853 13 40.5 13C39.2901 13 38.1952 13.4749 37.3848 14.2526L36.6924 14.9171ZM36 12.8096C34.8321 11.6888 33.2465 11 31.5 11C27.9101 11 25 13.9101 25 17.5C25 23.8683 31.9703 27.385 34.8138 28.5547C35.5796 28.8697 36.4204 28.8697 37.1862 28.5547C40.0297 27.385 47 23.8682 47 17.5C47 13.9101 44.0899 11 40.5 11C38.7535 11 37.1679 11.6888 36 12.8096Z" fill="#777E91" />
                            </g>
                            <defs>
                                <filter id="filter0_d_5314_86640" x="0" y="0" width="72" height="120" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feMorphology radius="48" operator="erode" in="SourceAlpha" result="effect1_dropShadow_5314_86640" />
                                    <feOffset dy="64" />
                                    <feGaussianBlur stdDeviation="32" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.121458 0 0 0 0 0.182875 0 0 0 0 0.275 0 0 0 0.12 0" />
                                    <feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow_5314_86640" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5314_86640" result="shape" />
                                </filter>
                            </defs>
                        </svg>

                    </button>
                </div>
            </main>
            <div className="tour-gallery d-f">
                <div className="col">
                    <div><img src="/images/tour-gallery/1.png" alt="tour-gallery1" /></div>
                    <div><img src="/images/tour-gallery/2.png" alt="tour-gallery2" /></div>
                </div>
                <div className="tour-gallery-central">
                    <button className='tour-gallery-btn'>Show all photos</button>
                </div>
                <div className="col">
                    <div><img src="/images/tour-gallery/4.png" alt="tour-gallery4" /></div>
                    <div><img src="/images/tour-gallery/5.png" alt="tour-gallery5" /></div>
                </div>
            </div>
            <div className="tour-content d-f">
                <div className='tour-about'>
                    <div>
                        <h4 className="tour-bl-title">Overview</h4>
                        <p className="tour-desc">
                            The secret journey of Tonkin is designed for travelers
                            who want to touch, taste and feel the souls of Northern
                            Vietnam through their unique highlights and experiences.
                            More than simple whirlwind tours, the secret journey of
                            Tonkin of Tonkin marry iconic destinations and must-see spots
                            with the hidden corners and below-the-skin experiences to discover
                            some of the famous and unique places around the Halong region.
                        </p>
                        <button className='tour-desc-more'>Show more</button>
                    </div>
                    <div className="tour-amenities">
                        <h4 className='tour-bl-title'>Amenities</h4>
                        <div className="tour-amenities-box d-f">
                            <div className="tour-amenities-item d-f">
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 8H6C4.89543 8 4 8.89543 4 10V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V10C20 8.89543 19.1046 8 18 8ZM6 6C3.79086 6 2 7.79086 2 10V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10C22 7.79086 20.2091 6 18 6H6Z" fill="#777E91" />
                                        <path d="M12 10C11.4477 10 11 10.4477 11 11V13H9C8.44772 13 8 13.4477 8 14C8 14.5523 8.44771 15 9 15H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V15H15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13H13V11C13 10.4477 12.5523 10 12 10Z" fill="#777E91" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4C9.44772 4 9 4.44772 9 5V6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6V5C7 3.34315 8.34315 2 10 2H14C15.6569 2 17 3.34315 17 5V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6V5C15 4.44772 14.5523 4 14 4H10Z" fill="#777E91" />
                                    </svg>
                                </div>
                                <p className="amenities-item-name">Near the hospital</p>
                            </div>
                            <div className="tour-amenities-item d-f">
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 18H11V20H13V18H15V20H16C16.5523 20 17 20.4477 17 21C17 21.5523 16.5523 22 16 22H8C7.44772 22 7 21.5523 7 21C7 20.4477 7.44772 20 8 20H9V18Z" fill="#777E91" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6L4 14C4 15.1046 4.89543 16 6 16L18 16C19.1046 16 20 15.1046 20 14L20 6C20 4.89543 19.1046 4 18 4L6 4C4.89543 4 4 4.89543 4 6ZM2 14C2 16.2091 3.79086 18 6 18L18 18C20.2091 18 22 16.2091 22 14L22 6C22 3.79086 20.2091 2 18 2L6 2C3.79086 2 2 3.79086 2 6L2 14Z" fill="#777E91" />
                                        <path d="M7 6C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8H14C14.5523 8 15 7.55228 15 7C15 6.44772 14.5523 6 14 6H7Z" fill="#777E91" />
                                        <path d="M7 10C6.44772 10 6 10.4477 6 11C6 11.5523 6.44772 12 7 12H9C9.55228 12 10 11.5523 10 11C10 10.4477 9.55228 10 9 10H7Z" fill="#777E91" />
                                    </svg>
                                </div>
                                <p className="amenities-item-name">Free computer</p>
                            </div>
                            <div className="tour-amenities-item d-f">
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 10C2 6.13401 5.13401 3 9 3H15C18.866 3 22 6.13401 22 10C22 11.6569 20.6569 13 19 13H5C3.34315 13 2 11.6569 2 10ZM9 5H15C17.7614 5 20 7.23858 20 10C20 10.5523 19.5523 11 19 11H5C4.44772 11 4 10.5523 4 10C4 7.23858 6.23858 5 9 5Z" fill="#777E91" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15H19C20.6569 15 22 16.3431 22 18ZM19 19H5C4.44772 19 4 18.5523 4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19Z" fill="#777E91" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 13H4C3.44772 13 3 13.4477 3 14C3 14.5523 3.44772 15 4 15H20C20.5523 15 21 14.5523 21 14C21 13.4477 20.5523 13 20 13ZM4 11C2.34315 11 1 12.3431 1 14C1 15.6569 2.34315 17 4 17H20C21.6569 17 23 15.6569 23 14C23 12.3431 21.6569 11 20 11H4Z" fill="#777E91" />
                                        <path d="M9 8C9 8.55229 8.55229 9 8 9C7.44772 9 7 8.55229 7 8C7 7.44772 7.44772 7 8 7C8.55229 7 9 7.44772 9 8Z" fill="#777E91" />
                                        <path d="M13 8C13 8.55229 12.5523 9 12 9C11.4477 9 11 8.55229 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z" fill="#777E91" />
                                        <path d="M16 9C16.5523 9 17 8.55229 17 8C17 7.44772 16.5523 7 16 7C15.4477 7 15 7.44772 15 8C15 8.55229 15.4477 9 16 9Z" fill="#777E91" />
                                    </svg>
                                </div>
                                <p className="amenities-item-name">Breakfast included</p>
                            </div>
                            <div className="tour-amenities-item d-f">
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 22C6.55228 22 7 21.5523 7 21H5C5 21.5523 5.44772 22 6 22Z" fill="#777E91" />
                                        <path d="M18 22C18.5523 22 19 21.5523 19 21H17C17 21.5523 17.4477 22 18 22Z" fill="#777E91" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19 13H5C4.44772 13 4 13.4477 4 14V18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18V14C20 13.4477 19.5523 13 19 13ZM5 11C3.34315 11 2 12.3431 2 14V18C2 19.6569 3.34315 21 5 21H19C20.6569 21 22 19.6569 22 18V14C22 12.3431 20.6569 11 19 11H5Z" fill="#777E91" />
                                        <path d="M17 2C16.4477 2 16 2.44772 16 3V11H18V3C18 2.44772 17.5523 2 17 2Z" fill="#777E91" />
                                        <path d="M7 6C6.44772 6 6 6.44772 6 7V11H8V7C8 6.44772 7.55228 6 7 6Z" fill="#777E91" />
                                        <path d="M7 15C6.44772 15 6 15.4477 6 16C6 16.5523 6.44772 17 7 17C7.55228 17 8 16.5523 8 16C8 15.4477 7.55228 15 7 15Z" fill="#777E91" />
                                        <path d="M11 15C10.4477 15 10 15.4477 10 16C10 16.5523 10.4477 17 11 17H17C17.5523 17 18 16.5523 18 16C18 15.4477 17.5523 15 17 15H11Z" fill="#777E91" />
                                    </svg>
                                </div>
                                <p className="amenities-item-name">Free wifi 24/7</p>
                            </div>
                            <div className="tour-amenities-item d-f">
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19 12H14V20H19C19.5523 20 20 19.5523 20 19V13C20 12.4477 19.5523 12 19 12ZM12 10V22H19C20.6569 22 22 20.6569 22 19V13C22 11.3431 20.6569 10 19 10H12Z" fill="#777E91" />
                                        <path d="M18 15C18 14.4477 17.5523 14 17 14C16.4477 14 16 14.4477 16 15C16 15.5523 16.4477 16 17 16C17.5523 16 18 15.5523 18 15Z" fill="#777E91" />
                                        <path d="M18 18C18 17.4477 17.5523 17 17 17C16.4477 17 16 17.4477 16 18C16 18.5523 16.4477 19 17 19C17.5523 19 18 18.5523 18 18Z" fill="#777E91" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 22C3.34315 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H11C12.6569 2 14 3.34315 14 5V22H5ZM5 4H11C11.5523 4 12 4.44772 12 5V20H10V19C10 18.4477 9.55229 18 9 18H7C6.44772 18 6 18.4477 6 19V20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4Z" fill="#777E91" />
                                        <path d="M9 6C9.55229 6 10 6.44772 10 7C10 7.55228 9.55228 8 9 8H7C6.44772 8 6 7.55228 6 7C6 6.44772 6.44772 6 7 6H9Z" fill="#777E91" />
                                        <path d="M9 10C9.55229 10 10 10.4477 10 11C10 11.5523 9.55228 12 9 12H7C6.44772 12 6 11.5523 6 11C6 10.4477 6.44772 10 7 10H9Z" fill="#777E91" />
                                        <path d="M10 15C10 14.4477 9.55229 14 9 14H7C6.44772 14 6 14.4477 6 15C6 15.5523 6.44772 16 7 16H9C9.55228 16 10 15.5523 10 15Z" fill="#777E91" />
                                    </svg>
                                </div>
                                <p className="amenities-item-name">Nearby city</p>
                            </div>
                            <div className="tour-amenities-item d-f">
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5ZM4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4Z" fill="#777E91" />
                                        <path d="M8 15.5C8 16.3284 7.32843 17 6.5 17C5.67157 17 5 16.3284 5 15.5C5 14.6716 5.67157 14 6.5 14C7.32843 14 8 14.6716 8 15.5Z" fill="#777E91" />
                                        <path d="M13 15.5C13 16.3284 12.3284 17 11.5 17C10.6716 17 10 16.3284 10 15.5C10 14.6716 10.6716 14 11.5 14C12.3284 14 13 14.6716 13 15.5Z" fill="#777E91" />
                                        <path d="M1 8H23V10H1V8Z" fill="#777E91" />
                                    </svg>
                                </div>
                                <p className="amenities-item-name">ATM</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="tour-bl-title">Tour Plan</h4>
                        <div className="tour-plan d-f">
                            <TourPlanItem
                                id={1}
                                title='Departure'
                                description='Ornare proin neque tempus cubilia cubilia blandit netus. Maecenas massa. Fermentum.'
                            />
                            <TourPlanItem
                                id={2}
                                title='The South Coast'
                                description='Ornare proin neque tempus cubilia cubilia blandit netus. 
                                            Maecenas massa. Fermentum. Pretium vitae tempus sem enim enim.
                                            Tempus, leo, taciti augue aliquam hendrerit.
                                            Accumsan pharetra eros justo augue posuere felis elit cras montes fames.
                                            Vulputate dictumst egestas etiam dictum varius.'
                            />
                            <TourPlanItem
                                id={3}
                                title='Optional Activities'
                                description='Accumsan pharetra eros justo augue posuere felis elit cras montes fames.
                                            Vulputate dictumst egestas etiam dictum varius.'
                            />
                        </div>
                    </div>
                    <div className="tour-map">
                        <h4 className="tour-bl-title">Tour Map</h4>
                        <div className="tour-map-frame">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.619316888789!2d-88.65565022347599!3d40.23976566639007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880ca3ae791749af%3A0xc111b6cf2561e97!2sMindtrip%20Meds!5e0!3m2!1sen!2sua!4v1764243118107!5m2!1sen!2sua" width="620" height="240" loading="lazy"></iframe>
                        </div>
                    </div>
                    <div>
                        <h4 className="tour-bl-title">Reviews</h4>
                        <h5 className="tour-reviews-mark h1-title">4.6<span>/5</span></h5>
                        <div className="tour-reviews-pic"><img src="/images/reviews-pic.png" alt="reviews-pic" /></div>
                    </div>
                </div>
                <div className="tour-reserve">
                    <h4 className="tour-reserve-price">
                        <span className='old-price'>$119</span>
                        &nbsp; $102
                        <span className='note'> &nbsp; /person</span>
                    </h4>
                    <p className="tour-reserve-reviews"><span>4.8</span> (256 reviews)</p>
                    <div className="tour-reserve-info d-f jc-sb">
                        <div className="item d-f">
                            <div><img src="/images/calendar.png" alt="calendar" /></div>
                            <dl>
                                <dt>Date</dt>
                                <dd>May 15, 2024</dd>
                            </dl>
                        </div>
                        <div className="item d-f">
                            <div><img src="/images/guest.png" alt="guest" width={24} /></div>
                            <dl>
                                <dt>Guests</dt>
                                <dd>2 guests</dd>
                            </dl>
                        </div>
                    </div>
                    <form action="" className='tour-reserve-fm'>
                        <div>
                            <label htmlFor="reserveInDate">Check in</label>
                            <input type="date" name="reserveInDate" id="reserveInDate" min="2025-11-24" max="2025-12-31" />
                        </div>
                        <div>
                            <label htmlFor="reserveOutDate">Check out</label>
                            <input type="date" name="reserveOutDate" id="reserveOutDate" min="2025-11-30" max="2025-12-31" />
                        </div>
                        <div>
                            <label htmlFor="reserveActivity">Activity</label>
                            <select name="reserveActivity" id="reserveActivity">
                                <option value="Airplane">Airplane</option>
                            </select>
                        </div>
                    </form>
                    <div className='total-reserve-nights'>
                        <p className="label">Total Night</p>
                        <div className="counter d-f jc-sb align-center">
                            <button
                                type='button' className='btn-clear d-b' onClick={decrementNights}
                                disabled={nightsCount === 1 ? true : false} >
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="1" width="30" height="30" rx="15" stroke="#E6E8EC" stroke-width="2" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 16C10 15.4477 10.4477 15 11 15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H11C10.4477 17 10 16.5523 10 16Z" fill="#777E91" />
                                </svg>
                            </button>
                            <p className="counter-num">{nightsCount}</p>
                            <button type='button' className='btn-clear d-b' onClick={incrementNights}>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="1" width="30" height="30" rx="15" stroke="#E6E8EC" stroke-width="2" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 11C17 10.4477 16.5523 10 16 10C15.4477 10 15 10.4477 15 11V15H11C10.4477 15 10 15.4477 10 16C10 16.5523 10.4477 17 11 17H15V21C15 21.5523 15.4477 22 16 22C16.5523 22 17 21.5523 17 21V17H21C21.5523 17 22 16.5523 22 16C22 15.4477 21.5523 15 21 15H17V11Z" fill="#777E91" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="tour-reserve-control d-f jc-sb">
                        <dl>
                            <dt>$204</dt>
                            <dd>Total for two peoples</dd>
                        </dl>
                        <button type="button" className='tour-reserve-book'>Book now</button>
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
            <section className='tour-interested'>
                <p className="above">the perfect trip</p>
                <h2 className="h2-title">You may interested in </h2>
                <div className="d-f jc-sb align-center">
                    <div className="tour-intersted-tabs d-f">
                        <button className='tab-btn tab-btn__active'>Sightseeing</button>
                        <button className='tab-btn'>Transportation activities</button>
                        <button className='tab-btn'>Art and culture</button>
                    </div>
                    <div className="tour-interested-actions d-f">
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
                <div className="tour-interested-box d-f">
                    {
                        ToursList.filter((elem) => elem.id < 5).map((tour) => {
                            return (
                                <TourCard
                                    key={`intersted-tour${tour.id}`}
                                    {...tour}
                                />
                            )
                        })
                    }
                </div>
            </section>
            <section className="tours-newsletter d-f align-center">
                <div>
                    <p className="above">Take a tour</p>
                    <h2 className="h2-title">Join our newsletter</h2>
                    <p className="tours-newsletter-desc">
                        An enim nullam tempor gravida donec enim  congue magna
                        at pretium purus pretium ligula rutrum luctus risusd
                        diam eget risus varius blandit.
                    </p>
                    <form action="" className='tours-newsletter-fm'>
                        <input type="email" name="newsletterEmail" placeholder='Enter your email' />
                        <button type="button" className='btn-clear d-b'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="16" fill="#4AC63F" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0909 11.2652C18.4968 10.8906 19.1294 10.9159 19.504 11.3217L22.7348 14.8217C23.0884 15.2047 23.0884 15.7952 22.7348 16.1782L19.504 19.6783C19.1294 20.0841 18.4968 20.1094 18.091 19.7348C17.6851 19.3602 17.6598 18.7276 18.0344 18.3217L19.716 16.5L10 16.5C9.44771 16.5 9 16.0523 9 15.5C9 14.9477 9.44771 14.5 10 14.5L19.716 14.5L18.0344 12.6783C17.6598 12.2725 17.6851 11.6398 18.0909 11.2652Z" fill="#FCFCFD" />
                            </svg>
                        </button>
                    </form>
                </div>
                <div><img src="/images/tours-newsletter-pic.png" alt="tours-newsletter-pic" /></div>
            </section>
        </>
    )
}

export default TourDetails