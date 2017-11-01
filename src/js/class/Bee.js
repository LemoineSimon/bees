class Bee {
    constructor(params) {

        this.role = params.role;
        this.type = "default";

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
    }

    setDroneGene() {
        this.life = 0;
    }

    swarming() {
        if (this.role != "princess") {
            return;
        }
        this.role = "queen";
    }
}

module.exports = Bee;