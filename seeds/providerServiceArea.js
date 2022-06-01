const { ProviderServiceArea } = require('../models');

const providerserviceareaData = [
    {
        "servicearea_id": 1,
        "user_id": 3
    },
    {
        "servicearea_id": 2,
        "user_id": 3
    },
    {
        "servicearea_id": 3,
        "user_id": 4
    },
    {
        "servicearea_id": 4,
        "user_id": 4
    },
    {
        "servicearea_id": 4,
        "user_id": 3
        
    },
    {
        "servicearea_id": 3,
        "user_id": 2
    }
];

const seedProviderServiceArea = () => ProviderServiceArea.bulkCreate(providerserviceareaData);

module.exports = seedProviderServiceArea;