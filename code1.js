gdjs.Instance1Code = {};
gdjs.Instance1Code.localVariables = [];
gdjs.Instance1Code.idToCallbackMap = new Map();
gdjs.Instance1Code.GDKaiObjects1= [];
gdjs.Instance1Code.GDKaiObjects2= [];
gdjs.Instance1Code.GDTerrainObjects1= [];
gdjs.Instance1Code.GDTerrainObjects2= [];
gdjs.Instance1Code.GDBlueBGObjects1= [];
gdjs.Instance1Code.GDBlueBGObjects2= [];
gdjs.Instance1Code.GDEnemyObjects1= [];
gdjs.Instance1Code.GDEnemyObjects2= [];
gdjs.Instance1Code.GDJumpThru_9595PlatObjects1= [];
gdjs.Instance1Code.GDJumpThru_9595PlatObjects2= [];
gdjs.Instance1Code.GDPrizeObjects1= [];
gdjs.Instance1Code.GDPrizeObjects2= [];


gdjs.Instance1Code.mapOfGDgdjs_9546Instance1Code_9546GDKaiObjects1Objects = Hashtable.newFrom({"Kai": gdjs.Instance1Code.GDKaiObjects1});
gdjs.Instance1Code.mapOfGDgdjs_9546Instance1Code_9546GDPrizeObjects1Objects = Hashtable.newFrom({"Prize": gdjs.Instance1Code.GDPrizeObjects1});
gdjs.Instance1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.75, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Kai"), gdjs.Instance1Code.GDKaiObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.Instance1Code.GDKaiObjects1.length === 0 ) ? 0 :gdjs.Instance1Code.GDKaiObjects1[0].getPointY("")), 0.05), "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Kai"), gdjs.Instance1Code.GDKaiObjects1);
gdjs.copyArray(runtimeScene.getObjects("Prize"), gdjs.Instance1Code.GDPrizeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Instance1Code.mapOfGDgdjs_9546Instance1Code_9546GDKaiObjects1Objects, gdjs.Instance1Code.mapOfGDgdjs_9546Instance1Code_9546GDPrizeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainLevel", false);
}
}

}


};

gdjs.Instance1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Instance1Code.GDKaiObjects1.length = 0;
gdjs.Instance1Code.GDKaiObjects2.length = 0;
gdjs.Instance1Code.GDTerrainObjects1.length = 0;
gdjs.Instance1Code.GDTerrainObjects2.length = 0;
gdjs.Instance1Code.GDBlueBGObjects1.length = 0;
gdjs.Instance1Code.GDBlueBGObjects2.length = 0;
gdjs.Instance1Code.GDEnemyObjects1.length = 0;
gdjs.Instance1Code.GDEnemyObjects2.length = 0;
gdjs.Instance1Code.GDJumpThru_9595PlatObjects1.length = 0;
gdjs.Instance1Code.GDJumpThru_9595PlatObjects2.length = 0;
gdjs.Instance1Code.GDPrizeObjects1.length = 0;
gdjs.Instance1Code.GDPrizeObjects2.length = 0;

gdjs.Instance1Code.eventsList0(runtimeScene);
gdjs.Instance1Code.GDKaiObjects1.length = 0;
gdjs.Instance1Code.GDKaiObjects2.length = 0;
gdjs.Instance1Code.GDTerrainObjects1.length = 0;
gdjs.Instance1Code.GDTerrainObjects2.length = 0;
gdjs.Instance1Code.GDBlueBGObjects1.length = 0;
gdjs.Instance1Code.GDBlueBGObjects2.length = 0;
gdjs.Instance1Code.GDEnemyObjects1.length = 0;
gdjs.Instance1Code.GDEnemyObjects2.length = 0;
gdjs.Instance1Code.GDJumpThru_9595PlatObjects1.length = 0;
gdjs.Instance1Code.GDJumpThru_9595PlatObjects2.length = 0;
gdjs.Instance1Code.GDPrizeObjects1.length = 0;
gdjs.Instance1Code.GDPrizeObjects2.length = 0;


return;

}

gdjs['Instance1Code'] = gdjs.Instance1Code;
