let InventoryPlugin = function (scene) {
    //  The Scene that owns this plugin
    this.scene = scene;
    this.systems = scene.sys;
    this.entity = scene.add.group();
    if (!scene.sys.settings.isBooted) {
        scene.sys.events.once('boot', this.boot, this);
    }
};

//  Static function called by the PluginFile Loader.
InventoryPlugin.register = function (PluginManager) {
    PluginManager.register('InventoryPlugin', InventoryPlugin, 'inventory');
};

InventoryPlugin.prototype = {
    boot: function () {
        let eventEmitter = this.systems.events;

        eventEmitter.on('start', this.start, this);

        eventEmitter.on('preupdate', this.preUpdate, this);
        eventEmitter.on('update', this.update, this);
        eventEmitter.on('postupdate', this.postUpdate, this);

        eventEmitter.on('pause', this.pause, this);
        eventEmitter.on('resume', this.resume, this);

        eventEmitter.on('sleep', this.sleep, this);
        eventEmitter.on('wake', this.wake, this);

        eventEmitter.on('shutdown', this.shutdown, this);
        eventEmitter.on('destroy', this.destroy, this);

        eventEmitter.on('toggle-inventory', this.toggleInventory, this)
    },
    init: function (opts) {
        // Check to see if any optional parameters were passed
        if (!opts) opts = {};
        // set properties from opts object or use defaults
        this.borderThickness = opts.borderThickness || 3;
        this.borderColor = opts.borderColor || 0x907748;
        this.borderAlpha = opts.borderAlpha || 1;
        this.windowAlpha = opts.windowAlpha || 0.8;
        this.windowColor = opts.windowColor || 0x303030;
        this.windowHeight = opts.windowHeight || 300;
        this.padding = opts.padding || 32;
        this.closeBtnColor = opts.closeBtnColor || 'darkgoldenrod';

        // used for animating the text
        this.eventCounter = 0;
        // if the dialog window is shown
        this.visible = false;
        // the current text in the window
        this.text;
        // the text that will be displayed in the window
        this.dialog;
        this.graphics;
        this.closeBtn;

        // Create the dialog window
        this._createUI();
    },
    toggleInventory: function () {
        console.log('toggle inventory')
        this.visible = !this.visible;
        if (this.graphics) this.graphics.visible = this.visible;
        if (this.closeBtn) this.closeBtn.visible = this.visible;
    },



    //  A test method.
    test: function (name) {
        console.log('InventoryPlugin says hello ' + name + '!');
    },

    //  Called when a Scene is started by the SceneManager. The Scene is now active, visible and running.
    start: function () {
    },

    //  Called every Scene step - phase 1
    preUpdate: function (time, delta) {
    },

    //  Called every Scene step - phase 2
    update: function (time, delta) {
    },

    //  Called every Scene step - phase 3
    postUpdate: function (time, delta) {
    },

    //  Called when a Scene is paused. A paused scene doesn't have its Step run, but still renders.
    pause: function () {
    },

    //  Called when a Scene is resumed from a paused state.
    resume: function () {
    },

    //  Called when a Scene is put to sleep. A sleeping scene doesn't update or render, but isn't destroyed or shutdown. preUpdate events still fire.
    sleep: function () {
    },

    //  Called when a Scene is woken from a sleeping state.
    wake: function () {
    },

    //  Called when a Scene shuts down, it may then come back again later (which will invoke the 'start' event) but should be considered dormant.
    shutdown: function () {
    },

    //  Called when a Scene is destroyed by the Scene Manager. There is no coming back from a destroyed Scene, so clear up all resources here.
    destroy: function () {
        this.shutdown();
        this.scene = undefined;
    }
};

InventoryPlugin.prototype.constructor = InventoryPlugin;
module.exports = InventoryPlugin;