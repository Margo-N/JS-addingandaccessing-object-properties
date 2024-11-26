const cat = {};

cat.name = "Fred";
cat.nickname = "Flooficus";
cat.age = 5;
cat.isSleeping = true;
cat.favoriteToys = ["spring", "ping pong balls", "bird stuffy"];
cat.pet = function () {
  return "purrrrrrr";
};

//console.log(cat);
//console.log(cat.nickname);
//console.log(cat.favoriteToys[2]);

const tea = {
  flavor: "mango",
  teaspoonPerCup: 1,
  cups: 2,
  enoughTea: false,
  addTeaLeaves: function (teaspoons) {
    this.teaspoonPerCup += teaspoons;
    if (this.teaspoonPerCup === this.cups) {
      this.enoughTea = true;
      this.teaTime();
    }
  },
  teaTime: function () {
    console.log("Time to make the tea!");
  },
};
tea.addTeaLeaves(1);
// Time to make the tea!
