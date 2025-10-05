import { SidebarContent } from './sidebar-content';

export function Sidebar() {
    return (
        <aside className="hidden md:flex flex-col w-72 border-r">
            <SidebarContent />
        </aside>
    )
}
