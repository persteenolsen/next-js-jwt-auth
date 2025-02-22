module.exports = {
    serverRuntimeConfig: {
        secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/api' // development api
            : 'https://next-js-jwt-auth.vercel.app/api' // production api

           // Only for simulating production - Testing local http server - not Dev
           // : 'http://localhost:3000/api' // production api
    }
}
