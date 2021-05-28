import {useEffect} from 'react';
import { connect } from "react-redux";
import {changesDataAction} from "../redux/actions";

const Changes = ({changesDataAction, changesData, changesLoadingStyle, changesListStyle}) => {
    useEffect(() => {
        if (changesData.length === 0) {
            changesDataAction();
        }
    }, [])
    
    return (
        <div className="changes col-12 col-lg-6 col-xl-4">
            <p className="changesTitle">Top 24hr Price Changes</p>
            <div className={changesLoadingStyle}>
                <div className="spinner-border text-primary" role="status">
                </div>
            </div>
            <div className={changesListStyle}>
                <div className="col-6">
                    {
                        changesData.length !== 0 ?
                        <img src={changesData[0].[1]} alt="" className="changesImage"/>
                        :
                        <span></span>
                    }
                    {
                        changesData.length !== 0 ?
                        <span className="changesName">{changesData[0].[0]}</span>
                        :
                        <span></span>
                    }
                </div>
                <div className="col-6">
                    <i className="bi bi-caret-up-fill priceUp"></i>
                    {
                        changesData.length !== 0 ?
                        <span className="changesPercent priceUp">
                            {(changesData[0].[2]).toFixed(1)}%
                        </span>
                        :
                        <span></span>
                    }
                </div>
            </div>
            <div className={changesListStyle}>
                <div className="col-6">
                    {
                        changesData.length !== 0 ?
                        <img src={changesData[1].[1]} alt="" className="changesImage"/>
                        :
                        <span></span>
                    }
                    {
                        changesData.length !== 0 ?
                        <span className="changesName">{changesData[1].[0]}</span>
                        :
                        <span></span>
                    }
                </div>
                <div className="col-6">
                    <i className="bi bi-caret-down-fill priceDown"></i>
                    {
                        changesData.length !== 0 ?
                        <span className="changesPercent priceDown">
                            {(changesData[1].[2]).toFixed(1)}%
                        </span>
                        :
                        <span></span>
                    }
                </div>
            </div>
            <div className={changesListStyle}>
                <div className="col-6">
                    {
                        changesData.length !== 0 ?
                        <img src={changesData[2].[1]} alt="" className="changesImage"/>
                        :
                        <span></span>
                    }
                    {
                        changesData.length !== 0 ?
                        <span className="changesName">{changesData[2].[0]}</span>
                        :
                        <span></span>
                    }
                </div>
                <div className="col-6">
                    <i className="bi bi-caret-up-fill priceUp"></i>
                    {
                        changesData.length !== 0 ?
                        <span className="changesPercent priceUp">
                            {(changesData[2].[2]).toFixed(1)}%
                        </span>
                        :
                        <span></span>
                    }
                </div>
            </div>
            <div className={changesListStyle}>
                <div className="col-6">
                    {
                        changesData.length !== 0 ?
                        <img src={changesData[3].[1]} alt="" className="changesImage"/>
                        :
                        <span></span>
                    }
                    {
                        changesData.length !== 0 ?
                        <span className="changesName">{changesData[3].[0]}</span>
                        :
                        <span></span>
                    }
                </div>
                <div className="col-6">
                    <i className="bi bi-caret-down-fill priceDown"></i>
                    {
                        changesData.length !== 0 ?
                        <span className="changesPercent priceDown">
                            {(changesData[3].[2]).toFixed(1)}%
                        </span>
                        :
                        <span></span>
                    }
                </div>
            </div>
            <div className={changesListStyle}>
                <div className="col-6">
                    {
                        changesData.length !== 0 ?
                        <img src={changesData[4].[1]} alt="" className="changesImage"/>
                        :
                        <span></span>
                    }
                    {
                        changesData.length !== 0 ?
                        <span className="changesName">{changesData[4].[0]}</span>
                        :
                        <span></span>
                    }
                </div>
                <div className="col-6">
                    <i className="bi bi-caret-up-fill priceUp"></i>
                    {
                        changesData.length !== 0 ?
                        <span className="changesPercent priceUp">
                            {(changesData[4].[2]).toFixed(1)}%
                        </span>
                        :
                        <span></span>
                    }
                </div>
            </div>
            <div className={changesListStyle}>
                <div className="col-6">
                    {
                        changesData.length !== 0 ?
                        <img src={changesData[5].[1]} alt="" className="changesImage"/>
                        :
                        <span></span>
                    }
                    {
                        changesData.length !== 0 ?
                        <span className="changesName">{changesData[5].[0]}</span>
                        :
                        <span></span>
                    }
                </div>
                <div className="col-6">
                    <i className="bi bi-caret-down-fill priceDown"></i>
                    {
                        changesData.length !== 0 ?
                        <span className="changesPercent priceDown">
                            {(changesData[5].[2]).toFixed(1)}%
                        </span>
                        :
                        <span></span>
                    }
                </div>
            </div>
            <div className={changesListStyle}>
                <div className="col-6">
                    {
                        changesData.length !== 0 ?
                        <img src={changesData[6].[1]} alt="" className="changesImage"/>
                        :
                        <span></span>
                    }
                    {
                        changesData.length !== 0 ?
                        <span className="changesName">{changesData[6].[0]}</span>
                        :
                        <span></span>
                    }
                </div>
                <div className="col-6">
                    <i className="bi bi-caret-down-fill priceUp"></i>
                    {
                        changesData.length !== 0 ?
                        <span className="changesPercent priceUp">
                            {(changesData[6].[2]).toFixed(1)}%
                        </span>
                        :
                        <span></span>
                    }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
	return {
        changesData: state.changesData,
        changesLoadingStyle: state.changesLoadingStyle,
        changesListStyle: state.changesListStyle,
    }
}

const mapDispatchToProps = {
    changesDataAction: changesDataAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Changes);