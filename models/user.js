module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		firstName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
		lastName: {
            type: DataTypes.STRING,
            allowNull: true,
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
        },
        GitHubUrl: {
            type: DataTypes.STRING,
            allowNull: true
        },
        StackOverFlowUrl: {
            type: DataTypes.STRING,
            allowNull: true
        },
        LinkedInUrl: {
            type: DataTypes.STRING,
            allowNull: true
        },
        FacebookUrl: {
            type: DataTypes.STRING,
            allowNull: true
        },
        backgroundImgUrl: {
            type: DataTypes.STRING,
            defaultValue: "#FFFFFF"
        },
        profileImgUrl: {
            type: DataTypes.STRING,
            defaultValue: "/img/"
        },
        introMsg: {
            type: DataTypes.STRING,
            allowNull: true
        },
        employer: {
            type: DataTypes.STRING,
            defaultValue: "Unknown"
        },
        location: {
            type: DataTypes.STRING,
            defaultValue: "Unknown"
        },
        hometown: {
            type: DataTypes.STRING,
            defaultValue: "Unknown"
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