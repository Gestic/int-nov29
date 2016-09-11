var setup = new Creep.Setup('melee');
setup.multiBody = [ATTACK, MOVE]; 
setup.minAbsEnergyAvailable = 260;
setup.maxMulti = 10;
setup.globalMeasurement = true;
setup.minControllerLevel = 2;
setup.minEnergyAvailable = function(spawn){
    return 0.8;
};
setup.maxCount = function(spawn){
    
    if (!spawn.room.situation.invasion 
        && DEFCON != 3
        && setup.EnoughStorageIsAvailableForDefense(spawn) 
        )
        return 0;
    else
        return FlagDir.count(FLAG_COLOR.defense);
   

};
setup.maxWeight = function(spawn){
    return null;
};
module.exports = setup;