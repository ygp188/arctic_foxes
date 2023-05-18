/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Foxes',
      [
        {
          name: 'Snow Paw',
          img: 'https://i.pinimg.com/originals/e3/44/d7/e344d7631cd515edd36cc6930deaedec.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Aurora',
          img: 'https://babyanimalzoo.com/wp-content/uploads/2014/03/baby-arctic-fox-pics.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Snowflake',
          img: 'https://i.redd.it/ffivhqozeek31.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Eskimo',
          img: 'https://media.istockphoto.com/id/157296131/photo/polar-fox-pending.jpg?s=612x612&w=0&k=20&c=jX1GrULA9X_14ANujkatt_6J1OAYGs6kyHOXNXtNA90=',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Avalanche',
          img: 'https://images.squarespace-cdn.com/content/5e768ec11f1ca16b9845e45b/1635115230902-T3ZDZVB6TOYS9EILJVUW/SVO07873.jpg?format=1500w&content-type=image%2Fjpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Snowball',
          img: 'https://media.istockphoto.com/id/1350508607/photo/arctic-fox-is-sleeping-on-the-rock.jpg?s=612x612&w=0&k=20&c=mFof4ZzlVLk1Xt6sxDuoTEPOZi2y7Z94l9SWFj4PKTw=',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Blizz',
          img: 'https://wallpapers.com/images/featured/x0v0ps9nash0ak72.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Chilly',
          img: 'https://ecologyprime.com/wp-content/uploads/2023/03/Arctic-Fox-1-cropped.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
