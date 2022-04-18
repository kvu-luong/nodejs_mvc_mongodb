const mongoose = require('mongoose');
const MONGO_URL = "mongodb://127.0.0.1:27017/databasename";


mongoose.connect(MONGO_URL, () => {
    console.log('DATABASE IS CONNECTED');
})
