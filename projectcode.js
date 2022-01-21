function admission()
{
	var aname=document.form1.an.value;
	var fname=document.form1.fn.value;
	var adrr=document.form1.add.value;
	var mobl=document.form1.mob.value;
	var email=document.form1.mail.value;
	if (aname==""||fname==""||adrr==""||mobl==""||email=="")
	{
		alert("Please fill the form poperly");
	}
	else
	{
		if (window.confirm("Form submit successfully"))
		{
  			window.open("index.html", "Thanks for Visiting!");
		}

	}
}
function course()
{
	document.getElementById("cita").style.display = "block";
	document.getElementById("dita").style.display = "block";
	document.getElementById("adita").style.display = "block";
	document.getElementById("cfas").style.display = "none";
	document.getElementById("dfas").style.display = "none";
	document.getElementById("adfas").style.display = "none";
	document.getElementById("cdtp").style.display = "none";
	document.getElementById("ddtp").style.display = "none";
	document.getElementById("addtp").style.display = "none";
	document.getElementById("cbm").style.display = "none";
	document.getElementById("dmave").style.display = "none";
	document.getElementById("ccad").style.display = "none";
	document.getElementById("cwd").style.display = "none";
	document.getElementById("ccst").style.display = "none";
}
function button_one()
{
	document.getElementById("cita").style.display = "none";
	document.getElementById("dita").style.display = "none";
	document.getElementById("adita").style.display = "none";
	document.getElementById("cfas").style.display = "block";
	document.getElementById("dfas").style.display = "block";
	document.getElementById("adfas").style.display = "block";
	document.getElementById("cdtp").style.display = "none";
	document.getElementById("ddtp").style.display = "none";
	document.getElementById("addtp").style.display = "none";
	document.getElementById("cbm").style.display = "none";
	document.getElementById("dmave").style.display = "none";
	document.getElementById("ccad").style.display = "none";
	document.getElementById("cwd").style.display = "none";
	document.getElementById("ccst").style.display = "none";
}
function button_two()
{
	document.getElementById("cita").style.display = "none";
	document.getElementById("dita").style.display = "none";
	document.getElementById("adita").style.display = "none";
	document.getElementById("cfas").style.display = "none";
	document.getElementById("dfas").style.display = "none";
	document.getElementById("adfas").style.display = "none";
	document.getElementById("cdtp").style.display = "block";
	document.getElementById("ddtp").style.display = "block";
	document.getElementById("addtp").style.display = "block";
	document.getElementById("cbm").style.display = "none";
	document.getElementById("dmave").style.display = "none";
	document.getElementById("ccad").style.display = "none";
	document.getElementById("cwd").style.display = "none";
	document.getElementById("ccst").style.display = "none";
}
function button_three()
{
	document.getElementById("cita").style.display = "none";
	document.getElementById("dita").style.display = "none";
	document.getElementById("adita").style.display = "none";
	document.getElementById("cfas").style.display = "none";
	document.getElementById("dfas").style.display = "none";
	document.getElementById("adfas").style.display = "none";
	document.getElementById("cdtp").style.display = "none";
	document.getElementById("ddtp").style.display = "none";
	document.getElementById("addtp").style.display = "none";
	document.getElementById("cbm").style.display = "block";
	document.getElementById("dmave").style.display = "block";
	document.getElementById("ccad").style.display = "block";
	document.getElementById("cwd").style.display = "none";
	document.getElementById("ccst").style.display = "none";
}
function button_four()
{
	document.getElementById("cita").style.display = "none";
	document.getElementById("dita").style.display = "none";
	document.getElementById("adita").style.display = "none";
	document.getElementById("cfas").style.display = "none";
	document.getElementById("dfas").style.display = "none";
	document.getElementById("adfas").style.display = "none";
	document.getElementById("cdtp").style.display = "none";
	document.getElementById("ddtp").style.display = "none";
	document.getElementById("addtp").style.display = "none";
	document.getElementById("cbm").style.display = "none";
	document.getElementById("dmave").style.display = "none";
	document.getElementById("ccad").style.display = "none";
	document.getElementById("cwd").style.display = "block";
	document.getElementById("ccst").style.display = "block";
}