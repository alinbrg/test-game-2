import Player from "./Player.js";

export default class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    preload() {
        Player.preload(this);
        this.load.image('tiles', 'assets/images/RPG Nature Tileset.png');
        this.load.tilemapTiledJSON('map', 'assets/images/map.tmj');
    }

    create(){
        const map = this.make.tilemap({key: 'map'});
        const tileset = map.addTilesetImage('RPG Nature Tileset', 'tiles', 32, 32);
        const layer1 = map.createLayer('Tile Layer 1', tileset, 0, 0);
        const layer2 = map.createLayer('Tile Layer 2', tileset, 0, 0);
        layer1.setCollisionByProperty({colides: true});
        this.matter.world.convertTilemapLayer(layer1);
        this.player = new Player({scene: this, x: 100, y: 100, texture: 'female-player', frame: 'townsfolk_f_idle_1'});
        this.player.inputKeys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down:  Phaser.Input.Keyboard.KeyCodes.S,
            left:  Phaser.Input.Keyboard.KeyCodes.A,
            right:  Phaser.Input.Keyboard.KeyCodes.D,
        });
    }

    update(){
        this.player.update();
    }
}