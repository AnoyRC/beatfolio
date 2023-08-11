'use client';

import { usePathname } from 'next/navigation';

const PageTitle = ({ title }) => {
  if (!title) {
    const params = usePathname();
    const currParam = params.split('/').pop();
    title = currParam.charAt(0).toUpperCase() + currParam.slice(1);
  }

  return (
    <h2 className="font-bold text-gradiant text-2xl w-fit prevent-select">
      {title}
    </h2>
  );
};
export default PageTitle;
