/*
This is a javascript function which prints a block of text one character at a time.
New lines can be added with double spaces ("  ").
Links can be added as well, and an example has been placed below. The function can be modified to output more links as needed.
*/



var currentChar = 1; //First character in the text block.
var delay = 60; //Time, in milliseconds, between each character addition.
var text = "Hello. This is some TEXT.  This is a new line.  This is a link $l"; //Example text. This is what gets output by the function.
var destination = document.getElementById("SomeIdHere"); //replace "SomeIdHere" with ID of element to add text to

function type() {

	if (document.getElementById) {
				
		//line break
		if (text[currentChar-1] == " " && text[currentChar] == " "){
			destination.innerHTML += "<br>";
		} else if (text[currentChar-1] == "$" && text[currentChar] == "l"){
			destination.innerHTML += "<a href = 'link'>link</a>";
			currentChar++;
		} else {
			destination.innerHTML += text[currentChar-1];
		}
		
		currentChar++;
		
		//when character is a comma, pause for a bit so that the text has a more natural flow to it.
		if (text[currentChar-2] == "," ){
			setTimeout("type()",500);
			
		//pause before line breaks.
		} else if (text[currentChar-1] == " " && text[currentChar] == " ") {
			currentChar++;
			setTimeout("type()",1000);
		
		//proceed normally.
		} else if (text.length >= currentChar{
			setTimeout("type()",delay);
		} 
	}
}