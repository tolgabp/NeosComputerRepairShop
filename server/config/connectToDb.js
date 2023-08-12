const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

//DATABASE CONNECTION
async function connectToDb(){
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to database");
        
    } catch(err){
        console.log(err);
    }
    
}

module.exports = connectToDb;

