const router = require('express').Router();
const { request } = require('express');
const { User} = require('../../models');
const axios = require('axios');
require('dotenv').config();

// router to send email notification with requestor details to provider
router.post ('/sendemail', async (req,res)=> {

    try {

      const requestor_data = await User.findByPk(req.session.user_id);
      const provider_data  = await User.findOne({ where: { username: req.body.provider_username }});

      const requestor = requestor_data.get({ plain: true });
      const provider = provider_data.get({ plain: true });

      console.log ('REquestor ', requestor);
      console.log ('Provider ', provider);

      const emailData = {
        "template": {
          "name": "KnickKnack - New Request Notification",
          "fields": {
            "provider_name": provider.first_name,
            "requestor_notes": req.body.requestor_notes,
            "requestor_email": requestor.email,
          }
        },
        "recipients": [{"email": provider.email, "name": provider.first_name + ' ' + provider.last_name}]
      };

      const resp = await axios.post(
      process.env.TRUSTIFI_URL + '/api/i/v1/email', 
      emailData,
      {headers: {
        'x-trustifi-key': process.env.TRUSTIFI_KEY,
        'x-trustifi-secret': process.env.TRUSTIFI_SECRET,
        'Content-Type': 'application/json'
      }},
    );
    res.status(200).json(resp.data);
  }
  catch(err) {
    console.log (err);
    res.json('invalid request');
  }
  });

module.exports = router;
