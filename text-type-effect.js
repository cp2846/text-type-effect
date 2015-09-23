/*
This is a javascript function which prints a block of text one character at a time.
It simulates the effect of text being typed with a keyboard.
New lines can be added with double spaces ("  ").
SYNTAX:

Links:

$l<text here>/l

** LINKS ARE PRE-SET IN THE "links" ARRAY BELOW **

COLORS:

$g<text here>/c -- draws GREEN text
$r<text here>/c -- draws RED text
$b<text here>/c -- draws GREEN text

etc...


*/


var currentChar = 1; //First character in the text block.
var delay = 60; //Time, in milliseconds, between each character addition.
var text = "Hello. This is some TEXT.  This is a new line.  $lThis/l is a link.  $gThis text is colored green./c  $bThis text is blue!!/c"; //Example text. This is what gets output by the function.
 //replace "SomeIdHere" with ID of element to add text to
var links = ["link1","link2"]; //array of links. Add as needed.
var dest = "SomeIDHere"; //replace with ID of HTML element 
var destOrig = document.getElementById(dest); 
var currentId = 0;
var currentLink = 0;
var specialMode = 0;

function type(destination) {
	
	var destination = document.getElementById(destination);
	if (document.getElementById) {
				
		//LINE BREAKS
		if (text[currentChar-1] == " " && text[currentChar] == " "){
			destination.innerHTML += "<br>";
			
		//LINK HANDLING
		} else if (text[currentChar-1] == "$" && text[currentChar] == "l"){
			destination.innerHTML += "<a href = \""+links[currentLink]+"\" id = "+currentId.toString()+">";
			destination = document.getElementById("dest"+currentId.toString());
			//increment values
			specialMode = 1;
			currentLink++;
			currentChar++;
		//END LINK
		} else if (text[currentChar-1] == "/" && text[currentChar] == "l") {
			specialMode = 0;
			currentId++;
			currentChar++;
		}
			
		/*
		COLOR HANDLING
		*/

		//GREEN
		else if (text[currentChar-1] == "$" && text[currentChar] == "g") {
			
			destination.innerHTML += "<span style = \"color:green\" id = "+currentId.toString()+">";
			specialMode = 1;
			currentChar++;
		}
		//RED
		else if (text[currentChar-1] == "$" && text[currentChar] == "r") {
			destination.innerHTML += "<span style = \"color:red\" id = "+currentId.toString()+">";
			specialMode = 1;
			currentChar++;
		}
		//BLUE
		else if (text[currentChar-1] == "$" && text[currentChar] == "b") {
			destination.innerHTML += "<span style = \"color:blue\" id = "+currentId.toString()+">";
			specialMode = 1;
			currentChar++;
		}
		
		
		/*
		
		ADD MORE COLORS HERE 
		
		
		*/
		
		
		//END COLOR
		else if (text[currentChar-1] == "/" && text[currentChar] == "c") {
			
			specialMode = 0;
			currentChar++;
			currentId++;
		}
		
		
		//PROCEED TO ADD CHARACTERS NORMALLY
		else {
			destination.innerHTML += text[currentChar-1];
		}
		
		//INCREMENT CURRENT CHAR
		currentChar++;
		
		
		/* 
		THE FOLLOWING DETERMINES WHICH ACTION THE FUNCTION TAKES NEXT 
		*/
		
		
		//CURRENTLY TYPING LINK OR COLORED TEXT
		if (specialMode == 1){
			setTimeout("type(currentId)",delay);
		}
		
		//when character is a comma, pause for a bit so that the text has a more natural flow to it.
		else if (text[currentChar-2] == "," ){
			setTimeout("type(dest)",500);
			
		//PAUSE AFTER LINE BREAKS
		} else if (text[currentChar-1] == " " && text[currentChar] == " ") {
			destination.innerHTML += "<br>";
			currentChar++;
			setTimeout("type(dest)",1000);
		

		//PROCEED NORMALLY
		} else if (text.length >= currentChar){
			setTimeout("type(dest)",delay);

		//proceed normally.
		} else if (text.length >= currentChar){
			setTimeout("type()",delay);

		} 
	}
}

// EXAMPLE FUNCTION CALL:
type(dest);


