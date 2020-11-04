import React, { useState } from "react";
import SearchField from "../../atoms/SearchField/SearchField";
import { useTranslation } from "react-i18next";
import useSuspendableQuery from "../../../hooks/apollo/useSuspendableQuery";
import { useSearchQuery } from "../../../gql/generated";
import SearchResults from "../SearchResults/SearchResults";

interface Props {

}

function Search({}: Props) {
  const { t } = useTranslation();
  const [searchString, setSearchString] = useState('');
  const { data, refetch, loading } = useSuspendableQuery(useSearchQuery({
    variables: {
      searchString,
    },
    skip: searchString.length < 3,
  }));

  return (
    <>
      <SearchField placeholder={`${t('Search')} ${' '} ${t('S Y R A')}`} onKeyup={setSearchString}/>
      {!loading && data && <SearchResults userResults={data.users}/>}
    </>
  );
}

export default Search;
