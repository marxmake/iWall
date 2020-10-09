function refresh_snake (eat: number) {
    iWall.iWall_LEDMatrixSetPixel(snake_x[0], snake_y[0], 0x00ff00)
    if (eat == 0) {
        iWall.iWall_LEDMatrixSetPixel(snake_x.pop(), snake_y.pop(), 0x000000)
    }
    if (dir == 0) {
        snake_x.unshift(snake_x[0])
        snake_y.unshift(snake_y[0] - 1)
    } else if (dir == 1) {
        snake_x.unshift(snake_x[0])
        snake_y.unshift(snake_y[0] + 1)
    } else if (dir == 2) {
        snake_x.unshift(snake_x[0] - 1)
        snake_y.unshift(snake_y[0])
    } else {
        snake_x.unshift(snake_x[0] + 1)
        snake_y.unshift(snake_y[0])
    }
    iWall.iWall_LEDMatrixSetPixel(snake_x[0], snake_y[0], 0xff0000)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        if (dir != 1) {
            dir = receivedNumber
        }
    } else if (receivedNumber == 1) {
        if (dir != 0) {
            dir = receivedNumber
        }
    } else if (receivedNumber == 2) {
        if (dir != 3) {
            dir = receivedNumber
        }
    } else {
        if (dir != 2) {
            dir = receivedNumber
        }
    }
})
function placeFood () {
    food_flag = 1
    while (food_flag) {
        food_x = randint(0, 33)
        food_y = randint(0, 29)
        food_flag = 0
        for (let index = 0; index <= snake_x.length - 1; index++) {
            if (snake_x[index] == food_x && snake_y[index] == food_y) {
                food_flag = 1
                break;
            }
        }
    }
    iWall.iWall_LEDMatrixSetPixel(food_x, food_y, 0xffffff)
}
function init_snake () {
    iWall.iWall_LEDMatrixClear()
    iWall.iWall_LEDMatrixShow()
    dir = 0
    snake_x = [17, 17]
    snake_y = [15, 16]
    iWall.iWall_LEDMatrixSetPixel(snake_x[0], snake_y[0], 0xff0000)
    iWall.iWall_LEDMatrixSetPixel(snake_x[1], snake_y[1], 0x00ff00)
    placeFood()
}
function decide () {
    if (dir == 0) {
        tmp_x = snake_x[0]
        tmp_y = snake_y[0] - 1
    } else if (dir == 1) {
        tmp_x = snake_x[0]
        tmp_y = snake_y[0] + 1
    } else if (dir == 2) {
        tmp_x = snake_x[0] - 1
        tmp_y = snake_y[0]
    } else {
        tmp_x = snake_x[0] + 1
        tmp_y = snake_y[0]
    }
    if (tmp_x < 0 || tmp_x > 33) {
        return -1
    }
    if (tmp_y < 0 || tmp_y > 29) {
        return -1
    }
    for (let index = 0; index <= snake_x.length - 1; index++) {
        if (tmp_x == snake_x[index] && tmp_y == snake_y[index]) {
            return -1
        }
    }
    if (tmp_x == food_x && tmp_y == food_y) {
        return 1
    }
    return 0
}
let decide_result = 0
let tmp_y = 0
let tmp_x = 0
let food_y = 0
let food_x = 0
let food_flag = 0
let dir = 0
let snake_y: number[] = []
let snake_x: number[] = []
radio.setGroup(88)
iWall.iWall_Init()
init_snake()
basic.forever(function () {
    decide_result = decide()
    if (decide_result == -1) {
        init_snake()
    } else {
        if (decide_result == 1) {
            placeFood()
        }
        refresh_snake(decide_result)
        iWall.iWall_LEDMatrixShow()
        basic.pause(500)
    }
})
