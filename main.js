import { ElementBuilder } from './element-builder';

/**
 * @typedef {object} PageElement
 * @prop {keyof HTMLElementTagNameMap} tagName
 * @prop {HTMLElement} attributes
 * @prop {(PageElement[] | string)=} children
 */

/**
 * @type {PageElement}
 */
const page = {
  tagName: 'div',
  attributes: {
    className: 'container',
    style: {
      maxWidth: '1280px',
      marginInline: 'auto',
    },
  },
  children: [
    {
      tagName: 'header',
      attributes: {
        className: 'header',
      },
      children: [
        {
          tagName: 'span',
          attributes: {
            className: 'logo',
            style: {
              color: 'green',
              fontWeight: 'bold',
              fontSize: '1.2rem',
            },
          },
          children: 'logo',
        },
        {
          tagName: 'ul',
          attributes: {
            className: 'menu',
            style: {
              display: 'flex',
              listStyle: 'none',
              gap: '2rem',
            },
          },
          children: [
            {
              tagName: 'li',
              attributes: {
                className: 'menu-item',
              },
              children: [
                {
                  tagName: 'a',
                  attributes: {
                    href: '/home',
                  },
                  children: 'home',
                },
              ],
            },
            {
              tagName: 'li',
              attributes: {
                className: 'menu-item',
              },
              children: [
                {
                  tagName: 'a',
                  attributes: {
                    href: '/about',
                  },
                  children: 'about',
                },
              ],
            },
            {
              tagName: 'li',
              attributes: {
                className: 'menu-item',
              },
              children: [
                {
                  tagName: 'a',
                  attributes: {
                    href: '/contact',
                  },
                  children: 'contact',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tagName: 'div',
      attributes: {
        className: 'body',
        style: {
          height: '100%',
          padding: '1rem',
          marginBottom: '1rem',
        },
      },
    },
  ],
};

const root = document.getElementById('root');
const builder = new ElementBuilder(page);

root.append(builder.getNode());

/**
 * @type {PageElement}
 */
const product = {
  tagName: 'div',
  attributes: {
    className: 'product-item',
    style: {
      placeContent: 'center',
      gap: '.5rem',
      height: '100%',
    },
  },
};

const body = document.querySelector('.body');

Array.from(Array(15)).forEach((_, index) => {
  product.children = [
    {
      tagName: 'span',
      children: `${index + 1}`,
      attributes: {
        style: {
          fontSize: '2.5rem',
          fontWeight: 'bold',
        },
      },
    },
    {
      tagName: 'span',
      attributes: {
        style: {
          textTransform: 'capitalize',
        },
      },
      children: 'product',
    },
  ];

  const builder = new ElementBuilder(product);

  body.append(builder.getNode());
});
