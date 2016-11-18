var setup = new Creep.Setup('robber');
setup.minControllerLevel = 3;
setup.globalMeasurement = true;
setup.measureByHome = true;
setup.default = {
    fixedBody: [], 
    multiBody: [CARRY, CARRY, MOVE], 
    minAbsEnergyAvailable: 150, 
    minEnergyAvailable: 0.4,
    //maxMulti: setup.maxMulti,
    maxMulti: 10,
    maxCount: 5, 
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
