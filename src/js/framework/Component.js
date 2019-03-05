export default class Component {
  constructor(host, props = {}){
    this.host = host;
    this.props = props;
    this._render();
  }
  _render(){
    this.host.innerHTML ="";
   
  
    
     let content = this.render(); 
      console.log(content);
    if(typeof content === 'string'){
      console.log("it is string");
      this.host.innerHTML = content;
    }
    else{
      content.map(item=>{ 
        if(typeof item ==='string'){
          const htmlElement = document.createElement('div');
         htmlElement.innerHTML = item;
          return htmlElement;
        }
        else{
          return item;
        }
      }).forEach(htmlElement => {
        this.host.appendChild(htmlElement);
      });
    }
  }
  render(){
    
  }
}
