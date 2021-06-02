import { useEffect, useState } from "react";
import CoinGecko from '../API/CoinGecko';

const PositiveList = () => {
    const [data, setData] = useState({});
    const [page, setPage] = useState(1);
    const [loadingStyle, setLoadingStyle] = useState("pricesListLoader");
    const [listStyle, setListStyle] = useState("displayNone");

    function FetchData() {
        CoinGecko.get(`/coins/markets?vs_currency=usd&order=h24_change_desc&per_page=100&page=${page}&sparkline=false`)
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

    const CoinList = () => {
        if (data.length > 0) {
            const listItems = data.map((coin, i) =>  
                <div className="row pricesListRow" key={i}>
                    <div className="col-6 col-md-4">
                        <img src={coin.image} alt="" className="pricesImage"/>    
                        <span className="pricesName">{coin.id}</span>
                    </div>
                    {
                        coin.price_change_percentage_24h === null ?
                        <div className="col-6 col-md-4 pricesChange priceUp">
                            <i className="bi bi-caret-up-fill priceUp"></i>
                            0%
                        </div>
                        :
                        <div className="col-6 col-md-4 pricesChange">
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
                    <div className="col-6 col-md-4 pricesPrice">
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
					<div className="col-6 col-md-4 pricesChangeTitle">24hr Change</div>
					<div className="col-6 col-md-4 pricesPriceTitle">Price</div>
				</div>
                <CoinList />
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
                            page === 77 ?
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

export default PositiveList;