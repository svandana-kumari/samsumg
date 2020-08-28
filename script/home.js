/* var interval = setInterval(function() {
console.log(a);
    if(document.readyState === 'complete') {
        clearInterval(interval);
        var id = "corona_hidden";
        var a = document.getElementById("mobile_head");
        console.log(a);
        var id = document.getElementById("mobile_hov");
        console.log(id);
        
a.addEventListener("mouseenter", function( id ){
    var y = id;
    var x = document.querySelectorAll('[id=y]');
    x.style.display = "block";
} )
    }    
}, 100);
 */

function show(id){
    var y = id;
    //var x = document.querySelectorAll('[id=y]');
    y.style.display = "block";
}

/* $(document).ready(
    function()
    {
        document.getElementById("mobile_head");
        
console.log(a);
var id = document.getElementById("mobile_hov");
console.log(id);
    }
); */





function hide(id){
    var y = id;
    //var x = document.querySelectorAll('[id=y]');
    y.style.display = "none";
}



function showFlex(id){
    var y = id;
    y.style.display = "inline-flex";
}


/* #sub_cat1:hover + #dip1{
    display: inline-flex;
} */

