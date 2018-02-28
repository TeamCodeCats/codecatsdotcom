module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		username: DataTypes.STRING,
		googleID: DataTypes.STRING
	});

	return User;
}