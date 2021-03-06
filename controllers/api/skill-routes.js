const router = require('express').Router();
const { ProviderServiceArea , ProviderSkill, ServiceArea, Skill, User} = require('../../models');

const record_skill = async (skill_id, user, req)  => {
    const existing_record = await ProviderSkill.findOne({
        where: {
            skill_id: skill_id,
            user_id: user.id
        }
    });
    if (existing_record) {
        res.status(409).json({ message: `${req.params.username} is already associated with ${req.body.skill}` });
        return;
    } 
    await ProviderSkill.create({
        skill_id: skill_id,
        user_id: user.id
    });
    
    // user.dataValues.provider = true;
    await user.update({provider: true});
}

router.post("/:username", async (req, res) => {
    try {
        const user = await User.findOne({ where: { username: req.params.username }});
        if (!user) {
            res.status(404).json({ message: "There is no user with this username"});
            return;
        }
        if (!req.body.skill) {
            res.status(400).json({ message: "Request body must contain a skill property"});
        }
        const existing_skill_data = await Skill.findOne({ where: { skill_name: req.body.skill }});
        let existing_skill;
        if (existing_skill_data) {
            existing_skill = existing_skill_data.get({ plain: true });
        }
        let new_skill;
       
        if (!existing_skill?.skill_name) {
            new_skill = await Skill.create({ skill_name: req.body.skill });
            record_skill(new_skill.id, user, req);
            res.status(201).json({ message: `${req.body.skill} added as a new skill for ${req.params.username}!` });
        } else {
            new_skill = existing_skill.skill_name;
            new_skill_id = existing_skill.id;
            await record_skill(new_skill_id, user, req);
    
            res.status(201).json({ message: `${req.body.skill} added as a new skill for ${req.params.username}!` });
        }
    } catch (err) {
        console.log(err);
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