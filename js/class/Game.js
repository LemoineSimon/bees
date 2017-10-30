class Game {
    constructor() {
        this.money = 0;
        this.hives = [];
        this.bees = [];
        this.ressources = {
            honey: 0,
            wood: 0,
            comb: 0
        };
        this.farm = document.querySelector(".farm");
    }

    addHive() {
        let hive = new Hive(this.hives.length);
        this.hives.push(hive);
    }
    collectPrincess(hiveIndex) {
        console.log("Collect princess from hive " + hiveIndex);
    }
    collectDrone(hiveIndex, droneIndex) {
        console.log("Collect drone " + droneIndex + " from hive " + hiveIndex);
    }
}