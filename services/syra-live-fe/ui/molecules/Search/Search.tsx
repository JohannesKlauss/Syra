import React, { useEffect, useState } from 'react';
import SearchField from '../../atoms/SearchField/SearchField';
import { useTranslation } from 'react-i18next';
import { SearchQuery, useSearchQuery } from '../../../gql/generated';
import SearchResults from '../SearchResults/SearchResults';
import { Box } from '@chakra-ui/react';
import { useHotkeys } from "react-hotkeys-hook";
import ClickAwayListener from "react-click-away-listener";

interface Props {}

function Search({}: Props) {
  const { t } = useTranslation();
  const [showResultsTab, setShowResultsTab] = useState(false);
  const [loadedData, setLoadedData] = useState<SearchQuery>();
  const [searchString, setSearchString] = useState('');
  useHotkeys('esc', () => setShowResultsTab(false), {enableOnTags: ['INPUT']});
  const { data } = useSearchQuery({
    variables: {
      searchString,
    },
    skip: searchString.length < 3,
  });

  useEffect(() => {
    if (data) {
      setLoadedData(data);
    }
  }, [data]);

  return (
    <Box pos={'relative'}>
      <SearchField
        onClick={() => setShowResultsTab(true)}
        placeholder={`${t('Search')} ${' '} ${t('S Y R A')}`}
        onKeyup={setSearchString}
      />
      {loadedData && showResultsTab && (
        <ClickAwayListener onClickAway={() => setShowResultsTab(false)}>
          <SearchResults searchString={searchString} userResults={loadedData.users} />
        </ClickAwayListener>
      )}
    </Box>
  );
}

export default Search;
