const router = require("express").Router();
const { ProviderServiceArea , ProviderSkill, ServiceArea, Skill, User} = require('../../models');

router.post("/:username", async (req, res) => {
    try {
        const user = await User.findOne({ where: { username: req.params.username }});
        const existing_area = await ServiceArea.findOne({ where: { zipcode: req.body.zipcode }});
        let new_area;
        if (!existing_area) {
            new_area = await ServiceArea.create({ zipcode: req.body.zipcode });
        } else {
            new_area = existing_area;
            const existing_record = await ProviderServiceArea.findOne({
                where: {
                    servicearea_id: existing_area.id,
                    user_id: req.session.user_id
                }
            });
            if (existing_record) {
                res.status(409).json({ message: `${req.params.username} is already associated with ${req.body.zipcode}` });
                return;
            }
        }
        await ProviderServiceArea.create({
            servicearea_id: new_area.id,
            user_id: user.id
        });

        res.status(201).json({ message: `${req.body.zipcode} added as a new service area for ${req.params.username}!` });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;