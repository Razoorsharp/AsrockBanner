////
var root;
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("30E1B62677E70047BD2E031E91AB2CC5");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.asrockibanner2();
	exportRoot.addEventListener("tick", AdobeAn.handleFilterCache);
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(true,'both',true,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
/////


(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Motherboard1 = function() {
	this.initialize(img.Motherboard1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,998);


(lib.Motherboards2 = function() {
	this.initialize(img.Motherboards2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,454,743);


(lib.RealtekLogo = function() {
	this.initialize(img.RealtekLogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,313);


(lib.TextureGrunge = function() {
	this.initialize(img.TextureGrunge);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,657);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.RealtekLogo();
	this.instance.setTransform(-245,-147);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-245,-147,500,313), null);


(lib.RyzenText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AipAjIAAhEIFJAAQAIAAABABQABABAAAHIAAAyQAAAGgBABQgCACgFAAg");
	this.shape.setTransform(41.15,-13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXCrQgGAAgCgCQgCgBAAgHIABhzQAAgLgIgKIiDi2IgHgLIAIgBIBCAAQAJAAAGAIIBXB5QACAFAEgFIBXh3QAHgLANABIA7AAIAJABQgCAHgCADIgsA9IhaB7QgGAJAAAKIAAB1QAAAGgBABQgBACgHAAg");
	this.shape_1.setTransform(-44.55,-0.0011);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AikBnQgFAAAAgGIAAjBIAAgGIFKAAQAHABABABQABABAAAGIAAAzQAAAGgBACQgCACgGAAIkGAAIAABCIEFAAQAIABABAAQABACAAAHIAAAxQAAAGgBACQgCABgHABg");
	this.shape_2.setTransform(41.125,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABfCjIjBjhIgCABIAADnIhFAAIAAlTIA7AAQAKgBAHAIIC7DaIAFAIIADgCIAAjnIBEAAIAAFTIg6AAIgBAAQgKAAgGgHg");
	this.shape_3.setTransform(85.425,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AikCqIgFAAIAAg8QgBgJAIgGIDijCIgCgCIjnAAIAAhEIFTAAIABAFIAAA3QAAAJgIAGIjhDCIABABIDnAAIABAGIAAA5QgBAGgFAAg");
	this.shape_4.setTransform(-2.4,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABbChIhHh6QgEgFgEAAIh2AAIAACIIhFAAIAAjMIEEAAQAIAAABgBQACgCAAgIIAAgvQAAgFgCgCQgCgCgFAAIkGAAIAAhEIAHgBIEGABQAbAAASAPQATAOAGAZIAAAFIAAArQABAZgBARQgCAWgPAQQgQAQgWAEIgLACIBNCHIhEAAIgBABQgKAAgFgKg");
	this.shape_5.setTransform(-84.85,0.0013);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RyzenText, new cjs.Rectangle(-102.4,-17,204.8,34.1), null);


(lib.RyzenCircle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#ED7D08","#EE7F07","#CE4D0D","#A91312"],[0,0.208,0.412,0.643],42.8,-51.8,-42.1,49.5).s().p("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");
	this.shape.setTransform(-0.0023,0.0096);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RyzenCircle, new cjs.Rectangle(-66.1,-64.2,132.3,128.5), null);


(lib.RGB_lights = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,51,0.31)").s().p("A68ShMAAAglBMA15AAAMAAAAlBg");
	this.shape.setTransform(-2.2,-0.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,0,51,0.298)").s().p("A68ShMAAAglBMA14AAAMAAAAlBg");
	this.shape_1.setTransform(-348.9,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,153,0.329)").s().p("A68ShMAAAglBMA14AAAMAAAAlBg");
	this.shape_2.setTransform(348.95,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RGB_lights, new cjs.Rectangle(-521.3,-119.4,1042.6999999999998,238.9), null);


(lib.Motherboard_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Motherboards2();
	this.instance.setTransform(-113.5,-185.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Motherboard_2, new cjs.Rectangle(-113.5,-185.7,227,371.5), null);


(lib.Motherboard_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Motherboard1();
	this.instance.setTransform(-200,-249.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Motherboard_1, new cjs.Rectangle(-200,-249.5,400,499), null);


(lib.LogoSocketTR4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#16100E").ss(2.6,1,1).p("AAAkXIAAIv");
	this.shape.setTransform(91.2,51.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16100E").s().p("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");
	this.shape_1.setTransform(50.925,51.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#585858").s().p("AGpETQgZgHgSgTQgPgPgHgcQgHgcAAgoIAAgRIBJAAQgBAlAIARQAGAMANAEQAMADAmAAIAsgCQARgEAIgKQAIgKACgXQACgRAAgpIAAhRIgBAAQgMAigRAKQgSAKguAAQgpAAgZgHQgagIgOgRQgPgSgGgfQgGgeAAgxQAAg4AHgjQAIgjAQgTQAQgUAagIQAagIAvAAIA6AEQAYAEAQAIQAQAJAKAOQALAOAHAXQAJAaADAnQACAlAABjQAAB2gDAnQgEAngMAcQgIARgLAMQgKAMgQAHQgQAIgXADIg3ADQgyAAgZgHgAHRi/QgPADgIAJQgHAIgEARQgCAOAAAdQAAAgACAQQADARAHAJQAIAJAQADIAqACIAngCQAQgDAIgIQAIgIADgOQADgOAAgZQAAgjgDgRQgCgTgJgKQgHgKgRgDIgqgDgABiETQgZgHgSgTQgPgPgHgcQgHgcAAgoIAAgRIBJAAQgBAlAIARQAGAMANAEQAMADAmAAIAsgCQARgEAIgKQAIgKACgXQACgRAAgpIAAhRIgBAAQgMAigRAKQgSAKguAAQgpAAgZgHQgZgIgPgRQgPgSgGgfQgGgeAAgxQAAg4AIgjQAHgjAQgTQARgUAZgIQAagIAwAAIA5AEQAYAEAQAIQAQAJALAOQAKAOAHAXQAJAaADAnQACAlAABjQAAB2gDAnQgEAngMAcQgIARgKAMQgLAMgQAHQgQAIgXADIg3ADQgyAAgZgHgACKi/QgPADgIAJQgHAIgDARQgDAOAAAdQAAAgACAQQADARAIAJQAHAJAQADIAqACIAngCQAQgDAIgIQAIgIADgOQADgOAAgZQAAgjgCgRQgDgTgIgKQgIgKgRgDIgqgDgAjfESQgcgHgRgTQgQgRgIggQgIggAAguIAAggIBJAAQAAAqACARQACAWAIAJQAIAKARADIBWAAQAQgEAHgJQAIgJADgRQADgQAAgeQAAgfgGgPQgFgPgOgHQgHgEgqAAIAAgBIgiAAIg3AAIAAhQIBZAAIAAgBIAegBQAOgBAIgGQAJgHADgNQAEgNAAgaQAAgdgCgOQgDgQgIgIQgHgIgQgDIgpgCQgyACgKAMQgHAIgDARQgCAOAAAeIAAANIhIAAQABg6ACgVQACgVAIgVQAGgRALgLQAKgNAQgHQAVgKBEgEQAsAAAbAHQAdAIARAQQARARAIAcQAHAbAAAqQAAAhgDAWQgDAXgIAPQgIAPgMAJQgNAIgSAEIAAADQAVAEANAGQAOAJAIAOQAIAOADAXQADAVAAAhQAAAugFAdQgIAegOATQgSAVgaAIQgbAJgyAAQg1AAgbgIgAlyEVIhijvIgBAAIhjDvIhZAAICBkdIh3kMIBYAAIBaDcIABAAIBajcIBYAAIh2EMIB9Edg");
	this.shape_2.setTransform(162.975,51.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ABABAB").s().p("A46HqIAAvTMAiXAAAIPePTg");
	this.shape_3.setTransform(159.525,49.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LogoSocketTR4, new cjs.Rectangle(0,0,319.1,98.1), null);


(lib.LogoRgbLed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// RgbCol
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(0.1,0,1,3,true).p("ArQmdIWhAAIAAM7I2hAAg");
	this.shape.setTransform(60.85,32.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("ArQGeIAAs7IWhAAIAAM7g");
	this.shape_1.setTransform(60.85,32.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// txt
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["#DC0911","#FFFF00","#86BF2E","#19ADDF","#3963B3"],[0,0.267,0.498,0.757,1],-60.2,0,60.3,0).ss(4,1,1).p("ApGAAISNAA");
	this.shape_2.setTransform(58.275,38.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACiBFIAAiJIBuAAQAXAAAPAJQARAKAAAMIAABLQAAAMgRAKQgPAJgXAAgADZA2IAbAAQALAAAJgFQAIgFAAgGIAAhLQAAgGgIgFQgJgEgLAAIgbAAgAhSBFIAAiJICJAAIAAAQIhSAAIAAAtIA3AAIAAAPIg3AAIAAAuIBSAAIAAAPgAlGBFIAAiJIA3AAIAAB6IBTAAIAAAPg");
	this.shape_3.setTransform(61.325,55.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DC0911").s().p("ABVCXIighnIgjAAIAABnIg8AAIAAktICzAAQA4gBAcAJQAyAPAAAsIAABJQAAAdgiAQQgbANggAAIgPAAICIBngAhugKICgAAQALAAAJgDQANgFAAgJIAAgtQAAgThKAAIh3AAg");
	this.shape_4.setTransform(17.175,15.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#86BF2E").s().p("AgrCXQgWABgYgDQgWgDgPgFQgzgSAAgnIAAinQAAgYAGgLQAHgQAXgIQAIgCAngDQAkgDAPAAIDdAAIAAA7IjdAAQgmAAgSAHQgSAGAAAMIAACFQAAAMASAHQASAGAmAAIChAAIAAg7IiMAAIAAg7ICqAAQAMABAJAIQAJAKAAALIAACTg");
	this.shape_5.setTransform(60.325,15.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#005BBD").s().p("AiiCYIAAkvIDQAAQAqAAAeANQAtARAAAmIAAAsQAAAPgHAKQgHAKgPAEQANACAJAMQAHALAAAMIAAAvQAAAlguATQgQAGgSADQgTADgUAAgAhcBcICIAAQBCAAAAgWIAAgXQAAgSgtAAIidAAgAhcgeICxAAQAJAAAGgDQAKgEAAgHIAAgZQAAgGgHgEQgGgFgNgDQgTgEgTAAIiKAAg");
	this.shape_6.setTransform(102.475,15.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LogoRgbLed, new cjs.Rectangle(-12.2,-9.7,146.2,84.7), null);


(lib.LogoGigabitEthernet = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// GigabitCol
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(0.1,0,1,3,true).p("AuTmEIcnAAIAAMJI8nAAg");
	this.shape.setTransform(10.1,20.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.02)").s().p("AuTGFIAAsJIcmAAIAAMJg");
	this.shape_1.setTransform(10.1,20.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// logo_elements (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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AJAEQAIAEAJgBQAJAAAHgDQAHgEAEgGQAFgGACgIQACgHAAgHQAAgJgCgGQgDgIgEgGQgFgGgGgDQgHgDgIgBQgKABgJAEgAF/gGQgJgEgHgFQgHgGgEgJQgFgIAAgLQAAgNAGgJQAFgIAJgGQAJgFALgDQAKgCAMAAQAMAAAOADIAAgCQAAgHgCgFQgBgFgDgEQgEgDgFgCQgGgCgHAAQgLgBgMAEQgJADgLAGIgKgcQAOgHAPgDQAQgFAQAAQAOAAALAFQALAEAIAIQAHAHAEALQADAMAAANIAABWIghAAIgDgMQgHAIgKADQgJAFgNAAQgKAAgJgDgAGPhCQgFACgCAEQgDAEAAAHQAAAIAGAFQAGAGAKAAQAHgBAIgDQAGgDAHgFIAAgbQgLgCgJAAQgMAAgIAFgAAAgFQgJgCgJgEQgJgEgIgFQgIgEgHgHIgMgOQgFgIgEgJQgEgJgCgKQgCgJAAgLQAAgKADgKQACgKADgJQAEgJAGgIIAMgOIAPgMQAIgFAJgEQAJgEAJgCQAKgBAKAAQAMAAALACQALADAKAEQAKAFAJAHQAJAHAIAJIgbAYQgOgPgJgFIgOgGQgIgBgIAAQgMAAgLAEQgKAGgIAIQgIAJgFALQgEAMAAAOQAAANAEANQAEALAIAIQAIAJALAFQAKAEANAAQAMAAALgEQAMgFAJgIIAAgdIgtAAIAAggIBUAAIAABKQgIAJgJAIQgJAHgLAFQgKAFgMACQgLACgNABQgLAAgKgCgAKagHIAAiOIAnAAIAACOgACCgHIAAiOIAmAAIAACOgAKaipIAAggIAnAAIAAAggACCipIAAggIAmAAIAAAgg");
	mask.setTransform(7.975,21.05);

	// gradient
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#AAAAAA","#FFFFFF"],[0,1],-1.5,21.8,-1.5,-9.5).s().p("AtwDdIAAm5IbhAAIAAG5g");
	this.shape_2.setTransform(7.65,21);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LogoGigabitEthernet, new cjs.Rectangle(-82.4,-19.8,185.10000000000002,79.8), null);


(lib.LogoAsrock = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0.054,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LogoAsrock, new cjs.Rectangle(-2496.5,-432.1,4993.2,864.3), null);


(lib.Expectation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAjwACLQg5gxgBhYQABg2ATgmQAPgcAagWQAagWAegLQApgPA1AAQBgAAA6AzQA4AyAABYQAABYg4AyQg5AyhgAAQhhAAg5gygEAkygBdQgiAfAAA+QAAA+AjAgQAiAgA1AAQA0AAAhggQAiggAAg+QAAg/gggfQgigfg1AAQg3AAghAggAqQCLQg4gxAAhXQAAhaA4gyQA4gzBbAAQBQAAAyAoQAdAXAPAsIhWASQgIgdgZgQQgYgRgjAAQgwAAgeAeQgfAdAABBQABBEAeAeQAdAdAvAAQAkAAAYgTQAZgSALgoIBVAWQgTA8guAdQgtAdhGAAQhXAAg3gygEAybAC3IiujtIAADtIhSAAIAAlsIBVAAICyDyIAAjyIBSAAIAAFsgAckC3IAAlsIBXAAIAAFsgAUcC3IAAkvIiBAAIAAg9IFZAAIAAA9IiBAAIAAEvgANeC3IgmhTIitAAIgkBTIhdAAICplsIBdAAICuFsgAKmAmIB2AAIg8iGgABZC3IAAkvIiAAAIAAg9IFYAAIAAA9IiBAAIAAEvgA1HC3IAAlsIFCAAIAAA9IjqAAIAABRIDaAAIAAA9IjaAAIAABjIDyAAIAAA+gA/VC3IAAlsICMAAQBQAAAZAFQAlAIAZAcQAaAbAAAsQAAAigPAXQgPAVgWAOQgWANgXAEQggAFg7AAIg6AAIAACKgA9+gQIAxAAQAzAAARgGQASgFALgNQAJgMAAgQQAAgUgOgNQgOgNgVgDQgQgDgwAAIgqAAgEglmAC3Ihgh/IhhB/IhpAAICVi+IiHiuIBmAAIBYB1IBVh1IBlAAIiHCxICVC7gEgzzAC3IAAlsIFCAAIAAA9IjqAAIAABRIDaAAIAAA9IjaAAIAABjIDzAAIAAA+g");
	this.shape.setTransform(-16.55,-0.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Expectation, new cjs.Rectangle(-348.1,-19.4,663.1,37.7), null);


(lib.Beyond = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAnCcQhUg4AAhhQAAg+AdgqQAVgfAngZQAlgZAugMQA8gQBOAAQCPAABVA4QBWA4AABiQAABjhVA5QhVA3iOAAQiQAAhUg3gACJhoQgxAiAABGQAABFAyAkQAzAkBOAAQBOAAAygkQAxgjAAhHQAAhFgwgjQgxgjhQABQhRAAgxAjgAUxDMIAAmXIDuAAQBQAAArAIQA4ALApAbQAoAbAVAmQAVAoAAA4QAAAzgTAjQgZAugsAbQgiAUg6AMQgrAJhIAAgAWzCHIBhAAQA3AAAYgDQAggFAVgMQAVgNANgbQANgbAAgwQAAgugNgaQgNgZgYgOQgYgOgkgFQgcgEhPAAIg7AAgAQlDMIkEkJIAAEJIh4AAIAAmXIB+AAIEIEQIAAkQIB5AAIAAGXgAnCDMIAAirIjsjsICZAAICYCiICUiiICWAAIjtDsIAACrgAzDDMIAAmXIHeAAIAABFIlcAAIAABaIFEAAIAABEIlEAAIAABvIFoAAIAABFgA9MDMIAAmXIEBAAQBNAAAlAEQAmAEAeANQAdANAUAVQAUAWAAAZQAAAdgZAZQgYAXgqAMQA7ALAgAZQAfAaAAAkQAAAbgUAbQgVAagjAQQgjAQg0ADQghACh8ABgA7KCHIB4AAQBGAAATgCQAdgEATgNQASgNAAgVQAAgSgOgNQgOgNgbgGQgagGhZAAIhpAAgA7KgpIBVAAQBMAAASgBQAigCATgMQATgNAAgUQAAgSgQgMQgRgMgggDQgUgBhcAAIhKAAg");
	this.shape.setTransform(-5.675,-0.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Beyond, new cjs.Rectangle(-192.6,-21.7,373.9,42.2), null);


(lib.BackGlow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF0000","#FF0000","rgba(255,0,0,0)"],[0,0,0.663],0,0.1,0,0,0.1,850.3).s().p("EhdLBQeUgmmghVAAAgvJUAAAgvIAmmghVUAmnghWA2kAABUA2lgABAmmAhWUAmnAhVAAAAvIUAAAAvJgmnAhVUgmmAhVg2lAAAUg2kAAAgmnghVg");
	this.shape.setTransform(62.15,-86.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BackGlow, new cjs.Rectangle(-781.2,-814.7,1686.8000000000002,1456.7), null);


(lib.RyzenLogo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// RyzenCol
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(0.1,0,1,3,true).p("AxJqSMAiTAAAIAAUlMgiTAAAg");
	this.shape.setTransform(3.15,1.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.008)").s().p("AxJKTIAA0lMAiTAAAIAAUlg");
	this.shape_1.setTransform(3.15,1.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// RyzenText
	this.ryzenText_mc = new lib.RyzenText();
	this.ryzenText_mc.name = "ryzenText_mc";
	this.ryzenText_mc.setTransform(0,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.ryzenText_mc).wait(1));

	// RyzenCircle
	this.ryzenCircle_mc = new lib.RyzenCircle();
	this.ryzenCircle_mc.name = "ryzenCircle_mc";

	this.timeline.addTween(cjs.Tween.get(this.ryzenCircle_mc).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RyzenLogo, new cjs.Rectangle(-107.6,-65.8,221.6,133.8), null);


// stage content:
(lib.asrockibanner2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		root = this;
		var textDisplay = root.textDisplay_txt;
		var logoAmd = root.logoAmd_mc;
		var gigabit = root.logoGigabit_mc;
		var logoRgb = root.logoRgbLed_mc;
		stage.enableMouseOver()
		
		//Start script made in/from Adobe Animate 
		
		var mainTimeline = gsap.timeline(
			{
				delay	: 0,
				repeat: 0,
				yoyo	: false
			}
		);		
		function getTextTimeline(){
			var textTimeline = gsap.timeline(
				{
					delay	: 0,
					repeat	: 0
				}
			);			
			textTimeline
				.from(
					root.logoAsrock_mc,
					1,
					{
						y			: "-=200",
						rotation	: 180
					}
				)
				.from(
					root.beyond_mc,
					0.5,
					{
						alpha		: 0,
						scaleY		: 0,
						scaleX		: 0,
						ease		: Back.easeOut
					},
					"-=0.5" // Offset relatief tov zijn voorganger
				)
				.from(
					root.expectation_mc,
					0.5,
					{
						alpha:0,
						scaleY: 0,
						scaleX: 0,
						ease: Back.easeOut
					},
					"-=0"
				);
			
			return textTimeline;
		}
		
		function getMotherboardTimeline(){
			var motherboardTimeline = gsap.timeline(
				{
					delay	: 0,
					repeat	: 0
				}
			);
			
			motherboardTimeline.staggerFrom(
				[ 
					root.motherboard_1_mc, 
					root.motherboard_2_mc 
				],
				2,
				{
					x: 2500
				},
				0.8 // stagger delay, (tussen elk object zit 0.8 sec 
			);
			
			return motherboardTimeline;
		}
		
		function getLogosTimeline(){
			var logosTimeline = gsap.timeline(
				{
					delay	: 0,
					repeat	: 0
				}
			);
		
			var logoLijst = [
				root.logoAmd_mc,
				root.logoRyzen_mc,
				root.logoGigabit_mc,
				root.logoRgbLed_mc
			];
			
			logosTimeline.staggerFrom(
				logoLijst,
				1,
				{
					y: 900
				},
				0.4 // stagger delay, (tussen elk object zit 0.4 sec)
			);
			
			return logosTimeline;
		}
		
		mainTimeline
			.add( getTextTimeline()					)
			.add( getLogosTimeline()				)
			.add( getMotherboardTimeline(), "-=0.4" ); // NU start de animaties pas
		
		// #############################################
		// #####     Randomized Glow Function      #####
		// ##### teller is .... tijdsduur is  .... #####
		// #############################################
		
		var framerate = 30;
		var _aantalBlinks = 5;
		var _frames = Math.floor( framerate / _aantalBlinks); // 
		var _teller = 1;		// reserved variable for the randomizeGlow function 
		var _tijdsduur = 1/_frames;	// reserved variable for the randomizeGlow function
		
		root.addEventListener('tick', randomizeGlow);
		
		function randomizeGlow() {
			if (_teller >= _frames) {
				_teller = 1;
				var randomAlpha = ( Math.random() * 0.3 ) + 0.2; // 0.2 --> 0.5
				// root.back_glow_mc.alpha = randomAlpha;
				gsap.to(root.backGlow_mc, _tijdsduur, {	alpha: randomAlpha });
			} else {
				_teller++;	// verhoog teller met 1
			}
			// console.log(_teller);
		}
		
		//AMD Socket logo animated
		
		root.logoAmd_mc.addEventListener('mouseover', logoAmd_over);
		root.logoAmd_mc.addEventListener('mouseout', logoAmd_out);
		root.logoAmd_mc.addEventListener('click', logoAmdRedirect);
		
		function logoAmd_over(){	
			gsap.to(logoAmd,{
				scaleY	: 1.1,
				scaleX	: 1.1,
			});
			gsap.to(textDisplay, {
				duration	: 2,
				text		: "The most powerful Socket yet!",
				ease		: "ease-in",
				alpha		: 100
				
				});
		}
		
		function logoAmd_out(){	
			gsap.to(logoAmd, {
				scaleY	: 1,
				scaleX	: 1,
			});
			gsap.to(textDisplay, {
				duration	: 2,
				text		: "",
				ease		: "ease-out",
				alpha		: 0
				
				});
		}
		function logoAmdRedirect(){
			
			window.open("https://www.amd.com", "_blank");
		}
		
		// ##### End of Randomized Glow Function #####
		//Ryzen button animations
		root.logoRyzen_mc.addEventListener('mouseover', ryzenAnimate_over);
		root.logoRyzen_mc.addEventListener('mouseout', ryzenAnimate_out);
		root.logoRyzen_mc.addEventListener('click', ryzenRedirect);
		
		function ryzenAnimate_over(){
			var ryzenLogoParts = [
				root.logoRyzen_mc.ryzenCircle_mc,
				root.logoRyzen_mc.ryzenLogoText_mc
			];
			
			gsap.to( ryzenLogoParts,{
				duration	: 0.5,
				stagger		: 0.2,
				scaleX		: 1.5,
				scaleY		: 1.5
			});
		}
		
		// Ryzen logo animations
		
		function ryzenAnimate_out(){
			var ryzenLogoParts = [
				root.logoRyzen_mc.ryzenCircle_mc,
				root.logoRyzen_mc.ryzenLogoText_mc
			];
			
			gsap.to( ryzenLogoParts,{
				duration	: 0.5,
				stagger		: 0.2,
				scaleX		: 1,
				scaleY		: 1
			});
		}		
		
		function ryzenRedirect(){
			window.open(
		            "https://www.amd.com/en/processors/ryzen", "_blank");
		}
		
		// Gigabyte logo
		
		gigabit.addEventListener('mouseover', gigabit_over);
		gigabit.addEventListener('mouseout', gigabit_out);
		gigabit.addEventListener('click', gigabitRedirect);
		
		function gigabit_over(){	
			gsap.to(gigabit,{
				scaleY	: 1.1,
				scaleX	: 1.1,
			});
			var realtek = root.logoRealtek_mc;
			gsap.to(realtek,{
				duration	: 1,
				alpha		: 100,
				y			: 550,
				ease		: "bounce",
				});
		}
		
		function gigabit_out(){	
			gsap.to(gigabit, {
				scaleY	: 1,
				scaleX	: 1,
			});
		var realtek = root.logoRealtek_mc;
			gsap.to(realtek,{
				duration	: 0.5,
				alpha		: 0,
				y			: -60,
				ease		: "ease-out",
				});
		}
		function gigabitRedirect(){
			
			window.open("https://www.realtek.com/en/", "_blank");
		}
		
		//RGB Led logo animations
		
		logoRgb.addEventListener('mouseover', logoRgb_over);
		logoRgb.addEventListener('mouseout', logoRgb_out);
		logoRgb.addEventListener('click', logoRgbRedirect);
		
		function logoRgb_over(){	
			gsap.to(logoRgb,{
				scaleY	: 1.2,
				scaleX	: 1.2,
			});
			var rgbLights = root.rgbLights_mc;
			gsap.to(rgbLights, {
				duration	: 1,
				alpha		: 90,
				ease		: "ease.in",				
				});			
		}
		
		function logoRgb_out(){	
			gsap.to(logoRgb, {
				scaleY	: 1,
				scaleX	: 1,
			});
		var rgbLights = root.rgbLights_mc;
			gsap.to(rgbLights, {		
				alpha		: 0,		
				})	;		
		}
		function logoRgbRedirect(){			
			window.open("https://arstechnica.com/gadgets/2017/09/how-to-build-rgb-pc/", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Expectation
	this.expectation_mc = new lib.Expectation();
	this.expectation_mc.name = "expectation_mc";
	this.expectation_mc.setTransform(503.4,369.2);

	this.timeline.addTween(cjs.Tween.get(this.expectation_mc).wait(3));

	// Realtek
	this.logoRealtek_mc = new lib.Symbol4();
	this.logoRealtek_mc.name = "logoRealtek_mc";
	this.logoRealtek_mc.setTransform(629.35,-58.25,0.7951,0.6759);
	this.logoRealtek_mc.alpha = 0.0195;

	this.timeline.addTween(cjs.Tween.get(this.logoRealtek_mc).wait(3));

	// Beyond
	this.textDisplay_txt = new cjs.Text("", "32px 'Helvetica'", "#FFFFFF");
	this.textDisplay_txt.name = "textDisplay_txt";
	this.textDisplay_txt.lineHeight = 38;
	this.textDisplay_txt.lineWidth = 506;
	this.textDisplay_txt.alpha = 0.00000000;
	this.textDisplay_txt.parent = this;
	this.textDisplay_txt.setTransform(17.95,529.2);

	this.beyond_mc = new lib.Beyond();
	this.beyond_mc.name = "beyond_mc";
	this.beyond_mc.setTransform(503.4,297.35);
	var beyond_mcFilter_1 = new cjs.ColorFilter(0,0,0,1,255,255,255,0);
	this.beyond_mc.filters = [beyond_mcFilter_1];
	this.beyond_mc.cache(-195,-24,378,46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.beyond_mc},{t:this.textDisplay_txt}]}).wait(3));
	this.timeline.addTween(cjs.Tween.get(beyond_mcFilter_1).wait(3));

	// Motherboard_1
	this.motherboard_1_mc = new lib.Motherboard_1();
	this.motherboard_1_mc.name = "motherboard_1_mc";
	this.motherboard_1_mc.setTransform(1308,384.5);

	this.timeline.addTween(cjs.Tween.get(this.motherboard_1_mc).wait(3));

	// Motherboard_2
	this.motherboard_2_mc = new lib.Motherboard_2();
	this.motherboard_2_mc.name = "motherboard_2_mc";
	this.motherboard_2_mc.setTransform(1660.5,387.75);

	this.timeline.addTween(cjs.Tween.get(this.motherboard_2_mc).wait(3));

	// RGB
	this.rgbLights_mc = new lib.RGB_lights();
	this.rgbLights_mc.name = "rgbLights_mc";
	this.rgbLights_mc.setTransform(641.75,438.55);
	this.rgbLights_mc.alpha = 0;
	this.rgbLights_mc.compositeOperation = "difference";

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,0,1,3,true).p("A68ygMA15AAAMAAAAlBMg15AAAg");
	this.shape.setTransform(292.85,439.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.rgbLights_mc}]}).wait(3));

	// LogoRyzen
	this.logoRyzen_mc = new lib.RyzenLogo();
	this.logoRyzen_mc.name = "logoRyzen_mc";
	this.logoRyzen_mc.setTransform(419.85,703.5,0.6,0.6,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.logoRyzen_mc).wait(3));

	// LogoRgbLed
	this.logoRgbLed_mc = new lib.LogoRgbLed();
	this.logoRgbLed_mc.name = "logoRgbLed_mc";
	this.logoRgbLed_mc.setTransform(824.8,703.4,1,1,0,0,0,66.1,31.1);

	this.timeline.addTween(cjs.Tween.get(this.logoRgbLed_mc).wait(3));

	// LogoGigabit
	this.logoGigabit_mc = new lib.LogoGigabitEthernet();
	this.logoGigabit_mc.name = "logoGigabit_mc";
	this.logoGigabit_mc.setTransform(616.4,703.35,1,1,0,0,0,7.7,21);

	this.timeline.addTween(cjs.Tween.get(this.logoGigabit_mc).wait(3));

	// LogoAmd
	this.logoAmd_mc = new lib.LogoSocketTR4();
	this.logoAmd_mc.name = "logoAmd_mc";
	this.logoAmd_mc.setTransform(162.7,703.4,1,1,0,0,0,159.5,49);

	this.timeline.addTween(cjs.Tween.get(this.logoAmd_mc).wait(3));

	// LogoAsrock
	this.logoAsrock_mc = new lib.LogoAsrock();
	this.logoAsrock_mc.name = "logoAsrock_mc";
	this.logoAsrock_mc.setTransform(500.4,165.65,0.06,0.06,0,0,0,1.7,1.7);

	this.timeline.addTween(cjs.Tween.get(this.logoAsrock_mc).wait(3));

	// BackGlow
	this.backGlow_mc = new lib.BackGlow();
	this.backGlow_mc.name = "backGlow_mc";
	this.backGlow_mc.setTransform(1435.5,401.3);
	this.backGlow_mc.alpha = 0.6211;

	this.timeline.addTween(cjs.Tween.get(this.backGlow_mc).wait(3));

	// TextureGrunge_png
	this.instance = new lib.TextureGrunge();
	this.instance.setTransform(920,304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// stageBackground
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EiXjg8JMEvHAAAMAAAB4TMkvHAAAg");
	this.shape_1.setTransform(960,375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("EiXjA8KMAAAh4TMEvHAAAMAAAB4Tg");
	this.shape_2.setTransform(960,375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(3));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(963.2,-38.4,1377.8999999999999,1081.7);
// library properties:
lib.properties = {
	id: '30E1B62677E70047BD2E031E91AB2CC5',
	width: 1920,
	height: 750,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/Motherboard1.png", id:"Motherboard1"},
		{src:"images/Motherboards2.png", id:"Motherboards2"},
		{src:"images/RealtekLogo.png", id:"RealtekLogo"},
		{src:"images/TextureGrunge.png", id:"TextureGrunge"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['30E1B62677E70047BD2E031E91AB2CC5'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;