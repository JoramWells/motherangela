import Link from "next/link";

export default function Home() {
  return (
   <div>
    <div>
      <Link
      href={'/patients'}
      >Patients</Link>
    </div>
   </div>
  );
}
