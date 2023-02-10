jest.setTimeout(10000);

const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('Scooter', () => {
  test('is an object', () => {
    // edit this to be a real test!
    const scooter = new Scooter('test Station');
    expect(typeof scooter).toBe('object');
  });

  describe('Properties and Methods', () => {
  
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

    describe('Methods', () => {

      describe('Rent Method', () => {

        test('rent method changes scooter attributes correctly', () => {
          scooter.rent(user);
          expect(scooter.station).toBeNull();
          expect(scooter.user).toEqual(user);
        });

        test('throws an error if scooter charge is less than or equal to 20%', () => {
          scooter.charge = 19;
          expect(() => {
            scooter.rent(new User('testuser', 'testpassword', 20));
          }).toThrowError('scooter needs to charge');
        });

        test('throws an error if scooter is broken', () => {
          scooter.isBroken = true;
          scooter.charge = 30;
          expect(() => {
            scooter.rent(new User('testuser', 'testpassword', 20));
          }).toThrowError('scooter needs repair');
        });

      });

      describe('Dock Method', () => { 

        test('dock method changes scooter attributes correctly', () => {
          scooter.rent(user);
          scooter.dock(station);
          expect(scooter.station).toBe(station);
          expect(scooter.user).toBeNull();
        });

      });

      describe('Recharge Method', () => { 

        test('recharge increases charge', async () => {

          await scooter.recharge(); // we need to wait for the charge!
          expect(scooter.charge).toBe(100);
  
        });

      });



      describe('requestRepair Method', () => { 

        test('requestRepair repairs the scooter after 5 seconds', async () => {

          scooter.isBroken = true;
          await scooter.requestRepair();
          expect(scooter.isBroken).toEqual(false);
  
        });
  
      });

    });
  
  
  
  });
});


