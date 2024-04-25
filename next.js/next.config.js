// const config = {
//     env: {
//         UBER_DIRECT_CLIENT_ID: 'eyISzm-WWlDo9rPHZUm7cKxfbEDrZihl',
//         UBER_DIRECT_CLIENT_SECRET: 'EtsYJfcx0gD5YeTezDfJZLJBSxNj_oKCwTQMYVM8',
//     },
// };

// module.exports = config;

const config = {
    env: {
        UBER_DIRECT_CLIENT_ID: process.env.UBER_DIRECT_CLIENT_ID,
        UBER_DIRECT_CLIENT_SECRET: process.env.UBER_DIRECT_CLIENT_SECRET,
    },
};

module.exports = config;
