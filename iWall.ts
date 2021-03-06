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
//% groups="['传感器', '绘图', '角色', '背景', '音乐', '文字']"
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
        //% blockId="COLOR_R" block="Color_R"
        COLOR_R = 7,
        //% blockId="COLOR_G" block="Color_G"
        COLOR_G = 13,
        //% blockId="COLOR_B" block="Color_B"
        COLOR_B = 14,
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

    export enum FONT {
        //% blockId="ASCII_5X5" block="5X5(ASCII)"
        ASCII_5X5 = 4,
        //% blockId="ASCII_10X10" block="10X10(ASCII)"
        ASCII_10X10 = 5
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
        if (sendCommand("D_Init\r\n") == "OK") {}
    }

    export class Timer {
        value: number;

        constructor() {
            this.value = control.millis();
        }
    }

	/**
	 * 新建一个计时器。
	*/
    //% blockId=iWall_createTimer block="New Timer"
    //% weight=249
    //% group=""
    export function iWall_createTimer(): Timer {
        let timer = new Timer();
        return timer;
    }

	/**
	 * 获取一个计时器的值。
	*/
    //% blockId=iWall_getTimerValue block="Get Timer%timer|(millis)"
    //% weight=248
    //% group=""
    export function iWall_GetTimerValue(timer: Timer): number {
        return control.millis() - timer.value;
    }

	/**
	 * 清零计时器的数值。
	*/
    //% blockId=iWall_clearTimer block="Clear TimeR"
    //% weight=247
    //% group=""
    export function iWall_ClearTimer(timer: Timer) {
        timer.value = control.millis();
    }

    export enum AXIS {
        //% blockId="X" block="X"
        X = 0,
        //% blockId="Y" block="Y"
        Y = 1
    }

    export enum GRAPHDIRECT {
        //% blockId="UP" block="Graph Up"
        UP = 0,
        //% blockId="DOWN" block="Graph Down"
        DOWN = 1,
        //% blockId="LEFT" block="Graph Left"
        LEFT = 2,
        //% blockId="RIGHT" block="Graph Right"
        RIGHT = 3
    }

    export enum MOTIONDIRECT {
        //% blockId="UP" block="Move Up"
        UP = 0,
        //% blockId="DOWN" block="Move Down"
        DOWN = 1,
        //% blockId="LEFT" block="Move Left"
        LEFT = 2,
        //% blockId="RIGHT" block="Move Right"
        RIGHT = 3,
        //% blockId="LEFT_UP" block="Move Left-Up"
        LEFT_UP = 4,
        //% blockId="RIGHT_UP" block="Move Right-Up"
        RIGHT_UP = 5,
        //% blockId="LEFT_DOWN" block="Move Left-Down"
        LEFT_DOWN = 6,
        //% blockId="RIGHT_DOWN" block="Move Right-Down"
        RIGHT_DOWN = 7
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

    export enum EDGE_MODE {
        //% blockId="OVER" block="Over"
        OVER = 0,
        //% blockId="HALT" block="Halt"
        HALT = 1,
        //% blockId="REBOUND" block="Rebound"
        REBOUND = 2,
        // //% blockId="INTERLINK" block="Interlink"
        // INTERLINK = 3
    }

    export enum LAYER_MODE {
        //% blockId="TOP" block="Top Layer"
        TOP = 0,
        //% blockId="PREVIOUS" block="Previous Layer"
        PREVIOUS = 1,
        //% blockId="LATTER" block="Latter Layer"
        LATTER = 2,
        // //% blockId="BOTTOM" block="Bottom Layer"
        BOTTOM = 3
    }

    export enum FLIP {
        //% blockId="VERTICAL" block="Vertical"
        VERTICAL = 0,
        //% blockId="HORIZONTAL" block="Horizontal"
        HORIZONTAL = 1
    }

    export enum FLIP_MODE {
        //% blockId="NONE" block="None"
        NONE = 0,
        //% blockId="VERTICAL" block="Vertical"
        VERTICAL = 1,
        //% blockId="HORIZONTAL" block="Horizontal"
        HORIZONTAL = 2,
        //% blockId="BOTH" block="Both"
        BOTH = 3
    }

    export function sendCommand(cmd: string): string{
        serial.readString();
        serial.writeString(cmd);
        return serial.readLine();
    }

    export class Character {
        number: number;
        x: number;
        y: number;
        width: number;
        height: number;
        graphDirect: GRAPHDIRECT = GRAPHDIRECT.UP;
        motionDirect: MOTIONDIRECT = MOTIONDIRECT.UP;
        edgeMode: EDGE_MODE = EDGE_MODE.OVER;

        constructor(type: characterType.NAME, x: number, y: number) {
            this.number = characterType.info[type][characterType.NUMBER];
            this.width = characterType.info[type][characterType.WIDTH];
            this.height = characterType.info[type][characterType.HEIGHT];
            this.x = x;
            this.y = y;
        }
    }

    let charactors: Character[] = [];
 
    
	/**
	 * 创建一个新角色。
	*/
    //% blockId=iWall_createCharacter block="New Character Type%type|X%x|Y%y"
    //% weight=223
    //% group="角色"
    //% inlineInputMode=inline
    //% type.fieldEditor="gridpicker" type.fieldOptions.columns=5
    export function iWall_createCharacter(
        type: characterType.NAME,
        x: number,
        y: number): Character {
        
        let char = new Character(type, x, y);
        charactors.push(char);
        
        if (sendCommand(
            "C_New:" +
            convertToText(char.number) + ',' +
            convertToText(x) + ',' +
            convertToText(y) + "\r\n") == "OK") { }
        
        return char;
    }

	/**
	 * 删除一个新角色。
	*/
    //% blockId=iWall_deleteCharacter block="Delete Character%char"
    //% weight=222
    //% group="角色"
    //% inlineInputMode=inline
    export function iWall_deleteCharacter(char: Character): void {
        let idx = charactors.indexOf(char);

        if (idx != -1) {
            charactors.splice(idx, 1);

            if (sendCommand(
                "C_Del:" +
                convertToText(idx) + "\r\n") == "OK") { } 
        }
    }

	/**
	 * 角色朝着当前方向移动N步。
     * @param n the number of step to move, eg: 1, -1
	*/
    //% blockId=iWall_characterMove block="Character%char|Move%n"
    //% weight=221
    //% group="角色"
    //% inlineInputMode=inline
    export function iWall_characterMove(char: Character, n: number): void {
        let idx = charactors.indexOf(char);
        if (n == 0 || idx == -1) return;
        let old_x = char.x;
        let old_y = char.y;
        switch (char.motionDirect) {
            case MOTIONDIRECT.UP: char.y -= n; break;
            case MOTIONDIRECT.DOWN: char.y += n; break;
            case MOTIONDIRECT.LEFT: char.x -= n; break;
            case MOTIONDIRECT.RIGHT: char.x += n; break;
            case MOTIONDIRECT.LEFT_UP: char.x -= n; char.y -= n; break;
            case MOTIONDIRECT.RIGHT_UP: char.x += n; char.y -= n; break;
            case MOTIONDIRECT.LEFT_DOWN: char.x -= n; char.y += n; break;
            case MOTIONDIRECT.RIGHT_DOWN: char.x += n; char.y += n; break;
        }

        switch (char.edgeMode) {
            case EDGE_MODE.OVER:
                break;
            case EDGE_MODE.HALT:
                let dx = 0, dy = 0;
                if (char.x < X_MIN) dx -= char.x;
                if (char.x > X_MAX) dx = X_MAX - char.x;
                if (char.y < Y_MIN) dy -= char.y;
                if (char.y > Y_MAX) dy = Y_MAX - char.y;
                if (dx != 0 || dy != 0) {
                    if (Math.abs(dx) > Math.abs(dy)) {
                        char.x += dx; char.y += char.y > old_y ? - Math.abs(dx) : Math.abs(dx);
                    } else {
                        char.x += char.x > old_x ? - Math.abs(dy) : Math.abs(dy); char.y += dy;
                    }
                }
                break;
            case EDGE_MODE.REBOUND:
                if (char.x < X_MIN) {
                    char.x = - char.x - 1;
                    switch (char.motionDirect) {
                        case MOTIONDIRECT.LEFT: char.motionDirect = MOTIONDIRECT.RIGHT; break;
                        case MOTIONDIRECT.LEFT_UP: char.motionDirect = MOTIONDIRECT.RIGHT_UP; break;
                        case MOTIONDIRECT.LEFT_DOWN: char.motionDirect = MOTIONDIRECT.RIGHT_DOWN; break;
                    }
                }
                if (char.x > X_MAX) {
                    char.x = 2 * X_MAX - char.x + 1;
                    switch (char.motionDirect) {
                        case MOTIONDIRECT.RIGHT: char.motionDirect = MOTIONDIRECT.LEFT; break;
                        case MOTIONDIRECT.RIGHT_UP: char.motionDirect = MOTIONDIRECT.LEFT_UP; break;
                        case MOTIONDIRECT.RIGHT_DOWN: char.motionDirect = MOTIONDIRECT.LEFT_DOWN; break;
                    }
                }
                if (char.y < Y_MIN) {
                    char.y = - char.y - 1;
                    switch (char.motionDirect) {
                        case MOTIONDIRECT.UP: char.motionDirect = MOTIONDIRECT.DOWN; break;
                        case MOTIONDIRECT.LEFT_UP: char.motionDirect = MOTIONDIRECT.LEFT_DOWN; break;
                        case MOTIONDIRECT.RIGHT_UP: char.motionDirect = MOTIONDIRECT.RIGHT_DOWN; break;
                    }
                }
                if (char.y > Y_MAX) {
                    char.y = 2 * Y_MAX - char.y + 1;
                    switch (char.motionDirect) {
                        case MOTIONDIRECT.DOWN: char.motionDirect = MOTIONDIRECT.DOWN; break;
                        case MOTIONDIRECT.LEFT_DOWN: char.motionDirect = MOTIONDIRECT.LEFT_UP; break;
                        case MOTIONDIRECT.RIGHT_DOWN: char.motionDirect = MOTIONDIRECT.RIGHT_UP; break;
                    }
                }
                break;
        }

        if (sendCommand("C_Mov:" + convertToText(idx) + ',' + convertToText(n) + "\r\n") == "OK") { }
    }

	/**
	 * 设置角色图形。
	*/
    //% blockId=iWall_characterSetGraph block="%char|Set Graph %type"
    //% weight=220
    //% group="角色"
    //% inlineInputMode=inline
    //% type.fieldEditor="gridpicker" type.fieldOptions.columns=5
    export function iWall_characterSetGraph(char: Character, type: characterType.NAME): void {
        let idx = charactors.indexOf(char);
        if (idx == -1) return;
        
        char.number = characterType.info[type][characterType.NUMBER];
        char.width = characterType.info[type][characterType.WIDTH];
        char.height = characterType.info[type][characterType.HEIGHT];
        if (sendCommand("C_SetGraph:" + convertToText(idx) + ',' + convertToText(char.number) + "\r\n") == "OK") { }
    }

	/**
	 * 设置角色图形方向。
	*/
    //% blockId=iWall_characterSetGraphDirect block="%char|Set Graph Direct%dir"
    //% weight=219
    //% group="角色"
    //% inlineInputMode=inline
    //% dir.fieldEditor="gridpicker"
    export function iWall_characterSetGraphDirect(char: Character, dir: GRAPHDIRECT): void {
        let idx = charactors.indexOf(char);
        if (idx == -1) return;
        
        char.graphDirect = dir;
        if (sendCommand("C_SetGD:" + convertToText(idx) + ',' + convertToText(dir) + "\r\n") == "OK") { }
    }

	/**
	 * 设置角色运动方向。
	*/
    //% blockId=iWall_characterSetMotionDirect block="%char|Set Motion Direct%dir"
    //% weight=218
    //% group="角色"
    //% inlineInputMode=inline
    //% dir.fieldEditor="gridpicker" dir.fieldOptions.columns=2
    export function iWall_characterSetMotionDirect(char: Character, dir: MOTIONDIRECT): void {
        let idx = charactors.indexOf(char);
        if (idx == -1) return;
        
        char.motionDirect = dir;
        if (sendCommand("C_SetMD:" + convertToText(idx) + ',' + convertToText(dir) + "\r\n") == "OK") { }
    }

	/**
	 * 角色设置位置。
	*/
    //% blockId=iWall_characterSetXY block="%char|Move to X%x|Y%y"
    //% weight=217
    //% group="角色"
    //% inlineInputMode=inline
    export function iWall_characterSetXY(char: Character, x: number, y: number): void {
        let idx = charactors.indexOf(char);
        if (idx == -1) return;
        
        char.x = x;
        char.y = y;

        if (sendCommand(
            "C_XY:" +
            convertToText(idx) + ',' +
            convertToText(char.x) + ',' +
            convertToText(char.y) + "\r\n") == "OK") { }
    }

	/**
	 * 角色设置单坐标位置。
	*/
    //% blockId=iWall_characterSetAxis block="%char|Set%axis%n"
    //% weight=216
    //% group="角色"
    //% inlineInputMode=inline
    //% axis.fieldEditor="gridpicker"
     export function iWall_characterSetAxis(char: Character, axis: AXIS, n: number): void {
        let idx = charactors.indexOf(char);
        if (idx == -1) return;
        
        if (axis == AXIS.X) char.x = n;
        else char.y = n;
            
        if (sendCommand(
            "C_XY:" +
            convertToText(idx) + ',' +
            convertToText(char.x) + ',' +
            convertToText(char.y) + "\r\n") == "OK") { }
    }

	/**
	 * 角色设置位置偏移。
	*/
    //% blockId=iWall_characterSetXYOffset block="%char|Offset X%x|Y%y"
    //% weight=215
    //% group="角色"
    //% inlineInputMode=inline
    export function iWall_characterSetXYOffset(char: Character, x: number, y: number): void {
        let idx = charactors.indexOf(char);
        if (idx == -1) return;
        
        char.x += x;
        char.y += y;

        if (sendCommand(
            "C_XY:" +
            convertToText(idx) + ',' +
            convertToText(char.x) + ',' +
            convertToText(char.y) + "\r\n") == "OK") { }
    }

	/**
	 * 角色设置位置偏移。
	*/
    //% blockId=iWall_characterSetAxisOffset block="%char|Set%axis|Offset%n"
    //% weight=214
    //% group="角色"
    //% inlineInputMode=inline
    //% axis.fieldEditor="gridpicker"
    export function iWall_characterSetAxisOffset(char: Character, axis: AXIS, n: number): void {
        let idx = charactors.indexOf(char);
        if (idx == -1) return;
        
        if (axis == AXIS.X) char.x += n;
        else char.y += n;

        if (sendCommand(
            "C_XY:" +
            convertToText(idx) + ',' +
            convertToText(char.x) + ',' +
            convertToText(char.y) + "\r\n") == "OK") { }
    }

	/**
	 * 获得角色坐标。
	*/
    //% blockId=iWall_characterGetXY block="Get%char|%asix"
    //% weight=213
    //% group="角色"
    //% inlineInputMode=inline
    //% axis.fieldEditor="gridpicker"
    export function iWall_characterGetXY(char: Character, axis: AXIS): number {
        return axis == AXIS.X ? char.x : char.y;
    }

	/**
	 * 获得角色图形方向。
	*/
    //% blockId=iWall_characterGetGraphDirect block="Get%char|Graph Direct"
    //% weight=212
    //% group="角色"
    //% inlineInputMode=inline
    export function iWall_characterGetGraphDirect(char: Character): GRAPHDIRECT {
        return char.graphDirect;
    }

	/**
	 * 图形方向。
	*/
    //% blockId=iWall_GraphDirect block="%dir"
    //% weight=211
    //% group="角色"
    //% inlineInputMode=inline
    export function iWall_GraphDirect(dir: GRAPHDIRECT): GRAPHDIRECT {
        return dir;
    }

	/**
	 * 获得角色运动方向。
	*/
    //% blockId=iWall_characterGetMotionDirect block="Get%char|Motion Direct"
    //% weight=210
    //% group="角色"
    //% inlineInputMode=inline
    export function iWall_characterGetMotionDirect(char: Character): MOTIONDIRECT {
        return char.motionDirect;
    }

	/**
	 * 运动方向。
	*/
    //% blockId=iWall_MotionDirect block="%dir"
    //% weight=209
    //% group="角色"
    //% inlineInputMode=inline
    export function iWall_MotionDirect(dir: MOTIONDIRECT): MOTIONDIRECT {
        return dir;
    }

	/**
	 * 角色设置可见。
	*/
    //% blockId=iWall_characterSetVisible block="%char|%state"
    //% weight=208
    //% group="角色"
    //% inlineInputMode=inline
    //% state.fieldEditor="gridpicker"
    export function iWall_characterSetVisible(char: Character, state: VISIBILITY): void {
        let idx = charactors.indexOf(char);
        if (idx == -1) return;
        
        if (sendCommand(
            "C_Vis:" + convertToText(idx) + ',' + convertToText(state) + "\r\n") == "OK") { }
    }

	/**
	 * 角色设置图层。
	*/
    //% blockId=iWall_characterSetLayer block="%char|Set Layer to %layer"
    //% weight=207
    //% group="角色"
    //% inlineInputMode=inline
    //% state.fieldEditor="gridpicker"
    export function iWall_characterSetLayer(char: Character, layer: LAYER_MODE): void {
        let idx = charactors.indexOf(char);
        if (idx == -1) return;
        
        let new_idx = 0;
        switch (layer) {
            case LAYER_MODE.TOP: if (idx < charactors.length - 1)  new_idx = charactors.length - 1; break;
            case LAYER_MODE.PREVIOUS: if (idx < charactors.length - 1)  new_idx = idx + 1; break;
            case LAYER_MODE.LATTER: if (idx > 0) new_idx = idx - 1; break;
            case LAYER_MODE.BOTTOM: if (idx > 0) new_idx = 0; break;
        }
        charactors.splice(idx, 1);
        charactors.insertAt(new_idx, char);

        if (sendCommand(
            "C_Idx:" + convertToText(idx) + ',' + convertToText(new_idx) + "\r\n") == "OK") { }
    }

	/**
	 * 角色设置碰到边界处理方法。
	*/
    //% blockId=iWall_characterSetEdgeMode block="%char|Edge Mode%mode"
    //% weight=206
    //% group="角色"
    //% inlineInputMode=inline
    export function iWall_characterSetEdgeMode(char: Character, mode: EDGE_MODE): void {
        let idx = charactors.indexOf(char);
        if (idx == -1) return;
        
        char.edgeMode = mode;

        if (sendCommand("C_EdgeMode:" + convertToText(idx) + ',' + convertToText(mode) + "\r\n") == "OK") { }
    }

	/**
	 * 角色反转。
	*/
    //% blockId=iWall_characterFlip block="%char|Flip%mode"
    //% weight=205
    //% group="角色"
    //% inlineInputMode=inline
    export function iWall_characterFlip(char: Character, mode: FLIP): void {
        let idx = charactors.indexOf(char);
        if (idx == -1) return;
        
        if (sendCommand("C_Flp:" + convertToText(idx) + ',' + convertToText(mode) + "\r\n") == "OK") { }
    }

	/**
	 * 角色设置碰撞反转方式。
	*/
    //% blockId=iWall_characterSetFlipMode block="%char|Set Flip Mode%mode"
    //% weight=204
    //% group="角色"
    //% inlineInputMode=inline
    export function iWall_characterSetFlipMode(char: Character, mode: FLIP_MODE): void {
        let idx = charactors.indexOf(char);
        if (idx == -1) return;
        
        if (sendCommand("C_FlipMode:" + convertToText(idx) + ',' + convertToText(mode) + "\r\n") == "OK") { }
    }

	/**
	 * 角色与角色是否碰撞。
	*/
    //% blockId=iWall_characterGetCharsCollision block="Get %char1|to%char2|Collision"
    //% weight=203
    //% group="角色"
    //% inlineInputMode=inline
    export function iWall_characterGetCharsCollision(char1: Character, char2: Character): boolean {
        let c1_new_width = Math.floor(char1.graphDirect / 2) ? char1.height : char1.width
        let c1_new_height = Math.floor(char1.graphDirect / 2) ? char1.width : char1.height
        let c2_new_width = Math.floor(char2.graphDirect / 2) ? char2.height : char2.width
        let c2_new_height = Math.floor(char2.graphDirect / 2) ? char2.width : char2.height

        let c1_left_x = char1.x - Math.floor((c1_new_width - 1) / 2)
        let c1_up_y = char1.y - Math.floor((c1_new_height - 1) / 2)
        let c1_right_x = char1.x + Math.floor(c1_new_width / 2)
        let c1_down_y = char1.y + Math.floor(c1_new_height / 2)

        let c2_left_x = char2.x - Math.floor((c2_new_width - 1) / 2)
        let c2_up_y = char2.y - Math.floor((c2_new_height - 1) / 2)
        let c2_right_x = char2.x + Math.floor(c2_new_width / 2)
        let c2_down_y = char2.y + Math.floor(c2_new_height / 2)

        if ((c1_left_x <= c2_right_x) &&
            (c1_right_x >= c2_left_x) &&
            (c1_up_y <= c2_down_y) &&
            (c1_down_y >= c2_up_y)) {
            return true;
        }
        return false
    }

	/**
	 * 角色与角色间的距离。
	*/
    //% blockId=iWall_characterGetCharsDistance block="Get %char1|to%char2|Distance"
    //% weight=202
    //% group="角色"
    //% inlineInputMode=inline
    export function iWall_characterGetCharsDistance(char1: Character, char2: Character): number {
        let dx = char1.x - char2.x;
        let dy = char1.y - char2.y;
        return Math.round(Math.sqrt(dx * dx + dy * dy));
    }

	/**
	 * 角色与边界间的距离。
	*/
    //% blockId=iWall_characterGetCharToEdgeDistance block="Get %char|to%edge|Edge Distance"
    //% weight=201
    //% group="角色"
    //% inlineInputMode=inline
    //% edge.fieldEditor="gridpicker"
    export function iWall_characterGetCharToEdgeDistance(char: Character, edge: DIRECT): number {
        switch (edge) {
            case DIRECT.UP:
                return char.y + 1;
            case DIRECT.DOWN:
                return MATRIX_HEIGHT - char.y;
            case DIRECT.LEFT:
                return char.x + 1;
            case DIRECT.RIGHT:
                return MATRIX_WIDTH - char.x;
        }
    }



	/**
	 * 设置背景。
	*/
    //% blockId=iWall_backSet block="Set Background %name"
    //% weight=202
    //% group="背景"
    //% inlineInputMode=inline
    //% name.fieldEditor="gridpicker"
    export function iWall_backSet(name: backgroundType.NAME): void {
        if (sendCommand("B_Set:" + convertToText(backgroundType.info[name][backgroundType.NUMBER]) + "\r\n") == "OK") { }
    }

	/**
	 * 背景移动。
     * @param n the number of step to move, eg: 1, -1
	*/
    //% blockId=iWall_backMove block="Background Move%n|Step to %dir"
    //% weight=201
    //% group="背景"
    //% n.min=1 n.max=33
    //% inlineInputMode=inline
    //% dir.fieldEditor="gridpicker"
    export function iWall_backMove(n: number, dir: MOTIONDIRECT): void {
        if (sendCommand("B_Mov:" + convertToText(n) + ',' + convertToText(dir) + "\r\n") == "OK") { }
    }

	/**
	 * 背景自动移动。 
     * @param ms the interval of move, eg: 300, 100
	*/
    //% blockId=iWall_backAutoMove block="Background Move 1 Step per%ms|ms to %dir"
    //% weight=200
    //% group="背景"
    //% inlineInputMode=inline
    //% dir.fieldEditor="gridpicker"
    export function iWall_backAutoMove(ms: number, dir: MOTIONDIRECT): void {
        if (sendCommand("B_AutoMove:" + convertToText(ms) + ',' + convertToText(dir) + "\r\n") == "OK") { }
    }



    /**
	 * iWall的传感器单元初始化，需要放在“当开机时”中。
	*/
    //% blockId=iWall_SensorInit block="iWall Sensor Init |%sensor|"
    //% weight=131
    //% group="传感器"
    //% sensor.fieldEditor="gridpicker" sensor.fieldOptions.columns=3
    //% sensor.fieldOptions.tooltips="false"
    export function iWall_SensorInit(sensor: SENSOR): void {
        if (sendCommand("S_Init:" + convertToText(sensor) + "\r\n") == "OK") { }
    }

	/**                              
	 * iWall的传感器数据获取。
	*/
    //% blockId=iWall_SensorGet block="iWall Sensor Get |%sensor|"
    //% weight=130
    //% group="传感器"
    //% sensor.fieldEditor="gridpicker" sensor.fieldOptions.columns=3
    //% sensor.fieldOptions.tooltips="false"
    export function iWall_SensorGet(sensor: SENSOR_DATA): number {
        let idx = sensor;
        let data = 0;
        if (sensor == SENSOR_DATA.HUMI) idx = SENSOR_DATA.TEMP;
        if (sensor == SENSOR_DATA.COLOR_G || sensor == SENSOR_DATA.COLOR_B) idx = SENSOR_DATA.COLOR_R;
        let tmp_str = sendCommand("S_Get:" + convertToText(idx) + "\r\n");
        if (tmp_str.charAt(0) == 'O' && tmp_str.charAt(1) == 'K') {
            let len = 0;
            let tmp_char;
            if (sensor == SENSOR_DATA.HUMI || sensor == SENSOR_DATA.COLOR_G) {
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
            } else if (sensor == SENSOR_DATA.COLOR_B) {
                let i = 0;
                let j = 0;
                for (j = 0; j < 2; j++) {
                    for (; i < tmp_str.length - 4; i++) {
                        tmp_char = tmp_str.charAt(i + 3)
                        if (tmp_char == ',') {
                            break;
                        }
                    }
                    i++
                }
                i--
                for (; len < tmp_str.length - 4; len++) {
                    tmp_char = tmp_str.charAt(len + 4 + i)
                    if (!((tmp_char >= '-') && (tmp_char <= '9') && (tmp_char != '/'))) {
                        break;
                    }
                }
                data = parseFloat(tmp_str.substr(4 + i, len))
            } else {
                for (; len < tmp_str.length - 4; len++) {
                    tmp_char = tmp_str.charAt(len + 3)
                    if (!((tmp_char >= '-') && (tmp_char <= '9') && (tmp_char != '/'))) {
                        break;
                    }
                }
                data = parseFloat(tmp_str.substr(3, len))
            }
        }
        return data;
    }

	// /**                              
	//  * iWall点阵屏显示，使用绘画功能之后（如画直线），需要使用该函数来更新显示内容。
	// */
    // //% blockId=iWall_LEDMatrixShow block="iWall LED Matrix Show"
    // //% weight=106
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
    //% weight=105
    //% group="绘图"
    export function iWall_LEDMatrixClear(): void {
        if (sendCommand("P_Clr\r\n") == "OK") { }
    }

    /** 
     * 设置 红、绿、蓝 三个颜色的分量
     */
    //% weight=104
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
    //% weight=103
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
            "P_Dot:" +
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
    //% weight=102
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
            "P_Lin:" +
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
    //% weight=101
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
            "P_Rct:" +
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
     * iWall点阵屏画布移动
	 * @param num [1-34] ; eg: 1, 25
     */
    //% weight=100
    //% blockId=iWall_LEDMatrixShift block="iWall Shift Direct|%dir| Number|%num|"
    //% group="绘图"
    //% inlineInputMode=inline
    export function iWall_LEDMatrixShift(dir: DIRECT, num: number): void {
        if (sendCommand(
            "P_Shift:" +
            convertToText(dir) + ',' +
            convertToText(num) + ',' +
            "\r\n") == "OK") { }
    }


    export class TextFrame {
        x: number;
        y: number;
        width: number;
        font: FONT;

        constructor(x: number, y: number, font: FONT, width: number) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.font = font;
        }
    }

    let TextFrames: TextFrame[] = [];

    /**
     * iWall点阵屏创建文本框
	 * @param width [1-34] ; eg: 10, 25
     */
    //% x.min=0 x.max=33
    //% y.min=0 y.max=29
    //% weight=90
    //% blockId=iWall_createTextFrame block="iWall Create Text Frame X|%x|Y|%y|Font|%font|width|%width"
    //% group="文字"
    //% inlineInputMode=inline
    export function iWall_createTextFrame(x: number, y: number, font: FONT, width: number): TextFrame {
        if (width + x > 34) {
            width = 34 - x;
        }

        let txt = new TextFrame(x, y, font, width);
        TextFrames.push(txt);
        
        if (sendCommand(
            "T_New:" +
            convertToText(x) + ',' +
            convertToText(y) + ',' +
            convertToText(font) + ',' +
            convertToText(width) + "\r\n") == "OK") { }
        
        return txt;
    }

    /**
     * iWall点阵屏文本框设置位置
     */
    //% x.min=0 x.max=33
    //% y.min=0 y.max=29
    //% weight=89
    //% blockId=iWall_textSetXY block="iWall Set Text X|%x|Y|%y"
    //% group="文字"
    //% inlineInputMode=inline
    export function iWall_textSetXY(txt: TextFrame, x: number, y: number): void {
        let idx = TextFrames.indexOf(txt);
        if (idx == -1) return;
        
        if (sendCommand(
            "T_XY:" +
            convertToText(idx) + ',' +
            convertToText(x) + ',' +
            convertToText(y) + "\r\n") == "OK") { }
    }

    /**
     * iWall点阵屏文本框设置文字
	 * @param rgb eg: 0xFFFFFF
     */
    //% weight=88
    //% rgb.shadow="colorNumberPicker"
    //% blockId=iWall_textSetText block="iWall Set Text Frame|%txt|String|%str|Color|%rgb"
    //% group="文字"
    //% inlineInputMode=inline
    export function iWall_textSetText(txt: TextFrame, str: string, rgb: number): void {
        let r = rgb >> 16;
        let g = (rgb >> 8) & 0xFF;
        let b = (rgb) & 0xFF;

        let idx = TextFrames.indexOf(txt);
        if (idx == -1) return;
        
        if (sendCommand(
            "T_Set:" +
            convertToText(idx) + ',\"' +
            str + "\"," +
            convertToText(r) + ',' +
            convertToText(g) + ',' +
            convertToText(b) + "\r\n") == "OK") { }
    }



    /**
     * 播放背景音乐
     */
    //% weight=74
    //% blockId=iWall_musicBackPlay block="Play Back Music%name"
    //% group="音乐"
    //% inlineInputMode=inline
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=5
    export function iWall_musicBackPlay(name: backMusicType.NAME): void {
        if (sendCommand("M_Play:" + convertToText(backMusicType.info[name][backMusicType.NUMBER]) + "\r\n") == "OK") { }
    }

    /**
     * 暂停背景音乐
     */
    //% weight=73
    //% blockId=iWall_musicBackPause block="Pause Back Music"
    //% group="音乐"
    //% inlineInputMode=inline
    export function iWall_musicBackPause(): void {
        if (sendCommand("M_Pause" + "\r\n") == "OK") { }
    }

    /**
     * 停止背景音乐
     */
    //% weight=72
    //% blockId=iWall_musicBackStop block="Stop Back Music"
    //% group="音乐"
    //% inlineInputMode=inline
    export function iWall_musicBackStop(): void {
        if (sendCommand("M_Stop" + "\r\n") == "OK") { }
    }

    /**
     * 继续背景音乐
     */
    //% weight=71
    //% blockId=iWall_musicBackResume block="Resume Back Music"
    //% group="音乐"
    //% inlineInputMode=inline
    export function iWall_musicBackResume(): void {
        if (sendCommand("M_Resume" + "\r\n") == "OK") { }
    }

    /**
     * 播放音效
     */
    //% weight=70
    //% blockId=iWall_musicSoundPlay block="Play Sound%name"
    //% group="音乐"
    //% inlineInputMode=inline
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=5
    export function iWall_musicSoundPlay(name: soundType.NAME): void {
        if (sendCommand("M_SPlay:" + convertToText(soundType.info[name][soundType.NUMBER]) + "\r\n") == "OK") { }
    }
}

