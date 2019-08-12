var power=false;
var clear=false;
var ram=false;
function vlll(val){
		if(val=="b"){
			//window.alert(val);
			b();

		}
		else if(power==true){
			exp(val);
		}
		else if(clear==true){
			switch(val){
				case "+":
				document.getElementById("inp").value+=val;
				break;
				case "-":
				document.getElementById("inp").value+=val;
				break;
				case "*":
				document.getElementById("inp").value+=val;
				break;
				case "/":
				document.getElementById("inp").value+=val;
				break;
				default:
				document.getElementById("inp").value=val;
				break;
			}
			clear=false;	
	}
		else{
		document.getElementById("inp").value+=val;
	}
}
function clr(val){

	document.getElementById("inp").value=val;
	
}
function equals(){
	try{
		clr(eval(document.getElementById("inp").value));
		clear=true;
	}
	catch(equals){
		clr("Error caught")
	}
}
function b(){
	//window.alert("I am here");
	var vall = document.getElementById("inp").value;
	//window.alert(vall);
	var string = vall.toString().slice(0,vall.toString().length-1); 
	document.getElementById("inp").value=string;
}
function deg(val){
	var numb=document.getElementById("inp").value;
	var pip=3.1415926535897932384626433832795/180;
		var pii=numb*pip;
		var sol;
	if(val=="sin"){
		sol=Math.sin(pii);	
	}
	else if(val=="cos"){
		sol=Math.cos(pii);
	}
	else if(val=="tan"){
		sol=Math.tan(pii);
	}
	try{
	document.getElementById("inp").value=sol;
	clear=true;
	}
	catch(val){
		deg("Invalid syntax");
	}
}
var x;
function mat(val){
	var sl;
	if(val=="sqr"){
		sl=Math.pow(document.getElementById("inp").value,2);
		clear=true;	
		
	}
	else if(val=="ln"){
		sl=Math.log(document.getElementById("inp").value);	
		clear=true;
	}
	else if(val=="%"){
		var cur=eval(document.getElementById("inp").value);
		sl=cur/100;
		clear=true;
	}
	else if(val=="x^"){
		x=document.getElementById("inp").value;
		power=true;
		clr("");
	}
	else if(val=="sqrt"){
		sl=document.getElementById("inp").value=Math.sqrt(document.getElementById("inp").value);
		clear=true;	
	}
	else if(val=="|X|"){
		try{
		if(eval(document.getElementById("inp").value)<0){
			sl=-1*eval(document.getElementById("inp")).value;
		}
		else{
			sl=1*eval(document.getElementById("inp")).value;
		}
		clear=true;
	}
	catch(mat){
		mat("Error")
	}
	}
	if(power==false){
	document.getElementById("inp").value=sl;
	}
}
function exp(val){
	power=false;
	var s2=Math.pow(x, val);
	document.getElementById("inp").value=s2;
	clear=true;
}