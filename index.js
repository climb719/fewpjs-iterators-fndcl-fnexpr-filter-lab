function findMatching(drivers, string) {
    return drivers.filter(name => name.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string) {
    let n = string[0].toLocaleLowerCase()
    return drivers.filter(name => n === name[0].toLocaleLowerCase() )
}

function matchName(drivers, string) {
    return drivers.filter(n => n.name === string )
}
