import React from 'react';

function page() {
  throw new Error("test error");

  return <div>page</div>;
}

export default page;
