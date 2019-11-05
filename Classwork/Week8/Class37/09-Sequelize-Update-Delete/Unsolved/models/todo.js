//this is similar to schema file. we are creating a table called Todo with columns 'text' and 'complete'
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return Todo;
};
