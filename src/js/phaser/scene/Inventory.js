class InventoryScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'InventoryScene'
        });
        this.visible = false;
        this.borderThickness = 4;
        this.borderColor = 0xaaaaaa;
        this.borderAlpha = 1;
        this.windowAlpha = 1;
        this.windowColor = 0xeeeeee;
        this.itemBorderColor = 0xDDDB58;
        this.itemColor = 0xeeeeee;
        this.itemHeight = 60;
        this.padding = 32;
        this.closeBtnColor = 'black';

        this.categories = [
            {
                name: 'Hives',
                img: 'menu-hives',
                action: 'select-hive'
            },
            {
                name: 'Bees',
                img: 'menu-bees',
                action: 'select-bee'
            }
        ]
    }

    preload() {
        console.log('InventoryScene preload')
    }

    create() {
        console.log('InventoryScene create')
        this.group = this.add.container();
        this.group.visible = false;
        this._createUI();
    }

    update() {

    }

    toggle() {
        this.group.visible ? this.hide() : this.show();
    }

    show() {
        console.log('inventory show');
        this.scene.bringToTop(this.key);
        this.group.visible = true;
    }

    hide() {
        console.log('inventory hide');
        this.group.visible = false;
        this.scene.sendToBack(this.key);
    }

    _createUI() {
        // let gameHeight = this._getGameHeight();
        // let gameWidth = this._getGameWidth();
        // let dimensions = this._calculateWindowDimensions(gameWidth, gameHeight);
        this._createCategories();
    }

    _getGameWidth() {
        return this.sys.game.config.width;
    }

// Gets the height of the game (based on the scene)
    _getGameHeight() {
        return this.sys.game.config.height;
    }

// Calculates where to place the dialog window based on the game size
    _calculateWindowDimensions(width, height) {
        let x = this.padding;
        let y = height - this.windowHeight - this.padding;
        let rectWidth = width - (this.padding * 2);
        let rectHeight = this.windowHeight;
        return {
            x,
            y,
            rectWidth,
            rectHeight
        };
    }

    // Creates the inner dialog window (where the text is displayed)
    _createInnerWindow(x, y, rectWidth, rectHeight) {
        this.graphics.fillStyle(this.windowColor, this.windowAlpha);
        this.graphics.fillRect(x + 1, y + 1, rectWidth - 1, rectHeight - 1);
    }

    // Creates the border rectangle of the dialog window
    _createOuterWindow(x, y, rectWidth, rectHeight) {
        this.graphics.lineStyle(this.borderThickness, this.borderColor, this.borderAlpha);
        this.graphics.strokeRect(x, y, rectWidth, rectHeight);
    }

    _createCategories() {
        this.categories.forEach((category, index) => {
            console.log(Math.cos(45 * index));
            console.log(Math.sin(45 * index));
            let cos = 110 * Math.cos(45 * index - 90);
            let sin = 110 * Math.sin(45 * index - 90);
            let x = cos + (this._getGameWidth() / 2) + (Math.sign(cos) * (this.itemHeight / 2));
            let y = sin + (this._getGameHeight() / 2) + (Math.sign(sin) * (this.itemHeight / 2));
            let button = this.add.sprite(x, y, category.img);
            button.action = category.action;
            button.setInteractive();
            button.on('pointerdown', () => {
                this.events.emit(button.action);
                this.hide();
            });
            this.group.add(button);
        })
    }
}

export default InventoryScene;