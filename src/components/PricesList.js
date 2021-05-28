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
        pricesDataAction();
    }, [])
    
	return (
		<div className="dashboard">
			<div className="pricesListLoader displayNone">
				<div className="spinner-border text-primary" role="status"></div>
			</div>
			<div className="col-12 pricesList text-center">
				<div className="row pricesTitles">
					<div className="col-6 col-md-4 pricesNameTitle">Name</div>
					<div className="col-md-4 pricesChangeTitle">24hr Change</div>
					<div className="col-6 col-md-4 pricesPriceTitle">Price</div>
				</div>
				<div className="row">
					<div className="col-6 col-md-4">
						<span className="pricesImage">O</span>
						<span className="pricesName">Name</span>
					</div>
					<div className="col-md-4 pricesChange">^25%</div>
					<div className="col-6 col-md-4">0.00000532</div>
                </div>
                <div className="row">
                    <div className="col-6">
                    
                    </div>
                    <div className="col-6">
                    
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
