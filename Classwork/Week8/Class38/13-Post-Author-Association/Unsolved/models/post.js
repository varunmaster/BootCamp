module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", { //sequelize will automatically create a columns Id, createdAt, updatedAt 
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  // Add a belongsTo association to Authors here
  // Example: https://github.com/sequelize/express-example/blob/master/models/task.js

  Post.associate = function (models) {
    models.Post.belongsTo(models.Author, { //models.Post refers to this file (which is the Post table) and we associate it to models.Author file (which is the Author table) and creates a FK to Author table [ source.belongsTo(destination, {FK properties}) ]
    // a Post will BELONGTO an Author
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Post;
};
