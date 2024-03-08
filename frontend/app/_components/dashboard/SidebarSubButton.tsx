import Link from "next/link";

interface SidebarSubButtonProps {
//   icon: React.ReactNode;
  label: string;
//   selected: boolean;
//   onClick: () => {};
  link: string;
}

export const SidebarSubButton = ({
//   icon,
  label,
//   selected,
//   onClick,
  link,
}: SidebarSubButtonProps) => {
  return (
    <div className="flex h-10 items-center pl-4
    text-blue-100 text-md
    "
    >
      <Link href={link}>{label}</Link>
    </div>
  );
};
