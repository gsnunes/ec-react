const Link = require('../src/Link');
const ReactTestUtils = require('react-addons-test-utils');

describe('Link', () => {
  it('changes the class when hovered', () => {
    const shallowRenderer = ReactTestUtils.createRenderer();
    shallowRenderer.render(React.createElement(Link, { page: 'http://www.facebook.com' }, 'some child text'));

    const result = shallowRenderer.getRenderOutput();
    expect(result.type).equal('a');

    result.props.onMouseEnter();
    result.props.onMouseLeave();

    shallowRenderer.render(React.createElement(Link, {}, 'some child text'));
  });
});
