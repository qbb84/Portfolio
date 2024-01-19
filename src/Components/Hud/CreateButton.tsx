import { Html } from "@react-three/drei";

interface BtnProps {
  name?: string;
  divClass?: string;
  btnClass?: string;
  isStatic?: boolean;
}

export default function CreateButton({
  name = "btn",
  divClass = "scrollText",
  btnClass = "scrollBtn",
  isStatic = true,
}: BtnProps) {
  return (
    <>
      <div className={divClass}>
        <button className={btnClass}>{name}</button>
      </div>
    </>
  );
}
