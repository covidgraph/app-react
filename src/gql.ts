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

export const getPapers = gql`
  query paperPaginateQuery(
    $first: Int
    $offset: Int
    $orderBy: [_PaperOrdering]
    $filter: _PaperFilter
  ) {
    Paper(first: $first, offset: $offset, orderBy: $orderBy, filter: $filter) {
      _hash_id
      title
    }
  }
`;

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