$( document ).ready(function() {

    let loop = null;
    let counter = 0;
    let frames = [];

    function playLoop () {
        if(counter >= frames.length) {
            counter = 0;
        }
        $("#text-area").val(frames[counter++])
    }

    $("#text-area").val(ANIMATIONS.BLANK);

    $("#animation").on('change', function () {
        $("#text-area").val(ANIMATIONS[this.value])
    });

    $("#start").on('click', function () {
        $("#start").prop('disabled', true);
        $("#stop").prop('disabled', false);
        $("#animation").prop('disable', true);
        frames = $("#text-area").val().split("=====\n");
        loop = setInterval(playLoop, 250);
    })

    $("#stop").on('click', function () {
        $("#stop").prop('disabled', true);
        $("#start").prop('disabled', false);
        $("#animation").prop('disable', false);
        clearInterval(loop);
        $("#text-area").val(ANIMATIONS[$("#animation").val().toUpperCase()]);
        counter = 0;
        frame = [];
    })

});

