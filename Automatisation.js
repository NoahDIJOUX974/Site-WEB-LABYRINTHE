        m='m'; //représente un mur
        p='p'; //représente le personnage
        b='b'; //représente le chemin
        f="f"; //représente le trophée 

        var laby = [[m,m,m,m,m,m,m,m,m,m],
                    [m,p,m,b,b,b,b,b,b,m],
                    [m,b,m,b,m,m,m,m,b,m],
                    [m,b,m,b,m,m,m,m,b,m],
                    [m,b,b,b,m,m,m,m,b,m],
                    [m,m,m,m,m,m,m,m,b,f],
                    [m,m,m,m,m,m,m,m,m,m]];

    xperso=1; //position initial du personnage sur l'axe X
    yperso=1; //postition initial du personnage sur l'axe Y

    function tableau() //ne rien modifier dans cette fonction
    {
        var leLaby=document.getElementById("laby2");
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

    function bas() {
        yperso +=1
        if (laby [yperso][xperso] == f)
        {alert("WIN")}
        laby [yperso][xperso] = p
        tableau()
    }
    
    function haut() {
        yperso -=1
        if (laby [yperso][xperso] == f)
        {alert("WIN")}
        laby [yperso][xperso] = p
        tableau()
    }
    function droite() {
        xperso +=1
        if (laby [yperso][xperso] == f)
        {alert("WIN")}
        laby [yperso][xperso] = p
        tableau()
    }
    
    function gauche() {
        xperso -=1
        if (laby [yperso][xperso] == f)
        {alert("WIN")}
        laby [yperso][xperso] = p
        tableau()
    }

function cheminunique(){
    //bas
    if (laby[yperso +1][xperso] === b || laby[yperso +1][xperso] === f)
     {bas()}
    
    //haut
     else if(laby[yperso -1][xperso] === b || laby[yperso -1][xperso] === f)
     {haut()}

    //droite
     else if(laby[yperso][xperso +1] === b || laby[yperso][xperso +1] === f)
     {droite()}

     //gauche
     else if(laby[yperso][xperso -1] === b || laby[yperso][xperso -1] === f)
     {gauche()}

}

window.setInterval('cheminunique()',500)