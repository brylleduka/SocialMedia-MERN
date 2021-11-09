import { RssFeed, Chat, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from '@material-ui/icons';
import CloseFriend from '../closeFriend/CloseFriend';
import { Users } from '../../dummy';

import './sidebar.css';

export default function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='sidebar-wrapper'>
				<ul className='sidebar-list'>
					<li className='sidebar-list__item'>
						<RssFeed className='sidebar-icon' />
						<span className='list-item__text'>Feed</span>
					</li>
					<li className='sidebar-list__item'>
						<Chat className='sidebar-icon' />
						<span className='list-item__text'>Chats</span>
					</li>
					<li className='sidebar-list__item'>
						<PlayCircleFilledOutlined className='sidebar-icon' />
						<span className='list-item__text'>Videos</span>
					</li>
					<li className='sidebar-list__item'>
						<Group className='sidebar-icon' />
						<span className='list-item__text'>Group</span>
					</li>
					<li className='sidebar-list__item'>
						<Bookmark className='sidebar-icon' />
						<span className='list-item__text'>Bookmarks</span>
					</li>
					<li className='sidebar-list__item'>
						<HelpOutline className='sidebar-icon' />
						<span className='list-item__text'>Questions</span>
					</li>
					<li className='sidebar-list__item'>
						<WorkOutline className='sidebar-icon' />
						<span className='list-item__text'>Jobs</span>
					</li>
					<li className='sidebar-list__item'>
						<Event className='sidebar-icon' />
						<span className='list-item__text'>Events</span>
					</li>
					<li className='sidebar-list__item'>
						<School className='sidebar-icon' />
						<span className='list-item__text'>Courses</span>
					</li>
				</ul>
				<button className='sidebar-button'>Show More</button>
				<hr className='sidebar-divider' />
				<ul className='sidebar-friendlist'>
					{Users.map((user) => (
						<CloseFriend key={user.id} user={user} />
					))}
				</ul>
			</div>
		</div>
	);
}
