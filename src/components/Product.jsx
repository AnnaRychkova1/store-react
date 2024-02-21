import PropTypes from 'prop-types';

const Product = ({ name, imgUrl, price, isOnSale = true }) => {
  return (
    <div>
      <h2>
        {name}
        <span>{isOnSale ? <span>🎁BIG SALE</span> : null}</span>
      </h2>
      <img src={imgUrl} alt={name} width="480" />
      <p>Price: {price} credits</p>
    </div>
  );
};

// Опис типів пропсів компонента
Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
  isOnSale: PropTypes.bool,
};

export default Product;
