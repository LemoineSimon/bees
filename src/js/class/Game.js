import Hive from './Hive';

class Game {
    constructor() {
        this.start = false;
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
    }
    init() {
        this.start = true;
    }

    addHive() {
        let hive = new Hive(this.hives.length);
        this.hives.push(hive);
    }
    collectPrincess(hive) {
        let princess = hive.nursery.princess.splice(0, 1)[0];
        this.bees.princess.push(princess);
    }
    collectDrone(hive, droneIndex) {
        let drone = hive.nursery.drone.splice(droneIndex, 1, null)[0];
        this.bees.drone.push(drone);
    }
    collectLoot(hive, lootIndex) {
        let loot = hive.loots.splice(lootIndex, 1, null)[0];
        this.ressources[loot.name].push(loot);
    }
}

module.exports = Game;