const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 1,
    health: 100,
    image: "images/cardpic.webp",
    
    attacked() {
        this.health -= 20;
        if (this.health < 0) {
            this.health = 0;
            alert("Character Died");
        }
    },
    
    levelUp() {
        this.level += 1;
        // this.health = 100;   i feel like leveling up should mean reseting your health but thats just me
    }
}

//making sure the text display works when the buttons are pressed
const levelText = document.querySelector("#level");
const healthText = document.querySelector("#health");

function updateLevelHealthText() {
    levelText.textContent = character.level;
    healthText.textContent = character.health;
}


//actaully calling the buttons so they will work when the buttons are pressed
document.querySelector(".attacked").addEventListener("click", () => {
    character.attacked();
    updateLevelHealthText();
});
document.querySelector(".levelUp").addEventListener("click", () => {
    character.levelUp();
    updateLevelHealthText();
});