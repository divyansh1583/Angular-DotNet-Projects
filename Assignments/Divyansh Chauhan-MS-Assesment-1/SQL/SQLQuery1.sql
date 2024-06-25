
CREATE TABLE DC_Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(50),
    IsActive BIT,
    CreatedDate DATE
);

-- Inserting values into the Departments table
INSERT INTO DC_Departments (DepartmentID, DepartmentName, IsActive, CreatedDate)
VALUES (1, 'HR', 1, GETDATE());

INSERT INTO DC_Departments (DepartmentID, DepartmentName, IsActive, CreatedDate)
VALUES (2, 'Engineering', 1, GETDATE());

INSERT INTO DC_Departments (DepartmentID, DepartmentName, IsActive, CreatedDate)
VALUES (3, 'Sales', 1, GETDATE());



-- Create the DC_Employees table
CREATE TABLE DC_Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    MiddleName VARCHAR(50),
    LastName VARCHAR(50),
    Salary DECIMAL(10, 2),
    IsActive BIT,
    CreatedDate DATE
);

-- Insert values into the DC_Employees table
INSERT INTO DC_Employees (EmployeeID, FirstName, MiddleName, LastName, Salary, IsActive, CreatedDate)
VALUES (1, 'Chris', 'John', 'Rock', 45200.00, 1, GETDATE());

INSERT INTO DC_Employees (EmployeeID, FirstName, MiddleName, LastName, Salary, IsActive, CreatedDate)
VALUES (2, 'Prabh', NULL, 'Singh', 12345.00, 1, GETDATE());

INSERT INTO DC_Employees (EmployeeID, FirstName, MiddleName, LastName, Salary, IsActive, CreatedDate)
VALUES (3, 'Sunil', NULL, 'Rai', 78954.00, 1, GETDATE());

INSERT INTO DC_Employees (EmployeeID, FirstName, MiddleName, LastName, Salary, IsActive, CreatedDate)
VALUES (4, 'Sunandan', NULL, 'Sharma', 1000.00, 1, GETDATE());

INSERT INTO DC_Employees (EmployeeID, FirstName, MiddleName, LastName, Salary, IsActive, CreatedDate)
VALUES (5, 'Sunandan', NULL, 'Bhardwaj', 12225.00, 1, GETDATE());

-- Alter the DC_Employees table to add DepartmentID column
ALTER TABLE DC_Employees
ADD DepartmentID INT,
FOREIGN KEY (DepartmentID) REFERENCES DC_Departments(DepartmentID);

SELECT * FROM DC_Employees; 

SELECT * FROM DC_Departments;

UPDATE DC_Employees SET DepartmentID =1 where EmployeeID = 1
UPDATE DC_Employees SET DepartmentID =2 where EmployeeID = 2
UPDATE DC_Employees SET DepartmentID =2 where EmployeeID = 3
UPDATE DC_Employees SET DepartmentID =3 where EmployeeID = 4
UPDATE DC_Employees SET DepartmentID =2 where EmployeeID = 5

-- Create the EmployeePhones table
CREATE TABLE DC_PhoneNo (
    EmployeeID INT,
    PhoneNumber VARCHAR(15),
	IsActive BIT,
    CreatedDate DATE,
    FOREIGN KEY (EmployeeID) REFERENCES DC_Employees(EmployeeID)
);
ALTER TABLE DC_PhoneNo
ADD Email VARCHAR(50)

INSERT INTO DC_PhoneNo (EmployeeID, PhoneNumber, IsActive, CreatedDate)
VALUES (1, '456123789', 1, GETDATE());

INSERT INTO DC_PhoneNo (EmployeeID, PhoneNumber, IsActive, CreatedDate)
VALUES (1, '123456789', 1, GETDATE());

INSERT INTO DC_PhoneNo (EmployeeID, PhoneNumber, IsActive, CreatedDate)
VALUES (2, '456852459', 1, GETDATE());


INSERT INTO DC_PhoneNo (EmployeeID, PhoneNumber, IsActive, CreatedDate)
VALUES (3, '852745632', 1, GETDATE());

INSERT INTO DC_PhoneNo (EmployeeID, PhoneNumber, IsActive, CreatedDate)
VALUES (4, '789325614', 1, GETDATE());

INSERT INTO DC_PhoneNo (EmployeeID, PhoneNumber, IsActive, CreatedDate)
VALUES (4, '2587469853', 1, GETDATE());

INSERT INTO DC_PhoneNo (EmployeeID, PhoneNumber, IsActive, CreatedDate)
VALUES (5, '4554445524', 1, GETDATE());

UPDATE DC_PhoneNo 
SET Email = 'Prabh@gmail.com' 
WHERE EmployeeID = 2;




SELECT * FROM DC_Employees; 

SELECT * FROM DC_Departments;

SELECT * FROM DC_PhoneNo;


--2. Query to get the list of all employees along with their details:
SELECT * FROM DC_Employees;

--3. Query to get the firstname, lastname, employeeID, DepartmentName, and DepartmentID along with their salary details:
SELECT e.FirstName, e.LastName, e.EmployeeID, d.DepartmentName, d.DepartmentID, e.Salary
FROM DC_Employees e
INNER JOIN DC_Departments d ON e.DepartmentID = d.DepartmentID;

--4. Query to get the list of employees with their employeeID, salary, FirstName who are working in the Engineering Department:
SELECT e.EmployeeID, e.Salary, e.FirstName
FROM DC_Employees e
INNER JOIN DC_Departments d ON e.DepartmentID = d.DepartmentID
WHERE d.DepartmentName = 'Engineering';

--query 5
SELECT e1.EmployeeID, e1.FirstName
FROM DC_Employees e1
INNER JOIN DC_Employees e2 ON e1.FirstName = e2.FirstName AND e1.EmployeeID != e2.EmployeeID;
