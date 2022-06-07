const router = require("express").Router();
const { Router } = require("express");
const { User } = require("../../models");

router.post("/login", async (req, res) => {
    try {
        const user_data = await User.findOne({ where: { email: req.body.email } });

        if (!user_data) {
            res
                .status(400)
                .json({ message: "Incorrect email or password. Please try again." });
            return;
        }

        const valid_password = await user_data.check_password(req.body.password);

        if (!valid_password) {
            res
                .status(400)
                .json({ message: "Incorrect email or password. Please try again." });
            return;
        }

        req.session.save(() => {
            req.session.user_id = user_data.id;
            req.session.logged_in = true;
            
            res.json({ user: user_data, message: "You are now logged in!" });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/log_out", (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.post("/sign_up", async (req, res) => {
    try {
        const user_data = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = user_data.id;
            req.session.logged_in = true;

            res.status(200).json(user_data);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;