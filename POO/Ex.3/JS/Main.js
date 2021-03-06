// EX.3

class Worker{
  constructor(){
      this.name = "Munteanu";
      this.surname = "Victor";
      this.rate = 10;
      this.days = 31;
  }

  getSalary(){
      return this.rate * this.days;
  }
}

class Worker1{
  constructor(){
      this.name = "Smith";
      this.surname = "John";
      this.rate = 6;
      this.days = 21;
  }

  getSalary(){
      return this.rate * this.days;
  }
}

let worker = new Worker();
console.log("First worker: ")
console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days); 
console.log(worker.getSalary());

let worker1 = new Worker1();
console.log("Second worker: ")
console.log(worker1.name);
console.log(worker1.surname);
console.log(worker1.rate);
console.log(worker1.days); 
console.log(worker1.getSalary());
