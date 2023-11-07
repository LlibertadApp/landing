import './Button.css';

const Button = ({caption, href}) => {
    return (
        <a className='anchor-button' href={href}>{caption}</a>
    )
}

export default Button;