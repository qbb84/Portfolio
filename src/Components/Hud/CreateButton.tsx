import { ReactNode } from 'react';

interface BtnProps {
  name?: string | ReactNode;
  divClass?: string;
  btnClass?: string;
}

export default function CreateButton({
  name = 'btn',
  divClass = 'scrollText',
  btnClass = 'scrollBtn',
}: BtnProps) {
  return (
    <>
      <div className={divClass}>
        <button className={btnClass}>{name}</button>
      </div>
    </>
  );
}
