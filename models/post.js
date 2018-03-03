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
      // Associating a Post to a User
      // Allows a Post to have many Comments
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });

        Post.hasMany(models.Comment, {
          onDelete: "cascade",
        });
    };
  
    return Post;
  };