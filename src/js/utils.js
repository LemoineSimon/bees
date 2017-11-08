module.exports = {
    getRndInRange: function(min, max) {
        let rnd = Math.floor(Math.random() * (max - min + 1) + min);
        return rnd;
    }
}