import Button from 'react-bootstrap/Button';

const CustomButton = ({title, variant, ...props}) => {
    console.log('pros', title, variant)
    return (
        <Button variant={`${variant}`} {...props}>{title}</Button>
    )
} 

export default CustomButton;