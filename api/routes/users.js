const User = require('../models/User');
const router = require('express').Router();
const bcrypt = require('bcrypt');

// get user
router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findById(id);
		const { password, updatedAt, ...others } = user._doc;
		res.status(200).json(others);
	} catch (err) {
		res.status(500).json(err);
	}
});
// update user
router.put('/:id', async (req, res) => {
	const { userId, password, isAdmin } = req.body;
	const { id } = req.params;

	if (userId === id || isAdmin) {
		if (password) {
			try {
				const salt = await bcrypt.genSalt(10);
				req.body.password = await bcrypt.hash(password, salt);
			} catch (err) {
				return res.status(500).json(err);
			}
		}

		try {
			const user = await User.findByIdAndUpdate(id, { $set: req.body });
			res.status(200).json('Account has been updated');
		} catch (err) {
			return res.status(500).json(err);
		}
	} else {
		return res.status(403).json('You can only update your account');
	}
});
// delete user

router.delete('/:id', async (req, res) => {
	const { userId, isAdmin } = req.body;
	const { id } = req.params;

	if (userId === id || isAdmin) {
		try {
			const user = await User.findByIdAndUpdate(id);

			res.status(200).json('Account has been deleted');
		} catch (err) {
			return res.status(500).json(err);
		}
	} else {
		return res.status(403).json('You can only delete your account');
	}
});
// follow a user
router.put('/:id/follow', async (req, res) => {
	const { userId } = req.body;
	const { id } = req.params;

	if (userId !== id) {
		try {
			const user = await User.findById(id);
			const currentUser = await User.findById(userId);

			if (!user.followers.includes(userId)) {
				await user.updateOne({ $push: { followers: userId } });
				await currentUser.updateOne({ $push: { following: id } });
				res.status(200).json('User has been followed');
			} else {
				res.status(403).json('You already follow this user.');
			}
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		res.status(403).json('Follow unavailable');
	}
});
// unfollow a user
router.put('/:id/unfollow', async (req, res) => {
	const { userId } = req.body;
	const { id } = req.params;

	if (userId !== id) {
		try {
			const user = await User.findById(id);
			const currentUser = await User.findById(userId);

			if (user.followers.includes(userId)) {
				await user.updateOne({ $pull: { followers: userId } });
				await currentUser.updateOne({ $pull: { following: id } });
				res.status(200).json('User has been unfollowed');
			} else {
				res.status(403).json('You dont follow this user.');
			}
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		res.status(403).json('Unfollow unavailable');
	}
});

module.exports = router;
