"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var hero_service_1 = require("./hero.service");
describe('HeroService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [hero_service_1.HeroService]
        });
    });
    it('should be created', testing_1.inject([hero_service_1.HeroService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=hero.service.spec.js.map