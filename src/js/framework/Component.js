const isEvent = (name)=>name.startsWiths("on");
const isAttribute = (name)=>!isEvent(name)&& name != 'children';
let rootInstance = null;
;

export default class Component {
  constructor(host, props = {}) {
    this.host = host;
    this.props = props;
    this.bindEverything();
    this._render();
  }
  bindEverything() {}

  updateState(){

  }

  

  

  _render() {
    let previousInstance = rootInstance;
    this.host.innerHTML = "";
    let content = this.render();
    console.log("content", content);

    if (!Array.isArray(content)) {
      content = [content];
    }

    // content.map(item => this._vDomPrototypeElementToHtmlElement(item)) // [string|HTMLElement] => [HTMLElement]
    //   .forEach(htmlElement => {
    //     this.host.appendChild(htmlElement);
    //   });
  }
 

  render() {
    return 'OMG! They wanna see me!!!!!! Aaaaaa';
  }

  // _vDomPrototypeElementToHtmlElement(element) {
  //   if (typeof element === 'string') {
  //     let container;
  //     const containsHtmlTags = /[<>&]/.test(element);
  //     if (containsHtmlTags) {
  //       container = document.createElement('div');
  //       container.innerHTML = element;
  //     } else {
  //       container = document.createTextNode(element);
  //     }
  //     return container;
  //   } else {
  //     if (element.tag) {
  //       if (typeof element.tag === 'function') {

  //         const container = document.createElement('div');
  //         new element.tag(container, element.props);

  //         return container;
  //       } else {
  //         // string
  //         const container = document.createElement(element.tag);
  //         if (element.content) {
  //           container.innerHTML = element.content;
  //         }

  //         // ensure following element properties are Array
  //         ['classList', 'attributes', 'children'].forEach(item => {
  //           if (element[item] && !Array.isArray(element[item])) {
  //             element[item] = [element[item]];
  //           }
  //         });
  //         if (element.classList) {
  //           container.classList.add(...element.classList);
  //         }
  //         if (element.attributes) {
  //           element.attributes.forEach(attributeSpec => {
  //             container.setAttribute(attributeSpec.name, attributeSpec.value);
  //           });
  //         }

  //         // process eventHandlers
  //         if (element.eventHandlers) {
  //           Object.keys(element.eventHandlers).forEach(eventType => {
  //             container.addEventListener(eventType, element.eventHandlers[eventType]);
  //           });
  //         }

  //         // process children
  //         if (element.children) {
  //           element.children.forEach(el => {
  //             const htmlElement = this._vDomPrototypeElementToHtmlElement(el);
  //             container.appendChild(htmlElement);
  //           });
  //         }

  //         return container;
  //       }
  //     }
  //     return element;
  //   }
  // }
}
export const TEXT_ELEMENT = "TEXT_ELEMENT";

export function createElement(tag, config, ...args) { //config -{}props args-children
  const props = Object.assign({}, config);
  const hasChildren = args.length > 0;
  const arrayChildren = hasChildren ? [].concat(...args) : [];
  props.children = arrayChildren
    .filter(item => item != null && item !== false) //except falsy values
    .map(item => (item instanceof Object ? item : createTextElement(item))); //convert every child that is not element
  return {
    tag,
    props
  };
}

function createTextElement(value) {
  return createElement(TEXT_ELEMENT, {
    nodeValue: value
  });
}


