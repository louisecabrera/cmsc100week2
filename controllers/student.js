var db = require (__dirname+ '/../lib/mysql') //connect 

/*exports.find = function(req,res){

      res.send('Hello World!');
};*/
exports.find = function(req,res,next){
      console.log(req.ip+"find()");

      db.query("SELECT * FROM student", function(err,rows){ //2 parameters (sql statement, function to implement)
            if(err) return next (err); //if error, skip route handlers
            //else, send rows retrieved from query
            res.send(rows);
      });
      
   };
exports.findOne = function(req,res,next){
       console.log(req.ip+"findOne()");

      db.query("SELECT * FROM student WHERE id=?",[req.params.id], function(err,rows){
            if(err) return next (err);
            if(rows.length===0){ //=== same type
                  res.status(404).send('student not found');
            } else{
            res.send(rows[0]);
            }
      });
      
   };
   
exports.insert = function(req,res,next){

      db.query("INSERT INTO student(studno,name) VALUES (?,?)", [req.body.studno,req.body.name], function(err,rows){
            if(err) return next (err);
            res.send(rows);
            
      });
      
   };

exports.update = function(req,res,next){

      db.query("UPDATE student SET ? WHERE id=?", [req.body,req.params.id], function(err,rows){
            if(err) return next (err);
            res.send(rows);
            
      });
      
   };
exports.remove = function(req,res,next){

      db.query("DELETE FROM student WHERE id=?", [req.params.id], function(err,rows){
            if(err) return next (err);
            res.send(rows);
            
      });
      
   };
