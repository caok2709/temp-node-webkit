CREATE DATABASE emp_mgr
-- -----------------------------------------------------
-- TABLE TB_USER
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS TB_USER (
  u_id int(10) NOT NULL AUTO_INCREMENT,
  u_name char(30) NOT NULL,
  u_pwd char(64) NOT NULL,
  u_email char(128) NOT NULL,
  PRIMARY KEY (u_id)
  )ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARACTER SET = UTF8;
-- -----------------------------------------------------
-- TABLE TB_REQUEST
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS TB_REQUEST (
  r_id int(10) NOT NULL AUTO_INCREMENT,
  r_time datetime NOT NULL,
  r_date date NOT NULL,
  r_reason char(255) NOT NULL,
  r_status enum('0','1','2') NOT NULL,
  u_id int(10) NOT NULL,
  PRIMARY KEY (r_id),
  FOREIGN KEY (u_id) REFERENCES TB_USER(u_id) ON DELETE CASCADE ON UPDATE CASCADE
  )ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARACTER SET = UTF8;

-- -----------------------------------------------------
-- TABLE TB_DUTY
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS TB_ONDUTY (
  o_id int(10) NOT NULL AUTO_INCREMENT,
  o_time DATE NOT NULL,
  o_login DATEtime NOT NULL,
  o_logout DATETIME NOT NULL,
  o_date date not null,
  u_id int(10) NOT NULL,
  PRIMARY KEY (O_id),
  FOREIGN KEY (u_id) REFERENCES TB_USER(u_id) ON DELETE CASCADE ON UPDATE CASCADE
  )ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARACTER SET = UTF8;

select * from TB_request left join TB_user on TB_REQUEST.u_id= TB_user.u_id;
select sum(o_logout-o_login) from TB_ONDUTY group by u_id,o_date; 

-- SQL 语句  
-- alter table tb_user add u_admin boolean not null default false;
-- insert into table_name (列1，列2) values(值1，值2)
-- select employee, sum(bonus) from emp_bonus group by employee having sum(bonus)>1000
-- UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值
-- DELETE FROM 表名称 WHERE 列名称 = 值
-- CREATE INDEX name_index ON Employee (Employee_Name)
-- SELECT DISTINCT employee_name, employee_location from employee;
-- select * from employee, location where employee.empID = location.empID
-- select * from employee inner join location on employee.empID = location.empID
-- select distinct u.user_id from User as u left join UserHistory as uh on u.user_id=uh.user_id where uh.user_id is null

select COLUMN_NAME from information_schema.COLUMNS
where table_name = 'your_table_name' and table_schema = 'your_db_name';