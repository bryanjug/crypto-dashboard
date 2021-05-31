import { useEffect, useState } from "react";
import CoinGecko from '../API/CoinGecko';

const ExchangesList = () => {
    const [data, setData] = useState({});
    const [page, setPage] = useState(1);
    const [loadingStyle, setLoadingStyle] = useState("pricesListLoader");
    const [listStyle, setListStyle] = useState("displayNone");
    
    function FetchData() {
        CoinGecko.get(`/exchanges?per_page=100&page=${page}`)
            .then(function(response) {
                setData(response.data);
            })
    }

    useEffect(() => {
        FetchData();
    }, [page])

    useEffect(() => {
        if (data.length > 0) {
            setLoadingStyle("displayNone");
            setListStyle("col-12 pricesList text-center");
        }
    }, [data])

    const MarketList = () => {
        if (data.length > 0) {
            const listItems = data.map((market, i) =>  
                <div className="row pricesListRow" key={i}>
                    <div className="col-6 col-md-4">
                        <img src={market.image} alt="" className="pricesImage"/>    
                        <span className="pricesName">{market.name}</span>
                    </div>
                        <div className="col-6 col-md-4 pricesPrice">
                            {(market.trade_volume_24h_btc).toFixed(2)}
                        </div>
                    <div className="col-6 col-md-4 pricesChange">
                        {market.trust_score}
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

    return (
        <div className="dashboard">
			<div className={loadingStyle}>
				<div className="spinner-border text-primary" role="status"></div>
			</div>
			<div className={listStyle}>
				<div className="row pricesTitles">
					<div className="col-6 col-md-4 pricesNameTitle">Name</div>
					<div className="col-6 col-md-4 pricesPriceTitle">Trade Volume</div>
					<div className="col-6 col-md-4 pricesChangeTitle">Trust Score</div>
				</div>
                <MarketList />
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
                            page === 4 ?
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
}

export default ExchangesList;