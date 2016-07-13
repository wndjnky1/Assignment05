// COMM644 - Assignment 5 Part 1


//
// STEP 1
//
/*function writeMessage() {  
     alert("I have been clicked");
}*/

//
// STEP 2
//
/*var btnElement = document.getElementById("newBtn");
    btnElement.onclick = function() {
        alert("I have been clicked");
}*/
      
//
// STEP 3
/*newBtn2.addEventListener("click", writeMsg, false);
    function writeMsg() {
        alert("I have been clicked");
}*/

//
// STEP 4
/*newBtn3.addEventListener("click", function(){
           alert("I have been clicked");
}, false);*/

//
// STEP 5
/*window.addEventListener("load", init, false);
function init() {
    newBtn4.addEventListener("click", writeMsg, false);
}
function writeMsg() {
    alert("I have been clicked");
}*/

//
// STEP 6
/*window.addEventListener("load", init, false);
function init() {
    redirect.addEventListener("click", writeMsg, false);
}
function writeMsg() {
    alert("You have clicked the link");
}
window.addEventListener("click", function(alert) {
    alert.preventDefault();
});*/

//
// STEP 7
/*window.addEventListener('load', init, false);
function init() {
    btn5.addEventListener('click', btnDisable, false);
    btn5.addEventListener('click', getText, false);
}

    function btnDisable() {
        document.getElementById('btn5').disabled = true;
    }
    function getText() {
       var text = document.getElementById('textBox').value;
            alert('The text input is: ' + text);
    }*/

//
// STEP 8
/*Create a new page called newpage.html. You will now have 2 web pages including index.html and newpage.html. Add a button to index.html. When the button is clicked, newpage.html should appear as a popup window at 300 pixels wide by 300 pixels high. As soon as newpage.html loads however, resize the window to 500 pixels wide by 300 pixels high. You will need to handle the load event on newpage.html and use a BOM method on newpage.html to accomplish this task.*/

/*window.addEventListener('load', init, false);
    function init() {
        btn1.addEventListener('click', openPage, false);
}
    function openPage() {
        window.open('newpage.html','newPage','width=300,height=300,resizable=yes');
}*/
  
//
// STEP 9
// Add two buttons to a web page. Add the text Start to one button and Stop to the other button. Using the BOM .setInterval() method, figure out a way to move display the text “Learning JavaScript is fun!” into the console window every 2 seconds but only when the Start button is clicked. If the user clicks on the Stop button, the console should stop logging the text immediately.

/*var clearDisplay = null;
window.addEventListener('load', init, false);
    function init() {
        startBtn.addEventListener('click', startDisplay, false);
         stopBtn.addEventListener('click', stopDisplay, false);
}

function textDisplay() {
    window.console.log('Learning JavaScript is fun!');
}
function stopDisplay() {
    clearInterval(clearDisplay);
}
function startDisplay() {
    clearDisplay = setInterval(function() { 
        textDisplay()
    }, 2000);
}      */

//
// STEP 10
//Add a drop down list to a web page. Populate the drop down list with 4 items. Add a button next to the drop down list and set the text to “Select”. When the user clicks the button, the item selected in the drop down list should appear within an alert box.

/*window.addEventListener('load', init, false) ;
function init() {
    btn3.addEventListener('click', selectItem, false);
}
function selectItem() {
    var x = document.getElementById("yourPick").selectedIndex;
    alert(document.getElementsByTagName("option")[x].value);
}*/
