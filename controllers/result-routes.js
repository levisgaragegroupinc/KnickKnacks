// importing necessary package
const router = require("express").Router();
const { User, ServiceArea, Skill, ProviderSkill, ProviderServiceArea } = require("../models");
const withAuth = require("../utils/withAuth");

//Setting up router for search results 
router.get("/skill/:skill", withAuth, async (req,res) => {
    const providers_data = await User.findAll({
        attributes: {
            include: [
              [{ model: Skill }, { model: ServiceArea }]
            ],
            where: {
                skill: req.params.skill
            }
        }
    });

    const providers = providers_data.map(provider => provider.get({ plain: true }));

    res.render("home-results", { 
        providers, 
        logged_in: req.session.logged_in
    });
});

router.get("/zip/:zipcode", withAuth, async (req,res) => {
    const providers_data = await User.findAll({
        attributes: {
            include: [
              [{ model: Skill, as: "skill" }, { model: ServiceArea, as: "area" }]
            ],
            where: {
                area: req.params.zipcode
            }
        }
    });

    const providers = providers_data.map(provider => provider.get({ plain: true }));

    res.render("home-results", { 
        providers, 
        logged_in: req.session.logged_in
    });
});

router.get("/zip_skill/:zipcode/:skill", withAuth, async (req,res) => {
    const providers_data = await User.findAll({
        attributes: {
            include: [
              [{ model: Skill }, { model: ServiceArea }]
            ],
            where: {
                skill: req.params.skill,
                area: req.params.zipcode
            }
        }
    });

    const providers = providers_data.map(provider => provider.get({ plain: true }));

    res.render("home-results", { 
        providers, 
        logged_in: req.session.logged_in
    });
});

module.exports = router;