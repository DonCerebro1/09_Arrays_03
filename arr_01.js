/*********   CODE CHALLENGE HTML **********/

/*
Aufgabe:
Erstellen Sie eine JS-Struktur, die Ihnen den folgenden String 
einer HTML-Seite ausgibt:
<html><head></head><body><h1></h1><p></p></body></html>
Verwenden Sie dafür die untenstehenden Arrays
*/

const controls = ["<", "</", ">"];
const tags = ["html","head","head","body","h1","h1","p","p","body","html"];
let stack = [];

output(getHtml());
function getHtml()
 { 
    let htmlStr = "";

    for (let i = 0; i < tags.length; i++) 
    {
        if (isOpenTag(tags[i])) 
        {
            htmlStr += getTags(tags[i],"open");
        } else
         {
            htmlStr += getTags(tags[i],"close");
         }
    }
    return htmlStr;
}

// output(getTags("html", "open"));
// output(getTags("html", "close"));
function getTags(tag, op)
{
    switch(op)
    {
        case "open":
            return controls[0] + tag + controls[2];
        case "close":
            return controls[1] + tag + controls[2];   
        default:
            return "#!";    
    } 
}

function isOpenTag(tag)
{
    // tag == mitgebrachter tag gleich dem oben auf dem Stapel
    const cond =  tag != stack[stack.length - 1];  

    if (cond)
    {
        stack.push(tag);
        return true;
        
    } else
      {
        stack.pop();  
        return false;
      }  
}

// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
}
