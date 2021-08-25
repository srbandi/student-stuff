var listofnames=[];
function submit(){
    var name1=document.getElementById("input1").value;
    var name2=document.getElementById("input2").value;
    var name3=document.getElementById("input3").value;
    var name4=document.getElementById("input4").value;
    listofnames.push(name1,name2,name3,name4);
    document.getElementById("names").innerHTML=listofnames;
    document.getElementById("sumbiting").style.display="none";
    document.getElementById("sorting").style.display="inline-block";
}
function sorting(){
    listofnames.sort();
    document.getElementById("names").innerHTML=listofnames;
}