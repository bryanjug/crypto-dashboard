const News = () => {
    return (
        <div className="row">
            <div className="col-12 news">
                <p className="newsTitle">Recent Crypto News</p>
                <div
                    id="carouselExampleDark"
                    className="carousel carousel-dark slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row newsItemsContainer">
                                <div className="col-12 col-lg-6 col-xl-4 newsItem1">
                                    <div className="newsImageContainer">
                                        <img
                                            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-ZS726YA8OaY%2FTjVThqpJjmI%2FAAAAAAAAAr8%2FV7TB9zwOzoM%2Fs1600%2FMedium%2BBlue%2B250x250.jpg&f=1&nofb=1"
                                            alt=""
                                        />
                                    </div>
                                    <div className="newsTextContainer">
                                        <p className="newsText">
                                            <b>
                                                Title Title Title Title Title Title Title Title Title
                                                Title Title Title Title Title Title Title
                                            </b>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 col-xl-4 newsItem2">
                                    <div className="newsImageContainer">
                                        <img
                                            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-ZS726YA8OaY%2FTjVThqpJjmI%2FAAAAAAAAAr8%2FV7TB9zwOzoM%2Fs1600%2FMedium%2BBlue%2B250x250.jpg&f=1&nofb=1"
                                            alt=""
                                        />
                                    </div>
                                    <div className="newsTextContainer">
                                        <p className="newsText">
                                            <b>
                                                Title Title Title Title Title Title Title Title Title
                                                Title Title Title Title Title Title Title
                                            </b>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 col-xl-4 newsItem3">
                                    <div className="newsImageContainer">
                                        <img
                                            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-ZS726YA8OaY%2FTjVThqpJjmI%2FAAAAAAAAAr8%2FV7TB9zwOzoM%2Fs1600%2FMedium%2BBlue%2B250x250.jpg&f=1&nofb=1"
                                            alt=""
                                        />
                                    </div>
                                    <div className="newsTextContainer">
                                        <p className="newsText">
                                            <b>
                                                Title Title Title Title Title Title Title Title Title
                                                Title Title Title Title Title Title Title
                                            </b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row newsItemsContainer">
                                <div className="col-12 col-lg-6 col-xl-4 newsItem1">
                                    <div className="newsImageContainer">
                                        <img
                                            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-ZS726YA8OaY%2FTjVThqpJjmI%2FAAAAAAAAAr8%2FV7TB9zwOzoM%2Fs1600%2FMedium%2BBlue%2B250x250.jpg&f=1&nofb=1"
                                            alt=""
                                        />
                                    </div>
                                    <div className="newsTextContainer">
                                        <p className="newsText">
                                            <b>
                                                Content Title Title Title Title Title Title Title
                                                Title Title Title Title Title Title Title Title
                                            </b>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 col-xl-4 newsItem2">
                                    <div className="newsImageContainer">
                                        <img
                                            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-ZS726YA8OaY%2FTjVThqpJjmI%2FAAAAAAAAAr8%2FV7TB9zwOzoM%2Fs1600%2FMedium%2BBlue%2B250x250.jpg&f=1&nofb=1"
                                            alt=""
                                        />
                                    </div>
                                    <div className="newsTextContainer">
                                        <p className="newsText">
                                            <b>
                                                Title Title Title Title Title Title Title Title Title
                                                Title Title Title Title Title Title Title
                                            </b>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 col-xl-4 newsItem3">
                                    <div className="newsImageContainer">
                                        <img
                                            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-ZS726YA8OaY%2FTjVThqpJjmI%2FAAAAAAAAAr8%2FV7TB9zwOzoM%2Fs1600%2FMedium%2BBlue%2B250x250.jpg&f=1&nofb=1"
                                            alt=""
                                        />
                                    </div>
                                    <div className="newsTextContainer">
                                        <p className="newsText">
                                            <b>
                                                Title Title Title Title Title Title Title Title Title
                                                Title Title Title Title Title Title Title
                                            </b>
                                        </p>
                                    </div>
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

export default News;