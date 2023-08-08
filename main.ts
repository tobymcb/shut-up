input.onButtonPressed(Button.A, function () {
    Number2 += 1
})
input.onButtonPressed(Button.AB, function () {
    if (Setting == 0) {
        Setting = 1
        basic.showLeds(`
            . . # . .
            . # . . .
            . . # . .
            . . . # .
            . . # . .
            `)
    }
    if (Setting == 1) {
        Setting = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    Number2 += -1
})
let Setting = 0
let Number2 = 80
basic.forever(function () {
    if (Setting == 0) {
        if (input.soundLevel() >= Number2) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            music.play(music.stringPlayable("C5 G C5 G C5 G C5 G ", 150), music.PlaybackMode.UntilDone)
        } else if (input.soundLevel() >= Number2 * 0.8) {
            basic.showLeds(`
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        } else if (input.soundLevel() >= Number2 * 0.6) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                # # # # #
                `)
        } else if (input.soundLevel() >= Number2 * 0.4) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                `)
        } else if (input.soundLevel() >= Number2 * 0.2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    } else {
        basic.showNumber(Number2)
    }
})
