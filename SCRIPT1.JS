var a=new XMLHttpRequest();
a.open("GET","https://restcountries.com/v3.1/all",true)

a.send();
a.onload=()=>{
    var data=JSON.parse(a.response)
   

console.log(data)           //xml-name
for(i=0;i<data.length;i++){

console.log(data[i].name)
}
for(i=0;i<data.length;i++){      //xml-flag

    
    console.log(data[i].name)
    }
    for(i=0;i<data.length;i++){            //xml-population

       
        console.log(data[i].population)   
        }
for(i=0;i<data.length;i++){               //xml-region

    console.log(data[i].region)
    }

    for(i=0;i<data.length;i++){            //xml-subregion

        console.log(data[i].subregion)
        }
            

}


                           
                                         //  JSON COMPARING PROGRAM

var obj1={
    "name":"person",
    "age":"5",
}
var obj2={
    "age":"5",
    "name":"person",
}
if(JSON.stringify(obj1)===JSON.stringify(obj2)){
    console.log("false")
}else{
    console.log("true")
}