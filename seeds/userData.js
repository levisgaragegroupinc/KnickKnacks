const { User } = require('../models');

const userData = [
    {
      "username": "tacoSal",
      "first_name": 'Sal',
      "last_name": 'Taco',
      "email": "sal@hotmail.com",
      "password": "password12345",
      "provider":false
    },
    {
      "username": "burritoLer",
      "first_name":  "Lernantino",
      "last_name": "Burrito",
      "email": "lernantino@gmail.com",
      "password": "password12345",
      "provider": true,
      "provider_bio": "Passionate handy man fixing pipelines. Understands the properties built since 1960 until now",
      "total_services_provided": 2
    },
    {
      "username": "salsaAmiko",
      "first_name":  "Amiko",
      "last_name": "Salsa",
      "email": "rajeswarivmarimuthu@gmail.com",
      "password": "password12345",
      "provider": true,
      "provider_bio": "Passionate handy man fixing Electical lines. Understands the properties built since 1960 until now",
      "total_services_provided": 4
    },
    {
      "username": "nachoWill",
      "first_name":  "William",
      "last_name": "Nachos",
      "email": "will.bill@aol.com",
      "password": "greatpass234",
      "provider": true,
      "provider_bio": "Passionate web developer. Builds applicate for small business to main invoices and payment processing",
      "total_services_provided": 4
    }
  ];

  const seedUsers = () => User.bulkCreate(userData);

  module.exports = seedUsers;
  
  