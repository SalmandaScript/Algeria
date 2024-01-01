//modal code
$(document).ready(function() 
{ 
$("#myModal").modal('hide'); 
}); 

//popover  code
$(function(){
$('[data-toggle="popover"]').popover ()
})

//tooltip code
$(function(){
$('[data-toggle="tooltip"]').tooltip()
})

//toggle question code 
$(document).ready(function() 
{ 

$("#shbtn0").click(function() 
{ 

$("#d0").toggle(); 

}); 

}); 


//toggle question code 1
$(document).ready(function() 
{ 

$("#shbtn").click(function() 
{ 

$("#d1").toggle(); 

}); 

}); 

//toggle question code 2
$(document).ready(function() 
{ 

$("#shbtnn").click(function() 
{ 

$("#d11").toggle(); 

}); 

}); 

//toggle question code 3
$(document).ready(function() 
{ 

$("#shbtn3").click(function() 
{ 

$("#d3").toggle(); 

}); 

}); 

//toggle question code 4
$(document).ready(function() 
{ 

$("#shbtn4").click(function() 
{ 

$("#d4").toggle(); 

}); 

}); 

//toggle question code 5
$(document).ready(function() 
{ 

$("#shbtn5").click(function() 
{ 

$("#d5").toggle(); 

}); 

}); 

//toggle question code 6
$(document).ready(function() 
{ 

$("#shbtn6").click(function() 
{ 

$("#d6").toggle(); 

}); 

}); 

//toggle question code 7
$(document).ready(function() 
{ 

$("#shbtn7").click(function() 
{ 

$("#d7").toggle(); 

}); 

}); 

//toggle question code 8
$(document).ready(function() 
{ 

$("#shbtn8").click(function() 
{ 

$("#d8").toggle(); 

}); 

}); 

//toggle question code 9
$(document).ready(function() 
{ 

$("#shbtn9").click(function() 
{ 

$("#d9").toggle(); 

}); 

}); 

//toggle question code 10
$(document).ready(function() 
{ 

$("#shbtn10").click(function() 
{ 

$("#d10").toggle(); 

}); 

}); 

//toggle question code 12
$(document).ready(function() 
{ 

$("#shbtn12").click(function() 
{ 

$("#d12").toggle(); 

}); 

}); 

//toggle question code 13
$(document).ready(function() 
{ 

$("#shbtn13").click(function() 
{ 

$("#d13").toggle(); 

}); 
}); 

//toggle question code 14
$(document).ready(function() 
{ 

$("#shbtn14").click(function() 
{ 

$("#d14").toggle(); 

}); 

}); 

//toggle question code 15
$(document).ready(function() 
{ 

$("#shbtn15").click(function() 
{ 

$("#d15").toggle(); 

}); 

}); 

//toggle question code 16
$(document).ready(function() 
{ 

$("#shbtn16").click(function() 
{ 

$("#d16").toggle(); 

}); 

}); 

//toggle question code 17
$(document).ready(function() 
{ 

$("#shbtn17").click(function() 
{ 

$("#d17").toggle(); 

}); 
}); 



$(document).ready(function(){
$("h5").animate({
color: "teal"
});
});

//function to open home page
function africaOnline (){
open("https://salmandascript.github.io/AfricaOnline/");
}

//function to open home next page
function angola(){
open("https://salmandascript.github.io/Angola/Angola.html");
}



//quizz questions code 
function checkAnswer()
  {
   var totQuestion = 17;

   var ansQuestion = 0;

   var rightAns = 0;

   for (var i = 1; i <= totQuestion; i++)
   {
    var elem = document.getElementsByName("q" + i);

    for (var j = 0; j < elem.length; j++)
    {
     if (elem[j].checked)
     {

      ansQuestion++;

      if (elem[j].dataset.answer == 1)
      {
       rightAns++;
      }

     }
    }
   }

   if (ansQuestion != totQuestion)
   {
    alert("Please answer all questions");
   }
   else
   {
    alert("Your Score is " + rightAns + " Out Of " + totQuestion);
   }
  }
  //quizz question code end 
  