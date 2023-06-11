function app() {
    var message_1 = document.getElementById("user").value
    document.getElementById("message1").innerText = message_1
    document.getElementById("user").value = ''
    var message = document.getElementById("text").value
    document.getElementById("message1").innerText = message
    document.getElementById("text").value = ''
    console.log(message_1 + " " + message)

}

