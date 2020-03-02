fetch("data.json")
.then( (response)=> { return response.json(); } )
.then( (data)=> { display_obj(data.firstName,data.email); } )
var body = document.getElementsByTagName("body");
function display_obj(obj1,obj2)
{   //creating header element
    let header = document.createElement("header");
    //adding content in header tag
    header.textContent = obj1;   
    //applying style to header
    header.style.color = "red"; 

    //creating div tag
    var card = document.createElement("div");
    //adding class attribute to div tag
    card.classList.add("card");
    //appending card in body
    body[0].append(card);
    //appending header in card
    card.append(header); 
    ///adding horizontal row
    var hr = document.createElement("hr");
    //appending hr to div tag
    card.append(hr);
    //creating p tag for obj 2
    var a = document.createElement("a");
    //adding content in p
    a.href = "mailto:"+obj2;
    a.textContent = obj2;
    //appendning p to card
    card.append(a);
    

    //creating a button
    var button = document.createElement("button");
    card.append(button);
    button.textContent = "click me";
    
}
