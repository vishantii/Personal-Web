import React from 'react';

import { NextSeo } from 'next-seo';

interface AppHeaderProps {
  title: string;
  pageDesc: string;
}

export default function AppHeader(props: AppHeaderProps) {
  const { title, pageDesc } = props;
  return <NextSeo title={`${title}`} description={pageDesc} />;
}
