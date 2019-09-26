class FotexPriceStrategy {
    getDescription() {
        return "Velkommen til Bilka' parkeringsplads. Her koster det 10 kr pr påbegyndt kvarter.";
    }

    calculatePrice(from, to) {
        const time = (to - from) / 1000;
        return 10 * (Math.floor(time/15) + 1);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    main(new ParkingLot(new FotexPriceStrategy()));
});