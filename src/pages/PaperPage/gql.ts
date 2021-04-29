import {gql} from "@apollo/client";

export const GET_PAPER = gql`
    query paperPaginateQuery(
    $first: Int
    $offset: Int
    $orderBy: [_PaperOrdering]
    $filter: _PaperFilter
  ) {
    Paper(
      first: $first
      offset: $offset
      orderBy: $orderBy
      filter: $filter
    ) {
      _hash_id,
      title
    }
  }
`