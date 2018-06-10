import Player from '../class/Player';
import MapManager from '../class/MapManager';

class MainScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'MainScene'
        });
        this.mapManager = null;
        this.player = null;
        this.cursors = null;
        this.keys = [];
        this.cameraSafeZone = 350;
    }

    preload() {
        this.player = new Player(this);
        this.mapManager = new MapManager(this);
    }

    create() {
        this.cursors = this.input.keyboard.createCursorKeys();
        this.player.create();
        this.mapManager._init();

        this.physics.world.bounds.width = 350 * 6;
        this.physics.world.bounds.height = 350 * 6;

        this.cameras.main.setBounds(this.physics.world.bounds.left, this.physics.world.bounds.top, this.physics.world.bounds.width, this.physics.world.bounds.height);
        this.cameras.main.startFollow(this.player.entity);

        this.player.entity.depth = 11;
    }

    update() {
        this.player.update();
        this.mapManager.update();
    }

    updateWorldSize() {
        let width = 0;
        let height = 0;
        let maxWidthRaw = this.mapManager.getWidth();
        let maxHeightRaw = this.mapManager.getHeight();

        this.physics.world.bounds.width = maxWidthRaw + this.cameraSafeZone;
        this.physics.world.bounds.height = maxHeightRaw + this.cameraSafeZone;
        this.cameras.main.setBounds(this.physics.world.bounds.left, this.physics.world.bounds.top, this.physics.world.bounds.width, this.physics.world.bounds.height);
    }
}

export default MainScene;