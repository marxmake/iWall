namespace characterType {
    export const NUMBER = 0;
    export const WIDTH = 1;
    export const HEIGHT = 2;

    export enum NAME {
        //% blockId="ROCKET_WITH_SMALL_FLAME" block="Rocket_With_Small_Flame(9x25)"
        ROCKET_WITH_SMALL_FLAME = 0,
        //% blockId="ROCKET_WITH_BIG_FLAME" block="Rocket_With_Big_Flame(9x25)"
        ROCKET_WITH_BIG_FLAME = 1,
        //% blockId="ROCKET_WITHOUT_FLAME" block="Rocket_Without_Flame(9x20)"
        ROCKET_WITHOUT_FLAME = 2,
        //% blockId="ROCKET_FLAME_SMALL" block="Rocket_Flame_Small(5x6)"
        ROCKET_FLAME_SMALL = 3,
        //% blockId="ROCKET_FLAME_BIG" block="Rocket_Flame_Big(5x6)"
        ROCKET_FLAME_BIG = 4,
        //% blockId="LAUNCH_COUNTDOWN_3" block="Launch_Countdown_3(8x14)"
        LAUNCH_COUNTDOWN_3 = 5,
        //% blockId="LAUNCH_COUNTDOWN_2" block="Launch_Countdown_2(8x14)"
        LAUNCH_COUNTDOWN_2 = 6,
        //% blockId="LAUNCH_COUNTDOWN_1" block="Launch_Countdown_1(8x14)"
        LAUNCH_COUNTDOWN_1 = 7,
        //% blockId="LAUNCH_COUNTDOWN_GO" block="Launch_Countdown_Go(18x14)"
        LAUNCH_COUNTDOWN_GO = 8,
        //% blockId="LAUNCH_BUTTON" block="Launch_Button(7x7)"
        LAUNCH_BUTTON = 9,
        //% blockId="LAUNCH_BUTTON_PRESSED" block="Launch_Button_Pressed(7x7)"
        LAUNCH_BUTTON_PRESSED = 10,
        //% blockId="GAME_WIN" block="Game_Win(18x8)"
        GAME_WIN = 11,
        //% blockId="ROCKET_HEAD" block="Rocket_Head(5x4)"
        ROCKET_HEAD = 12,
        //% blockId="ROCKET_BODY_TOP" block="Rocket_Body_Top(5x4)"
        ROCKET_BODY_TOP = 13,
        //% blockId="ROCKET_BODY_MIDDLE" block="Rocket_Body_Middle(5x6)"
        ROCKET_BODY_MIDDLE = 14,
        //% blockId="ROCKET_BODY_BOTTOM" block="Rocket_Body_Bottom(9x6)"
        ROCKET_BODY_BOTTOM = 15,
        //% blockId="SEPARATE_COUNTDOWN_3" block="Separate_Countdown_3(4x7)"
        SEPARATE_COUNTDOWN_3 = 16,
        //% blockId="SEPARATE_COUNTDOWN_2" block="Separate_Countdown_2(4x7)"
        SEPARATE_COUNTDOWN_2 = 17,
        //% blockId="SEPARATE_COUNTDOWN_1" block="Separate_Countdown_1(4x7)"
        SEPARATE_COUNTDOWN_1 = 18,
        //% blockId="SEPARATE_COUNTDOWN_0" block="Separate_Countdown_0(4x7)"
        SEPARATE_COUNTDOWN_0 = 19,
        //% blockId="SEPARATE_BUTTON" block="Separate_Button(7x7)"
        SEPARATE_BUTTON = 20,
        //% blockId="SEPARATE_BUTTON_PRESSED" block="Separate_Button_Pressed(7x7)"
        SEPARATE_BUTTON_PRESSED = 21,
        //% blockId="SEPARATE_AREA" block="Separate_Area(1x5)"
        SEPARATE_AREA = 22
    }

    export const info = [
        [901, 9, 25],
        [902, 9, 25],
        [903, 9, 20],
        [501, 5, 6],
        [502, 5, 6],
        [801, 8, 14],
        [802, 8, 14],
        [803, 8, 14],
        [1801, 18, 14],
        [701, 7, 7],
        [702, 7, 7],
        [1802, 18, 8],
        [503, 5, 4],
        [504, 5, 4],
        [505, 5, 6],
        [904, 9, 6],
        [401, 4, 7],
        [402, 4, 7],
        [403, 4, 7],
        [404, 4, 7],
        [703, 7, 7],
        [704, 7, 7],
        [101, 1, 5]
    ];

}

namespace backgroundType {
    export const NUMBER = 0;
    export const WIDTH = 1;
    export const HEIGHT = 2;

    export enum NAME {
        //% blockId="ROCKET_LAUNCH_BACKGROUND" block="Rocket_Launch_Background(34x30)"
        ROCKET_LAUNCH_BACKGROUND = 0,
        //% blockId="ROCKET_SEPARATE_BACKGROUND" block="Rocket_Separate_Background(34x30)"
        ROCKET_SEPARATE_BACKGROUND = 1
    }

    export const info = [
        [3401, 34, 30],
        [3402, 34, 30]
    ];
}

namespace backMusicType {
    export const NUMBER = 0;

    export enum NAME {
        //% blockId="ROCKET_LAUNCH_BACKGROUND_MUSIC" block="Rocket_Launch_Background_Music"
        ROCKET_LAUNCH_BACKGROUND_MUSIC = 0
    }

    export const info = [
        [0],
    ];
}

namespace soundType {
    export const NUMBER = 0;

    export enum NAME {
        //% blockId="PRESS_LAUNCH_BUTTON" block="Press_Launch_Button"
        PRESS_LAUNCH_BUTTON = 0,
        //% blockId="BO" block="Bo"
        BO = 1,
        //% blockId="ROCKET_LAUNCH_SUCCESS" block="Rocket_Launch_Success"
        ROCKET_LAUNCH_SUCCESS = 2
    }

    export const info = [
        [0],
        [1],
        [2],
    ];
}