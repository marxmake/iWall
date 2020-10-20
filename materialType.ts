namespace characterType {
    export const NUMBER = 0;
    export const WIDTH = 1;
    export const HEIGHT = 2;

    export enum NAME {
        //% blockId="ROCKET_WITH_FLAME" block="Rocket_With_Flame(9x25)"
        ROCKET_WITH_FLAME = 0,
        //% blockId="ROCKET_WITHOUT_FLAME" block="Rocket_Without_Flame(9x20)"
        ROCKET_WITHOUT_FLAME = 1,
        //% blockId="ROCKET_FLAME" block="Rocket_Flame(5x6)"
        ROCKET_FLAME = 2,
        //% blockId="LAUNCH_COUNTDOWN_3" block="Launch_Countdown_3(8x14)"
        LAUNCH_COUNTDOWN_3 = 3,
        //% blockId="LAUNCH_COUNTDOWN_2" block="Launch_Countdown_2(8x14)"
        LAUNCH_COUNTDOWN_2 = 4,
        //% blockId="LAUNCH_COUNTDOWN_1" block="Launch_Countdown_1(8x14)"
        LAUNCH_COUNTDOWN_1 = 5,
        //% blockId="LAUNCH_COUNTDOWN_GO" block="Launch_Countdown_Go(18x14)"
        LAUNCH_COUNTDOWN_GO = 6,
        //% blockId="ROCKET_BUTTON" block="Rocket_Button(7x7)"
        ROCKET_BUTTON = 7,
        //% blockId="GAME_WIN" block="Game_Win(18x8)"
        GAME_WIN = 8,
        //% blockId="ROCKET_HEAD" block="Rocket_Head(5x4)"
        ROCKET_HEAD = 9,
        //% blockId="ROCKET_BODY_TOP" block="Rocket_Body_Top(5x4)"
        ROCKET_BODY_TOP = 10,
        //% blockId="ROCKET_BODY_MIDDLE" block="Rocket_Body_Middle(5x6)"
        ROCKET_BODY_MIDDLE = 11,
        //% blockId="ROCKET_BODY_BOTTOM" block="Rocket_Body_Bottom(9x6)"
        ROCKET_BODY_BOTTOM = 12,
        //% blockId="SEPARATE_COUNTDOWN_3" block="Separate_Countdown_3(4x7)"
        SEPARATE_COUNTDOWN_3 = 13,
        //% blockId="SEPARATE_COUNTDOWN_2" block="Separate_Countdown_2(4x7)"
        SEPARATE_COUNTDOWN_2 = 14,
        //% blockId="SEPARATE_COUNTDOWN_1" block="Separate_Countdown_1(4x7)"
        SEPARATE_COUNTDOWN_1 = 15,
        //% blockId="SEPARATE_COUNTDOWN_0" block="Separate_Countdown_0(4x7)"
        SEPARATE_COUNTDOWN_0 = 16,
        //% blockId="SEPARATE_AREA" block="Separate_Area(1x5)"
        SEPARATE_AREA = 17
    }

    export const info = [
        [901, 9, 25],
        [902, 9, 25],
        [501, 5, 6],
        [801, 8, 14],
        [802, 8, 14],
        [803, 8, 14],
        [1801, 18, 14],
        [701, 7, 7],
        [1802, 18, 8],
        [502, 5, 4],
        [503, 5, 4],
        [504, 5, 6],
        [903, 9, 6],
        [401, 4, 7],
        [402, 4, 7],
        [403, 4, 7],
        [404, 4, 7],
        [101, 1, 5]
    ];

}

namespace backgroundType {
    export const NUMBER = 0;
    export const WIDTH = 1;
    export const HEIGHT = 2;

    export enum NAME {
        //% blockId="ROCKET_LAUNCH" block="Rocket_Launch(34x30)"
        ROCKET_LAUNCH = 0,
        //% blockId="ROCKET_SEPARATE" block="Rocket_Separate(34x30)"
        ROCKET_SEPARATE = 1
    }

    export const info = [
        [3401, 34, 30],
        [3402, 34, 30]
    ];

}

namespace backMusicType {
    export const NUMBER = 0;

    export enum NAME {
        //% blockId="ROCKET_LAUNCH" block="Rocket_Launch"
        ROCKET_LAUNCH = 0,
        //% blockId="ROCKED_SEPARATE" block="Rocket_Separate"
        ROCKED_SEPARATE = 1
    }

    export const info = [
        [0],
        [1]
    ];
}

namespace soundType {
    export const NUMBER = 0;

    export enum NAME {
        //% blockId="PUSH_BUTTON" block="Push_Button"
        PUSH_BUTTON = 0,
        //% blockId="BO" block="Bo"
        BO = 1,
        //% blockId="ROCKET_LAUNCH_SUCCESS" block="Rocket_Launch_Success"
        ROCKET_LAUNCH_SUCCESS = 2,
        //% blockId="ROCKET_HEAD_LAUNCH" block="Rocket_Head_Launch"
        ROCKET_HEAD_LAUNCH = 3,
        //% blockId="MAGIC_SOUND" block="Magic_Sound"
        MAGIC_SOUND = 4,
        //% blockId="GAME_WIN" block="Game_Win"
        GAME_WIN = 5
    }

    export const info = [
        [0],
        [1],
        [2],
        [3],
        [4],
        [5]
    ];
}