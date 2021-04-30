import {gql} from "@apollo/client";

export const getPatent = gql`
  query patentPaginateQuery(
    $first: Int
    $offset: Int
    $orderBy: [_PatentOrdering]
    $filter: _PatentFilter
  ) {
    Patent(first: $first, offset: $offset, orderBy: $orderBy, filter: $filter) {
      filing_key
      filing_date
      jurisdiction
      lens_id
      lens_url
      pub_date
      pub_key
      type
      titles {
        _id
        title {
          lang
          text
          fragments {
            text
            kind
            sequence
            geneSymbols {
              score
              symbol {
                sid
              }
            }
          }
        }
      }
    }
  }
`;