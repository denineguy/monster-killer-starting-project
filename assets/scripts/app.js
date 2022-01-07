const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 5;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster(mode) {
    let maxDamage
    if (mode === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    } else if (mode === 'STROMG_ATTACK'){
        maxDamage = STRONG_ATTACK_VALUE;
    };

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;

    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!');
    } else if(currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw!');
    }
}

function attackHandler() {
    // const damage = dealMonsterDamage(ATTACK_VALUE);
    // currentMonsterHealth -= damage;

    // const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    // currentPlayerHealth -= playerDamage;
    // if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    //     alert('You won!');
    // } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    //     alert('You lost!');
    // } else if(currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    //     alert('You have a draw!');
    // }

    attackMonster('ATTACK');
}

function strongAttackHandler() {
    attackMonster('STROMG_ATTACK');
    // const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
    // currentMonsterHealth -= damage;

    // const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    // currentPlayerHealth -= playerDamage;
    // if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    //     alert('You won!');
    // } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    //     alert('You lost!');
    // } else if(currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    //     alert('You have a draw!');
    // }
}


attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
