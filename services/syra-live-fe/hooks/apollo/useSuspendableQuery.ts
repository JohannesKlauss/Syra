import { suspend } from '../../helpers/suspense/suspend';
import { QueryResult } from '@apollo/client';
import { isServer } from "../../helpers/ssr/isServer";

export default function useSuspendableQuery<TQuery, TQueryVariables>(
  queryResult: QueryResult<TQuery, TQueryVariables>,
) {
  if (queryResult.loading && !isServer) {
    suspend(new Promise(resolve => !queryResult.loading && resolve())).read();
  }

  return queryResult;
}
