import Room from './Room';

class RoomManager {
    constructor(scene) {
        this.scene = scene;
        this.rooms = [[]];
    }

    /**
     * @param {Object} roomParams
     * @param {number} roomParams.y
     * @param {number} roomParams.x
     * @param {number} roomParams.widthInPixels
     * @param {number} roomParams.heightInPixels
     **/
    add(roomParams) {
        // console.log(roomParams);
        let roomCoords = {};

        if (roomParams.x !== undefined) {
            roomCoords.x = roomParams.x + roomParams.widthInPixels;
        } else {
            roomCoords.x = roomParams.widthInPixels !== undefined ? roomParams.widthInPixels : 0;
        }

        if (roomParams.y !== undefined) {
            roomCoords.y = roomParams.y;
        } else {
            roomCoords.y = roomParams.heightInPixels !== undefined ? roomParams.heightInPixels : 0;
        }

        let room = new Room(this.scene, {
            coords: roomCoords,
            id: this.rooms.length + 1,
            type: 'room-sas'
        });
        let matriceY = Math.floor(roomCoords.y / room.map.heightInPixels);
        let matriceX = Math.floor(roomCoords.x / room.map.widthInPixels);
        this.rooms[matriceY][matriceX] = room;
    }

    update() {
        this.rooms.map(raw => {
            raw.map(room => {
                room.update();
            })
        });
    }
}

export default RoomManager;