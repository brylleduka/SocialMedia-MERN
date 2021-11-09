import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './topbar.css';
export default function Topbar() {
	return (
		<div className='topbar'>
			<div className='topbar-left'>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<span className='logo'>Social</span>
				</Link>
			</div>
			<div className='topbar-center'>
				<div className='searchbar'>
					<Search className='search-icon' fontSize='small' style={{ marginLeft: 10 }} />
					<input type='text' placeholder='Search for friend, post, or video' className='search-input' />
				</div>
			</div>
			<div className='topbar-right'>
				<div className='topbar-links'>
					<span className='topbar-link'>Homepage</span>
					<span className='topbar-link'>Timeline</span>
				</div>
				<div className='topbar-icons'>
					<div className='topbar-icon__item'>
						<Person />
						<span className='topbar-icon__badge'>1</span>
					</div>
					<div className='topbar-icon__item'>
						<Chat />
						<span className='topbar-icon__badge'>2</span>
					</div>
					<div className='topbar-icon__item'>
						<Notifications />
						<span className='topbar-icon__badge'>1</span>
					</div>
				</div>
				<img src='/assets/person/1.jpeg' alt='' className='topbar-img' />
			</div>
		</div>
	);
}
