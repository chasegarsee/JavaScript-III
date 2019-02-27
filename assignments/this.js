/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*  
           "WINDOW/GLOBAL OBJECT BINDING"
* 1. Whenever a function is contained in the global scope, 
     the value of THIS inside of that function will be the window object.
       
            "IMPLICIT (automatic) BINDING"
     * 2. Whenever a function is called by a preceding dot, 
     the object before that dot is THIS.

            "NEW BINDING"
     * 3. Whenever a constructor function is used, 
          THIS refers to the specific instance of the object that is created and returned by the constructor function.

                USING CALL/APPLY
          * 4. Whenever JavaScript’s call or apply method is used, THIS is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function myFavoriteLift(lift) {
  console.log(this);
  return lift;
}
myFavoriteLift("Olympic Snatch");

// Principle 2

// code example for Implicit Binding

const liftMe = {
  movement: "Overhead Squat",
  performOverheadSquat: function() {
    return `My all time ${this.movement} PR is 315lbs.`;
  }
};

liftMe.performOverheadSquat();
console.log(liftMe.performOverheadSquat());
// Principle 3

// code example for New Binding

function Fitness(obj) {
  this.movement = obj.movement;
  (this.weight = obj.weight),
    (this.technique = obj.technique),
    (this.liftMe = function() {
      return `${this.movement} are easy to do ${this.weight} on if you have ${
        this.technique
      }`;
    });
}

const splitJerk = new Fitness({
  movement: "Split Jerks",
  weight: 365,
  technique: "split technique"
});

const dropSnatch = new Fitness({
  movement: "Drop Snatches",
  weight: 315,
  technique: "good shoulder mobility"
});

splitJerk.liftMe();
console.log(splitJerk.liftMe());
dropSnatch.liftMe();
console.log(dropSnatch.liftMe());

// Principle 4

// code example for Explicit Binding

function Fitness(obj) {
  this.movement = obj.movement;
  (this.weight = obj.weight),
    (this.technique = obj.technique),
    (this.liftMe = function() {
      return `${this.movement} are easy to do ${this.weight} on if you have ${
        this.technique
      }`;
    });
}

const splitJerk = new Fitness({
  movement: "Split Jerks",
  weight: 365,
  technique: "split technique"
});

const dropSnatch = new Fitness({
  movement: "Drop Snatches",
  weight: 315,
  technique: "good shoulder mobility"
});

splitJerk.liftMe.call(dropSnatch);
dropSnatch.liftMe.apply(splitJerk);
