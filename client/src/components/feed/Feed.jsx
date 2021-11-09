import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';

export default function Feed() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get('posts/timeline/61418970559816271bcab04a');
			setPosts(res.data);
		};
		fetchPosts();
	}, []);
	return (
		<div className='feed'>
			<div className='feed-wrapper'>
				<Share />
				{posts.map((post) => (
					<Post key={post._id} post={post} />
				))}
			</div>
		</div>
	);
}
