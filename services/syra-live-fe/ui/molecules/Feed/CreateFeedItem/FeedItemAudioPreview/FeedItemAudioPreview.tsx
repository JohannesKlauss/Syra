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

  const { name, version, project, audioUri, id, createdAt } = data.mixdown;

  const displayName = name ?? `${project.name} #${version}`;

  return (
    <Box marginY={4} marginX={4} padding={4} background={'linear-gradient(to right, #24243e, #302b63, #24243e)'}>
      <FeedItemAudio title={displayName} id={id} src={audioUri} owner={project.owner} timestamp={createdAt}/>
    </Box>
  );
}

export default FeedItemAudioPreview;
