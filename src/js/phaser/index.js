import LoadScene from './scene/Load';
import MainScene from './scene/Main';

let config = {
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
        MainScene
    ]
};

let game = new Phaser.Game(config);