import {useEffect} from 'react';
import { connect } from "react-redux";
import {trendingDataAction} from "../redux/actions";

const Trending = ({trendingDataAction, trendingData, trendingLoadingStyle, trendingListStyle}) => {
    useEffect(() => {
        trendingDataAction();
    }, [])

    return (
        <div className="trending col-12 col-xl-4">
            <p className="trendingTitle">Top Trending</p>
            <div className={trendingLoadingStyle}>
                <div className="spinner-border text-primary" role="status">
                </div>
            </div>
            <div className={trendingListStyle}>
                <div className="col-6">
                    {
                        trendingData.length !== 0 ?
                        <img src={trendingData[0].[1]} alt="" className="trendingImage"/>
                        :
                        <div>
                        
                        </div>
                    }
                    {
                        trendingData.length !== 0 ?
                        <span className="trendingName">
                            {trendingData[0].[0]}
                        </span>
                        :
                        <span>
                        
                        </span>
                    }
                </div>
                <div className="col-6">
                    {
                        trendingData.length !== 0 ?
                        <p className="trendingPrice">
                            ${trendingData[0].[2]}
                        </p>
                        :
                        <span>
                        
                        </span>
                    }
                </div>
            </div>
            <div className={trendingListStyle}>
                <div className="col-6">
                    {
                        trendingData.length !== 0 ?
                        <img src={trendingData[1].[1]} alt="" className="trendingImage"/>
                        :
                        <div>
                        
                        </div>
                    }
                    {
                        trendingData.length !== 0 ?
                        <span className="trendingName">
                            {trendingData[1].[0]}
                        </span>
                        :
                        <span>
                        
                        </span>
                    }
                </div>
                <div className="col-6">
                    {
                        trendingData.length !== 0 ?
                        <p className="trendingPrice">
                            ${trendingData[1].[2]}
                        </p>
                        :
                        <span>
                        
                        </span>
                    }
                </div>
            </div>
            <div className={trendingListStyle}>
                <div className="col-6">
                    {
                        trendingData.length !== 0 ?
                        <img src={trendingData[2].[1]} alt="" className="trendingImage"/>
                        :
                        <div>
                        
                        </div>
                    }
                    {
                        trendingData.length !== 0 ?
                        <span className="trendingName">
                            {trendingData[2].[0]}
                        </span>
                        :
                        <span>
                        
                        </span>
                    }
                </div>
                <div className="col-6">
                    {
                        trendingData.length !== 0 ?
                        <p className="trendingPrice">
                            ${trendingData[2].[2]}
                        </p>
                        :
                        <span>
                        
                        </span>
                    }
                </div>
            </div>
            <div className={trendingListStyle}>
                <div className="col-6">
                    {
                        trendingData.length !== 0 ?
                        <img src={trendingData[3].[1]} alt="" className="trendingImage"/>
                        :
                        <div>
                        
                        </div>
                    }
                    {
                        trendingData.length !== 0 ?
                        <span className="trendingName">
                            {trendingData[3].[0]}
                        </span>
                        :
                        <span>
                        
                        </span>
                    }
                </div>
                <div className="col-6">
                    {
                        trendingData.length !== 0 ?
                        <p className="trendingPrice">
                            ${trendingData[3].[2]}
                        </p>
                        :
                        <span>
                        
                        </span>
                    }
                </div>
            </div>
            <div className={trendingListStyle}>
                <div className="col-6">
                    {
                        trendingData.length !== 0 ?
                        <img src={trendingData[4].[1]} alt="" className="trendingImage"/>
                        :
                        <div>
                        
                        </div>
                    }
                    {
                        trendingData.length !== 0 ?
                        <span className="trendingName">
                            {trendingData[4].[0]}
                        </span>
                        :
                        <span>
                        
                        </span>
                    }
                </div>
                <div className="col-6">
                    {
                        trendingData.length !== 0 ?
                        <p className="trendingPrice">
                            ${trendingData[4].[2]}
                        </p>
                        :
                        <span>
                        
                        </span>
                    }
                </div>
            </div>
            <div className={trendingListStyle}>
                <div className="col-6">
                    {
                        trendingData.length !== 0 ?
                        <img src={trendingData[5].[1]} alt="" className="trendingImage"/>
                        :
                        <div>
                        
                        </div>
                    }
                    {
                        trendingData.length !== 0 ?
                        <span className="trendingName">
                            {trendingData[5].[0]}
                        </span>
                        :
                        <span>
                        
                        </span>
                    }
                </div>
                <div className="col-6">
                    {
                        trendingData.length !== 0 ?
                        <p className="trendingPrice">
                            ${trendingData[5].[2]}
                        </p>
                        :
                        <span>
                        
                        </span>
                    }
                </div>
            </div>
            <div className={trendingListStyle}>
                <div className="col-6">
                    {
                        trendingData.length !== 0 ?
                        <img src={trendingData[6].[1]} alt="" className="trendingImage"/>
                        :
                        <div>
                        
                        </div>
                    }
                    {
                        trendingData.length !== 0 ?
                        <span className="trendingName">
                            {trendingData[6].[0]}
                        </span>
                        :
                        <span>
                        
                        </span>
                    }
                </div>
                <div className="col-6">
                    {
                        trendingData.length !== 0 ?
                        <p className="trendingPrice">
                            ${trendingData[6].[2]}
                        </p>
                        :
                        <span>
                        
                        </span>
                    }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
	return {
        trendingData: state.trendingData,
        trendingLoadingStyle: state.trendingLoadingStyle,
        trendingListStyle: state.trendingListStyle,
    }
}

const mapDispatchToProps = {
    trendingDataAction: trendingDataAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Trending);