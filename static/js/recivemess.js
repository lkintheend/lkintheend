// For receiving
        sender_id = "{{ receiver.id }}";
        receiver_id = "{{ request.user.id }}";

        //For sending
        $(function () {
            scrolltoend();
            $('#chat-box').on('submit', function (event) {
                event.preventDefault();
                var message = $('#id_message');
                send('{{ request.user.username }}', '{{ receiver.username }}', message.val());
                message.val('');
            })
        })
