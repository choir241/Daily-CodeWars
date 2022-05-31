// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d, cost = 0) {
    cost = d * 40
     if (d >= 3) cost -= 20
     if (d >= 7) cost -= 50 - 20
     return cost
    }
    //1 day = $40
    //7 or more days = -$50 from total
    //3 days or more = -$20 from total
    //given integer total amount of days renting car
    //return integer total amount due for days given
    //rentalCarCost(1) = 40
    //rentalCarCost(2) = 80
    //for ( let i =0; i < d ;i+= days)
    //if( d > 3) -=20
    //if (d > 7) -=50
    