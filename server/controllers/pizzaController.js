const redis = require('redis');
const Pizza = require('../models/Pizza');

// const client = redis.createClient({
//     host: '127.0.0.1',
//     port: '6379'
// });
// const GET_ASYNC = promisify(client.get).bind(client);
// const SET_ASYNC = promisify(client.set).bind(client);
const getAllPizzaController = async (req, res) => {
    try {
        /**
         * redis code implemention
         */
        // client.get('pizza', async (error, datas) => {
        //     if (error) {
        //         console.log(error);
        //     }
        //     if (datas !== null) {
        //         console.log('data form rides..', datas);
        //         res.status(200).json(JSON.parse(datas));
        //     } else {
        //         const resData = await Pizza.find({});
        //         // console.log(resData);
        //         const data = await client.setex('pizza', 3600, JSON.stringify(resData));
        //         console.log('first time..');
        //         res.status(200).json(data);
        //     }
        // });

        /**
         * without redis
         */

        const data = await Pizza.find({});
        res.status(200).json(data);
    } catch (error) {
        res.sataus(304).json(error);
        console.log(error);
    }
};
module.exports = {
    getAllPizzaController
};
