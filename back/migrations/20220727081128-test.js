'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        // <-> removeColumn
        'Users',
        'Number',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction }
      );
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    //  return queryInterface.sequelize.transaction((transaction) => {
    //   return Promise.all([
    //     queryInterface.removeColumn('Users', 'Number', {
    //       transaction: transaction,
    //     }),
    //   ]);
    // });
  },
};
