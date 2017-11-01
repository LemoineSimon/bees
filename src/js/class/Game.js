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
            honey: [],
            wood: [],
            comb: []
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
    collectLoot(hiveIndex, lootIndex) {
        let loot = this.hives[hiveIndex].loots.splice(lootIndex, 1, null)[0];
        this.ressources[loot.name].push(loot);
    }
}

module.exports = Game;