      var tot = 0;
      var box1 ;
      var box2 ;
      var box3 ;
      var box4 ;
      var box5 ;
      var box6 ;
      var box7 ;
      var box8 ;
      var box9 ;

       function xobox1()
       { 
        if (tot == 0 ) {
          ++tot;
          box1 = 0;
          document.getElementById("box1").innerHTML = "X" 
          document.getElementById("turns").innerHTML = "O Turn"
          document.getElementById("turns").style.color = "rgb(188, 3, 139)"
          document.getElementById("box1").style.color = "rgb(106, 1, 226)" 
        }
        else{
          box1 = 1;
          document.getElementById("box1").innerHTML = "O"
          document.getElementById("turns").innerHTML = "X Turn"
          document.getElementById("turns").style.color = "rgb(106, 1, 226)"
          document.getElementById("box1").style.color = "rgb(188, 3, 139)" 
          --tot;
        }
       }          
          

       function xobox2()
       {
        if (tot == 0) {
        ++tot;
        box2 = 0;
        document.getElementById("box2").innerHTML = "X"
        document.getElementById("turns").innerHTML = "O Turn"
        document.getElementById("turns").style.color = "rgb(188, 3, 139)"
        document.getElementById("box2").style.color = "rgb(106, 1, 226)" 
        }
        else{
        box2 = 1;
        document.getElementById("box2").innerHTML = "O"
        document.getElementById("turns").innerHTML = "X Turn"
        document.getElementById("turns").style.color = "rgb(106, 1, 226)"
        document.getElementById("box2").style.color = "rgb(188, 3, 139)" 
        --tot;
        }
       }


       function xobox3()
       {
        if (tot == 0) {
          ++tot;
          box3 = 0;
          document.getElementById("box3").innerHTML = "X"
          document.getElementById("turns").innerHTML = "O Turn"
          document.getElementById("turns").style.color = "rgb(188, 3, 139)"
          document.getElementById("box3").style.color = "rgb(106, 1, 226)" 
        }

        else{
          box3 = 1;
          document.getElementById("box3").innerHTML = "O"
          document.getElementById("turns").innerHTML = "X Turn"
          document.getElementById("turns").style.color = "rgb(106, 1, 226)"
          document.getElementById("box3").style.color = "rgb(188, 3, 139)" 
        --tot;
        }
       }
       

       function xobox4()
       {
        if (tot == 0) {
          ++tot;
        box4 = 0;
        document.getElementById("box4").innerHTML = "X"
        document.getElementById("turns").innerHTML = "O Turn"
        document.getElementById("turns").style.color = "rgb(188, 3, 139)"
        document.getElementById("box4").style.color = "rgb(106, 1, 226)" 
        }
        else{
        box4 = 1;
        document.getElementById("box4").innerHTML = "O"
        document.getElementById("turns").innerHTML = "X Turn"
        document.getElementById("turns").style.color = "rgb(106, 1, 226)"
        document.getElementById("box4").style.color = "rgb(188, 3, 139)" 
        --tot;
        }
       }


       function xobox5()
       {
        if (tot == 0) {
          ++tot;
        box5 = 0;
        document.getElementById("box5").innerHTML = "X"
        document.getElementById("turns").innerHTML = "O Turn"
        document.getElementById("turns").style.color = "rgb(188, 3, 139)"
        document.getElementById("box5").style.color = "rgb(106, 1, 226)" 
        }
        else{
        box5 = 1;
        document.getElementById("box5").innerHTML = "O"
        document.getElementById("turns").innerHTML = "X Turn"
        document.getElementById("turns").style.color = "rgb(106, 1, 226)"
        document.getElementById("box5").style.color = "rgb(188, 3, 139)" 
        --tot;
        }
       }


       function xobox6()
       {
        if (tot == 0) {
          ++tot;
        box6 = 0;
        document.getElementById("box6").innerHTML = "X"
        document.getElementById("turns").innerHTML = "O Turn"
        document.getElementById("turns").style.color = "rgb(188, 3, 139)"
        document.getElementById("box6").style.color = "rgb(106, 1, 226)" 
        }
        else{
        box6 = 1;
        document.getElementById("box6").innerHTML = "O"
        document.getElementById("turns").innerHTML = "X Turn"
        document.getElementById("turns").style.color = "rgb(106, 1, 226)"
        document.getElementById("box6").style.color = "rgb(188, 3, 139)" 
        --tot;
        }
       }


       function xobox7()
       {
        if (tot == 0) {
          ++tot;
        box7 = 0;
        document.getElementById("box7").innerHTML = "X"
        document.getElementById("turns").innerHTML = "O Turn"
        document.getElementById("turns").style.color = "rgb(188, 3, 139)"
        document.getElementById("box7").style.color = "rgb(106, 1, 226)" 
        }
        else{
        box7 = 1;
        document.getElementById("box7").innerHTML = "O"
        document.getElementById("turns").innerHTML = "X Turn"
        document.getElementById("turns").style.color = "rgb(106, 1, 226)"
        document.getElementById("box7").style.color = "rgb(188, 3, 139)" 
        --tot;
        }
       }


       function xobox8()
       {
        if (tot == 0) {
          ++tot;
        box8 = 0;
        document.getElementById("box8").innerHTML = "X"
        document.getElementById("turns").innerHTML = "O Turn"
        document.getElementById("turns").style.color = "rgb(188, 3, 139)"
        document.getElementById("box8").style.color = "rgb(106, 1, 226)" 
        }
        else{
        box8 = 1;
        document.getElementById("box8").innerHTML = "O"
        document.getElementById("turns").innerHTML = "X Turn"
        document.getElementById("turns").style.color = "rgb(106, 1, 226)"
        document.getElementById("box8").style.color = "rgb(188, 3, 139)" 
        --tot;
        }
       }

       

       function xobox9()
       {
        if (tot == 0) {
          ++tot;
        box9 = 0;
        document.getElementById("box9").innerHTML = "X"
        document.getElementById("turns").innerHTML = "O Turn"
        document.getElementById("turns").style.color = "rgb(188, 3, 139)"
        document.getElementById("box9").style.color = "rgb(106, 1, 226)" 
        }
        else{
        box9 = 1;
        document.getElementById("box9").innerHTML = "O"
        document.getElementById("turns").innerHTML = "X Turn"
        document.getElementById("turns").style.color = "rgb(106, 1, 226)"
        document.getElementById("box9").style.color = "rgb(188, 3, 139)" 
        --tot;
        }
       }
  


      //  restart function

      function resrt()
      {
        tot = 0 ;
        document.getElementById("turns").innerHTML = "Start with X"
        document.getElementById("turns").style.color = "rgb(106, 1, 226)"
        document.getElementById("box1").innerHTML = null ;
        document.getElementById("box2").innerHTML = null ;
        document.getElementById("box3").innerHTML = null ;
        document.getElementById("box4").innerHTML = null ;
        document.getElementById("box5").innerHTML = null ;
        document.getElementById("box6").innerHTML = null ;
        document.getElementById("box7").innerHTML = null ;
        document.getElementById("box8").innerHTML = null ;
        document.getElementById("box9").innerHTML = null ;
        document.getElementById("wins").innerHTML = null ;
        box1 = null;
        box2 = null;
        box3 = null;
        box4 = null;
        box5 = null;
        box6 = null;
        box7 = null;
        box8 = null;
        box9 = null;
      }

      // displayed the winners function

      function win(){
        if(((box1 == 0) && (box2 == 0) && (box3 == 0)) ||
           ((box4 == 0) && (box5 == 0) && (box6 == 0)) ||
           ((box7 == 0) && (box8 == 0) && (box9 == 0)) ||
           ((box1 == 0) && (box4 == 0) && (box7 == 0)) ||
           ((box2 == 0) && (box5 == 0) && (box8 == 0)) ||
           ((box3 == 0) && (box6 == 0) && (box9 == 0)) ||
           ((box1 == 0) && (box5 == 0) && (box9 == 0)) ||
           ((box3 == 0) && (box5 == 0) && (box7 == 0)))
            {
             document.getElementById("wins").innerHTML = "X WINS"
             document.getElementById("wins").style.color = "rgb(106, 1, 226)" 
            }

           else if(
           ((box1 == 1) && (box2 == 1) && (box3 == 1)) ||
           ((box4 == 1) && (box5 == 1) && (box6 == 1)) ||
           ((box7 == 1) && (box8 == 1) && (box9 == 1)) ||
           ((box1 == 1) && (box4 == 1) && (box7 == 1)) ||
           ((box2 == 1) && (box5 == 1) && (box8 == 1)) ||
           ((box3 == 1) && (box6 == 1) && (box9 == 1)) ||
           ((box1 == 1) && (box5 == 1) && (box9 == 1)) ||
           ((box3 == 1) && (box5 == 1) && (box7 == 1)))
           {
            document.getElementById("wins").innerHTML = "O WINS"
            document.getElementById("wins").style.color = "rgb(188, 3, 139)" 
           }
         else if (
          !(box1 == null) && 
          !(box2 == null) && 
          !(box3 == null) && 
          !(box4 == null) && 
          !(box5 == null) && 
          !(box6 == null) && 
          !(box7 == null) && 
          !(box8 == null) && 
          !(box9 == null)
          )
           {
            document.getElementById("wins").innerHTML = "DRAW"
            document.getElementById("wins").style.color = "rgb(233, 60, 2)"
           }
      }
      

