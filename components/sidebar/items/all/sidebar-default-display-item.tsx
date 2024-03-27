import { FC, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface SidebarDefaultItemProps {
  item: { name: string; [key: string]: any }
  icon: React.ReactNode
}

export const SidebarDefaultItem: FC<SidebarDefaultItemProps> = ({
  item,
  icon
}) => {
  const itemRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      ref={itemRef}
      className={cn(
        "hover:bg-accent flex w-full cursor-default items-center rounded p-2 hover:opacity-50 focus:outline-none"
      )}
    >
      {icon}
      <div className="ml-3 flex-1 truncate text-sm font-semibold">
        {item.name}
      </div>
    </div>
  )
}
