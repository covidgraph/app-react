export type Patent = {
  lens_id: string
  name: string
  patentTitle: PatentTitle[]
  patentAbstract: PatentAbstract[]
}

export type PatentTitle = {
  _hash_id: string
  lang: string
  text: string
  fromPatentTitle: Fragment[]
}

export type PatentAbstract = {
  _hash_id: string
  lang: string
  text: string
  fromPatentAbstract: Fragment[]
}

export type Fragment = {
  mentions: GeneSymbol[]
}

export type GeneSymbol = {
  sid: string
}

export type Gene = {
  sid: string
  // Symbol: string
  // maps: GeneSymbol[]
}

export type Paper = {
  _hash_id: string
  cord19fulltext_hash: string
  cord_uid: string
  journal: string
  publish_time: string
  source: string
  title: string
  url: string
}
