var setup = new Creep.Setup('robber');
setup.minControllerLevel = 3;
setup.globalMeasurement = true;
setup.measureByHome = true;
setup.maxCount = function(room){
    let maxRange = 2;
    let max = 0;
    let distance, flag;
    let calcMax = flagEntry => {
        distance = routeRange(room.name, flagEntry.roomName);
        if( distance > maxRange ) 
            return;
        flag = Game.flags[flagEntry.name];
        if( !flag.targetOf || flag.targetOf.length == 0 )
            max++;
            max++;
    }
    let flagEntries = FlagDir.filter(FLAG_COLOR.invade.robbingHaul);
    flagEntries.forEach(calcMax);
    return max;
};
setup.default = {
    fixedBody: [], 
    multiBody: [CARRY, CARRY, MOVE], 
    minAbsEnergyAvailable: 150, 
    minEnergyAvailable: 0.4,
    maxMulti: 10,
    maxCount: setup.maxCount, 
    maxWeight: 2000,
    minMulti: (room) => (room.controller.level)
};
setup.RCL = {
    1: setup.none,
    2: setup.default,
    3: setup.default,
    4: setup.default,
    5: setup.default,
    6: setup.default,
    7: setup.default,
    8: setup.default
};
module.exports = setup;
