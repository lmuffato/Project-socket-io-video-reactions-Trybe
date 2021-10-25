import { Body } from '../styles/homeStyle';
import { video } from '../assets';
import ReactsTray from '../containers/ReactsTray';


export default function Home() {
  return (
    <>
      <Body>
        <h1>Reações ao Video</h1>
        <div>
          <img src={video} alt="imagem video"/>
        </div>
      </Body>
        <ReactsTray />
    </>
  );
}