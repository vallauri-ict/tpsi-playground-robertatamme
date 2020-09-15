$(document).ready(function () {
    const DIM = 15;
    let _wrapper;
    _wrapper = $("#wrapper");

    for(let i = 0; i<DIM; i++) {
        let img = $("<img>");
        img.prop("id", "t" + (i+1));
        img.prop("src", "IMG/img" + (i+1) + ".png");
        img.css({
           "position":"absolute",
           "top": random(0,(600-170)) + "px",
            "left": random(0,(1100-175)) + "px",
        });

       // img.draggable({
       //     "revert":"invalid"
       // });

        img.appendTo(_wrapper);
    }
    _wrapper.children("img").draggable({
        "start" : function () {
            $(this).draggable("option", "revert", "invalid");
        }
    });

    _wrapper.children("img").on("dblclick", function () {
        $(this).draggable("enable");
    });

    _wrapper.droppable({});
    $("table td").droppable({
        "drop":function (event, args) {
            let idPezzo = args.draggable.prop("id").substr(1);
            let idSlot = $(this).prop("id").substr(1);
            if(idPezzo == idSlot){
                args.draggable.draggable("disable");
            }
            else{
                args.draggable.draggable("option", "revert", true);
            }
        }
    });
})

function random(min,max){
    return Math.floor(Math.random() * (max-min +1)) + min;
}