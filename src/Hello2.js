const Hello2 = ({ name }) => {
  const sayHi = () => {
    console.log(`Hi ${name}`);
  };

  return (
    <div>
      <a href="#" onClick={sayHi}>Say Hello 2</a>
    </div>
  );
};

Hello2.propTypes = {
  name: React.PropTypes.string.isRequired,
};

module.exports = Hello2;
