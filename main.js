const stylo = `

  body{ 
  background: #111;
  color: white;
  font-family: sans-serif;
  }
  
  h1{
    color: deepskyblue;
    font-size: 18px;
    width:100%;
    padding: 5px;
    border-bottom: 2px solid #222;
  }
  
  a{
    display: inline-block;
    text-decoration: none;
    width:100%;
    margin: 5px;
    color: white;
    padding: 5px;
  }
  span.filename{
    color: gold;
    font-variant: small-caps;
  }
  span.dirname{
    color: white;
  }
  li {
    list-style-type: circle;
  }
  span.filesize{
    color: gray;
    display:none;
  }

`

const iframe = document.getElementById('myFrame');

function loadframe() {
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  const style = iframeDoc.createElement('style');
  style.textContent = stylo;
  iframeDoc.head.appendChild(style);
};