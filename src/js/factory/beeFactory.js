import Utils from '../utils';

import BeeGenetics from '../class/bee/Genetic';

import Bee from '../class/bee/Bee';
import ForestBee from '../class/bee/Forest';
import MeadowsBee from '../class/bee/Meadows';
import CommonBee from '../class/bee/Common';

module.exports = {
	create: function(beeParams){
		if(beeParams.type == 'forest'){
			return new ForestBee(beeParams);
		}
		if(beeParams.type == "meadows"){
			return new MeadowsBee(beeParams);
		}
		if(beeParams.type == "common"){
			return new CommonBee(beeParams);
		}
	},
	getEvolve: function(queenType, droneType){
		if(!BeeGenetics[queenType] || !BeeGenetics[queenType][droneType]){
			return Utils.getRndInRange(0,1) ? evolve = queenType : evolve = droneType;
		}
		let branch = BeeGenetics[queenType][droneType];

		let maxProbability = this.getMaxProbability(branch);
		let probability = Utils.getRndInRange(1,maxProbability);
		let evolve = this.findEvolve(branch,probability);
		if(!evolve){
			Utils.getRndInRange(0,1) ? evolve = queenType : evolve = droneType;
		}
		return evolve;
	},
	getMaxProbability(branch){
		let maxProbability = 0;
		for( let type in branch ){
			maxProbability += branch[type];
		}
		return maxProbability;
	},
	findEvolve(branch,probability){
		let currentWeight = 0;
		let specie = null;
		for( let type in branch ){
			currentWeight += branch[type];
			if(probability <= currentWeight){
				specie = type;
				break;
			}
		}
		return specie;
	}

}