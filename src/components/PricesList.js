import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { pricesDataAction } from "../redux/actions";

const PricesList = ({
	pricesDataAction,
	pricesData,
}) => {
    const [page, setPage] = useState(1);
    const [loadingStyle, setLoadingStyle] = useState("pricesListLoader");
    const [listStyle, setListStyle] = useState("displayNone");

    useEffect(() => {
        pricesDataAction(page);
    }, [page])

    useEffect(() => {
        if (pricesData.length > 0) {
            setLoadingStyle("displayNone");
            setListStyle("col-12 pricesList text-center");
        }
    }, [pricesData])

    function NextPage() {
        setPage(page + 1);
        setLoadingStyle("pricesListLoader");
        setListStyle("displayNone");
    }

    function BackPage() {
        setPage(page - 1);
        setLoadingStyle("pricesListLoader");
        setListStyle("displayNone");
    }

    const PricesList = () => {
        if (pricesData.length > 0) {
            const listItems = pricesData.map((coin, i) =>  
                <div className="row pricesListRow" key={i}>
                    <div className="col-6 col-md-4">
                        <img src={coin.image} alt="" className="pricesImage"/>    
                        <span className="pricesName">{coin.id}</span>
                    </div>
                    {
                        coin.price_change_percentage_24h === null ?
                        <div className="col-6 col-md-4 pricesPrice priceUp">
                            <i className="bi bi-caret-up-fill priceUp"></i>
                            0%
                        </div>
                        :
                        <div className="col-6 col-md-4 pricesPrice">
                            {
                                coin.price_change_percentage_24h > 0 ?
                                <span className="priceUp">
                                    <i className="bi bi-caret-up-fill priceUp"></i>
                                    {Math.round(coin.price_change_percentage_24h)}%
                                </span>
                                :
                                <span className="priceDown">
                                    <i className="bi bi-caret-down-fill priceDown"></i>
                                    {Math.round(coin.price_change_percentage_24h)}%
                                </span>
                            }
                        </div>
                    }
                    <div className="col-6 col-md-4 pricesChange">
                        ${coin.current_price}
                    </div>
                </div>
			);
			return (  
				<div>
					{listItems}  
				</div>  
			);    
        } else {
            return null;
        }
    }
    
	return (
		<div className="dashboard">
			<div className={loadingStyle}>
				<div className="spinner-border text-primary" role="status"></div>
			</div>
			<div className={listStyle}>
				<div className="row pricesTitles">
					<div className="col-6 col-md-4 pricesNameTitle">Name</div>
					<div className="col-6 col-md-4 pricesPriceTitle">24hr Change</div>
					<div className="col-6 col-md-4 pricesChangeTitle">Price</div>
				</div>
                <PricesList />
                <div className="row">
                    <div className="col-6">
                        {
                            page === 1 ? 
                            <div>
                            
                            </div>
                            :
                            <button className="pricesBackButton" onClick={BackPage}>Back</button>
                        }
                    </div>
                    <div className="col-6">
                        {
                            page === 76 ?
                            <div>
                            
                            </div>
                            :
                            <button className="pricesNextButton" onClick={NextPage}>Next</button>
                        }
                    </div>
                </div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		pricesData: state.pricesData,
	};
};

const mapDispatchToProps = {
	pricesDataAction: pricesDataAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(PricesList);
