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

Student.prototype.courseLoad = function () {
  
}