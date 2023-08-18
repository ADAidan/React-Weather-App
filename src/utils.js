export function formatDayOfWeek(unixTime) {
    const date = new Date(unixTime * 1000)
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    if (date.getDay() === 0) return daysOfWeek[6]
    const dayOfWeek = daysOfWeek[date.getDay() - 1] // temp fix
    return dayOfWeek
}

export function formatDay(unixTime) {
    const date = new Date(unixTime * 1000)
    const day = date.getDate()
    return day
}

export function formatTimeOfDay(unix) {
    const date = new Date(unix * 1000)
    let hours = date.getHours()
    let minutes = date.getMinutes()

    let designator = 'am';
    if (hours === 0) hours = 12;
    if (hours > 12) {
        hours -= 12;
        designator = 'pm';
    }
    if (minutes < 10) minutes = `0${minutes}`;

    return `${hours}:${minutes}${designator}`
}

export function formatWindDirection(num) {
    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
}

export function formatHour(unix) {
    const date = new Date(unix * 1000)
    const hours = date.getHours()
    const minutes = date.getMinutes()

    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

    return `${formattedHours}:${formattedMinutes}`
}
