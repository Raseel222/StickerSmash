const { formatDiagnosticsWithColorAndContext } = require("typescript");

const seyHello = (name) => {
    console.log("Hello" + name);


}
seyHello("Raseel")
const sum = (n1, n2) => {
    return n1 + n2
}

const s = sum(3, 4)
console.log(s)


const agtAge = (age) => {
    return age

}
const s7 = agtAge(13)
console.log(s7)


//q1
const ShowMessage = () => {
    console.log("i love programming")
}

ShowMessage()

//q2
const ShowNumber = () => {
    console.log(1000)
}
ShowNumber()
//q3
const ShowName = () => {
    console.log("may name is Raseel")
}
ShowName()
//q4
const giveMeyourName = (name) => {
    console.log("my name is " + name)

}
giveMeyourName("Raseel")
giveMeyourName("maria")

//q5
const giveMeyourlnof = (name, age, contry) => {

    console.log(name, age, contry);
}
giveMeyourlnof("Raseel", 13, "taybe")
//q6
const double = (number) => {
    return number * 2;

}
console.log(double(9));
//q7
const minus = (num1, num2) => {
    return num1 - num2
}
const m = minus(5, 9)
console.log(m)
//q8
const divide = (num1, num2) => {
    return num1 / num2

}
const d = divide(5, 9)
console.log(d)
//q9
const calculateTotal = (r, j) => {
    return r * j

}
const s4 = calculateTotal(12, 200)
console.log(s4);

//q1
const grade = 30
if (grade > 10) {
    console.log("excelleund")
} else {
    console.log("good")
}

//q2

const temp = 33
if (temp > 11) {
    console.log("hot")
} else {
    console.log("normal")
}
//q3
const password = "grr4"
if (password == "grr4") {
    console.log("login")

}
else {
    console.log("try again")
}
//q4
const num1 = 88
const num2 = 99
if (num1 == num2) {
    console.log("equal")
}
else {

}
//q5
const ccfd = (age) => {
    if (age > 20) {
        return true
    }
    else {
        return false
    }

}

arr.forEach((num) => {
    if (num == 1) {
        sum = sum + num;

    }
});



const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 11, 1, , 11, 1, 1, , 11, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1]
console.log("length:", arr.length)


const student = [
    {
        name: "farah",
        class: "7-3",
        avg:100,
    },

    {
      
        name: "taleen",
        class: "8-4",
        avg: 1,
    },  
    {
      
        name: "maria",
        class: "8-1",
        avg:99,
    }, 
    {
      
        name: "dana",
        class: "7-2",
        avg:3,
    },  

]
var sum1 =0
student.forEach (student=>{
sum1=sum1 +student.avg
})
console.log (student);
sum1/4



