loadedInterfaceName = "optilyre 0";
interfaceOrientation = "portrait";

// scripting
opti=new Object();
opti.page=0;
opti.changePage=function() {
    if(opti.page===0) {
        opti.page=1;
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
    "ontouchstart":"opti.changePage()",
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
    "color":"#03040",
    "stroke":"#00bfff",
    "backgroundColor":"#003040",
    "mode":"momentary",
    "ontouchstart":"control.changePage(3)",
},

]; // end constants

pages = [ [ // PAGE 0


],

];