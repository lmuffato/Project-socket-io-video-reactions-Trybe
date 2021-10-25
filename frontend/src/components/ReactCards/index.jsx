import Card from './styled';
import { useState } from 'react';

export default function ReactCard({thumbnail}) {
  const [reaction, setReaction] = useState(0);

  const handleClick = () => {
    setReaction(reaction + 1);
  };

  return (
    <Card type='button' onClick={handleClick}>
      <img src={thumbnail} alt='reation' />
      <p>{reaction}</p>
    </Card>
  );
}
