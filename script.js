$(document).ready(function() {
    $('.submit').click(function(event) {
        console.log("Clicked button")

        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email is not valid')
        }
        if(subject.length >= 2) {
            statusElm.append('<div>Subject is valid')
        } else {
            event.preventDefault()
            statusElm.append('<div>Subject is not valid')
        }
        if(message.length >= 10) {
            statusElm.append('<div>Message is valid')
        } else {
            event.preventDefault()
            statusElm.append('<div>Message is not valid')
        }
    })  
})