gdjs.MainLevelCode = {};
gdjs.MainLevelCode.localVariables = [];
gdjs.MainLevelCode.idToCallbackMap = new Map();
gdjs.MainLevelCode.GDKaiObjects1= [];
gdjs.MainLevelCode.GDKaiObjects2= [];
gdjs.MainLevelCode.GDKaiObjects3= [];
gdjs.MainLevelCode.GDGrassBaseObjects1= [];
gdjs.MainLevelCode.GDGrassBaseObjects2= [];
gdjs.MainLevelCode.GDGrassBaseObjects3= [];
gdjs.MainLevelCode.GDPathsObjects1= [];
gdjs.MainLevelCode.GDPathsObjects2= [];
gdjs.MainLevelCode.GDPathsObjects3= [];
gdjs.MainLevelCode.GDWaterObjects1= [];
gdjs.MainLevelCode.GDWaterObjects2= [];
gdjs.MainLevelCode.GDWaterObjects3= [];
gdjs.MainLevelCode.GDLandObjects1= [];
gdjs.MainLevelCode.GDLandObjects2= [];
gdjs.MainLevelCode.GDLandObjects3= [];
gdjs.MainLevelCode.GDBridgeObjects1= [];
gdjs.MainLevelCode.GDBridgeObjects2= [];
gdjs.MainLevelCode.GDBridgeObjects3= [];
gdjs.MainLevelCode.GDNatureObjects1= [];
gdjs.MainLevelCode.GDNatureObjects2= [];
gdjs.MainLevelCode.GDNatureObjects3= [];
gdjs.MainLevelCode.GDBigTreeObjects1= [];
gdjs.MainLevelCode.GDBigTreeObjects2= [];
gdjs.MainLevelCode.GDBigTreeObjects3= [];
gdjs.MainLevelCode.GDChestObjects1= [];
gdjs.MainLevelCode.GDChestObjects2= [];
gdjs.MainLevelCode.GDChestObjects3= [];
gdjs.MainLevelCode.GDNPC1Objects1= [];
gdjs.MainLevelCode.GDNPC1Objects2= [];
gdjs.MainLevelCode.GDNPC1Objects3= [];
gdjs.MainLevelCode.GDNPC2Objects1= [];
gdjs.MainLevelCode.GDNPC2Objects2= [];
gdjs.MainLevelCode.GDNPC2Objects3= [];
gdjs.MainLevelCode.GDPrizeObjects1= [];
gdjs.MainLevelCode.GDPrizeObjects2= [];
gdjs.MainLevelCode.GDPrizeObjects3= [];


gdjs.MainLevelCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Kai"), gdjs.MainLevelCode.GDKaiObjects1);
{for(var i = 0, len = gdjs.MainLevelCode.GDKaiObjects1.length ;i < len;++i) {
    gdjs.MainLevelCode.GDKaiObjects1[i].getBehavior("Animation").setAnimationName(gdjs.evtTools.input.lastPressedKey(runtimeScene));
}
}
}

}


};gdjs.MainLevelCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "", 0);
}
}

}


};gdjs.MainLevelCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Kai"), gdjs.MainLevelCode.GDKaiObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.MainLevelCode.GDKaiObjects1.length === 0 ) ? 0 :gdjs.MainLevelCode.GDKaiObjects1[0].getPointX("")), 0.05), "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.MainLevelCode.GDKaiObjects1.length === 0 ) ? 0 :gdjs.MainLevelCode.GDKaiObjects1[0].getPointY("")), 0.05), "", 0);
}
}

}


};gdjs.MainLevelCode.eventsList3 = function(runtimeScene) {

{


gdjs.MainLevelCode.eventsList1(runtimeScene);
}


{


gdjs.MainLevelCode.eventsList2(runtimeScene);
}


};gdjs.MainLevelCode.mapOfGDgdjs_9546MainLevelCode_9546GDKaiObjects2Objects = Hashtable.newFrom({"Kai": gdjs.MainLevelCode.GDKaiObjects2});
gdjs.MainLevelCode.mapOfGDgdjs_9546MainLevelCode_9546GDNPC1Objects2Objects = Hashtable.newFrom({"NPC1": gdjs.MainLevelCode.GDNPC1Objects2});
gdjs.MainLevelCode.mapOfGDgdjs_9546MainLevelCode_9546GDKaiObjects1Objects = Hashtable.newFrom({"Kai": gdjs.MainLevelCode.GDKaiObjects1});
gdjs.MainLevelCode.mapOfGDgdjs_9546MainLevelCode_9546GDNPC2Objects1Objects = Hashtable.newFrom({"NPC2": gdjs.MainLevelCode.GDNPC2Objects1});
gdjs.MainLevelCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Kai"), gdjs.MainLevelCode.GDKaiObjects2);
gdjs.copyArray(runtimeScene.getObjects("NPC1"), gdjs.MainLevelCode.GDNPC1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainLevelCode.mapOfGDgdjs_9546MainLevelCode_9546GDKaiObjects2Objects, gdjs.MainLevelCode.mapOfGDgdjs_9546MainLevelCode_9546GDNPC1Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(116522412);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instance1", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Kai"), gdjs.MainLevelCode.GDKaiObjects1);
gdjs.copyArray(runtimeScene.getObjects("NPC2"), gdjs.MainLevelCode.GDNPC2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainLevelCode.mapOfGDgdjs_9546MainLevelCode_9546GDKaiObjects1Objects, gdjs.MainLevelCode.mapOfGDgdjs_9546MainLevelCode_9546GDNPC2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(116566380);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instance2", false);
}
}

}


};gdjs.MainLevelCode.eventsList5 = function(runtimeScene) {

{


gdjs.MainLevelCode.eventsList0(runtimeScene);
}


{


gdjs.MainLevelCode.eventsList3(runtimeScene);
}


{


gdjs.MainLevelCode.eventsList4(runtimeScene);
}


};

gdjs.MainLevelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainLevelCode.GDKaiObjects1.length = 0;
gdjs.MainLevelCode.GDKaiObjects2.length = 0;
gdjs.MainLevelCode.GDKaiObjects3.length = 0;
gdjs.MainLevelCode.GDGrassBaseObjects1.length = 0;
gdjs.MainLevelCode.GDGrassBaseObjects2.length = 0;
gdjs.MainLevelCode.GDGrassBaseObjects3.length = 0;
gdjs.MainLevelCode.GDPathsObjects1.length = 0;
gdjs.MainLevelCode.GDPathsObjects2.length = 0;
gdjs.MainLevelCode.GDPathsObjects3.length = 0;
gdjs.MainLevelCode.GDWaterObjects1.length = 0;
gdjs.MainLevelCode.GDWaterObjects2.length = 0;
gdjs.MainLevelCode.GDWaterObjects3.length = 0;
gdjs.MainLevelCode.GDLandObjects1.length = 0;
gdjs.MainLevelCode.GDLandObjects2.length = 0;
gdjs.MainLevelCode.GDLandObjects3.length = 0;
gdjs.MainLevelCode.GDBridgeObjects1.length = 0;
gdjs.MainLevelCode.GDBridgeObjects2.length = 0;
gdjs.MainLevelCode.GDBridgeObjects3.length = 0;
gdjs.MainLevelCode.GDNatureObjects1.length = 0;
gdjs.MainLevelCode.GDNatureObjects2.length = 0;
gdjs.MainLevelCode.GDNatureObjects3.length = 0;
gdjs.MainLevelCode.GDBigTreeObjects1.length = 0;
gdjs.MainLevelCode.GDBigTreeObjects2.length = 0;
gdjs.MainLevelCode.GDBigTreeObjects3.length = 0;
gdjs.MainLevelCode.GDChestObjects1.length = 0;
gdjs.MainLevelCode.GDChestObjects2.length = 0;
gdjs.MainLevelCode.GDChestObjects3.length = 0;
gdjs.MainLevelCode.GDNPC1Objects1.length = 0;
gdjs.MainLevelCode.GDNPC1Objects2.length = 0;
gdjs.MainLevelCode.GDNPC1Objects3.length = 0;
gdjs.MainLevelCode.GDNPC2Objects1.length = 0;
gdjs.MainLevelCode.GDNPC2Objects2.length = 0;
gdjs.MainLevelCode.GDNPC2Objects3.length = 0;
gdjs.MainLevelCode.GDPrizeObjects1.length = 0;
gdjs.MainLevelCode.GDPrizeObjects2.length = 0;
gdjs.MainLevelCode.GDPrizeObjects3.length = 0;

gdjs.MainLevelCode.eventsList5(runtimeScene);
gdjs.MainLevelCode.GDKaiObjects1.length = 0;
gdjs.MainLevelCode.GDKaiObjects2.length = 0;
gdjs.MainLevelCode.GDKaiObjects3.length = 0;
gdjs.MainLevelCode.GDGrassBaseObjects1.length = 0;
gdjs.MainLevelCode.GDGrassBaseObjects2.length = 0;
gdjs.MainLevelCode.GDGrassBaseObjects3.length = 0;
gdjs.MainLevelCode.GDPathsObjects1.length = 0;
gdjs.MainLevelCode.GDPathsObjects2.length = 0;
gdjs.MainLevelCode.GDPathsObjects3.length = 0;
gdjs.MainLevelCode.GDWaterObjects1.length = 0;
gdjs.MainLevelCode.GDWaterObjects2.length = 0;
gdjs.MainLevelCode.GDWaterObjects3.length = 0;
gdjs.MainLevelCode.GDLandObjects1.length = 0;
gdjs.MainLevelCode.GDLandObjects2.length = 0;
gdjs.MainLevelCode.GDLandObjects3.length = 0;
gdjs.MainLevelCode.GDBridgeObjects1.length = 0;
gdjs.MainLevelCode.GDBridgeObjects2.length = 0;
gdjs.MainLevelCode.GDBridgeObjects3.length = 0;
gdjs.MainLevelCode.GDNatureObjects1.length = 0;
gdjs.MainLevelCode.GDNatureObjects2.length = 0;
gdjs.MainLevelCode.GDNatureObjects3.length = 0;
gdjs.MainLevelCode.GDBigTreeObjects1.length = 0;
gdjs.MainLevelCode.GDBigTreeObjects2.length = 0;
gdjs.MainLevelCode.GDBigTreeObjects3.length = 0;
gdjs.MainLevelCode.GDChestObjects1.length = 0;
gdjs.MainLevelCode.GDChestObjects2.length = 0;
gdjs.MainLevelCode.GDChestObjects3.length = 0;
gdjs.MainLevelCode.GDNPC1Objects1.length = 0;
gdjs.MainLevelCode.GDNPC1Objects2.length = 0;
gdjs.MainLevelCode.GDNPC1Objects3.length = 0;
gdjs.MainLevelCode.GDNPC2Objects1.length = 0;
gdjs.MainLevelCode.GDNPC2Objects2.length = 0;
gdjs.MainLevelCode.GDNPC2Objects3.length = 0;
gdjs.MainLevelCode.GDPrizeObjects1.length = 0;
gdjs.MainLevelCode.GDPrizeObjects2.length = 0;
gdjs.MainLevelCode.GDPrizeObjects3.length = 0;


return;

}

gdjs['MainLevelCode'] = gdjs.MainLevelCode;
