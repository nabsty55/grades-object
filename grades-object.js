let Grades = function(grade1, grade2, grade3, grade4){
  this.physics = grade1;
  this.chemistry = grade2;
  this.biology = grade3;
  this.math = grade4;
  this.total = function(physics, chemistry, biology, math){
    let gradeTotal = this.physics + this.chemistry  + this.biology + this.math;
    return gradeTotal;
  }
  this.average =function(physics, chemistry, biology, math){
    let gradeAverage = this.total()/4;
    console.log("Student's grade average is " + gradeAverage);
  }

}

let student1 =new Grades(50, 60, 75, 80);
console.log(student1);
console.log(student1.average());
let student2 = new Grades(75, 95, 85, 50);
console.log(student2);
console.log(student2.average());
