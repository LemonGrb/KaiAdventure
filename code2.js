gdjs.Instance2Code = {};
gdjs.Instance2Code.localVariables = [];
gdjs.Instance2Code.idToCallbackMap = new Map();
gdjs.Instance2Code.GDKaiObjects1= [];
gdjs.Instance2Code.GDKaiObjects2= [];
gdjs.Instance2Code.GDTerrainObjects1= [];
gdjs.Instance2Code.GDTerrainObjects2= [];
gdjs.Instance2Code.GDBackgroundObjects1= [];
gdjs.Instance2Code.GDBackgroundObjects2= [];
gdjs.Instance2Code.GDPrizeObjects1= [];
gdjs.Instance2Code.GDPrizeObjects2= [];


gdjs.Instance2Code.mapOfGDgdjs_9546Instance2Code_9546GDKaiObjects1Objects = Hashtable.newFrom({"Kai": gdjs.Instance2Code.GDKaiObjects1});
gdjs.Instance2Code.mapOfGDgdjs_9546Instance2Code_9546GDPrizeObjects1Objects = Hashtable.newFrom({"Prize": gdjs.Instance2Code.GDPrizeObjects1});
gdjs.Instance2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Kai"), gdjs.Instance2Code.GDKaiObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.Instance2Code.GDKaiObjects1.length === 0 ) ? 0 :gdjs.Instance2Code.GDKaiObjects1[0].getPointY("")), 0.05), "", 0);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.Instance2Code.GDKaiObjects1.length === 0 ) ? 0 :gdjs.Instance2Code.GDKaiObjects1[0].getPointX("")), 0.05), "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Kai"), gdjs.Instance2Code.GDKaiObjects1);
gdjs.copyArray(runtimeScene.getObjects("Prize"), gdjs.Instance2Code.GDPrizeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Instance2Code.mapOfGDgdjs_9546Instance2Code_9546GDKaiObjects1Objects, gdjs.Instance2Code.mapOfGDgdjs_9546Instance2Code_9546GDPrizeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainLevel", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Instance2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Instance2Code.GDKaiObjects1.length = 0;
gdjs.Instance2Code.GDKaiObjects2.length = 0;
gdjs.Instance2Code.GDTerrainObjects1.length = 0;
gdjs.Instance2Code.GDTerrainObjects2.length = 0;
gdjs.Instance2Code.GDBackgroundObjects1.length = 0;
gdjs.Instance2Code.GDBackgroundObjects2.length = 0;
gdjs.Instance2Code.GDPrizeObjects1.length = 0;
gdjs.Instance2Code.GDPrizeObjects2.length = 0;

gdjs.Instance2Code.eventsList0(runtimeScene);
gdjs.Instance2Code.GDKaiObjects1.length = 0;
gdjs.Instance2Code.GDKaiObjects2.length = 0;
gdjs.Instance2Code.GDTerrainObjects1.length = 0;
gdjs.Instance2Code.GDTerrainObjects2.length = 0;
gdjs.Instance2Code.GDBackgroundObjects1.length = 0;
gdjs.Instance2Code.GDBackgroundObjects2.length = 0;
gdjs.Instance2Code.GDPrizeObjects1.length = 0;
gdjs.Instance2Code.GDPrizeObjects2.length = 0;


return;

}

gdjs['Instance2Code'] = gdjs.Instance2Code;
