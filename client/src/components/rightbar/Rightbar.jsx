import { Users } from '../../dummy';
import Online from '../online/Online';
import './rightbar.css';

export default function Rightbar({ profile }) {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	const HomeRightbar = () => {
		return (
			<>
				<div className='bday-container'>
					<img src={`${PF}gift.png`} alt='' className='bday-img' />
					<span className='bday-text'>
						<b>Pola Foster</b> and <b>3 other friends</b> have birthday today.
					</span>
				</div>
				<img src={`${PF}ad.png`} alt='' className='rightbar-ad' />
				<h4 className='rightbar-title'>Online Friends</h4>
				<ul className='rightbar-friendlist'>
					{Users.map((user) => (
						<Online key={user.id} user={user} />
					))}
				</ul>
			</>
		);
	};

	const ProfileRightbar = () => {
		return (
			<>
				<h4 className='rightbarTitle'>User Information</h4>
				<div className='rightbarInfo'>
					<div className='rightbarInfoItem'>
						<span className='rightbarInfoKey'>City:</span>
						<span className='rightbarInfoValue'>Bacoor</span>
					</div>
					<div className='rightbarInfoItem'>
						<span className='rightbarInfoKey'>From:</span>
						<span className='rightbarInfoValue'>Cavite</span>
					</div>
					<div className='rightbarInfoItem'>
						<span className='rightbarInfoKey'>Relationship</span>
						<span className='rightbarInfoValue'>Single</span>
					</div>
				</div>
				<h4 className='rightbarTitle'>User Friends</h4>
				<div className='rightbarFollowings'>
					<div className='rightbarFollowing'>
						<img src={`${PF}person/1.jpeg`} alt='' className='rightbarFollowingImg' />
						<span className='rightbarFollowingName'>Jane Doe</span>
					</div>
				</div>
			</>
		);
	};

	return (
		<div className='rightbar'>
			<div className='rightbar-wrapper'>{profile ? <ProfileRightbar /> : <HomeRightbar />}</div>
		</div>
	);
}
