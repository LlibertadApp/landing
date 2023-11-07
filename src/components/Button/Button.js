import './Button.css';

const Button = ({caption, href, type = 'web', onClick}) => {

    return (
        <a className={type === 'mobile' ? 'anchor-button-mobile' : 'anchor-button'} href={href} onClick={onClick}>{caption}</a>
    )
}

export default Button;