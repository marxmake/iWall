/**
 * 使用此文件来定义自定义函数和图形块。
 * 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
 */


//% weight=3
//% color=#9900CC
//% icon="\uf00a"
//% groups="['Sensors', 'LED Matrix', 'Play Music']"
namespace iWall {

    export enum SENSOR {
        //% blockId="PM2_5" block="PM2.5"
        PM2_5       = 0,
        //% blockId="TEMP_HUMI" block="Temp & Humi"
        TEMP_HUMI   = 1,
        //% blockId="ULTRASONIC" block="Ultrasonic"
        ULTRASONIC  = 2,
        //% blockId="BODY_TEMP" block="body temp"
        BODY_TEMP   = 3,
        //% blockId="RFID" block="RFID"
        RFID        = 4,
        //% blockId="TOUCH_KEY" block="Touch Key"
        TOUCH_KEY   = 5,
        //% blockId="LUMINATION" block="Lumination"
        LUMINATION  = 6,
        //% blockId="COLOR" block="Color"
        COLOR       = 7,
        //% blockId="HEART_RATE" block="Heart Rate"
        HEART_RATE  = 8,
        //% blockId="GESTURE" block="Gesture"
        GESTURE     = 9,
        //% blockId="MAGNET" block="Magnet"
        MAGNET      = 10,
        //% blockId="PRESSURE" block="Pressure"
        PRESSURE    = 11
    }
    
    export enum SENSOR_DATA {
        //% blockId="PM2_5" block="PM2.5"
        PM2_5       = 0,
        //% blockId="TEMP" block="Temp"
        TEMP        = 1,
        //% blockId="HUMI" block="Humi"
        HUMI        = 12,
        //% blockId="ULTRASONIC" block="Ultrasonic"
        ULTRASONIC  = 2,
        //% blockId="BODY_TEMP" block="body temp"
        BODY_TEMP   = 3,
        //% blockId="RFID" block="RFID"
        RFID        = 4,
        //% blockId="TOUCH_KEY" block="Touch Key"
        TOUCH_KEY   = 5,
        //% blockId="LUMINATION" block="Lumination"
        LUMINATION  = 6,
        //% blockId="COLOR" block="Color"
        COLOR       = 7,
        //% blockId="HEART_RATE" block="Heart Rate"
        HEART_RATE  = 8,
        //% blockId="GESTURE" block="Gesture"
        GESTURE     = 9,
        //% blockId="MAGNET" block="Magnet"
        MAGNET      = 10,
        //% blockId="PRESSURE" block="Pressure"
        PRESSURE    = 11
    }
    
    export enum RECT_MODE {
        //% blockId="BORDER" block="Border"
        BORDER  = 0,
        //% blockId="FILL" block="Fill"
        FILL    = 1
    }

    export enum DIRECT {
        //% blockId="LEFT" block="Left"
        LEFT    = 0,
        //% blockId="RIGHT" block="Right"
        RIGHT   = 1,
        //% blockId="UP" block="Up"
        UP      = 2,
        //% blockId="DOWN" block="Down"
        DOWN    = 3
    }
    
	/**
	 * iWall初始化，必须执行该函数，放在所有函数之前执行，建议放入“当开机时”最上位置。
	*/
    //% blockId=iWall_Init block="iWall Init"
    //% weight=200
    //% group=""
    export function iWall_Init(): void {
        serial.redirect(
            SerialPin.P0,
            SerialPin.P1,
            BaudRate.BaudRate115200
        );
        basic.pause(100)
        serial.writeString("Hello, iWall!\r\n");
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
        let tmp_str = "sensor_Init:" + convertToText(sensor) + "\r\n";
        serial.writeString(tmp_str);
        tmp_str = serial.readLine();
        if (tmp_str == "OK") {

        }
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
        let tmp_str = "sensor_Get:" + convertToText(idx) + "\r\n";
        serial.writeString(tmp_str);
        tmp_str = serial.readLine();
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

	/**
	 * WriteData to PinA or PinB
	 * @param pin [0-1] choose PinA or PinB; eg: 0, 1
     * @param value [0-255] pulse of servo; eg: 128, 0, 255
	*/
    //% blockId=WritePin block="Set P |%pin| value |%value|"
    //% weight=75
    //% value.min=0 value.max=255
    //% rgb.shadow="colorNumberPicker"

	/**                              
	 * iWall点阵屏显示，使用绘画功能之后（如画直线），需要使用该函数来更新显示内容。
	*/
    //% blockId=iWall_LEDMatrixShow block="iWall LED Matrix Show"
    //% weight=197
    //% group="点阵屏"
    export function iWall_LEDMatrixShow(): void {
        let tmp_str = "ledMatrix_Show\r\n";
        serial.readString();
        serial.writeString(tmp_str);
        tmp_str = serial.readLine();
        if (tmp_str == "OK") {

        }
    }

	/**                              
	 * iWall点阵屏清空画布，需要清除屏，请再使用点阵显示函数。
	*/
    //% blockId=iWall_LEDMatrixClear block="iWall LED Matrix Clear Canvas"
    //% weight=196
    //% group="点阵屏"
    export function iWall_LEDMatrixClear(): void {
        let tmp_str = "ledMatrix_Clear\r\n";
        serial.readString();
        serial.writeString(tmp_str);
        tmp_str = serial.readLine();
        if (tmp_str == "OK") {

        }
    }

    /** 
     * 设置 红、绿、蓝 三个颜色的分量
     */
    //% weight=195
    //% r.min=0 r.max=255
    //% g.min=0 g.max=255
    //% b.min=0 b.max=255
    //% blockId=iWall_RGB block="red|%r green|%g blue|%b"
    //% group="点阵屏"
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
    //% blockId=iWall_LEDMatrixSetPixel block="iWall Set Pixel X|%x Y|%y Color|%rgb"
    //% group="点阵屏"
    export function iWall_LEDMatrixSetPixel(x: number, y: number, rgb: number): void {
        let r = rgb >> 16;
        let g = (rgb >> 8) & 0xFF;
        let b = (rgb) & 0xFF;

        let tmp_str =
            "ledMatrix_Dot:" +
            convertToText(x) + ',' +
            convertToText(y) + ',' +
            convertToText(r) + ',' +
            convertToText(g) + ',' +
            convertToText(b) + 
            "\r\n";
        serial.readString();
        serial.writeString(tmp_str);
        tmp_str = serial.readLine();
        if (tmp_str == "OK") {

        }
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
    //% group="点阵屏"
    //% inlineInputMode=inline
    export function iWall_LEDMatrixLine(x0: number, y0: number, x1: number, y1: number, rgb: number): void {
        let r = rgb >> 16;
        let g = (rgb >> 8) & 0xFF;
        let b = (rgb) & 0xFF;

        let tmp_str =
            "ledMatrix_Line:" +
            convertToText(x0) + ',' +
            convertToText(y0) + ',' +
            convertToText(x1) + ',' +
            convertToText(y1) + ',' +
            convertToText(r) + ',' +
            convertToText(g) + ',' +
            convertToText(b) + 
            "\r\n";
        serial.readString();
        serial.writeString(tmp_str);
        tmp_str = serial.readLine();
        if (tmp_str == "OK") {

        }
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
    //% group="点阵屏"
    //% inlineInputMode=inline
    export function iWall_LEDMatrixRect(x0: number, y0: number, x1: number, y1: number, rgb: number, mode: RECT_MODE): void {
        let r = rgb >> 16;
        let g = (rgb >> 8) & 0xFF;
        let b = (rgb) & 0xFF;

        let tmp_str =
            "ledMatrix_Rect:" +
            convertToText(x0) + ',' +
            convertToText(y0) + ',' +
            convertToText(x1) + ',' +
            convertToText(y1) + ',' +
            convertToText(r) + ',' +
            convertToText(g) + ',' +
            convertToText(b) + ',' +
            convertToText(mode) + 
            "\r\n";
        serial.readString();
        serial.writeString(tmp_str);
        tmp_str = serial.readLine();
        if (tmp_str == "OK") {

        }
    }

    /**
     * iWall点阵屏绘制矩形
	 * @param num [1-34] ; eg: 1, 25
     */
    //% weight=191
    //% blockId=iWall_LEDMatrixShift block="iWall Shift Direct|%dir| Number|%num|"
    //% group="点阵屏"
    //% inlineInputMode=inline
    export function iWall_LEDMatrixShift(dir: DIRECT, num: number): void {
        let tmp_str =
            "ledMatrix_Shift:" +
            convertToText(dir) + ',' +
            convertToText(num) + ',' +
            "\r\n";
        serial.readString();
        serial.writeString(tmp_str);
        tmp_str = serial.readLine();
        if (tmp_str == "OK") {

        }
    }
}

