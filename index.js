// Code your solution here
// const findMatching = (arr, () => {return arr.filter(driver => driver['name'] = person)})

function findMatching(arr, person) {
    return arr.filter(driver => driver.toUpperCase() === person.toUpperCase())
}

const fuzzyMatch = (arr, char) => arr.filter(driver => driver.slice(0, char.length) === char)

const matchName = (arr, person) => arr.filter(driver => driver.name === person)





// const drivers = [
//     {
//       name: 'Bobby',
//       hometown: 'Pittsburgh' },
//     {
//       name: 'Sammy',
//       hometown: 'New York' } ,
//     {
//       name: 'Sally',
//       hometown: 'Cleveland' },
//     {
//       name: 'Annette',
//       hometown: 'Los Angeles' },
//     {
//       name: 'Bobby',
//       hometown: 'Tampa Bay' }
//   ]
// const bobDrivers = drivers.filter(driver => driver.name === "Bobby")