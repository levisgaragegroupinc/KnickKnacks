const router = require("express").Router();
const { request } = require("express");
const { ProviderServiceArea , ProviderSkill, ServiceArea, Skill, User} = require("../../models");


console.log (" In service-route");
//Service by skill or area 
router.get("/:id", async (req, res) => {
    const prov_zipcode = parseInt(req.params.id);
    try {
      // Sample api localhost:3001/api/services/83456
      //query to pull data by zipcode 
      if (Number.isInteger(prov_zipcode)){
        const providers_inthis_area = await User.findAll({
        include : [ {model: Skill, through: ProviderSkill, as: "providers_skills"},
                    {model: ServiceArea, through: ProviderServiceArea, as: "areas_served",
                      where: {zipcode:prov_zipcode}}]
      })
      res.status(200).json(providers_inthis_area);
    } else {
    // Sample api localhost:3001/api/services/Web Application Developer
    //query to pull data by skill 
      const provskill_inthis_area = await User.findAll({
        include : [ {model: Skill, through: ProviderSkill, as: "providers_skills", where:{skill_name: req.params.id}},
                    {model: ServiceArea, through: ProviderServiceArea, as: "areas_served"}]
      });
      res.status(200).json(provskill_inthis_area);
    }
    } catch (err) {
      res.status(500).json(err);
      return;
    }
  });

  module.exports = router;