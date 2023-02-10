const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('is an object', () => {
    // edit this to be a real test!
    const scooter = new Scooter('test Station');
    expect(typeof scooter).toBe('object');
  }
)
})

//Method tests
describe('scooter methods', () => {
  
  let scooter;
  let user;
  let station;

  beforeEach(() => {
    station = 'Test Station';
    scooter = new Scooter(station);
    user = new User('testuser', 'testpassword', 20);
  });

  describe('Has all properties', () => { 

    test('should have a station property', () => {
      expect(scooter).toHaveProperty('station', 'Test Station');
    });

    test('should have a user property', () => {
      expect(scooter).toHaveProperty('user', null);
    });

    test('should have a serial property', () => {
      expect(scooter).toHaveProperty('serial');
    });

    test('should have a charge property', () => {
      expect(scooter).toHaveProperty('charge', 100);
    });

    test('should have a isBroken property', () => {
      expect(scooter).toHaveProperty('isBroken', false);
    });

  });

  describe('Scooter serial number', () => {

    test('increments with each new Scooter', () => {

      const scooter1 = new Scooter('station1');
      const scooter2 = new Scooter('station2');
      
      expect(scooter2.serial).toBe(scooter1.serial + 1)
    });

  });



})
