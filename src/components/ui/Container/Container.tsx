import React from 'react';
import { ContainerProps } from './Container.types';

export const Container: React.FC<ContainerProps> = ({
  children,
  // maxWidth = '1200px',
  // padding = '0 2rem',
}) => {
  const styles: React.CSSProperties = {
    //maxWidth,
    margin: '0 auto',
    //padding,
    //width: '100%',
  };

  return <div style={styles}>{children}</div>;
};