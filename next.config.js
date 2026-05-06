/** @type {import('next').NextConfig} */
module.exports = {
    output: 'export',
    images: {
        unoptimized: true
    },
    env: {
        GA_ID: process.env.GA_ID
    }
};
