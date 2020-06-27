import React, { FunctionComponent, ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

export const PageContainer: FunctionComponent<PageContainerProps> = ({
  children,
}) => <div className={'container py-2 md:py-4 lg:py-6'}>{children}</div>;
