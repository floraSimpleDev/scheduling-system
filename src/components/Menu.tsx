import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: ["admin"],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin"],
      },
      {
        icon: "/staff.png",
        label: "Staffs",
        href: "/list/staffs",
        visible: ["admin"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2 " key={i.title}>
          <span className="hidden lg:block text-gray-400 font-medium my-4">
            {i.title}
          </span>
          {i.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex justify-center lg:justify-start items-center gap-4 text-gray-600 py-2"
            >
              <Image src={item.icon} alt={item.label} width={20} height={20} />
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
