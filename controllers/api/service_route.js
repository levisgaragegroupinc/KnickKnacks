const router = require('express').Router();
const { request } = require('express');
const { ProviderServiceArea , ProviderSkill, ServiceArea, Skill, User} = require('../../models');


console.log (' In service-route');
//Service by skill or area 
router.get('/:id', async (req, res) => {
    // find one category by its `id` value and its associated Products
    const prov_zipcode = parseInt(req.params.id);
    try {
   
      // if (prov_zipcode > 10000 && prov_zipcode < 99999) {
      //   console.log ('id-222',req.params.id );
      //   const providers_inthis_area = await ServiceArea.findAll({
      //     where: { zipcode: prov_zipcode },
      //     include: [{model: User, through: ProviderServiceArea, as: 'providers_in_servicearea'}], 
      //   });
      //   console.log(providers_inthis_area);
      //   const providers_serving_area = providers_inthis_area.map((item) => item.get({ plain: true }));
      //   res.status(200).json(providers_serving_area);
      // };    
      console.log (prov_zipcode);
      if (Number.isInteger(prov_zipcode)){
        const providers_inthis_area = await User.findAll({
        include : [ {model: Skill, through: ProviderSkill, as: 'providers_skills'},
                    {model: ServiceArea, through: ProviderServiceArea, as: 'areas_served',
                      where: {zipcode:prov_zipcode}}]
      })
      res.status(200).json(providers_inthis_area);
    } else {
     
      // const prov_skill_id = await Skill.findOne({attributes:['id'], where: { skill_name: req.params.id}},);
      // console.log (prov_skill_id);
      // providers_inthis_area = await User.findAll({
      //   include : [ {model: Skill, through: ProviderSkill, as: 'providers_skills', where: {skill_name :req.params.id}},
      //               {model: ServiceArea, through: ProviderServiceArea, as: 'areas_served'}]
      // });

      const provskill_inthis_area = await User.findAll({
        include : [ {model: Skill, through: ProviderSkill,as: 'skill_providers_have', where: {skill_id : 1}}]
      });
      res.status(200).json(provskill_inthis_area);
    }
    } catch (err) {
      res.status(500).json(err);
      return;
    }
  });

  module.exports = router;