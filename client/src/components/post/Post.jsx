import { useEffect, useState } from 'react';
import { MoreVert } from '@material-ui/icons';
import axios from 'axios';
import TimeAgo from 'react-timeago';

import './post.css';

export default function Post({ post }) {
	// const user = Users.filter((user) => user.id === post.userId);
	const [like, setLike] = useState(post.likes.length);
	const [isLiked, setIsLiked] = useState(false);
	const [user, setUser] = useState({});
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;

	useEffect(() => {
		const fetchUser = async () => {
			const res = await axios.get(`users/${post.userId}`);
			setUser(res.data);
		};
		fetchUser();
	}, [post.userId]);

	const likeHandler = () => {
		setLike(isLiked ? like - 1 : like + 1);
		setIsLiked(!isLiked);
	};

	return (
		<div className='post'>
			<div className='post-wrapper'>
				<div className='post-top'>
					<div className='post-top__left'>
						<img src={`${PF}${user.profilePicture || 'person/avatar.png'}`} alt='' className='post-top__profile' />
						<span className='post-top__username'>{`${user.firstName} ${user.lastName}`}</span>
						<span className='post-top__date'>
							<TimeAgo date={post.createdAt} />
						</span>
					</div>
					<div className='post-top__right'>
						<MoreVert />
					</div>
				</div>
				<div className='post-center'>
					<span className='post-text'>{post?.desc}</span>
					<img src={`${PF}${post.img}`} alt='' className='post-img' />
				</div>
				<div className='post-bottom'>
					<div className='post-bottom__left'>
						<img src={`${PF}heart.png`} alt='' className='reaction-icon' onClick={likeHandler} />
						<img src={`${PF}like.png`} alt='' className='reaction-icon' onClick={likeHandler} />
						<span className='reaction-counter'>{like} people liked it</span>
					</div>
					<div className='post-bottom__right'>
						<span className='post-comment__text'>{post.comment ? `${post.comment} comments` : ''}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
