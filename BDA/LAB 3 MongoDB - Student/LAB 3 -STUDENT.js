use student;

db.student.insert({
    Rollno: "1BM18CS001",
    Age: 20,
    Contact_no: 9876543210,
    Email_id: "arya@gmail.com"
});
db.student.find();
show collections;

db.student.insert({
    Rollno: "1BM18CS002",
    Age: 19,
    Contact_no: 9876523210,
    Email_id: "seema@gmail.com"
});

db.student.insert({
    Rollno: "1BM18CS003",
    Age: 21,
    Contact_no: 9876588210,
    Email_id: "aysha@gmail.com"
});

db.student.insert({
    Rollno: "1BM18CS004",
    Age: 22,
    Contact_no: 9806993210,
    Email_id: "raj@gmail.com"
});

db.student.insert({
    Rollno: "1BM18CS010",
    Age: 21,
    Contact_no: 7606993210,
    Email_id: "raksha@gmail.com"
});

db.student.insert({
    Rollno: "1BM18CS011",
    Age: 22,
    Contact_no: 9806956210,
    Email_id: "ram@gmail.com"
});

db.student.update(
{"Rollno" : "1BM18CS001"},
{$set: {"Email_id": "arya@yahoo.com"}});
db.student.find();

show tables;