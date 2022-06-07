const router = require('express').Router();
const { ProviderServiceArea , ProviderSkill, ServiceArea, Skill, User} = require('../../models');

router.post("/:username", async (req, res) => {
    try {
        const user = await User.findOne({ where: { username: req.params.username }});
        const existing_skill = await Skill.findOne({ where: { skill_name: req.body.skill }});
        let new_skill;
        if (!existing_skill) {
            new_skill = await Skill.create({ skill_name: req.body.skill });
        } else {
            new_skill = existing_skill;
        }
        await ProviderSkill.create({
            skill_id: new_skill.id,
            user_id: user.id
        });
        user.provider = true;

        res.status(201).json({ message: `${req.body.skill} added as a new skill for ${req.params.username}!` });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete("/:username", async (req, res) => {
    try {
        const user = await User.findOne({ where: { username: req.params.username } });
        const skill = await Skill.findOne({ where: {
            skill_name: req.body.skill
        }});
        await ProviderSkill.destroy({ where: {
            skill_id: skill.id,
            user_id: user.id
        }});

        // Checks if the user doesn't have any skills, and updates their provider status accordingly
        const has_skills = await ProviderSkill.findAll({ where: { user_id: user.id } });
        if (!has_skills) {
            user.provider = false;
        }

        res.status(201).json({ message: `${req.body.skill} deleted from ${req.params.username}!` });
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;