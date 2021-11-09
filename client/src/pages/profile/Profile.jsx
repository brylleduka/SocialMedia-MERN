import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

import './profile.css';

export default function Profile() {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	return (
		<>
			<Topbar />
			<div className='profile-container'>
				<Sidebar />
				<div className='profile-right'>
					<div className='profile-right__top'>
						<div className='profile-cover'>
							<img src={`${PF}post/3.jpeg`} className='cover-img' alt='' />
							<img src={`${PF}person/7.jpeg`} className='profile-user__img' alt='' />
						</div>
						<div className='profile-info'>
							<h4 className='profile-info__name'>Brylle</h4>
							<p className='profile-info__description'>Hello</p>
						</div>
					</div>
					<div className='profile-right__bottom'>
						<Feed />
						<Rightbar profile />
					</div>
				</div>
			</div>
		</>
	);
}
