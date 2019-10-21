var dog = {
    raining: true,
    noise: "woof",
    makeNoise: function () {
        if (this.raining) {
            console.log(this.noise);
        }
    }
};

var cat = {
    raining: false,
    noise: "meow",
    makeNoise: function () {
        if (this.raining) {
            console.log(this.noise);
        }
    }
};

dog.makeNoise();
cat.makeNoise();
