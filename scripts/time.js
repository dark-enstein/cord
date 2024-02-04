async function currentTime() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const now = new Date()
    document.getElementById("date").innerText = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
    document.getElementById("time").innerText = `${now.getHours()}:${now.getSeconds()}`;
}

// Update the time every second
setInterval(currentTime, 1000);

// Call it once on page load
currentTime();