import Bitcoin from './Bitcoin';
import Favorites from './Favorites';
import Trending from './Trending';
import Changes from './Changes';
import News from './News';

const Dashboard = () => {
	return (
		<div className="dashboard">
			<Favorites />
			<div className="row gx-0">
				<Trending />
				<Changes />
                <Bitcoin />
			</div>
			<News />
		</div>
	);
};

export default Dashboard;
