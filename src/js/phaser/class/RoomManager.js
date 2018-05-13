import Room from './Room';

class RoomManager {
    constructor(scene) {
        this.scene = scene;
        this.rooms = [[]];
        this.scene.events.on('buildRoom', (roomParams) => {
            console.log('buildRoom');
            this.build(roomParams);
        });
    }

    add() {
        let room = new Room(this.scene, {id: this.rooms.length});
        this.rooms[0][0] = room;
        console.log(this.rooms)
    }

    build(roomParams) {
        // console.log(roomParams);
        let roomCoords = {};

        if (roomParams.x !== undefined) {
            roomCoords.x = roomParams.x + roomParams.widthInPixels;
        } else {
            roomCoords.x = roomParams.widthInPixels;
        }

        if (roomParams.y !== undefined) {
            roomCoords.y = roomParams.y;
        } else {
            roomCoords.y = 0;
        }
        let room = new Room(this.scene, {
            coords: roomCoords,
            id: this.rooms.length + 1,
            type: 'room-sas'
        });
        console.log(roomCoords.x, roomParams.widthInPixels);
        console.log(Math.floor(roomCoords.y / roomParams.heightInPixels));
        console.log(Math.floor(roomCoords.x / roomParams.widthInPixels));
        let matriceY = Math.floor(roomCoords.y / roomParams.heightInPixels);
        let matriceX = Math.floor(roomCoords.x / roomParams.widthInPixels);
        this.rooms[matriceY][matriceX] = room;
        console.log(this.rooms);
        this.scene.events.emit('updateWorldSize');
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