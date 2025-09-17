function customRender(reactElemnet,mainContainer){
    /*
    const domElement = document.createElement(reactElemnet.type)
    domElement.innerHTML = reactElemnet.Children
    domElement.setAttribute('href',reactElemnet.props.href)
    domElement.setAttribute("target", reactElemnet.props.target);
    mainContainer.appendChild(domElement)
    */
  const domElement = document.createElement(reactElemnet.type)
  domElement.innerHTML = reactElemnet.Children
  for (const prop in reactElemnet.props) {
    if (prop === "childern") continue
    domElement.setAttribute(prop,reactElemnet.props[prop ])
    
    
  }
mainContainer.appendChild(domElement)
}
const reactElemnet={
    type:"a",
    props:{
        href:"http://google.com",
        target:'_blank'
    },
    Children:"click me to visit google"
}
const mainContainer = document.querySelector('#root')

customRender(reactElemnet,mainContainer)