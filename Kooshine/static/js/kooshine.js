function code(){
        alert("代码如诗");
}
function hardware(){
    alert("树莓派再等等……")
}
/*
function about(){
    //var id = document.getElementById('modify');
    //console.log(id);
    //id.innerHTML="拿到一个DOM节点后，我们可以对它进行更新。可以直接修改节点的文本，方法有两种：";
    var reader = new FileReader();
    reader.onload = function(event) {
        var contents = event.target.result;
        console.log("File Contents:" + contents);
    }
    reader.onerror = function(event) {
        console.error("File could not be read! Code"+ event.target.error.code);
    }
    reader.readAsText("About_kooshine.txt");
}*/

var txt_file = $.ajax({
   url:"/about/",
   dataType:"json",
   success: function about(data){
       alert(data["info"]);
   }
});