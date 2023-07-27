class ParkingLot{
    constructor(capacity) {
        this.capacity = capacity;
        this.remainingCapacity = capacity;
    }
    parkedCar = [];

    park(parkedCar) {
        if (this.remainingCapacity === 0) {
            throw new Error(`mobil ${parkedCar.noPol} gagal parkir, parkiran penuh`);
        } else {
            this.parkedCar.push(parkedCar);
            this.remainingCapacity--;
            return `mobil ${parkedCar.noPol} berhasil parkir`;
        }
    }

    leave(noPol) {
        let index = this.parkedCar.findIndex(car => car.noPol === noPol);
        if (index >= 0) {
            this.parkedCar.splice(index, 1);
            this.remainingCapacity++;
            return `mobil ${noPol} telah keluar`;
        } else {
            throw new Error("mobil tidak terdaftar");
        }
    }

    check() {
        return this;
    }
}

export default ParkingLot;