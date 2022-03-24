const ATTACK_VALUE = 10; // it will never change
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14; // setting monster attavk value
const HEAL_VALUE = 20;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound() {
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("you won!");
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("you lost!");
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert("You have a draw");
    }
}

function attackMonster(mode) {
    let maxDamage;
    if (mode === "ATTACK") {
        maxDamage = ATTACK_VALUE;
    } else if (mode === "STRONG_ATTACK_VALUE") {
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    endRound();
}

function attackHandler() {
    attackMonster("ATTACK");
}

function strongAttackHandler() {
    attackMonster("STRONG_ATTACK_VALUE");
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("you can't heal more than your max initial health");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    endRound();
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
