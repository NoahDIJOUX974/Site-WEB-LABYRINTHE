
        m='m'; //représente un mur
        p='p'; //représente le personnage
        b='b'; //représente le chemin
        f="f"; //représente le trophée 
        const buttonhaut = document.querySelector('#BTN-HAUT')
        const buttonbas = document.querySelector('#BTN-BAS')
        const buttongauche = document.querySelector('#BTN-GAUCHE')
        const buttondroite = document.querySelector('#BTN-DROITE')
        
        

        xperso=1; //position initial du personnage sur l'axe X
        yperso=1; //postition initial du personnage sur l'axe Y
        //tableau à double entrée représentant votre labyrinthe, vous pouvez le modifier pour comprendre le fonctionnement
        var laby = [[m,m,m,m,m,m,m,m,m,m],
                    [m,p,m,b,b,b,b,b,b,m],
                    [m,b,m,b,m,b,m,m,b,m],
                    [m,b,m,b,m,b,m,b,b,m],
                    [m,b,b,b,m,m,m,m,b,m],
                    [m,b,m,b,m,m,m,m,b,f],
                    [m,m,m,b,b,b,b,m,m,m]];
     
                  
    
         
        function afficheLaby() //ne rien modifier dans cette fonction
        {
            var leLaby=document.getElementById("laby");
            insertion="<table id='myTable' border=0 cellspacing=0 cellpadding=0>";
         
         
            for(i=0;i<7;i++)
            {
            insertion+="<tr>";
                for(j=0;j<10;j++)
                {
                 
                    if (laby[i][j]==m)
                    {
                    insertion+="<td>";
                    insertion+="<img width='52'height='52' src='PHOTO LABYRINTHE/water.jpg'>";
                    insertion+="</td>";
                    }
                    if (laby[i][j]==p)
                    {
                    insertion+="<td>";
                    insertion+="<img width='52' height='52' style='background-image:PHOTO LABYRINTHE/Ground.png' src='PHOTO LABYRINTHE/Heros.png'>";
                    insertion+="</td>";
                    }
                    if (laby[i][j]==b)
                    {
                    insertion+="<td>";
                    insertion+="<img width='52' height='52' src='PHOTO LABYRINTHE/Ground.png'>";
                    insertion+="</td>";
                    }

                     
                    if (laby[i][j]==f)
                    {
                    insertion+="<td>";
                    insertion+="<img width='52' height='52'src='PHOTO LABYRINTHE/Trophy.png'>";
                    insertion+="</td>";
                    }
                     
             
                     
                }
                insertion+="</tr>";
            }  
             
            insertion+="</table>";
            leLaby.innerHTML=insertion;
        }
         

function BAS() {
    yperso +=1
    laby [yperso][xperso] = p
    afficheLaby()
}

function HAUT() {
    yperso -=1
    laby [yperso][xperso] = p
    afficheLaby()
}
function DROITE() {
    xperso +=1
    laby [yperso][xperso] = p
    afficheLaby()
}

function GAUCHE() {
    xperso -=1
    laby [yperso][xperso] = p
    afficheLaby()
}

document.body.addEventListener('keydown' , (event) =>{
    //BAS
    if (event.keyCode == 40){
        BAS()
    }

    //HAUT
    if (event.keyCode == 38){
        HAUT()
    }

    //GAUCHE
    if (event.keyCode == 37){
        GAUCHE()
    }

    //DROITE
    if (event.keyCode == 39){
        DROITE()
    }

});

function BAS(){
    if (laby[yperso +1][xperso]===m){
    }   else{
            laby[yperso][xperso] = b;
            yperso++;
            laby[yperso][xperso] = p;
            afficheLaby()
        }
    }


function GAUCHE(){
    if (laby[yperso][xperso -1]===m){
    }   else{
            laby[yperso][xperso] = b;
            xperso--;
            laby[yperso][xperso] = p;
            afficheLaby()
        }
    }

function DROITE(){
    if (laby[yperso][xperso +1]===m){
    }   else{
            laby[yperso][xperso] = b;
            xperso++;
            laby[yperso][xperso] = p;
            afficheLaby()
        }
    }

    
  
function HAUT(){
    if (laby[yperso -1][xperso]===m){
    }   else{
            laby[yperso][xperso] = b;
            yperso--;
            laby[yperso][xperso] = p;
            afficheLaby()
        }
    }

//TP DAY 10

//Mode Souris
    function souris() {
        setInterval(()=>{
            var row = document.getElementById('myTable').rows
                row[yperso+1].cells[xperso].addEventListener('click',BAS)
                row[yperso-1].cells[xperso].addEventListener('click',HAUT)
                row[yperso].cells[xperso+1].addEventListener('click',DROITE)
                row[yperso].cells[xperso-1].addEventListener('click',GAUCHE)
        }, 100 
    )}

//MODE

