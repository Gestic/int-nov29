var setup = new Creep.Setup('hopper');
setup.minControllerLevel = 4;
setup.globalMeasurement = true;
setup.measureByHome = false;

setup.mid = {
    fixedBody: [], 
    multiBody: [TOUGH, MOVE, MOVE, HEAL], 
    minAbsEnergyAvailable: 360, 
    minEnergyAvailable: 0.5,
    maxMulti: 12, // 7
    minMulti: 7,
    maxCount: 7,
    maxWeight: null//(room) => room.defenseMaxWeight(2000, 'warrior')
};

setup.RCL = {
    1: setup.none,
    2: setup.none,
    3: setup.none,
    4: setup.none,
    5: setup.none,
    6: setup.mid,
    7: setup.mid,
    8: setup.mid
};
module.exports = setup;