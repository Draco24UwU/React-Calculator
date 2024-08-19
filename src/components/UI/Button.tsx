
interface ButtonProps {
    text?: string;
    className?: string;
    onClick?: () => void; 
    icon?: string | React.ElementType;
    iconClass?: string;
    swap?: boolean;
}


function Button({ className, onClick, text, icon, iconClass = "", swap = false}: ButtonProps) {

    const typeOfIcon = () => {
        const Icon = icon;
        const IconClass = iconClass;
        const IconComponent = Icon as React.ElementType;
        switch (typeof Icon) {
            case "string":
                return <img src={Icon} className={`h-6 w-6 dark:text-white ${IconClass}`} alt="icon"/>
            case "object":
                return <IconComponent className={`h-6 w-6 dark:text-white`}/>;
            default:
                break;
        }
    }

    const ButtonContent = () => {
        return(
            <>
                {icon && swap ? (
                    <>
                        {icon && typeOfIcon()}
                        {text}
                    </>
                ): (
                    <>
                        {text}
                        {icon && typeOfIcon()}
                    </>
                )}
                
            </>
        )
    }

    return (
        <button onClick={onClick} className={`btn btn-primary min-w-16 w-auto h-auto py-1 px-2 dark:text-white ${className}`}>
            <ButtonContent/>
        </button>
    );
}


export default Button;