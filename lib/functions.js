function populateIframe(url){
    var iframe = document.getElementById("selectedReport"); 
    iframe.setAttribute("src",url); 
    iframe.width = iframe.contentWindow.document.body.scrollWidth; 
    iframe.height = iframe.contentWindow.document.body.scrollHeight;
}