/**
 * @typedef {object} PageElement
 * @prop {keyof HTMLElementTagNameMap} tagName
 * @prop {HTMLElement} attributes
 * @prop {(PageElement[] | string)=} children
 */

export class ElementBuilder {
  /**
   * @type {HTMLElement}
   */
  #_node;

  /**
   * @param {PageElement} element
   */
  constructor(element) {
    this.#_node = this.#createElement(element);
  }

  /**
   * @param {PageElement} element
   * @returns {HTMLElement}
   */
  #createElement({ tagName, attributes, children }) {
    const node = document.createElement(tagName);

    this.#assignAttributes(node, attributes);
    this.#appendChildren(node, children);

    return node;
  }

  /**
   * @param {HTMLElement} node
   * @param {HTMLElement=} attributes
   */
  #assignAttributes(node, attributes) {
    if (!attributes) {
      return;
    }

    for (const key in attributes) {
      if (typeof attributes[key] === 'object') {
        Object.assign(node[key], attributes[key]);
      } else {
        node[key] = attributes[key];
      }
    }
  }

  /**
   * @param {HTMLElement} node
   * @param {(string | PageElement[])=} children
   */
  #appendChildren(node, children) {
    if (!children) {
      return;
    }

    if (typeof children === 'string') {
      return node.append(document.createTextNode(children));
    }

    children.forEach((child) => {
      node.append(this.#createElement(child));
    });
  }

  getNode() {
    return this.#_node;
  }
}
