import { iconSizeVariants, type IconsProps } from "."

export const VideoIcon = (props: IconsProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" className={iconSizeVariants[props.size]}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 12l-3.5 2v-4l3.5 2z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M2 12.707v-1.415c0-2.896 0-4.343.905-5.274C3.811 5.086 5.237 5.046 8.088 4.965 9.439 4.927 10.819 4.9 12 4.9s2.561.027 3.912.065c2.851.081 4.277.121 5.183 1.052C22 6.949 22 8.397 22 11.292v1.415c0 2.895 0 4.343-.906 5.274-.905.932-2.331.972-5.182 1.053C14.561 19.073 13.181 19.1 12 19.1s-2.561-.027-3.913-.065c-2.851-.081-4.277-.121-5.182-1.053C2 17.05 2 15.602 2 12.707Z" />
    </svg>

}