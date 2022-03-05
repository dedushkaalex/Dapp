import React from 'react';
import {
    CloseIcon,
    Icon,
    SidebarContainer,
    SideBtnWrap,
    SidebarLink,
    SidebarRoute,
    SidebarWrapper,
    SidebarMenu
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about'>About</SidebarLink>

                    <SidebarLink to='roadmap'>Roadmap</SidebarLink>

                    <SidebarLink to='team'>Team</SidebarLink>

                    <SidebarLink to='tech'>Tech specs</SidebarLink>

                    <SidebarLink to='utilities'>Utilities</SidebarLink>

                    <SidebarLink to='faqs'>Faqs</SidebarLink>

                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/connect'>Connect</SidebarRoute>
                </SideBtnWrap>

            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar