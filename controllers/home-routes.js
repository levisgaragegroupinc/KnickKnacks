// importing necessary package
const router = require("express").Router();
const { User, ServiceArea, Skill, ProviderSkill, ProviderServiceArea } = require("../models");
const withAuth = require("../utils/withAuth");

//Setting up router for rendering homepage
router.get("/", (req, res) => {
    res.render("home", {
        logged_in: req.session.logged_in
    });
});

// Setting up routes for user login that would render login page
router.get("/login", (req, res) => {
    if (req.session.logged_in) {
      res.redirect("/");
      return;
    }
    res.render("login", {
        logged_in: req.session.logged_in
    });
});

//Setting up router for signup page that would render signup page
router.get("/signup", (req, res) => {
    if (req.session.logged_in) {
      res.redirect("/");
      return;
    }
    res.render("signup", {
        logged_in: req.session.logged_in
    });
});


//Setting up router for search results 
router.get("/results/skill/:skill", withAuth, async (req,res) => {
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

router.get("/results/zip/:zipcode", withAuth, async (req,res) => {
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

router.get("/results/zip_skill/:zipcode/:skill", withAuth, async (req,res) => {
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


//Setting up router for search results 
router.get("/:username", withAuth, async (req,res)=> {
    const user = await User.findOne({
        where: {
            username: req.params.username
        }
    });
    
    res.render("profile", { 
        user,
        logged_in: req.session.logged_in
    });

});

// Renders the form to request services from [username]
router.get("/request/:username", async (req, res) => {
    const provider = await User.findOne({ where: { username: req.params.username } });

    res.render("request-service-form", {
        logged_in: req.session.logged_in,
        bio: provider.provider_bio
    });
});

module.exports = router;