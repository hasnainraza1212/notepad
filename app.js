
function titleChanger() {
    var title = document.getElementById('title').innerHTML = ""
}
function titleRechanger() {
    var title = document.getElementById('title').innerHTML;

    if (title === "") {
        var title = document.getElementById('title').innerHTML = "Title"
    }
}





// textArea placeholder
var textArea = document.getElementById('textArea');
var textAreaFlagColor = false;
function textUpdator() {
    var textArea = document.getElementById('textArea');

    if (textArea.value === "Type here") {
        textArea.value = "";
        textArea.style.color = "black";
        textAreaFlagColor = true;

    }

}

function textReupdator() {
    var textArea = document.getElementById('textArea');
    if (textArea.value === "" || textArea.value === "TYPE HERE" || textArea.value === "type here" || textArea.value === "Type Here") {
        textArea.value = "Type here";
        textArea.style.color = "#d1d1d1";
        textAreaFlagColor = false;
    }

}
// textArea placeholder

var textAtreaContent = document.getElementById('textArea');
function caseChanger() {
    var textCase = document.getElementById("case").value;
    if (textAtreaContent.value !== "Type here") {
        switch (textCase) {
            case "Uppercase":
                textAtreaContent.style.textTransform = "uppercase";
                break;
            case "Lowercase":
                textAtreaContent.style.textTransform = "lowercase"
                break;
            case "Capitalize":
                textAtreaContent.style.textTransform = "capitalize"
                break;
        }
    }

}


// font family change
function fontFamilyChanger() {
    var fontFamily = document.getElementById("font").value;

    switch (fontFamily) {
        case "Poppins":
            textAtreaContent.style.fontFamily = "Poppins, sans-serif";
            break;
        case "Roboto":
            textAtreaContent.style.fontFamily = "Roboto, sans-serif"
            break;
        case "Raleway":
            textAtreaContent.style.fontFamily = "aleway, sans-serif"
            break;
        case "Montserrat":
            textAtreaContent.style.fontFamily = "Montserrat, sans-serif"
            break;

        case "Lato":
            textAtreaContent.style.fontFamily = "Lato, sans-serif";
            break;
    }

}

// font family change



function fontSizeChange() {
    var fontSize = document.getElementById('fontSize').value;
    if (textAtreaContent.value !== "Type here") {
    switch (fontSize) {
        case "8":
            textAtreaContent.style.fontSize = "8px";
            break;
        case "10":
            textAtreaContent.style.fontSize = "10px";
            break;
        case "12":
            textAtreaContent.style.fontSize = "12px";
            break;

        case "14":
            textAtreaContent.style.fontSize = "14px";
            break;
        case "16":
            textAtreaContent.style.fontSize = "16px";
            break;


        case "18":
            textAtreaContent.style.fontSize = "18px";
            break;
        case "20":
            textAtreaContent.style.fontSize = "20px";
            break;

        case "22":
            textAtreaContent.style.fontSize = "22px";
            break;
        case "24":
            textAtreaContent.style.fontSize = "24px";
            break;


        case "26":
            textAtreaContent.style.fontSize = "26px";
            break;
        case "28":
            textAtreaContent.style.fontSize = "28px";
            break;


        case "30":
            textAtreaContent.style.fontSize = "30px";
            break;
        case "32":
            textAtreaContent.style.fontSize = "32px";
            break;

        case "34":
            textAtreaContent.style.fontSize = "34px";
            break;
        case "36":
            textAtreaContent.style.fontSize = "36px";
            break;

        case "48":
            textAtreaContent.style.fontSize = "34px";
            break;
        case "72":
            textAtreaContent.style.fontSize = "36px";
            break;
    }
}
}

// text color change

function textColorChange() {
    var textColor = document.getElementById("color").value;
    textAtreaContent.style.color = textColor;
}

// text color change


//alignning text 
function left() {
    if(textAtreaContent.value !== "Type here"){
    textAtreaContent.style.textAlign = "left"
}
}

function right() {
    if(textAtreaContent.value !== "Type here"){
    if (textAtreaContent.style.textAlign !== "right") {
        textAtreaContent.style.textAlign = "right"
    }
    else{
        textAtreaContent.style.textAlign = "left"
    }
}
}


function center() {
    if(textAtreaContent.value !== "Type here"){
    if (textAtreaContent.style.textAlign !== "center") {
        textAtreaContent.style.textAlign = "center";
    }
    else{
        textAtreaContent.style.textAlign = "left";
    }
}
}


function justify() {
    if(textAtreaContent.value !== "Type here"){
        if(textAtreaContent.style.textAlign !== "justify") {
            textAtreaContent.style.textAlign = "justify"
        }
        else{
            textAtreaContent.style.textAlign = "left"
        }
}
}




//aligning text




//formatting text 
// var flagBold = false;
function bold() {
    if(textAtreaContent.value !== "Type here"){
    if(textAtreaContent.style.fontWeight !== "bold"){
        textAtreaContent.style.fontWeight = "bold";
    }
    else{
        textAtreaContent.style.fontWeight = "lighter";
        
    }
    
    }
    
}

function underline() {
    if(textAtreaContent.value !== "Type here"){
    if(textAtreaContent.style.textDecoration !== "underline") {
        textAtreaContent.style.textDecoration = "underline"
    }
    else{
        textAtreaContent.style.textDecoration = "none"
    }
}
}


function italic() {
    if(textAtreaContent.value !== "Type here"){
    if (textAtreaContent.style.fontStyle !== "italic"){
        textAtreaContent.style.fontStyle = "italic"
    }
    else{
        textAtreaContent.style.fontStyle = "normal"
    }
    }
}


function strikeThrough() {
    if(textAtreaContent.value !== "Type here"){
    if (textAtreaContent.style.textDecoration !== "line-through"){
        textAtreaContent.style.textDecoration = "line-through"
    }
        else{
            textAtreaContent.style.textDecoration = "none"
        }
}
}




//formatting text











// placeholder thk kar ne ka hai re baba
// function placeHolderValue() {
//     if (textAtreaContent === "TYPE HERE" || textAtreaContent === "Type Here" || textAtreaContent === "type here") {
//         textAtreaContent.value = "hasnain"
//     }
// }

// placeholder thk kar ne ka hai re baba