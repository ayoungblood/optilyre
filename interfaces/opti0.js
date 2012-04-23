loadedInterfaceName = "optilyre 0";
interfaceOrientation = "portrait";

// scripting
opti = new Object();
opti.page = 0;
opti.lastPage = 0;
opti.nextPage = function() {
    if (opti.page == 2) {
        control.changePage(0);
        opti.page = 0;
        opti.lastPage = 0;
    }
    else {
        control.changePage('next');
        opti.page++;
        opti.lastPage++;
    }
}
opti.infoPage = function() {
    if (opti.page == 3) {
        control.changePage(opti.lastPage);
        opti.page = opti.lastPage;
    }
    else {
        opti.page = 3;
        control.changePage(3);
    }
}

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
    "ontouchstart":"opti.nextPage()",
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
    "ontouchstart":"opti.infoPage()",
},

]; // end constants

var color0 = "#ff8000";
var color1 = "#ff0000";
var color2 = "#800000";
var color3 = "#b00000";
var color4 = "#ff8000";
var color5 = "#000080";
var color6 = "#b00000";
var color7 = "#ff8000";
var color8 = "#000080";

pages = [ [ // PAGE 0
{
    "name":"sl00",
    "type":"Slider",
    "width":.97, "height":.09,
    "x":.02, "y":.13,
    "min":0,
    "max":1024,
    "color":color0,
    "stroke":color1,
    "backgroundColor":color2,
    "midiType":"cc",
    "midiNumber":0,
    "midiMin":0,
    "midiMax":127,
    "onvaluechange":"sl00Label.changeValue('sl00 - ' + Math.floor(this.value));",
},
{
    "name":"sl01",
    "type":"Slider",
    "width":.97, "height":.09,
    "x":.02, "y":.23,
    "min":0,
    "max":1024,
    "color":color0,
    "stroke":color1,
    "backgroundColor":color2,
    "midiType":"cc",
    "midiNumber":1,
    "midiMin":0,
    "midiMax":127,
    "onvaluechange":"sl01Label.changeValue('sl01 - ' + Math.floor(this.value));",
},
{
    "name":"sl02",
    "type":"Slider",
    "width":.97, "height":.09,
    "x":.02, "y":.33,
    "min":0,
    "max":1024,
    "color":color0,
    "stroke":color1,
    "backgroundColor":color2,
    "midiType":"cc",
    "midiNumber":2,
    "midiMin":0,
    "midiMax":127,
    "onvaluechange":"sl02Label.changeValue('sl02 - ' + Math.floor(this.value));",
},
{
    "name":"sl03",
    "type":"Slider",
    "width":.97, "height":.09,
    "x":.02, "y":.43,
    "min":0,
    "max":1024,
    "color":color0,
    "stroke":color1,
    "backgroundColor":color2,
    "midiType":"cc",
    "midiNumber":3,
    "midiMin":0,
    "midiMax":127,
    "onvaluechange":"sl03Label.changeValue('sl03 - ' + Math.floor(this.value));",
},
{
    "name":"sl00Label",
    "type":"Label",
    "width":.3, "height":.04,
    "x":.05, "y":.155,
    "align":"left",
    "value":"sl00 - 0",
},
{
    "name":"sl01Label",
    "type":"Label",
    "width":.3, "height":.04,
    "x":.05, "y":.255,
    "align":"left",
    "value":"sl01 - 0",
},
{
    "name":"sl02Label",
    "type":"Label",
    "width":.3, "height":.04,
    "x":.05, "y":.355,
    "align":"left",
    "value":"sl02 - 0",
},
{
    "name":"sl03Label",
    "type":"Label",
    "width":.3, "height":.04,
    "x":.05, "y":.455,
    "align":"left",
    "value":"sl03 - 0",
},
{
    "name":"sw00",
    "type":"Button",
    "label":"sw00",
    "width":.23125, "height":.09,
    "x":.015, "y":.53,
    "color":color3,
    "stroke":color4,
    "backgroundColor":color5,
},
{
    "name":"sw01",
    "type":"Button",
    "label":"sw01",
    "width":.23125, "height":.09,
    "x":.26125, "y":.53,
    "color":color3,
    "stroke":color4,
    "backgroundColor":color5,
},
{
    "name":"sw02",
    "type":"Button",
    "label":"sw02",
    "width":.23125, "height":.09,
    "x":.5075, "y":.53,
    "color":color3,
    "stroke":color4,
    "backgroundColor":color5,
},
{
    "name":"sw03",
    "type":"Button",
    "label":"sw01",
    "width":.23125, "height":.09,
    "x":.75375, "y":.53,
    "color":color3,
    "stroke":color4,
    "backgroundColor":color5,
},
{
    "name":"INIT",
    "label":"INIT",
    "type":"Button",
    "width":.3133, "height":.14,
    "x":.015, "y":.63,
    "color":color6,
    "stroke":color7,
    "backgroundColor":color8,
    "mode":"momentary",
    
},
{
    "name":"FOO",
    "label":"FOO",
    "type":"Button",
    "width":.3133, "height":.14,
    "x":.3433, "y":.63,
    "color":color6,
    "stroke":color7,
    "backgroundColor":color8,
    "mode":"momentary",

},
{
    "name":"BAR",
    "label":"BAR",
    "type":"Button",
    "width":.3133, "height":.14,
    "x":.6716, "y":.63,
    "color":color6,
    "stroke":color7,
    "backgroundColor":color8,
    "mode":"momentary",

},
{
    "name":"disp00",
    "type":"Label",
    "width":.27, "height":.04,
    "x":.05, "y":.76,
    "align":"right",
    "value":"______",
    "oninit":"disp00.label.style.fontSize = '25px'",
},
{
    "name":"disp01",
    "type":"Label",
    "width":.27, "height":.04,
    "x":.05, "y":.815,
    "align":"right",
    "value":"______",
    "oninit":"disp01.label.style.fontSize = '25px'",
},
{
    "name":"disp02",
    "type":"Slider",
    "width":.3133, "height":.045,
    "x":.02, "y":.90,
    "min":0,
    "max":1024,
    "color":"#ffff00",
    "stroke":"#aaaaaa",
    "backgroundColor":"#303030",

},
{
    "name":"disp03",
    "type":"Slider",
    "width":.3133, "height":.045,
    "x":.02, "y":.955,
    "min":0,
    "max":1024,
    "color":"#ffff00",
    "stroke":"#aaaaaa",
    "backgroundColor":"#303030",
    
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
    "name":"infoText0",
    "type":"Label",
    "x":.0625, "y":.13,
    "width":.875, "height":.4,
    "align":"left",
    "verticalCenter":false,
    "value":"The first four sliders on page 0 transmit MIDI CC from CC0 to CC3, with a range of 0-127.<br /> They also transmit OSC messages on sl00 to sl03 inclusively, with a range of 0-1023.",
    
},
{
    "name":"infoText1",
    "type":"Label",
    "x":.0625, "y":.53,
    "width":.875, "height":.4,
    "align":"left",
    "verticalCenter":false,
    "value":"The pads on page 1 transmit MIDI noteons from C3 to B3, or MIDI note 48 to 59.<br /> The pads also transmit OSC messages with addresses of /smp00 to /smp11, values of 0 or 1.",
    
},
], // end PAGE 3

];