import React from 'react';
import FeedItemAudio from '../../FeedItem/FeedItemAudio/FeedItemAudio';
import { Box, Skeleton } from '@chakra-ui/core';
import { useMixdownQuery } from '../../../../../gql/generated';

interface Props {
  mixdownId: string;
}

function FeedItemAudioPreview({mixdownId}: Props) {
  const { data, loading, error } = useMixdownQuery({variables: {id: mixdownId}});

  if (loading) return <Skeleton/>
  if (error) return null;

  const { name, version, project } = data.mixdown;

  const displayName = name ?? `${project.name} #${version}`;

  return (
    <Box marginY={4} marginX={4} padding={4} background={'linear-gradient(to right, #24243e, #302b63, #24243e)'}>
      <FeedItemAudio authorName={project.owner.name} mixdown={data.mixdown} projectName={displayName}/>
    </Box>
  );
}

export default FeedItemAudioPreview;
