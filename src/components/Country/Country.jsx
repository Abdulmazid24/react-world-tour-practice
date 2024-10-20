import './Country.css';

const Country = ({ country }) => {
  console.log(country);
  const { name, flags, maps } = country;
  return (
    <div className="country">
      <div>
        <img src={flags.png} alt="" />
      </div>
      <h3>{name.common}</h3>
    </div>
  );
};

export default Country;
