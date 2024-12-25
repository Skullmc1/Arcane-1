import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Position {
  x: number;
  y: number;
}

interface CustomContextMenuProps {
  position: Position;
  onClose: () => void;
}

interface MenuItem {
  icon: string;
  label: string;
  onClick?: () => void;
}

const CustomContextMenu: React.FC<CustomContextMenuProps> = ({
  position,
  onClose,
}) => {
  const router = useRouter();

  const menuItems: MenuItem[] = [
    {
      icon: "/about.svg",
      label: "About RichMUN",
      onClick: () => router.push("/about"),
    },
    {
      icon: "/committees.svg",
      label: "Committees",
      onClick: () => router.push("/committees"),
    },
    {
      icon: "/register.svg",
      label: "Register",
      onClick: () => router.push("/register"),
    },
    {
      icon: "/schedule.svg",
      label: "Schedule",
      onClick: () => router.push("/schedule"),
    },
    {
      icon: "/contact.svg",
      label: "Contact",
      onClick: () => router.push("/contact"),
    },
  ];

  return (
    <div
      className="fixed z-50 w-64 bg-black/90 backdrop-blur-sm border border-[#8831ff]/30 rounded-lg shadow-lg shadow-[#bd8cff]/20 overflow-hidden context-menu-appear"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <div className="py-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="w-full px-4 py-3 text-left text-gray-200 hover:bg-[#8831ff]/20 flex items-center space-x-3 font-chakra-petch transition-all duration-200 hover:pl-6 group"
            onClick={() => {
              if (item.onClick) {
                item.onClick();
              }
              onClose();
            }}
          >
            <div className="w-5 h-5 relative group-hover:scale-110 transition-transform duration-200">
              <Image
                src={item.icon}
                alt={item.label}
                fill
                className="text-[#bd8cff] group-hover:text-white transition-colors duration-200"
              />
            </div>
            <span className="group-hover:text-[#bd8cff] transition-colors duration-200">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default function ContextMenuWrapper() {
  const [showMenu, setShowMenu] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();

      // Calculate position, keeping menu within viewport
      const x = Math.min(e.clientX, window.innerWidth - 256);
      const y = Math.min(e.clientY, window.innerHeight - 200);

      setPosition({ x, y });
      setShowMenu(true);
    };

    const handleClick = () => {
      if (showMenu) {
        setShowMenu(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showMenu) {
        setShowMenu(false);
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showMenu]);

  if (!showMenu) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
        onClick={() => setShowMenu(false)}
      />
      <CustomContextMenu
        position={position}
        onClose={() => setShowMenu(false)}
      />
    </>
  );
}
