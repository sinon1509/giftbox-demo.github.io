AFRAME.registerComponent('click-anim', {
    schema: {

    },

    init: function () {
        this.el.addEventListener('click',function(e){
            this.setAttribute("animation-mixer","clip: *; loop: once; clampWhenFinished: true");

            let boxId = e.srcElement.id;
            console.log(boxId);
            if (boxId === "box1"){

            }
            if (boxId === "box2"){

            }
            if (boxId === "box3"){

            }
            if (boxId === "box4"){

            }
            if (boxId === "box5"){

            }
        });
    },
});
