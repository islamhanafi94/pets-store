// seeder to add dummy data in db in case of empty db
const Pet = require('./modules/pet/pet.model');
const User = require('./modules/user/user.model');

(async () => {
  users = await User.find({});
  pets = await Pet.find({});

  if (users.length === 0 && pets.length === 0) {
    const users = [
      {
        firstName: 'John',
        lastName: 'Smith',
        username: 'jhonsmith',
        email: 'jhonsmith@gmail.com',
        password: '123456',
        phone: '123',
        userStatus: 1
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe',
        email: 'johndoe@gmail.com',
        password: '123456',
        phone: '123',
        userStatus: 1
      }
    ];

    const createdUsers = await User.insertMany(users);

    const ownerId = createdUsers[0]._id;
    const pets = [
      {
        status: 'available',
        name: 'dog',
        owner: ownerId,
        photoUrls: [
          {
            name: './path-to-photo-dog'
          }
        ]
      },
      {
        status: 'available',
        name: 'dog',
        owner: ownerId,
        photoUrls: [
          {
            name: './path-to-photo-dog'
          }
        ]
      }
    ];

    await Pet.insertMany(pets);
  }
})();
