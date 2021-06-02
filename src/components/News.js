import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {newsDataAction} from '../redux/actions';

const News = ({newsDataAction, newsData, fetchedNewsData}) => {
    const [loaderStyle, setLoaderStyle] = useState("newsLoader");
    const [newsStyle, setNewsStyle] = useState("carousel carousel-dark slide displayNone");
    
    useEffect(() => {
        //fetch news data if newsData is empty
        if (Object.entries(newsData).length === 0) {
            newsDataAction();
        }
        if (fetchedNewsData === true) {
            setLoaderStyle("displayNone");
            setNewsStyle("carousel carousel-dark slide");
        }
    }, [fetchedNewsData])

    return (
        <div className="row">
            <div className="col-12 news">
                <p className="newsTitle">Recent Crypto News</p>
                <div className={loaderStyle}>
                    <div className="spinner-border text-primary" role="status">
                    </div>
                </div>
                <div
                    id="carouselExampleDark"
                    className={newsStyle}
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row newsItemsContainer">
                                <div className="col-12 col-lg-6 col-xl-4 newsItem1">
                                    {
                                        newsData !== undefined ? 
                                        <a href={newsData.url0} target="_blank" className="newsLink">
                                            <div className="newsTextContainer">
                                                <p className="newsText">
                                                    <b>
                                                        {newsData.title0}
                                                    </b>
                                                </p>
                                            </div>
                                        </a>
                                        :
                                        <div>
                                        </div>
                                    }
                                </div>
                                <div className="col-12 col-lg-6 col-xl-4 newsItem2">
                                    {
                                        newsData !== undefined ? 
                                        <a href={newsData.url1} target="_blank" className="newsLink">
                                            <div className="newsTextContainer">
                                                <p className="newsText">
                                                    <b>
                                                        {newsData.title1}
                                                    </b>
                                                </p>
                                            </div>
                                        </a>
                                        :
                                        <div>
                                        </div>
                                    }
                                </div>
                                <div className="col-12 col-lg-6 col-xl-4 newsItem3">
                                    {
                                        newsData !== undefined ? 
                                        <a href={newsData.url2} target="_blank" className="newsLink">
                                            <div className="newsTextContainer">
                                                <p className="newsText">
                                                    <b>
                                                        {newsData.title2}
                                                    </b>
                                                </p>
                                            </div>
                                        </a>
                                        :
                                        <div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row newsItemsContainer">
                                <div className="col-12 col-lg-6 col-xl-4 newsItem1">
                                    {
                                        newsData !== undefined ? 
                                        <a href={newsData.url3} target="_blank" className="newsLink">
                                            <div className="newsTextContainer">
                                                <p className="newsText">
                                                    <b>
                                                        {newsData.title3}
                                                    </b>
                                                </p>
                                            </div>
                                        </a>
                                        :
                                        <div>
                                        </div>
                                    }
                                </div>
                                <div className="col-12 col-lg-6 col-xl-4 newsItem2">
                                    {
                                        newsData !== undefined ? 
                                        <a href={newsData.url4} target="_blank" className="newsLink">
                                            <div className="newsTextContainer">
                                                <p className="newsText">
                                                    <b>
                                                        {newsData.title4}
                                                    </b>
                                                </p>
                                            </div>
                                        </a>
                                        :
                                        <div>
                                        </div>
                                    }
                                </div>
                                <div className="col-12 col-lg-6 col-xl-4 newsItem3">
                                    {
                                        newsData !== undefined ? 
                                        <a href={newsData.url5} target="_blank" className="newsLink">
                                            <div className="newsTextContainer">
                                                <p className="newsText">
                                                    <b>
                                                        {newsData.title5}
                                                    </b>
                                                </p>
                                            </div>
                                        </a>
                                        :
                                        <div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row newsItemsContainer">
                                <div className="col-12 col-lg-6 col-xl-4 newsItem1">
                                    {
                                        newsData !== undefined ? 
                                        <a href={newsData.url6} target="_blank" className="newsLink">
                                            <div className="newsTextContainer">
                                                <p className="newsText">
                                                    <b>
                                                        {newsData.title6}
                                                    </b>
                                                </p>
                                            </div>
                                        </a>
                                        :
                                        <div>
                                        </div>
                                    }
                                </div>
                                <div className="col-12 col-lg-6 col-xl-4 newsItem2">
                                    {
                                        newsData !== undefined ? 
                                        <a href={newsData.url7} target="_blank" className="newsLink">
                                            <div className="newsTextContainer">
                                                <p className="newsText">
                                                    <b>
                                                        {newsData.title7}
                                                    </b>
                                                </p>
                                            </div>
                                        </a>
                                        :
                                        <div>
                                        </div>
                                    }
                                </div>
                                <div className="col-12 col-lg-6 col-xl-4 newsItem3">
                                    {
                                        newsData !== undefined ? 
                                        <a href={newsData.url8} target="_blank" className="newsLink">
                                            <div className="newsTextContainer">
                                                <p className="newsText">
                                                    <b>
                                                        {newsData.title8}
                                                    </b>
                                                </p>
                                            </div>
                                        </a>
                                        :
                                        <div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        newsData: state.newsData,
        fetchedNewsData: state.fetchedNewsData,
    }
}

const mapDispatchToProps = {
    newsDataAction: newsDataAction
}

export default connect(mapStateToProps, mapDispatchToProps)(News);