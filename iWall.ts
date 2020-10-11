/**
 * 使用此文件来定义自定义函数和图形块。
 * 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
 */

const MATRIX_WIDTH = 34;
const MATRIX_HEIGHT = 30;
const X_MIN = 0;
const X_MAX = 33;
const Y_MIN = 0;
const Y_MAX = 29;


//% weight=3
//% color=#eeaa00
//% icon="\uf00a"
//% groups="['传感器', '绘图', '角色', '背景', '音乐']"
namespace iWall {

    export enum SENSOR {
        //% blockId="PM2_5" block="PM2.5"
        PM2_5 = 0,
        //% blockId="TEMP_HUMI" block="Temp & Humi"
        TEMP_HUMI = 1,
        //% blockId="ULTRASONIC" block="Ultrasonic"
        ULTRASONIC = 2,
        //% blockId="BODY_TEMP" block="body temp"
        BODY_TEMP = 3,
        //% blockId="RFID" block="RFID"
        RFID = 4,
        //% blockId="TOUCH_KEY" block="Touch Key"
        TOUCH_KEY = 5,
        //% blockId="LUMINATION" block="Lumination"
        LUMINATION = 6,
        //% blockId="COLOR" block="Color"
        COLOR = 7,
        //% blockId="HEART_RATE" block="Heart Rate"
        HEART_RATE = 8,
        //% blockId="GESTURE" block="Gesture"
        GESTURE = 9,
        //% blockId="MAGNET" block="Magnet"
        MAGNET = 10,
        //% blockId="PRESSURE" block="Pressure"
        PRESSURE = 11
    }
    
    export enum SENSOR_DATA {
        //% blockId="PM2_5" block="PM2.5"
        PM2_5 = 0,
        //% blockId="TEMP" block="Temp"
        TEMP = 1,
        //% blockId="HUMI" block="Humi"
        HUMI = 12,
        //% blockId="ULTRASONIC" block="Ultrasonic"
        ULTRASONIC = 2,
        //% blockId="BODY_TEMP" block="body temp"
        BODY_TEMP = 3,
        //% blockId="RFID" block="RFID"
        RFID = 4,
        //% blockId="TOUCH_KEY" block="Touch Key"
        TOUCH_KEY = 5,
        //% blockId="LUMINATION" block="Lumination"
        LUMINATION = 6,
        //% blockId="COLOR" block="Color"
        COLOR = 7,
        //% blockId="HEART_RATE" block="Heart Rate"
        HEART_RATE = 8,
        //% blockId="GESTURE" block="Gesture"
        GESTURE = 9,
        //% blockId="MAGNET" block="Magnet"
        MAGNET = 10,
        //% blockId="PRESSURE" block="Pressure"
        PRESSURE = 11
    }
    
    export enum RECT_MODE {
        //% blockId="BORDER" block="Border"
        BORDER = 0,
        //% blockId="FILL" block="Fill"
        FILL = 1
    }

    export enum DIRECT {
        //% blockId="UP" block="Up"
        UP = 0,
        //% blockId="DOWN" block="Down"
        DOWN = 1,
        //% blockId="LEFT" block="Left"
        LEFT = 2,
        //% blockId="RIGHT" block="Right"
        RIGHT = 3
    }

	/**
	 * iWall初始化，必须执行该函数，放在所有函数之前执行，建议放入“当开机时”最上位置。
	*/
    //% blockId=iWall_Init block="iWall Init"
    //% weight=250
    //% group=""
    export function iWall_Init(): void {
        serial.redirect(
            SerialPin.P0,
            SerialPin.P1,
            BaudRate.BaudRate115200
        );
        basic.pause(100)
        serial.readString();
        if (sendCommand("iWall_Init\r\n") == "OK") {}
    }

    export enum TURN {
        //% blockId="TURN_LEFT" block="Turn Left"
        LEFT = 0,
        //% blockId="TURN_RIGHT" block="Turn Right"
        RIGHT = 1
    }

    export enum VISIBILITY {
        //% blockId="VISIBLE" block="Visible"
        VISIBLE = 1,
        //% blockId="FALSE" block="Invisible"
        INVISIBLE = 0
    }

    export function sendCommand(cmd: string): string{
        serial.readString();
        serial.writeString(cmd);
        return serial.readLine();
    }

    export enum EDGE_MODE {
        //% blockId="OVER" block="Over"
        OVER = 0,
        //% blockId="HALT" block="Halt"
        HALT = 1,
        //% blockId="REBOUND" block="Rebound"
        REBOUND = 2,
        //% blockId="INTERLINK" block="Interlink"
        INTERLINK = 3
    }

    export class Character {
        name: string;
        number: number;
        x: number;
        y: number;
        width: number;
        height: number;
        level: number;
        edgeMode: EDGE_MODE = EDGE_MODE.HALT;
        direct: DIRECT = DIRECT.UP;
        visible: VISIBILITY = VISIBILITY.VISIBLE;

        constructor(name: string, type: number, x: number, y: number, level: number) {
            this.name = name;
            this.number = charactorType.PARAM[type][charactorType.CHARACTOR_NUMBER];
            this.x = x;
            this.y = y;
            this.level = level;
            this.width = charactorType.PARAM[type][charactorType.CHARACTOR_WIDTH];
            this.height = charactorType.PARAM[type][charactorType.CHARACTOR_HEIGHT];
        }

        set setType(type: number) {
            this.number = charactorType.PARAM[type][charactorType.CHARACTOR_NUMBER];
            this.width = charactorType.PARAM[type][charactorType.CHARACTOR_WIDTH];
            this.height = charactorType.PARAM[type][charactorType.CHARACTOR_HEIGHT];
        }
        
        set setX(x: number) { this.x = x; }
        get getX() { return this.x; }

        set setY(y: number) { this.y = y; }
        get getY() { return this.y; }

        get getWidth() { return this.width; }

        get getHeight() { return this.height; }
        
        set setLevel(level: number) { this.level = level; }
        get getLevel() { return this.level; }
        
        set setDirect(direct: DIRECT) { this.direct = direct; }
        get getDirect() { return this.direct; }
        
        set setVisible(visible: VISIBILITY) { this.visible = visible; }
        get getVisible() { return this.visible; }
    }
    
    let charactors: Character[] = [];

    export function getCharactorEntity(name: string): Character{
        for (let i of charactors) {
            if (i.name == name) return i;
        }
        return null;
    }

	/**
	 * 创建一个新角色。
     * @param name the new charactor's name, eg: "name"
	*/
    //% blockId=iWall_createCharacter block="New Character Name%name|Type%type|X%x|Y%y|Level%level"
    //% weight=208
    //% level.min=0 level.max=255
    //% group="角色"
    //% inlineInputMode=inline
    export function iWall_createCharacter(
        name: string,
        type: charactorType.NAME,
        x: number,
        y: number,
        level: number): void {
        charactors.push(new Character(name, type, x, y, level));
        if (sendCommand(
            "char_New:\"" +
            name + '\",' +
            convertToText(type) + ',' +
            convertToText(x) + ',' +
            convertToText(y) + ',' +
            convertToText(level) + 
            "\r\n") == "OK") { }
    }

	/**
	 * 删除角色。
     * @param name the new charactor's name, eg: "name"
	*/
    //% blockId=iWall_deleteCharacter block="Delete Character Name%name"
    //% weight=207
    //% group="角色"
    //% inlineInputMode=inline
    export function iWall_deleteCharacter(name: string): void {
        let i = 0;
        for (let char of charactors) {
            if (char.name == name) {
                if (sendCommand(
                    "char_Delete:\"" +
                    name + '\",' + "\r\n") == "OK") { }
                charactors.splice(i, 1);
            }
            i++;
        }

    }

	/**
	 * 角色朝着当前方向移动N步。
     * @param name the new charactor's name, eg: "name"
	*/
    //% blockId=iWall_characterMove block="Character%name|Move%n"
    //% weight=206
    //% group="角色"
    //% inlineInputMode=inline
    export function iWall_characterMove(name: string, n: number): void {
        if (n == 0) return;

        let char = getCharactorEntity(name);

        switch (char.direct) {
            case DIRECT.UP: char.y -= n; break;
            case DIRECT.DOWN: char.y += n; break;
            case DIRECT.LEFT: char.x -= n; break;
            case DIRECT.RIGHT: char.x += n; break;
        }

        switch (char.edgeMode) {
            case EDGE_MODE.OVER:
                break;
            case EDGE_MODE.HALT:
                if (char.x < X_MIN) char.x = X_MIN;
                if (char.x > X_MAX) char.x = X_MAX;
                if (char.y < Y_MIN) char.y = Y_MIN;
                if (char.y > Y_MAX) char.y = Y_MAX;
                break;
            case EDGE_MODE.REBOUND:
                if (char.x < X_MIN) { char.x = - char.x - 1; char.direct = DIRECT.DOWN }
                if (char.x > X_MAX) { char.x = 2 * X_MAX - char.x + 1; char.direct = DIRECT.UP }
                if (char.y < Y_MIN) { char.y = - char.y - 1; char.direct = DIRECT.RIGHT }
                if (char.y > Y_MAX) { char.y = 2 * Y_MAX - char.y + 1; char.direct = DIRECT.LEFT }
                break;
            case EDGE_MODE.INTERLINK:
                char.x >= X_MIN ? char.x %= MATRIX_WIDTH : char.x = char.x % MATRIX_WIDTH + MATRIX_WIDTH;
                char.y >= Y_MIN ? char.x %= MATRIX_HEIGHT : char.x = char.x % MATRIX_HEIGHT + MATRIX_HEIGHT;
                break;
        }

        if (sendCommand("char_Move:\"" + name + '\",' + convertToText(n) + "\r\n") == "OK") { }
    }

	/**
	 * 角色转弯。
     * @param name the new charactor's name, eg: "name"
	*/
    //% blockId=iWall_characterTrun block="Character%name|Turn%turn"
    //% weight=205
    //% group="角色"
    //% inlineInputMode=inline
    export function iWall_characterTrun(name: string, turn: TURN): void {
        let char = getCharactorEntity(name);
        
        if (turn == TURN.LEFT) {
            switch (char.direct) {
                case DIRECT.UP: char.direct -= DIRECT.LEFT; break;
                case DIRECT.DOWN: char.direct -= DIRECT.RIGHT; break;
                case DIRECT.LEFT: char.direct -= DIRECT.DOWN; break;
                case DIRECT.RIGHT: char.direct -= DIRECT.UP; break;
            }
        } else {
            switch (char.direct) {
                case DIRECT.UP: char.direct -= DIRECT.RIGHT; break;
                case DIRECT.DOWN: char.direct -= DIRECT.LEFT; break;
                case DIRECT.LEFT: char.direct -= DIRECT.UP; break;
                case DIRECT.RIGHT: char.direct -= DIRECT.DOWN; break;
            }
        }

        if (sendCommand("char_SetDir:\"" + name + '\",' + convertToText(char.direct) + "\r\n") == "OK") { }
    }

	/**
	 * 角色设置方向。
     * @param name the new charactor's name, eg: "name"
	*/
    //% blockId=iWall_characterSetDirect block="Character%name|Set%dir"
    //% weight=204
    //% group="角色"
    //% inlineInputMode=inline
    export function iWall_characterSetDirect(name: string, dir: DIRECT): void {
        let char = getCharactorEntity(name);
        char.direct = dir;

        if (sendCommand("char_SetDir:\"" + name + '\",' + convertToText(char.direct) + "\r\n") == "OK") { }
    }

	/**
	 * 角色设置碰到边界处理方法。
     * @param name the new charactor's name, eg: "name"
	*/
    //% blockId=iWall_characterSetEdgeMode block="Character%name|Edge Mode%mode"
    //% weight=203
    //% group="角色"
    //% inlineInputMode=inline
    export function iWall_characterSetEdgeMode(name: string, mode: EDGE_MODE): void {
        let char = getCharactorEntity(name);
        char.edgeMode = mode;

        if (sendCommand("char_EdgeMode:\"" + name + '\",' + convertToText(char.edgeMode) + "\r\n") == "OK") { }
    }

	/**
	 * 角色设置位置。
     * @param name the new charactor's name, eg: "name"
	*/
    //% blockId=iWall_characterSetXY block="Character%name|X%x|Y%y"
    //% weight=202
    //% group="角色"
    //% inlineInputMode=inline
    export function iWall_characterSetXY(name: string, x: number, y: number): void {
        let char = getCharactorEntity(name);
        char.x = x;
        char.y = y;

        if (sendCommand(
            "char_SetXY:\"" + name + '\",' +
            convertToText(char.x) + ',' +
            convertToText(char.y) + "\r\n") == "OK") { }
    }

	/**
	 * 角色设置位置偏移。
     * @param name the new charactor's name, eg: "name"
	*/
    //% blockId=iWall_characterSetXYOffset block="Character%name|Offset X%x|Y%y"
    //% weight=201
    //% group="角色"
    //% inlineInputMode=inline
    export function iWall_characterSetXYOffset(name: string, x: number, y: number): void {
        let char = getCharactorEntity(name);
        char.x += x;
        char.y += y;

        if (sendCommand(
            "char_SetXY:\"" + name + '\",' +
            convertToText(char.x) + ',' +
            convertToText(char.y) + "\r\n") == "OK") { }
    }

	/**
	 * 角色设置可见。
     * @param name the new charactor's name, eg: "name"
	*/
    //% blockId=iWall_characterSetVisible block="Character%name|Visibility %state"
    //% weight=200
    //% group="角色"
    //% inlineInputMode=inline
    export function iWall_characterSetVisible(name: string, state: VISIBILITY): void {
        let char = getCharactorEntity(name);
        char.visible = state;

        if (sendCommand(
            "char_Visible:\"" + name + '\",' + convertToText(state) + "\r\n") == "OK") { }
    }

    /**
	 * iWall的传感器单元初始化，需要放在“当开机时”中。
	*/
    //% blockId=iWall_SensorInit block="iWall Sensor Init |%sensor|"
    //% weight=199
    //% group="传感器"
    //% sensor.fieldEditor="gridpicker" sensor.fieldOptions.columns=3
    //% sensor.fieldOptions.tooltips="false"
    export function iWall_SensorInit(sensor: SENSOR): void {
        if (sendCommand("sensor_Init:" + convertToText(sensor) + "\r\n") == "OK") { }
    }

	/**                              
	 * iWall的传感器数据获取。
	*/
    //% blockId=iWall_SensorGet block="iWall Sensor Get |%sensor|"
    //% weight=198
    //% group="传感器"
    //% sensor.fieldEditor="gridpicker" sensor.fieldOptions.columns=3
    //% sensor.fieldOptions.tooltips="false"
    export function iWall_SensorGet(sensor: SENSOR_DATA): number {
        let idx = sensor;
        let data = 0;
        if (sensor == SENSOR_DATA.HUMI) idx = SENSOR_DATA.TEMP;
        let tmp_str = sendCommand("sensor_Get:" + convertToText(idx) + "\r\n");
        if ((tmp_str.charAt(0) == 'O') && (tmp_str.charAt(1) == 'K')) {
            let len = 0;
            let tmp_char;
            if (sensor != SENSOR_DATA.HUMI) {
                for (; len < tmp_str.length - 4; len++) {
                    tmp_char = tmp_str.charAt(len + 3)
                    if (!((tmp_char >= '-') && (tmp_char <= '9') && (tmp_char != '/'))) {
                        break;
                    }
                }
                data = parseFloat(tmp_str.substr(3, len))
            } else {
                let i = 0;
                for (; i < tmp_str.length - 4; i++) {
                    tmp_char = tmp_str.charAt(i + 3)
                    if (tmp_char == ',') {
                        break;
                    }
                }
                for (; len < tmp_str.length - 4; len++) {
                    tmp_char = tmp_str.charAt(len + 4 + i)
                    if (!((tmp_char >= '-') && (tmp_char <= '9') && (tmp_char != '/'))) {
                        break;
                    }
                }
                data = parseFloat(tmp_str.substr(4 + i, len))
            }
        }
        return data;
    }

	// /**                              
	//  * iWall点阵屏显示，使用绘画功能之后（如画直线），需要使用该函数来更新显示内容。
	// */
    // //% blockId=iWall_LEDMatrixShow block="iWall LED Matrix Show"
    // //% weight=197
    // //% group="绘图"
    // export function iWall_LEDMatrixShow(): void {
    //     let tmp_str = "ledMatrix_Show\r\n";
    //     serial.readString();
    //     serial.writeString(tmp_str);
    //     tmp_str = serial.readLine();
    //     if (tmp_str == "OK") {

    //     }
    // }

	/**                              
	 * iWall点阵屏清空画布，需要清除屏，请再使用点阵显示函数。
	*/
    //% blockId=iWall_LEDMatrixClear block="iWall LED Matrix Clear Canvas"
    //% weight=196
    //% group="绘图"
    export function iWall_LEDMatrixClear(): void {
        if (sendCommand("ledMatrix_Clear\r\n") == "OK") { }
    }

    /** 
     * 设置 红、绿、蓝 三个颜色的分量
     */
    //% weight=195
    //% r.min=0 r.max=255
    //% g.min=0 g.max=255
    //% b.min=0 b.max=255
    //% blockId=iWall_RGB block="red|%r green|%g blue|%b"
    //% group="绘图"
    export function iWall_RGB(r: number, g: number, b: number): number {
        return (r << 16) + (g << 8) + (b);
    }

    /**
     * iWall点阵屏绘制像素点
     */
    //% weight=194
    //% x.min=0 x.max=33
    //% y.min=0 y.max=29
    //% rgb.shadow="colorNumberPicker"
    //% blockId=iWall_LEDMatrixSetPixel block="iWall Set Pixel X%x|Y%y|Color%rgb"
    //% group="绘图"
    export function iWall_LEDMatrixSetPixel(x: number, y: number, rgb: number): void {
        let r = rgb >> 16;
        let g = (rgb >> 8) & 0xFF;
        let b = (rgb) & 0xFF;

        if (sendCommand(
            "ledMatrix_Dot:" +
            convertToText(x) + ',' +
            convertToText(y) + ',' +
            convertToText(r) + ',' +
            convertToText(g) + ',' +
            convertToText(b) + 
            "\r\n") == "OK") { }
        }

    /**
     * iWall点阵屏绘制直线
     */
    //% weight=193
    //% x0.min=0 x0.max=33
    //% y0.min=0 y0.max=29
    //% x1.min=0 x1.max=33
    //% y1.min=0 y1.max=29
    //% rgb.shadow="colorNumberPicker"
    //% blockId=iWall_LEDMatrixLine block="iWall Draw Line Start X|%x0|Y|%y0|End X|%x1|Y|%y1|Color|%rgb|"
    //% group="绘图"
    //% inlineInputMode=inline
    export function iWall_LEDMatrixLine(x0: number, y0: number, x1: number, y1: number, rgb: number): void {
        let r = rgb >> 16;
        let g = (rgb >> 8) & 0xFF;
        let b = (rgb) & 0xFF;

        if (sendCommand(
            "ledMatrix_Line:" +
            convertToText(x0) + ',' +
            convertToText(y0) + ',' +
            convertToText(x1) + ',' +
            convertToText(y1) + ',' +
            convertToText(r) + ',' +
            convertToText(g) + ',' +
            convertToText(b) + 
            "\r\n") == "OK") { }
        }

    /**
     * iWall点阵屏绘制矩形
     */
    //% weight=192
    //% x0.min=0 x0.max=33
    //% y0.min=0 y0.max=29
    //% x1.min=0 x1.max=33
    //% y1.min=0 y1.max=29
    //% rgb.shadow="colorNumberPicker"
    //% blockId=iWall_LEDMatrixRect block="iWall Draw Line Left-Top X|%x0|Y|%y0|Right-Bottom X|%x1|Y|%y1|Color|%rgb|Mode|%mode|"
    //% group="绘图"
    //% inlineInputMode=inline
    export function iWall_LEDMatrixRect(x0: number, y0: number, x1: number, y1: number, rgb: number, mode: RECT_MODE): void {
        let r = rgb >> 16;
        let g = (rgb >> 8) & 0xFF;
        let b = (rgb) & 0xFF;

        if (sendCommand(
            "ledMatrix_Rect:" +
            convertToText(x0) + ',' +
            convertToText(y0) + ',' +
            convertToText(x1) + ',' +
            convertToText(y1) + ',' +
            convertToText(r) + ',' +
            convertToText(g) + ',' +
            convertToText(b) + ',' +
            convertToText(mode) + 
            "\r\n")== "OK") { }
        }

    /**
     * iWall点阵屏绘制矩形
	 * @param num [1-34] ; eg: 1, 25
     */
    //% weight=191
    //% blockId=iWall_LEDMatrixShift block="iWall Shift Direct|%dir| Number|%num|"
    //% group="绘图"
    //% inlineInputMode=inline
    export function iWall_LEDMatrixShift(dir: DIRECT, num: number): void {
        if (sendCommand(
            "ledMatrix_Shift:" +
            convertToText(dir) + ',' +
            convertToText(num) + ',' +
            "\r\n") == "OK") { }
        }
}

