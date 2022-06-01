const seedSkills = require('./skillData');
const seedUsers = require('./userData');
const seedServiceAreas = require('./serviceareaData');
const seedproviderskills = require('./providerSkill');
const seedProviderServiceArea = require('./providerServiceArea');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedSkills();
  console.log('\n----- SKILLS SEEDED -----\n');

  await seedServiceAreas();
  console.log('\n----- SERVICE AREAS SEEDED -----\n');

  await seedproviderskills();
  console.log('\n----- PROVIDER SKILLS SEEDED -----\n');

  await seedProviderServiceArea();
  console.log('\n----- PROVIDER SERVICE AREA TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
