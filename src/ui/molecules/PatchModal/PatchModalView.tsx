import React from 'react';
import { Container } from '@material-ui/core';

interface Props {
  isModalOpen: boolean;
}

const PatchModalView: React.FC<Props> = React.memo(({isModalOpen}) => {

  return (
    <Container>

    </Container>
  );
});

export default PatchModalView;
