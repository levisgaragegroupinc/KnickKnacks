const router = require('express').Router();
const { request } = require('express');
const { ProviderServiceArea , ProviderSkill, ServiceArea, Skill, User} = require('../../models');
const axios = require('axios');
require('dotenv').config();


router.post ('/sendemail', async (req,res)=> {
    console.log('In sendemail');
    const emailData = {
      "template": {
        "name": "KnickKnack - New Request Notification",
        "fields": {
          "requestor_notes": req.body.requestor_notes,
          "requestor_email": req.body.requestor_email
        }
      },
      "recipients": [{"email": req.body.provider_email, "name": req.body.provider_name}]
    };
  
    try {
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
