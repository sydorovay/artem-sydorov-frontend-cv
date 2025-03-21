import { forwardRef } from 'react';

const Card = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="card">
      {props.children}
    </div>
  );
});

Card.displayName = "Card"; 

export default Card;