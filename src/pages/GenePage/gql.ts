import { gql } from "@apollo/client";

export const getGenes = gql`
  query genePaginateQuery(
    $first: Int
    $offset: Int
    $orderBy: [_GeneOrdering]
    $filter: _GeneFilter
  ) {
    Gene(first: $first, offset: $offset, orderBy: $orderBy, filter: $filter) {
      sid
      transcripts {
        transcript {
          sid
          proteins {
            protein {
              sid
              name
            }
          }
        }
      }
      mapsGeneSymbols {
        source
        symbol {
          sid
        }
      }
    }
  }
`;
