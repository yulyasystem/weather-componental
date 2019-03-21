const isEvent = (name) => name.startsWith("on");
const isAttribute = (name) => !isEvent(name) && name != 'children';
let rootInstance = null;
const TEXT_ELEMENT = "TEXT_ELEMENT";


export default class Component {
  constructor(host, props = {}) {
    this.host = host;
    this.props = props;
    this._render();
  }

  updateState() {

  }

  _render() {
    let content = this.render();
    const {
      tag,
      props
    } = content;
    console.log(content, tag, props, "FUCCCCCCCCCCCCCCK!");
  }

  render() {
    return 'OMG! They wanna see me!!!!!! Aaaaaa';
  }
}

function controlInstance(host, instance, element) { // first render intance = null 
  if (instance == null) { // Create instance
    const newInstance = createInstance(element);
    host.appendChild(newInstance.dom);
    return newInstance;

  } else if (element == null) { // Remove instance
    host.removeChild(instance.dom);
    return null;

  } else if (instance.element.tag !== element.tag) { // Replace instance
    const newInstance = createInstance(element);
    host.replaceChild(newInstance.dom, instance.dom);
    return newInstance;
  } else if (typeof element.tag === "string") { // Update instance
    updateProps(instance.dom, instance.element.props, element.props);
    instance.childInstances = manageChildren(instance, element);
    instance.element = element;
    return instance;
  } else { //Update composite instance
    instance.publicInstance.props = element.props;

    const childElement = instance.publicInstance.render();
    const oldChildInstance = instance.childInstance;
    const childInstance = controlInstance(host, oldChildInstance, childElement);
    instance.dom = childInstance.dom;
    instance.childInstance = childInstance;
    instance.element = element;
    return instance;
  }
}

function manageChildren(instance, element) {
  const dom = instance.dom;
  const childInstances = instance.childInstances;
  const nextChildElements = element.props.children || [];
  const newChildInstances = [];
  const count = Math.max(childInstances.length, nextChildElements.length);
  for (let i = 0; i < count; i++) {
    const childInstance = childInstances[i];
    const childElement = nextChildElements[i];
    const newChildInstance = controlInstance(dom, childInstance, childElement);
    newChildInstances.push(newChildInstance);
  }
  return newChildInstances.filter(instance => instance != null);
}

function createInstance(element) {
  const {
    tag,
    props
  } = element;
  const isDomElement = typeof tag === "string";

  if (isDomElement) {
    console.log("IS DOM!!!!!!!!!!!!!!!")
    // Instantiate DOM element
    const isTextElement = tag === TEXT_ELEMENT;
    const dom = isTextElement ?
      document.createTextNode("") :
      document.createElement(tag);

    updateProps(dom, [], props);

    const childElements = props.children || [];
    const childInstances = childElements.map(createInstance);
    const childDoms = childInstances.map(childInstance => childInstance.dom);
    childDoms.forEach(childDom => dom.appendChild(childDom));

    const instance = {
      dom,
      element,
      childInstances
    };
    return instance;
  } else {

    // createInstance component element
    const instance = {};
    const publicInstance = createPublicInstance(element, instance);
    const childElement = publicInstance.render(); //content
    const childInstance = createInstance(childElement);
    const dom = childInstance.dom;
    Object.assign(instance, {
      dom,
      element,
      childInstance,
      publicInstance
    });
    return instance;
  }
}

export function kottans(element, container) {
  const prevInstance = rootInstance;
  console.log(element, container, "in RENDER FUNCTION");
  const nextInstance = controlInstance(container, prevInstance, element);
  rootInstance = nextInstance;
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

function createPublicInstance(element, internalInstance) {
  const {
    tag,
    props
  } = element;
  const publicInstance = new tag(props); // new Component(props)
  console.log("public instance", publicInstance, "tag", tag, new tag(props), publicInstance.render());
  publicInstance.__internalInstance = internalInstance;
  return publicInstance;
}
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
