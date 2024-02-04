async function latestCCChallenges() {
    var latestNum = 5
    let htmlResp = document.getElementById("cc")
    var prsList = [
        'Coding Challenge #46: yq',
        'Coding Challenge #45: Port Scanner',
        'Coding Challenge #44: DNS Forwarder',
        'Coding Challenge #43: Tetris',
        'Coding Challenge #42: HTTP(S) Load Tester',
    ];
    for (let i = 0; i < latestNum; i++) {
        let li = document.createElement('li');
        li.innerText = prsList[i];
        htmlResp.appendChild(li);
    }
    // document.getElementById("prs").innerText = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
}

// Call it once on page load
latestCCChallenges();