import { DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css';

import vdo from './upload/vdo.mp4';
import thum from './images/vdo_img.jpg';
function Vdo(){
    return(
        <div>
            <h2>Video</h2>
            <Video autoPlay loop poster={thum}>
                <source src={vdo} type='video/webm'></source>
            </Video>
        </div>
    )
}

export default Vdo;