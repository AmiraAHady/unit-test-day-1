const Employee = require("../Employee");

describe("Test calculateSalary", () => {
  let emp1;
  // setUp,teardown
  beforeEach(() => {
    emp1 = new Employee("ali", 25, 4);
  });
  // beforeAll(()=>{
  //     emp1=new Employee('ali',25,4);
  // })
  // afterAll()
  // afterEach()

  it("Test employee should have salary = 9000 if yearsOfExp> 5 ", () => {
    emp1.yearsOfExp = 8;
    emp1.calculateSalary();
    expect(emp1.salary).toBe(9000);
    expect(emp1.salary).toBeGreaterThan(5000);
  });
  it("Test employee should have salary = 5000 if yearsOfExp<=5 ", () => {
    emp1.calculateSalary();
    expect(emp1.salary).toBe(5000);
  });
});

describe("Test setSkills", () => {
  let emp1;
  beforeEach(() => {
    emp1 = new Employee("ali", 25, 4);
  });
  it("test setSkills set skilss correctly", () => {
    emp1.setSkills("js", "css");
    expect(emp1.skills).toEqual(["js", "css"]);
    expect(emp1.skills).toContain("css");
  });
});
describe("Test setAddress", () => {
  let emp1;
  beforeEach(() => {
    emp1 = new Employee("ali", 25, 4);
  });
  it("test setAddress set address correctly", () => {
    emp1.setAddress("egypt", "minia");
    expect(emp1.address).toEqual({ country: "egypt", city: "minia" });
    expect(emp1.address).toEqual(jasmine.objectContaining({ city: "minia" }));
    expect(emp1.address).toEqual(jasmine.any(Object));
  });
});
describe("Test getPromoted", () => {
  let emp1;
  beforeEach(() => {
    emp1 = new Employee("ali", 25, 4);
  });
  it("test increase salary by 20% if yearsOfExp > 0 && yearsOfExp <= 6 and call sendEmployeeMessage with parameter 'you got promoted to be senior'", () => {
    //spy
    spyOn(emp1, "sendEmployeeMessage");

    emp1.calculateSalary();
    emp1.getPromoted();
    expect(emp1.salary).toBe(5000 * 1.2);
    expect(emp1.sendEmployeeMessage).toHaveBeenCalled();
    expect(emp1.sendEmployeeMessage).toHaveBeenCalledWith(
      "you got promoted to be senior"
    );
    expect(emp1.sendEmployeeMessage).toHaveBeenCalledTimes(1);
  });
  it("test increase salary by 40% if yearsOfExp > 6 && yearsOfExp <= 7 and call sendEmployeeMessage with parameter 'you got promoted to be team lead'", () => {
    emp1.yearsOfExp = 7;
    emp1.calculateSalary();
    emp1.getPromoted();
    expect(emp1.salary).toBe(9000 * 1.4);
  });
});

describe("Test deptInfo", () => {
  let emp1;
  beforeEach(() => {
    emp1 = new Employee("ali", 25, 4);
  });
  it("test to return correctly", () => {
    // mock
    let obj = jasmine.createSpyObj(["getId", "getLocation"]);
    obj.getId.and.returnValue("123");
    obj.getLocation.and.returnValue("Qena");
    let val = emp1.deptInfo(obj);
    expect(val).toBe("123: Qena");
    expect(obj.getId).toHaveBeenCalled()
    expect(obj.getLocation).toHaveBeenCalled()
  });
});
