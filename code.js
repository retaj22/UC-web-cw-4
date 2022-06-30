let grade = prompt('Enter Your Score : ')
console.log(grade);
if (grade >= 90 ){
    console.log('لقد حصلت على امتياز 🥳')
} else if (90 > grade >= 80){
    console.log('لقد حصلت على جيد جد')
} else if (80 > grade >= 70){
    console.log('لقد حصلت على جيد جد')
} else if (70 > grade >= 60){
    console.log('لقد حصلت على مقبول😕')
} else {
    console.log('راسب💔')
}
