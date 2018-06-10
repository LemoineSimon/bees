class LoadScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'LoadScene'
        });
    }


    preload() {
        this.load.image('ground', 'img/assets/ground.png');
        this.load.spritesheet('player',
            'img/assets/sprite/adventurer_tilesheet.png',
            {
                frameWidth: 80,
                frameHeight: 111,
                endFrame: 23
            }
        );

        // Load images and spritesheets
        this.load.image('tiles', 'img/assets/platformerPack_industrial_tilesheet.png');
        // I load the tiles as a spritesheet so I can use it for both sprites and tiles
        this.load.spritesheet('tilesspritesheet', 'img/assets/platformerPack_industrial_tilesheet.png', {
            frameWidth: 70,
            frameHeight: 70,
            endFrame: 107
        });

        this.load.tilemapTiledJSON('room', 'maps/room.json');
        this.load.tilemapTiledJSON('elevator', 'maps/elevator.json');
    }

    create() {
        this.scene.start('MainScene');
    }
}

export default LoadScene;
