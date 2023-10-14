'use client';

import { useEffect } from 'react';

const ErrorPage = ({ error }: { error: Error }) => {
  useEffect(() => console.error(error), [error]);

  return (
    <div className="flex w-full h-full flex-col justify-center">ErrorPage</div>
  );
};

export default ErrorPage;
