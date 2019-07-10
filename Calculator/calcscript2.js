//Really hard to understand what X, Y, and Z are
var X = "";
var Y = undefined;
var Z = undefined;
var res = undefined;
var mathAction = undefined;
var mathProblem = undefined;
var numButtons = document.querySelectorAll('.numButton');
var mathButtons = document.querySelectorAll('.mathButton');
var result = document.getElementById("result");
//Why use the class instead of ID? There's only one equals button
var equals = document.querySelector(".equals");
var C = document.getElementById("reset");

init();

function init(){
    numButtonSetup();
    mathButtonSetup();
    equalButtonSetup();
};

function numButtonSetup(){
    for(i = 0; i < numButtons.length; i++){
        numButtons[i].addEventListener("click", function(){
            for(i = 0; i < mathButtons.length; i++){
                mathButtons[i].classList.remove("selected");
            }
            X += this.textContent;
            result.textContent = X;
            if(eval(result.textContent) === 0){
                result.textContent = "0";
                X = "";
            }
        });
    }
}

function mathButtonSetup(){
    for(i = 0; i < mathButtons.length; i++){
        mathButtons[i].addEventListener("click", function(){
            for(i = 0; i < mathButtons.length; i++){
                mathButtons[i].classList.remove("selected");
            }
            this.classList.add("selected");
            if(Y === undefined){    
                //You can use the line below for the next 2 lines
                //Z = Y = Number(X);
                Y = Number(X);
                Z = Y;
                X = "";
                console.log(Y);
                console.log(mathAction);
                mathAction = this.textContent;
            } else if(Y !== undefined && X !== ""){
                mathProblem = Y + mathAction + Number(X);
                calculate();
                Z = result.textContent;
                X = "";
                Y = res;
                mathAction = this.textContent;
            } else {
                mathAction = this.textContent;
                X = "";
                console.log(Y);
                console.log(mathAction);
            }
            }
        );
    }
}

function equalButtonSetup(){
    equals.addEventListener("click", function(){
        if(Y === undefined){
            Y = Number(result.textContent);
            // X = "";
        } else if(X === ""){
            mathProblem = Y + mathAction + Z;
            calculate();
        } else {
            mathProblem = Y + mathAction + Number(X);
            calculate();
        }
    });
}

function calculate(){
    res = eval(mathProblem);
    result.textContent = res;
    Y = res;
};

C.addEventListener("click", function(){
    reset();
    result.textContent = "0";
});

function reset(){
    X = "";
    Y = undefined;
    Z = undefined;
    res = undefined;
    mathAction = undefined;
    mathProblem = undefined;
    for(i = 0; i < mathButtons.length; i++){
        mathButtons[i].classList.remove("selected");
    }
};