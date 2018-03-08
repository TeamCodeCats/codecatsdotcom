module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		firstName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
		lastName: {
            type: DataTypes.STRING,
            allowNull: true,
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
        backgroundColor: {
            type: DataTypes.STRING,
            defaultValue: "#F5F5F5"
        },
        profileImgUrl: {
            type: DataTypes.STRING,
            defaultValue: "/img/cat15.jpg"
        },
        introMsg: {
            type: DataTypes.STRING,
            allowNull: true
        },
        employer: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        hometown: {
            type: DataTypes.STRING,
            allowNull: true,
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