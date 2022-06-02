// importing necessary package
const router = require('express').Router();
const { User, ServiceArea, Skill, ProviderSkill, ProviderServiceArea } = require('../models');
const withAuth = require('../utils/auth');

//Setting up router for rendering homepage
router.get('/', (req, res) => {
    res.render('homepage'),{
        logged_in: req.session.logged_in
    };
});

// Setting up routes for user login that would render login page
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('login');
});

//Setting up router for signup page that would render signup page
router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('signup');
});


//Setting up router for search results 
router.get('/search-results', withAuth, (req,res)=> {

res.render('search-results', { 
    providers, 
    logged_in: req.session.logged_in
    });

});


//Setting up router for search results 
router.get('/:username', withAuth, (req,res)=> {
    
    res.render('userprofile', { 
        user_profile, 
        logged_in: req.session.logged_in
    });

});