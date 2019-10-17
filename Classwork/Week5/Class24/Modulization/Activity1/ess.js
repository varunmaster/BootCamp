var essentials = {
    drink: "water",
    eat: "snickers",
    fun: "phone"
};

var niceToHaves = {
    tools: ["can opener", "flashlight", "knife", "matches"],
    safety: ["first aid kit", "gloves"]
};

var nonEssentials = {
    cookware: "wafflemaker"
};

//exports tell js that these items will be used later in some other js files using the 'require' keyword
module.exports = {
    essentials: essentials,
    niceToHaves: niceToHaves
};
//when we export, these items will be OBJECTS