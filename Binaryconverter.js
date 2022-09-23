var binary = document.getElementById("binaryOutput");
var remainder;
var workingOut;
var actualBinaryNumber;
var number = document.getElementById("numberInput").value;
var hexidecimal = document.getElementById("hexidecimalOutput");
var actualHexidecimalNumber;
var text = document.getElementById("textInput").value;
var textBinary = document.getElementById("textBinary");
//var textHexidecimal = document.getElementById("textHexidecimal");
var splitText;
var i;
var actualTextBinary = "";
//var actualTextHexidecimal = "";
var workingOut2;

function base2(number) {
    console.log("Base10 function ran");
    var number = document.getElementById("numberInput").value;
    console.log("Number: " + number);
    workingOut = number;
    while (workingOut > 0) {
        remainder = workingOut % 2;
        workingOut = Math.floor(workingOut / 2);
        if (remainder === 1) {
            binary.value = binary.value + "1";
        } else{
            binary.value = binary.value + "0";
        }
    }
    actualBinaryNumber = binary.value.split("").reverse().join("");
    binary.value = actualBinaryNumber;
    console.log("Working out: " + workingOut)
    console.log("Remainder: " + remainder)
    console.log("Binary number: " + actualBinaryNumber);
}

function base16(number) {
    console.log("Base16 function ran");
    number = document.getElementById("numberInput").value;
    console.log("Number: " + number);
    workingOut = number;
    while(workingOut > 0) {
        remainder = workingOut % 16;
        workingOut = Math.floor(workingOut / 16);
        if(remainder === 0) {
            hexidecimal.value = hexidecimal.value + "0";
        } else if(remainder === 1) {
            hexidecimal.value = hexidecimal.value + "1";
        }else if(remainder === 2) {
            hexidecimal.value = hexidecimal.value + "2";
        }else if(remainder === 3) {
            hexidecimal.value = hexidecimal.value + "3";
        }else if(remainder === 4) {
            hexidecimal.value = hexidecimal.value + "4";
        }else if(remainder === 5) {
            hexidecimal.value = hexidecimal.value + "5";
        }else if(remainder === 6) {
            hexidecimal.value = hexidecimal.value + "6";
        }else if(remainder === 7) {
            hexidecimal.value = hexidecimal.value + "7";
        }else if(remainder === 8) {
            hexidecimal.value = hexidecimal.value + "8";
        }else if(remainder === 9) {
            hexidecimal.value = hexidecimal.value + "9";
        }else if(remainder === 10) {
            hexidecimal.value = hexidecimal.value + "A";
        }else if(remainder === 11) {
            hexidecimal.value = hexidecimal.value + "B";
        }else if(remainder === 12) {
            hexidecimal.value = hexidecimal.value + "C";
        }else if(remainder === 13) {
            hexidecimal.value = hexidecimal.value + "D";
        }else if(remainder === 14) {
            hexidecimal.value = hexidecimal.value + "E";
        }else if(remainder === 15) {
            hexidecimal.value = hexidecimal.value + "F";
        }
    }
    actualHexidecimalNumber = hexidecimal.value.split("").reverse().join("");
    hexidecimal.value = actualHexidecimalNumber;
    console.log("Working out: " + workingOut);
    console.log("Remainder: " + remainder);
    console.log("Hexidecimal number: " + hexidecimal.value);
}

function letter(text) {
    console.log("Letter function ran");
    text = document.getElementById("textInput").value;
    console.log("Text: " + text);
    splitText = text.split("");
    console.log("Text array: " + splitText);
    console.log("Text length: " + splitText.length);
    for(i = 0; i < splitText.length; i++) {
        textBinary.value  = "";
        textHexidecimal.value = "";
        if(splitText[i] === "A") {
            workingOut = 65;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "B") {
            workingOut = 66;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "C") {
            workingOut = 67;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "D") {
            workingOut = 68;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "E") {
            workingOut = 69;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "F") {
            workingOut = 70;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "G") {
            workingOut = 71;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "H") {
            workingOut = 72;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "I") {
            workingOut = 73;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "J") {
            workingOut = 74;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "K") {
            workingOut = 75;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "L") {
            workingOut = 76;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "M") {
            workingOut = 77;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "N") {
            workingOut = 78;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "O") {
            workingOut = 79;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "P") {
            workingOut = 80;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "Q") {
            workingOut = 81;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "R") {
            workingOut = 82;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "S") {
            workingOut = 83;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "T") {
            workingOut = 84;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "U") {
            workingOut = 85;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "V") {
            workingOut = 86;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "W") {
            workingOut = 87;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "X") {
            workingOut = 88;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "Y") {
            workingOut = 89;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "Z") {
            workingOut = 90;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "a") {
            workingOut = 97;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "b") {
            workingOut = 98;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "c") {
            workingOut = 99;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "d") {
            workingOut = 100;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "e") {
            workingOut = 101;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "f") {
            workingOut = 102;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "g") {
            workingOut = 103;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "h") {
            workingOut = 104;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "i") {
            workingOut = 105;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "j") {
            workingOut = 106;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "k") {
            workingOut = 107;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "l") {
            workingOut = 108;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "m") {
            workingOut = 109;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "n") {
            workingOut = 110;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "o") {
            workingOut = 111;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "p") {
            workingOut = 112;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "q") {
            workingOut = 113;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "r") {
            workingOut = 114;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "s") {
            workingOut = 115;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "t") {
            workingOut = 116;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "u") {
            workingOut = 117;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "v") {
            workingOut = 118;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "w") {
            workingOut = 119;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "x") {
            workingOut = 120;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "y") {
            workingOut = 121;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === "z") {
            workingOut = 122;
            console.log("Working out: " + workingOut);
        } else if(splitText[i] === " ") {
            workingOut = 32;
            console.log("Working out: " + workingOut);
        }
        workingOut2 = workingOut;
        while(workingOut2 > 0) {
            remainder = workingOut2 % 2;
            workingOut2 = Math.floor(workingOut2 / 2);
            if(remainder === 1) {
                textBinary.value = textBinary.value + "1";
            } else if(remainder === 0) {
                textBinary.value = textBinary.value + "0";
            }
        }

        textBinary.value = textBinary.value.split("").reverse().join("");
        if(textBinary.value ===  "100000") {
            textBinary.value = "00" + textBinary.value;
        } else{
            textBinary.value = "0" + textBinary.value;
        }
        actualTextBinary = actualTextBinary + textBinary.value + " ";
        console.log("Binary number (Working out): " + textBinary.value);
        /*workingOut2 = workingOut;
        while(workingOut2 > 0) {
            remainder = workingOut2 % 16;
            workingOut2 = Math.floor(workingOut2 / 16);
            if(remainder === 0) {
                textHexidecimal.value = textHexidecimal.value + "0";
            } else if(remainder === 1) {
                textHexidecimal.value = textHexidecimal.value + "1";
            }else if(remainder === 2) {
                textHexidecimal.value = textHexidecimal.value + "2";
            }else if(remainder === 3) {
                textHexidecimal.value = textHexidecimal.value + "3";
            }else if(remainder === 4) {
                textHexidecimal.value = textHexidecimal.value + "4";
            }else if(remainder === 5) {
                textHexidecimal.value = textHexidecimal.value + "5";
            }else if(remainder === 6) {
                textHexidecimal.value = textHexidecimal.value + "6";
            }else if(remainder === 7) {
                textHexidecimal.value = textHexidecimal.value + "7";
            }else if(remainder === 8) {
                textHexidecimal.value = textHexidecimal.value + "8";
            }else if(remainder === 9) {
                textHexidecimal.value = textHexidecimal.value + "9";
            }else if(remainder === 10) {
                textHexidecimal.value = textHexidecimal.value + "A";
            }else if(remainder === 11) {
                textHexidecimal.value = textHexidecimal.value + "B";
            }else if(remainder === 12) {
                textHexidecimal.value = textHexidecimal.value + "C";
            }else if(remainder === 13) {
                textHexidecimal.value = textHexidecimal.value + "D";
            }else if(remainder === 14) {
                textHexidecimal.value = textHexidecimal.value + "E";
            }else if(remainder === 15) {
                textHexidecimal.value = textHexidecimal.value + "F";
            }
        }
        textHexidecimal.value = textHexidecimal.value.split("").reverse().join("");
        actualTextHexidecimal = actualTextHexidecimal + textHexidecimal.value;
        console.log("Hexidecimal number (Working out): " + textHexidecimal.value);*/
    }
    //textHexidecimal.value = actualTextHexidecimal;
    textBinary.value = actualTextBinary;
    console.log("Binary number: " + textBinary.value);
    //console.log("Hexidecimal number: " +  textHexidecimal.value);
}

function cleartext() {
    console.log("Clear function ran");
    document.getElementById("numberInput").value = "";
    binary.value = "";
    hexidecimal.value = "";
    console.log("Number: " + number);
    console.log("Binary number: " + binary.value);
    console.log("Hexidecimal number: " + hexidecimal.value);
    textBinary.value = "";
    workingOut = "";
    workingOut2 = "";
    remainder="";
    //textHexidecimal.value = "";
    //actualtextHexidecimal = "";
    actualTextBinary = "";
    splitText = "";
    document.getElementById("textInput").value = "";
    console.log("Text: " + text);
    console.log("Binary number: " + textBinary.value);
    //console.log("Hexidecimal number: " + textHexidecimal.value);
}

function convert() {
    base2();
    base16();
    letter();
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode === 13) {
        convert();
    } else if(event.keyCode === 46) {
        cleartext();
    }
})