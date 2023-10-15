import React from 'react';

const SubmitPage = async ({ params }: { params: { formUrl: string } }) => {
  const form = await GetFormContentByUrl(params.formUrl);
  return <div>SubmitPage {params.formUrl}</div>;
};

export default SubmitPage;
