// import models
const User = require('./User');
const Skill = require('./Skill');
const ServiceArea = require('./ServiceArea');
const ProviderSkill = require('./ProviderSkill');
const ProviderServiceArea = require('./ProviderServiceArea');

//Skill belongstoMany users
Skill.belongsToMany(User,
  { through: {
  model: ProviderSkill,
  foreignKey: 'skill_id'
  },
  as: 'skill_providers_have'
});

//User can have many skills 
User.belongsToMany(Skill,
  { through: {
  model: ProviderSkill,
  foreignKey: 'user_id'
  },
  as: 'providers_skills'
});

// service can have many providers 
ServiceArea.belongsToMany(User,
  { through: {
    model: ProviderServiceArea,
    foreignKey: 'servicearea_id'
    },
    as: 'providers_in_servicearea'
});

// user may provide to many areas
User.belongsToMany(ServiceArea,
  { through: {
  model: ProviderServiceArea,
  foreignKey: 'user_id'
  },
  as: 'areas_served'
});


//exporting modules
module.exports = {
  User,
  Skill,
  ServiceArea,
  ProviderSkill,
  ProviderServiceArea,
};