function dateToString(date) {
    return (
        date.getFullYear() +
        '-' +
        pad(date.getMonth() + 1) +
        '-' +
        pad(date.getDate())
    )
}

function pad(n, s = String(n)) {
    return s.length < 2 ? `0${s}` : s
}

function stringToDate(str) {
    const [y, m, d] = str.split('-');
    return new Date(+y, m - 1, +d);
}

export { dateToString, stringToDate }