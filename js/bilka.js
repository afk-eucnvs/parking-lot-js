class BilkaPriceStrategy {
    getDescription() {
        return "";
    }

    calculatePrice(from, to) {
        return 0;
    }
}

// function calculateBilkaPrice(from, to) {
//     const time = (to - from) / 1000;
//     return 10 * (Math.floor(time/15) + 1);
// }

document.addEventListener('DOMContentLoaded', () => {
    main(new ParkingLot(new BilkaPriceStrategy()));
});