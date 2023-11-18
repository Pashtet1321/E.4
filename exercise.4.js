function Device(name, power, active) {
    this.name = name;
    this.power = power;
    active = false;
}

Device.prototype.getSwitchOn = function(active){
    if(active===false){active=true; console.log('Included!');}
}
Device.prototype.getSwitchOff = function(active){
    if(active===true){active=false; console.log('Switched off!');}
}

function Microwave(name, color, power){
    this.name = name;
    this.color = color;
    this.power = power;
}
Microwave.prototype = new Device()

function Monitor(name, color, power){
    this.name = name;
    this.color = color;
    this.power = power;
}
Monitor.prototype = new Device()

const microwave = new Microwave('microwave', 'white', '800Вт');
const monitor = new Monitor('monitor','black', '18Вт')

monitor.getSwitchOff(true)
console.log(monitor)

microwave.getSwitchOn(false)
console.log(microwave)