var clicked = document.getElementById("btn");

clicked.onclick = function()
{
    counter =  counter + 1;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
};
