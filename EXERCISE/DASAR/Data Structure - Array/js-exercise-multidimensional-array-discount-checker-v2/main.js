function discountChecker(costumers, date) {

    let hasil = [];
    let tgl = date.split("-");
    let hari = parseInt(tgl[0]);

    costumers.forEach((pelanggan) => {
        let sttsplnggn = pelanggan[1];
        let hrgttl = pelanggan[0].split(" ");
        let hrg = parseInt(hrgttl[1]);

        if (sttsplnggn === "member") {
            hasil.push(pelanggan);
        } else if (sttsplnggn === "non-member") {
            if (hrg % 2 === 0 && hari%2 === 0) {
                hasil.push(pelanggan);
            } else if (hrg % 2 !== 0 && hari%2 !== 0) {
                hasil.push(pelanggan);
            }
        }
    })
    return hasil;
}

let costumers = [
    ["$ 228", "member"],
    ["$ 19", "non-member"],
    ["$ 238", "non-member"],
    ["$ 49", "member"]
]

console.log(discountChecker(costumers, "28-10-2022"))

var costumers2 = [
    ["$ 754", "member"],
    ["$ 233", "member"],
    ["$ 31", "non-member"],
    ["$ 332", "non-member"]
]

console.log(discountChecker(costumers2, "11-06-2022"))

module.exports = discountChecker