import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';

import './share.css';

export default function Share() {
	return (
		<div className='share-container'>
			<div className='share-wrapper'>
				<div className='share-top'>
					<img className='share-top__img' src='/assets/person/1.jpeg' alt='' />
					<input placeholder="What's in your mind Brylle?" className='share-top__input' />
				</div>
				<hr className='share-divider' />
				<div className='share-bottom'>
					<div className='share-options'>
						<div className='share-option'>
							<PermMedia htmlColor='tomato' className='icon' />
							<span className='text'>Photo or Video</span>
						</div>
						<div className='share-option'>
							<Label htmlColor='blue' className='icon' />
							<span className='text'>Tag</span>
						</div>
						<div className='share-option'>
							<Room htmlColor='green' className='icon' />
							<span className='text'>Location</span>
						</div>
						<div className='share-option'>
							<EmojiEmotions htmlColor='goldenrod' className='icon' />
							<span className='text'>Feelings</span>
						</div>
					</div>
					<button className='share-button'>Share</button>
				</div>
			</div>
		</div>
	);
}
