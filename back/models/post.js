const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Post extends Model {
	static init(sequelize) {
		return super.init(
			{
				key: {
					type: DataTypes.STRING(30),
					allowNull: true,
				},
				applyName: {
					type: DataTypes.STRING(30),
					allowNull: false,
				},
				birth: {
					type: DataTypes.STRING(30),
					allowNull: true,
				},
				phone: {
					type: DataTypes.STRING(100),
					allowNull: false,
					unique: true,
				},
				address: {
					type: DataTypes.STRING(100),
					allowNull: true,
				},
				content: {
					type: DataTypes.TEXT,
					allowNull: true,
				},
				test: {
					type: DataTypes.STRING(30),
					allowNull: true,
				},
			},
			{
				charset: 'utf8mb4',
				collate: 'utf8mb4_general_ci',
				sequelize,
			}
		);
	}
	static associate(db) {
		db.Post.hasMany(db.Image);
	}
};
