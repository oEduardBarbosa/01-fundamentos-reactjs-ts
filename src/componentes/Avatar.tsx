import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvaatrProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
    src: string;
    alt?: string;
}

export function Avatar({hasBorder = true, ...props}: AvaatrProps) {
    return (
        <img 
            className={hasBorder ? styles.avatarWIthBorder : styles.avatar} 
            {...props}
        /> 
    )
} 
