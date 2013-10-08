var movie =  document.getElementById('li_movies');
var actor =  document.getElementById('li_actors');
var home =  document.getElementById('li_home');
var controller = document.URL.split('/');

window.onload = function(){
    'use strict';
    if(controller[3]==='movies'){
        movie.className = 'active';
    }
else if  (controller[3]==='actors'){
        actor.className = 'active';
    }
else{
        home.className = 'active';
    }
};

function clear(){
    'use strict';
    movie.className = '';
    actor.className = '';
    home.className = '';
}

function changeH(nav){
    'use strict';
    if( nav===2){
        clear();
        movie.className = 'active';
    }
    if  ( nav===3){
        clear();
        actor.className = 'active';
    }
    if  ( nav===1){
        clear();
        home.className = 'active';
    }
}

