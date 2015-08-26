var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');
/*module.exports = function(router){ //export functions on other modules
      router.route('/students')
            .get(student.find);  //callback function is transferred to controllers.student
       router.route('/teacher')
            .get(teacher.find); 
       
      return router;
};*/
module.exports = function(router){ //export functions on other modules
      router.route('/students') //localhost:5000/students 
            .get(student.find)  //callback function is transferred to controllers.student
            .post (student.insert);//insert function in student.js
     router.route('/students/:id') //retrieve 1 data (id), ask id parameter
            .get(student.findOne) //findOne function in student.js
            .put(student.update)//update function in student.js
            .delete(student.remove);//delete function in student.js
     router.route('/teachers')//localhost:5000/teachers
            .get(teacher.find)
            .post(teacher.add); // ';' for the last method in the statement
      
      return router;
};
