
function copyText(element){
   text = document.getElementById(element);
   text.select();
   text.setSelectionRange(0, 99999);

   navigator.clipboard.writeText(text.value);

   alert("Copied: " + text.value + " to clipboard");

}