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

        test('should have the logged in property and set to false at default', () => {
            expect(user).toHaveProperty('loggedIn', false);
        });
   
    });

    describe('checking the outputs of the login method', () => {

        test('should log in the user with correct password', () => {
            user.login('password123');
            expect(user.loggedIn).toBe(true);
        });

        test('should throw error with incorrect password', () => {
            expect(() => {
                user.login('incorrectpassword');
            }).toThrow('Incorrect password');
        });

    });

    describe('checking the logout function', () => {

        test('should log out the user', () => {
            user.login('password123');
            user.logout();
            expect(user.loggedIn).toBe(false);
        });

    });





});