const isEvent = (name) => name.startsWith("on");
const isAttribute = (name) => !isEvent(name) && name != 'children';
let rootInstance = null; 

export default class Component {
  constructor(host, props = {}) {
    this.host = host;
    this.props = props;
    this._render();
  }


  updateState() {

  }

  _render() {
    let previousInstance = rootInstance;
    let content = this.render();
    const {
      tag,
      props
    } = content;
    console.log(content, tag, props);

    // Create DOM element
    const isTextElement = tag === "TEXT ELEMENT";
    const dom = isTextElement ?
      document.createTextNode("") :
      document.createElement(tag);

  

    // Render children
    const childElements = props.children || [];
    childElements.forEach(childElement => this.render(childElement, dom));

    // Append to parent
    host.appendChild(dom);

}


render() {
  return 'OMG! They wanna see me!!!!!! Aaaaaa';
}

}
function updateProps(dom, prevProps, nextProps) {
  Object.keys(prevProps)
    .filter(isEvent)
    .forEach(name => {
      const eventType = name.toLowerCase().substring(2);
      dom.removeEventListener(eventType, prevProps[name]);
    });

  // Remove attributes
  Object.keys(prevProps)
    .filter(isAttribute)
    .forEach(name => {
      dom[name] = null;
    });

  console.log("dom", dom);
  // Set attributes
  Object.keys(nextProps)
    .filter(isAttribute)
    .forEach(name => {
      dom[name] = nextProps[name];
    });

  // Add event listeners
  Object.keys(nextProps)
    .filter(isEvent)
    .forEach(name => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, nextProps[name]);
    });
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
