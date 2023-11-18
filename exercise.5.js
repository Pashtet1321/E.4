class Device {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.connected = false;
    }

    devicePower() {
        console.log(`Power is ${this.power}`);
    }

    deviceOn() {
        if (this.connected === false) {
            this.connected = true;
            console.log("The device is switched on");
        } else {
            console.log("Already switched on");
        }
    }

    deviceOff() {
        if (this.connected === true) {
            this.connected = false;
            console.log("The device is switched off");
        } else {
            console.log("Already switched off");
        }
    }
}

class PowerTools extends Device {
    constructor(name, power, radiation) {
        super(name, power);
        this.radiation = radiation;
    }
}

const monitor = new Device("monitor", "18Вт");
const microwave = new PowerTools("microwave", "800Вт", "2,45 ГГц");

monitor.deviceOn();
microwave.deviceOff();