basic.showString("temperatuur verzamelen")
basic.forever(function () {
    serial.writeValue("celsius", input.temperature())
})
