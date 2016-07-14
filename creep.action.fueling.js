var action = _.cloneDeep(require('creep.action'));

action.name = 'fueling';
action.isValidAction = function(creep){
    return ( creep.carry.energy > 0 && creep.room.towerFreeCapacity > 0 );
};
action.isValidTarget = function(target){
    return ( (target != null) && (target.energy != null) && (target.energy < target.energyCapacity) );
};   
action.newTarget = function(creep){
    return room.towers.find(function(tower) { // TODO: include Nuker
        tower.energy < tower.energyCapacity && this.isAddableTarget(tower) 
    });
};
action.work = function(creep){
    return creep.transfer(creep.target, RESOURCE_ENERGY);
};

module.exports = action;