import { TipCard, TourCard } from '../components'
import TipsList from '../db/TipsList'
import ToursList from '../db/ToursList'
import './css/Home.css'

const Home = () => {
  return (
    <>
      <main className='home-main'>
        <h1 className="h1-title">Discover the most engaging places</h1>
        <p className="text">
          Less planning 45,000 trips are ready for you
        </p>
        <a href="" className="home-main-start">Start now</a>
      </main>
      <div className="home-search">
        <form action="" className='home-search-fm d-f jc-sb align-center'>
          <div>
            <label htmlFor="searchLocation">Location</label>
            <input type="text" name='searchLocation' id='searchLocation' placeholder='Where are you going?' />
          </div>
          <div>
            <label htmlFor="searchActivity">Activity</label>
            <input type="text" name='searchActivity' id='searchActivity' placeholder='Add Activity' />
          </div>
          <div>
            <label htmlFor="searchDates">Dates</label>
            <input type="text" name='searchDates' id='searchDates' placeholder='Add date' />
          </div>
          <div>
            <label htmlFor="searchGuest">Guest</label>
            <input type="text" name='searchGuest' id='searchGuest' placeholder='Add guest' />
          </div>
          <button className='btn-clear d-b'>
            <img src="/images/search.png" alt="search" />
          </button>
        </form>
        <button className='home-search-more btn-clear d-b'>
          <img src="/images/search-more.png" alt="search-more" />
        </button>
      </div>
      <section className='home-weekly'>
        <h2 className="h2-title">Discover Weekly</h2>
        <p className="text">An enim nullam tempor sapien gravida donec enim ipsum</p>
        <div className="home-weekly-tabs d-f">
          <button className='tab-btn tab-btn__active'>Domestic</button>
          <button className='tab-btn'>Foreign</button>
        </div>
        <div className="home-weekly-box d-f">
          {
            ToursList.map((tour) => {
              return (
                <TourCard
                  key={`weekly-tour${tour.id}`}
                  {...tour}
                />
              )
            })
          }
        </div>
      </section>
      <section className='home-perfection'>
        <p className="above">3 steps for the perfect trip</p>
        <h2 className="h2-title">Find Travel Perfection</h2>
        <p className="text">
          An enim nullam tempor gravida donec enim  congue magna at pretium purus
          pretium ligula rutrum luctus risusd diam eget risus varius blandit sit amet non magna.
        </p>
        <a href="" className="home-perfection-link">Book now</a>
        <div className="home-perfection-box d-f">
          <div className="home-perfection-item">
            <div><img src="/images/perfection1.png" alt="perfection1" /></div>
            <h3 className="perfection-item-title">Tell us what you want to do</h3>
            <p className="perfection-item-desc">
              Fully layered dolor sit amet, consectetur adipisicing elit.
              Facere, nobis, id expedita dolores officiis laboriosam.
            </p>
          </div>
          <div className="home-perfection-item">
            <div><img src="/images/perfection2.png" alt="perfection2" /></div>
            <h3 className="perfection-item-title">Share your travel preference</h3>
            <p className="perfection-item-desc">
              Fully layered dolor sit amet, consectetur adipisicing elit.
              Facere, nobis, id expedita dolores officiis laboriosam.
            </p>
          </div>
          <div className="home-perfection-item">
            <div><img src="/images/perfection3.png" alt="perfection3" /></div>
            <h3 className="perfection-item-title">We'll give you recommendations</h3>
            <p className="perfection-item-desc">
              Fully layered dolor sit amet, consectetur adipisicing elit.
              Facere, nobis, id expedita dolores officiis laboriosam.
            </p>
          </div>
        </div>
      </section>
      <section className='home-gudeline d-f align-center'>
        <div>
          <p className="above">Take A Tour</p>
          <h2 className="h2-title">Discover Our Travel Guideline</h2>
          <p className="text">
            An enim nullam tempor gravida donec enim  congue magna at pretium purus
            pretium ligula rutrum luctus risusd diam eget risus varius blandit sit amet non magna.
          </p>
          <ul className="home-guideline-list">
            <li>Luctus risusd diam eget</li>
            <li>Donec enim  congue magna</li>
            <li>Blandit sit amet non magna</li>
          </ul>
          <a href="" className="home-gudeline-link">Learn more</a>
        </div>
        <div><img src="/images/home-gudeline.png" alt="home-gudeline" /></div>
      </section>
      <div className="home-stats d-f">
        <div className="home-stats-item">
          <div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16 17.3337C10.8453 17.3337 6.66667 21.5123 6.66667 26.667V29.3337C6.66667 30.07 6.06971 30.667 5.33333 30.667C4.59695 30.667 4 30.07 4 29.3337V26.667C4 20.0396 9.37258 14.667 16 14.667C22.6274 14.667 28 20.0396 28 26.667V29.3337C28 30.07 27.403 30.667 26.6667 30.667C25.9303 30.667 25.3333 30.07 25.3333 29.3337V26.667C25.3333 21.5123 21.1547 17.3337 16 17.3337Z" fill="#23262F" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16 14.6663C18.9455 14.6663 21.3333 12.2785 21.3333 9.33301C21.3333 6.38749 18.9455 3.99967 16 3.99967C13.0545 3.99967 10.6667 6.38749 10.6667 9.33301C10.6667 12.2785 13.0545 14.6663 16 14.6663ZM16 17.333C20.4183 17.333 24 13.7513 24 9.33301C24 4.91473 20.4183 1.33301 16 1.33301C11.5817 1.33301 8 4.91473 8 9.33301C8 13.7513 11.5817 17.333 16 17.333Z" fill="#23262F" />
            </svg>
          </div>
          <h3 className="stats-item-num">28k</h3>
          <p className="stats-item-desc">Total Users</p>
        </div>
        <div className="home-stats-item">
          <div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22.1887 21.659C24.0564 19.0664 25.3333 16.2171 25.3333 13.333C25.3333 8.17835 21.1547 3.99967 16 3.99967C10.8453 3.99967 6.66667 8.17835 6.66667 13.333C6.66667 16.2171 7.94359 19.0664 9.81129 21.659C11.6649 24.2319 13.9442 26.3334 15.5692 27.6643C15.8357 27.8826 16.1643 27.8826 16.4308 27.6643C18.0558 26.3334 20.3351 24.2319 22.1887 21.659ZM18.1205 29.7273C21.5662 26.9052 28 20.6553 28 13.333C28 6.70559 22.6274 1.33301 16 1.33301C9.37258 1.33301 4 6.70559 4 13.333C4 20.6553 10.4338 26.9052 13.8795 29.7273C15.1287 30.7505 16.8713 30.7505 18.1205 29.7273Z" fill="#23262F" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0013 10.6667C14.5285 10.6667 13.3346 11.8606 13.3346 13.3333C13.3346 14.8061 14.5285 16 16.0013 16C17.4741 16 18.668 14.8061 18.668 13.3333C18.668 11.8606 17.4741 10.6667 16.0013 10.6667ZM10.668 13.3333C10.668 10.3878 13.0558 8 16.0013 8C18.9468 8 21.3346 10.3878 21.3346 13.3333C21.3346 16.2789 18.9468 18.6667 16.0013 18.6667C13.0558 18.6667 10.668 16.2789 10.668 13.3333Z" fill="#23262F" />
            </svg>
          </div>
          <h3 className="stats-item-num">12k</h3>
          <p className="stats-item-desc">Total Tours</p>
        </div>
        <div className="home-stats-item">
          <div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0013 26.667C21.8923 26.667 26.668 21.8914 26.668 16.0003C26.668 10.1093 21.8923 5.33366 16.0013 5.33366C10.1103 5.33366 5.33464 10.1093 5.33464 16.0003C5.33464 21.8914 10.1103 26.667 16.0013 26.667ZM16.0013 29.3337C23.3651 29.3337 29.3346 23.3641 29.3346 16.0003C29.3346 8.63653 23.3651 2.66699 16.0013 2.66699C8.63751 2.66699 2.66797 8.63653 2.66797 16.0003C2.66797 23.3641 8.63751 29.3337 16.0013 29.3337Z" fill="#23262F" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3276 24.2358C19.3125 22.266 19.9987 19.358 19.9987 16.0003C19.9987 12.6426 19.3125 9.73468 18.3276 7.7648C17.2629 5.63543 16.2854 5.33366 15.9987 5.33366C15.712 5.33366 14.7345 5.63543 13.6698 7.7648C12.6849 9.73468 11.9987 12.6426 11.9987 16.0003C11.9987 19.358 12.6849 22.266 13.6698 24.2358C14.7345 26.3652 15.712 26.667 15.9987 26.667C16.2854 26.667 17.2629 26.3652 18.3276 24.2358ZM15.9987 29.3337C19.6806 29.3337 22.6654 23.3641 22.6654 16.0003C22.6654 8.63653 19.6806 2.66699 15.9987 2.66699C12.3168 2.66699 9.33203 8.63653 9.33203 16.0003C9.33203 23.3641 12.3168 29.3337 15.9987 29.3337Z" fill="#23262F" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M29.2688 17.3337C29.3123 16.8951 29.3346 16.4503 29.3346 16.0003C29.3346 15.5503 29.3123 15.1055 29.2688 14.667H2.7338C2.69026 15.1055 2.66797 15.5503 2.66797 16.0003C2.66797 16.4503 2.69026 16.8951 2.7338 17.3337H29.2688Z" fill="#23262F" />
            </svg>
          </div>
          <h3 className="stats-item-num">64k</h3>
          <p className="stats-item-desc">Social Likes</p>
        </div>
        <div className="home-stats-item">
          <div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.697 11.9115C12.5623 12.2341 12.2586 12.4544 11.91 12.4822L5.57767 12.9879C4.74911 13.0541 4.41385 14.0888 5.04615 14.6283L9.86538 18.7405C10.1323 18.9683 10.249 19.3265 10.1672 19.6678L8.69394 25.8202C8.50069 26.6272 9.37783 27.2663 10.0867 26.8349L15.5153 23.5321C15.8133 23.3508 16.1875 23.3508 16.4855 23.5321L21.9141 26.8349C22.623 27.2663 23.5001 26.6272 23.3069 25.8202L21.8336 19.6678C21.7519 19.3265 21.8685 18.9683 22.1354 18.7405L26.9547 14.6283C27.587 14.0888 27.2517 13.0541 26.4231 12.9879L20.0908 12.4822C19.7423 12.4544 19.4385 12.2341 19.3038 11.9115L16.8617 6.06265C16.5423 5.29769 15.4585 5.29769 15.1391 6.06265L12.697 11.9115ZM21.3572 9.9082L19.3225 5.03517C18.0905 2.08462 13.9103 2.08464 12.6784 5.03517L10.6437 9.9082L5.36539 10.3297C2.16949 10.5849 0.876361 14.5758 3.31522 16.6568L7.32655 20.0796L6.10059 25.1992C5.3552 28.3119 8.73844 30.7767 11.4728 29.1131L16.0004 26.3584L20.528 29.1131C23.2624 30.7768 26.6456 28.3119 25.9002 25.1992L24.6743 20.0796L28.6856 16.6568C31.1245 14.5758 29.8313 10.5849 26.6354 10.3297L21.3572 9.9082Z" fill="#23262F" />
            </svg>
          </div>
          <h3 className="stats-item-num">14k</h3>
          <p className="stats-item-desc">5 Star Ratings</p>
        </div>
      </div>
      <section className='home-popular'>
        <p className="above">3 steps for the perfect trip</p>
        <h2 className="h2-title">Popular Destinations</h2>
        <p className="text">
          An enim nullam tempor gravida donec enim  congue magna
          at pretium purus pretium ligula rutrum luctus risusd
          diam eget risus varius blandit sit amet non magna.
        </p>
        <div className="home-popular-box d-f">
          <div className="home-popular-item">
            <div className="main">
              <p className="tours">07 tours</p>
            </div>
            <h4 className="title">Europe</h4>
            <p className="price">From <span>$540</span> per day</p>
          </div>
          <div className="home-popular-item">
            <div className="main">
              <p className="tours">07 tours</p>
            </div>
            <h4 className="title">Africa wild</h4>
            <p className="price">From <span>$540</span> per day</p>
          </div>
          <div className="home-popular-item">
            <div className="main">
              <p className="tours">07 tours</p>
            </div>
            <h4 className="title">Scandinavia</h4>
            <p className="price">From <span>$540</span> per day</p>
          </div>
          <div className="home-popular-item">
            <div className="main">
              <p className="tours">07 tours</p>
            </div>
            <h4 className="title">America</h4>
            <p className="price">From <span>$540</span> per day</p>
          </div>
        </div>
      </section>
      <section className='home-testimonials'>
        <p className="above">Testimonials</p>
        <h2 className="h2-title">What our happy clients say</h2>
        <a href="" className="home-testimonials-link">Book now</a>
        <div><img src="/images/clients-avatars.png" alt="clients-avatars" /></div>
        <div className="home-testimonials-content">
          <div><img src="/images/quote-up.png" alt="quote-up" /></div>
          <div className="home-testimonials-box d-f align-center">
            <button className='btn-clear d-b'>
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 55C43.8071 55 55 43.8071 55 30C55 16.1929 43.8071 5 30 5C16.1929 5 5 16.1929 5 30C5 43.8071 16.1929 55 30 55Z" stroke="#E6E8EC" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M33.1516 38.8248L24.3516 29.9998L33.1516 21.1748" stroke="#777E91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <p className="home-testimonials-desc">
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
      <section className='home-leave'>
        <div className="home-leave-top d-f jc-sb">
          <div>
            <p className="above">Fleet travel ui kit</p>
            <h2 className="h2-title">Book a ticket & just leave</h2>
          </div>
          <a href="" className="home-leave-link">Book now</a>
        </div>
        <div><img src="/images/video.png" alt="video" /></div>
      </section>
      <section className='home-tips'>
        <h2 className="h2-title">Travel Tips & Advice</h2>
        <p className="home-tips-desc">
          An enim nullam tempor gravida donec enim  congue magna 
          at pretium purus pretium ligula rutrum luctus risusd diam 
          eget risus varius blandit sit amet non magna.
        </p>
        <div className="home-tips-box d-f">
          {
            TipsList.map((tip)=> {
              return (
                <TipCard
                  key={`tip${tip.id}`}
                  {...tip}
                />
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Home