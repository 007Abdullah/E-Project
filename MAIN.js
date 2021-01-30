
(function popup() {

    function closestEl(el, selector) {
        var doc = el.document || el.ownerDocument;
        var matches = doc.querySelectorAll(selector);
        var i;
        while (el) {
            i = matches.length - 1;
            while (i >= 0) {
                if (matches.item(i) === el) {
                    return el;
                }
                i -= 1;
            }
            el = el.parentElement;
        }
        return el;
    }
    var modalBtns = document.querySelectorAll(".btn2");
    modalBtns.forEach(function addBtnClickEvent(btn) {
        btn.onclick = function showModal() {
            var modal = btn.getAttribute("data-modal");
            document.getElementById(modal).style.display = "block";
        };
    });

    var closeBtns = document.querySelectorAll(".close");
    closeBtns.forEach(function addCloseClickEvent(btn) {
        btn.onclick = function closeModal() {
            var modal = closestEl(btn, ".modal");
            modal.style.display = "none";
        };
    });

    window.onclick = function closeOnClick(event) {
        if (event.target.className === "modal") {
            event.target.style.display = "none";
        }
    };
}()); /*THIS IS THE FUNCTION ON DETAIL BUTTON ON IMAGES IN MAINDIV ON COLLECTION PAGE THIS FUNCTION WORK WHEN U CLICK DETAIL BUTTON AND OPEN A POP(MODEL BOX) OPEN WHICH HAVE IMAGE AND  DETAIL OF PRODUCTS */

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("maindiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    hidecollection(x[i], "show");
    if (x[i].className.indexOf(c) > -1) allcollection(x[i], "show");
  }
}

function allcollection(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function hidecollection(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  }); 

}
/*THIS FUNCTION ON BTNS IT FILTER THE DIV ELEMENTS WITHOUT CHANGING THE PAGE IT CHANGE ELEMENTS OR PRODUCT IT ALSO HAVE FUNCTION THAT COMBINE ALL ELEMENTS AND SHOW ALL PRODUCTS IT ALSO SHOW ACTIVE PAGE */

function Data1()/*IT IS FOR PRODUCT COMPARISION IT IS THE SCRIPT OF LEFT SIDE COMPARISION
IT ALSO SHOWS POPUP IF LEFT AND RIGHT SIDEPRODUCT ARE SAME WE HAVE  TOTAL 60 PRODUCTS */
{
	var selectData1=document.getElementById("selectData1").value;/*IT GET OPTION FROM OPTIONS LIST  */
	
	var image1 = document.getElementById("image1");/*IT GET IMAGE OF OPTION SELECTED*/
	
	var check = document.getElementById("selectData2").value;/*IT GET OPTION 2 FROM SECNOND OPTIONS LIST  */
	
	var paragraph1=document.getElementById("paragraph1");/*IT GET DETAILS OF OPTION SELECTED*/
	
	if(selectData1==check)
	{
		alert("SAME PRODUCT SELECTED");
	}
	
	else
	{
		if(selectData1=="1")

   {
	image1.src="necleces/AN2.jpg";
	var a=document.getElementById("01").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	
	if(selectData1=="2")

   {
	image1.src="necleces/AN10.jpg";
	var a=document.getElementById("02").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="3")

   {
	image1.src="necleces/AN4.jpg";
	var a=document.getElementById("03").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="4")

   {
	image1.src="necleces/AN5.jpg";
    var a=document.getElementById("04").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="5")

   {
	image1.src="necleces/AN6.jpg";
	var a=document.getElementById("05").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="6")

   {
	image1.src="necleces/N1.jpg";
	var a=document.getElementById("06").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="7")

   {
	image1.src="necleces/N2.jpg";
   var a=document.getElementById("07").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="8")

   {
	image1.src="necleces/N3.jpg";
	var a=document.getElementById("08").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="9")

   {
	image1.src="necleces/N4.jpg";
	var a=document.getElementById("09").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="10")

   {
	image1.src="necleces/N5.jpg";
	var a=document.getElementById("010").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="11")

   {
	image1.src="necleces/NEC 1.jpg";
	var a=document.getElementById("011").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="12")

   {
	image1.src="necleces/NEC 2.jpg";
    var a=document.getElementById("012").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="13")

   {
	image1.src="necleces/NEC 3.jpg";
    var a=document.getElementById("013").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="14")

   {
	image1.src="necleces/NEC 4.jpg";
	var a=document.getElementById("014").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="15")

   {
	image1.src="necleces/NEC 5.jpg";
	var a=document.getElementById("015").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="16")
   {
	image1.src="rings/PR1.jpg";
	var b=document.getElementById("016").innerHTML;	
	paragraph1.innerHTML=Object(b);
	}
	if(selectData1=="17")
   {
	image1.src="rings/PR2.jpg";
	var a=document.getElementById("017").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="18")
   {
	image1.src="rings/PR3.jpg";
	var a=document.getElementById("018").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="19")
   {
	image1.src="rings/PR4.jpg";
	var a=document.getElementById("019").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="20")
   {
	image1.src="rings/PR5.jpg";
	var a=document.getElementById("020").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="21")
   {
	image1.src="rings/SR6.jpg";
	var a=document.getElementById("021").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="22")
   {
	image1.src="rings/SR7.jpg";
	var a=document.getElementById("022").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="23")
   {
	image1.src="rings/SR8.jpg";
	var a=document.getElementById("023").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="24")
   {
	image1.src="rings/SR9.jpg";
	var a=document.getElementById("024").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="25")
   {
	image1.src="rings/SR10.jpg";
	var a=document.getElementById("025").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="26")
   {
	image1.src="rings/ar2.jpg";
	var a=document.getElementById("026").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="27")
   {
	image1.src="rings/ar2.jpg";
	var a=document.getElementById("027").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="28")
   {
	image1.src="rings/ar3.jpg";
	var a=document.getElementById("028").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="29")
   {
	image1.src="rings/ar4.jpg";
	var a=document.getElementById("029").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="30")
   {
	image1.src="rings/ar5.jpg";
	var a=document.getElementById("030").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="31")
   {
	image1.src="bangles/SB5.jpg";
	var a=document.getElementById("031").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="32")
   {
	image1.src="bangles/SB10.jpg";
	var a=document.getElementById("032").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="33")
   {
	image1.src="bangles/BANG8.jpg";
	var a=document.getElementById("033").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="34")
   {
	image1.src="bangles/BANG9.jpg";
	var a=document.getElementById("034").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="35")
   {
	image1.src="bangles/BANG10.jpg";
	var a=document.getElementById("035").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="36")
   {
	image1.src="bangles/BANG11.jpg";
	var a=document.getElementById("036").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="37")
   {
	image1.src="bangles/BANG12.jpg";
	var a=document.getElementById("037").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="38")
   {
	image1.src="bangles/BANG16.jpg";
	var a=document.getElementById("038").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="39")
   {
	image1.src="bangles/BANG22.jpg";
	var a=document.getElementById("039").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="40")
   {
	image1.src="bangles/BANG23.jpg";
	var a=document.getElementById("040").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="41")
   {
	image1.src="bangles/bang 26.jpg";
	var a=document.getElementById("041").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="42")
   {
	image1.src="bangles/BANG17.jpg";
	var a=document.getElementById("042").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="43")
   {
	image1.src="bangles/BANG19.jpg";
	var a=document.getElementById("043").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="44")
   {
	image1.src="bangles/BANG20.jpg";
	var a=document.getElementById("044").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="45")
   {
	image1.src="bangles/BANG21.jpg";
	var a=document.getElementById("045").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="46")
   {
	image1.src="earings/e10.jpg";
	var a=document.getElementById("046").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
		if(selectData1=="47")
   {
	image1.src="earings/e11.jpg";
	var a=document.getElementById("047").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
		if(selectData1=="48")
   {
	image1.src="earings/e12.jpg";
	var a=document.getElementById("048").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
		if(selectData1=="49")
   {
	image1.src="earings/e13.jpg";
	var a=document.getElementById("049").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
		if(selectData1=="50")
   {
	image1.src="earings/e14.jpg";
	var a=document.getElementById("050").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
		if(selectData1=="51")
   {
	image1.src="earings/SE1.jpg";
	var a=document.getElementById("051").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
		if(selectData1=="52")
   {
	image1.src="earings/SE2.jpg";
	var a=document.getElementById("052").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
		if(selectData1=="53")
   {
	image1.src="earings/SE3.jpg";
	var a=document.getElementById("053").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
		if(selectData1=="54")
   {
	image1.src="earings/SE4.jpg";
	var a=document.getElementById("054").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
		if(selectData1=="55")
   {
	image1.src="earings/SE5.jpg";
	var a=document.getElementById("055").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
		if(selectData1=="56")
   {
	image1.src="earings/SE17.jpg";
	var a=document.getElementById("056").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
		if(selectData1=="57")
   {
	image1.src="earings/SE22.jpg";
	var a=document.getElementById("057").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
		if(selectData1=="58")
   {
	image1.src="earings/SE18.jpg";
	var a=document.getElementById("058").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
		if(selectData1=="59")
   {
	image1.src="earings/SE19.jpg";
	var a=document.getElementById("059").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData1=="60")
   {
	image1.src="earings/SE20.jpg";
	var a=document.getElementById("060").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	
	
}
}


function Data2()/*IT IS FOR PRODUCT COMPARISION IT IS THE SCRIPT OF RIGHT SIDE COMPARISION
IT ALSO SHOWS POPUP FOR LEFT AND RIGHT SIDEPRODUCT ARE SAME */
{
	var selectData2=document.getElementById("selectData2").value;;/*IT GET OPTION FROM OPTIONS LIST  */

	
	var image2 = document.getElementById("image2");;/*IT GET IMAGE OF  OPTIONS SELECTED  */
	
	var check = document.getElementById("selectData1").value;;/*IT GET OPTION FROM FIRST OPTIONS LIST  */

	
	var paragraph1=document.getElementById("paragraph2");;/*IT GET PRODOUCT DETAILS OF OPTIONS SELECTED */

	
	if(selectData2==check)
	{
		alert("SAME PRODUCT SELECTED");
	}
	else
	{
		if(selectData2=="1")

   {
	image2.src="necleces/AN2.jpg";
	var a=document.getElementById("01").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	
	if(selectData2=="2")

   {
	image2.src="necleces/AN10.jpg";
	var a=document.getElementById("02").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="3")

   {
	image2.src="necleces/AN4.jpg";
	var a=document.getElementById("03").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="4")

   {
	image2.src="necleces/AN5.jpg";
    var a=document.getElementById("04").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="5")

   {
	image2.src="necleces/AN6.jpg";
	var a=document.getElementById("05").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="6")

   {
	image2.src="necleces/N1.jpg";
	var a=document.getElementById("06").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="7")

   {
	image2.src="necleces/N2.jpg";
   var a=document.getElementById("07").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="8")

   {
	image2.src="necleces/N3.jpg";
	var a=document.getElementById("08").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="9")

   {
	image2.src="necleces/N4.jpg";
	var a=document.getElementById("09").innerHTML;	
	paragraph1.innerHTML=Object(a);
	}
	if(selectData2=="10")

   {
	image2.src="necleces/N5.jpg";
	var a=document.getElementById("010").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="11")

   {
	image2.src="necleces/NEC 1.jpg";
	var a=document.getElementById("011").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="12")

   {
	image2.src="necleces/NEC 2.jpg";
    var a=document.getElementById("012").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="13")

   {
	image2.src="necleces/NEC 3.jpg";
    var a=document.getElementById("013").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="14")

   {
	image2.src="necleces/NEC 4.jpg";
	var a=document.getElementById("014").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="15")

   {
	image2.src="necleces/NEC 5.jpg";
	var a=document.getElementById("015").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="16")
   {
	image2.src="rings/PR1.jpg";
	var b=document.getElementById("016").innerHTML;	
	paragraph2.innerHTML=Object(b);
	}
	if(selectData2=="17")
   {
	image2.src="rings/PR2.jpg";
	var a=document.getElementById("017").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="18")
   {
	image2.src="rings/PR3.jpg";
	var a=document.getElementById("018").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="19")
   {
	image2.src="rings/PR4.jpg";
	var a=document.getElementById("019").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="20")
   {
	image2.src="rings/PR5.jpg";
	var a=document.getElementById("020").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="21")
   {
	image2.src="rings/SR6.jpg";
	var a=document.getElementById("021").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="22")
   {
	image2.src="rings/SR7.jpg";
	var a=document.getElementById("022").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="23")
   {
	image2.src="rings/SR8.jpg";
	var a=document.getElementById("023").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="24")
   {
	image2.src="rings/SR9.jpg";
	var a=document.getElementById("024").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="25")
   {
	image2.src="rings/SR10.jpg";
	var a=document.getElementById("025").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="26")
   {
	image2.src="rings/ar2.jpg";
	var a=document.getElementById("026").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="27")
   {
	image2.src="rings/ar2.jpg";
	var a=document.getElementById("027").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="28")
   {
	image2.src="rings/ar3.jpg";
	var a=document.getElementById("028").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="29")
   {
	image2.src="rings/ar4.jpg";
	var a=document.getElementById("029").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="30")
   {
	image2.src="rings/ar5.jpg";
	var a=document.getElementById("030").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="31")
   {
	image2.src="bangles/SB5.jpg";
	var a=document.getElementById("031").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="32")
   {
	image2.src="bangles/SB10.jpg";
	var a=document.getElementById("032").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="33")
   {
	image2.src="bangles/BANG8.jpg";
	var a=document.getElementById("033").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="34")
   {
	image2.src="bangles/BANG9.jpg";
	var a=document.getElementById("034").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="35")
   {
	image2.src="bangles/BANG10.jpg";
	var a=document.getElementById("035").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="36")
   {
	image2.src="bangles/BANG11.jpg";
	var a=document.getElementById("036").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="37")
   {
	image2.src="bangles/BANG12.jpg";
	var a=document.getElementById("037").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="38")
   {
	image2.src="bangles/BANG16.jpg";
	var a=document.getElementById("038").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="39")
   {
	image2.src="bangles/BANG22.jpg";
	var a=document.getElementById("039").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="40")
   {
	image2.src="bangles/BANG23.jpg";
	var a=document.getElementById("040").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="41")
   {
	image2.src="bangles/bang 26.jpg";
	var a=document.getElementById("041").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="42")
   {
	image2.src="bangles/BANG17.jpg";
	var a=document.getElementById("042").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="43")
   {
	image2.src="bangles/BANG19.jpg";
	var a=document.getElementById("043").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="44")
   {
	image1.src="bangles/BANG20.jpg";
	var a=document.getElementById("044").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="45")
   {
	image2.src="bangles/BANG21.jpg";
	var a=document.getElementById("045").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="46")
   {
	image2.src="earings/e10.jpg";
	var a=document.getElementById("046").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
		if(selectData1=="47")
   {
	image2.src="earings/e11.jpg";
	var a=document.getElementById("047").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
		if(selectData2=="48")
   {
	image2.src="earings/e12.jpg";
	var a=document.getElementById("048").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
		if(selectData2=="49")
   {
	image2.src="earings/e13.jpg";
	var a=document.getElementById("049").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
		if(selectData2=="50")
   {
	image2.src="earings/e14.jpg";
	var a=document.getElementById("050").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
		if(selectData2=="51")
   {
	image2.src="earings/SE1.jpg";
	var a=document.getElementById("051").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
		if(selectData2=="52")
   {
	image2.src="earings/SE2.jpg";
	var a=document.getElementById("052").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
		if(selectData2=="53")
   {
	image2.src="earings/SE3.jpg";
	var a=document.getElementById("053").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
		if(selectData2=="54")
   {
	image2.src="earings/SE4.jpg";
	var a=document.getElementById("054").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
		if(selectData2=="55")
   {
	image2.src="earings/SE5.jpg";
	var a=document.getElementById("055").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
		if(selectData1=="56")
   {
	image2.src="earings/SE17.jpg";
	var a=document.getElementById("056").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
		if(selectData2=="57")
   {
	image2.src="earings/SE22.jpg";
	var a=document.getElementById("057").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
		if(selectData2=="58")
   {
	image2.src="earings/SE18.jpg";
	var a=document.getElementById("058").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
		if(selectData2=="59")
   {
	image2.src="earings/SE19.jpg";
	var a=document.getElementById("059").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	if(selectData2=="60")
   {
	image2.src="earings/SE20.jpg";
	var a=document.getElementById("060").innerHTML;	
	paragraph2.innerHTML=Object(a);
	}
	
	
}
}