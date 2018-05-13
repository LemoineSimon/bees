class Room {
    constructor(scene, data = undefined) {
        this.scene = scene;
        this.mapKey = 'room';
        this.map = this.scene.add.tilemap(this.mapKey);
        this.tileset = this.map.addTilesetImage('platformerPack_industrial_tilesheet', 'tiles');
        this.id = undefined;
        this.x = 0;
        this.y = 0;
        this.type = undefined;
        this.status = Room.STATUS.building;
        this.wall = null;
        this.floor = null;
        this.doors = null;
        this.doorSensor = null;
        this.doorsState = Room.DOORSSTATE.close;
        this.parseData(data);
        this.generate();
    }

    parseData(data) {
        if (data === undefined) {
            return false;
        }
        if (data.coords !== undefined) {
            this.x = data.coords.x !== undefined ? data.coords.x : 0;
            this.y = data.coords.y !== undefined ? data.coords.y : 0;
        }
        if (data.type !== undefined) {
            this.type = data.type;
        }
        this.id = data.id;
    }

    generate() {
        switch (this.type) {
            case 'room-sas':
                this.createFloor();
                this.createDoorModule();
                break;
            case 'room-void':
                this.createFloor();
                break;
            default :
                this.createWall();
                this.createFloor();
                this.createDoorModule();
        }
    }

    createWall() {
        this.wall = this.map.createStaticLayer(Room.WALL, this.tileset, this.x, this.y);
        this.wall.setCollisionByExclusion([-1, 0], true);
        this.scene.physics.add.collider(this.scene.player.entity, this.wall);
    }

    createFloor() {
        this.floor = this.map.createStaticLayer(Room.FLOOR, this.tileset, this.x, this.y);
        this.floor.setCollisionByExclusion([-1, 0], true);
        this.scene.physics.add.collider(this.scene.player.entity, this.floor);
    }

    createDoorModule() {
        this.createDoors();
        this.createSensors();
        this.createDoorsTweens()
    }

    createDoors() {
        let doorGroup = this.scene.physics.add.staticGroup();
        let doorsLayer = this.map.getObjectLayer(Room.DOORS);
        let doors = [];
        doorsLayer.objects.map(doorElement => {
            let x = doorElement.x + this.x + this.map.tileWidth / 2;
            let y = doorElement.y + this.y - this.map.tileHeight / 2;
            let sprite = this.scene.add.sprite(x, y, 'tilesspritesheet', doorElement.gid - 1);
            doorGroup.add(sprite);
        });
        this.doorCollider = this.scene.physics.add.collider(this.scene.player.entity, doorGroup);
        this.doors = doorGroup;
    }

    createSensors() {
        let doorSensorLayer = this.map.getObjectLayer(Room.DOORSENSOR);
        doorSensorLayer.objects.map(sensor => {
            let x = this.x + sensor.x;
            let y = this.y + sensor.y;
            this.doorSensor = new Phaser.Geom.Rectangle(x, y, sensor.width, sensor.height);
            let graphics = this.scene.add.graphics({
                fillStyle: {
                    color: 0x0000ff,
                    alpha: 0.15
                }
            });
            graphics.fillRectShape(this.doorSensor);
        });
        this.actionKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    }

    update() {
        if (this.doorSensor) {
            this.checkSensor();
        }
    }

    checkSensor() {
        let intersectSensor = Phaser.Geom.Intersects.RectangleToRectangle(this.doorSensor, this.scene.player.entity.body);
        this.scene.input.keyboard.on('keydown', (event) => {
            if (event.keyCode !== this.actionKey.keyCode) {
                return;
            }
            if (intersectSensor && this.doorsState === Room.DOORSSTATE.close) {
                console.log(intersectSensor, this.doorsState === Room.DOORSSTATE.close);
                this.scene.events.emit('buildRoom', {
                    x: this.x,
                    y: this.y,
                    widthInPixels: this.map.widthInPixels,
                    heightInPixels: this.map.heightInPixels
                });
                this.doorsState = Room.DOORSSTATE.opening;
                this.openDoors();
            }
        });
    }

    createDoorsTweens() {
        let floorY = this.floor.layer.heightInPixels - 70 / 2;
        this.openingTween = this.scene.tweens.add({
            targets: this.doors.children.entries,
            paused: true,
            y: {
                value: floorY,
                duration: 600,
                ease: 'Expo.easeOut'
            },
            onComplete: () => {
                switch (this.doorsState) {
                    case Room.DOORSSTATE.close || Room.DOORSSTATE.opening :
                        this.doorsState = Room.DOORSSTATE.open;
                        break;
                    case Room.DOORSSTATE.open || Room.DOORSSTATE.closing :
                        this.doorsState = Room.DOORSSTATE.close;
                        break;
                }
                this.doorCollider.active = this.doorsState === Room.DOORSSTATE.close;
            }
        });
    }

    openDoors() {
        this.openingTween.play();
    }

    static get DOORS() {
        return 'doors';
    }

    static get DOORSSTATE() {
        return {
            close: 'close',
            closing: 'closing',
            opening: 'opening',
            open: 'open'
        };
    }

    static get DOORSENSOR() {
        return 'doorsensor';
    }

    static get STATUS() {
        return {
            building: 'building',
            build: 'build'
        };
    }

    static get WALL() {
        return 'wall';
    }

    static get FLOOR() {
        return 'floor';
    }

    static get SPAWN() {
        return 'spawn';
    }
}

export default Room;