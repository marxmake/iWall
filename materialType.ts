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
        SEPARATE_AREA = 17,
        //% blockId="GAME_TRY_AGAIN" block="Game_Try_Again(26x13)"
        GAME_TRY_AGAIN = 18,
        //% blockId="EXPLODE" block="Explode(9x9)"
        EXPLODE = 19,
        //% blockId="BIG_SHOT" block="Gig_Shot(11x4)"
        BIG_SHOT = 20,
        //% blockId="AIRCRAFT_1" block="Aircraft_1(11x8)"
        AIRCRAFT_1 = 21,
        //% blockId="AIRCRAFT_2" block="Aircraft_2(11x8)"
        AIRCRAFT_2 = 22,
        //% blockId="AIRCRAFT_3" block="Aircraft_3(10x9)"
        AIRCRAFT_3 = 23,
        //% blockId="AIRCRAFT_4" block="Aircraft_4(9x8)"
        AIRCRAFT_4 = 24,
        //% blockId="AIRCRAFT_5" block="Aircraft_5(9x8)"
        AIRCRAFT_5 = 25,
        //% blockId="AIRCRAFT_6" block="Aircraft_6(9x9)"
        AIRCRAFT_6 = 26,
        //% blockId="DINOSAUR_LEAN_1" block="Dinosaur_Lean_1(12x7)"
        DINOSAUR_LEAN_1 = 27,
        //% blockId="DINOSAUR_LEAN_2" block="Dinosaur_Lean_2(14x7)"
        DINOSAUR_LEAN_2 = 28,
        //% blockId="DINOSAUR_1" block="Dinosaur_1(11x9)"
        DINOSAUR_1 = 29,
        //% blockId="DINOSAUR_2" block="Dinosaur_2(10x9)"
        DINOSAUR_2 = 30,
        //% blockId="CACTUS_1" block="Cactus_1(5x10)"
        CACTUS_1 = 31,
        //% blockId="CACTUS_2" block="Cactus_2(5x11)"
        CACTUS_2 = 32,
        //% blockId="CACTUS_3" block="Cactus_3(5x10)"
        CACTUS_3 = 33,
        //% blockId="CACTUS_4" block="Cactus_4(5x8)"
        CACTUS_4 = 34,
        //% blockId="CACTUS_5" block="Cactus_5(5x11)"
        CACTUS_5 = 35,
        //% blockId="SMALL_SHOT" block="Small_Shot(7x1)"
        SMALL_SHOT = 36,
        //% blockId="PTEROSAUR_1" block="Pterosaur_1(11x10)"
        PTEROSAUR_1 = 37,
        //% blockId="PTEROSAUR_2" block="Pterosaur_2(12x10)"
        PTEROSAUR_2 = 38,
        //% blockId="MIDDLE_SHOT" block="Middle_Shot(7x3)"
        MIDDLE_SHOT = 39,
        //% blockId="MARBLE_BALL" block="Marble_Ball(2x2)"
        MARBLE_BALL = 40,
        //% blockId="PEN" block="Pen(3x3)"
        PEN = 41,
        //% blockId="WHITE_NUMBER_0" block="White_Number_0(4x7)"
        WHITE_NUMBER_0 = 42,
        //% blockId="WHITE_NUMBER_1" block="White_Number_1(4x7)"
        WHITE_NUMBER_1 = 43,
        //% blockId="WHITE_NUMBER_2" block="White_Number_2(4x7)"
        WHITE_NUMBER_2 = 44,
        //% blockId="WHITE_NUMBER_3" block="White_Number_3(4x7)"
        WHITE_NUMBER_3 = 45,
        //% blockId="WHITE_NUMBER_4" block="White_Number_4(4x7)"
        WHITE_NUMBER_4 = 46,
        //% blockId="WHITE_NUMBER_5" block="White_Number_5(4x7)"
        WHITE_NUMBER_5 = 47,
        //% blockId="WHITE_NUMBER_6" block="White_Number_6(4x7)"
        WHITE_NUMBER_6 = 48,
        //% blockId="WHITE_NUMBER_7" block="White_Number_7(4x7)"
        WHITE_NUMBER_7 = 49,
        //% blockId="WHITE_NUMBER_8" block="White_Number_8(4x7)"
        WHITE_NUMBER_8 = 50,
        //% blockId="WHITE_NUMBER_9" block="White_Number_9(4x7)"
        WHITE_NUMBER_9 = 51,
        //% blockId="ROCKET_WITH_BIG_FLAME" block="Rocket_With_Big_Flame(9x25)"
        ROCKET_WITH_BIG_FLAME = 52,
        //% blockId="ROCKET_WITH_SMALL_FLAME" block="Rocket_With_Small_Flame(9x25)"
        ROCKET_WITH_SMALL_FLAME = 53
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
        [101, 1, 5],
        [2601, 26, 13],
        [904, 9, 9],
        [1101, 11, 4],
        [1102, 11, 8],
        [1103, 11, 8],
        [1001, 10, 9],
        [905, 9, 8],
        [906, 9, 8],
        [907, 9, 9],
        [1201, 12, 7],
        [1401, 14, 7],
        [1104, 11, 9],
        [1002, 10, 9],
        [505, 5, 10],
        [506, 5, 11],
        [507, 5, 10],
        [508, 5, 8],
        [509, 5, 11],
        [702, 7, 1],
        [1105, 11, 10],
        [1202, 12, 10],
        [703, 7, 3],
        [201, 2, 2],
        [301, 3, 3],
        [405, 4, 7],
        [406, 4, 7],
        [407, 4, 7],
        [408, 4, 7],
        [409, 4, 7],
        [410, 4, 7],
        [411, 4, 7],
        [412, 4, 7],
        [413, 4, 7],
        [414, 4, 7],
        [908, 9, 25],
        [909, 9, 25]
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
        ROCKET_SEPARATE = 1,
        //% blockId="AIRCRAFT_BATTLE" block="Aircraft_Battle(34x30)"
        AIRCRAFT_BATTLE = 2,
        //% blockId="DINOSAUR" block="Dinosaur(34x30)"
        DINOSAUR = 3,
        //% blockId="MARBLE" block="Marble(34x30)"
        MARBLE = 4,
        //% blockId="MATTS" block="Matts(34x30)"
        MATTS = 5
    }

    export const info = [
        [3401, 34, 30],
        [3402, 34, 30],
        [3403, 34, 30],
        [3404, 34, 30],
        [3405, 34, 30],
        [3406, 34, 30]
    ];
}

namespace backMusicType {
    export const NUMBER = 0;

    export enum NAME {
        //% blockId="ROCKET_LAUNCH" block="Rocket_Launch"
        ROCKET_LAUNCH = 0,
        //% blockId="ROCKED_SEPARATE" block="Rocket_Separate"
        ROCKED_SEPARATE = 1,
        //% blockId="AIRCRAFT_BATTLE_SOUND_1" block="Aircraft_Battle_Sound_1"
        AIRCRAFT_BATTLE_SOUND_1 = 2,
        //% blockId="AIRCRAFT_BATTLE_SOUND_2" block="Aircraft_Battle_Sound_2"
        AIRCRAFT_BATTLE_SOUND_2 = 3,
        //% blockId="DINOSAUR_SOUND" block="Dinosaur_Sound"
        DINOSAUR_SOUND = 4
    }

    export const info = [
        [0],
        [1],
        [2],
        [3],
        [4]
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
        GAME_WIN = 6,
        //% blockId="SUCCESS" block="Success"
        SUCCESS = 7,
        //% blockId="DINOSAUR_ATTACK" block="Dinosaur_Attack"
        DINOSAUR_ATTACK = 8,
        //% blockId="PARKOUR_COUNTDOWN" block="Parkour_Countdown"
        PARKOUR_COUNTDOWN = 9,
        //% blockId="PARKOUR_WIN" block="Parkour_Win"
        PARKOUR_WIN = 10,
        //% blockId="PARKOUR_JUMP" block="Parkour_Jump"
        PARKOUR_JUMP = 11,
        //% blockId="FAILURE" block="Failure"
        FAILURE = 12,
        //% blockId="BOMB_EXPLODE" block="Bomb_Explode"
        BOMB_EXPLODE = 13
    }

    export const info = [
        [0],
        [1],
        [2],
        [3],
        [4],
        [5],
        [6],
        [7],
        [8],
        [9],
        [10],
        [11],
        [12],
        [13]
    ];
}