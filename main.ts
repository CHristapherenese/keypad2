function enter () {
	
}
function EnableChat () {
    keyboard.key("q", KeyboardKeyEvent.Press)
}
pins.D10.digitalWrite(false)
forever(function () {
    if (input.buttonD11.isPressed()) {
        EnableChat()
        pause(100)
        pins.D13.digitalWrite(true)
        keyboard.type("!yellow")
    } else {
        pins.D13.digitalWrite(false)
    }
})
