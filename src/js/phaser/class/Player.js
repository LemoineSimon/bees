class Player {
    constructor(scene) {
        this.character = {
            'width': 80,
            'height': 110,
        };
        this.scene = scene;
        this.entity = this.scene.add.container(110, 80);
        this.buildKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        console.log(this.entity)
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
        if (this.scene.cursors.left.isDown) {
            this.entity.body.setVelocityX(-300);
            this.getCharacter().anims.play('left', true);
            this.entity.getFirst('name', 'character').flipX = true;
            this.entity.getFirst('name', 'hive').flipX = true;
        }
        else if (this.scene.cursors.right.isDown) {
            this.entity.body.setVelocityX(300);
            this.getCharacter().anims.play('right', true);
            this.entity.getFirst('name', 'character').flipX = false;
            this.entity.getFirst('name', 'hive').flipX = false;
        }
        else {
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
            switch (event.keyCode) {
                case this.buildKey.keyCode:
                    this.scene.inventory.toggle();
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
        console.log(this.entity)
    }
}

export default Player;