"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"appointments",
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
		return queryInterface.bulkDelete("appointments", null, {});
	},
};
