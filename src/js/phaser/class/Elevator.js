class Elevator {
    constructor(scene) {
        this.scene = scene;
        this.mapKey = 'elevator';
        this.map = this.scene.add.tilemap(this.mapKey);
        this.tileset = this.map.addTilesetImage('platformerPack_industrial_tilesheet', 'tiles');
        this.state = Elevator.STATE.iddle;
        this.width = this.map.widthInPixels;
        this.height = this.map.heightInPixels;
        this.x = 0;
        this.y = 0;
        console.log(this.map)
        this.create();
    }

    create() {
        console.log(this.map)
        // console.log(Elevator.SENSOR)
        this.createFloor();
        this.createBackground();
        this.createDecoration();
        this.createSensor();
    }

    createBackground() {
        this.backgroundLayer = this.map.createStaticLayer(Elevator.BACKGROUND, this.tileset, this.x, this.y);
    }

    createFloor() {
        this.floorLayer = this.map.createStaticLayer(Elevator.FLOOR, this.tileset, this.x, this.y);
        console.log(this.floorLayer);
        this.floorLayer.setCollisionByExclusion([-1], true);
        this.scene.physics.add.collider(this.scene.player.entity, this.floorLayer);
    }

    createDecoration() {
        this.decorationLayer = this.map.createStaticLayer(Elevator.DECORATION, this.tileset, this.x, this.y);
    }

    createSensor() {
        this.sensorLayer = this.map.getObjectLayer(Elevator.SENSOR);
        this.sensorLayer.objects.map(sensor => {
            let x = this.x + sensor.x;
            let y = this.y + sensor.y;
            this.sensor = new Phaser.Geom.Rectangle(x, y, sensor.width, sensor.height);
        });
    }

    update() {
        if (this.sensor) {
            this.checkSensor();
        }
    }

    checkSensor() {
        let intersectSensor = Phaser.Geom.Intersects.RectangleToRectangle(this.sensor, this.scene.player.entity.body);
        if (!intersectSensor) {
            return;
        }
        if (this.scene.cursors.down.isDown && this.state === Elevator.STATE.iddle) {
            this.down();
        }
        if (this.scene.cursors.up.isDown && this.state === Elevator.STATE.iddle) {
            this.up();
        }
    }

    up() {
        if (this.y === 0) {
            return;
        }
        this.state = Elevator.STATE.moving;
        this.y -= this.height;
        let tween = this.scene.tweens.add({
            targets: [this.floorLayer, this.decorationLayer, this.backgroundLayer],
            y: this.y,
            duration: 1000,
            ease: 'Sine.easeOut',
            onUpdate: () => {
                // We force the player to not moving
                this.scene.player.entity.body.setVelocityY(0);
            },
            onComplete: () => {
                this.sensor.y -= this.height;
                this.state = Elevator.STATE.iddle;
            }
        });
    }

    down() {
        this.state = Elevator.STATE.moving;
        this.y += this.height;
        let tween = this.scene.tweens.add({
            targets: [this.floorLayer, this.decorationLayer, this.backgroundLayer,],
            y: this.y,
            duration: 1000,
            ease: 'Sine.easeOut',
            onUpdate: () => {
                // We force the player to not moving
                this.scene.player.entity.body.setVelocityY(600);
            },
            onComplete: () => {
                this.sensor.y += this.height;
                this.state = Elevator.STATE.iddle;
            }
        });
    }

    static get BACKGROUND() {
        return 'background';
    }

    static get FLOOR() {
        return 'floor';
    }

    static get DECORATION() {
        return 'decoration';
    }

    static get SENSOR() {
        return 'elevatorArea';
    }

    static get STATE() {
        return {
            'iddle': 'iddle',
            'moving': 'moving'
        }
    }
}

export default Elevator;