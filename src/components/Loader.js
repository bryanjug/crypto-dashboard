import { connect } from "react-redux";

const Loader = ({loadingStyle}) => {
    return (
        <div>
            <div className={loadingStyle}>
				<div className="text-center loading">
					<div className="spinner-border text-primary" role="status"></div>
					<br />
					<span className="loadingText">Loading...</span>
				</div>
			</div>
        </div>
    );
}

const mapStateToProps = (state) => {
	return {
        loadingStyle: state.loadingStyle,
	};
};

export default connect(mapStateToProps, null)(Loader);