class kinaPriceStrategy {
    getDescription() {
        return "如果您能读懂这篇文章, 您的眼睛就像意大利面条 ;-)";
    }

    calculatePrice() {
        return 0;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const parkinglot = new ParkingLot(new kinaPriceStrategy())

    new monitor(parkinglot);
});