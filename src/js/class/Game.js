import Utils from '../utils';
import Hive from './Hive';
import Bee from '../factory/beeFactory';
import Shop from './Shop';

const HIVE_PRICE = 40;
let newBeeTypeEvent = new Event('newBeeType');
let newRessourceTypeEvent = new Event('newRessourceType');

class Game {
    constructor() {
        this.start = false;
        this.money = 100;
        this.hives = [];
        this.bees = {};
        this.ressources = {
            'honey': {},
            'wood': {
                'classic':0
            },
            'comb': {}
        };
        this.shop = new Shop();
    }
    init() {
        this.start = true;
    }
    _load(loadedSave) {
        this.start = loadedSave.start;
        this.money = loadedSave.money;
        this.ressources = loadedSave.ressources;
        this.bees = loadedSave.bees;
        this._loadHives(loadedSave.hives);
    }

    _loadHives(hives) {
        for (var i = 0; i < hives.length; i++) {
            let tempHive = new Hive(i);
            tempHive._load(hives[i]);
            this.hives.push(tempHive);
        }
    }
    addHive() {
        if (this.ressources.wood.classic < HIVE_PRICE) {
            console.log('Not enough wood');
            return;
        }
        let hive = new Hive(this.hives.length);
        this.hives.push(hive);
        this.ressources.wood.classic -= HIVE_PRICE;
    }
    collectPrincess(hive) {
        let princess = hive.nursery.princess.splice(0, 1)[0];
        this.addBee(princess);
    }
    collectDrone(hive, droneIndex) {
        let drone = hive.nursery.drone.splice(droneIndex, 1, null)[0];
        this.addBee(drone);
    }
    collectLoot(hive, lootIndex) {
        let loot = hive.loots.splice(lootIndex, 1, null)[0];
        this.addLoot(loot);
    }
    loggingWood() {
        this.ressources.wood.classic += parseInt(2);
    }
    catchBees() {
        let beeTypeStarter = ['meadows','forest'];
        let bees = [];
        for (let p = 0; p < Utils.getRndInRange(1, 2); p++) {
            let beeRndType = Utils.getRndInRange(0,1);
            let beeParams = {
                role : 'princess',
                type : beeTypeStarter[beeRndType]
            }
            let bee = Bee.create(beeParams);
            bees.push(bee);
        }
        for (let d = 0; d < Utils.getRndInRange(1, 3); d++) {
            let beeRndType = Utils.getRndInRange(0,1);
            let beeParams = {
                role : 'drone',
                type : beeTypeStarter[beeRndType]
            }
            let bee = Bee.create(beeParams);
            bees.push(bee);
        }
        this.addBees(bees);
    }
    addBees(bees){
        let self = this;
        bees.forEach(function(bee){
            self.addBee(bee);
        });
    }
    addBee(bee){
        if(this.bees[bee.type] == undefined){
            this.addBeeType(bee);
        }
        this.bees[bee.type][bee.role] += 1;
    }
    addBeeType(bee){
        let beesSave = Object.assign({},this.bees);
        Object.defineProperty(
            beesSave,
            bee.type,
            {
                value : {
                    'princess':0,
                    'drone':0
                },
                writable : true,
                enumerable : true,
                configurable : true
           }
        );
        Object.assign(this.bees,beesSave);
        document.dispatchEvent(newBeeTypeEvent);
    }

    addLoot(loot){
        console.log(loot);
        console.log('addLoot');
        if(this.ressources[loot.name][loot.type] == undefined){
            this.addLootType(loot);
        }
        this.ressources[loot.name][loot.type] += 1;
    }
    addLootType(loot){
        console.log('addLootType');
        let lootSave = Object.assign({},this.ressources[loot.name]);
        Object.defineProperty(
            lootSave,
            loot.type,
            {
                value : 0,
                writable : true,
                enumerable : true,
                configurable : true
           }
        );
        Object.assign(this.ressources[loot.name],lootSave);
        document.dispatchEvent(newRessourceTypeEvent);
    }
}

module.exports = Game;