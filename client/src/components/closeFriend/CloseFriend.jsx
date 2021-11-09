import './closeFriend.css';

export default function CloseFriend({ user }) {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	return (
		<li className='friend'>
			<img src={PF + user.img} alt='' className='friend-img' />
			<span className='friend-name'>{user.name}</span>
		</li>
	);
}
