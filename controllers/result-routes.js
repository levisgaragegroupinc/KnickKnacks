// importing necessary package
const router = require("express").Router();
const { User, ServiceArea, Skill, ProviderSkill, ProviderServiceArea } = require("../models");
const withAuth = require("../utils/withAuth");

//Setting up router for search results 
router.get("/skill/:skill", withAuth, async (req,res) => {
    const providers_data = await User.findAll({
        include: [
            {
                model: Skill,
                as: "providers_skills",
                where: { skill_name: req.params.skill }
            },
            {
                model: ServiceArea,
                as: "areas_served"
            }
        ]
    });

    const providers = providers_data.map(provider => provider.get({ plain: true }));

    res.render("home-results", { 
        providers, 
        logged_in: req.session.logged_in
    });
});

router.get("/zip/:zipcode", withAuth, async (req,res) => {
    const providers_data = await User.findAll({
        include: [
            { model: Skill, as: "providers_skills" },
            {
                model: ServiceArea,
                as: "areas_served",
                where: { zipcode: req.params.zipcode }
            }
        ]
        
    });

    const providers = providers_data.map(provider => provider.get({ plain: true }));

    res.render("home-results", { 
        providers, 
        logged_in: req.session.logged_in
    });
});

router.get("/zip_skill/:zipcode/:skill", withAuth, async (req,res) => {
    const providers_data = await User.findAll({
        include: [
            {
                model: Skill,
                as: "providers_skills",
                where: { skill_name: req.params.skill }
            },
            {
                model: ServiceArea,
                as: "areas_served",
                where: { zipcode: req.params.zipcode }
            }
        ]
    });

    const providers = providers_data.map(provider => provider.get({ plain: true }));

    res.render("home-results", { 
        providers, 
        logged_in: req.session.logged_in
    });
});

module.exports = router;