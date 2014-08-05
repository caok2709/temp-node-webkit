/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//add the following code which basically imports the module to your script.
var mysql = require('mysql');

//we can use this module to create MySQL connection
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:""
});

//the following line of code will open a new connection for you.
connection.connect();

connection.query("use test",function(err){
    if(err) throw err;
});

//select SQL
var selectQuery="select c_lastname from tb_customer where c_firstname='Kuan'";

//Using this connection object we can query the database as follows. We can use
//connection.escape() to protect the query strings from sql injection.

connection.query( selectQuery, function(err, rows){
  	if(err)	{
  		throw err;
  	}else{
            //console.log( 'The solution is: ', JSON.stringify(rows));
            
            console.log( 'The result', rows[0].c_lastname);
  	}
  });
connection.end();
  
//-- SQL 语句  
//-- alter table tb_user add u_admin boolean not null default false;
//-- inter into table_name (列1，列2) values(值1，值2)
//-- select employee, sum(bonus) from emp_bonus group by employee having sum(bonus)>1000
//-- UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值
//-- DELETE FROM 表名称 WHERE 列名称 = 值
//-- CREATE INDEX name_index ON Employee (Employee_Name)
//-- SELECT DISTINCT employee_name, employee_location from employee;
//-- select * from employee, location where employee.empID = location.empID
//-- select * from employee inner join location on employee.empID = location.empID
//-- select distinct u.user_id from User as u left join UserHistory as uh on u.user_id=uh.user_id where uh.user_id is null


    var mysql = require('mysql');

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:""
});

connection.connect();
        connection.query("use test",function(err){
            if(err) throw err;
        });
        
        var insertQuery="insert into tb_customer (c_firstname,c_lastname,c_city,c_address) values("
                +firstName
                +","
                +lastName
                +","
                +city
                +","
                +address
                +")";
        connection.query(insertQuery,function(err){
           if(err){
               throw err;
           }
        });