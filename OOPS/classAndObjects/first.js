const student = {
	fullName: 'Krishna mandal',
	roll: 06,
	marks: 89.8,
	printMarks: function(){
		console.log('marks: ', this.marks);
	}
};

console.log(student.fullName);
student.printMarks();