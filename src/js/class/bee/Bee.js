import Comb from '../Comb';

class Bee {
    constructor(params) {

        this.role = params.role;
        this.type = params.type;

        // Genetics - Allele
        this.setGenetics();
    }

    setGenetics() {
        if (this.role == "princess") {
            this.setPrincessGene();
        } else if (this.role == "drone") {
            this.setDroneGene();
        }
    }

    setPrincessGene() {
        this.life = 2;
        this.larveNumber = 2;
        this.produceComb = true;
        this.comb = new Comb();
    }

    setDroneGene() {
        this.life = 2;
    }

    swarming() {
        if (this.role != "princess") {
            return;
        }
        this.role = "queen";
    }
}

module.exports = Bee;