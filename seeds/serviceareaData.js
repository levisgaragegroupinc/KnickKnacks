const { ServiceArea } = require('../models');

const serviceareaData = [
    {
      "zipcode": 98034
    },
    {
        "zipcode": 93045
    },
    {
        "zipcode": 95067
    },
    {
        "zipcode": 83456
    },
    {
        "zipcode": 78960
    }
  ];

const seedServiceAreas = () => ServiceArea.bulkCreate(serviceareaData);

module.exports = seedServiceAreas;
  