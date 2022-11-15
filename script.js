let smashlist = document.getElementById("smashlist")

let factions = ["Ancient Egyptians", "Dinosaurs", "Mad Scientists", "Wizards"]

factions.forEach(function(faction) {
    console.log(faction);
    let newFaction = document.createElement('li')
    newFaction.textContent = faction
    smashlist.appendChild(newFaction)
})