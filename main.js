import ParkingLot from "./ParkingLot.js";
import Car from "./Car.js";

const createParkingLot = (capacity) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(new ParkingLot(capacity));
            console.log(`parkiran berhasil dibuat dengan kapasitas ${capacity}`)
        }, 5000);
    });
}

const parkCar = (parkingLot, parkedCar) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const result = parkingLot.park(parkedCar);
                resolve(result);
                console.log(result);
            } catch (error) {
                reject(error);
            }
        }, 3000);
    });
}

const leaveCar = (parkingLot, noPol) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const result = parkingLot.leave(noPol);
                resolve(result);
                console.log(result);
            } catch (error) {
                reject(error);
            }
        }, 1500);
    });
}

const checkInfo = (parkingLot) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const obj = parkingLot.check();
            resolve(obj);
            console.log(obj);
        }, 500)
    });
}

async function main() {
    const parkingLot = await createParkingLot(2);
    await parkCar(parkingLot, new Car("B1RI", "Jokowi"));
    await parkCar(parkingLot, new Car("B2RI", "Pak Kiayi"));
    try {
        await parkCar(parkingLot, new Car("B3RI", "Pak Prabowo"));
    } catch (error) {
        console.log(error.message);
    }
    await leaveCar(parkingLot, "B2RI");
    await parkCar(parkingLot, new Car("B3RI", "Prabowo"));
    try {
        await leaveCar(parkingLot, "B2RI");
    } catch (error) {
        console.log(error.message);
    }
    await checkInfo(parkingLot);
}

main();