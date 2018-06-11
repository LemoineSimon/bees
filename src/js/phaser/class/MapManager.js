import Room from "./Room";
import Elevator from "./Elevator";
import RoomManager from "./RoomManager";

class MapManager {
    constructor(scene) {
        this.scene = scene;
        this.maxRooms = 5;
        this.roomOffset = 0;
        this.roomManager = new RoomManager(this.scene);
        this.scene.events.on('build-room', roomParams => {
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
    }

    update() {
        this.elevator.update();
        this.roomManager.update();
    }
}

export default MapManager;