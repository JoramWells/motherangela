'use client'

import { Collapse, useDisclosure } from "@chakra-ui/react"
import Link from "next/link"
import { FaChevronDown, FaChevronRight } from "react-icons/fa"
import { SidebarSubButton } from "./SidebarSubButton"

interface SidebarCollapseButtonProps{
    label:string
    link:string
}

export const SidebarCollapseButton = ({label='Dashboard', link='/'}: SidebarCollapseButtonProps) => {
    const {isOpen, onToggle} = useDisclosure()
    return (
    <>
        <div 
        onClick={onToggle}
        className="flex h-10 items-center pl-4 pr-4 justify-between
        hover:cursor-pointer overflow-y-auto
        ">
            <p
                // href={'/'}
                className="text-white"
            >{label}</p>
            {isOpen?
            <FaChevronDown
                className="text-white"
            />:
            <FaChevronRight
                className="text-white"
            />
            } 

        </div>

        <Collapse in={isOpen}>
            <SidebarSubButton
            label="Accounts"
            link={link}
            />
        </Collapse>

    </>
    )
}
