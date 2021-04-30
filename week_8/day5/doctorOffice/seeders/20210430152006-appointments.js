"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"doctors",
			[
				{
					location: "Minneapolis, MN",
					time: "2021-08-17",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},
	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("doctors", null, {});
	},
};
