class Player {
    constructor(scene) {
        this.character = {
            'width': 80,
            'height': 110,
        };
        this.scene = scene;
        this.entity = this.scene.add.container(110, 80);
        this.inventoryKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        this.actionKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.wearing = false;
    }

    create() {
        let character = this.scene.add.sprite(0, 0, 'player');
        character.name = 'character';
        this.entity.add(character);
        this.setAnimation();
        this.entity.setSize(this.character.width, this.character.height);
        this.scene.physics.world.enable(this.entity);
        this.scene.physics.add.collider(this.entity, this.scene.physics.world);
        this.entity.body.setCollideWorldBounds(true);
        this.setEvents();
    }

    setAnimation() {
        this.scene.anims.create({
            key: 'left',
            frames: this.scene.anims.generateFrameNumbers('player', {start: 9, end: 10}),
            frameRate: 10,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'turn',
            frames: [{key: 'player', frame: 23}],
            frameRate: 20
        });

        this.scene.anims.create({
            key: 'right',
            frames: this.scene.anims.generateFrameNumbers('player', {start: 9, end: 10}),
            frameRate: 10,
            repeat: -1
        });
    }

    update() {
        this.moving();
    }

    moving() {
        if (this.scene.cursors.left.isDown) {
            this.entity.body.setVelocityX(-300);
            this.getCharacter().anims.play('left', true);
            this.entity.body.scaleX = -1;
            this.entity.getAll('name', 'character').forEach(sprite => {
                sprite.flipX = true;
            });
            this.entity.getAll('name', 'hive').forEach(sprite => {
                sprite.x = (sprite.width * sprite.scaleX) - this.character.width;
            });
        } else if (this.scene.cursors.right.isDown) {
            this.entity.body.setVelocityX(300);
            this.getCharacter().anims.play('right', true);
            this.entity.getAll('name', 'character').forEach(sprite => {
                sprite.flipX = false;
            });
            this.entity.getAll('name', 'hive').forEach(sprite => {
                sprite.x = this.character.width - (sprite.width * sprite.scaleX);
            });
        } else {
            this.entity.body.setVelocityX(0);
            this.getCharacter().anims.play('turn');
        }

        if (this.scene.cursors.up.isDown && this.entity.body.onFloor()) {
            this.entity.body.setVelocityY(-600);
        }
    }

    getCharacter() {
        return this.entity.getByName('character');
    }

    setEvents() {
        this.scene.input.keyboard.on('keydown', (event) => {
            console.log(event);
            switch (event.keyCode) {
                case this.inventoryKey.keyCode:
                    this.scene.inventory.toggle();
                    break;
                case this.actionKey.keyCode:
                    console.log('ACTION KEY');
                    if (this.carring) {
                        if (this.carring === 'hive') {
                            this.placeObject('hive');
                        }
                    }
                    break;
                default:
                    break;
            }
        });
        this.scene.inventory.events.on('select-hive', () => {
            this.selectHive();
        });
        this.scene.inventory.events.on('select-bee', () => {
            console.log('select bee');
        });
    }

    selectHive() {
        let hive = this.scene.add.sprite(35, 15, 'hive');
        hive.setScale(.5);
        hive.name = 'hive';
        this.entity.add(hive);
        this.carring = 'hive';
    }

    placeObject(objectType) {
        switch (objectType) {
            case 'hive':
                // Maybe call an itemManager ?
                // this.scene.add.sprite(this.entity.x + this.entity.width, this.entity.y + 35, 'hive');
                let x = this.entity.x + this.entity.width / 2 + 35;
                let y = this.entity.y + this.entity.height / 2 - 35;
                this.scene.add.sprite(x, y, 'hive');
                this.removeCarring();
            default:
                break;
        }
    }

    removeCarring() {
        this.entity.getAll('name', this.carring).forEach(sprite => {
            sprite.destroy();
        });
        this.carring = false;
    }
}

export default Player;