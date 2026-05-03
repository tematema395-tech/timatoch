basic.forever(function () {
    if (input.compassHeading() == 50) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # # # #
            # # # # #
            `)
    } else {
        basic.showIcon(IconNames.Duck)
    }
})
