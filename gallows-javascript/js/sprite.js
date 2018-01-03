function createSprite(elemento){
    var container = document.querySelector(elemento);
    var flag = $("#frame-flag").text();
    var sprite = {
        classe: elemento,
        frame: flag,
        nextFrame: function(){
            if(this.frame == 10){
                return;
            }
            if(this.frame == 0){
                this.frame = 2;
                $(elemento).toggleClass("frame" + this.frame);
            }
            else{
                $(elemento).toggleClass("frame" + this.frame);
                $(elemento).toggleClass("frame" + (this.frame - 1));
            }
            this.frame++;
            $("#frame-flag").text(this.frame);
        },
        reset: function(){
            $(elemento).removeClass("frame" + (this.frame - 1));
            this.frame = 0;
            $("#frame-flag").text(this.frame);
        },
        isFinished: function(){
            if(this.frame == 10){
                return true;
            }
            else{
                return false;
            }
        }
    }
    return sprite;
}
