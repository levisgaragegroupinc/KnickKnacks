const { ProviderSkill } = require('../models');

const providerskillData = [
    {
        "skill_id": 1,
        "user_id": 3
    },
    {
        "skill_id": 2,
        "user_id": 3
    },
    {
        "skill_id": 3,
        "user_id": 4
    },
    {
        "skill_id": 4,
        "user_id": 4
    },
    {
        "skill_id": 4,
        "user_id": 3
        
    },
    {
        "skill_id": 3,
        "user_id": 2
    }
];

const seedproviderskills = () => ProviderSkill.bulkCreate(providerskillData);

module.exports = seedproviderskills;