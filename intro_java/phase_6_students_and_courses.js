function Student(firstname, lastname){
  this.firstname = firstname;
  this.lastname = lastname;
  this.course = [];
};

Student.prototype.name = function(){
  return `${this.firstname} ${this.lastname}`;
};

Student.prototype.enroll = function(course) {
  if (!this.course.includes(course)){ 
  this.course.push(course);
  }
};

function Course(name, department, credits, days, block) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.days = days;
  this.block = block;
  this.students = [];
}

Course.prototype.addStudent = function (student) {
  if (this.students.indexOf(student) === -1) {
    this.students.push(student);
    student.enroll(this);
  }
};

Course.prototype.conflictsWith = function (other) {
  if (this.block !== other.block) { return false; }

  return this.days.some(day => other.days.indexOf(day) !== -1);
};

Student.prototype.courseLoad = function () {
  const ans = {};

  this.course.forEach(ele => {
    let dpt = ele.department; 
    ans[dpt] = ans[dpt] || 0;
    ans[dpt] += ele.credits;
  });
  return ans;
};


// let student1 = new Student("Nigel", "Leffler");
// let course1 = new Course("101", "CS", 3, ["mon", "wed", "fri"], 1);
// let course2 = new Course("201", "CS", 3, ["wed"], 1);
// let course3 = new Course("301", "ENG", 3, ["tue"], 1);
// let course4 = new Course("401", "BIO", 3, ["mon", "wed", "fri"], 2);
// console.log(student1.name());
// student1.enroll(course1);
// student1.enroll(course3);
// student1.enroll(course2);
// console.log(student1.courseLoad());
// console.log('should be true = ' + course1.conflictsWith(course2));
// console.log('should be false = ' + course1.conflictsWith(course3));
// console.log('should be false = ' + course1.conflictsWith(course4));