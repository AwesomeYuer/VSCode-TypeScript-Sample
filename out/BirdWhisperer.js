/**
 * BirdWhisperer
 * by 2gua
 */
var BirdWhisperer = /** @class */ (function () {
    function BirdWhisperer(message) {
        this.chirping = message;
    }
    BirdWhisperer.prototype.chirp = function () {
        return 'Ah~ oh~ ' + this.chirping;
    };
    return BirdWhisperer;
}());
//# sourceMappingURL=BirdWhisperer.js.map