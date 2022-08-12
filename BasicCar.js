class BacicCar {
    constructor(color, maxSpeed, price){
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.price = price;
    }

    run(){
        console.log('Running...');
    }

    stop(){
        console.log('Stop!');
    }

    attack(){
        console.log('Attack!');
    }

}