import './css/Destination.css'

const Destination = () => {
    return (
        <>
            <main className='destination-main'>
                <h1 className="h2-title">Destination List</h1>
                <p className="destination-main-desc">
                    An enim nullam tempor sapien gravida donec enim ipsum
                </p>
            </main>
            <div className="destination-tabs d-f">
                <button className='tab-btn tab-btn__active'>Domestic</button>
                <button className='tab-btn'>Foreign</button>
            </div>
            <div className="destination-box d-f">
                <div className="col-1 d-f">
                    <div className="destination-item">
                        <p className="destination-item-tours">142 Tours</p>
                        <h4 className="destination-item-title">Europe</h4>
                        <p className="destination-item-distance">253km</p>
                    </div>
                    <div className="destination-item">
                        <p className="destination-item-tours">142 Tours</p>
                        <h4 className="destination-item-title">Scandinavia</h4>
                        <p className="destination-item-distance">253km</p>
                    </div>
                    <div className="destination-item">
                        <p className="destination-item-tours">142 Tours</p>
                        <h4 className="destination-item-title">Grenadines</h4>
                        <p className="destination-item-distance">253km</p>
                    </div>
                    <div className="destination-item">
                        <p className="destination-item-tours">142 Tours</p>
                        <h4 className="destination-item-title">Africa wild</h4>
                        <p className="destination-item-distance">253km</p>
                    </div>
                </div>
                <div className="col-2 d-f">
                    <div className="destination-item">
                        <p className="destination-item-tours">142 Tours</p>
                        <h4 className="destination-item-title">Africa wild</h4>
                        <p className="destination-item-distance">253km</p>
                    </div>
                    <div className="destination-item">
                        <p className="destination-item-tours">142 Tours</p>
                        <h4 className="destination-item-title">America</h4>
                        <p className="destination-item-distance">253km</p>
                    </div>
                    <div className="destination-item">
                        <p className="destination-item-tours">142 Tours</p>
                        <h4 className="destination-item-title">Virgin Islands</h4>
                        <p className="destination-item-distance">253km</p>
                    </div>
                    <div className="destination-item">
                        <p className="destination-item-tours">142 Tours</p>
                        <h4 className="destination-item-title">Scandinavia</h4>
                        <p className="destination-item-distance">253km</p>
                    </div>
                </div>
                <div className="col-3 d-f">
                    <div className="destination-item">
                        <p className="destination-item-tours">142 Tours</p>
                        <h4 className="destination-item-title">Scandinavia</h4>
                        <p className="destination-item-distance">253km</p>
                    </div>
                    <div className="destination-item">
                        <p className="destination-item-tours">142 Tours</p>
                        <h4 className="destination-item-title">Barbados</h4>
                        <p className="destination-item-distance">253km</p>
                    </div>
                    <div className="destination-item">
                        <p className="destination-item-tours">142 Tours</p>
                        <h4 className="destination-item-title">Africa wild</h4>
                        <p className="destination-item-distance">253km</p>
                    </div>
                    <div className="destination-item">
                        <p className="destination-item-tours">142 Tours</p>
                        <h4 className="destination-item-title">America</h4>
                        <p className="destination-item-distance">253km</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Destination