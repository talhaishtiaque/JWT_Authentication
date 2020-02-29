module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "smartends",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  //for mamp based mysql 
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
};
