const mongoose = require("mongoose");

const dbconnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL, {
    
    });

    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log(`MongoDB Conectado en: ${url} `);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
};
module.exports =  dbconnect;
