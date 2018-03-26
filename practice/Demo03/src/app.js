
var HelloWorldLayer = cc.Layer.extend({
    layer1:null,
    redSprite:1,
    //direct:1,
    sprite:null,
    ctor:function () {

        this._super();
        var size = cc.winSize;
        var layer1=new cc.LayerColor(cc.color.YELLOW,200,200);
        layer1.ignoreAnchor=false;
        layer1.setAnchorPoint(0.5,0.5);
        layer1.y=size.height/2;
        this.layer1=layer1;
        this.addChild(layer1);

        //this.scheduleUpdate()
        this.schedule(this.myCallback,0.2,cc.REPEAT_FOREVER,2);
        return true;
    },
    // update:function() {
    //     this.layer1.x+=1;
    // },
    // myCallback:function() {
    //     this.layer1.x += 20;
    //     if (this.layer1.x > 400) {
    //         this.unschedule(this.callback);
    //     }
    // }
    update:function(dt){

    },
    myCallback:function(){
        this.redSprite.y-=this.speed;
        if(this.redSprite.y<0){
            this.speed=-this.speed;
        }else{
            this.speed+=0.2;
        }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

