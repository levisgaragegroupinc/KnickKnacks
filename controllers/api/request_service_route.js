const router = require('express').Router();
const { request } = require('express');
const { ProviderServiceArea , ProviderSkill, ServiceArea, Skill, User} = require('../../models');
const axios = require('axios')

console.log (' In request-service-route');

const mc_instance='us11'
const mc_listUniqueId='c5327bf863'  
const mc_ApiKey='019a34459eda1ef79f911e4e8eabb20c-us11'

const add_users_url = 'https://' + mc_instance + '.api.mailchimp.com/3.0/lists/' + mc_listUniqueId + '/members/'
// const mc_auth_header = `Bearer ${mc_ApiKey}`

router.post('/addemails', async (req, res) => {
    try {
        const resp = await axios.post(
            add_users_url,
            req.body,
            { headers: { Authorization: `Bearer ${mc_ApiKey}` } }
        )
        res.status(200).json(resp.data);
      } catch (error) {
        console.log(`error`, error)
      }
});

module.exports = router;
