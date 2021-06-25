// FUNCTIONS, SWITCH STATEMENTa, WHILE… DOWHILE LOOPa
// Assignment # 38-44

// Q1

 function raise(a,b){
    console.log(a**b)
 }

 raise(2,4)

// Q2
// out of understanding

// Q3

function trangle(a,b,c){
    var S = (a+b+c)/2;
    var area = S*(S-a)*(S-b)*(S-c);
    return area;
}

var area = trangle(5,3,7)

document.write("Area of triagnle is : " +area) 




// Q4

// out of understanding


// Q 5
var i ;
var word = prompt("enter the Word : ")
var findW = prompt("enter the Alphabte index : ")


function inOf(){
    for (i = 0 ; i < word.length ; i++){
        if(word[i]==findW){
            console.log("index of " ,findW , " is :", i)
            break;
        }
    }
    // console.logv("-1")
}

inOf()


// Q6

var vowels = prompt("Enter the sentence under 25 letter :")
if (vowels.length <= 25) {
    if (vowels.match(/[a,e,i,o,u]/g)) {
        var ne = vowels.replace((/[a,e,i,o,u]/g), "")
        console.log(ne)
    }
}


// Q7

var vowels = prompt("Enter the sentence under 25 letter :")
var len = vowels.length - 1
for (var i = 0; i < len ; i++) {
    if (vowels[i].match(/[a,e,i,o,u]/g) && vowels[i+1].match(/[a,e,i,o,u]/g)){
        var alpha = vowels[i] + vowels[i+1];
        console.log(alpha)
    } 
}



// Q8

var km = prompt("Enter the distance in kilo meter : ")

function meter(m){
    var meter = m * 1000
    console.log(km + "km in meters value is :" + meter)
}
function feet(f){
    var feet = f * 3280.8399
    console.log(km + "km in Feet value is :" + feet)
}

function inch(i){
    var inch = i * 39370.1
    console.log(km + "km in inches value is :" + inch)
}
function cnti(c){
    var cnti = c * 100000
    console.log(km + "km in centimeter value is :" + cnti)
}


meter(km)
feet(km)
inch(km)
cnti(km)


// Q9

var hours = Math.round(Number(prompt("Enter your over time :")))

function overTime(time){
    var pay = 12 * time;
    document.write("your over time pay is : " + pay)
}

overTime(hours)



// Q10

var ca = Math.round(Number(prompt("Enter your over time :")))

function cash(c) {
    var count = c;
    var hun, hun2, fif, fif2, ten, ten2;
    if (count >= 100) {
        hun = count % 100
        hun2 = Math.floor(count / 100)
        if (hun < 100) {
            if (hun >= 50) {
                fif = hun % 50
                fif2 = Math.floor(hun / 50)
                if (fif < 50) {
                    ten = Math.floor(fif / 10)
                    document.write(hun2, " notes of Hundred ", fif2, " notes of fifty and  ", ten, " note of ten ")
                    console.log(hun2, fif2, ten)

                }
            }
        }
    }
}

cash(ca)





