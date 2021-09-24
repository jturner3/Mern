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

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();