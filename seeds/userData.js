const { User } = require('../models');

const userData = [
    {
      "name": "Sal",
      "email": "sal@hotmail.com",
      "password": "password12345",
      "provider":false
    },
    {
      "name": "Lernantino",
      "email": "lernantino@gmail.com",
      "password": "password12345",
      "provider": true,
      "provider_bio": "Passionate handy man fixing pipelines. Understands the properties built since 1960 until now",
      "total_services_provided": 2
    },
    {
      "name": "Amiko",
      "email": "amiko2k20@aol.com",
      "password": "password12345",
      "provider": true,
      "provider_bio": "Passionate handy man fixing Electical lines. Understands the properties built since 1960 until now",
      "total_services_provided": 4
    },
    {
      "name": "William",
      "email": "will.bill@aol.com",
      "password": "greatpass234",
      "provider": true,
      "provider_bio": "Passionate web developer. Builds applicate for small business to main invoices and payment processing",
      "total_services_provided": 4
    }
  ];

  const seedUsers = () => User.bulkCreate(userData);

  module.exports = seedUsers;
  
  