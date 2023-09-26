var doCoolStuff = function () { //went a step further, if class is equal to cool red, it will change back to green once pressed

    var currentClassname = document.getElementById('cool').className;
    
    if (currentClassname == 'cool') {
        document.getElementById('cool').className = 'cool red';
    } else {
        document.getElementById('cool').className = 'cool';
    }

}

var sayMyName = function (name) {
    alert('My name is '+name);
}

var car = {
    make: 'VW',
    type: 'Polo',
    color: 'blue',
    isTurnedOn: false,
    numberOfWheels: 4,
    seats: [
        'seat 1',
        'seat 2',
        'seat 3',
        'seat 4'
    ],
    turnOn: function () {
        this.isTurnedOn = true;
        
    },
    fly: function () {
        alert('fly');
    },
    switchCar: function (isOn) {
        console.log('turn car:'+isOn)
        if (isOn == true) {
            this.isTurnedOn = true;
        } else {
            this.isTurnedOn = false;
        }
    }
};
console.log('Hello there!');

var startCountdown = function () {
    var rocketState = document.getElementById('rocket').className;
    
    if (rocketState == 'rocket') {
        document.getElementById('rocket').className = 'rocket flying';
    } else {
        document.getElementById('rocket').className = 'rocket';
    }
}