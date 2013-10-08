var movie =  document.getElementById('li_movies');
var actor =  document.getElementById('li_actors');
var home =  document.getElementById('li_home');
var controller = document.URL.split("/");

if(controller[3]=='movies'){
    movie.className = "active";
}
else if  (controller[3]=='actors'){
    actor.className = "active";
}
else{
    home.className = "active";
}

function changeH(nav){
    if( nav==2){
        clear();
        movie.className = "active";
    }
    if  ( nav==3){
        clear();
        actor.className = "active";
    }
    if  ( nav==1){
        clear();
        home.className = "active";
    }
}
function clear(){
    movie.className = " ";
    actor.className = " ";
    home.className = " ";
}
