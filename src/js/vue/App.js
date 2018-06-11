export default {
    el: "#app",
    data: function () {
        return {
            showBuildMenu: false
        }
    },
    created: function () {
        window.EventBus.on('toggle-build-menu', () => {
            this.showBuildMenu = !this.showBuildMenu;
        });
    },
    methods: {
        buildRoom: function (direction) {
            window.EventBus.emit('build-room', direction);
        }
    },
    mounted: function () {
        console.log('Hi !')
    },
}