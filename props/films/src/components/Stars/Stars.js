import './Stars.css';
import Star from './Star/Star';
import './Stars.css';

function Stars({ count }) {
  if (typeof count !== 'number' || count < 1 || count > 5) {
    return <></>;
  }
  const rating = Array.from(Array(count).keys());

  return (
    <ul className='card-body-stars u-clearfix'>
      {rating.map((el) => (
        <Star key={el} />
      ))}
    </ul>
  );
}

export default Stars;
