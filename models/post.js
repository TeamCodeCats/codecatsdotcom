module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      postType: {
          type: DataTypes.STRING,
          allowNull: false,
          len: [1],
          defaultValue: "status-update"
      },
    });
  
    Post.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Post.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Post;
  };