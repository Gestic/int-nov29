var setup = new Creep.Setup('robber');
setup.minControllerLevel = 3;
setup.globalMeasurement = true;
setup.measureByHome = true;
setup.maxWeight = function(room){
    return setup.maxCount(room) * 2000; 
};
setup.default = {
    fixedBody: [CARRY, CARRY, MOVE], 
    multiBody: [CARRY, CARRY, MOVE], 
    minAbsEnergyAvailable: 150, 
    minEnergyAvailable: 0.4,
	maxMulti: 10,
	minMulti: (room) => (room.controller.level),
    // maxCount: setup.maxCount, 
    maxWeight: setup.maxWeight
};
setup.RCL = {
    1: setup.none,
    2: setup.none,
    3: setup.default,
    4: setup.default,
    5: setup.default,
    6: setup.default,
    7: setup.default,
    8: setup.default
};
module.exports = setup;

// var setup = new Creep.Setup('privateer');
// setup.minControllerLevel = 3;
// setup.globalMeasurement = true;
// setup.measureByHome = true;
// setup.default = {
    // fixedBody: [WORK, CARRY, MOVE], 
    // multiBody: [WORK, CARRY, MOVE], 
    // minAbsEnergyAvailable: 400, 
    // minEnergyAvailable: 0.8,
    // maxMulti: 10,
    // minMulti: (room) => (room.controller.level),
    // maxWeight: (room) => room.privateerMaxWeight
// };
// setup.RCL = {
    // 1: setup.none,
    // 2: setup.none,
    // 3: setup.default,
    // 4: setup.default,
    // 5: setup.default,
    // 6: setup.default,
    // 7: setup.default,
    // 8: setup.default
// };
// module.exports = setup;