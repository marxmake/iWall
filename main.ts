iWall.iWall_Init()
iWall.iWall_SensorInit(iWall.SENSOR.COLOR)
let TXT1 = iWall.iWall_createTextFrame(0, 14, iWall.FONT.ASCII_5X5, 20)
basic.forever(function () {
    iWall.iWall_textSetText(TXT1, convertToText(iWall.iWall_SensorGet(iWall.SENSOR_DATA.COLOR_B)), 0xff0000)
    basic.pause(500)
})
