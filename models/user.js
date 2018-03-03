module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
		lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
		username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
		googleID: {
            type: DataTypes.STRING
        }
    });
    
    User.associate = function(models) {
        // Allows a User to have many Posts and Comments
        User.hasMany(models.Post, {
          onDelete: "cascade"
        });

        User.hasMany(models.Comment, {
            onDelete: "cascade"
        });
    };

	return User;
}