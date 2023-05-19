// Вы устроились разработчиком в автомобильную компанию. Вам нужно написать код, который отвечает за отображение на сайте информации о транспорте и цене. Вам нужно:

// создать класс Transport, у него есть свойства: type, price, brand и два метода getInfo() и getPrice()
class Transport {
    constructor(type, price, brand, image) {
        this.type = type;
        this.price = price;
        this.brand = brand;
        this.image = image;
    }
    getInfo() {
        return this.brand;
        
    }
    getPrice(){
        return this.price;
    }
}
//создать класс Car, который наследует от Transport. Этот класс должен содержать метод getDoorsCount() , который возвращает количество дверей
class Car extends Transport {
    constructor(type, price, brand, image, doors) {
        super(type, price, brand, image);
        this.doors = doors;
    }
    getDoorsCount() {
        return this.doors;
    }
}
//создать класс Bike, который наследует от Transport. Этот класс должен содержать метод getMaxSpeed(), который возвращает максимальную скорость мотоцикла.
class Bike extends Transport {
    constructor(type, price, brand, image, maxSpeed) {
        super(type, price, brand, image)
        this.maxSpeed = maxSpeed
    }
    getMaxSpeed() {
        return this.maxSpeed
    }
}
//Объект, с которым предстоит работать:
const data = [
    {
        id: 1,
        type: "car",
        brand: "Audi",
        doors: 4,
        price: 4300000,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg",
    },
    {
        id: 2,
        type: "car",
        brand: "Mercedes-Benz",
        doors: 4,
        price: 2800000,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg",
    },
    {
        id: 3,
        type: "bike",
        brand: "Harley-Davidson",
        maxSpeed: 210,
        price: 1300000,
        image: "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg",
    },
    {
        id: 4,
        type: "bike",
        brand: "Harley-Davidson",
        maxSpeed: 220,
        price: 1400000,
        image: "https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png",
    },
]

const vehicle = document.querySelector('.vehicle'); // див, в который будут добавляться карточки с транспортными средствами
data.forEach(el => { // перебор массива объектов
    let div = document.createElement('div'); // создаётся див с карточкой транспортного средства
    div.classList.add('vehicle__item'); 
    let objCar;
    let objBike;
    if (el.type == 'car'){ // в зависимости от типа транспортного средства создаётся объект класса Car или Bike
        objCar = new Car(el.type, el.price, el.brand, el.image, el.doors);
        //добавляетсяв карточку информация из объекта
        div.innerHTML = `<img src="${objCar.image}" alt=""> 
        <div class="vehicle__property">
            <p><b>Марка:</b> ${objCar.getInfo()}</p>
            <p><b>Цена:</b> ${objCar.getPrice()}</p>
            <p><b>Количество дверей:</b> ${objCar.getDoorsCount()}</p>`
    } else if (el.type == 'bike'){ 
        //добавляетсяв карточку информация из объекта
        objBike = new Bike(el.type, el.price, el.brand, el.image, el.maxSpeed);
        div.innerHTML = `<img src="${objBike.image}" alt="">
        <div class="vehicle__property">
            <p><b>Марка:</b> ${objBike.getInfo()}</p>
            <p><b>Цена:</b> ${objBike.getPrice()}</p>
            <p><b>Максимальная скорость:</b> ${objBike.getMaxSpeed()}</p>`
    }
    vehicle.appendChild(div); //добавление карточки в див
})


