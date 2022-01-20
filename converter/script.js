function convert(){
    //var num = "123";
    //document.getElementById("print").innerHTML = num;
    var userInput = document.getElementById('toConvert').value;

    var converted = parseInt(userInput, 2); // convert binary to decimal

    document.getElementById('print').innerHTML = converted; // print out the decimal number


}

function convertAscii(){
    var decimal = document.getElementById('convertAscii').value;

    var converted = String.fromCharCode(decimal);

    document.getElementById('printAscii').innerHTML = converted;

    console.log(decimal);
}

function convertHex(){
    var decimal = parseInt(document.getElementById('convertHex').value);

    var converted = decimal.toString(16);

    console.log((45).toString(16));

    document.getElementById('printHex').innerHTML = converted;
    console.log(decimal)
    console.log(converted)
}

function clearResult(){
    document.getElementById('toConvert').value='';
    
    console.log("12");
}

function clearHex(){
    document.getElementById('convertHex').value='';
}

function clearAscii(){
    document.getElementById('convertAscii').value='';
}