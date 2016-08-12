const Hello = ({ name }) => {
  const sayHi = () => {
    console.log(`Hi ${name}`);
  };

  return (
    <div>
      <a href="#" onClick={sayHi}>Say Hello 1</a>
    </div>
  );
};

Hello.propTypes = {
  name: React.PropTypes.string.isRequired,
};

module.exports = Hello;
