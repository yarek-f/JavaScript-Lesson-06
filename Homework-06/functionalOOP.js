function Robot() {
	var self = this;
	var speech = '';
	self.work = function() {
		console.log(self.speech);
	}

	self.setSpeech = function(value) {
		self.speech = value;
	}
}

function CoffeeRobot() {
	Robot.call(this);
}

function RobotDancer() {
	Robot.call(this);
}

function RobotCoocker() {
	Robot.call(this);
}

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