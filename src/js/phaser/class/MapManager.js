import Room from "./Room";
import Elevator from "./Elevator";
import RoomManager from "./RoomManager";

class MapManager {
    constructor(scene) {
        this.scene = scene;
        this.maxRooms = 5;
        this.roomOffset = 0;
        this.roomManager = new RoomManager(this.scene);
        this.scene.events.on('buildRoom', (roomParams) => {
            this.addRoom(roomParams);
        });
    }

    _init() {
        this.addElevator();
        this.addRoom({x: this.roomOffset, y: 0, widthInPixels: 0, heightInPixels: 0});
    }

    addElevator() {
        this.elevator = new Elevator(this.scene);
        this.roomOffset = this.elevator.map.widthInPixels;
    }

    addRoom(roomParams) {
        this.roomManager.add(roomParams);
        this.scene.events.emit('updateWorldSize');
    }

    update() {
        this.elevator.update();
        this.roomManager.update();
    }

    getWidth() {
        let maxWidthRaw = 0;
        this.roomManager.rooms.map(roomRaw => {
            console.log(roomRaw);
            if (roomRaw.length > maxWidthRaw.length) {
                maxWidthRaw = roomRaw;
            }
        });
        console.log(maxWidthRaw);
        console.log(maxWidthRaw[maxWidthRaw.length - 1]);
        // return maxWidthRaw[maxWidthRaw.length - 1].map.widthInPixels * maxWidthRaw.length;
    }

    getHeight() {
        return this.roomManager.rooms[this.roomManager.rooms.length - 1][0].map.heightInPixels * this.roomManager.rooms.length;
    }
}

export default MapManager;