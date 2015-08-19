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
      router.route('/students')
            .get(student.find);  //callback function is transferred to controllers.student
      router.route('/teachers')
            .get(teacher.find)
            .post(teacher.add);
       
      return router;
};
