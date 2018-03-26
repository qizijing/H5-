
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        var size = cc.winSize;
        var labelTTF=new cc.LabelTTF("TTF","",64);
        labelTTF.x=50;
        labelTTF.y=size.height/2;
        labelTTF.setAnchorPoint(0,1);
        this.addChild(labelTTF);

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

