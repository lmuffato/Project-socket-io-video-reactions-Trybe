import ReactCard from '../../components/ReactCards';
import { emojiAlien, emojiFeliz, emojiOculos, emojiOlhoEstrela } from '../../assets';

const reactsThumbs = [emojiAlien, emojiFeliz, emojiOculos, emojiOlhoEstrela];

export default function ReactsTray () {
  return (
    <>
    {
      reactsThumbs.map((thumb, index) => {
       return <ReactCard thumbnail={thumb} key={index}/>
      })
    }
    </>
  );
};