var urlLocalhost ='mongodb://127.0.0.1:27017/pfe-bd';

module.exports={
    database:urlLocalhost,
    secret: 'admin123@2023',
    mongo_user:process.env.MONGO_USER,
    mongo_password:process.env.MONGO_PASSWORD,
};