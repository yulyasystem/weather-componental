const isEvent = (name) => name.startsWiths("on");
const isAttribute = (name) => !isEvent(name) && name != 'children';
let rootInstance = null;

export default class Component {
  constructor(host, props = {}) {
    this.host = host;
    this.props = props;
    this.bindEverything();
    this._render();
  }
  bindEverything() {}

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
    const isTextElement = type === "TEXT ELEMENT";
    const dom = isTextElement ?
      document.createTextNode("") :
      document.createElement(type);

    // Add event listeners
    const isListener = name => name.startsWith("on");
    Object.keys(props).filter(isListener).forEach(name => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, props[name]);
    });

    // Set properties
    const isAttribute = name => !isListener(name) && name != "children";
    Object.keys(props).filter(isAttribute).forEach(name => {
      dom[name] = props[name];
    });

    // Render children
    const childElements = props.children || [];
    childElements.forEach(childElement => render(childElement, dom));

    // Append to parent
    parentDom.appendChild(dom);
  git




}


render() {
  return 'OMG! They wanna see me!!!!!! Aaaaaa';
}

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
