const mongoose = require('mongoose');
// connecting to mongoose
// mongoose.connect('mongodb://localhost/habit_tracker_development');
// mongoose database connection
// const db = mongoose.connection;
// db.on('error',console.error.bind(console,"Error connecting to MongoDb"));

// db.once('open',function(){
//     console.log('Connected to Database :: MondoDB');
// });






const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 8000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 10000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};
mongoose.connect('mongodb://localhost/hospital', options);

//acquire the connection(to check if it's successful)
const db = mongoose.connection;

//error
db.on('error', function (err) { console.log(err.message); });

//up and running then print the message
db.once('open', function () {
    console.log("Successfully connected to the database");
});

module.exports=db;