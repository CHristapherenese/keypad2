pins.D10.digitalWrite(false)
forever(function () {
    if (input.buttonD11.isPressed()) {
        pins.D13.digitalWrite(true)
        keyboard.type("!yellow")
    } else {
        pins.D13.digitalWrite(false)
    }
})
