loadedInterfaceName = "optilyre 0";
interfaceOrientation = "portrait";

// scripting
/* 
opti = new Object();
opti.page = 0;
opti.nextPage = function () {
    if (opti.page == 0) {
        opti.page = 1;
        control.changePage(1);
    }
    if (opti.page == 1) {
        opti.page = 2;
        control.changePage(2);
    }
    if (opti.page == 2) {
        opti.page = 0;
        control.changePage(0);
    }
} */
// colors
var menuColor = "#ff0000";
var color0 = "#ff8000";

constants = [
{
    "name":"page",
    "type":"Button",
    "isLocal":true,
    "label":"PAGE",
    "x":.015, "y":.01,
    "width":.23125, "height":.09,
    "color":"#003040",
    "stroke":"#00bfff",
    "backgroundColor":"#003040",
    "ontouchstart":"control.changePage(1)",
},
{
    "name":"menu",
    "type":"Button",
    "x":.26125, "y":.01,
    "width":.23125, "height":.09,
    "isLocal":true,
    "label":"MENU",
    "mode":"toggle",
    "color":"#0000bf",
    "stroke":"#00bfff",
    "backgroundColor":"#003040",
    "ontouchstart":"if(this.value == this.max) {control.showToolbar();} else{control.hideToolbar();}",
},
{
    "name":"refresh",
    "type":"Button",
    "isLocal":true,
    "label":"FRESH",
    "x":.5075, "y":.01,
    "width":.23125, "height":.09,
    "color":"#0000bf",
    "stroke":"#00bfff",
    "backgroundColor":"#003040",
    "mode":"toggle",
    "ontouchstart":"interfaceManager.refreshInterface()",
},
{
    "name":"info",
    "type":"Button",
    "isLocal":true,
    "label":"INFO",
    "x":.75375, "y":.01,
    "width":.23125, "height":.09,
    "color":"#0000bf",
    "stroke":"#00bfff",
    "backgroundColor":"#003040",
    "mode":"momentary",
    "ontouchstart":"control.changePage(3)",
},

]; // end constants

pages = [ [ // PAGE 0
{
    "name":"sl00",
    "type":"Slider",
    "width":.97, "height":.09,
    "x":.02, "y":.10,
    "min":0,
    "max":1024,
    "color":color0,
    "stroke":"#00ff00",
    "backgroundColor":"#004080";
    "midiType":"cc",
    "midiNumber":0,
    "midiMin":0,
    "midiMax":127,
},
{
    "name":"sl01",
    "type":"Slider",
    "width":.97, "height":.09,
    "x":.02, "y":.20,
    "min":0,
    "max":1024,
    "color":color0,
    "stroke":"#00ff00",
    "midiType":"cc",
    "midiNumber":1,
    "midiMin":0,
    "midiMax":127,
},
{
    "name":"sl02",
    "type":"Slider",
    "width":.97, "height":.09,
    "x":.02, "y":.30,
    "min":0,
    "max":1024,
    "color":color0,
    "stroke":"#00ff00",
    "midiType":"cc",
    "midiNumber":2,
    "midiMin":0,
    "midiMax":127,
},
{
    "name":"sl03",
    "type":"Slider",
    "width":.97, "height":.09,
    "x":.02, "y":.40,
    "min":0,
    "max":1024,
    "color":color0,
    "stroke":"#00ff00",
    "midiType":"cc",
    "midiNumber":3,
    "midiMin":0,
    "midiMax":127,
},

], // end PAGE 0
[ // PAGE 1
{
    "name":"smp00",
    "label":"smp00 - C3",
    "type":"Button",
    "width":.3133, "height":.20888,
    "x":.015, "y":.13,
    "color":"#ffffff",
    "stroke":"#ffff00",
    "backgroundColor":"#808000",
    "mode":"momentary",
    "midiNumber":48,
    "midiType":"noteon",
    
},
{
    "name":"smp01",
    "label":"smp01 - C#3",
    "type":"Button",
    "width":.3133, "height":.20888,
    "x":.3433, "y":.13,
    "color":"#ffffff",
    "stroke":"#ff7f00",
    "backgroundColor":"#804000",
    "mode":"momentary",
    "midiNumber":49,
    "midiType":"noteon",

},
{
    "name":"smp02",
    "label":"smp02 - D3",
    "type":"Button",
    "width":.3133, "height":.20888,
    "x":.6716, "y":.13,
    "color":"#ffffff",
    "stroke":"#ff0000",
    "backgroundColor":"#800000",
    "mode":"momentary",
    "midiNumber":50,
    "midiType":"noteon",

},
{
    "name":"smp03",
    "label":"smp03 - D#3",
    "type":"Button",
    "width":.3133, "height":.20888,
    "x":.015, "y":.34888,
    "color":"#ffffff",
    "stroke":"#ff7f00",
    "backgroundColor":"#804000",
    "mode":"momentary",
    "midiNumber":51,
    "midiType":"noteon",

},
{
    "name":"smp04",
    "label":"smp04 - E3",
    "type":"Button",
    "width":.3133, "height":.20888,
    "x":.3433, "y":.34888,
    "color":"#ffffff",
    "stroke":"#ff7f00",
    "backgroundColor":"#804000",
    "mode":"momentary",
    "midiNumber":52,
    "midiType":"noteon",

},
{
    "name":"smp05",
    "label":"smp05 - F3",
    "type":"Button",
    "width":.3133, "height":.20888,
    "x":.6716, "y":.34888,
    "color":"#ffffff",
    "stroke":"#ff0000",
    "backgroundColor":"#800000",
    "mode":"momentary",
    "midiNumber":53,
    "midiType":"noteon",

},
{
    "name":"smp06",
    "label":"smp06 - F#3",
    "type":"Button",
    "width":.3133, "height":.20888,
    "x":.015, "y":.56776,
    "color":"#ffffff",
    "stroke":"#007fff",
    "backgroundColor":"#004080",
    "mode":"momentary",
    "midiNumber":54,
    "midiType":"noteon",

},
{
    "name":"smp07",
    "label":"smp07 - G3",
    "type":"Button",
    "width":.3133, "height":.20888,
    "x":.3433, "y":.56776,
    "color":"#ffffff",
    "stroke":"#007fff",
    "backgroundColor":"#004080",
    "mode":"momentary",
    "midiNumber":55,
    "midiType":"noteon",

},
{
    "name":"smp08",
    "label":"smp08 - G#3",
    "type":"Button",
    "width":.3133, "height":.20888,
    "x":.6716, "y":.56776,
    "color":"#ffffff",
    "stroke":"#ff00ff",
    "backgroundColor":"#800080",
    "mode":"momentary",
    "midiNumber":56,
    "midiType":"noteon",

},
{
    "name":"smp09",
    "label":"smp09 - A3",
    "type":"Button",
    "width":.3133, "height":.20888,
    "x":.015, "y":.78664,
    "color":"#ffffff",
    "stroke":"#00ff00",
    "backgroundColor":"#008000",
    "mode":"momentary",
    "midiNumber":57,
    "midiType":"noteon",

},
{
    "name":"smp10",
    "label":"smp10 - A#3",
    "type":"Button",
    "width":.3133, "height":.20888,
    "x":.3433, "y":.78664,
    "color":"#ffffff",
    "stroke":"#007fff",
    "backgroundColor":"#004080",
    "mode":"momentary",
    "midiNumber":58,
    "midiType":"noteon",

},
{
    "name":"smp11",
    "label":"smp11 - B3",
    "type":"Button",
    "width":.3133, "height":.20888,
    "x":.6716, "y":.78664,
    "color":"#ffffff",
    "stroke":"#ff00ff",
    "backgroundColor":"#800080",
    "mode":"momentary",
    "midiNumber":59,
    "midiType":"noteon",

},


], // end PAGE 1
[ // PAGE 2

], // end PAGE 2
[ // PAGE 3, INFO
{
    "name":"infoText",
    "type":"Label",
    "x":.0625, "y":.13,
    "width":.875, "height":.4,
    "align":"left",
    "verticalCenter":false,
    "value":"The pads on page 1 transmit MIDI noteons from C3 to B3, or MIDI note 48 to 59.<br /> The pads also transmit OSC messages with addresses of /smp00 to /smp11, values of 0 or 1.",
    
},
], // end PAGE 3

];