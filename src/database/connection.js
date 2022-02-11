const Sequelize = require('sequelize');
const db = {};
const connectionString = `postgresql://euiujxzievvdxp:e9bcdd71f14011259d7db3c19498c0781ebdb831451ff5301101ed798e8dad7f@ec2-52-73-149-159.compute-1.amazonaws.com:23067/d2vi6iiq23sed1`;
const sequelize = new Sequelize(connectionString);
// const sequelize = new Sequelize(
//   process.env.DB || 'course-express',
//   process.env.USER || 'root',
//   process.env.PASSWORD || 'root',
//   {
//     host: process.env.HOST || 'localhost',
//     port: process.env.PORT || '8889',
//     dialect: 'mysql',
//     logging: console.log,
//     freezeTableName: true,

//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000,
//     },
//   }
// );
async function checkConn() {
  try {
    await sequelize.authenticate();
    console.log(
      '-------------------------------------------------Connection has been established successfully.'
    );
  } catch (error) {
    console.error(
      '-------------------------------------------------Unable to connect to the database:',
      error
    );
  }
}

checkConn();

db.sequelize = sequelize;

module.exports = db;
