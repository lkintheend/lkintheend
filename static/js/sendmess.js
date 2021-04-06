$(function () {
    $('#user{{ receiver.id }}').addClass('active');
    //Call receive function each 1 seconds to check for new messages in the database
    setInterval(receive,1000)
})
