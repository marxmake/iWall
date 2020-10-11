iWall.iWall_Init()
iWall.iWall_createCharacter("name", charactorType.NAME.TEST0, 15, 15, 0)
iWall.iWall_characterMove("name", 3)
iWall.iWall_characterTrun("name", iWall.TURN.LEFT)
iWall.iWall_characterMove("name", 5)
if (iWall.iWall_characterGetDirect("name") == iWall.iWall_direct(iWall.DIRECT.LEFT)) {
    serial.writeLine("left")
}
serial.writeNumber(iWall.iWall_characterGetXY("name", iWall.AXIS.X))
serial.writeLine("")
serial.writeNumber(iWall.iWall_characterGetXY("name", iWall.AXIS.Y))
basic.forever(function () {
	
})
