var Employee = /** @class */ (function () {
    function Employee(_fullName, _age, _jobTitle, _hourlyRate, workingHoursPerWeek) {
        var _this = this;
        this._fullName = _fullName;
        this._age = _age;
        this._jobTitle = _jobTitle;
        this._hourlyRate = _hourlyRate;
        this.workingHoursPerWeek = workingHoursPerWeek;
        this.printEmployeeDetails = function () {
            console.log("".concat(_this._fullName, "\uC758 \uC9C1\uC5C5\uC740 ").concat(_this._jobTitle, "\uC774\uACE0 \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 \n        ").concat(_this._hourlyRate * _this.workingHoursPerWeek, "\uB2EC\uB7EC\uC774\uB2E4."));
        };
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee1 = new Employee('민수', 28, '주니어 웹개발자', 40, 35);
