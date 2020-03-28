import React, { Component } from 'react';
import './index.css';

export default class Gallry extends Component {
    render() {
        return (
            <div>
                <div className="container" style={{padding:"20px"}}>
                    <div className="row">
                        <div id="carousel" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carousel" data-slide-to="0" className="active"></li>
                                <li data-target="#carousel" data-slide-to="1"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="d-none d-lg-block">
                                        <div className="slide-box">
                                            <img src="https://i.ytimg.com/vi/0SPwwpruGIA/maxresdefault.jpg" alt="First slide" />
                                            <img src="https://i.pinimg.com/originals/5d/07/b6/5d07b6086ac2ca807fdad840bbd97b58.jpg" alt="First slide" />
                                            <img src="https://res.cloudinary.com/grohealth/image/upload/v1581692513/DCUK/Content/iStock-855098134-1.jpg" alt="First slide" />
                                            <img src="https://www.weightwatchers.com/us/sites/default/files/styles/wwvs_default_image/public/article_masthead/0p_foodlist_purple_1200x628.jpg?itok=3ErSwv7S" alt="First slide" />
                                        </div>
                                    </div>
                                    <div className="d-none d-md-block d-lg-none">
                                        <div className="slide-box">
                                            <img src="https://ichef.bbci.co.uk/wwfeatures/live/976_549/images/live/p0/4t/x3/p04tx3m6.jpg" alt="First slide" />
                                            <img src="https://hungermath.files.wordpress.com/2012/10/food-groups.jpg" alt="First slide" />
                                            <img src="https://www.survivopedia.com/wp-content/uploads/2014/09/BIG-Food.jpg" alt="First slide" />
                                        </div>
                                    </div>
                                    <div className="d-none d-sm-block d-md-none">
                                        <div className="slide-box">
                                            <img src="https://static.toiimg.com/photo/68283907.cms" alt="First slide" />
                                            <img src="https://mediad.publicbroadcasting.net/p/shared/npr/201702/513383284.jpg" alt="First slide" />
                                        </div>
                                    </div>
                                    <div className="d-block d-sm-none">
                                        <img className="d-block w-100" src="https://frontiersinblog.files.wordpress.com/2017/09/frontiers-in-endocrinology-junk-food-diet-maternal.jpg?w=940" alt="First slide" />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="d-none d-lg-block">
                                        <div className="slide-box">
                                            <img src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/foods_bad_heart_slideshow/1800ss_getty_rf_bacon.jpg?resize=650px:*" alt="Second slide" />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Chicken_BBQ.jpg/245px-Chicken_BBQ.jpg" alt="Second slide" />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Foods_%28cropped%29.jpg" alt="Second slide" />
                                            <img src="https://media.gettyimages.com/photos/different-types-of-food-on-rustic-wooden-table-picture-id861188910?s=612x612" alt="Second slide" />
                                        </div>
                                    </div>
                                    <div className="d-none d-md-block d-lg-none">
                                        <div className="slide-box">
                                            <img src="https://img.etimg.com/thumb/msid-66670552,width-643,imgsize-366304,resizemode-4/goa-food.jpg" alt="Second slide" />
                                            <img src="https://media-cdn.tripadvisor.com/media/photo-s/09/87/17/63/spice-goa.jpg" alt="Second slide" />
                                            <img src="https://flavorverse.com/wp-content/uploads/2017/02/Goan-Food.jpg" alt="Second slide" />
                                        </div>
                                    </div>
                                    <div className="d-none d-sm-block d-md-none">
                                        <div className="slide-box">
                                            <img src="https://static.eazydiner.com/resized/750X436/eazytrendz%2F1518%2Ftrend20170713052819.jpg" alt="Second slide" />
                                            <img src="https://growthgravy.com/wp-content/uploads/2017/05/The-Goan-Bucketlist-Cafe-Tato-Panjim-Goa.jpg" alt="Second slide" />
                                        </div>
                                    </div>
                                    <div className="d-block d-sm-none">
                                        <img className="d-block w-100" src="https://farm66.static.flickr.com/65535/48831042072_143773af4d.jpg" alt="Second slide" />
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}