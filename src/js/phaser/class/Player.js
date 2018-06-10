class Player {
    constructor(scene) {
        this.scene = scene;
        this.entity = null;
    }

    create() {
        this.entity = this.scene.physics.add.sprite(110, 0, 'player');
        this.entity.setCollideWorldBounds(true);
        this.scene.physics.add.collider(this.entity, this.scene.physics.world);
        this.setAnimation();
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
            this.entity.setVelocityX(-300);
            this.entity.anims.play('left', true);
            this.entity.flipX = true;
        }
        else if (this.scene.cursors.right.isDown) {
            this.entity.setVelocityX(300);
            this.entity.anims.play('right', true);
            this.entity.flipX = false;
        }
        else {
            this.entity.setVelocityX(0);
            this.entity.anims.play('turn');
        }

        if (this.scene.cursors.up.isDown && this.entity.body.onFloor()) {
            this.entity.setVelocityY(-600);
        }
    }
}

export default Player;