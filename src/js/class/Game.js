import Hive from './Hive';

class Game {
    constructor() {
        this.money = 0;
        this.hives = [];
        this.bees = {
            'princess': [],
            'drone': []
        };
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
        let princess = this.hives[hiveIndex].nursery.princess.splice(0, 1)[0];
        this.bees.princess.push(princess);
    }
    collectDrone(hiveIndex, droneIndex) {
        let drone = this.hives[hiveIndex].nursery.drone.splice(droneIndex, 1, null)[0];
        this.bees.drone.push(drone);
    }
}

module.exports = Game;