// const config = {
//     env: {
//         UBER_DIRECT_CLIENT_ID: 'YOUR_CLIENT_ID',
//         UBER_DIRECT_CLIENT_SECRET: 'YOUR_SECRET_ID',
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
