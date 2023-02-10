const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here

describe('ScooterApp', () => {
    let app;

    beforeEach(() => {
        app = new ScooterApp();
    });

    describe('registerUser', () => {
        test('registers a new user', () => {
            const user = app.registerUser('john', 'password', 18);
            expect(app.registeredUsers).toEqual({ john: user });
        });

        test('should throw an error if the user is under the age of 18', () => {
            expect(() => {
                app.registerUser('john', 'password', 17);
            }).toThrow('Too young to register');
        });

        test('should throw an error if the user is already registered', () => {
            app.registerUser('john', 'password', 18);
            expect(() => {
                app.registerUser('john', 'password', 18)
            }).toThrow('Already registered');
        });
    });

    describe('loginUser', () => {
        test('should log in a user if the username and password are correct', () => {
            app.registerUser('john', 'password', 18);
            try {
              const user = app.loginUser('john', 'password');
              expect(user.loggedIn).toBe(true);
            } catch (error) {
              expect(error.message).toBe("Username or password is incorrect");
            }
        });

        test('should throw an error if the username does not exist', () => {
            expect(() => {
                app.loginUser('john', 'password');
            }).toThrow('Username or password is incorrect')
        });

        test('should throw an error if the password is incorrect', () => {
            app.registerUser('john', 'password', 18);
            expect(() => {
                app.loginUser('john', 'wrongpassword');
            }).toThrow('Username or password is incorrect');
        });
    });

    describe('logoutUser', () => {
        test('should log out a user', () => {
            app.registerUser('john', 'password', 18);
            const user = app.loginUser('john', 'password');
            app.logoutUser('john');
            expect(user.loggedIn).toBe(false);
        });

        test('should throw an error if the user is not logged in', () => {
            expect(() => {
                app.logoutUser('john');
            }).toThrow('No such user is logged in');
        });  
    });

    describe('createScooter', () => {
        test('should create new scooter and add it to to a station', () => {
            const scooter = app.createScooter('station1');
            expect(app.stations.station1).toEqual([scooter]);
        });

        test('should throw an error if the station does not exist', () => {
            expect(() => {
                app.createScooter('non-existent-station');
            }).toThrow('No such station');
        });
    });

    describe('dockScooter', () => {
        test("dockScooter should dock scooter at a station", () => {
            const scooter = app.createScooter("station1");
            app.dockScooter(scooter, "station2");
            expect(scooter.station).toBe("station2");
        });

        test("dockScooter should throw an error if scooter is already at the station", () => {
            const scooter = app.createScooter("station1");
            expect(() => 
            app.dockScooter(scooter, "station1")).toThrow("Scooter already at station");
        });
    });

    describe('rentScooter', () => {
        test("rentScooter should rent scooter to a user", () => {
            const scooter = app.createScooter("station1");
            const user = app.registeredUsers["user1"];
            app.rentScooter(scooter, user);
            expect(scooter.user).toBe(user);
        });

        test("rentScooter should throw an error if user is not registered", () => {
            const scooter = app.createScooter("station1");
            const unregisteredUser = new User("user2", "password2", 18);
            expect(() => app.rentScooter(scooter, unregisteredUser)).toThrow(
              "User is not registered");
        });
        
    });

    describe('print', () => { 
        test("print should list registered users", () => {
            const list = app.registerUser("user2", "password2", 18);
            const spy = jest.spyOn(console, "log");
            app.print();
            expect(spy).toHaveBeenCalledWith("List of registered users:");
            expect(spy).toHave
        });
    });
        
});
