input.onButtonPressed(Button.A, function () {
    serial.writeLine("x:" + iWall.iWall_characterGetXY(c1, iWall.AXIS.X))
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("T2:" + iWall.iWall_GetTimerValue(t2))
    iWall.iWall_deleteCharacter(c1)
})
let t2: iWall.Timer = null
let c1: iWall.Character = null
iWall.iWall_Init()
c1 = iWall.iWall_createCharacter(characterType.NAME.TEST0, 0, 0)
iWall.iWall_characterSetGraph(null, characterType.NAME.TEST0)
basic.forever(function () {
    if (iWall.iWall_characterGetCharsCollision(c1, c1)) {
    	
    }
    serial.writeLine("Timer2:" + iWall.iWall_GetTimerValue(t2))
    basic.pause(1000)
})
