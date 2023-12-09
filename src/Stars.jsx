import Star from "./Star.jsx";

const Stars = ({ count }) => {
  return (
    <ul className="card-body-stars u-clearfix">
      <li>
        {Array(count).length >= 1 && Array(count).length <= 5 && Number.isInteger(count) ? (
          <>
            {[...Array(count)].map((el, index) => (
              <Star key={index} />
            ))}
          </>
        ) : (
          alert("Значение должно быть от 1 до 5")
        )}
      </li>
    </ul>
  );
};

export default Stars;
