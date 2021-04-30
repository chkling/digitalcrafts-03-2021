"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"doctors",
			[
				{
					name: "Annie",
					email: "ajeasley@nasa.gov",
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
