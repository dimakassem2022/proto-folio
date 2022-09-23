import facebookF from '../asserts/icon/facebook-f.svg';
import githup from '../asserts/icon/github.svg';
import linkedinIn from '../asserts/icon/linkedin-in.svg';
export const SocialIcon = () => {
    return (
        <div className='social-icon'>
        <a><img src={facebookF} alt='facebook' /></a>
        <a><img src={githup} alt='githup' /></a>
        <a><img src={linkedinIn} alt='linkedIn' /></a>
    </div>
    )
    
}