import { Github, Dribbble, Props, Linkedin } from '@icons-pack/react-simple-icons'
import { FC } from 'react'
import Sspai from '../assets/sspai.svg'
import Zhihu from '../assets/zhihu.svg'

export type LinkType = {
    url: string,
    icon: FC<Props> | string,
    color: string,
    fill: string,
    border: string,
    text: string,
    shadow: string,
    id?: string,
    name?: string,
}


export const links : readonly [LinkType] = [
    {
        url: 'https://github.com/MengXi2021',
        icon: Github,
        color: 'from-bg-[#24292f] to-bg-[#040d21]',
        fill: "fill-[#181717]",
        border: "border-[#181717]",
        text:"text-[#181717]",
        shadow: "shadow-true-gray-400",
        id: "MengXi2021",
        name: "GitHub"
    },
]