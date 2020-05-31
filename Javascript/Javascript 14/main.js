// alert("Connected!")

let newDirection = function(currentDirection, change){
    if (currentDirection + change >= 360)
    {
        return currentDirection+change-360;
    }
    else if (currentDirection + change < 0)
    {
        return currentDirection+change+360;
    } else
    {
        return currentDirection+change;
    }

};

class vehicle
{
    constructor (color, topSpeed){
                // this._name = name;
                this._color = color,
                this._direction = 90, /* (integer 0-359), Chose  pos. 90 because 90 degrees 
                                         should represent up/North on a normal 2d graph*/
                this._currentSpeed = 0,
                this._topSpeed = topSpeed,
                this._engineStarted = false;
            }
    //Methods           
    accelerate()
    {
        let accelInterval = 10;
        let acceleratedSpeed = this._currentSpeed + accelInterval;
        if(this._engineStarted)
        {
            if(acceleratedSpeed <= this._topSpeed)
            {
                // let thisName = `${this.JSONstringify()}`
                this._currentSpeed = acceleratedSpeed;
                console.log(`Current Speed for the vehicle:  ${this._currentSpeed} MPH`)
            } else
            {
                console.log(`The vehicle can't go any faster.`);
            }
        } else
        {
            console.log("Can't accelerate if the vehicle isn't turned on...");
        }
    };
    brake()
    {
        let decelInt = -10;
        let decelSpeed = this._currentSpeed + decelInt;
        if (this._currentSpeed > 0 && decelSpeed != 0)
        {
            this._currentSpeed = decelSpeed;
            console.log(`Vehicle has slowed to ${this._currentSpeed} MPH`)
        } 
        else if (decelSpeed == 0)
        {
            this._currentSpeed = decelSpeed;
            console.log("The vehicle has come to a full stop.");
        } else
        {
            console.log("Vehicle is at a full stop.")
        }
    };
    turnOn()
    {
        if (this._engineStarted)
        {
            console.log("The vehicle engine is already started.");
        } else
        {
            this._engineStarted = true;
            console.log("The vehicle's engine has been started.");
        }
    };
    turnOff()
    {
        if (this._engineStarted == false)
        {
            console.log("The vehicle's engine is already off.");
        } 
        else
        {
            if (this._currentSpeed > 0)
            {
                console.log(`Please come to a full stop 
before turning off the engine.
Use ".brake()" to slow down.`)
            } else 
            {
                this._engineStarted = false;
                console.log("The vehicle's engine has been turned off.");
            }
        }
    };
    turnLeft()
    {
        if (this._engineStarted)
        { 
            if (this._currentSpeed > 0) //if the vehicle is on AND is in motion
            {

                const leftTurn = 90;
                this._direction = newDirection(this._direction, leftTurn);
                console.log(`Vehicle has turned left. 
And is heading at ${this._direction}°`);
            } else //if the vehicle is on but NOT in motion
            {
                console.log("The vehicle must be in motion to turn.  Try 'accelerate()'.")
            };
        } else //if the engine as turned off
        {
            console.log(`The vehicle can't turn if the engine's off 
and the car's not in motion.
Try "turnOn()" then "accelerate()".`)
        }
    };
    turnRight()
    {
        if (this._engineStarted)
        { 
            if (this._currentSpeed > 0) //if the vehicle is on AND is in motion
            {

                const rightTurn = -90;
                this._direction = newDirection(this._direction, rightTurn);
                console.log(`Vehicle has turned right. 
And is heading at ${this._direction}°`);
            } else //if the vehicle is on but NOT in motion
            {
                console.log("The vehicle must be in motion to turn.  Try 'accelerate()'.")
            };
        } else //if the engine as turned off
        {
            console.log(`The vehicle can't turn if the engine's off 
and the car's not in motion.
Try "turnOn()" then "accelerate()".`)
        }
    };

};
//subClasses

//Bus//
class bus extends vehicle {
    constructor(color, topSpeed, numberOfSeats){
        super(color, topSpeed, numberOfSeats);
        this._numberOfSeats = numberOfSeats;
    }
};

//Ambulance//

class ambulance extends vehicle{
    constructor(color, topSpeed) {
        super(color, topSpeed);
        this._sirenState = false
    }

    turnOnSiren(){
        if (this._sirenState)
        {
            console.log("Siren is already on!");
        } else
        {
            this._sirenState = true;
            console.log("Siren has been turned ON!");
        }
    };

    turnOffSiren(){
        if(this._sirenState)
        {
            this._sirenState = false;
            console.log("Siren has been turned off");
        } else
        {
            console.log("Siren is already off.")
        }
    };
};