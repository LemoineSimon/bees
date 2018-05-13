import Player from '../class/Player';
import RoomManager from '../class/RoomManager';

class MainScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'MainScene'
        });
        this.roomManager = null;
        this.player = null;
        this.cursors = null;
        this.keys = [];
    }

    preload() {
        this.player = new Player(this);
        this.roomManager = new RoomManager(this);
    }

    create() {
        this.cursors = this.input.keyboard.createCursorKeys();
        this.player.create();
        this.roomManager.add();

        this.physics.world.bounds.width = 1600;

        this.cameras.main.setSize(800, 600);
        this.cameras.main.startFollow(this.player.entity);
        this.cameras.main.setBounds(this.physics.world.bounds.left, this.physics.world.bounds.top, this.physics.world.bounds.width, this.physics.world.bounds.height);
        this.updateWorldSize();
        this.events.on('updateWorldSize', () => {
            this.updateWorldSize();
        })
    }

    update() {
        this.player.update();
        this.roomManager.update();
    }

    updateWorldSize() {
        let width = 0;
        let height = 0;
        let maxWidthRaw = [];
        let maxHeightRaw = this.roomManager.rooms[this.roomManager.rooms.length - 1][0].map.heightInPixels * this.roomManager.rooms.length;
        this.roomManager.rooms.map(roomRaw => {
            if (roomRaw.length > maxWidthRaw.length) {
                maxWidthRaw = roomRaw[roomRaw.length - 1].map.widthInPixels * roomRaw.length;
            }
        });
        this.physics.world.bounds.width = maxWidthRaw + 350;
        this.physics.world.bounds.height = maxHeightRaw + 350;
        this.cameras.main.setBounds(this.physics.world.bounds.left, this.physics.world.bounds.top, this.physics.world.bounds.width, this.physics.world.bounds.height);
    }
}

export default MainScene;