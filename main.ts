input.onButtonPressed(Button.A, function () {
    serial.writeLine("x:" + iWall.iWall_characterGetXY(c1, iWall.AXIS.X))
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("T2:" + iWall.iWall_GetTimerValue(t2))
    iWall.iWall_deleteCharacter(c1)
})
let c1: iWall.Character = null
let t2: iWall.Timer = null
iWall.iWall_Init()
let t1 = iWall.iWall_CreateTimer()
t2 = iWall.iWall_CreateTimer()
c1 = iWall.iWall_createCharacter(characterType.NAME.TEST0, 0, 0)
basic.forever(function () {
    serial.writeLine("Timer1:" + iWall.iWall_GetTimerValue(t1))
    serial.writeLine("Timer2:" + iWall.iWall_GetTimerValue(t2))
    basic.pause(1000)
})
