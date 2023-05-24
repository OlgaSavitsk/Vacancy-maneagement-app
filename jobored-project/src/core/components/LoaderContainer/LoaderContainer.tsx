import { LoadingOverlay } from '@mantine/core';
import { FC, PropsWithChildren, ReactElement } from 'react';

interface Props extends PropsWithChildren {
  isLoading: boolean;
}

export const LoaderContainer: FC<Props> = ({ isLoading, children }): JSX.Element => {
  if (isLoading) {
    return (
      <LoadingOverlay
        visible={isLoading}
        overlayBlur={2}
        loaderProps={{ size: 'lg', variant: 'dots' }}
        sx={{height: 'inherit'}}
      />
    );
  }

  return children as ReactElement;
};
