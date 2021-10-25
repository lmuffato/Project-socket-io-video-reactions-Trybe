import { Body } from '../styles/homeStyle';
import image from '../asserts/image.png'


export default function Home() {
  return (
  <>
      <Body>
        <h1>Reações ao Video</h1>
        <div>
          <img src={image} alt="imagem video"/>
        </div>
      </Body>
  </>
  );
}