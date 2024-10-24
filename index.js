/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)

// Calculate new velocity based on acceleration
const calcNewVel = (vel, acc, time) => {
  // Ensure all parameters are numbers
  if (typeof vel !== 'number' || typeof acc !== 'number' || typeof time !== 'number') {
    throw new Error("All parameters must be numbers.");
  }
  // Ensure all parameters are non-negative
  if (vel < 0 || acc < 0 || time < 0) {
    throw new Error("All parameters must be non-negative.");
  }
  // Convert velocity from km/h to m/s
  const velMs = vel * 1000 / 3600;
  // Calculate new velocity in m/s
  return velMs + (acc * time);
};

const d2 = d + vel; // Calculate new distance
const rf = fuel - (fbr * time); // Calculate remaining fuel
const vel2 = calcNewVel(vel, acc, time); // Calculate new velocity

console.log(`Corrected New Velocity: ${vel2 * 3600 / 1000} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);