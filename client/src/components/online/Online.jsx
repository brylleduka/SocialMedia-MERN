import './online.css';

export default function Online({ user }) {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	return (
		<li className='rightbar-friend'>
			<div className='rightbar-profile__container'>
				<img src={PF + user.img} alt='' className='rightbar-profile__img' />
				<span className='rightbar-online'></span>
			</div>
			<span className='rightbar-profile__name'>{user.name}</span>
		</li>
	);
}
