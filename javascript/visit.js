function populate(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    s2.innerHTML = "";

    if (s1.value === "Jakarta") {
        var optionArray = [
            "|Select a mall",
            "Grand Indonesia|Grand Indonesia",
            "Central Park|Central Park"
        ];
    } else if (s1.value === "Bekasi") {
        var optionArray = [
            "|Select a mall",
            "Summarecon Bekasi|Summarecon Bekasi"
        ];
    }

    for (var i = 0; i < optionArray.length; i++) {
        var pair = optionArray[i].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.textContent = pair[1];
        s2.options.add(newOption);
    }
}
