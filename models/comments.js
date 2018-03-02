module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }
    });

    Comment.associate = function(models) {
        // Associating the Comment to a User and a Post
        Comment.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });

        Comment.belongsTo(models.Post, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Comment;
}