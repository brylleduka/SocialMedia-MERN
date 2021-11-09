const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');

// Create a post
router.post('/', async (req, res) => {
	const newPost = new Post(req.body);

	try {
		const savedPost = await newPost.save();
		res.status(200).json(savedPost);
	} catch (err) {
		res.status(500).json(err);
	}
});

// Update a post
router.put('/:id', async (req, res) => {
	const { id } = req.params;
	const { userId } = req.body;
	try {
		const post = await Post.findById(id);
		if (post.userId === userId) {
			await post.updateOne({ _id: id }, { $set: req.body });
			res.status(200).json('The post has been updated');
		} else {
			res.status(403).json('You cant update this post');
		}
	} catch (err) {
		res.status(500).json(err);
	}
});
// delete a post
router.delete('/:id', async (req, res) => {
	const { id } = req.params;
	const { userId } = req.body;
	try {
		const post = await Post.findById(id);
		if (post.userId === userId) {
			await post.deleteOne();
			res.status(200).json('The post has been deleted');
		} else {
			res.status(403).json('You cant delete this post');
		}
	} catch (err) {
		res.status(500).json(err);
	}
});
// like a post
router.put('/:id/like', async (req, res) => {
	const { id } = req.params;
	const { userId } = req.body;
	try {
		const post = await Post.findById(id);
		if (!post.likes.includes(userId)) {
			await post.updateOne({ $push: { likes: userId } });
			res.status(200).json('The post has been liked');
		} else {
			await post.updateOne({ $pull: { likes: userId } });
			res.status(200).json('The post has been unliked');
		}
	} catch (err) {
		res.status(500).json(err);
	}
});
// get a posts
router.get('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const post = await Post.findById(id);
		res.status(200).json(post);
	} catch (err) {
		res.status(500).json(err);
	}
});
// get timeline posts
router.get('/timeline/:userId', async (req, res) => {
	const { userId } = req.params;
	try {
		const currentUser = await User.findById(userId);
		const userPosts = await Post.find({ userId: currentUser._id });
		const friendPosts = await Promise.all(
			currentUser.following.map((friendId) => {
				console.log(friendId);
				return Post.find({ userId: friendId });
			})
		);

		res.status(200).json(userPosts.concat(...friendPosts));
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
