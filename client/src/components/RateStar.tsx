type StarProps = {
    color?: string
}

const RateStar = ({color}: StarProps) =>{
    return(
        <svg style={{cursor: "pointer"}} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_3_4)">
            <path d="M3.38624 14.4778C3.02436 14.6634 2.61374 14.3381 2.68686 13.9228L3.46499 9.48844L0.162176 6.34219C-0.146261 6.04781 0.0140513 5.50969 0.427489 5.45156L5.01936 4.79906L7.06686 0.7425C7.25155 0.376875 7.75124 0.376875 7.93593 0.7425L9.98343 4.79906L14.5753 5.45156C14.9887 5.50969 15.1491 6.04781 14.8397 6.34219L11.5378 9.48844L12.3159 13.9228C12.3891 14.3381 11.9784 14.6634 11.6166 14.4778L7.49999 12.3628L3.38624 14.4778Z" fill={color ? color : 'black'} stroke={color ? color : 'black'}/>
            </g>
            <defs>
            <clipPath id="clip0_3_4">
            <rect width="15" height="15" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    );
}
export default RateStar;