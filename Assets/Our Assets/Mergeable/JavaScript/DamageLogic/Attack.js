/// <summary>
/// attack.js
/// Feb 22, 2011
/// Matthew Weitzel
/// Projectile attack script
/// variables:
///	damageRules
///	destroySelfOnHit
/// </summary>

var damageRules : DamageApplier;
var destroySelfOnHit = true;

function Update () {
}

function OnCollisionEnter(collision : Collision) {

	attacker = this.gameObject.GetComponent("Stats");
	defender = collision.collider.gameObject;
	if(isAnObjectWithStats(defender))
		damageRules.applyAttack(attacker, isAnObjectWithStats(defender));
	
	if(destroySelfOnHit)
		Destroy(gameObject);
	
}

function isAnObjectWithStats(thingToCheck){
	return thingToCheck.GetComponent("Stats");	
}