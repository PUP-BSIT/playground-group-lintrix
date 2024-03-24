enum Fruit {
    APPLE = "apple",
    BANANA = "banana",
    ORANGE = "orange",
    GRAPE = "grape",
    WATERMELON = "watermelon"
}
  
type PersonInfo = {
    name: string;
    age: number;
    gender: string;
    address: string;
    favorite_fruit: Fruit;
    print: () => void;
}
  
const EdJudahInfo: PersonInfo = {
    name: "Ed Judah Mingo",
    age: 20,
    gender: "Male",
    address: "#23 Katipunan St. Bambang Taguig City",
    favorite_fruit: Fruit.APPLE,
    print(): void {
      console.log(`Name: ${this.name}, 
      Age: ${this.age}, 
      Gender: ${this.gender}, 
      Address: ${this.address},
      Favorite Fruit: ${this.favorite_fruit}`);
    }
};

EdJudahInfo.print();