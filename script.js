var Fruit;
(function (Fruit) {
    Fruit["APPLE"] = "apple";
    Fruit["BANANA"] = "banana";
    Fruit["ORANGE"] = "orange";
    Fruit["GRAPE"] = "grape";
    Fruit["WATERMELON"] = "watermelon";
})(Fruit || (Fruit = {}));
var EdJudahInfo = {
    name: "Ed Judah Mingo",
    age: 20,
    gender: "Male",
    address: "#23 Katipunan St. Bambang Taguig City",
    favorite_fruit: Fruit.APPLE,
    print: function () {
        console.log("Name: ".concat(this.name, ", \n      Age: ").concat(this.age, ", \n      Gender: ").concat(this.gender, ", \n      Address: ").concat(this.address, ",\n      Favorite Fruit: ").concat(this.favorite_fruit));
    }
};
EdJudahInfo.print();
