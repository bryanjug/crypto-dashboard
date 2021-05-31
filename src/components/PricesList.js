import { useEffect } from "react";
import { connect } from "react-redux";
import { pricesDataAction } from "../redux/actions";

const PricesList = ({
	pricesDataAction,
	pricesData,
	pricesLoadingStyle,
	pricesListStyle,
}) => {
    useEffect(() => {
        pricesDataAction(1);
    }, [])

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
                        <div className="col-md-4 pricesChange">
                            0%
                        </div>
                        :
                        <div className="col-md-4 pricesChange">
                            {
                                coin.price_change_percentage_24h > 0 ?
                                <span className="priceUp">
                                    <i className="bi bi-caret-up-fill priceUp"></i>
                                    {coin.price_change_percentage_24h}%
                                </span>
                                :
                                <span className="priceDown">
                                    <i className="bi bi-caret-down-fill priceDown"></i>
                                    {coin.price_change_percentage_24h}%
                                </span>
                            }
                        </div>
                    }
                    <div className="col-6 col-md-4 pricesPrice">
                        {coin.current_price}
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
			<div className={pricesLoadingStyle}>
				<div className="spinner-border text-primary" role="status"></div>
			</div>
			<div className={pricesListStyle}>
				<div className="row pricesTitles">
					<div className="col-6 col-md-4 pricesNameTitle">Name</div>
					<div className="col-md-4 pricesChangeTitle">24hr Change</div>
					<div className="col-6 col-md-4 pricesPriceTitle">Price</div>
				</div>
                <PricesList />
                <div className="row">
                    <div className="col-6">
                        <button className="pricesBackButton">Back</button>
                    </div>
                    <div className="col-6">
                        <button className="pricesNextButton">Next</button>
                    </div>
                </div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		pricesData: state.pricesData,
		pricesLoadingStyle: state.pricesLoadingStyle,
		pricesListStyle: state.pricesListStyle,
	};
};

const mapDispatchToProps = {
	pricesDataAction: pricesDataAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(PricesList);
