import React, { useState } from 'react';
import SearchField from '../../atoms/SearchField/SearchField';
import { useTranslation } from 'react-i18next';
import { useSearchQuery } from '../../../gql/generated';
import SearchResults from '../SearchResults/SearchResults';
import { Box } from '@chakra-ui/react';
import { useHotkeys } from "react-hotkeys-hook";
import ClickAwayListener from "react-click-away-listener";

interface Props {}

function Search({}: Props) {
  const { t } = useTranslation();
  const [showResultsTab, setShowResultsTab] = useState(false);
  const [searchString, setSearchString] = useState('');

  useHotkeys('esc', () => setShowResultsTab(false), {enableOnTags: ['INPUT']});

  const { data, loading } = useSearchQuery({
    variables: {
      searchString,
    },
    skip: searchString.length < 3,
  });

  return (
    <Box pos={'relative'} mx={8}>
      <SearchField
        onClick={() => setShowResultsTab(true)}
        placeholder={`${t('Search')} ${' '} ${t('S Y R A')}`}
        onKeyup={setSearchString}
      />
      {!loading && data && showResultsTab && (
        <ClickAwayListener onClickAway={() => setShowResultsTab(false)}>
          <SearchResults searchString={searchString} userResults={data.users} projectResults={data.projects} />
        </ClickAwayListener>
      )}
    </Box>
  );
}

export default Search;
