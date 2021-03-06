const STATUS = {
  NORMAL: 'normal',
  HOVERED: 'hovered',
};

class Link extends React.Component {

  constructor() {
    super();

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      class: STATUS.NORMAL,
    };
  }

  onMouseEnter() {
    this.setState({ class: STATUS.HOVERED });
  }

  onMouseLeave() {
    this.setState({ class: STATUS.NORMAL });
  }

  render() {
    return (
      <a
        className={this.state.class}
        href={this.props.page || '#'}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {this.props.children}
      </a>
    );
  }

}

Link.propTypes = {
  page: React.PropTypes.string,
  children: React.PropTypes.string.isRequired,
};

module.exports = Link;
