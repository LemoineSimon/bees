import LoadScene from "./scene/Load";
import MainScene from "./scene/Main";
import InventoryScene from "./scene/Inventory";

module.exports = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scaleMode: 0, //Phaser.ScaleManager.EXACT_FIT,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 1600},
            debug: true
        }
    },
    scene: [
        LoadScene,
        InventoryScene,
        MainScene
    ]
}