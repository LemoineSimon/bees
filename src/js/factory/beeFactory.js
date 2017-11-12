import Bee from '../class/bee/Bee';
import ForestBee from '../class/bee/Forest';
import MeadowsBee from '../class/bee/Meadows';

module.exports = {
	create: function(beeParams){
		if(beeParams.type == 'forest'){
			return new ForestBee(beeParams);
		}
		if(beeParams.type == "meadows"){
			return new MeadowsBee(beeParams);
		}
	}	
}