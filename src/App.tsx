import React, { FunctionComponent } from 'react';
import { PageContainer } from './components/layout';

export const App: FunctionComponent<void> = () => {
  return (
    <PageContainer>
      <h1>Large heading</h1>
      <h2>Sub heading</h2>
      <h3>smaller heading</h3>
      <h4>smallest heading</h4>
      <p className={'text-sm'}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. <a href={'/'}>Lorem Ipsum</a> has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only <a href={'/'}>five centuries</a>, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the{' '}
        <a href={'/'}>
          release of Letraset sheets containing Lorem Ipsum passages
        </a>
        , and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
      </p>
      <button className={'button button-emerald-green'}>click me</button>
    </PageContainer>
  );
};
