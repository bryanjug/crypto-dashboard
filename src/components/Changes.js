import {useEffect} from 'react';
import { connect } from "react-redux";
import {} from "../redux/actions";

const Changes = ({}) => {
    return (
        <div className="changes col-12 col-lg-6 col-xl-4">
            <p className="changesTitle">Top 24hr Price Changes</p>
            <div className="row text-center changesList">
                <div className="col-4">
                    <i className="bi bi-circle"></i>
                    <span className="changesName">Name</span>
                </div>
                <div className="col-4">
                    <span className="changesPrice">Price</span>
                </div>
                <div className="col-4">
                    <i className="bi bi-caret-up-fill priceUp"></i>
                    <span className="changesPercent priceUp">7%</span>
                </div>
            </div>
            <div className="row text-center changesList">
                <div className="col-4">
                    <i className="bi bi-circle"></i>
                    <span className="changesName">Name</span>
                </div>
                <div className="col-4">
                    <span className="changesPrice">Price</span>
                </div>
                <div className="col-4">
                    <i className="bi bi-caret-down-fill priceDown"></i>
                    <span className="changesPercent priceDown">-27%</span>
                </div>
            </div>
            <div className="row text-center changesList">
                <div className="col-4">
                    <i className="bi bi-circle"></i>
                    <span className="changesName">Name</span>
                </div>
                <div className="col-4">
                    <span className="changesPrice">Price</span>
                </div>
                <div className="col-4">
                    <i className="bi bi-caret-up-fill priceUp"></i>
                    <span className="changesPercent priceUp">7%</span>
                </div>
            </div>
            <div className="row text-center changesList">
                <div className="col-4">
                    <i className="bi bi-circle"></i>
                    <span className="changesName">Name</span>
                </div>
                <div className="col-4">
                    <span className="changesPrice">Price</span>
                </div>
                <div className="col-4">
                    <i className="bi bi-caret-down-fill priceDown"></i>
                    <span className="changesPercent priceDown">-27%</span>
                </div>
            </div>
            <div className="row text-center changesList">
                <div className="col-4">
                    <i className="bi bi-circle"></i>
                    <span className="changesName">Name</span>
                </div>
                <div className="col-4">
                    <span className="changesPrice">Price</span>
                </div>
                <div className="col-4">
                    <i className="bi bi-caret-up-fill priceUp"></i>
                    <span className="changesPercent priceUp">7%</span>
                </div>
            </div>
            <div className="row text-center changesList">
                <div className="col-4">
                    <i className="bi bi-circle"></i>
                    <span className="changesName">Name</span>
                </div>
                <div className="col-4">
                    <span className="changesPrice">Price</span>
                </div>
                <div className="col-4">
                    <i className="bi bi-caret-down-fill priceDown"></i>
                    <span className="changesPercent priceDown">-27%</span>
                </div>
            </div>
            <div className="row text-center changesList">
                <div className="col-4">
                    <i className="bi bi-circle"></i>
                    <span className="changesName">Name</span>
                </div>
                <div className="col-4">
                    <span className="changesPrice">Price</span>
                </div>
                <div className="col-4">
                    <i className="bi bi-caret-up-fill priceUp"></i>
                    <span className="changesPercent priceUp">7%</span>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
	return {

    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Changes);