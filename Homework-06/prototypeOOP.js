function Robot() {
	var self = this;
	var speech = '';
}

Robot.prototype.work = function() {
	console.log(this.speech);
}

Robot.prototype.setSpeech = function(value) {
	this.speech = value;
}

function CoffeeRobot() {
}

CoffeeRobot.prototype = Object.create(Robot.prototype);
CoffeeRobot.prototype.constructor = CoffeeRobot;

function RobotDancer() {
}

RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;

function RobotCoocker() {
}

RobotCoocker.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype.constructor = RobotCoocker;

var r = new Robot();
r.setSpeech("I'm Robot and I'm just working");
var cr = new CoffeeRobot();
cr.setSpeech("I'm CoffeRobot and I make coffee");
var rd = new RobotDancer();
rd.setSpeech("I'm RobotDancer and I'm just dancing");
var rc = new RobotCoocker();
rc.setSpeech("I'm RobotCoocker and I'm just cooking");

var arrayOfRobots = [ r, cr, rd, rc ];

for (var i = 0; i < arrayOfRobots.length; i++) {
	arrayOfRobots[i].work();
}