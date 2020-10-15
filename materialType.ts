namespace characterType {
    export const NUMBER = 0;
    export const WIDTH = 1;
    export const HEIGHT = 2;

    export enum NAME {
        //% blockId="LAUNCH_COUNTDOWN_3" block="Launch_Countdown_3(8x14)"
        LAUNCH_COUNTDOWN_3 = 0,
        //% blockId="LAUNCH_COUNTDOWN_2" block="Launch_Countdown_2(8x14)"
        LAUNCH_COUNTDOWN_2 = 1,
        //% blockId="LAUNCH_COUNTDOWN_1" block="Launch_Countdown_1(8x14)"
        LAUNCH_COUNTDOWN_1 = 2,
        //% blockId="LAUNCH_GO" block="Launch_Go(18x14)"
        LAUNCH_GO = 3,
        //% blockId="SEPARATE_COUNTDOWN_3" block="Separate_Countdown_3(4x7)"
        SEPARATE_COUNTDOWN_3 = 4,
        //% blockId="SEPARATE_COUNTDOWN_2" block="Separate_Countdown_2(4x7)"
        SEPARATE_COUNTDOWN_2 = 5,
        //% blockId="SEPARATE_COUNTDOWN_1" block="Separate_Countdown_1(4x7)"
        SEPARATE_COUNTDOWN_1 = 6,
        //% blockId="SCORE_0" block="Score_0(3x5)"
        SCORE_0 = 7,
        //% blockId="SCORE_1" block="Score_1(3x5)"
        SCORE_1 = 8,
        //% blockId="SCORE_2" block="Score_2(3x5)"
        SCORE_2 = 9,
        //% blockId="SCORE_3" block="Score_3(3x5)"
        SCORE_3 = 10,
        //% blockId="SCORE_4" block="Score_4(3x5)"
        SCORE_4 = 11,
        //% blockId="SCORE_5" block="Score_5(3x5)"
        SCORE_5 = 12,
        //% blockId="SCORE_6" block="Score_6(3x5)"
        SCORE_6 = 13,
        //% blockId="SCORE_7" block="Score_7(3x5)"
        SCORE_7 = 14,
        //% blockId="SCORE_8" block="Score_8(3x5)"
        SCORE_8 = 15,
        //% blockId="SCORE_9" block="Score_9(3x5)"
        SCORE_9 = 16,
        //% blockId="SYMBOL_ADD" block="Symbol(3x3)"
        SYMBOL_ADD = 17,
        //% blockId="ROCKET_HEAD" block="Rocket_Head(5x4)"
        ROCKET_HEAD = 18,
        //% blockId="ROCKET_BODY_1" block="Rocket_Body_1(5x4)"
        ROCKET_BODY_1 = 19,
        //% blockId="ROCKET_BODY_2" block="Rocket_Body_2(5x6)"
        ROCKET_BODY_2 = 20,
        //% blockId="ROCKET_BODY_3" block="Rocket_Body_3(9x6)"
        ROCKET_BODY_3 = 21,
        //% blockId="ROCKET_FLAME_1" block="Rocket_Flame_1(5x4)"
        ROCKET_FLAME_1 = 22,
        //% blockId="ROCKET_FLAME_2" block="Rocket_Flame_2(5x6)"
        ROCKET_FLAME_2 = 23,
        //% blockId="SEPARATE_BUTTON" block="Separate_Button(7x7)"
        SEPARATE_BUTTON = 24,
        //% blockId="SEPARATE_BUTTON_PRESSED" block="Separate_Button_Pressed(7x7)"
        SEPARATE_BUTTON_PRESSED = 25,
        //% blockId="SEPARATE_AREA" block="Separate_Area(1x5)"
        SEPARATE_AREA = 26,
        //% blockId="GAME_WIN" block="Game_Win(18x8)"
        GAME_WIN = 27
    }

    export const info = [
        [800, 8, 14],
        [801, 8, 14],
        [802, 8, 14],
        [1800, 18, 14],
        [400, 4, 7],
        [401, 4, 7],
        [402, 4, 7],
        [300, 3, 5],
        [301, 3, 5],
        [302, 3, 5],
        [303, 3, 5],
        [304, 3, 5],
        [305, 3, 5],
        [306, 3, 5],
        [307, 3, 5],
        [308, 3, 5],
        [309, 3, 5],
        [310, 3, 3],
        [500, 5, 4],
        [501, 5, 4],
        [502, 5, 6],
        [900, 9, 6],
        [503, 5, 4],
        [504, 5, 6],
        [700, 7, 7],
        [701, 7, 7],
        [100, 1, 5],
        [1801, 18, 4]
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
        [0, 34, 30],
        [1, 34, 30]
    ];
}

namespace backMusicType {
    export const NUMBER = 0;

    export enum NAME {
        //% blockId="TEST0" block="Test0"
        TEST0 = 0,
        //% blockId="TEST1" block="Test1"
        TEST1 = 1,
        //% blockId="TEST2" block="Test2"
        TEST2 = 2,
        //% blockId="TEST3" block="Test3"
        TEST3 = 3,
        //% blockId="TEST4" block="Test4"
        TEST4 = 4
    }

    export const info = [
        [0],
        [1],
        [2],
        [3],
        [4],
    ];
}

namespace soundType {
    export const NUMBER = 0;

    export enum NAME {
        //% blockId="TEST0" block="Test0"
        TEST0 = 0,
        //% blockId="TEST1" block="Test1"
        TEST1 = 1,
        //% blockId="TEST2" block="Test2"
        TEST2 = 2,
        //% blockId="TEST3" block="Test3"
        TEST3 = 3,
        //% blockId="TEST4" block="Test4"
        TEST4 = 4
    }

    export const info = [
        [0],
        [1],
        [2],
        [3],
        [4],
    ];
}