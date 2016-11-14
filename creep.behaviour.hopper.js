module.exports = {
    name: 'hopper',
    run: function(creep) {
    	if(!creep.memory.TargetFlag) {
    		creep.memory.TargetFlag = "Hopper";
    	}

        if(creep.room.name == Game.flags["HopperHome"].room.name) {

            creep.memory.HopperAttacked = false;

            if(creep.hits < (creep.hitsMax-10)) {
                if(creep.pos.x == 0 || creep.pos.y == 0 || creep.pos.x == 49 || creep.pos.y == 49) {
                    creep.moveTo(Game.flags["HopperHome"]);
                }
                creep.memory.HopperAttacked = false;
                let injured = creep.pos.findInRange(creep.room.casualties, 3);
                if( injured.length > 0 ){
                    if(creep.pos.isNearTo(injured[0])) {
                        creep.heal(injured[0]);
                    }
                    else {
                        creep.rangedHeal(injured[0]);
                    }
                return; // wait for healing
                }
            }
        }


        var targetFlag = Game.flags[creep.memory.TargetFlag];

        if(!targetFlag.room || targetFlag.room.name != creep.room.name) {
                creep.moveTo(targetFlag);
        } else {

            var wall = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_RAMPART);// || structure.structureType == STRUCTURE_WALL);// == STRUCTURE_RAMPART);// || structure.structureType == STRUCTURE_WALL); //== STRUCTURE_TOWER);//
                    }
            });

            if(!creep.memory.HopperAttacked) {

                if(wall) {
                   creep.rangedMassAttack();
                    var result = creep.rangedAttack(wall);
                    creep.memory.HopperAttacked = true;
                    return;
                }
            }
            var result = creep.rangedAttack(wall);
            creep.moveTo(Game.flags["HopperHome"]);
            creep.memory.HopTime = Game.time + 4;
            creep.memory.HopperAttacked = false;
        }
	}
}