
import BigCircle from "../BigCircle";
const Hero = (props) => {
    return (
    <div className='d-flex align-items-center flex-wrap justify-content-center'>
        <BigCircle text="Design" color="#E6563B" />
        <BigCircle text="Develop" color="#EB9D3A" />
        <BigCircle text="Support" color="#7CB06C" />
        <BigCircle text="Host" color="#00ABA9" />
    </div>
    );
}
export default Hero;