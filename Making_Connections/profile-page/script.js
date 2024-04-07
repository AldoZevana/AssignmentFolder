function ChangeName(){
    document.getElementById("namechange").innerHTML="Aldo Kurti";
}


function RemoveUser(el){
    el=document.getElementById("user-removed");
    el.remove();
}
function RemoveUser1(el){
    el=document.getElementById("user-removed1");
    el.remove();

}
var requests=2;
function RemoveRequest(){

    requests-=1;
    document.getElementById("request-removed").innerHTML=requests
}
function RemoveRequest1(){
    
    requests-=1;
    document.getElementById("request-removed").innerHTML=requests
}
var connections= 500;
function YourConnections(){
    
    connections+=1;
    document.getElementById("connections-acquired").innerHTML=connections
}


