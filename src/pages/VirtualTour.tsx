import { TourCard } from '../components'
import ToursList from '../db/ToursList'
import './css/VirtualTour.css'

const VirtualTour = () => {
    return (
        <>
            <main className='virtual-main'>
                <div className="d-f">
                    <div className="destination-card-one">
                        <div className="destination-card-info d-f align-center">
                            <div><img src="/images/location2.png" alt="location2" /></div>
                            <dl>
                                <dt>Scandinavia</dt>
                                <dd>125 Tours</dd>
                            </dl>
                        </div>
                    </div>
                    <div style={{ marginLeft: "54px" }}>
                        <div className="ellipse-one"></div>
                        <div className="destination-card-info d-f align-center" style={{ marginTop: "31px", marginLeft: "184px" }}>
                            <div><img src="/images/location2.png" alt="location2" /></div>
                            <dl>
                                <dt>Scandinavia</dt>
                                <dd>125 Tours</dd>
                            </dl>
                        </div>
                        <div className="ellipse-two"></div>
                        <h1 className="h1-title">Virtual tour</h1>
                        <p className="virtual-main-desc">
                            Virtual tour is a powerful tool to help you
                            explore and better understand the services our website offers
                        </p>
                    </div>
                    <div className="ellipse-three"></div>
                    <div className="destination-card-two">
                        <div className="content">
                            <div className="location d-f align-center">
                                <div><img src="/images/location2.png" alt="location2" /></div>
                                <dl>
                                    <dt>Virgin Islands</dt>
                                    <dd>125 Tours</dd>
                                </dl>
                            </div>
                            <div className="about">
                                <p>Best time <span>Fall</span></p>
                                <p>Activities <span>Camp - Sailing - <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Ride a horse</span></p>
                                <p>
                                    Reference site about. Ipsum, <br /> giving information on its <br /> origins.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="d-f" style={{marginTop: "26px"}}>
                    <div className="ellipse-four"></div>
                    <div className="d-f" style={{marginTop: "29px"}}>
                        <div className="ellipse-five"></div>
                          <div className="destination-card-info d-f align-center">
                            <div><img src="/images/location2.png" alt="location2" /></div>
                            <dl>
                                <dt>America</dt>
                                <dd>125 Tours</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="destination-card-three">
                        <div className="destination-card-info d-f align-center">
                            <div><img src="/images/location2.png" alt="location2" /></div>
                            <dl>
                                <dt>Africa wild</dt>
                                <dd>125 Tours</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="ellipse-six"></div>
                </div>
            </main>
            <section className='virtual-library'>
                <p className="above">the perfect trip</p>
                <h2 className="h2-title">Virtual tour library</h2>
                <p className="virtual-library-desc">
                    Track your workouts, get better results, 
                    and be the best version of you. Less thinking
                </p>
                <div className="virtual-library-tabs d-f">
                    <button className='tab-btn tab-btn__active'>All</button>
                    <button className='tab-btn'>Sea</button>
                    <button className='tab-btn'>Mountains</button>
                    <button className='tab-btn'>City</button>
                </div>
                <div className="virtual-library-box d-f">
                    {
                        ToursList.filter((elem)=> elem.id < 5).map((tour)=> {
                            return (
                                <TourCard
                                    key={`library-tour${tour.id}`}
                                    {...tour}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default VirtualTour