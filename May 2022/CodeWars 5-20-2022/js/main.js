// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

let cockroachSpeed = s => Math.floor((s * 100000)/3600)
  //Good Luck!
//number decimal km/hr
//return in cm rounded down
//cockroachSpeed(0), 0)
//cockroachSpeed(1.09), 30)
//(cockroachSpeed(1.08), 30)
//1km/hr - 1cm/min - 1cm/s
//1km = 100000cm, 1 hr = 60 min, 1 min = 60 sec, 60 * 60 = 3600
//100000/3600

cockroachSpeed = s => Math.floor(s /.036)
  //Good Luck!
//number decimal km/hr
//return in cm rounded down
//cockroachSpeed(0), 0)
//cockroachSpeed(1.09), 30)
//(cockroachSpeed(1.08), 30)
//1km/hr - 1cm/min - 1cm/s
//1km = 100000cm, 1 hr = 60 min, 1 min = 60 sec, 60 * 60 = 3600
//100000/3600