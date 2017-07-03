var Character = (function () {
    function Character(name) {
        this.name = name;
    }
    Character.prototype.Who = function () {
        return "The " + this.name;
    };
    return Character;
}());
var character = new Character('Doctor');
console.log("Who is it? " + character.Who() + "!");
//# sourceMappingURL=index.js.map