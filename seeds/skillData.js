const { Skill } = require('../models');

const skillData = [
    {
      "skill_name": "Electrician"
    },
    {
        "skill_name": "Plumber"
    },
    {
        "skill_name": "Garderner"
    },
    {
        "skill_name": "Catering"
    },
    {
        "skill_name": "Web Application Developer"
    }
  ];

  const seedSkills = () => Skill.bulkCreate(skillData);

  module.exports = seedSkills;
  