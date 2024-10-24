/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

//Implement accurate unit conversions within the functions.
const kmhToMs = (velocityInKmh) => velocityInKmh * (1000 / 3600);
const msToKmh = (velocityInMs) => velocityInMs * (3600 / 1000);

const calcNewVel = ({ vel, acc, time }) => {
  if (typeof vel !== 'number' || typeof acc !== 'number' || typeof time !== 'number') {
    throw new Error('Parameters must be numbers.');
  }
  const velInMs = kmhToMs(vel);
  const newVelInMs = velInMs + (acc * time);
  return msToKmh(newVelInMs);
};

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)


const d2 = d + (vel*(time/3600)) //calcultes new distance
const rf = fuel - (fbr*time) //calculates remaining fuel
const vel2 = calcNewVel({acc, vel, time}) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (vel, acc, time) => { 
  return vel + (acc*time)
}

console.log(`Corrected New Velocity: ${vel2.toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${d2.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${rf.toFixed(2)} kg`);






