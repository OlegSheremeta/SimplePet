input.onButtonPressed(Button.B, function () {
    basic.showString("Oleg")
})
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        . # # # .
        . # # # .
        . # # # .
        # . . . #
        `)
    basic.showLeds(`
        . # . # .
        . # # # .
        . # # # .
        . # # # .
        . # . # .
        `)
})
