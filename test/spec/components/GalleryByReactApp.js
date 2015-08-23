'use strict';

describe('GalleryByReactApp', () => {
  let React = require('react/addons');
  let GalleryByReactApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    GalleryByReactApp = require('components/GalleryByReactApp.js');
    component = React.createElement(GalleryByReactApp);
  });

  it('should create a new instance of GalleryByReactApp', () => {
    expect(component).toBeDefined();
  });
});
