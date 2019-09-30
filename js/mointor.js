class monitor {
    
    
    constructor(parkingLot) {
        this.parkingLot = parkingLot;
        this.targets = this.parkingLot.checkedInCars;
        console.log("现在正在监控停车场");

       n.addEventLisner('Click', ()=>{
            console.log("中国人是黄色的")
            this.lookOut = true;
        })

        main(parkingLot);        
    }
    

}