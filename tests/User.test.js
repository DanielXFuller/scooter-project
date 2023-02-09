const User = require('../src/User')

// User tests here

// test username

// test password

// test age

// test login

// test logout


describe('User', () => {
    let user;

    beforeEach(() => {
        user = new User('john_doe', 'password123', 30)
    });


    describe('Has all properties', () => {

        test('should have a username property', () => {
            expect(user).toHaveProperty('username', 'john_doe');
        });

        test('should have a password property', () => {
            expect(user).toHaveProperty('password', 'password123');
        });

        test('should have an age property', () => {
            expect(user).toHaveProperty('age', 30);
        });
   
    });




});