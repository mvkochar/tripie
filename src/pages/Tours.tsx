import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import './css/Tours.css'
import ToursList from '../db/ToursList';
import { TourCard } from '../components';

const MAX = 5000;
const MIN = 1000;
const marks = [
    {
        value: MIN,
        label: '',
    },
    {
        value: MAX,
        label: '',
    },
];

const Tours = () => {
    const [val, setVal] = React.useState<number>(MIN);
    const handleChange = (_: Event, newValue: number) => {
        setVal(newValue);
    };

    const [checked, setChecked] = React.useState(true);

    const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <>
            <main className='tours-main'>
                <h1 className="h1-title">Tour List</h1>
            </main>
            <div className="tours-search">
                <form action="" className='tours-search-fm d-f jc-sb align-center'>
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
                <button className='tours-search-more btn-clear d-b'>
                    <img src="/images/search-more.png" alt="search-more" />
                </button>
            </div>
            <div className="tours-content d-f">
                <div>
                    <div className="tours-filters d-f">
                        <div className="tours-filters-bl">
                            <h3 className="filters-bl-title">Price range</h3>
                            <div className="filters-bl-price">
                                <Box sx={{ width: 250 }}>
                                    <Slider
                                        marks={marks}
                                        step={10}
                                        value={val}
                                        valueLabelDisplay="auto"
                                        min={MIN}
                                        max={MAX}
                                        onChange={handleChange}
                                    />
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography
                                            variant="body2"
                                            onClick={() => setVal(MIN)}
                                            sx={{
                                                cursor: 'pointer'
                                            }}
                                        >
                                            ${MIN}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            onClick={() => setVal(MAX)}
                                            sx={{ cursor: 'pointer' }}
                                        >
                                            ${MAX}
                                        </Typography>
                                    </Box>
                                </Box>
                            </div>
                        </div>
                        <div className="tours-filters-bl">
                            <h3 className="filters-bl-title">Times</h3>
                            <form action="" className='filters-bl-times'>
                                <div className="input-bl">
                                    <div className="d-f jc-sb">
                                        <p className='input-bl-title'>Period</p>
                                        <p className='input-bl-title'>Day</p>
                                    </div>
                                    <div className="select-wr">
                                        <select name="selectDays">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3" selected>3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="input-bl">
                                    <p className="input-bl-title">Start date</p>
                                    <div className="select-wr">
                                        <select name="selectStartDay">
                                            <option value="0">02/04/2024</option>
                                            <option value="1">03/04/2024</option>
                                            <option value="2">04/04/2024</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="input-bl input-bl__last">
                                    <p className="input-bl-title">End date</p>
                                    <div className="select-wr select-wr__gray">
                                        <select name="selectEndDay">
                                            <option value="0">02/07/2024</option>
                                            <option value="1">03/07/2024</option>
                                            <option value="2">04/07/2024</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="tours-filters-bl d-f jc-sb align-center">
                            <h3 className="filters-bl-title">Favorite</h3>
                            <Switch
                                checked={checked}
                                onChange={handleChecked}
                                slotProps={{ input: { 'aria-label': 'controlled' } }}
                                name='filterFavorite'
                                sx={{ marginTop: "-25px" }}
                            />
                        </div>
                        <div className="tours-filters-bl">
                            <h3 className="filters-bl-title">Review Score</h3>
                            <form action="" className='filters-bl-score'>
                                <div className="check-bl d-f">
                                    <input type="checkbox" name="fiveScore" />
                                    <div><img src="/images/rating-five.png" alt="rating-five" /></div>
                                </div>
                                <div className="check-bl d-f">
                                    <input type="checkbox" name="fourScore" />
                                    <div><img src="/images/rating-four.png" alt="rating-four" /></div>
                                </div>
                                <div className="check-bl d-f">
                                    <input type="checkbox" name="threeScore" />
                                    <div><img src="/images/rating-three.png" alt="rating-three" /></div>
                                </div>
                                <div className="check-bl d-f">
                                    <input type="checkbox" name="twoScore" />
                                    <div><img src="/images/rating-two.png" alt="rating-two" /></div>
                                </div>
                                <div className="check-bl d-f check-bl-last">
                                    <input type="checkbox" name="oneScore" />
                                    <div><img src="/images/rating-one.png" alt="rating-one" /></div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <button className='tours-filters-reset'>Reset filter</button>
                </div>
                <div>
                    <div className="d-f jc-sb align-center">
                        <div className="tours-tabs d-f">
                            <button className='tab-btn tab-btn__active'>Cheapest</button>
                            <button className='tab-btn'>Best</button>
                            <button className='tab-btn'>Quickest</button>
                        </div>
                        <form action="" className='tours-sort'>
                            <div className="select-wr">
                                <select name="toursSort">
                                    <option value="0">Time of day</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="tours-box d-f">
                        {
                            ToursList.map((tour) => {
                                return (
                                    <TourCard
                                        key={`tour${tour.id}`}
                                        {...tour}
                                    />
                                )
                            })
                        }
                    </div>
                    <button className='tours-more'>Loading</button>
                </div>
            </div>
            <section className='tours-discover'>
                <h2 className="h2-title">Discover more</h2>
                <p className="tours-discover-desc">
                    An enim nullam tempor sapien gravida donec enim ipsum
                </p>
                <div className="tours-discover-box d-f">
                    {
                        ToursList.filter((elem) => elem.id < 5).map((tour) => {
                            return (
                                <TourCard
                                    key={`discover-tour${tour.id}`}
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

export default Tours