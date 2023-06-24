const mongose = require('mongoose');

const connectDb = async () => {
    const conn = await mongose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
}

module.exports = connectDb;