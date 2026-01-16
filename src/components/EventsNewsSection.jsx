import React from "react";
// import eventImage from "../assets/images/events.jpg"; 
import EventImage from '../assets/images/eventImage1.png'
import EventImage2 from '../assets/images/eventcard2.png'

const EventsNewsSection = () => {
    return (
        
            <section className="container events-news-section">
                {/* card section- 1 */}
                <div className="row g-4">

                    {/* EVENTS CARD */}
                    <div className="col-lg-7">
                        <div className="event-card">
                            <div className="event-image">
                                <img src={EventImage} alt="Events" />
                            </div>

                            <div className="event-content">
                                <span className="tag">EVENTS</span>
                                <h3>Shreyas Group at Industry Platforms</h3>

                                <p>
                                    Engaging with global textile forums, exhibitions, and trade
                                    events to showcase innovation, sustainability, and
                                    manufacturing excellence.
                                </p>

                                <p className="small-text">
                                    Connecting ideas.<br />
                                    Building partnerships.<br />
                                    Shaping the future of textiles.
                                </p>

                                <a href="#" className="link-btn">
                                    Explore More
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* NEWS CARD */}
                    <div className="col-lg-5">
                        <div className="news-card">
                            <span className="tag yellow">NEWS</span>

                            <h3>What’s New<br />at Shreyas Group</h3>

                            <p>
                                Latest updates on expansions, innovations, certifications, and
                                strategic developments across the Shreyas Group ecosystem.
                            </p>

                            <p className="small-text">
                                Progress that defines<br />our growth story.
                            </p>

                            <a href="#" className="link-btn yellow">
                                Read More
                            </a>
                        </div>
                    </div>

                </div>
                {/* card section- 2 */}
                <div className="row g-4 mt-2 eventSection2">
                    {/* NEWS CARD */}
                    <div className="col-lg-5">
                        <div className="news-card2">
                            <span className="tag yellow">MOST RECENT</span>

                            <h3>Latest<br />Highlights</h3>

                            <p>
                                Recent achievements and activities reflecting Shreyas Group’s momentum across production, exports, and industry engagement.
                            </p>

                            <p className="small-text">
                                Driven by quality<br />Powered by progress
                            </p>

                            <a href="#" className="link-btn yellow">
                                Read More
                            </a>
                        </div>
                    </div>
                    {/* EVENTS CARD */}
                    <div className="col-lg-7">
                        <div className="event-card">
                            <div className="event-image">
                                <img src={EventImage2} alt="Events" />
                            </div>

                            <div className="event-content">
                                <span className="tag">EVENTS</span>
                                <h3>Shreyas Group at Industry Platforms</h3>

                                <p>
                                    Engaging with global textile forums, exhibitions, and trade
                                    events to showcase innovation, sustainability, and
                                    manufacturing excellence.
                                </p>

                                <p className="small-text">
                                    Connecting ideas.<br />
                                    Building partnerships.<br />
                                    Shaping the future of textiles.
                                </p>

                                <a href="#" className="link-btn">
                                    Explore More
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        
    );
};

export default EventsNewsSection;
