import { FiEdit3, } from 'react-icons/fi';
import { VscChromeClose } from 'react-icons/vsc';


export const Meals = ({text, editMyTitle, deleteMeal}) => {
    return (
        <div className='item'>
            <p>{text}</p>
            <div className='icons'>
                <FiEdit3 onClick={ editMyTitle } className='edit' />
                <VscChromeClose onClick={ deleteMeal } />
            </div>
        </div>
    );
}