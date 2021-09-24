class Ninja {
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log("Ninja name is: " + this.name);
        return this;
    }

    showStats() {
        console.log("Name: " + this.name);
        console.log("Health: " + this.health);
        console.log("Speed: " + this.speed);
        console.log("Strength: " + this.strength);
        return this;
    }

    drinkSake() {
        console.log("Health was: " + this.health);
        console.log("Drank sake");
        this.health += 10;
        console.log("Health now: " + this.health);
        return this;
    }
}

class Sensei extends Ninja {
    constructor(wisdom=10) {
        super(wisdom);
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
    }

    speakWisdom() {
        this.drinkSake()
        console.log("Beware invisible throwing stars")
    }
}

const sensei1 = new Sensei("Master Splinter", 100);
sensei1.sayName();
sensei1.showStats();
sensei1.speakWisdom();