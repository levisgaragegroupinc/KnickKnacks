const router = require("express").Router();
const { User } = require('../../models');

router.post("/:username", async (req, res) => {
    try {
        await User.update(
            {
                provider_bio: req.body.bio
            },
            {
                where: {
                    username: req.params.username
                }
            }
        );

        res.status(201).json({ message: `You updated ${req.params.username}'s bio!` });
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;