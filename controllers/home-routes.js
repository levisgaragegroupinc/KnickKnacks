// importing necessary package
const router = require("express").Router();
const {
  User,
  ServiceArea,
  Skill,
  ProviderSkill,
  ProviderServiceArea,
} = require("../models");
const withAuth = require("../utils/withAuth");

//Setting up router for rendering homepage
router.get("/", (req, res) => {
  res.render("home", {
    logged_in: req.session.logged_in,
  });
});

// Setting up routes for user login that would render login page
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login", {
    logged_in: req.session.logged_in,
  });
});

//Setting up router for signup page that would render signup page
router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("signup", {
    logged_in: req.session.logged_in,
  });
});

router.get("/profile", withAuth, async (req, res) => {
  const user_data = await User.findOne({
    where: {
      id: req.session.user_id,
    },
    include: {
      model: Skill,
      as: "providers_skills",
    },
  });
  const user = user_data.get({ plain: true });

  res.render("home-profile", {
    user,
    logged_in: req.session.logged_in,
    editting: false,
  });
});

// Add route to edit someone's profile
router.get("/profile/edit", withAuth, async (req, res) => {
  const user = await User.findOne({
    where: {
      username: req.session.user_data,
    },
  });

  res.render("home-profile", {
    user,
    logged_in: req.session.logged_in,
    editting: true,
  });
});

//Setting up router for search results
router.get("/:username", withAuth, async (req, res) => {
  const user_data = await User.findOne({
    where: {
      username: req.params.username,
    },
    include: {
      model: Skill,
      as: "providers_skills",
    },
  });

  if (!user_data) {
    res
      .status(404)
      .json({
        message: `No user found with the username ${req.params.username}`,
      });
    return;
  }

  const user = user_data.get({ plain: true });

  res.render("home-profile", {
    user,
    logged_in: req.session.logged_in,
    editting: false,
  });
});

// Renders the form to request services from [username]
router.get("/request/:username", async (req, res) => {
  const provider = await User.findOne({
    where: { username: req.params.username },
  });

  res.render("request-service-form", {
    logged_in: req.session.logged_in,
    bio: provider.provider_bio,
  });
});

module.exports = router;
