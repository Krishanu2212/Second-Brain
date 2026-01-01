import { iconSizeVariants, type IconsProps } from "."

export const XIcon = (props: IconsProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" className={iconSizeVariants[props.size]}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.82 20.768L3.753 3.968A.75.75 0 0 1 4.227 3h2.48c.186 0 .36.086.474.232L20.247 20.032A.75.75 0 0 1 19.773 21h-2.48a.62.62 0 0 1-.473-.232Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M20 3 4 21" />
</svg>

}