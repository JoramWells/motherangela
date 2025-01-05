import {render, screen} from '@testing-library/react'
import SidebarItemLink from "../SidebarItemLink"
import { BrowserRouter } from 'react-router-dom'

describe('SidebarItemLink',()=>{
    const itemList = [
        {title:'SubItem1', link:'/link1'}
    ]

    test('renders SidebarItemLink with default props', ()=>{
        render(
        <BrowserRouter>
            <SidebarItemLink />
        </BrowserRouter>)
    })
    expect(screen.getByText('dashboard')).toBeInTheDocument()
})