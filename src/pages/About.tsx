import './css/About.css'

const About = () => {
    return (
        <>
            <section className='about-tour d-f align-center'>
                <div>
                    <p className="above">Take A Tour</p>
                    <h2 className="h2-title">Discover Our Travel Guideline</h2>
                    <p className="about-tour-desc">
                        An enim nullam tempor gravida donec enim  congue
                        magna at pretium purus pretium ligula rutrum luctus
                        risusd diam eget risus varius blandit sit amet non magna.
                    </p>
                    <ul className='about-tour-list'>
                        <li>Luctus risusd diam eget</li>
                        <li>Donec enim  congue magna</li>
                        <li>Blandit sit amet non magna</li>
                    </ul>
                    <a href="" className="about-tour-link">Learn more</a>
                </div>
                <div><img src="/images/about-tour.png" alt="about-tour" /></div>
            </section>
            <section className='about-perfection'>
                <p className="above">3 steps for the perfect trip</p>
                <h2 className="h2-title">Find Travel Perfection</h2>
                <p className="about-perfection-desc">
                    An enim nullam tempor gravida donec enim  congue magna at pretium purus
                    pretium ligula rutrum luctus risusd diam eget risus varius blandit sit amet non magna.
                </p>
                <a href="" className="about-perfection-link">Book now</a>
                <div className="about-perfection-box d-f">
                    <div className="about-perfection-item">
                        <div><img src="/images/perfection1.png" alt="perfection1" /></div>
                        <h3 className="perfection-item-title">Tell us what you want to do</h3>
                        <p className="perfection-item-desc">
                            Fully layered dolor sit amet, consectetur adipisicing elit.
                            Facere, nobis, id expedita dolores officiis laboriosam.
                        </p>
                    </div>
                    <div className="about-perfection-item">
                        <div><img src="/images/perfection2.png" alt="perfection2" /></div>
                        <h3 className="perfection-item-title">Share your travel preference</h3>
                        <p className="perfection-item-desc">
                            Fully layered dolor sit amet, consectetur adipisicing elit.
                            Facere, nobis, id expedita dolores officiis laboriosam.
                        </p>
                    </div>
                    <div className="about-perfection-item">
                        <div><img src="/images/perfection3.png" alt="perfection3" /></div>
                        <h3 className="perfection-item-title">We'll give you recommendations</h3>
                        <p className="perfection-item-desc">
                            Fully layered dolor sit amet, consectetur adipisicing elit.
                            Facere, nobis, id expedita dolores officiis laboriosam.
                        </p>
                    </div>
                </div>
            </section>
            <section className='about-popular'>
                <p className="above">3 steps for the perfect trip</p>
                <h2 className="h2-title">Popular Destinations</h2>
                <p className="text">
                    An enim nullam tempor gravida donec enim  congue magna
                    at pretium purus pretium ligula rutrum luctus risusd
                    diam eget risus varius blandit sit amet non magna.
                </p>
                <div className="about-popular-box d-f">
                    <div className="about-popular-item">
                        <div className="main">
                            <p className="tours">07 tours</p>
                        </div>
                        <h4 className="title">Europe</h4>
                        <p className="price">From <span>$540</span> per day</p>
                    </div>
                    <div className="about-popular-item">
                        <div className="main">
                            <p className="tours">07 tours</p>
                        </div>
                        <h4 className="title">Africa wild</h4>
                        <p className="price">From <span>$540</span> per day</p>
                    </div>
                    <div className="about-popular-item">
                        <div className="main">
                            <p className="tours">07 tours</p>
                        </div>
                        <h4 className="title">Scandinavia</h4>
                        <p className="price">From <span>$540</span> per day</p>
                    </div>
                    <div className="about-popular-item">
                        <div className="main">
                            <p className="tours">07 tours</p>
                        </div>
                        <h4 className="title">America</h4>
                        <p className="price">From <span>$540</span> per day</p>
                    </div>
                </div>
            </section>
            <section className='about-testimonials'>
                <p className="above">Testimonials</p>
                <h2 className="h2-title">What our happy clients say</h2>
                <a href="" className="about-testimonials-link">Book now</a>
                <div><img src="/images/clients-avatars.png" alt="clients-avatars" /></div>
                <div className="about-testimonials-content">
                    <div><img src="/images/quote-up.png" alt="quote-up" /></div>
                    <div className="about-testimonials-box d-f align-center">
                        <button className='btn-clear d-b'>
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30 55C43.8071 55 55 43.8071 55 30C55 16.1929 43.8071 5 30 5C16.1929 5 5 16.1929 5 30C5 43.8071 16.1929 55 30 55Z" stroke="#E6E8EC" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M33.1516 38.8248L24.3516 29.9998L33.1516 21.1748" stroke="#777E91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <p className="about-testimonials-desc">
                            An enim nullam tempor gravida donec enim  congue magna at pretium purus
                            pretium ligula rutrum luctus risusd diam eget risus varius blandit sit amet non magna.
                        </p>
                        <button className='btn-clear d-b'>
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30 55C43.8071 55 55 43.8071 55 30C55 16.1929 43.8071 5 30 5C16.1929 5 5 16.1929 5 30C5 43.8071 16.1929 55 30 55Z" stroke="#E6E8EC" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M26.8516 38.8248L35.6516 29.9998L26.8516 21.1748" stroke="#777E91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About