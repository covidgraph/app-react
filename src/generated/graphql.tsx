import { gql } from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: "Query";
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Fragment type nodes. */
  Fragment?: Maybe<Array<Maybe<Fragment>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for GOTerm type nodes. */
  GOTerm?: Maybe<Array<Maybe<GoTerm>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Keyword type nodes. */
  Keyword?: Maybe<Array<Maybe<Keyword>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for NamedEntity type nodes. */
  NamedEntity?: Maybe<Array<Maybe<NamedEntity>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Word type nodes. */
  Word?: Maybe<Array<Maybe<Word>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Disease type nodes. */
  Disease?: Maybe<Array<Maybe<Disease>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Anatomy type nodes. */
  Anatomy?: Maybe<Array<Maybe<Anatomy>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Gene type nodes. */
  Gene?: Maybe<Array<Maybe<Gene>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Transcript type nodes. */
  Transcript?: Maybe<Array<Maybe<Transcript>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for GtexDetailedTissue type nodes. */
  GtexDetailedTissue?: Maybe<Array<Maybe<GtexDetailedTissue>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for GtexTissue type nodes. */
  GtexTissue?: Maybe<Array<Maybe<GtexTissue>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for GtexSample type nodes. */
  GtexSample?: Maybe<Array<Maybe<GtexSample>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Pathway type nodes. */
  Pathway?: Maybe<Array<Maybe<Pathway>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for GeneSymbol type nodes. */
  GeneSymbol?: Maybe<Array<Maybe<GeneSymbol>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for OmitSpecialChar type nodes. */
  OmitSpecialChar?: Maybe<Array<Maybe<OmitSpecialChar>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for OmitLength type nodes. */
  OmitLength?: Maybe<Array<Maybe<OmitLength>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for OmitWord type nodes. */
  OmitWord?: Maybe<Array<Maybe<OmitWord>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Protein type nodes. */
  Protein?: Maybe<Array<Maybe<Protein>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Country type nodes. */
  Country?: Maybe<Array<Maybe<Country>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for City type nodes. */
  City?: Maybe<Array<Maybe<City>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Province type nodes. */
  Province?: Maybe<Array<Maybe<Province>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for DailyReport type nodes. */
  DailyReport?: Maybe<Array<Maybe<DailyReport>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Latest type nodes. */
  Latest?: Maybe<Array<Maybe<Latest>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for AgeGroup type nodes. */
  AgeGroup?: Maybe<Array<Maybe<AgeGroup>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for ClinicalTrial type nodes. */
  ClinicalTrial?: Maybe<Array<Maybe<ClinicalTrial>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Link type nodes. */
  Link?: Maybe<Array<Maybe<Link>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for ReferenceType type nodes. */
  ReferenceType?: Maybe<Array<Maybe<ReferenceType>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Facility type nodes. */
  Facility?: Maybe<Array<Maybe<Facility>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Intervention type nodes. */
  Intervention?: Maybe<Array<Maybe<Intervention>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for StudyType type nodes. */
  StudyType?: Maybe<Array<Maybe<StudyType>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Sponsor type nodes. */
  Sponsor?: Maybe<Array<Maybe<Sponsor>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Collaborator type nodes. */
  Collaborator?: Maybe<Array<Maybe<Collaborator>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Response type nodes. */
  Response?: Maybe<Array<Maybe<Response>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Condition type nodes. */
  Condition?: Maybe<Array<Maybe<Condition>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Phase type nodes. */
  Phase?: Maybe<Array<Maybe<Phase>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Purpose type nodes. */
  Purpose?: Maybe<Array<Maybe<Purpose>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for StudyIdentification type nodes. */
  StudyIdentification?: Maybe<Array<Maybe<StudyIdentification>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Title type nodes. */
  Title?: Maybe<Array<Maybe<Title>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Status type nodes. */
  Status?: Maybe<Array<Maybe<Status>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for StopReason type nodes. */
  StopReason?: Maybe<Array<Maybe<StopReason>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Start type nodes. */
  Start?: Maybe<Array<Maybe<Start>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Completed type nodes. */
  Completed?: Maybe<Array<Maybe<Completed>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Investigator type nodes. */
  Investigator?: Maybe<Array<Maybe<Investigator>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Responsible type nodes. */
  Responsible?: Maybe<Array<Maybe<Responsible>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Description type nodes. */
  Description?: Maybe<Array<Maybe<Description>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Design type nodes. */
  Design?: Maybe<Array<Maybe<Design>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for ObservationPeriod type nodes. */
  ObservationPeriod?: Maybe<Array<Maybe<ObservationPeriod>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Outcome type nodes. */
  Outcome?: Maybe<Array<Maybe<Outcome>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for StudyPopulation type nodes. */
  StudyPopulation?: Maybe<Array<Maybe<StudyPopulation>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Gender type nodes. */
  Gender?: Maybe<Array<Maybe<Gender>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for AgeRange type nodes. */
  AgeRange?: Maybe<Array<Maybe<AgeRange>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for InclusionCriteria type nodes. */
  InclusionCriteria?: Maybe<Array<Maybe<InclusionCriteria>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for ExclusionCriteria type nodes. */
  ExclusionCriteria?: Maybe<Array<Maybe<ExclusionCriteria>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Contact type nodes. */
  Contact?: Maybe<Array<Maybe<Contact>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for BioSpecimen type nodes. */
  BioSpecimen?: Maybe<Array<Maybe<BioSpecimen>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Arm type nodes. */
  Arm?: Maybe<Array<Maybe<Arm>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Compound type nodes. */
  Compound?: Maybe<Array<Maybe<Compound>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Target type nodes. */
  Target?: Maybe<Array<Maybe<Target>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for FromAbstract type nodes. */
  FromAbstract?: Maybe<Array<Maybe<FromAbstract>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for FromBodyText type nodes. */
  FromBodyText?: Maybe<Array<Maybe<FromBodyText>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Paper type nodes. */
  Paper?: Maybe<Array<Maybe<Paper>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for AuthorCollection type nodes. */
  AuthorCollection?: Maybe<Array<Maybe<AuthorCollection>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Author type nodes. */
  Author?: Maybe<Array<Maybe<Author>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Affiliation type nodes. */
  Affiliation?: Maybe<Array<Maybe<Affiliation>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Location type nodes. */
  Location?: Maybe<Array<Maybe<Location>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for PaperID type nodes. */
  PaperID?: Maybe<Array<Maybe<PaperId>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Reference type nodes. */
  Reference?: Maybe<Array<Maybe<Reference>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for ReferenceCollection type nodes. */
  ReferenceCollection?: Maybe<Array<Maybe<ReferenceCollection>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for AbstractCollection type nodes. */
  AbstractCollection?: Maybe<Array<Maybe<AbstractCollection>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Abstract type nodes. */
  Abstract?: Maybe<Array<Maybe<Abstract>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Citation type nodes. */
  Citation?: Maybe<Array<Maybe<Citation>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for BodyText type nodes. */
  BodyText?: Maybe<Array<Maybe<BodyText>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for BodyTextCollection type nodes. */
  BodyTextCollection?: Maybe<Array<Maybe<BodyTextCollection>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for FromPatentDescription type nodes. */
  FromPatentDescription?: Maybe<Array<Maybe<FromPatentDescription>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for FromPatentTitle type nodes. */
  FromPatentTitle?: Maybe<Array<Maybe<FromPatentTitle>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for FromPatentAbstract type nodes. */
  FromPatentAbstract?: Maybe<Array<Maybe<FromPatentAbstract>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for FromPatentClaim type nodes. */
  FromPatentClaim?: Maybe<Array<Maybe<FromPatentClaim>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Patent type nodes. */
  Patent?: Maybe<Array<Maybe<Patent>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for LensID type nodes. */
  LensID?: Maybe<Array<Maybe<LensId>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for PatentFamily type nodes. */
  PatentFamily?: Maybe<Array<Maybe<PatentFamily>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for PatentNumber type nodes. */
  PatentNumber?: Maybe<Array<Maybe<PatentNumber>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for PatentLiteratureCitation type nodes. */
  PatentLiteratureCitation?: Maybe<Array<Maybe<PatentLiteratureCitation>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for PatentCitationCollection type nodes. */
  PatentCitationCollection?: Maybe<Array<Maybe<PatentCitationCollection>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for NonPatentLiteratureCitation type nodes. */
  NonPatentLiteratureCitation?: Maybe<
    Array<Maybe<NonPatentLiteratureCitation>>
  >;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for PatentClassificationCollection type nodes. */
  PatentClassificationCollection?: Maybe<
    Array<Maybe<PatentClassificationCollection>>
  >;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for CooperativePatentClassification type nodes. */
  CooperativePatentClassification?: Maybe<
    Array<Maybe<CooperativePatentClassification>>
  >;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for InternationalPatentClassification type nodes. */
  InternationalPatentClassification?: Maybe<
    Array<Maybe<InternationalPatentClassification>>
  >;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for USPatentClassification type nodes. */
  USPatentClassification?: Maybe<Array<Maybe<UsPatentClassification>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for PatentAbstract type nodes. */
  PatentAbstract?: Maybe<Array<Maybe<PatentAbstract>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Entity type nodes. */
  Entity?: Maybe<Array<Maybe<Entity>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for PatentTitle type nodes. */
  PatentTitle?: Maybe<Array<Maybe<PatentTitle>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for PatentClaim type nodes. */
  PatentClaim?: Maybe<Array<Maybe<PatentClaim>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for PatentDescription type nodes. */
  PatentDescription?: Maybe<Array<Maybe<PatentDescription>>>;
};

export type QueryFragmentArgs = {
  text?: Maybe<Scalars["String"]>;
  sequence?: Maybe<Scalars["Int"]>;
  kind?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_FragmentOrdering>>>;
  filter?: Maybe<_FragmentFilter>;
};

export type QueryGoTermArgs = {
  sid?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  namespace?: Maybe<Scalars["String"]>;
  obsolete?: Maybe<Scalars["Boolean"]>;
  subsets?: Maybe<Array<Maybe<Scalars["String"]>>>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_GoTermOrdering>>>;
  filter?: Maybe<_GoTermFilter>;
};

export type QueryKeywordArgs = {
  word?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_KeywordOrdering>>>;
  filter?: Maybe<_KeywordFilter>;
};

export type QueryNamedEntityArgs = {
  id?: Maybe<Scalars["ID"]>;
  external_ids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  type?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_NamedEntityOrdering>>>;
  filter?: Maybe<_NamedEntityFilter>;
};

export type QueryWordArgs = {
  value?: Maybe<Scalars["String"]>;
  match10?: Maybe<Scalars["Boolean"]>;
  match11?: Maybe<Scalars["Boolean"]>;
  match12?: Maybe<Scalars["Boolean"]>;
  match3?: Maybe<Scalars["Boolean"]>;
  match4?: Maybe<Scalars["Boolean"]>;
  match5?: Maybe<Scalars["Boolean"]>;
  match6?: Maybe<Scalars["Boolean"]>;
  match7?: Maybe<Scalars["Boolean"]>;
  match8?: Maybe<Scalars["Boolean"]>;
  match9?: Maybe<Scalars["Boolean"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_WordOrdering>>>;
  filter?: Maybe<_WordFilter>;
};

export type QueryDiseaseArgs = {
  _id?: Maybe<Scalars["ID"]>;
  definition?: Maybe<Scalars["String"]>;
  doid?: Maybe<Scalars["String"]>;
  license?: Maybe<Scalars["String"]>;
  link?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_DiseaseOrdering>>>;
  filter?: Maybe<_DiseaseFilter>;
};

export type QueryAnatomyArgs = {
  _id?: Maybe<Scalars["ID"]>;
  bto_id?: Maybe<Scalars["ID"]>;
  mesh_id?: Maybe<Scalars["ID"]>;
  mesh_name?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  uberon_id?: Maybe<Scalars["ID"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_AnatomyOrdering>>>;
  filter?: Maybe<_AnatomyFilter>;
};

export type QueryGeneArgs = {
  sid?: Maybe<Scalars["ID"]>;
  Feature_type?: Maybe<Scalars["String"]>;
  Full_name_from_nomenclature_authority?: Maybe<Scalars["String"]>;
  GeneID?: Maybe<Scalars["String"]>;
  LocusTag?: Maybe<Scalars["String"]>;
  Modification_date?: Maybe<Scalars["String"]>;
  Nomenclature_status?: Maybe<Scalars["String"]>;
  Other_designations?: Maybe<Scalars["String"]>;
  Symbol?: Maybe<Scalars["String"]>;
  Symbol_from_nomenclature_authority?: Maybe<Scalars["String"]>;
  Synonyms?: Maybe<Scalars["String"]>;
  chromosome?: Maybe<Scalars["String"]>;
  dbXrefs?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  map_location?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  tax_id?: Maybe<Scalars["String"]>;
  taxid?: Maybe<Scalars["String"]>;
  type_of_gene?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_GeneOrdering>>>;
  filter?: Maybe<_GeneFilter>;
};

export type QueryTranscriptArgs = {
  sid?: Maybe<Scalars["ID"]>;
  length?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  taxid?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_TranscriptOrdering>>>;
  filter?: Maybe<_TranscriptFilter>;
};

export type QueryGtexDetailedTissueArgs = {
  name?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_GtexDetailedTissueOrdering>>>;
  filter?: Maybe<_GtexDetailedTissueFilter>;
};

export type QueryGtexTissueArgs = {
  name?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_GtexTissueOrdering>>>;
  filter?: Maybe<_GtexTissueFilter>;
};

export type QueryGtexSampleArgs = {
  sid?: Maybe<Scalars["ID"]>;
  SM350NRM?: Maybe<Scalars["Float"]>;
  SM550NRM?: Maybe<Scalars["Float"]>;
  SMAFRZE?: Maybe<Scalars["String"]>;
  SMALTALG?: Maybe<Scalars["Float"]>;
  SMATSSCR?: Maybe<Scalars["Float"]>;
  SMBSMMRT?: Maybe<Scalars["Float"]>;
  SMCENTER?: Maybe<Scalars["String"]>;
  SMCGLGTH?: Maybe<Scalars["Float"]>;
  SMCHMPRS?: Maybe<Scalars["Float"]>;
  SMDPMPRT?: Maybe<Scalars["Float"]>;
  SME1ANTI?: Maybe<Scalars["Float"]>;
  SME1MMRT?: Maybe<Scalars["Float"]>;
  SME1MPRT?: Maybe<Scalars["Float"]>;
  SME1PCTS?: Maybe<Scalars["Float"]>;
  SME1SNSE?: Maybe<Scalars["Float"]>;
  SME2ANTI?: Maybe<Scalars["Float"]>;
  SME2MMRT?: Maybe<Scalars["Float"]>;
  SME2MPRT?: Maybe<Scalars["Float"]>;
  SME2PCTS?: Maybe<Scalars["Float"]>;
  SME2SNSE?: Maybe<Scalars["Float"]>;
  SMESTLBS?: Maybe<Scalars["Float"]>;
  SMEXNCRT?: Maybe<Scalars["Float"]>;
  SMEXPEFF?: Maybe<Scalars["Float"]>;
  SMGAPPCT?: Maybe<Scalars["Float"]>;
  SMGEBTCH?: Maybe<Scalars["String"]>;
  SMGEBTCHD?: Maybe<Scalars["String"]>;
  SMGEBTCHT?: Maybe<Scalars["String"]>;
  SMGNSDTC?: Maybe<Scalars["Float"]>;
  SMGTC?: Maybe<Scalars["String"]>;
  SMMAPRT?: Maybe<Scalars["Float"]>;
  SMMFLGTH?: Maybe<Scalars["Float"]>;
  SMMNCPB?: Maybe<Scalars["Float"]>;
  SMMNCV?: Maybe<Scalars["Float"]>;
  SMMPPD?: Maybe<Scalars["Float"]>;
  SMMPPDPR?: Maybe<Scalars["Float"]>;
  SMMPPDUN?: Maybe<Scalars["Float"]>;
  SMMPUNRT?: Maybe<Scalars["Float"]>;
  SMNABTCH?: Maybe<Scalars["String"]>;
  SMNABTCHD?: Maybe<Scalars["String"]>;
  SMNABTCHT?: Maybe<Scalars["String"]>;
  SMNTERRT?: Maybe<Scalars["Float"]>;
  SMNTRART?: Maybe<Scalars["Float"]>;
  SMNTRNRT?: Maybe<Scalars["Float"]>;
  SMNUM5CD?: Maybe<Scalars["Float"]>;
  SMNUMGPS?: Maybe<Scalars["Float"]>;
  SMPTHNTS?: Maybe<Scalars["String"]>;
  SMRDLGTH?: Maybe<Scalars["Float"]>;
  SMRDTTL?: Maybe<Scalars["Float"]>;
  SMRIN?: Maybe<Scalars["Float"]>;
  SMRRNANM?: Maybe<Scalars["Float"]>;
  SMRRNART?: Maybe<Scalars["Float"]>;
  SMSFLGTH?: Maybe<Scalars["Float"]>;
  SMSPLTRD?: Maybe<Scalars["Float"]>;
  SMTRSCPT?: Maybe<Scalars["Float"]>;
  SMTS?: Maybe<Scalars["String"]>;
  SMTSD?: Maybe<Scalars["String"]>;
  SMTSISCH?: Maybe<Scalars["Float"]>;
  SMTSPAX?: Maybe<Scalars["Float"]>;
  SMUBRID?: Maybe<Scalars["String"]>;
  SMUNMPRT?: Maybe<Scalars["Float"]>;
  SMUNPDRD?: Maybe<Scalars["Float"]>;
  SMVQCFL?: Maybe<Scalars["Float"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_GtexSampleOrdering>>>;
  filter?: Maybe<_GtexSampleFilter>;
};

export type QueryPathwayArgs = {
  sid?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  org?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  taxid?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PathwayOrdering>>>;
  filter?: Maybe<_PathwayFilter>;
};

export type QueryGeneSymbolArgs = {
  sid?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  taxid?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_GeneSymbolOrdering>>>;
  filter?: Maybe<_GeneSymbolFilter>;
};

export type QueryOmitSpecialCharArgs = {
  sid?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  taxid?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_OmitSpecialCharOrdering>>>;
  filter?: Maybe<_OmitSpecialCharFilter>;
};

export type QueryOmitLengthArgs = {
  sid?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  taxid?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_OmitLengthOrdering>>>;
  filter?: Maybe<_OmitLengthFilter>;
};

export type QueryOmitWordArgs = {
  sid?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  taxid?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_OmitWordOrdering>>>;
  filter?: Maybe<_OmitWordFilter>;
};

export type QueryProteinArgs = {
  sid?: Maybe<Scalars["String"]>;
  category?: Maybe<Scalars["String"]>;
  desc?: Maybe<Scalars["String"]>;
  length?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  taxid?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ProteinOrdering>>>;
  filter?: Maybe<_ProteinFilter>;
};

export type QueryCountryArgs = {
  name?: Maybe<Scalars["String"]>;
  un_id?: Maybe<Scalars["ID"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_CountryOrdering>>>;
  filter?: Maybe<_CountryFilter>;
};

export type QueryCityArgs = {
  name?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_CityOrdering>>>;
  filter?: Maybe<_CityFilter>;
};

export type QueryProvinceArgs = {
  name?: Maybe<Scalars["String"]>;
  latitude?: Maybe<Scalars["String"]>;
  longitude?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ProvinceOrdering>>>;
  filter?: Maybe<_ProvinceFilter>;
};

export type QueryDailyReportArgs = {
  uuid?: Maybe<Scalars["ID"]>;
  date?: Maybe<_Neo4jLocalDateTimeInput>;
  confirmed?: Maybe<Scalars["Int"]>;
  death?: Maybe<Scalars["String"]>;
  recovered?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_DailyReportOrdering>>>;
  filter?: Maybe<_DailyReportFilter>;
};

export type QueryLatestArgs = {
  uuid?: Maybe<Scalars["ID"]>;
  date?: Maybe<_Neo4jLocalDateTimeInput>;
  confirmed?: Maybe<Scalars["Int"]>;
  death?: Maybe<Scalars["String"]>;
  recovered?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_LatestOrdering>>>;
  filter?: Maybe<_LatestFilter>;
};

export type QueryAgeGroupArgs = {
  group?: Maybe<Scalars["String"]>;
  span?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_AgeGroupOrdering>>>;
  filter?: Maybe<_AgeGroupFilter>;
};

export type QueryClinicalTrialArgs = {
  NCTId?: Maybe<Scalars["ID"]>;
  data_source?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export type QueryLinkArgs = {
  url?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_LinkOrdering>>>;
  filter?: Maybe<_LinkFilter>;
};

export type QueryReferenceTypeArgs = {
  name?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ReferenceTypeOrdering>>>;
  filter?: Maybe<_ReferenceTypeFilter>;
};

export type QueryFacilityArgs = {
  name?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_FacilityOrdering>>>;
  filter?: Maybe<_FacilityFilter>;
};

export type QueryInterventionArgs = {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_InterventionOrdering>>>;
  filter?: Maybe<_InterventionFilter>;
};

export type QueryStudyTypeArgs = {
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_StudyTypeOrdering>>>;
  filter?: Maybe<_StudyTypeFilter>;
};

export type QuerySponsorArgs = {
  name?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_SponsorOrdering>>>;
  filter?: Maybe<_SponsorFilter>;
};

export type QueryCollaboratorArgs = {
  name?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_CollaboratorOrdering>>>;
  filter?: Maybe<_CollaboratorFilter>;
};

export type QueryResponseArgs = {
  YN?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ResponseOrdering>>>;
  filter?: Maybe<_ResponseFilter>;
};

export type QueryConditionArgs = {
  disease?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ConditionOrdering>>>;
  filter?: Maybe<_ConditionFilter>;
};

export type QueryPhaseArgs = {
  phase?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PhaseOrdering>>>;
  filter?: Maybe<_PhaseFilter>;
};

export type QueryPurposeArgs = {
  name?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PurposeOrdering>>>;
  filter?: Maybe<_PurposeFilter>;
};

export type QueryStudyIdentificationArgs = {
  studyId?: Maybe<Scalars["String"]>;
  acronym?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_StudyIdentificationOrdering>>>;
  filter?: Maybe<_StudyIdentificationFilter>;
};

export type QueryTitleArgs = {
  briefTitle?: Maybe<Scalars["String"]>;
  officialTitle?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_TitleOrdering>>>;
  filter?: Maybe<_TitleFilter>;
};

export type QueryStatusArgs = {
  status?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_StatusOrdering>>>;
  filter?: Maybe<_StatusFilter>;
};

export type QueryStopReasonArgs = {
  reason?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_StopReasonOrdering>>>;
  filter?: Maybe<_StopReasonFilter>;
};

export type QueryStartArgs = {
  date?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_StartOrdering>>>;
  filter?: Maybe<_StartFilter>;
};

export type QueryCompletedArgs = {
  completionDate?: Maybe<Scalars["String"]>;
  primaryCompletionDate?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_CompletedOrdering>>>;
  filter?: Maybe<_CompletedFilter>;
};

export type QueryInvestigatorArgs = {
  name?: Maybe<Scalars["String"]>;
  affiliation?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_InvestigatorOrdering>>>;
  filter?: Maybe<_InvestigatorFilter>;
};

export type QueryResponsibleArgs = {
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ResponsibleOrdering>>>;
  filter?: Maybe<_ResponsibleFilter>;
};

export type QueryDescriptionArgs = {
  detailed?: Maybe<Scalars["String"]>;
  summary?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_DescriptionOrdering>>>;
  filter?: Maybe<_DescriptionFilter>;
};

export type QueryDesignArgs = {
  model?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_DesignOrdering>>>;
  filter?: Maybe<_DesignFilter>;
};

export type QueryObservationPeriodArgs = {
  time?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ObservationPeriodOrdering>>>;
  filter?: Maybe<_ObservationPeriodFilter>;
};

export type QueryOutcomeArgs = {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  time?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_OutcomeOrdering>>>;
  filter?: Maybe<_OutcomeFilter>;
};

export type QueryStudyPopulationArgs = {
  name?: Maybe<Scalars["String"]>;
  sampling?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_StudyPopulationOrdering>>>;
  filter?: Maybe<_StudyPopulationFilter>;
};

export type QueryGenderArgs = {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_GenderOrdering>>>;
  filter?: Maybe<_GenderFilter>;
};

export type QueryAgeRangeArgs = {
  maxAge?: Maybe<Scalars["String"]>;
  minAge?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_AgeRangeOrdering>>>;
  filter?: Maybe<_AgeRangeFilter>;
};

export type QueryInclusionCriteriaArgs = {
  criteria?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_InclusionCriteriaOrdering>>>;
  filter?: Maybe<_InclusionCriteriaFilter>;
};

export type QueryExclusionCriteriaArgs = {
  criteria?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ExclusionCriteriaOrdering>>>;
  filter?: Maybe<_ExclusionCriteriaFilter>;
};

export type QueryContactArgs = {
  email?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ContactOrdering>>>;
  filter?: Maybe<_ContactFilter>;
};

export type QueryBioSpecimenArgs = {
  retension?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_BioSpecimenOrdering>>>;
  filter?: Maybe<_BioSpecimenFilter>;
};

export type QueryArmArgs = {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ArmOrdering>>>;
  filter?: Maybe<_ArmFilter>;
};

export type QueryCompoundArgs = {
  _id?: Maybe<Scalars["ID"]>;
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  company?: Maybe<Scalars["String"]>;
  ttd_id?: Maybe<Scalars["ID"]>;
  chebi_id?: Maybe<Scalars["ID"]>;
  chemspider_id?: Maybe<Scalars["Float"]>;
  drugbank_id?: Maybe<Scalars["ID"]>;
  kegg_drug_id?: Maybe<Scalars["ID"]>;
  kegg_id?: Maybe<Scalars["ID"]>;
  pubchem_id?: Maybe<Scalars["ID"]>;
  unii?: Maybe<Scalars["ID"]>;
  inchi?: Maybe<Scalars["ID"]>;
  inchikey?: Maybe<Scalars["ID"]>;
  cas_number?: Maybe<Scalars["String"]>;
  accession_numbers?: Maybe<Scalars["String"]>;
  therapeutic_class?: Maybe<Scalars["String"]>;
  drug_class?: Maybe<Scalars["String"]>;
  compound_class?: Maybe<Scalars["String"]>;
  groups?: Maybe<Scalars["String"]>;
  categories?: Maybe<Scalars["String"]>;
  atc_codes?: Maybe<Scalars["String"]>;
  source_url?: Maybe<Scalars["String"]>;
  drug_formula?: Maybe<Scalars["String"]>;
  drug_smiles?: Maybe<Scalars["String"]>;
  drug_type?: Maybe<Scalars["String"]>;
  highest_stat?: Maybe<Scalars["String"]>;
  indication?: Maybe<Scalars["String"]>;
  mechanism?: Maybe<Scalars["String"]>;
  synonyms?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_CompoundOrdering>>>;
  filter?: Maybe<_CompoundFilter>;
};

export type QueryTargetArgs = {
  _id?: Maybe<Scalars["ID"]>;
  ttd_id?: Maybe<Scalars["ID"]>;
  uniprot_id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  geneName?: Maybe<Scalars["String"]>;
  function?: Maybe<Scalars["String"]>;
  sequence?: Maybe<Scalars["String"]>;
  license?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  ec_number?: Maybe<Scalars["String"]>;
  bio_class?: Maybe<Scalars["String"]>;
  synonyms?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_TargetOrdering>>>;
  filter?: Maybe<_TargetFilter>;
};

export type QueryFromAbstractArgs = {
  text?: Maybe<Scalars["String"]>;
  sequence?: Maybe<Scalars["Int"]>;
  kind?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_FromAbstractOrdering>>>;
  filter?: Maybe<_FromAbstractFilter>;
};

export type QueryFromBodyTextArgs = {
  text?: Maybe<Scalars["String"]>;
  sequence?: Maybe<Scalars["Int"]>;
  kind?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_FromBodyTextOrdering>>>;
  filter?: Maybe<_FromBodyTextFilter>;
};

export type QueryPaperArgs = {
  _hash_id?: Maybe<Scalars["ID"]>;
  cord_uid?: Maybe<Scalars["ID"]>;
  journal?: Maybe<Scalars["String"]>;
  publish_time?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PaperOrdering>>>;
  filter?: Maybe<_PaperFilter>;
};

export type QueryAuthorCollectionArgs = {
  id?: Maybe<Scalars["ID"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_AuthorCollectionOrdering>>>;
  filter?: Maybe<_AuthorCollectionFilter>;
};

export type QueryAuthorArgs = {
  _hash_id?: Maybe<Scalars["ID"]>;
  email?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["String"]>;
  fist?: Maybe<Scalars["String"]>;
  last?: Maybe<Scalars["String"]>;
  middle?: Maybe<Scalars["String"]>;
  suffix?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_AuthorOrdering>>>;
  filter?: Maybe<_AuthorFilter>;
};

export type QueryAffiliationArgs = {
  _hash_id?: Maybe<Scalars["ID"]>;
  institution?: Maybe<Scalars["String"]>;
  laboratory?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_AffiliationOrdering>>>;
  filter?: Maybe<_AffiliationFilter>;
};

export type QueryLocationArgs = {
  _hash_id?: Maybe<Scalars["ID"]>;
  addrLine?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  postBox?: Maybe<Scalars["String"]>;
  postCode?: Maybe<Scalars["String"]>;
  region?: Maybe<Scalars["String"]>;
  settlement?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_LocationOrdering>>>;
  filter?: Maybe<_LocationFilter>;
};

export type QueryPaperIdArgs = {
  id?: Maybe<Scalars["ID"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PaperIdOrdering>>>;
  filter?: Maybe<_PaperIdFilter>;
};

export type QueryReferenceArgs = {
  _hash_id?: Maybe<Scalars["ID"]>;
  issn?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  pages?: Maybe<Scalars["String"]>;
  ref_id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  venue?: Maybe<Scalars["String"]>;
  volume?: Maybe<Scalars["String"]>;
  year?: Maybe<Scalars["Int"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ReferenceOrdering>>>;
  filter?: Maybe<_ReferenceFilter>;
};

export type QueryReferenceCollectionArgs = {
  id?: Maybe<Scalars["ID"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ReferenceCollectionOrdering>>>;
  filter?: Maybe<_ReferenceCollectionFilter>;
};

export type QueryAbstractCollectionArgs = {
  id?: Maybe<Scalars["ID"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_AbstractCollectionOrdering>>>;
  filter?: Maybe<_AbstractCollectionFilter>;
};

export type QueryAbstractArgs = {
  _hash_id?: Maybe<Scalars["ID"]>;
  section?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_AbstractOrdering>>>;
  filter?: Maybe<_AbstractFilter>;
};

export type QueryCitationArgs = {
  name?: Maybe<Scalars["String"]>;
  _hash_id?: Maybe<Scalars["ID"]>;
  end?: Maybe<Scalars["Int"]>;
  mention?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  text?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_CitationOrdering>>>;
  filter?: Maybe<_CitationFilter>;
};

export type QueryBodyTextArgs = {
  _hash_id?: Maybe<Scalars["ID"]>;
  section?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_BodyTextOrdering>>>;
  filter?: Maybe<_BodyTextFilter>;
};

export type QueryBodyTextCollectionArgs = {
  id?: Maybe<Scalars["ID"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_BodyTextCollectionOrdering>>>;
  filter?: Maybe<_BodyTextCollectionFilter>;
};

export type QueryFromPatentDescriptionArgs = {
  text?: Maybe<Scalars["String"]>;
  kind?: Maybe<Scalars["String"]>;
  sequence?: Maybe<Scalars["Int"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_FromPatentDescriptionOrdering>>>;
  filter?: Maybe<_FromPatentDescriptionFilter>;
};

export type QueryFromPatentTitleArgs = {
  text?: Maybe<Scalars["String"]>;
  kind?: Maybe<Scalars["String"]>;
  sequence?: Maybe<Scalars["Int"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_FromPatentTitleOrdering>>>;
  filter?: Maybe<_FromPatentTitleFilter>;
};

export type QueryFromPatentAbstractArgs = {
  text?: Maybe<Scalars["String"]>;
  sequence?: Maybe<Scalars["Int"]>;
  kind?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_FromPatentAbstractOrdering>>>;
  filter?: Maybe<_FromPatentAbstractFilter>;
};

export type QueryFromPatentClaimArgs = {
  text?: Maybe<Scalars["String"]>;
  sequence?: Maybe<Scalars["Int"]>;
  kind?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_FromPatentClaimOrdering>>>;
  filter?: Maybe<_FromPatentClaimFilter>;
};

export type QueryPatentArgs = {
  filing_key?: Maybe<Scalars["ID"]>;
  filing_date?: Maybe<Scalars["String"]>;
  jurisdiction?: Maybe<Scalars["String"]>;
  lens_id?: Maybe<Scalars["ID"]>;
  lens_url?: Maybe<Scalars["String"]>;
  pub_date?: Maybe<Scalars["String"]>;
  pub_key?: Maybe<Scalars["ID"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentOrdering>>>;
  filter?: Maybe<_PatentFilter>;
};

export type QueryLensIdArgs = {
  id?: Maybe<Scalars["ID"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_LensIdOrdering>>>;
  filter?: Maybe<_LensIdFilter>;
};

export type QueryPatentFamilyArgs = {
  family_id?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentFamilyOrdering>>>;
  filter?: Maybe<_PatentFamilyFilter>;
};

export type QueryPatentNumberArgs = {
  pub_key?: Maybe<Scalars["ID"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentNumberOrdering>>>;
  filter?: Maybe<_PatentNumberFilter>;
};

export type QueryPatentLiteratureCitationArgs = {
  _hash_id?: Maybe<Scalars["ID"]>;
  lens_id?: Maybe<Scalars["ID"]>;
  pub_key?: Maybe<Scalars["ID"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentLiteratureCitationOrdering>>>;
  filter?: Maybe<_PatentLiteratureCitationFilter>;
};

export type QueryPatentCitationCollectionArgs = {
  id?: Maybe<Scalars["ID"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentCitationCollectionOrdering>>>;
  filter?: Maybe<_PatentCitationCollectionFilter>;
};

export type QueryNonPatentLiteratureCitationArgs = {
  _hash_id?: Maybe<Scalars["ID"]>;
  cit_text?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_NonPatentLiteratureCitationOrdering>>>;
  filter?: Maybe<_NonPatentLiteratureCitationFilter>;
};

export type QueryPatentClassificationCollectionArgs = {
  id?: Maybe<Scalars["ID"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentClassificationCollectionOrdering>>>;
  filter?: Maybe<_PatentClassificationCollectionFilter>;
};

export type QueryCooperativePatentClassificationArgs = {
  classification_cpc?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_CooperativePatentClassificationOrdering>>>;
  filter?: Maybe<_CooperativePatentClassificationFilter>;
};

export type QueryInternationalPatentClassificationArgs = {
  classification_ipc?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_InternationalPatentClassificationOrdering>>>;
  filter?: Maybe<_InternationalPatentClassificationFilter>;
};

export type QueryUsPatentClassificationArgs = {
  classification_us?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_UsPatentClassificationOrdering>>>;
  filter?: Maybe<_UsPatentClassificationFilter>;
};

export type QueryPatentAbstractArgs = {
  _hash_id?: Maybe<Scalars["ID"]>;
  lang?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentAbstractOrdering>>>;
  filter?: Maybe<_PatentAbstractFilter>;
};

export type QueryEntityArgs = {
  name?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_EntityOrdering>>>;
  filter?: Maybe<_EntityFilter>;
};

export type QueryPatentTitleArgs = {
  _hash_id?: Maybe<Scalars["ID"]>;
  lang?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentTitleOrdering>>>;
  filter?: Maybe<_PatentTitleFilter>;
};

export type QueryPatentClaimArgs = {
  _hash_id?: Maybe<Scalars["ID"]>;
  lang?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentClaimOrdering>>>;
  filter?: Maybe<_PatentClaimFilter>;
};

export type QueryPatentDescriptionArgs = {
  _hash_id?: Maybe<Scalars["ID"]>;
  lang?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  _id?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentDescriptionOrdering>>>;
  filter?: Maybe<_PatentDescriptionFilter>;
};

export enum _FragmentOrdering {
  TextAsc = "text_asc",
  TextDesc = "text_desc",
  SequenceAsc = "sequence_asc",
  SequenceDesc = "sequence_desc",
  KindAsc = "kind_asc",
  KindDesc = "kind_desc",
}

export type _FragmentFilter = {
  AND?: Maybe<Array<_FragmentFilter>>;
  OR?: Maybe<Array<_FragmentFilter>>;
  text?: Maybe<Scalars["String"]>;
  text_not?: Maybe<Scalars["String"]>;
  text_in?: Maybe<Array<Scalars["String"]>>;
  text_not_in?: Maybe<Array<Scalars["String"]>>;
  text_contains?: Maybe<Scalars["String"]>;
  text_not_contains?: Maybe<Scalars["String"]>;
  text_starts_with?: Maybe<Scalars["String"]>;
  text_not_starts_with?: Maybe<Scalars["String"]>;
  text_ends_with?: Maybe<Scalars["String"]>;
  text_not_ends_with?: Maybe<Scalars["String"]>;
  sequence?: Maybe<Scalars["Int"]>;
  sequence_not?: Maybe<Scalars["Int"]>;
  sequence_in?: Maybe<Array<Scalars["Int"]>>;
  sequence_not_in?: Maybe<Array<Scalars["Int"]>>;
  sequence_lt?: Maybe<Scalars["Int"]>;
  sequence_lte?: Maybe<Scalars["Int"]>;
  sequence_gt?: Maybe<Scalars["Int"]>;
  sequence_gte?: Maybe<Scalars["Int"]>;
  kind?: Maybe<Scalars["String"]>;
  kind_not?: Maybe<Scalars["String"]>;
  kind_in?: Maybe<Array<Scalars["String"]>>;
  kind_not_in?: Maybe<Array<Scalars["String"]>>;
  kind_contains?: Maybe<Scalars["String"]>;
  kind_not_contains?: Maybe<Scalars["String"]>;
  kind_starts_with?: Maybe<Scalars["String"]>;
  kind_not_starts_with?: Maybe<Scalars["String"]>;
  kind_ends_with?: Maybe<Scalars["String"]>;
  kind_not_ends_with?: Maybe<Scalars["String"]>;
};

export type Fragment = {
  text: Scalars["String"];
  sequence: Scalars["Int"];
  kind: Scalars["String"];
};

export enum _GoTermOrdering {
  SidAsc = "sid_asc",
  SidDesc = "sid_desc",
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  NamespaceAsc = "namespace_asc",
  NamespaceDesc = "namespace_desc",
  ObsoleteAsc = "obsolete_asc",
  ObsoleteDesc = "obsolete_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _GoTermFilter = {
  AND?: Maybe<Array<_GoTermFilter>>;
  OR?: Maybe<Array<_GoTermFilter>>;
  sid?: Maybe<Scalars["String"]>;
  sid_not?: Maybe<Scalars["String"]>;
  sid_in?: Maybe<Array<Scalars["String"]>>;
  sid_not_in?: Maybe<Array<Scalars["String"]>>;
  sid_contains?: Maybe<Scalars["String"]>;
  sid_not_contains?: Maybe<Scalars["String"]>;
  sid_starts_with?: Maybe<Scalars["String"]>;
  sid_not_starts_with?: Maybe<Scalars["String"]>;
  sid_ends_with?: Maybe<Scalars["String"]>;
  sid_not_ends_with?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  namespace?: Maybe<Scalars["String"]>;
  namespace_not?: Maybe<Scalars["String"]>;
  namespace_in?: Maybe<Array<Scalars["String"]>>;
  namespace_not_in?: Maybe<Array<Scalars["String"]>>;
  namespace_contains?: Maybe<Scalars["String"]>;
  namespace_not_contains?: Maybe<Scalars["String"]>;
  namespace_starts_with?: Maybe<Scalars["String"]>;
  namespace_not_starts_with?: Maybe<Scalars["String"]>;
  namespace_ends_with?: Maybe<Scalars["String"]>;
  namespace_not_ends_with?: Maybe<Scalars["String"]>;
  obsolete?: Maybe<Scalars["Boolean"]>;
  obsolete_not?: Maybe<Scalars["Boolean"]>;
  subsets?: Maybe<Array<Scalars["String"]>>;
  subsets_not?: Maybe<Array<Scalars["String"]>>;
  subsets_contains?: Maybe<Array<Scalars["String"]>>;
  subsets_not_contains?: Maybe<Array<Scalars["String"]>>;
  subsets_starts_with?: Maybe<Array<Scalars["String"]>>;
  subsets_not_starts_with?: Maybe<Array<Scalars["String"]>>;
  subsets_ends_with?: Maybe<Array<Scalars["String"]>>;
  subsets_not_ends_with?: Maybe<Array<Scalars["String"]>>;
  associations?: Maybe<_GoTermAssociationFilter>;
  associations_not?: Maybe<_GoTermAssociationFilter>;
  associations_in?: Maybe<Array<_GoTermAssociationFilter>>;
  associations_not_in?: Maybe<Array<_GoTermAssociationFilter>>;
  associations_some?: Maybe<_GoTermAssociationFilter>;
  associations_none?: Maybe<_GoTermAssociationFilter>;
  associations_single?: Maybe<_GoTermAssociationFilter>;
  associations_every?: Maybe<_GoTermAssociationFilter>;
  is?: Maybe<_IsADirectionsFilter>;
  is_not?: Maybe<_IsADirectionsFilter>;
  is_in?: Maybe<Array<_IsADirectionsFilter>>;
  is_not_in?: Maybe<Array<_IsADirectionsFilter>>;
  is_some?: Maybe<_IsADirectionsFilter>;
  is_none?: Maybe<_IsADirectionsFilter>;
  is_single?: Maybe<_IsADirectionsFilter>;
  is_every?: Maybe<_IsADirectionsFilter>;
};

export type _GoTermAssociationFilter = {
  AND?: Maybe<Array<_GoTermAssociationFilter>>;
  OR?: Maybe<Array<_GoTermAssociationFilter>>;
  evidence?: Maybe<Scalars["String"]>;
  evidence_not?: Maybe<Scalars["String"]>;
  evidence_in?: Maybe<Array<Scalars["String"]>>;
  evidence_not_in?: Maybe<Array<Scalars["String"]>>;
  evidence_contains?: Maybe<Scalars["String"]>;
  evidence_not_contains?: Maybe<Scalars["String"]>;
  evidence_starts_with?: Maybe<Scalars["String"]>;
  evidence_not_starts_with?: Maybe<Scalars["String"]>;
  evidence_ends_with?: Maybe<Scalars["String"]>;
  evidence_not_ends_with?: Maybe<Scalars["String"]>;
  qualifier?: Maybe<Scalars["String"]>;
  qualifier_not?: Maybe<Scalars["String"]>;
  qualifier_in?: Maybe<Array<Scalars["String"]>>;
  qualifier_not_in?: Maybe<Array<Scalars["String"]>>;
  qualifier_contains?: Maybe<Scalars["String"]>;
  qualifier_not_contains?: Maybe<Scalars["String"]>;
  qualifier_starts_with?: Maybe<Scalars["String"]>;
  qualifier_not_starts_with?: Maybe<Scalars["String"]>;
  qualifier_ends_with?: Maybe<Scalars["String"]>;
  qualifier_not_ends_with?: Maybe<Scalars["String"]>;
  protein?: Maybe<_ProteinFilter>;
};

export type _ProteinFilter = {
  AND?: Maybe<Array<_ProteinFilter>>;
  OR?: Maybe<Array<_ProteinFilter>>;
  sid?: Maybe<Scalars["String"]>;
  sid_not?: Maybe<Scalars["String"]>;
  sid_in?: Maybe<Array<Scalars["String"]>>;
  sid_not_in?: Maybe<Array<Scalars["String"]>>;
  sid_contains?: Maybe<Scalars["String"]>;
  sid_not_contains?: Maybe<Scalars["String"]>;
  sid_starts_with?: Maybe<Scalars["String"]>;
  sid_not_starts_with?: Maybe<Scalars["String"]>;
  sid_ends_with?: Maybe<Scalars["String"]>;
  sid_not_ends_with?: Maybe<Scalars["String"]>;
  category?: Maybe<Scalars["String"]>;
  category_not?: Maybe<Scalars["String"]>;
  category_in?: Maybe<Array<Scalars["String"]>>;
  category_not_in?: Maybe<Array<Scalars["String"]>>;
  category_contains?: Maybe<Scalars["String"]>;
  category_not_contains?: Maybe<Scalars["String"]>;
  category_starts_with?: Maybe<Scalars["String"]>;
  category_not_starts_with?: Maybe<Scalars["String"]>;
  category_ends_with?: Maybe<Scalars["String"]>;
  category_not_ends_with?: Maybe<Scalars["String"]>;
  desc?: Maybe<Scalars["String"]>;
  desc_not?: Maybe<Scalars["String"]>;
  desc_in?: Maybe<Array<Scalars["String"]>>;
  desc_not_in?: Maybe<Array<Scalars["String"]>>;
  desc_contains?: Maybe<Scalars["String"]>;
  desc_not_contains?: Maybe<Scalars["String"]>;
  desc_starts_with?: Maybe<Scalars["String"]>;
  desc_not_starts_with?: Maybe<Scalars["String"]>;
  desc_ends_with?: Maybe<Scalars["String"]>;
  desc_not_ends_with?: Maybe<Scalars["String"]>;
  length?: Maybe<Scalars["String"]>;
  length_not?: Maybe<Scalars["String"]>;
  length_in?: Maybe<Array<Scalars["String"]>>;
  length_not_in?: Maybe<Array<Scalars["String"]>>;
  length_contains?: Maybe<Scalars["String"]>;
  length_not_contains?: Maybe<Scalars["String"]>;
  length_starts_with?: Maybe<Scalars["String"]>;
  length_not_starts_with?: Maybe<Scalars["String"]>;
  length_ends_with?: Maybe<Scalars["String"]>;
  length_not_ends_with?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  status_not?: Maybe<Scalars["String"]>;
  status_in?: Maybe<Array<Scalars["String"]>>;
  status_not_in?: Maybe<Array<Scalars["String"]>>;
  status_contains?: Maybe<Scalars["String"]>;
  status_not_contains?: Maybe<Scalars["String"]>;
  status_starts_with?: Maybe<Scalars["String"]>;
  status_not_starts_with?: Maybe<Scalars["String"]>;
  status_ends_with?: Maybe<Scalars["String"]>;
  status_not_ends_with?: Maybe<Scalars["String"]>;
  taxid?: Maybe<Scalars["String"]>;
  taxid_not?: Maybe<Scalars["String"]>;
  taxid_in?: Maybe<Array<Scalars["String"]>>;
  taxid_not_in?: Maybe<Array<Scalars["String"]>>;
  taxid_contains?: Maybe<Scalars["String"]>;
  taxid_not_contains?: Maybe<Scalars["String"]>;
  taxid_starts_with?: Maybe<Scalars["String"]>;
  taxid_not_starts_with?: Maybe<Scalars["String"]>;
  taxid_ends_with?: Maybe<Scalars["String"]>;
  taxid_not_ends_with?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  version_not?: Maybe<Scalars["String"]>;
  version_in?: Maybe<Array<Scalars["String"]>>;
  version_not_in?: Maybe<Array<Scalars["String"]>>;
  version_contains?: Maybe<Scalars["String"]>;
  version_not_contains?: Maybe<Scalars["String"]>;
  version_starts_with?: Maybe<Scalars["String"]>;
  version_not_starts_with?: Maybe<Scalars["String"]>;
  version_ends_with?: Maybe<Scalars["String"]>;
  version_not_ends_with?: Maybe<Scalars["String"]>;
  associations?: Maybe<_ProteinAssociationFilter>;
  associations_not?: Maybe<_ProteinAssociationFilter>;
  associations_in?: Maybe<Array<_ProteinAssociationFilter>>;
  associations_not_in?: Maybe<Array<_ProteinAssociationFilter>>;
  associations_some?: Maybe<_ProteinAssociationFilter>;
  associations_none?: Maybe<_ProteinAssociationFilter>;
  associations_single?: Maybe<_ProteinAssociationFilter>;
  associations_every?: Maybe<_ProteinAssociationFilter>;
  transcripts?: Maybe<_ProteinProteinCodesFilter>;
  transcripts_not?: Maybe<_ProteinProteinCodesFilter>;
  transcripts_in?: Maybe<Array<_ProteinProteinCodesFilter>>;
  transcripts_not_in?: Maybe<Array<_ProteinProteinCodesFilter>>;
  transcripts_some?: Maybe<_ProteinProteinCodesFilter>;
  transcripts_none?: Maybe<_ProteinProteinCodesFilter>;
  transcripts_single?: Maybe<_ProteinProteinCodesFilter>;
  transcripts_every?: Maybe<_ProteinProteinCodesFilter>;
  mapsProteins?: Maybe<_MapsProteinDirectionsFilter>;
  mapsProteins_not?: Maybe<_MapsProteinDirectionsFilter>;
  mapsProteins_in?: Maybe<Array<_MapsProteinDirectionsFilter>>;
  mapsProteins_not_in?: Maybe<Array<_MapsProteinDirectionsFilter>>;
  mapsProteins_some?: Maybe<_MapsProteinDirectionsFilter>;
  mapsProteins_none?: Maybe<_MapsProteinDirectionsFilter>;
  mapsProteins_single?: Maybe<_MapsProteinDirectionsFilter>;
  mapsProteins_every?: Maybe<_MapsProteinDirectionsFilter>;
};

export type _ProteinAssociationFilter = {
  AND?: Maybe<Array<_ProteinAssociationFilter>>;
  OR?: Maybe<Array<_ProteinAssociationFilter>>;
  evidence?: Maybe<Scalars["String"]>;
  evidence_not?: Maybe<Scalars["String"]>;
  evidence_in?: Maybe<Array<Scalars["String"]>>;
  evidence_not_in?: Maybe<Array<Scalars["String"]>>;
  evidence_contains?: Maybe<Scalars["String"]>;
  evidence_not_contains?: Maybe<Scalars["String"]>;
  evidence_starts_with?: Maybe<Scalars["String"]>;
  evidence_not_starts_with?: Maybe<Scalars["String"]>;
  evidence_ends_with?: Maybe<Scalars["String"]>;
  evidence_not_ends_with?: Maybe<Scalars["String"]>;
  qualifier?: Maybe<Scalars["String"]>;
  qualifier_not?: Maybe<Scalars["String"]>;
  qualifier_in?: Maybe<Array<Scalars["String"]>>;
  qualifier_not_in?: Maybe<Array<Scalars["String"]>>;
  qualifier_contains?: Maybe<Scalars["String"]>;
  qualifier_not_contains?: Maybe<Scalars["String"]>;
  qualifier_starts_with?: Maybe<Scalars["String"]>;
  qualifier_not_starts_with?: Maybe<Scalars["String"]>;
  qualifier_ends_with?: Maybe<Scalars["String"]>;
  qualifier_not_ends_with?: Maybe<Scalars["String"]>;
  term?: Maybe<_GoTermFilter>;
};

export type _ProteinProteinCodesFilter = {
  AND?: Maybe<Array<_ProteinProteinCodesFilter>>;
  OR?: Maybe<Array<_ProteinProteinCodesFilter>>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  taxid?: Maybe<Scalars["String"]>;
  taxid_not?: Maybe<Scalars["String"]>;
  taxid_in?: Maybe<Array<Scalars["String"]>>;
  taxid_not_in?: Maybe<Array<Scalars["String"]>>;
  taxid_contains?: Maybe<Scalars["String"]>;
  taxid_not_contains?: Maybe<Scalars["String"]>;
  taxid_starts_with?: Maybe<Scalars["String"]>;
  taxid_not_starts_with?: Maybe<Scalars["String"]>;
  taxid_ends_with?: Maybe<Scalars["String"]>;
  taxid_not_ends_with?: Maybe<Scalars["String"]>;
  transcript?: Maybe<_TranscriptFilter>;
};

export type _TranscriptFilter = {
  AND?: Maybe<Array<_TranscriptFilter>>;
  OR?: Maybe<Array<_TranscriptFilter>>;
  sid?: Maybe<Scalars["ID"]>;
  sid_not?: Maybe<Scalars["ID"]>;
  sid_in?: Maybe<Array<Scalars["ID"]>>;
  sid_not_in?: Maybe<Array<Scalars["ID"]>>;
  sid_contains?: Maybe<Scalars["ID"]>;
  sid_not_contains?: Maybe<Scalars["ID"]>;
  sid_starts_with?: Maybe<Scalars["ID"]>;
  sid_not_starts_with?: Maybe<Scalars["ID"]>;
  sid_ends_with?: Maybe<Scalars["ID"]>;
  sid_not_ends_with?: Maybe<Scalars["ID"]>;
  length?: Maybe<Scalars["String"]>;
  length_not?: Maybe<Scalars["String"]>;
  length_in?: Maybe<Array<Scalars["String"]>>;
  length_not_in?: Maybe<Array<Scalars["String"]>>;
  length_contains?: Maybe<Scalars["String"]>;
  length_not_contains?: Maybe<Scalars["String"]>;
  length_starts_with?: Maybe<Scalars["String"]>;
  length_not_starts_with?: Maybe<Scalars["String"]>;
  length_ends_with?: Maybe<Scalars["String"]>;
  length_not_ends_with?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  status_not?: Maybe<Scalars["String"]>;
  status_in?: Maybe<Array<Scalars["String"]>>;
  status_not_in?: Maybe<Array<Scalars["String"]>>;
  status_contains?: Maybe<Scalars["String"]>;
  status_not_contains?: Maybe<Scalars["String"]>;
  status_starts_with?: Maybe<Scalars["String"]>;
  status_not_starts_with?: Maybe<Scalars["String"]>;
  status_ends_with?: Maybe<Scalars["String"]>;
  status_not_ends_with?: Maybe<Scalars["String"]>;
  taxid?: Maybe<Scalars["String"]>;
  taxid_not?: Maybe<Scalars["String"]>;
  taxid_in?: Maybe<Array<Scalars["String"]>>;
  taxid_not_in?: Maybe<Array<Scalars["String"]>>;
  taxid_contains?: Maybe<Scalars["String"]>;
  taxid_not_contains?: Maybe<Scalars["String"]>;
  taxid_starts_with?: Maybe<Scalars["String"]>;
  taxid_not_starts_with?: Maybe<Scalars["String"]>;
  taxid_ends_with?: Maybe<Scalars["String"]>;
  taxid_not_ends_with?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  version_not?: Maybe<Scalars["String"]>;
  version_in?: Maybe<Array<Scalars["String"]>>;
  version_not_in?: Maybe<Array<Scalars["String"]>>;
  version_contains?: Maybe<Scalars["String"]>;
  version_not_contains?: Maybe<Scalars["String"]>;
  version_starts_with?: Maybe<Scalars["String"]>;
  version_not_starts_with?: Maybe<Scalars["String"]>;
  version_ends_with?: Maybe<Scalars["String"]>;
  version_not_ends_with?: Maybe<Scalars["String"]>;
  genes?: Maybe<_TranscriptGeneCodesFilter>;
  genes_not?: Maybe<_TranscriptGeneCodesFilter>;
  genes_in?: Maybe<Array<_TranscriptGeneCodesFilter>>;
  genes_not_in?: Maybe<Array<_TranscriptGeneCodesFilter>>;
  genes_some?: Maybe<_TranscriptGeneCodesFilter>;
  genes_none?: Maybe<_TranscriptGeneCodesFilter>;
  genes_single?: Maybe<_TranscriptGeneCodesFilter>;
  genes_every?: Maybe<_TranscriptGeneCodesFilter>;
  proteins?: Maybe<_TranscriptProteinCodesFilter>;
  proteins_not?: Maybe<_TranscriptProteinCodesFilter>;
  proteins_in?: Maybe<Array<_TranscriptProteinCodesFilter>>;
  proteins_not_in?: Maybe<Array<_TranscriptProteinCodesFilter>>;
  proteins_some?: Maybe<_TranscriptProteinCodesFilter>;
  proteins_none?: Maybe<_TranscriptProteinCodesFilter>;
  proteins_single?: Maybe<_TranscriptProteinCodesFilter>;
  proteins_every?: Maybe<_TranscriptProteinCodesFilter>;
  mapsTranscripts?: Maybe<_MapsTranscriptDirectionsFilter>;
  mapsTranscripts_not?: Maybe<_MapsTranscriptDirectionsFilter>;
  mapsTranscripts_in?: Maybe<Array<_MapsTranscriptDirectionsFilter>>;
  mapsTranscripts_not_in?: Maybe<Array<_MapsTranscriptDirectionsFilter>>;
  mapsTranscripts_some?: Maybe<_MapsTranscriptDirectionsFilter>;
  mapsTranscripts_none?: Maybe<_MapsTranscriptDirectionsFilter>;
  mapsTranscripts_single?: Maybe<_MapsTranscriptDirectionsFilter>;
  mapsTranscripts_every?: Maybe<_MapsTranscriptDirectionsFilter>;
};

export type _TranscriptGeneCodesFilter = {
  AND?: Maybe<Array<_TranscriptGeneCodesFilter>>;
  OR?: Maybe<Array<_TranscriptGeneCodesFilter>>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  taxid?: Maybe<Scalars["String"]>;
  taxid_not?: Maybe<Scalars["String"]>;
  taxid_in?: Maybe<Array<Scalars["String"]>>;
  taxid_not_in?: Maybe<Array<Scalars["String"]>>;
  taxid_contains?: Maybe<Scalars["String"]>;
  taxid_not_contains?: Maybe<Scalars["String"]>;
  taxid_starts_with?: Maybe<Scalars["String"]>;
  taxid_not_starts_with?: Maybe<Scalars["String"]>;
  taxid_ends_with?: Maybe<Scalars["String"]>;
  taxid_not_ends_with?: Maybe<Scalars["String"]>;
  gene?: Maybe<_GeneFilter>;
};

export type _GeneFilter = {
  AND?: Maybe<Array<_GeneFilter>>;
  OR?: Maybe<Array<_GeneFilter>>;
  sid?: Maybe<Scalars["ID"]>;
  sid_not?: Maybe<Scalars["ID"]>;
  sid_in?: Maybe<Array<Scalars["ID"]>>;
  sid_not_in?: Maybe<Array<Scalars["ID"]>>;
  sid_contains?: Maybe<Scalars["ID"]>;
  sid_not_contains?: Maybe<Scalars["ID"]>;
  sid_starts_with?: Maybe<Scalars["ID"]>;
  sid_not_starts_with?: Maybe<Scalars["ID"]>;
  sid_ends_with?: Maybe<Scalars["ID"]>;
  sid_not_ends_with?: Maybe<Scalars["ID"]>;
  Feature_type?: Maybe<Scalars["String"]>;
  Feature_type_not?: Maybe<Scalars["String"]>;
  Feature_type_in?: Maybe<Array<Scalars["String"]>>;
  Feature_type_not_in?: Maybe<Array<Scalars["String"]>>;
  Feature_type_contains?: Maybe<Scalars["String"]>;
  Feature_type_not_contains?: Maybe<Scalars["String"]>;
  Feature_type_starts_with?: Maybe<Scalars["String"]>;
  Feature_type_not_starts_with?: Maybe<Scalars["String"]>;
  Feature_type_ends_with?: Maybe<Scalars["String"]>;
  Feature_type_not_ends_with?: Maybe<Scalars["String"]>;
  Full_name_from_nomenclature_authority?: Maybe<Scalars["String"]>;
  Full_name_from_nomenclature_authority_not?: Maybe<Scalars["String"]>;
  Full_name_from_nomenclature_authority_in?: Maybe<Array<Scalars["String"]>>;
  Full_name_from_nomenclature_authority_not_in?: Maybe<
    Array<Scalars["String"]>
  >;
  Full_name_from_nomenclature_authority_contains?: Maybe<Scalars["String"]>;
  Full_name_from_nomenclature_authority_not_contains?: Maybe<Scalars["String"]>;
  Full_name_from_nomenclature_authority_starts_with?: Maybe<Scalars["String"]>;
  Full_name_from_nomenclature_authority_not_starts_with?: Maybe<
    Scalars["String"]
  >;
  Full_name_from_nomenclature_authority_ends_with?: Maybe<Scalars["String"]>;
  Full_name_from_nomenclature_authority_not_ends_with?: Maybe<
    Scalars["String"]
  >;
  GeneID?: Maybe<Scalars["String"]>;
  GeneID_not?: Maybe<Scalars["String"]>;
  GeneID_in?: Maybe<Array<Scalars["String"]>>;
  GeneID_not_in?: Maybe<Array<Scalars["String"]>>;
  GeneID_contains?: Maybe<Scalars["String"]>;
  GeneID_not_contains?: Maybe<Scalars["String"]>;
  GeneID_starts_with?: Maybe<Scalars["String"]>;
  GeneID_not_starts_with?: Maybe<Scalars["String"]>;
  GeneID_ends_with?: Maybe<Scalars["String"]>;
  GeneID_not_ends_with?: Maybe<Scalars["String"]>;
  LocusTag?: Maybe<Scalars["String"]>;
  LocusTag_not?: Maybe<Scalars["String"]>;
  LocusTag_in?: Maybe<Array<Scalars["String"]>>;
  LocusTag_not_in?: Maybe<Array<Scalars["String"]>>;
  LocusTag_contains?: Maybe<Scalars["String"]>;
  LocusTag_not_contains?: Maybe<Scalars["String"]>;
  LocusTag_starts_with?: Maybe<Scalars["String"]>;
  LocusTag_not_starts_with?: Maybe<Scalars["String"]>;
  LocusTag_ends_with?: Maybe<Scalars["String"]>;
  LocusTag_not_ends_with?: Maybe<Scalars["String"]>;
  Modification_date?: Maybe<Scalars["String"]>;
  Modification_date_not?: Maybe<Scalars["String"]>;
  Modification_date_in?: Maybe<Array<Scalars["String"]>>;
  Modification_date_not_in?: Maybe<Array<Scalars["String"]>>;
  Modification_date_contains?: Maybe<Scalars["String"]>;
  Modification_date_not_contains?: Maybe<Scalars["String"]>;
  Modification_date_starts_with?: Maybe<Scalars["String"]>;
  Modification_date_not_starts_with?: Maybe<Scalars["String"]>;
  Modification_date_ends_with?: Maybe<Scalars["String"]>;
  Modification_date_not_ends_with?: Maybe<Scalars["String"]>;
  Nomenclature_status?: Maybe<Scalars["String"]>;
  Nomenclature_status_not?: Maybe<Scalars["String"]>;
  Nomenclature_status_in?: Maybe<Array<Scalars["String"]>>;
  Nomenclature_status_not_in?: Maybe<Array<Scalars["String"]>>;
  Nomenclature_status_contains?: Maybe<Scalars["String"]>;
  Nomenclature_status_not_contains?: Maybe<Scalars["String"]>;
  Nomenclature_status_starts_with?: Maybe<Scalars["String"]>;
  Nomenclature_status_not_starts_with?: Maybe<Scalars["String"]>;
  Nomenclature_status_ends_with?: Maybe<Scalars["String"]>;
  Nomenclature_status_not_ends_with?: Maybe<Scalars["String"]>;
  Other_designations?: Maybe<Scalars["String"]>;
  Other_designations_not?: Maybe<Scalars["String"]>;
  Other_designations_in?: Maybe<Array<Scalars["String"]>>;
  Other_designations_not_in?: Maybe<Array<Scalars["String"]>>;
  Other_designations_contains?: Maybe<Scalars["String"]>;
  Other_designations_not_contains?: Maybe<Scalars["String"]>;
  Other_designations_starts_with?: Maybe<Scalars["String"]>;
  Other_designations_not_starts_with?: Maybe<Scalars["String"]>;
  Other_designations_ends_with?: Maybe<Scalars["String"]>;
  Other_designations_not_ends_with?: Maybe<Scalars["String"]>;
  Symbol?: Maybe<Scalars["String"]>;
  Symbol_not?: Maybe<Scalars["String"]>;
  Symbol_in?: Maybe<Array<Scalars["String"]>>;
  Symbol_not_in?: Maybe<Array<Scalars["String"]>>;
  Symbol_contains?: Maybe<Scalars["String"]>;
  Symbol_not_contains?: Maybe<Scalars["String"]>;
  Symbol_starts_with?: Maybe<Scalars["String"]>;
  Symbol_not_starts_with?: Maybe<Scalars["String"]>;
  Symbol_ends_with?: Maybe<Scalars["String"]>;
  Symbol_not_ends_with?: Maybe<Scalars["String"]>;
  Symbol_from_nomenclature_authority?: Maybe<Scalars["String"]>;
  Symbol_from_nomenclature_authority_not?: Maybe<Scalars["String"]>;
  Symbol_from_nomenclature_authority_in?: Maybe<Array<Scalars["String"]>>;
  Symbol_from_nomenclature_authority_not_in?: Maybe<Array<Scalars["String"]>>;
  Symbol_from_nomenclature_authority_contains?: Maybe<Scalars["String"]>;
  Symbol_from_nomenclature_authority_not_contains?: Maybe<Scalars["String"]>;
  Symbol_from_nomenclature_authority_starts_with?: Maybe<Scalars["String"]>;
  Symbol_from_nomenclature_authority_not_starts_with?: Maybe<Scalars["String"]>;
  Symbol_from_nomenclature_authority_ends_with?: Maybe<Scalars["String"]>;
  Symbol_from_nomenclature_authority_not_ends_with?: Maybe<Scalars["String"]>;
  Synonyms?: Maybe<Scalars["String"]>;
  Synonyms_not?: Maybe<Scalars["String"]>;
  Synonyms_in?: Maybe<Array<Scalars["String"]>>;
  Synonyms_not_in?: Maybe<Array<Scalars["String"]>>;
  Synonyms_contains?: Maybe<Scalars["String"]>;
  Synonyms_not_contains?: Maybe<Scalars["String"]>;
  Synonyms_starts_with?: Maybe<Scalars["String"]>;
  Synonyms_not_starts_with?: Maybe<Scalars["String"]>;
  Synonyms_ends_with?: Maybe<Scalars["String"]>;
  Synonyms_not_ends_with?: Maybe<Scalars["String"]>;
  chromosome?: Maybe<Scalars["String"]>;
  chromosome_not?: Maybe<Scalars["String"]>;
  chromosome_in?: Maybe<Array<Scalars["String"]>>;
  chromosome_not_in?: Maybe<Array<Scalars["String"]>>;
  chromosome_contains?: Maybe<Scalars["String"]>;
  chromosome_not_contains?: Maybe<Scalars["String"]>;
  chromosome_starts_with?: Maybe<Scalars["String"]>;
  chromosome_not_starts_with?: Maybe<Scalars["String"]>;
  chromosome_ends_with?: Maybe<Scalars["String"]>;
  chromosome_not_ends_with?: Maybe<Scalars["String"]>;
  dbXrefs?: Maybe<Scalars["String"]>;
  dbXrefs_not?: Maybe<Scalars["String"]>;
  dbXrefs_in?: Maybe<Array<Scalars["String"]>>;
  dbXrefs_not_in?: Maybe<Array<Scalars["String"]>>;
  dbXrefs_contains?: Maybe<Scalars["String"]>;
  dbXrefs_not_contains?: Maybe<Scalars["String"]>;
  dbXrefs_starts_with?: Maybe<Scalars["String"]>;
  dbXrefs_not_starts_with?: Maybe<Scalars["String"]>;
  dbXrefs_ends_with?: Maybe<Scalars["String"]>;
  dbXrefs_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  map_location?: Maybe<Scalars["String"]>;
  map_location_not?: Maybe<Scalars["String"]>;
  map_location_in?: Maybe<Array<Scalars["String"]>>;
  map_location_not_in?: Maybe<Array<Scalars["String"]>>;
  map_location_contains?: Maybe<Scalars["String"]>;
  map_location_not_contains?: Maybe<Scalars["String"]>;
  map_location_starts_with?: Maybe<Scalars["String"]>;
  map_location_not_starts_with?: Maybe<Scalars["String"]>;
  map_location_ends_with?: Maybe<Scalars["String"]>;
  map_location_not_ends_with?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  tax_id?: Maybe<Scalars["String"]>;
  tax_id_not?: Maybe<Scalars["String"]>;
  tax_id_in?: Maybe<Array<Scalars["String"]>>;
  tax_id_not_in?: Maybe<Array<Scalars["String"]>>;
  tax_id_contains?: Maybe<Scalars["String"]>;
  tax_id_not_contains?: Maybe<Scalars["String"]>;
  tax_id_starts_with?: Maybe<Scalars["String"]>;
  tax_id_not_starts_with?: Maybe<Scalars["String"]>;
  tax_id_ends_with?: Maybe<Scalars["String"]>;
  tax_id_not_ends_with?: Maybe<Scalars["String"]>;
  taxid?: Maybe<Scalars["String"]>;
  taxid_not?: Maybe<Scalars["String"]>;
  taxid_in?: Maybe<Array<Scalars["String"]>>;
  taxid_not_in?: Maybe<Array<Scalars["String"]>>;
  taxid_contains?: Maybe<Scalars["String"]>;
  taxid_not_contains?: Maybe<Scalars["String"]>;
  taxid_starts_with?: Maybe<Scalars["String"]>;
  taxid_not_starts_with?: Maybe<Scalars["String"]>;
  taxid_ends_with?: Maybe<Scalars["String"]>;
  taxid_not_ends_with?: Maybe<Scalars["String"]>;
  type_of_gene?: Maybe<Scalars["String"]>;
  type_of_gene_not?: Maybe<Scalars["String"]>;
  type_of_gene_in?: Maybe<Array<Scalars["String"]>>;
  type_of_gene_not_in?: Maybe<Array<Scalars["String"]>>;
  type_of_gene_contains?: Maybe<Scalars["String"]>;
  type_of_gene_not_contains?: Maybe<Scalars["String"]>;
  type_of_gene_starts_with?: Maybe<Scalars["String"]>;
  type_of_gene_not_starts_with?: Maybe<Scalars["String"]>;
  type_of_gene_ends_with?: Maybe<Scalars["String"]>;
  type_of_gene_not_ends_with?: Maybe<Scalars["String"]>;
  transcripts?: Maybe<_GeneGeneCodesFilter>;
  transcripts_not?: Maybe<_GeneGeneCodesFilter>;
  transcripts_in?: Maybe<Array<_GeneGeneCodesFilter>>;
  transcripts_not_in?: Maybe<Array<_GeneGeneCodesFilter>>;
  transcripts_some?: Maybe<_GeneGeneCodesFilter>;
  transcripts_none?: Maybe<_GeneGeneCodesFilter>;
  transcripts_single?: Maybe<_GeneGeneCodesFilter>;
  transcripts_every?: Maybe<_GeneGeneCodesFilter>;
  expressedTissues?: Maybe<_GeneExpressedFilter>;
  expressedTissues_not?: Maybe<_GeneExpressedFilter>;
  expressedTissues_in?: Maybe<Array<_GeneExpressedFilter>>;
  expressedTissues_not_in?: Maybe<Array<_GeneExpressedFilter>>;
  expressedTissues_some?: Maybe<_GeneExpressedFilter>;
  expressedTissues_none?: Maybe<_GeneExpressedFilter>;
  expressedTissues_single?: Maybe<_GeneExpressedFilter>;
  expressedTissues_every?: Maybe<_GeneExpressedFilter>;
  pathways?: Maybe<_GeneMemberFilter>;
  pathways_not?: Maybe<_GeneMemberFilter>;
  pathways_in?: Maybe<Array<_GeneMemberFilter>>;
  pathways_not_in?: Maybe<Array<_GeneMemberFilter>>;
  pathways_some?: Maybe<_GeneMemberFilter>;
  pathways_none?: Maybe<_GeneMemberFilter>;
  pathways_single?: Maybe<_GeneMemberFilter>;
  pathways_every?: Maybe<_GeneMemberFilter>;
  mapsGenes?: Maybe<_MapsGeneDirectionsFilter>;
  mapsGenes_not?: Maybe<_MapsGeneDirectionsFilter>;
  mapsGenes_in?: Maybe<Array<_MapsGeneDirectionsFilter>>;
  mapsGenes_not_in?: Maybe<Array<_MapsGeneDirectionsFilter>>;
  mapsGenes_some?: Maybe<_MapsGeneDirectionsFilter>;
  mapsGenes_none?: Maybe<_MapsGeneDirectionsFilter>;
  mapsGenes_single?: Maybe<_MapsGeneDirectionsFilter>;
  mapsGenes_every?: Maybe<_MapsGeneDirectionsFilter>;
  mapsGeneSymbols?: Maybe<_GeneMapsGeneSymbolFilter>;
  mapsGeneSymbols_not?: Maybe<_GeneMapsGeneSymbolFilter>;
  mapsGeneSymbols_in?: Maybe<Array<_GeneMapsGeneSymbolFilter>>;
  mapsGeneSymbols_not_in?: Maybe<Array<_GeneMapsGeneSymbolFilter>>;
  mapsGeneSymbols_some?: Maybe<_GeneMapsGeneSymbolFilter>;
  mapsGeneSymbols_none?: Maybe<_GeneMapsGeneSymbolFilter>;
  mapsGeneSymbols_single?: Maybe<_GeneMapsGeneSymbolFilter>;
  mapsGeneSymbols_every?: Maybe<_GeneMapsGeneSymbolFilter>;
  mapsGeneSymbolsWithOmitSpecialChar?: Maybe<_GeneMapsGeneSymbolsWithOmitedSpecialCharFilter>;
  mapsGeneSymbolsWithOmitSpecialChar_not?: Maybe<_GeneMapsGeneSymbolsWithOmitedSpecialCharFilter>;
  mapsGeneSymbolsWithOmitSpecialChar_in?: Maybe<
    Array<_GeneMapsGeneSymbolsWithOmitedSpecialCharFilter>
  >;
  mapsGeneSymbolsWithOmitSpecialChar_not_in?: Maybe<
    Array<_GeneMapsGeneSymbolsWithOmitedSpecialCharFilter>
  >;
  mapsGeneSymbolsWithOmitSpecialChar_some?: Maybe<_GeneMapsGeneSymbolsWithOmitedSpecialCharFilter>;
  mapsGeneSymbolsWithOmitSpecialChar_none?: Maybe<_GeneMapsGeneSymbolsWithOmitedSpecialCharFilter>;
  mapsGeneSymbolsWithOmitSpecialChar_single?: Maybe<_GeneMapsGeneSymbolsWithOmitedSpecialCharFilter>;
  mapsGeneSymbolsWithOmitSpecialChar_every?: Maybe<_GeneMapsGeneSymbolsWithOmitedSpecialCharFilter>;
  mapsGeneSymbolsWithOmitLength?: Maybe<_GeneMapsGeneSymbolsWithOmitLengthFilter>;
  mapsGeneSymbolsWithOmitLength_not?: Maybe<_GeneMapsGeneSymbolsWithOmitLengthFilter>;
  mapsGeneSymbolsWithOmitLength_in?: Maybe<
    Array<_GeneMapsGeneSymbolsWithOmitLengthFilter>
  >;
  mapsGeneSymbolsWithOmitLength_not_in?: Maybe<
    Array<_GeneMapsGeneSymbolsWithOmitLengthFilter>
  >;
  mapsGeneSymbolsWithOmitLength_some?: Maybe<_GeneMapsGeneSymbolsWithOmitLengthFilter>;
  mapsGeneSymbolsWithOmitLength_none?: Maybe<_GeneMapsGeneSymbolsWithOmitLengthFilter>;
  mapsGeneSymbolsWithOmitLength_single?: Maybe<_GeneMapsGeneSymbolsWithOmitLengthFilter>;
  mapsGeneSymbolsWithOmitLength_every?: Maybe<_GeneMapsGeneSymbolsWithOmitLengthFilter>;
  mapsGeneSymbolsWithOmitWord?: Maybe<_GeneMapsGeneSymbolsWithOmitWordFilter>;
  mapsGeneSymbolsWithOmitWord_not?: Maybe<_GeneMapsGeneSymbolsWithOmitWordFilter>;
  mapsGeneSymbolsWithOmitWord_in?: Maybe<
    Array<_GeneMapsGeneSymbolsWithOmitWordFilter>
  >;
  mapsGeneSymbolsWithOmitWord_not_in?: Maybe<
    Array<_GeneMapsGeneSymbolsWithOmitWordFilter>
  >;
  mapsGeneSymbolsWithOmitWord_some?: Maybe<_GeneMapsGeneSymbolsWithOmitWordFilter>;
  mapsGeneSymbolsWithOmitWord_none?: Maybe<_GeneMapsGeneSymbolsWithOmitWordFilter>;
  mapsGeneSymbolsWithOmitWord_single?: Maybe<_GeneMapsGeneSymbolsWithOmitWordFilter>;
  mapsGeneSymbolsWithOmitWord_every?: Maybe<_GeneMapsGeneSymbolsWithOmitWordFilter>;
  diseases?: Maybe<_GeneAssociatesDaGFilter>;
  diseases_not?: Maybe<_GeneAssociatesDaGFilter>;
  diseases_in?: Maybe<Array<_GeneAssociatesDaGFilter>>;
  diseases_not_in?: Maybe<Array<_GeneAssociatesDaGFilter>>;
  diseases_some?: Maybe<_GeneAssociatesDaGFilter>;
  diseases_none?: Maybe<_GeneAssociatesDaGFilter>;
  diseases_single?: Maybe<_GeneAssociatesDaGFilter>;
  diseases_every?: Maybe<_GeneAssociatesDaGFilter>;
};

export type _GeneGeneCodesFilter = {
  AND?: Maybe<Array<_GeneGeneCodesFilter>>;
  OR?: Maybe<Array<_GeneGeneCodesFilter>>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  taxid?: Maybe<Scalars["String"]>;
  taxid_not?: Maybe<Scalars["String"]>;
  taxid_in?: Maybe<Array<Scalars["String"]>>;
  taxid_not_in?: Maybe<Array<Scalars["String"]>>;
  taxid_contains?: Maybe<Scalars["String"]>;
  taxid_not_contains?: Maybe<Scalars["String"]>;
  taxid_starts_with?: Maybe<Scalars["String"]>;
  taxid_not_starts_with?: Maybe<Scalars["String"]>;
  taxid_ends_with?: Maybe<Scalars["String"]>;
  taxid_not_ends_with?: Maybe<Scalars["String"]>;
  transcript?: Maybe<_TranscriptFilter>;
};

export type _GeneExpressedFilter = {
  AND?: Maybe<Array<_GeneExpressedFilter>>;
  OR?: Maybe<Array<_GeneExpressedFilter>>;
  val?: Maybe<Scalars["String"]>;
  val_not?: Maybe<Scalars["String"]>;
  val_in?: Maybe<Array<Scalars["String"]>>;
  val_not_in?: Maybe<Array<Scalars["String"]>>;
  val_contains?: Maybe<Scalars["String"]>;
  val_not_contains?: Maybe<Scalars["String"]>;
  val_starts_with?: Maybe<Scalars["String"]>;
  val_not_starts_with?: Maybe<Scalars["String"]>;
  val_ends_with?: Maybe<Scalars["String"]>;
  val_not_ends_with?: Maybe<Scalars["String"]>;
  valToString?: Maybe<Scalars["String"]>;
  valToString_not?: Maybe<Scalars["String"]>;
  valToString_in?: Maybe<Array<Scalars["String"]>>;
  valToString_not_in?: Maybe<Array<Scalars["String"]>>;
  valToString_contains?: Maybe<Scalars["String"]>;
  valToString_not_contains?: Maybe<Scalars["String"]>;
  valToString_starts_with?: Maybe<Scalars["String"]>;
  valToString_not_starts_with?: Maybe<Scalars["String"]>;
  valToString_ends_with?: Maybe<Scalars["String"]>;
  valToString_not_ends_with?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["Float"]>;
  value_not?: Maybe<Scalars["Float"]>;
  value_in?: Maybe<Array<Scalars["Float"]>>;
  value_not_in?: Maybe<Array<Scalars["Float"]>>;
  value_lt?: Maybe<Scalars["Float"]>;
  value_lte?: Maybe<Scalars["Float"]>;
  value_gt?: Maybe<Scalars["Float"]>;
  value_gte?: Maybe<Scalars["Float"]>;
  tissue?: Maybe<_GtexDetailedTissueFilter>;
};

export type _GtexDetailedTissueFilter = {
  AND?: Maybe<Array<_GtexDetailedTissueFilter>>;
  OR?: Maybe<Array<_GtexDetailedTissueFilter>>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  genes?: Maybe<_GtexDetailedTissueExpressedFilter>;
  genes_not?: Maybe<_GtexDetailedTissueExpressedFilter>;
  genes_in?: Maybe<Array<_GtexDetailedTissueExpressedFilter>>;
  genes_not_in?: Maybe<Array<_GtexDetailedTissueExpressedFilter>>;
  genes_some?: Maybe<_GtexDetailedTissueExpressedFilter>;
  genes_none?: Maybe<_GtexDetailedTissueExpressedFilter>;
  genes_single?: Maybe<_GtexDetailedTissueExpressedFilter>;
  genes_every?: Maybe<_GtexDetailedTissueExpressedFilter>;
  tissues?: Maybe<_GtexTissueFilter>;
  tissues_not?: Maybe<_GtexTissueFilter>;
  tissues_in?: Maybe<Array<_GtexTissueFilter>>;
  tissues_not_in?: Maybe<Array<_GtexTissueFilter>>;
  tissues_some?: Maybe<_GtexTissueFilter>;
  tissues_none?: Maybe<_GtexTissueFilter>;
  tissues_single?: Maybe<_GtexTissueFilter>;
  tissues_every?: Maybe<_GtexTissueFilter>;
};

export type _GtexDetailedTissueExpressedFilter = {
  AND?: Maybe<Array<_GtexDetailedTissueExpressedFilter>>;
  OR?: Maybe<Array<_GtexDetailedTissueExpressedFilter>>;
  val?: Maybe<Scalars["String"]>;
  val_not?: Maybe<Scalars["String"]>;
  val_in?: Maybe<Array<Scalars["String"]>>;
  val_not_in?: Maybe<Array<Scalars["String"]>>;
  val_contains?: Maybe<Scalars["String"]>;
  val_not_contains?: Maybe<Scalars["String"]>;
  val_starts_with?: Maybe<Scalars["String"]>;
  val_not_starts_with?: Maybe<Scalars["String"]>;
  val_ends_with?: Maybe<Scalars["String"]>;
  val_not_ends_with?: Maybe<Scalars["String"]>;
  valToString?: Maybe<Scalars["String"]>;
  valToString_not?: Maybe<Scalars["String"]>;
  valToString_in?: Maybe<Array<Scalars["String"]>>;
  valToString_not_in?: Maybe<Array<Scalars["String"]>>;
  valToString_contains?: Maybe<Scalars["String"]>;
  valToString_not_contains?: Maybe<Scalars["String"]>;
  valToString_starts_with?: Maybe<Scalars["String"]>;
  valToString_not_starts_with?: Maybe<Scalars["String"]>;
  valToString_ends_with?: Maybe<Scalars["String"]>;
  valToString_not_ends_with?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["Float"]>;
  value_not?: Maybe<Scalars["Float"]>;
  value_in?: Maybe<Array<Scalars["Float"]>>;
  value_not_in?: Maybe<Array<Scalars["Float"]>>;
  value_lt?: Maybe<Scalars["Float"]>;
  value_lte?: Maybe<Scalars["Float"]>;
  value_gt?: Maybe<Scalars["Float"]>;
  value_gte?: Maybe<Scalars["Float"]>;
  gene?: Maybe<_GeneFilter>;
};

export type _GtexTissueFilter = {
  AND?: Maybe<Array<_GtexTissueFilter>>;
  OR?: Maybe<Array<_GtexTissueFilter>>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  detail?: Maybe<_GtexDetailedTissueFilter>;
  detail_not?: Maybe<_GtexDetailedTissueFilter>;
  detail_in?: Maybe<Array<_GtexDetailedTissueFilter>>;
  detail_not_in?: Maybe<Array<_GtexDetailedTissueFilter>>;
  detail_some?: Maybe<_GtexDetailedTissueFilter>;
  detail_none?: Maybe<_GtexDetailedTissueFilter>;
  detail_single?: Maybe<_GtexDetailedTissueFilter>;
  detail_every?: Maybe<_GtexDetailedTissueFilter>;
  samples?: Maybe<_GtexSampleFilter>;
  samples_not?: Maybe<_GtexSampleFilter>;
  samples_in?: Maybe<Array<_GtexSampleFilter>>;
  samples_not_in?: Maybe<Array<_GtexSampleFilter>>;
  samples_some?: Maybe<_GtexSampleFilter>;
  samples_none?: Maybe<_GtexSampleFilter>;
  samples_single?: Maybe<_GtexSampleFilter>;
  samples_every?: Maybe<_GtexSampleFilter>;
};

export type _GtexSampleFilter = {
  AND?: Maybe<Array<_GtexSampleFilter>>;
  OR?: Maybe<Array<_GtexSampleFilter>>;
  sid?: Maybe<Scalars["ID"]>;
  sid_not?: Maybe<Scalars["ID"]>;
  sid_in?: Maybe<Array<Scalars["ID"]>>;
  sid_not_in?: Maybe<Array<Scalars["ID"]>>;
  sid_contains?: Maybe<Scalars["ID"]>;
  sid_not_contains?: Maybe<Scalars["ID"]>;
  sid_starts_with?: Maybe<Scalars["ID"]>;
  sid_not_starts_with?: Maybe<Scalars["ID"]>;
  sid_ends_with?: Maybe<Scalars["ID"]>;
  sid_not_ends_with?: Maybe<Scalars["ID"]>;
  SM350NRM?: Maybe<Scalars["Float"]>;
  SM350NRM_not?: Maybe<Scalars["Float"]>;
  SM350NRM_in?: Maybe<Array<Scalars["Float"]>>;
  SM350NRM_not_in?: Maybe<Array<Scalars["Float"]>>;
  SM350NRM_lt?: Maybe<Scalars["Float"]>;
  SM350NRM_lte?: Maybe<Scalars["Float"]>;
  SM350NRM_gt?: Maybe<Scalars["Float"]>;
  SM350NRM_gte?: Maybe<Scalars["Float"]>;
  SM550NRM?: Maybe<Scalars["Float"]>;
  SM550NRM_not?: Maybe<Scalars["Float"]>;
  SM550NRM_in?: Maybe<Array<Scalars["Float"]>>;
  SM550NRM_not_in?: Maybe<Array<Scalars["Float"]>>;
  SM550NRM_lt?: Maybe<Scalars["Float"]>;
  SM550NRM_lte?: Maybe<Scalars["Float"]>;
  SM550NRM_gt?: Maybe<Scalars["Float"]>;
  SM550NRM_gte?: Maybe<Scalars["Float"]>;
  SMAFRZE?: Maybe<Scalars["String"]>;
  SMAFRZE_not?: Maybe<Scalars["String"]>;
  SMAFRZE_in?: Maybe<Array<Scalars["String"]>>;
  SMAFRZE_not_in?: Maybe<Array<Scalars["String"]>>;
  SMAFRZE_contains?: Maybe<Scalars["String"]>;
  SMAFRZE_not_contains?: Maybe<Scalars["String"]>;
  SMAFRZE_starts_with?: Maybe<Scalars["String"]>;
  SMAFRZE_not_starts_with?: Maybe<Scalars["String"]>;
  SMAFRZE_ends_with?: Maybe<Scalars["String"]>;
  SMAFRZE_not_ends_with?: Maybe<Scalars["String"]>;
  SMALTALG?: Maybe<Scalars["Float"]>;
  SMALTALG_not?: Maybe<Scalars["Float"]>;
  SMALTALG_in?: Maybe<Array<Scalars["Float"]>>;
  SMALTALG_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMALTALG_lt?: Maybe<Scalars["Float"]>;
  SMALTALG_lte?: Maybe<Scalars["Float"]>;
  SMALTALG_gt?: Maybe<Scalars["Float"]>;
  SMALTALG_gte?: Maybe<Scalars["Float"]>;
  SMATSSCR?: Maybe<Scalars["Float"]>;
  SMATSSCR_not?: Maybe<Scalars["Float"]>;
  SMATSSCR_in?: Maybe<Array<Scalars["Float"]>>;
  SMATSSCR_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMATSSCR_lt?: Maybe<Scalars["Float"]>;
  SMATSSCR_lte?: Maybe<Scalars["Float"]>;
  SMATSSCR_gt?: Maybe<Scalars["Float"]>;
  SMATSSCR_gte?: Maybe<Scalars["Float"]>;
  SMBSMMRT?: Maybe<Scalars["Float"]>;
  SMBSMMRT_not?: Maybe<Scalars["Float"]>;
  SMBSMMRT_in?: Maybe<Array<Scalars["Float"]>>;
  SMBSMMRT_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMBSMMRT_lt?: Maybe<Scalars["Float"]>;
  SMBSMMRT_lte?: Maybe<Scalars["Float"]>;
  SMBSMMRT_gt?: Maybe<Scalars["Float"]>;
  SMBSMMRT_gte?: Maybe<Scalars["Float"]>;
  SMCENTER?: Maybe<Scalars["String"]>;
  SMCENTER_not?: Maybe<Scalars["String"]>;
  SMCENTER_in?: Maybe<Array<Scalars["String"]>>;
  SMCENTER_not_in?: Maybe<Array<Scalars["String"]>>;
  SMCENTER_contains?: Maybe<Scalars["String"]>;
  SMCENTER_not_contains?: Maybe<Scalars["String"]>;
  SMCENTER_starts_with?: Maybe<Scalars["String"]>;
  SMCENTER_not_starts_with?: Maybe<Scalars["String"]>;
  SMCENTER_ends_with?: Maybe<Scalars["String"]>;
  SMCENTER_not_ends_with?: Maybe<Scalars["String"]>;
  SMCGLGTH?: Maybe<Scalars["Float"]>;
  SMCGLGTH_not?: Maybe<Scalars["Float"]>;
  SMCGLGTH_in?: Maybe<Array<Scalars["Float"]>>;
  SMCGLGTH_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMCGLGTH_lt?: Maybe<Scalars["Float"]>;
  SMCGLGTH_lte?: Maybe<Scalars["Float"]>;
  SMCGLGTH_gt?: Maybe<Scalars["Float"]>;
  SMCGLGTH_gte?: Maybe<Scalars["Float"]>;
  SMCHMPRS?: Maybe<Scalars["Float"]>;
  SMCHMPRS_not?: Maybe<Scalars["Float"]>;
  SMCHMPRS_in?: Maybe<Array<Scalars["Float"]>>;
  SMCHMPRS_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMCHMPRS_lt?: Maybe<Scalars["Float"]>;
  SMCHMPRS_lte?: Maybe<Scalars["Float"]>;
  SMCHMPRS_gt?: Maybe<Scalars["Float"]>;
  SMCHMPRS_gte?: Maybe<Scalars["Float"]>;
  SMDPMPRT?: Maybe<Scalars["Float"]>;
  SMDPMPRT_not?: Maybe<Scalars["Float"]>;
  SMDPMPRT_in?: Maybe<Array<Scalars["Float"]>>;
  SMDPMPRT_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMDPMPRT_lt?: Maybe<Scalars["Float"]>;
  SMDPMPRT_lte?: Maybe<Scalars["Float"]>;
  SMDPMPRT_gt?: Maybe<Scalars["Float"]>;
  SMDPMPRT_gte?: Maybe<Scalars["Float"]>;
  SME1ANTI?: Maybe<Scalars["Float"]>;
  SME1ANTI_not?: Maybe<Scalars["Float"]>;
  SME1ANTI_in?: Maybe<Array<Scalars["Float"]>>;
  SME1ANTI_not_in?: Maybe<Array<Scalars["Float"]>>;
  SME1ANTI_lt?: Maybe<Scalars["Float"]>;
  SME1ANTI_lte?: Maybe<Scalars["Float"]>;
  SME1ANTI_gt?: Maybe<Scalars["Float"]>;
  SME1ANTI_gte?: Maybe<Scalars["Float"]>;
  SME1MMRT?: Maybe<Scalars["Float"]>;
  SME1MMRT_not?: Maybe<Scalars["Float"]>;
  SME1MMRT_in?: Maybe<Array<Scalars["Float"]>>;
  SME1MMRT_not_in?: Maybe<Array<Scalars["Float"]>>;
  SME1MMRT_lt?: Maybe<Scalars["Float"]>;
  SME1MMRT_lte?: Maybe<Scalars["Float"]>;
  SME1MMRT_gt?: Maybe<Scalars["Float"]>;
  SME1MMRT_gte?: Maybe<Scalars["Float"]>;
  SME1MPRT?: Maybe<Scalars["Float"]>;
  SME1MPRT_not?: Maybe<Scalars["Float"]>;
  SME1MPRT_in?: Maybe<Array<Scalars["Float"]>>;
  SME1MPRT_not_in?: Maybe<Array<Scalars["Float"]>>;
  SME1MPRT_lt?: Maybe<Scalars["Float"]>;
  SME1MPRT_lte?: Maybe<Scalars["Float"]>;
  SME1MPRT_gt?: Maybe<Scalars["Float"]>;
  SME1MPRT_gte?: Maybe<Scalars["Float"]>;
  SME1PCTS?: Maybe<Scalars["Float"]>;
  SME1PCTS_not?: Maybe<Scalars["Float"]>;
  SME1PCTS_in?: Maybe<Array<Scalars["Float"]>>;
  SME1PCTS_not_in?: Maybe<Array<Scalars["Float"]>>;
  SME1PCTS_lt?: Maybe<Scalars["Float"]>;
  SME1PCTS_lte?: Maybe<Scalars["Float"]>;
  SME1PCTS_gt?: Maybe<Scalars["Float"]>;
  SME1PCTS_gte?: Maybe<Scalars["Float"]>;
  SME1SNSE?: Maybe<Scalars["Float"]>;
  SME1SNSE_not?: Maybe<Scalars["Float"]>;
  SME1SNSE_in?: Maybe<Array<Scalars["Float"]>>;
  SME1SNSE_not_in?: Maybe<Array<Scalars["Float"]>>;
  SME1SNSE_lt?: Maybe<Scalars["Float"]>;
  SME1SNSE_lte?: Maybe<Scalars["Float"]>;
  SME1SNSE_gt?: Maybe<Scalars["Float"]>;
  SME1SNSE_gte?: Maybe<Scalars["Float"]>;
  SME2ANTI?: Maybe<Scalars["Float"]>;
  SME2ANTI_not?: Maybe<Scalars["Float"]>;
  SME2ANTI_in?: Maybe<Array<Scalars["Float"]>>;
  SME2ANTI_not_in?: Maybe<Array<Scalars["Float"]>>;
  SME2ANTI_lt?: Maybe<Scalars["Float"]>;
  SME2ANTI_lte?: Maybe<Scalars["Float"]>;
  SME2ANTI_gt?: Maybe<Scalars["Float"]>;
  SME2ANTI_gte?: Maybe<Scalars["Float"]>;
  SME2MMRT?: Maybe<Scalars["Float"]>;
  SME2MMRT_not?: Maybe<Scalars["Float"]>;
  SME2MMRT_in?: Maybe<Array<Scalars["Float"]>>;
  SME2MMRT_not_in?: Maybe<Array<Scalars["Float"]>>;
  SME2MMRT_lt?: Maybe<Scalars["Float"]>;
  SME2MMRT_lte?: Maybe<Scalars["Float"]>;
  SME2MMRT_gt?: Maybe<Scalars["Float"]>;
  SME2MMRT_gte?: Maybe<Scalars["Float"]>;
  SME2MPRT?: Maybe<Scalars["Float"]>;
  SME2MPRT_not?: Maybe<Scalars["Float"]>;
  SME2MPRT_in?: Maybe<Array<Scalars["Float"]>>;
  SME2MPRT_not_in?: Maybe<Array<Scalars["Float"]>>;
  SME2MPRT_lt?: Maybe<Scalars["Float"]>;
  SME2MPRT_lte?: Maybe<Scalars["Float"]>;
  SME2MPRT_gt?: Maybe<Scalars["Float"]>;
  SME2MPRT_gte?: Maybe<Scalars["Float"]>;
  SME2PCTS?: Maybe<Scalars["Float"]>;
  SME2PCTS_not?: Maybe<Scalars["Float"]>;
  SME2PCTS_in?: Maybe<Array<Scalars["Float"]>>;
  SME2PCTS_not_in?: Maybe<Array<Scalars["Float"]>>;
  SME2PCTS_lt?: Maybe<Scalars["Float"]>;
  SME2PCTS_lte?: Maybe<Scalars["Float"]>;
  SME2PCTS_gt?: Maybe<Scalars["Float"]>;
  SME2PCTS_gte?: Maybe<Scalars["Float"]>;
  SME2SNSE?: Maybe<Scalars["Float"]>;
  SME2SNSE_not?: Maybe<Scalars["Float"]>;
  SME2SNSE_in?: Maybe<Array<Scalars["Float"]>>;
  SME2SNSE_not_in?: Maybe<Array<Scalars["Float"]>>;
  SME2SNSE_lt?: Maybe<Scalars["Float"]>;
  SME2SNSE_lte?: Maybe<Scalars["Float"]>;
  SME2SNSE_gt?: Maybe<Scalars["Float"]>;
  SME2SNSE_gte?: Maybe<Scalars["Float"]>;
  SMESTLBS?: Maybe<Scalars["Float"]>;
  SMESTLBS_not?: Maybe<Scalars["Float"]>;
  SMESTLBS_in?: Maybe<Array<Scalars["Float"]>>;
  SMESTLBS_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMESTLBS_lt?: Maybe<Scalars["Float"]>;
  SMESTLBS_lte?: Maybe<Scalars["Float"]>;
  SMESTLBS_gt?: Maybe<Scalars["Float"]>;
  SMESTLBS_gte?: Maybe<Scalars["Float"]>;
  SMEXNCRT?: Maybe<Scalars["Float"]>;
  SMEXNCRT_not?: Maybe<Scalars["Float"]>;
  SMEXNCRT_in?: Maybe<Array<Scalars["Float"]>>;
  SMEXNCRT_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMEXNCRT_lt?: Maybe<Scalars["Float"]>;
  SMEXNCRT_lte?: Maybe<Scalars["Float"]>;
  SMEXNCRT_gt?: Maybe<Scalars["Float"]>;
  SMEXNCRT_gte?: Maybe<Scalars["Float"]>;
  SMEXPEFF?: Maybe<Scalars["Float"]>;
  SMEXPEFF_not?: Maybe<Scalars["Float"]>;
  SMEXPEFF_in?: Maybe<Array<Scalars["Float"]>>;
  SMEXPEFF_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMEXPEFF_lt?: Maybe<Scalars["Float"]>;
  SMEXPEFF_lte?: Maybe<Scalars["Float"]>;
  SMEXPEFF_gt?: Maybe<Scalars["Float"]>;
  SMEXPEFF_gte?: Maybe<Scalars["Float"]>;
  SMGAPPCT?: Maybe<Scalars["Float"]>;
  SMGAPPCT_not?: Maybe<Scalars["Float"]>;
  SMGAPPCT_in?: Maybe<Array<Scalars["Float"]>>;
  SMGAPPCT_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMGAPPCT_lt?: Maybe<Scalars["Float"]>;
  SMGAPPCT_lte?: Maybe<Scalars["Float"]>;
  SMGAPPCT_gt?: Maybe<Scalars["Float"]>;
  SMGAPPCT_gte?: Maybe<Scalars["Float"]>;
  SMGEBTCH?: Maybe<Scalars["String"]>;
  SMGEBTCH_not?: Maybe<Scalars["String"]>;
  SMGEBTCH_in?: Maybe<Array<Scalars["String"]>>;
  SMGEBTCH_not_in?: Maybe<Array<Scalars["String"]>>;
  SMGEBTCH_contains?: Maybe<Scalars["String"]>;
  SMGEBTCH_not_contains?: Maybe<Scalars["String"]>;
  SMGEBTCH_starts_with?: Maybe<Scalars["String"]>;
  SMGEBTCH_not_starts_with?: Maybe<Scalars["String"]>;
  SMGEBTCH_ends_with?: Maybe<Scalars["String"]>;
  SMGEBTCH_not_ends_with?: Maybe<Scalars["String"]>;
  SMGEBTCHD?: Maybe<Scalars["String"]>;
  SMGEBTCHD_not?: Maybe<Scalars["String"]>;
  SMGEBTCHD_in?: Maybe<Array<Scalars["String"]>>;
  SMGEBTCHD_not_in?: Maybe<Array<Scalars["String"]>>;
  SMGEBTCHD_contains?: Maybe<Scalars["String"]>;
  SMGEBTCHD_not_contains?: Maybe<Scalars["String"]>;
  SMGEBTCHD_starts_with?: Maybe<Scalars["String"]>;
  SMGEBTCHD_not_starts_with?: Maybe<Scalars["String"]>;
  SMGEBTCHD_ends_with?: Maybe<Scalars["String"]>;
  SMGEBTCHD_not_ends_with?: Maybe<Scalars["String"]>;
  SMGEBTCHT?: Maybe<Scalars["String"]>;
  SMGEBTCHT_not?: Maybe<Scalars["String"]>;
  SMGEBTCHT_in?: Maybe<Array<Scalars["String"]>>;
  SMGEBTCHT_not_in?: Maybe<Array<Scalars["String"]>>;
  SMGEBTCHT_contains?: Maybe<Scalars["String"]>;
  SMGEBTCHT_not_contains?: Maybe<Scalars["String"]>;
  SMGEBTCHT_starts_with?: Maybe<Scalars["String"]>;
  SMGEBTCHT_not_starts_with?: Maybe<Scalars["String"]>;
  SMGEBTCHT_ends_with?: Maybe<Scalars["String"]>;
  SMGEBTCHT_not_ends_with?: Maybe<Scalars["String"]>;
  SMGNSDTC?: Maybe<Scalars["Float"]>;
  SMGNSDTC_not?: Maybe<Scalars["Float"]>;
  SMGNSDTC_in?: Maybe<Array<Scalars["Float"]>>;
  SMGNSDTC_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMGNSDTC_lt?: Maybe<Scalars["Float"]>;
  SMGNSDTC_lte?: Maybe<Scalars["Float"]>;
  SMGNSDTC_gt?: Maybe<Scalars["Float"]>;
  SMGNSDTC_gte?: Maybe<Scalars["Float"]>;
  SMGTC?: Maybe<Scalars["String"]>;
  SMGTC_not?: Maybe<Scalars["String"]>;
  SMGTC_in?: Maybe<Array<Scalars["String"]>>;
  SMGTC_not_in?: Maybe<Array<Scalars["String"]>>;
  SMGTC_contains?: Maybe<Scalars["String"]>;
  SMGTC_not_contains?: Maybe<Scalars["String"]>;
  SMGTC_starts_with?: Maybe<Scalars["String"]>;
  SMGTC_not_starts_with?: Maybe<Scalars["String"]>;
  SMGTC_ends_with?: Maybe<Scalars["String"]>;
  SMGTC_not_ends_with?: Maybe<Scalars["String"]>;
  SMMAPRT?: Maybe<Scalars["Float"]>;
  SMMAPRT_not?: Maybe<Scalars["Float"]>;
  SMMAPRT_in?: Maybe<Array<Scalars["Float"]>>;
  SMMAPRT_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMMAPRT_lt?: Maybe<Scalars["Float"]>;
  SMMAPRT_lte?: Maybe<Scalars["Float"]>;
  SMMAPRT_gt?: Maybe<Scalars["Float"]>;
  SMMAPRT_gte?: Maybe<Scalars["Float"]>;
  SMMFLGTH?: Maybe<Scalars["Float"]>;
  SMMFLGTH_not?: Maybe<Scalars["Float"]>;
  SMMFLGTH_in?: Maybe<Array<Scalars["Float"]>>;
  SMMFLGTH_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMMFLGTH_lt?: Maybe<Scalars["Float"]>;
  SMMFLGTH_lte?: Maybe<Scalars["Float"]>;
  SMMFLGTH_gt?: Maybe<Scalars["Float"]>;
  SMMFLGTH_gte?: Maybe<Scalars["Float"]>;
  SMMNCPB?: Maybe<Scalars["Float"]>;
  SMMNCPB_not?: Maybe<Scalars["Float"]>;
  SMMNCPB_in?: Maybe<Array<Scalars["Float"]>>;
  SMMNCPB_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMMNCPB_lt?: Maybe<Scalars["Float"]>;
  SMMNCPB_lte?: Maybe<Scalars["Float"]>;
  SMMNCPB_gt?: Maybe<Scalars["Float"]>;
  SMMNCPB_gte?: Maybe<Scalars["Float"]>;
  SMMNCV?: Maybe<Scalars["Float"]>;
  SMMNCV_not?: Maybe<Scalars["Float"]>;
  SMMNCV_in?: Maybe<Array<Scalars["Float"]>>;
  SMMNCV_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMMNCV_lt?: Maybe<Scalars["Float"]>;
  SMMNCV_lte?: Maybe<Scalars["Float"]>;
  SMMNCV_gt?: Maybe<Scalars["Float"]>;
  SMMNCV_gte?: Maybe<Scalars["Float"]>;
  SMMPPD?: Maybe<Scalars["Float"]>;
  SMMPPD_not?: Maybe<Scalars["Float"]>;
  SMMPPD_in?: Maybe<Array<Scalars["Float"]>>;
  SMMPPD_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMMPPD_lt?: Maybe<Scalars["Float"]>;
  SMMPPD_lte?: Maybe<Scalars["Float"]>;
  SMMPPD_gt?: Maybe<Scalars["Float"]>;
  SMMPPD_gte?: Maybe<Scalars["Float"]>;
  SMMPPDPR?: Maybe<Scalars["Float"]>;
  SMMPPDPR_not?: Maybe<Scalars["Float"]>;
  SMMPPDPR_in?: Maybe<Array<Scalars["Float"]>>;
  SMMPPDPR_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMMPPDPR_lt?: Maybe<Scalars["Float"]>;
  SMMPPDPR_lte?: Maybe<Scalars["Float"]>;
  SMMPPDPR_gt?: Maybe<Scalars["Float"]>;
  SMMPPDPR_gte?: Maybe<Scalars["Float"]>;
  SMMPPDUN?: Maybe<Scalars["Float"]>;
  SMMPPDUN_not?: Maybe<Scalars["Float"]>;
  SMMPPDUN_in?: Maybe<Array<Scalars["Float"]>>;
  SMMPPDUN_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMMPPDUN_lt?: Maybe<Scalars["Float"]>;
  SMMPPDUN_lte?: Maybe<Scalars["Float"]>;
  SMMPPDUN_gt?: Maybe<Scalars["Float"]>;
  SMMPPDUN_gte?: Maybe<Scalars["Float"]>;
  SMMPUNRT?: Maybe<Scalars["Float"]>;
  SMMPUNRT_not?: Maybe<Scalars["Float"]>;
  SMMPUNRT_in?: Maybe<Array<Scalars["Float"]>>;
  SMMPUNRT_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMMPUNRT_lt?: Maybe<Scalars["Float"]>;
  SMMPUNRT_lte?: Maybe<Scalars["Float"]>;
  SMMPUNRT_gt?: Maybe<Scalars["Float"]>;
  SMMPUNRT_gte?: Maybe<Scalars["Float"]>;
  SMNABTCH?: Maybe<Scalars["String"]>;
  SMNABTCH_not?: Maybe<Scalars["String"]>;
  SMNABTCH_in?: Maybe<Array<Scalars["String"]>>;
  SMNABTCH_not_in?: Maybe<Array<Scalars["String"]>>;
  SMNABTCH_contains?: Maybe<Scalars["String"]>;
  SMNABTCH_not_contains?: Maybe<Scalars["String"]>;
  SMNABTCH_starts_with?: Maybe<Scalars["String"]>;
  SMNABTCH_not_starts_with?: Maybe<Scalars["String"]>;
  SMNABTCH_ends_with?: Maybe<Scalars["String"]>;
  SMNABTCH_not_ends_with?: Maybe<Scalars["String"]>;
  SMNABTCHD?: Maybe<Scalars["String"]>;
  SMNABTCHD_not?: Maybe<Scalars["String"]>;
  SMNABTCHD_in?: Maybe<Array<Scalars["String"]>>;
  SMNABTCHD_not_in?: Maybe<Array<Scalars["String"]>>;
  SMNABTCHD_contains?: Maybe<Scalars["String"]>;
  SMNABTCHD_not_contains?: Maybe<Scalars["String"]>;
  SMNABTCHD_starts_with?: Maybe<Scalars["String"]>;
  SMNABTCHD_not_starts_with?: Maybe<Scalars["String"]>;
  SMNABTCHD_ends_with?: Maybe<Scalars["String"]>;
  SMNABTCHD_not_ends_with?: Maybe<Scalars["String"]>;
  SMNABTCHT?: Maybe<Scalars["String"]>;
  SMNABTCHT_not?: Maybe<Scalars["String"]>;
  SMNABTCHT_in?: Maybe<Array<Scalars["String"]>>;
  SMNABTCHT_not_in?: Maybe<Array<Scalars["String"]>>;
  SMNABTCHT_contains?: Maybe<Scalars["String"]>;
  SMNABTCHT_not_contains?: Maybe<Scalars["String"]>;
  SMNABTCHT_starts_with?: Maybe<Scalars["String"]>;
  SMNABTCHT_not_starts_with?: Maybe<Scalars["String"]>;
  SMNABTCHT_ends_with?: Maybe<Scalars["String"]>;
  SMNABTCHT_not_ends_with?: Maybe<Scalars["String"]>;
  SMNTERRT?: Maybe<Scalars["Float"]>;
  SMNTERRT_not?: Maybe<Scalars["Float"]>;
  SMNTERRT_in?: Maybe<Array<Scalars["Float"]>>;
  SMNTERRT_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMNTERRT_lt?: Maybe<Scalars["Float"]>;
  SMNTERRT_lte?: Maybe<Scalars["Float"]>;
  SMNTERRT_gt?: Maybe<Scalars["Float"]>;
  SMNTERRT_gte?: Maybe<Scalars["Float"]>;
  SMNTRART?: Maybe<Scalars["Float"]>;
  SMNTRART_not?: Maybe<Scalars["Float"]>;
  SMNTRART_in?: Maybe<Array<Scalars["Float"]>>;
  SMNTRART_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMNTRART_lt?: Maybe<Scalars["Float"]>;
  SMNTRART_lte?: Maybe<Scalars["Float"]>;
  SMNTRART_gt?: Maybe<Scalars["Float"]>;
  SMNTRART_gte?: Maybe<Scalars["Float"]>;
  SMNTRNRT?: Maybe<Scalars["Float"]>;
  SMNTRNRT_not?: Maybe<Scalars["Float"]>;
  SMNTRNRT_in?: Maybe<Array<Scalars["Float"]>>;
  SMNTRNRT_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMNTRNRT_lt?: Maybe<Scalars["Float"]>;
  SMNTRNRT_lte?: Maybe<Scalars["Float"]>;
  SMNTRNRT_gt?: Maybe<Scalars["Float"]>;
  SMNTRNRT_gte?: Maybe<Scalars["Float"]>;
  SMNUM5CD?: Maybe<Scalars["Float"]>;
  SMNUM5CD_not?: Maybe<Scalars["Float"]>;
  SMNUM5CD_in?: Maybe<Array<Scalars["Float"]>>;
  SMNUM5CD_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMNUM5CD_lt?: Maybe<Scalars["Float"]>;
  SMNUM5CD_lte?: Maybe<Scalars["Float"]>;
  SMNUM5CD_gt?: Maybe<Scalars["Float"]>;
  SMNUM5CD_gte?: Maybe<Scalars["Float"]>;
  SMNUMGPS?: Maybe<Scalars["Float"]>;
  SMNUMGPS_not?: Maybe<Scalars["Float"]>;
  SMNUMGPS_in?: Maybe<Array<Scalars["Float"]>>;
  SMNUMGPS_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMNUMGPS_lt?: Maybe<Scalars["Float"]>;
  SMNUMGPS_lte?: Maybe<Scalars["Float"]>;
  SMNUMGPS_gt?: Maybe<Scalars["Float"]>;
  SMNUMGPS_gte?: Maybe<Scalars["Float"]>;
  SMPTHNTS?: Maybe<Scalars["String"]>;
  SMPTHNTS_not?: Maybe<Scalars["String"]>;
  SMPTHNTS_in?: Maybe<Array<Scalars["String"]>>;
  SMPTHNTS_not_in?: Maybe<Array<Scalars["String"]>>;
  SMPTHNTS_contains?: Maybe<Scalars["String"]>;
  SMPTHNTS_not_contains?: Maybe<Scalars["String"]>;
  SMPTHNTS_starts_with?: Maybe<Scalars["String"]>;
  SMPTHNTS_not_starts_with?: Maybe<Scalars["String"]>;
  SMPTHNTS_ends_with?: Maybe<Scalars["String"]>;
  SMPTHNTS_not_ends_with?: Maybe<Scalars["String"]>;
  SMRDLGTH?: Maybe<Scalars["Float"]>;
  SMRDLGTH_not?: Maybe<Scalars["Float"]>;
  SMRDLGTH_in?: Maybe<Array<Scalars["Float"]>>;
  SMRDLGTH_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMRDLGTH_lt?: Maybe<Scalars["Float"]>;
  SMRDLGTH_lte?: Maybe<Scalars["Float"]>;
  SMRDLGTH_gt?: Maybe<Scalars["Float"]>;
  SMRDLGTH_gte?: Maybe<Scalars["Float"]>;
  SMRDTTL?: Maybe<Scalars["Float"]>;
  SMRDTTL_not?: Maybe<Scalars["Float"]>;
  SMRDTTL_in?: Maybe<Array<Scalars["Float"]>>;
  SMRDTTL_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMRDTTL_lt?: Maybe<Scalars["Float"]>;
  SMRDTTL_lte?: Maybe<Scalars["Float"]>;
  SMRDTTL_gt?: Maybe<Scalars["Float"]>;
  SMRDTTL_gte?: Maybe<Scalars["Float"]>;
  SMRIN?: Maybe<Scalars["Float"]>;
  SMRIN_not?: Maybe<Scalars["Float"]>;
  SMRIN_in?: Maybe<Array<Scalars["Float"]>>;
  SMRIN_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMRIN_lt?: Maybe<Scalars["Float"]>;
  SMRIN_lte?: Maybe<Scalars["Float"]>;
  SMRIN_gt?: Maybe<Scalars["Float"]>;
  SMRIN_gte?: Maybe<Scalars["Float"]>;
  SMRRNANM?: Maybe<Scalars["Float"]>;
  SMRRNANM_not?: Maybe<Scalars["Float"]>;
  SMRRNANM_in?: Maybe<Array<Scalars["Float"]>>;
  SMRRNANM_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMRRNANM_lt?: Maybe<Scalars["Float"]>;
  SMRRNANM_lte?: Maybe<Scalars["Float"]>;
  SMRRNANM_gt?: Maybe<Scalars["Float"]>;
  SMRRNANM_gte?: Maybe<Scalars["Float"]>;
  SMRRNART?: Maybe<Scalars["Float"]>;
  SMRRNART_not?: Maybe<Scalars["Float"]>;
  SMRRNART_in?: Maybe<Array<Scalars["Float"]>>;
  SMRRNART_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMRRNART_lt?: Maybe<Scalars["Float"]>;
  SMRRNART_lte?: Maybe<Scalars["Float"]>;
  SMRRNART_gt?: Maybe<Scalars["Float"]>;
  SMRRNART_gte?: Maybe<Scalars["Float"]>;
  SMSFLGTH?: Maybe<Scalars["Float"]>;
  SMSFLGTH_not?: Maybe<Scalars["Float"]>;
  SMSFLGTH_in?: Maybe<Array<Scalars["Float"]>>;
  SMSFLGTH_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMSFLGTH_lt?: Maybe<Scalars["Float"]>;
  SMSFLGTH_lte?: Maybe<Scalars["Float"]>;
  SMSFLGTH_gt?: Maybe<Scalars["Float"]>;
  SMSFLGTH_gte?: Maybe<Scalars["Float"]>;
  SMSPLTRD?: Maybe<Scalars["Float"]>;
  SMSPLTRD_not?: Maybe<Scalars["Float"]>;
  SMSPLTRD_in?: Maybe<Array<Scalars["Float"]>>;
  SMSPLTRD_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMSPLTRD_lt?: Maybe<Scalars["Float"]>;
  SMSPLTRD_lte?: Maybe<Scalars["Float"]>;
  SMSPLTRD_gt?: Maybe<Scalars["Float"]>;
  SMSPLTRD_gte?: Maybe<Scalars["Float"]>;
  SMTRSCPT?: Maybe<Scalars["Float"]>;
  SMTRSCPT_not?: Maybe<Scalars["Float"]>;
  SMTRSCPT_in?: Maybe<Array<Scalars["Float"]>>;
  SMTRSCPT_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMTRSCPT_lt?: Maybe<Scalars["Float"]>;
  SMTRSCPT_lte?: Maybe<Scalars["Float"]>;
  SMTRSCPT_gt?: Maybe<Scalars["Float"]>;
  SMTRSCPT_gte?: Maybe<Scalars["Float"]>;
  SMTS?: Maybe<Scalars["String"]>;
  SMTS_not?: Maybe<Scalars["String"]>;
  SMTS_in?: Maybe<Array<Scalars["String"]>>;
  SMTS_not_in?: Maybe<Array<Scalars["String"]>>;
  SMTS_contains?: Maybe<Scalars["String"]>;
  SMTS_not_contains?: Maybe<Scalars["String"]>;
  SMTS_starts_with?: Maybe<Scalars["String"]>;
  SMTS_not_starts_with?: Maybe<Scalars["String"]>;
  SMTS_ends_with?: Maybe<Scalars["String"]>;
  SMTS_not_ends_with?: Maybe<Scalars["String"]>;
  SMTSD?: Maybe<Scalars["String"]>;
  SMTSD_not?: Maybe<Scalars["String"]>;
  SMTSD_in?: Maybe<Array<Scalars["String"]>>;
  SMTSD_not_in?: Maybe<Array<Scalars["String"]>>;
  SMTSD_contains?: Maybe<Scalars["String"]>;
  SMTSD_not_contains?: Maybe<Scalars["String"]>;
  SMTSD_starts_with?: Maybe<Scalars["String"]>;
  SMTSD_not_starts_with?: Maybe<Scalars["String"]>;
  SMTSD_ends_with?: Maybe<Scalars["String"]>;
  SMTSD_not_ends_with?: Maybe<Scalars["String"]>;
  SMTSISCH?: Maybe<Scalars["Float"]>;
  SMTSISCH_not?: Maybe<Scalars["Float"]>;
  SMTSISCH_in?: Maybe<Array<Scalars["Float"]>>;
  SMTSISCH_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMTSISCH_lt?: Maybe<Scalars["Float"]>;
  SMTSISCH_lte?: Maybe<Scalars["Float"]>;
  SMTSISCH_gt?: Maybe<Scalars["Float"]>;
  SMTSISCH_gte?: Maybe<Scalars["Float"]>;
  SMTSPAX?: Maybe<Scalars["Float"]>;
  SMTSPAX_not?: Maybe<Scalars["Float"]>;
  SMTSPAX_in?: Maybe<Array<Scalars["Float"]>>;
  SMTSPAX_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMTSPAX_lt?: Maybe<Scalars["Float"]>;
  SMTSPAX_lte?: Maybe<Scalars["Float"]>;
  SMTSPAX_gt?: Maybe<Scalars["Float"]>;
  SMTSPAX_gte?: Maybe<Scalars["Float"]>;
  SMUBRID?: Maybe<Scalars["String"]>;
  SMUBRID_not?: Maybe<Scalars["String"]>;
  SMUBRID_in?: Maybe<Array<Scalars["String"]>>;
  SMUBRID_not_in?: Maybe<Array<Scalars["String"]>>;
  SMUBRID_contains?: Maybe<Scalars["String"]>;
  SMUBRID_not_contains?: Maybe<Scalars["String"]>;
  SMUBRID_starts_with?: Maybe<Scalars["String"]>;
  SMUBRID_not_starts_with?: Maybe<Scalars["String"]>;
  SMUBRID_ends_with?: Maybe<Scalars["String"]>;
  SMUBRID_not_ends_with?: Maybe<Scalars["String"]>;
  SMUNMPRT?: Maybe<Scalars["Float"]>;
  SMUNMPRT_not?: Maybe<Scalars["Float"]>;
  SMUNMPRT_in?: Maybe<Array<Scalars["Float"]>>;
  SMUNMPRT_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMUNMPRT_lt?: Maybe<Scalars["Float"]>;
  SMUNMPRT_lte?: Maybe<Scalars["Float"]>;
  SMUNMPRT_gt?: Maybe<Scalars["Float"]>;
  SMUNMPRT_gte?: Maybe<Scalars["Float"]>;
  SMUNPDRD?: Maybe<Scalars["Float"]>;
  SMUNPDRD_not?: Maybe<Scalars["Float"]>;
  SMUNPDRD_in?: Maybe<Array<Scalars["Float"]>>;
  SMUNPDRD_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMUNPDRD_lt?: Maybe<Scalars["Float"]>;
  SMUNPDRD_lte?: Maybe<Scalars["Float"]>;
  SMUNPDRD_gt?: Maybe<Scalars["Float"]>;
  SMUNPDRD_gte?: Maybe<Scalars["Float"]>;
  SMVQCFL?: Maybe<Scalars["Float"]>;
  SMVQCFL_not?: Maybe<Scalars["Float"]>;
  SMVQCFL_in?: Maybe<Array<Scalars["Float"]>>;
  SMVQCFL_not_in?: Maybe<Array<Scalars["Float"]>>;
  SMVQCFL_lt?: Maybe<Scalars["Float"]>;
  SMVQCFL_lte?: Maybe<Scalars["Float"]>;
  SMVQCFL_gt?: Maybe<Scalars["Float"]>;
  SMVQCFL_gte?: Maybe<Scalars["Float"]>;
  measures?: Maybe<_GtexTissueFilter>;
  measures_not?: Maybe<_GtexTissueFilter>;
  measures_in?: Maybe<Array<_GtexTissueFilter>>;
  measures_not_in?: Maybe<Array<_GtexTissueFilter>>;
  measures_some?: Maybe<_GtexTissueFilter>;
  measures_none?: Maybe<_GtexTissueFilter>;
  measures_single?: Maybe<_GtexTissueFilter>;
  measures_every?: Maybe<_GtexTissueFilter>;
};

export type _GeneMemberFilter = {
  AND?: Maybe<Array<_GeneMemberFilter>>;
  OR?: Maybe<Array<_GeneMemberFilter>>;
  evidence?: Maybe<Scalars["String"]>;
  evidence_not?: Maybe<Scalars["String"]>;
  evidence_in?: Maybe<Array<Scalars["String"]>>;
  evidence_not_in?: Maybe<Array<Scalars["String"]>>;
  evidence_contains?: Maybe<Scalars["String"]>;
  evidence_not_contains?: Maybe<Scalars["String"]>;
  evidence_starts_with?: Maybe<Scalars["String"]>;
  evidence_not_starts_with?: Maybe<Scalars["String"]>;
  evidence_ends_with?: Maybe<Scalars["String"]>;
  evidence_not_ends_with?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  pathway?: Maybe<_PathwayFilter>;
};

export type _PathwayFilter = {
  AND?: Maybe<Array<_PathwayFilter>>;
  OR?: Maybe<Array<_PathwayFilter>>;
  sid?: Maybe<Scalars["ID"]>;
  sid_not?: Maybe<Scalars["ID"]>;
  sid_in?: Maybe<Array<Scalars["ID"]>>;
  sid_not_in?: Maybe<Array<Scalars["ID"]>>;
  sid_contains?: Maybe<Scalars["ID"]>;
  sid_not_contains?: Maybe<Scalars["ID"]>;
  sid_starts_with?: Maybe<Scalars["ID"]>;
  sid_not_starts_with?: Maybe<Scalars["ID"]>;
  sid_ends_with?: Maybe<Scalars["ID"]>;
  sid_not_ends_with?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  org?: Maybe<Scalars["String"]>;
  org_not?: Maybe<Scalars["String"]>;
  org_in?: Maybe<Array<Scalars["String"]>>;
  org_not_in?: Maybe<Array<Scalars["String"]>>;
  org_contains?: Maybe<Scalars["String"]>;
  org_not_contains?: Maybe<Scalars["String"]>;
  org_starts_with?: Maybe<Scalars["String"]>;
  org_not_starts_with?: Maybe<Scalars["String"]>;
  org_ends_with?: Maybe<Scalars["String"]>;
  org_not_ends_with?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  taxid?: Maybe<Scalars["String"]>;
  taxid_not?: Maybe<Scalars["String"]>;
  taxid_in?: Maybe<Array<Scalars["String"]>>;
  taxid_not_in?: Maybe<Array<Scalars["String"]>>;
  taxid_contains?: Maybe<Scalars["String"]>;
  taxid_not_contains?: Maybe<Scalars["String"]>;
  taxid_starts_with?: Maybe<Scalars["String"]>;
  taxid_not_starts_with?: Maybe<Scalars["String"]>;
  taxid_ends_with?: Maybe<Scalars["String"]>;
  taxid_not_ends_with?: Maybe<Scalars["String"]>;
  genes?: Maybe<_PathwayMemberFilter>;
  genes_not?: Maybe<_PathwayMemberFilter>;
  genes_in?: Maybe<Array<_PathwayMemberFilter>>;
  genes_not_in?: Maybe<Array<_PathwayMemberFilter>>;
  genes_some?: Maybe<_PathwayMemberFilter>;
  genes_none?: Maybe<_PathwayMemberFilter>;
  genes_single?: Maybe<_PathwayMemberFilter>;
  genes_every?: Maybe<_PathwayMemberFilter>;
  pathways?: Maybe<_ChildDirectionsFilter>;
  pathways_not?: Maybe<_ChildDirectionsFilter>;
  pathways_in?: Maybe<Array<_ChildDirectionsFilter>>;
  pathways_not_in?: Maybe<Array<_ChildDirectionsFilter>>;
  pathways_some?: Maybe<_ChildDirectionsFilter>;
  pathways_none?: Maybe<_ChildDirectionsFilter>;
  pathways_single?: Maybe<_ChildDirectionsFilter>;
  pathways_every?: Maybe<_ChildDirectionsFilter>;
};

export type _PathwayMemberFilter = {
  AND?: Maybe<Array<_PathwayMemberFilter>>;
  OR?: Maybe<Array<_PathwayMemberFilter>>;
  evidence?: Maybe<Scalars["String"]>;
  evidence_not?: Maybe<Scalars["String"]>;
  evidence_in?: Maybe<Array<Scalars["String"]>>;
  evidence_not_in?: Maybe<Array<Scalars["String"]>>;
  evidence_contains?: Maybe<Scalars["String"]>;
  evidence_not_contains?: Maybe<Scalars["String"]>;
  evidence_starts_with?: Maybe<Scalars["String"]>;
  evidence_not_starts_with?: Maybe<Scalars["String"]>;
  evidence_ends_with?: Maybe<Scalars["String"]>;
  evidence_not_ends_with?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  gene?: Maybe<_GeneFilter>;
};

export type _ChildDirectionsFilter = {
  child?: Maybe<_ChildFilter>;
  parent?: Maybe<_ChildFilter>;
};

export type _ChildFilter = {
  AND?: Maybe<Array<_ChildFilter>>;
  OR?: Maybe<Array<_ChildFilter>>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  Pathway?: Maybe<_PathwayFilter>;
};

export type _MapsGeneDirectionsFilter = {
  mappedBy?: Maybe<_MapsGeneFilter>;
  gene?: Maybe<_MapsGeneFilter>;
};

export type _MapsGeneFilter = {
  AND?: Maybe<Array<_MapsGeneFilter>>;
  OR?: Maybe<Array<_MapsGeneFilter>>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  Gene?: Maybe<_GeneFilter>;
};

export type _GeneMapsGeneSymbolFilter = {
  AND?: Maybe<Array<_GeneMapsGeneSymbolFilter>>;
  OR?: Maybe<Array<_GeneMapsGeneSymbolFilter>>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  symbol?: Maybe<_GeneSymbolFilter>;
};

export type _GeneSymbolFilter = {
  AND?: Maybe<Array<_GeneSymbolFilter>>;
  OR?: Maybe<Array<_GeneSymbolFilter>>;
  sid?: Maybe<Scalars["String"]>;
  sid_not?: Maybe<Scalars["String"]>;
  sid_in?: Maybe<Array<Scalars["String"]>>;
  sid_not_in?: Maybe<Array<Scalars["String"]>>;
  sid_contains?: Maybe<Scalars["String"]>;
  sid_not_contains?: Maybe<Scalars["String"]>;
  sid_starts_with?: Maybe<Scalars["String"]>;
  sid_not_starts_with?: Maybe<Scalars["String"]>;
  sid_ends_with?: Maybe<Scalars["String"]>;
  sid_not_ends_with?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  status_not?: Maybe<Scalars["String"]>;
  status_in?: Maybe<Array<Scalars["String"]>>;
  status_not_in?: Maybe<Array<Scalars["String"]>>;
  status_contains?: Maybe<Scalars["String"]>;
  status_not_contains?: Maybe<Scalars["String"]>;
  status_starts_with?: Maybe<Scalars["String"]>;
  status_not_starts_with?: Maybe<Scalars["String"]>;
  status_ends_with?: Maybe<Scalars["String"]>;
  status_not_ends_with?: Maybe<Scalars["String"]>;
  taxid?: Maybe<Scalars["String"]>;
  taxid_not?: Maybe<Scalars["String"]>;
  taxid_in?: Maybe<Array<Scalars["String"]>>;
  taxid_not_in?: Maybe<Array<Scalars["String"]>>;
  taxid_contains?: Maybe<Scalars["String"]>;
  taxid_not_contains?: Maybe<Scalars["String"]>;
  taxid_starts_with?: Maybe<Scalars["String"]>;
  taxid_not_starts_with?: Maybe<Scalars["String"]>;
  taxid_ends_with?: Maybe<Scalars["String"]>;
  taxid_not_ends_with?: Maybe<Scalars["String"]>;
  synonyms?: Maybe<_SynonymDirectionsFilter>;
  synonyms_not?: Maybe<_SynonymDirectionsFilter>;
  synonyms_in?: Maybe<Array<_SynonymDirectionsFilter>>;
  synonyms_not_in?: Maybe<Array<_SynonymDirectionsFilter>>;
  synonyms_some?: Maybe<_SynonymDirectionsFilter>;
  synonyms_none?: Maybe<_SynonymDirectionsFilter>;
  synonyms_single?: Maybe<_SynonymDirectionsFilter>;
  synonyms_every?: Maybe<_SynonymDirectionsFilter>;
  synonymsSpecialCharOmitted?: Maybe<_GeneSymbolSynonymSpecialCharOmittedFilter>;
  synonymsSpecialCharOmitted_not?: Maybe<_GeneSymbolSynonymSpecialCharOmittedFilter>;
  synonymsSpecialCharOmitted_in?: Maybe<
    Array<_GeneSymbolSynonymSpecialCharOmittedFilter>
  >;
  synonymsSpecialCharOmitted_not_in?: Maybe<
    Array<_GeneSymbolSynonymSpecialCharOmittedFilter>
  >;
  synonymsSpecialCharOmitted_some?: Maybe<_GeneSymbolSynonymSpecialCharOmittedFilter>;
  synonymsSpecialCharOmitted_none?: Maybe<_GeneSymbolSynonymSpecialCharOmittedFilter>;
  synonymsSpecialCharOmitted_single?: Maybe<_GeneSymbolSynonymSpecialCharOmittedFilter>;
  synonymsSpecialCharOmitted_every?: Maybe<_GeneSymbolSynonymSpecialCharOmittedFilter>;
  synonymsLengthOmitted?: Maybe<_GeneSymbolSynonymLengthOmittedFilter>;
  synonymsLengthOmitted_not?: Maybe<_GeneSymbolSynonymLengthOmittedFilter>;
  synonymsLengthOmitted_in?: Maybe<
    Array<_GeneSymbolSynonymLengthOmittedFilter>
  >;
  synonymsLengthOmitted_not_in?: Maybe<
    Array<_GeneSymbolSynonymLengthOmittedFilter>
  >;
  synonymsLengthOmitted_some?: Maybe<_GeneSymbolSynonymLengthOmittedFilter>;
  synonymsLengthOmitted_none?: Maybe<_GeneSymbolSynonymLengthOmittedFilter>;
  synonymsLengthOmitted_single?: Maybe<_GeneSymbolSynonymLengthOmittedFilter>;
  synonymsLengthOmitted_every?: Maybe<_GeneSymbolSynonymLengthOmittedFilter>;
  synonymsWordOmitted?: Maybe<_GeneSymbolSynonymWordOmittedFilter>;
  synonymsWordOmitted_not?: Maybe<_GeneSymbolSynonymWordOmittedFilter>;
  synonymsWordOmitted_in?: Maybe<Array<_GeneSymbolSynonymWordOmittedFilter>>;
  synonymsWordOmitted_not_in?: Maybe<
    Array<_GeneSymbolSynonymWordOmittedFilter>
  >;
  synonymsWordOmitted_some?: Maybe<_GeneSymbolSynonymWordOmittedFilter>;
  synonymsWordOmitted_none?: Maybe<_GeneSymbolSynonymWordOmittedFilter>;
  synonymsWordOmitted_single?: Maybe<_GeneSymbolSynonymWordOmittedFilter>;
  synonymsWordOmitted_every?: Maybe<_GeneSymbolSynonymWordOmittedFilter>;
  mentionedInBodyTextFragments?: Maybe<_GeneSymbolFromBodyTextMentionsFilter>;
  mentionedInBodyTextFragments_not?: Maybe<_GeneSymbolFromBodyTextMentionsFilter>;
  mentionedInBodyTextFragments_in?: Maybe<
    Array<_GeneSymbolFromBodyTextMentionsFilter>
  >;
  mentionedInBodyTextFragments_not_in?: Maybe<
    Array<_GeneSymbolFromBodyTextMentionsFilter>
  >;
  mentionedInBodyTextFragments_some?: Maybe<_GeneSymbolFromBodyTextMentionsFilter>;
  mentionedInBodyTextFragments_none?: Maybe<_GeneSymbolFromBodyTextMentionsFilter>;
  mentionedInBodyTextFragments_single?: Maybe<_GeneSymbolFromBodyTextMentionsFilter>;
  mentionedInBodyTextFragments_every?: Maybe<_GeneSymbolFromBodyTextMentionsFilter>;
  mentionedInAbstractFragments?: Maybe<_GeneSymbolFromAbstractMentionsFilter>;
  mentionedInAbstractFragments_not?: Maybe<_GeneSymbolFromAbstractMentionsFilter>;
  mentionedInAbstractFragments_in?: Maybe<
    Array<_GeneSymbolFromAbstractMentionsFilter>
  >;
  mentionedInAbstractFragments_not_in?: Maybe<
    Array<_GeneSymbolFromAbstractMentionsFilter>
  >;
  mentionedInAbstractFragments_some?: Maybe<_GeneSymbolFromAbstractMentionsFilter>;
  mentionedInAbstractFragments_none?: Maybe<_GeneSymbolFromAbstractMentionsFilter>;
  mentionedInAbstractFragments_single?: Maybe<_GeneSymbolFromAbstractMentionsFilter>;
  mentionedInAbstractFragments_every?: Maybe<_GeneSymbolFromAbstractMentionsFilter>;
  mentionedInPatentDescriptions?: Maybe<_GeneSymbolPatentDescriptionMentionsGeneSymbolFilter>;
  mentionedInPatentDescriptions_not?: Maybe<_GeneSymbolPatentDescriptionMentionsGeneSymbolFilter>;
  mentionedInPatentDescriptions_in?: Maybe<
    Array<_GeneSymbolPatentDescriptionMentionsGeneSymbolFilter>
  >;
  mentionedInPatentDescriptions_not_in?: Maybe<
    Array<_GeneSymbolPatentDescriptionMentionsGeneSymbolFilter>
  >;
  mentionedInPatentDescriptions_some?: Maybe<_GeneSymbolPatentDescriptionMentionsGeneSymbolFilter>;
  mentionedInPatentDescriptions_none?: Maybe<_GeneSymbolPatentDescriptionMentionsGeneSymbolFilter>;
  mentionedInPatentDescriptions_single?: Maybe<_GeneSymbolPatentDescriptionMentionsGeneSymbolFilter>;
  mentionedInPatentDescriptions_every?: Maybe<_GeneSymbolPatentDescriptionMentionsGeneSymbolFilter>;
  mentionedInPatentTitles?: Maybe<_GeneSymbolPatentTitleMentionsGeneSymbolFilter>;
  mentionedInPatentTitles_not?: Maybe<_GeneSymbolPatentTitleMentionsGeneSymbolFilter>;
  mentionedInPatentTitles_in?: Maybe<
    Array<_GeneSymbolPatentTitleMentionsGeneSymbolFilter>
  >;
  mentionedInPatentTitles_not_in?: Maybe<
    Array<_GeneSymbolPatentTitleMentionsGeneSymbolFilter>
  >;
  mentionedInPatentTitles_some?: Maybe<_GeneSymbolPatentTitleMentionsGeneSymbolFilter>;
  mentionedInPatentTitles_none?: Maybe<_GeneSymbolPatentTitleMentionsGeneSymbolFilter>;
  mentionedInPatentTitles_single?: Maybe<_GeneSymbolPatentTitleMentionsGeneSymbolFilter>;
  mentionedInPatentTitles_every?: Maybe<_GeneSymbolPatentTitleMentionsGeneSymbolFilter>;
  mentionedInPatentAbstracts?: Maybe<_GeneSymbolPatentAbstractMentionsGeneSymbolFilter>;
  mentionedInPatentAbstracts_not?: Maybe<_GeneSymbolPatentAbstractMentionsGeneSymbolFilter>;
  mentionedInPatentAbstracts_in?: Maybe<
    Array<_GeneSymbolPatentAbstractMentionsGeneSymbolFilter>
  >;
  mentionedInPatentAbstracts_not_in?: Maybe<
    Array<_GeneSymbolPatentAbstractMentionsGeneSymbolFilter>
  >;
  mentionedInPatentAbstracts_some?: Maybe<_GeneSymbolPatentAbstractMentionsGeneSymbolFilter>;
  mentionedInPatentAbstracts_none?: Maybe<_GeneSymbolPatentAbstractMentionsGeneSymbolFilter>;
  mentionedInPatentAbstracts_single?: Maybe<_GeneSymbolPatentAbstractMentionsGeneSymbolFilter>;
  mentionedInPatentAbstracts_every?: Maybe<_GeneSymbolPatentAbstractMentionsGeneSymbolFilter>;
  mentionedInPatentClaims?: Maybe<_GeneSymbolPatentClaimMentionsGeneSymbolFilter>;
  mentionedInPatentClaims_not?: Maybe<_GeneSymbolPatentClaimMentionsGeneSymbolFilter>;
  mentionedInPatentClaims_in?: Maybe<
    Array<_GeneSymbolPatentClaimMentionsGeneSymbolFilter>
  >;
  mentionedInPatentClaims_not_in?: Maybe<
    Array<_GeneSymbolPatentClaimMentionsGeneSymbolFilter>
  >;
  mentionedInPatentClaims_some?: Maybe<_GeneSymbolPatentClaimMentionsGeneSymbolFilter>;
  mentionedInPatentClaims_none?: Maybe<_GeneSymbolPatentClaimMentionsGeneSymbolFilter>;
  mentionedInPatentClaims_single?: Maybe<_GeneSymbolPatentClaimMentionsGeneSymbolFilter>;
  mentionedInPatentClaims_every?: Maybe<_GeneSymbolPatentClaimMentionsGeneSymbolFilter>;
};

export type _SynonymDirectionsFilter = {
  synonymOf?: Maybe<_SynonymFilter>;
  synonym?: Maybe<_SynonymFilter>;
};

export type _SynonymFilter = {
  AND?: Maybe<Array<_SynonymFilter>>;
  OR?: Maybe<Array<_SynonymFilter>>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  GeneSymbol?: Maybe<_GeneSymbolFilter>;
};

export type _GeneSymbolSynonymSpecialCharOmittedFilter = {
  AND?: Maybe<Array<_GeneSymbolSynonymSpecialCharOmittedFilter>>;
  OR?: Maybe<Array<_GeneSymbolSynonymSpecialCharOmittedFilter>>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  synonymOf?: Maybe<_OmitSpecialCharFilter>;
};

export type _OmitSpecialCharFilter = {
  AND?: Maybe<Array<_OmitSpecialCharFilter>>;
  OR?: Maybe<Array<_OmitSpecialCharFilter>>;
  sid?: Maybe<Scalars["String"]>;
  sid_not?: Maybe<Scalars["String"]>;
  sid_in?: Maybe<Array<Scalars["String"]>>;
  sid_not_in?: Maybe<Array<Scalars["String"]>>;
  sid_contains?: Maybe<Scalars["String"]>;
  sid_not_contains?: Maybe<Scalars["String"]>;
  sid_starts_with?: Maybe<Scalars["String"]>;
  sid_not_starts_with?: Maybe<Scalars["String"]>;
  sid_ends_with?: Maybe<Scalars["String"]>;
  sid_not_ends_with?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  status_not?: Maybe<Scalars["String"]>;
  status_in?: Maybe<Array<Scalars["String"]>>;
  status_not_in?: Maybe<Array<Scalars["String"]>>;
  status_contains?: Maybe<Scalars["String"]>;
  status_not_contains?: Maybe<Scalars["String"]>;
  status_starts_with?: Maybe<Scalars["String"]>;
  status_not_starts_with?: Maybe<Scalars["String"]>;
  status_ends_with?: Maybe<Scalars["String"]>;
  status_not_ends_with?: Maybe<Scalars["String"]>;
  taxid?: Maybe<Scalars["String"]>;
  taxid_not?: Maybe<Scalars["String"]>;
  taxid_in?: Maybe<Array<Scalars["String"]>>;
  taxid_not_in?: Maybe<Array<Scalars["String"]>>;
  taxid_contains?: Maybe<Scalars["String"]>;
  taxid_not_contains?: Maybe<Scalars["String"]>;
  taxid_starts_with?: Maybe<Scalars["String"]>;
  taxid_not_starts_with?: Maybe<Scalars["String"]>;
  taxid_ends_with?: Maybe<Scalars["String"]>;
  taxid_not_ends_with?: Maybe<Scalars["String"]>;
  synonyms?: Maybe<_SynonymDirectionsFilter>;
  synonyms_not?: Maybe<_SynonymDirectionsFilter>;
  synonyms_in?: Maybe<Array<_SynonymDirectionsFilter>>;
  synonyms_not_in?: Maybe<Array<_SynonymDirectionsFilter>>;
  synonyms_some?: Maybe<_SynonymDirectionsFilter>;
  synonyms_none?: Maybe<_SynonymDirectionsFilter>;
  synonyms_single?: Maybe<_SynonymDirectionsFilter>;
  synonyms_every?: Maybe<_SynonymDirectionsFilter>;
};

export type _GeneSymbolSynonymLengthOmittedFilter = {
  AND?: Maybe<Array<_GeneSymbolSynonymLengthOmittedFilter>>;
  OR?: Maybe<Array<_GeneSymbolSynonymLengthOmittedFilter>>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  synonymOf?: Maybe<_OmitLengthFilter>;
};

export type _OmitLengthFilter = {
  AND?: Maybe<Array<_OmitLengthFilter>>;
  OR?: Maybe<Array<_OmitLengthFilter>>;
  sid?: Maybe<Scalars["String"]>;
  sid_not?: Maybe<Scalars["String"]>;
  sid_in?: Maybe<Array<Scalars["String"]>>;
  sid_not_in?: Maybe<Array<Scalars["String"]>>;
  sid_contains?: Maybe<Scalars["String"]>;
  sid_not_contains?: Maybe<Scalars["String"]>;
  sid_starts_with?: Maybe<Scalars["String"]>;
  sid_not_starts_with?: Maybe<Scalars["String"]>;
  sid_ends_with?: Maybe<Scalars["String"]>;
  sid_not_ends_with?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  status_not?: Maybe<Scalars["String"]>;
  status_in?: Maybe<Array<Scalars["String"]>>;
  status_not_in?: Maybe<Array<Scalars["String"]>>;
  status_contains?: Maybe<Scalars["String"]>;
  status_not_contains?: Maybe<Scalars["String"]>;
  status_starts_with?: Maybe<Scalars["String"]>;
  status_not_starts_with?: Maybe<Scalars["String"]>;
  status_ends_with?: Maybe<Scalars["String"]>;
  status_not_ends_with?: Maybe<Scalars["String"]>;
  taxid?: Maybe<Scalars["String"]>;
  taxid_not?: Maybe<Scalars["String"]>;
  taxid_in?: Maybe<Array<Scalars["String"]>>;
  taxid_not_in?: Maybe<Array<Scalars["String"]>>;
  taxid_contains?: Maybe<Scalars["String"]>;
  taxid_not_contains?: Maybe<Scalars["String"]>;
  taxid_starts_with?: Maybe<Scalars["String"]>;
  taxid_not_starts_with?: Maybe<Scalars["String"]>;
  taxid_ends_with?: Maybe<Scalars["String"]>;
  taxid_not_ends_with?: Maybe<Scalars["String"]>;
  synonyms?: Maybe<_SynonymDirectionsFilter>;
  synonyms_not?: Maybe<_SynonymDirectionsFilter>;
  synonyms_in?: Maybe<Array<_SynonymDirectionsFilter>>;
  synonyms_not_in?: Maybe<Array<_SynonymDirectionsFilter>>;
  synonyms_some?: Maybe<_SynonymDirectionsFilter>;
  synonyms_none?: Maybe<_SynonymDirectionsFilter>;
  synonyms_single?: Maybe<_SynonymDirectionsFilter>;
  synonyms_every?: Maybe<_SynonymDirectionsFilter>;
};

export type _GeneSymbolSynonymWordOmittedFilter = {
  AND?: Maybe<Array<_GeneSymbolSynonymWordOmittedFilter>>;
  OR?: Maybe<Array<_GeneSymbolSynonymWordOmittedFilter>>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  synonymOf?: Maybe<_OmitWordFilter>;
};

export type _OmitWordFilter = {
  AND?: Maybe<Array<_OmitWordFilter>>;
  OR?: Maybe<Array<_OmitWordFilter>>;
  sid?: Maybe<Scalars["String"]>;
  sid_not?: Maybe<Scalars["String"]>;
  sid_in?: Maybe<Array<Scalars["String"]>>;
  sid_not_in?: Maybe<Array<Scalars["String"]>>;
  sid_contains?: Maybe<Scalars["String"]>;
  sid_not_contains?: Maybe<Scalars["String"]>;
  sid_starts_with?: Maybe<Scalars["String"]>;
  sid_not_starts_with?: Maybe<Scalars["String"]>;
  sid_ends_with?: Maybe<Scalars["String"]>;
  sid_not_ends_with?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  status_not?: Maybe<Scalars["String"]>;
  status_in?: Maybe<Array<Scalars["String"]>>;
  status_not_in?: Maybe<Array<Scalars["String"]>>;
  status_contains?: Maybe<Scalars["String"]>;
  status_not_contains?: Maybe<Scalars["String"]>;
  status_starts_with?: Maybe<Scalars["String"]>;
  status_not_starts_with?: Maybe<Scalars["String"]>;
  status_ends_with?: Maybe<Scalars["String"]>;
  status_not_ends_with?: Maybe<Scalars["String"]>;
  taxid?: Maybe<Scalars["String"]>;
  taxid_not?: Maybe<Scalars["String"]>;
  taxid_in?: Maybe<Array<Scalars["String"]>>;
  taxid_not_in?: Maybe<Array<Scalars["String"]>>;
  taxid_contains?: Maybe<Scalars["String"]>;
  taxid_not_contains?: Maybe<Scalars["String"]>;
  taxid_starts_with?: Maybe<Scalars["String"]>;
  taxid_not_starts_with?: Maybe<Scalars["String"]>;
  taxid_ends_with?: Maybe<Scalars["String"]>;
  taxid_not_ends_with?: Maybe<Scalars["String"]>;
  synonyms?: Maybe<_SynonymDirectionsFilter>;
  synonyms_not?: Maybe<_SynonymDirectionsFilter>;
  synonyms_in?: Maybe<Array<_SynonymDirectionsFilter>>;
  synonyms_not_in?: Maybe<Array<_SynonymDirectionsFilter>>;
  synonyms_some?: Maybe<_SynonymDirectionsFilter>;
  synonyms_none?: Maybe<_SynonymDirectionsFilter>;
  synonyms_single?: Maybe<_SynonymDirectionsFilter>;
  synonyms_every?: Maybe<_SynonymDirectionsFilter>;
  synonymsWordOmitted?: Maybe<_OmitWordSynonymWordOmittedFilter>;
  synonymsWordOmitted_not?: Maybe<_OmitWordSynonymWordOmittedFilter>;
  synonymsWordOmitted_in?: Maybe<Array<_OmitWordSynonymWordOmittedFilter>>;
  synonymsWordOmitted_not_in?: Maybe<Array<_OmitWordSynonymWordOmittedFilter>>;
  synonymsWordOmitted_some?: Maybe<_OmitWordSynonymWordOmittedFilter>;
  synonymsWordOmitted_none?: Maybe<_OmitWordSynonymWordOmittedFilter>;
  synonymsWordOmitted_single?: Maybe<_OmitWordSynonymWordOmittedFilter>;
  synonymsWordOmitted_every?: Maybe<_OmitWordSynonymWordOmittedFilter>;
};

export type _OmitWordSynonymWordOmittedFilter = {
  AND?: Maybe<Array<_OmitWordSynonymWordOmittedFilter>>;
  OR?: Maybe<Array<_OmitWordSynonymWordOmittedFilter>>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  synonym?: Maybe<_GeneSymbolFilter>;
};

export type _GeneSymbolFromBodyTextMentionsFilter = {
  AND?: Maybe<Array<_GeneSymbolFromBodyTextMentionsFilter>>;
  OR?: Maybe<Array<_GeneSymbolFromBodyTextMentionsFilter>>;
  score?: Maybe<Scalars["Float"]>;
  score_not?: Maybe<Scalars["Float"]>;
  score_in?: Maybe<Array<Scalars["Float"]>>;
  score_not_in?: Maybe<Array<Scalars["Float"]>>;
  score_lt?: Maybe<Scalars["Float"]>;
  score_lte?: Maybe<Scalars["Float"]>;
  score_gt?: Maybe<Scalars["Float"]>;
  score_gte?: Maybe<Scalars["Float"]>;
  fromBodyText?: Maybe<_FromBodyTextFilter>;
};

export type _FromBodyTextFilter = {
  AND?: Maybe<Array<_FromBodyTextFilter>>;
  OR?: Maybe<Array<_FromBodyTextFilter>>;
  text?: Maybe<Scalars["String"]>;
  text_not?: Maybe<Scalars["String"]>;
  text_in?: Maybe<Array<Scalars["String"]>>;
  text_not_in?: Maybe<Array<Scalars["String"]>>;
  text_contains?: Maybe<Scalars["String"]>;
  text_not_contains?: Maybe<Scalars["String"]>;
  text_starts_with?: Maybe<Scalars["String"]>;
  text_not_starts_with?: Maybe<Scalars["String"]>;
  text_ends_with?: Maybe<Scalars["String"]>;
  text_not_ends_with?: Maybe<Scalars["String"]>;
  sequence?: Maybe<Scalars["Int"]>;
  sequence_not?: Maybe<Scalars["Int"]>;
  sequence_in?: Maybe<Array<Scalars["Int"]>>;
  sequence_not_in?: Maybe<Array<Scalars["Int"]>>;
  sequence_lt?: Maybe<Scalars["Int"]>;
  sequence_lte?: Maybe<Scalars["Int"]>;
  sequence_gt?: Maybe<Scalars["Int"]>;
  sequence_gte?: Maybe<Scalars["Int"]>;
  kind?: Maybe<Scalars["String"]>;
  kind_not?: Maybe<Scalars["String"]>;
  kind_in?: Maybe<Array<Scalars["String"]>>;
  kind_not_in?: Maybe<Array<Scalars["String"]>>;
  kind_contains?: Maybe<Scalars["String"]>;
  kind_not_contains?: Maybe<Scalars["String"]>;
  kind_starts_with?: Maybe<Scalars["String"]>;
  kind_not_starts_with?: Maybe<Scalars["String"]>;
  kind_ends_with?: Maybe<Scalars["String"]>;
  kind_not_ends_with?: Maybe<Scalars["String"]>;
  bodyTexts?: Maybe<_BodyTextFilter>;
  bodyTexts_not?: Maybe<_BodyTextFilter>;
  bodyTexts_in?: Maybe<Array<_BodyTextFilter>>;
  bodyTexts_not_in?: Maybe<Array<_BodyTextFilter>>;
  bodyTexts_some?: Maybe<_BodyTextFilter>;
  bodyTexts_none?: Maybe<_BodyTextFilter>;
  bodyTexts_single?: Maybe<_BodyTextFilter>;
  bodyTexts_every?: Maybe<_BodyTextFilter>;
  next?: Maybe<_FromBodyTextFilter>;
  next_not?: Maybe<_FromBodyTextFilter>;
  next_in?: Maybe<Array<_FromBodyTextFilter>>;
  next_not_in?: Maybe<Array<_FromBodyTextFilter>>;
  mentionsGeneSymbols?: Maybe<_FromBodyTextFromBodyTextMentionsFilter>;
  mentionsGeneSymbols_not?: Maybe<_FromBodyTextFromBodyTextMentionsFilter>;
  mentionsGeneSymbols_in?: Maybe<
    Array<_FromBodyTextFromBodyTextMentionsFilter>
  >;
  mentionsGeneSymbols_not_in?: Maybe<
    Array<_FromBodyTextFromBodyTextMentionsFilter>
  >;
  mentionsGeneSymbols_some?: Maybe<_FromBodyTextFromBodyTextMentionsFilter>;
  mentionsGeneSymbols_none?: Maybe<_FromBodyTextFromBodyTextMentionsFilter>;
  mentionsGeneSymbols_single?: Maybe<_FromBodyTextFromBodyTextMentionsFilter>;
  mentionsGeneSymbols_every?: Maybe<_FromBodyTextFromBodyTextMentionsFilter>;
};

export type _BodyTextFilter = {
  AND?: Maybe<Array<_BodyTextFilter>>;
  OR?: Maybe<Array<_BodyTextFilter>>;
  _hash_id?: Maybe<Scalars["ID"]>;
  _hash_id_not?: Maybe<Scalars["ID"]>;
  _hash_id_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_contains?: Maybe<Scalars["ID"]>;
  _hash_id_not_contains?: Maybe<Scalars["ID"]>;
  _hash_id_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_ends_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_ends_with?: Maybe<Scalars["ID"]>;
  section?: Maybe<Scalars["String"]>;
  section_not?: Maybe<Scalars["String"]>;
  section_in?: Maybe<Array<Scalars["String"]>>;
  section_not_in?: Maybe<Array<Scalars["String"]>>;
  section_contains?: Maybe<Scalars["String"]>;
  section_not_contains?: Maybe<Scalars["String"]>;
  section_starts_with?: Maybe<Scalars["String"]>;
  section_not_starts_with?: Maybe<Scalars["String"]>;
  section_ends_with?: Maybe<Scalars["String"]>;
  section_not_ends_with?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  text_not?: Maybe<Scalars["String"]>;
  text_in?: Maybe<Array<Scalars["String"]>>;
  text_not_in?: Maybe<Array<Scalars["String"]>>;
  text_contains?: Maybe<Scalars["String"]>;
  text_not_contains?: Maybe<Scalars["String"]>;
  text_starts_with?: Maybe<Scalars["String"]>;
  text_not_starts_with?: Maybe<Scalars["String"]>;
  text_ends_with?: Maybe<Scalars["String"]>;
  text_not_ends_with?: Maybe<Scalars["String"]>;
  bodyTextCollections?: Maybe<_BodyTextCollectionFilter>;
  bodyTextCollections_not?: Maybe<_BodyTextCollectionFilter>;
  bodyTextCollections_in?: Maybe<Array<_BodyTextCollectionFilter>>;
  bodyTextCollections_not_in?: Maybe<Array<_BodyTextCollectionFilter>>;
  bodyTextCollections_some?: Maybe<_BodyTextCollectionFilter>;
  bodyTextCollections_none?: Maybe<_BodyTextCollectionFilter>;
  bodyTextCollections_single?: Maybe<_BodyTextCollectionFilter>;
  bodyTextCollections_every?: Maybe<_BodyTextCollectionFilter>;
  fragments?: Maybe<_FromBodyTextFilter>;
  fragments_not?: Maybe<_FromBodyTextFilter>;
  fragments_in?: Maybe<Array<_FromBodyTextFilter>>;
  fragments_not_in?: Maybe<Array<_FromBodyTextFilter>>;
  fragments_some?: Maybe<_FromBodyTextFilter>;
  fragments_none?: Maybe<_FromBodyTextFilter>;
  fragments_single?: Maybe<_FromBodyTextFilter>;
  fragments_every?: Maybe<_FromBodyTextFilter>;
  citations?: Maybe<_BodyTextHasCitationFilter>;
  citations_not?: Maybe<_BodyTextHasCitationFilter>;
  citations_in?: Maybe<Array<_BodyTextHasCitationFilter>>;
  citations_not_in?: Maybe<Array<_BodyTextHasCitationFilter>>;
  citations_some?: Maybe<_BodyTextHasCitationFilter>;
  citations_none?: Maybe<_BodyTextHasCitationFilter>;
  citations_single?: Maybe<_BodyTextHasCitationFilter>;
  citations_every?: Maybe<_BodyTextHasCitationFilter>;
};

export type _BodyTextCollectionFilter = {
  AND?: Maybe<Array<_BodyTextCollectionFilter>>;
  OR?: Maybe<Array<_BodyTextCollectionFilter>>;
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  papers?: Maybe<_PaperFilter>;
  papers_not?: Maybe<_PaperFilter>;
  papers_in?: Maybe<Array<_PaperFilter>>;
  papers_not_in?: Maybe<Array<_PaperFilter>>;
  papers_some?: Maybe<_PaperFilter>;
  papers_none?: Maybe<_PaperFilter>;
  papers_single?: Maybe<_PaperFilter>;
  papers_every?: Maybe<_PaperFilter>;
  bodyTexts?: Maybe<_BodyTextCollectionHasBodyTextFilter>;
  bodyTexts_not?: Maybe<_BodyTextCollectionHasBodyTextFilter>;
  bodyTexts_in?: Maybe<Array<_BodyTextCollectionHasBodyTextFilter>>;
  bodyTexts_not_in?: Maybe<Array<_BodyTextCollectionHasBodyTextFilter>>;
  bodyTexts_some?: Maybe<_BodyTextCollectionHasBodyTextFilter>;
  bodyTexts_none?: Maybe<_BodyTextCollectionHasBodyTextFilter>;
  bodyTexts_single?: Maybe<_BodyTextCollectionHasBodyTextFilter>;
  bodyTexts_every?: Maybe<_BodyTextCollectionHasBodyTextFilter>;
};

export type _PaperFilter = {
  AND?: Maybe<Array<_PaperFilter>>;
  OR?: Maybe<Array<_PaperFilter>>;
  _hash_id?: Maybe<Scalars["ID"]>;
  _hash_id_not?: Maybe<Scalars["ID"]>;
  _hash_id_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_contains?: Maybe<Scalars["ID"]>;
  _hash_id_not_contains?: Maybe<Scalars["ID"]>;
  _hash_id_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_ends_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_ends_with?: Maybe<Scalars["ID"]>;
  cord_uid?: Maybe<Scalars["ID"]>;
  cord_uid_not?: Maybe<Scalars["ID"]>;
  cord_uid_in?: Maybe<Array<Scalars["ID"]>>;
  cord_uid_not_in?: Maybe<Array<Scalars["ID"]>>;
  cord_uid_contains?: Maybe<Scalars["ID"]>;
  cord_uid_not_contains?: Maybe<Scalars["ID"]>;
  cord_uid_starts_with?: Maybe<Scalars["ID"]>;
  cord_uid_not_starts_with?: Maybe<Scalars["ID"]>;
  cord_uid_ends_with?: Maybe<Scalars["ID"]>;
  cord_uid_not_ends_with?: Maybe<Scalars["ID"]>;
  journal?: Maybe<Scalars["String"]>;
  journal_not?: Maybe<Scalars["String"]>;
  journal_in?: Maybe<Array<Scalars["String"]>>;
  journal_not_in?: Maybe<Array<Scalars["String"]>>;
  journal_contains?: Maybe<Scalars["String"]>;
  journal_not_contains?: Maybe<Scalars["String"]>;
  journal_starts_with?: Maybe<Scalars["String"]>;
  journal_not_starts_with?: Maybe<Scalars["String"]>;
  journal_ends_with?: Maybe<Scalars["String"]>;
  journal_not_ends_with?: Maybe<Scalars["String"]>;
  publish_time?: Maybe<Scalars["String"]>;
  publish_time_not?: Maybe<Scalars["String"]>;
  publish_time_in?: Maybe<Array<Scalars["String"]>>;
  publish_time_not_in?: Maybe<Array<Scalars["String"]>>;
  publish_time_contains?: Maybe<Scalars["String"]>;
  publish_time_not_contains?: Maybe<Scalars["String"]>;
  publish_time_starts_with?: Maybe<Scalars["String"]>;
  publish_time_not_starts_with?: Maybe<Scalars["String"]>;
  publish_time_ends_with?: Maybe<Scalars["String"]>;
  publish_time_not_ends_with?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  title_not?: Maybe<Scalars["String"]>;
  title_in?: Maybe<Array<Scalars["String"]>>;
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  title_contains?: Maybe<Scalars["String"]>;
  title_not_contains?: Maybe<Scalars["String"]>;
  title_starts_with?: Maybe<Scalars["String"]>;
  title_not_starts_with?: Maybe<Scalars["String"]>;
  title_ends_with?: Maybe<Scalars["String"]>;
  title_not_ends_with?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  url_not?: Maybe<Scalars["String"]>;
  url_in?: Maybe<Array<Scalars["String"]>>;
  url_not_in?: Maybe<Array<Scalars["String"]>>;
  url_contains?: Maybe<Scalars["String"]>;
  url_not_contains?: Maybe<Scalars["String"]>;
  url_starts_with?: Maybe<Scalars["String"]>;
  url_not_starts_with?: Maybe<Scalars["String"]>;
  url_ends_with?: Maybe<Scalars["String"]>;
  url_not_ends_with?: Maybe<Scalars["String"]>;
  authorCollection?: Maybe<_AuthorCollectionFilter>;
  authorCollection_not?: Maybe<_AuthorCollectionFilter>;
  authorCollection_in?: Maybe<Array<_AuthorCollectionFilter>>;
  authorCollection_not_in?: Maybe<Array<_AuthorCollectionFilter>>;
  authorCollection_some?: Maybe<_AuthorCollectionFilter>;
  authorCollection_none?: Maybe<_AuthorCollectionFilter>;
  authorCollection_single?: Maybe<_AuthorCollectionFilter>;
  authorCollection_every?: Maybe<_AuthorCollectionFilter>;
  abstractCollection?: Maybe<_AbstractCollectionFilter>;
  abstractCollection_not?: Maybe<_AbstractCollectionFilter>;
  abstractCollection_in?: Maybe<Array<_AbstractCollectionFilter>>;
  abstractCollection_not_in?: Maybe<Array<_AbstractCollectionFilter>>;
  abstractCollection_some?: Maybe<_AbstractCollectionFilter>;
  abstractCollection_none?: Maybe<_AbstractCollectionFilter>;
  abstractCollection_single?: Maybe<_AbstractCollectionFilter>;
  abstractCollection_every?: Maybe<_AbstractCollectionFilter>;
  referenceCollection?: Maybe<_ReferenceCollectionFilter>;
  referenceCollection_not?: Maybe<_ReferenceCollectionFilter>;
  referenceCollection_in?: Maybe<Array<_ReferenceCollectionFilter>>;
  referenceCollection_not_in?: Maybe<Array<_ReferenceCollectionFilter>>;
  referenceCollection_some?: Maybe<_ReferenceCollectionFilter>;
  referenceCollection_none?: Maybe<_ReferenceCollectionFilter>;
  referenceCollection_single?: Maybe<_ReferenceCollectionFilter>;
  referenceCollection_every?: Maybe<_ReferenceCollectionFilter>;
  bodyTextCollection?: Maybe<_BodyTextCollectionFilter>;
  bodyTextCollection_not?: Maybe<_BodyTextCollectionFilter>;
  bodyTextCollection_in?: Maybe<Array<_BodyTextCollectionFilter>>;
  bodyTextCollection_not_in?: Maybe<Array<_BodyTextCollectionFilter>>;
  bodyTextCollection_some?: Maybe<_BodyTextCollectionFilter>;
  bodyTextCollection_none?: Maybe<_BodyTextCollectionFilter>;
  bodyTextCollection_single?: Maybe<_BodyTextCollectionFilter>;
  bodyTextCollection_every?: Maybe<_BodyTextCollectionFilter>;
  paperId?: Maybe<_PaperHasPaperIdFilter>;
  paperId_not?: Maybe<_PaperHasPaperIdFilter>;
  paperId_in?: Maybe<Array<_PaperHasPaperIdFilter>>;
  paperId_not_in?: Maybe<Array<_PaperHasPaperIdFilter>>;
  paperId_some?: Maybe<_PaperHasPaperIdFilter>;
  paperId_none?: Maybe<_PaperHasPaperIdFilter>;
  paperId_single?: Maybe<_PaperHasPaperIdFilter>;
  paperId_every?: Maybe<_PaperHasPaperIdFilter>;
};

export type _AuthorCollectionFilter = {
  AND?: Maybe<Array<_AuthorCollectionFilter>>;
  OR?: Maybe<Array<_AuthorCollectionFilter>>;
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  papers?: Maybe<_PaperFilter>;
  papers_not?: Maybe<_PaperFilter>;
  papers_in?: Maybe<Array<_PaperFilter>>;
  papers_not_in?: Maybe<Array<_PaperFilter>>;
  papers_some?: Maybe<_PaperFilter>;
  papers_none?: Maybe<_PaperFilter>;
  papers_single?: Maybe<_PaperFilter>;
  papers_every?: Maybe<_PaperFilter>;
  authors?: Maybe<_AuthorCollectionHasAuthorFilter>;
  authors_not?: Maybe<_AuthorCollectionHasAuthorFilter>;
  authors_in?: Maybe<Array<_AuthorCollectionHasAuthorFilter>>;
  authors_not_in?: Maybe<Array<_AuthorCollectionHasAuthorFilter>>;
  authors_some?: Maybe<_AuthorCollectionHasAuthorFilter>;
  authors_none?: Maybe<_AuthorCollectionHasAuthorFilter>;
  authors_single?: Maybe<_AuthorCollectionHasAuthorFilter>;
  authors_every?: Maybe<_AuthorCollectionHasAuthorFilter>;
};

export type _AuthorCollectionHasAuthorFilter = {
  AND?: Maybe<Array<_AuthorCollectionHasAuthorFilter>>;
  OR?: Maybe<Array<_AuthorCollectionHasAuthorFilter>>;
  position?: Maybe<Scalars["Int"]>;
  position_not?: Maybe<Scalars["Int"]>;
  position_in?: Maybe<Array<Scalars["Int"]>>;
  position_not_in?: Maybe<Array<Scalars["Int"]>>;
  position_lt?: Maybe<Scalars["Int"]>;
  position_lte?: Maybe<Scalars["Int"]>;
  position_gt?: Maybe<Scalars["Int"]>;
  position_gte?: Maybe<Scalars["Int"]>;
  author?: Maybe<_AuthorFilter>;
};

export type _AuthorFilter = {
  AND?: Maybe<Array<_AuthorFilter>>;
  OR?: Maybe<Array<_AuthorFilter>>;
  _hash_id?: Maybe<Scalars["ID"]>;
  _hash_id_not?: Maybe<Scalars["ID"]>;
  _hash_id_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_contains?: Maybe<Scalars["ID"]>;
  _hash_id_not_contains?: Maybe<Scalars["ID"]>;
  _hash_id_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_ends_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_ends_with?: Maybe<Scalars["ID"]>;
  email?: Maybe<Scalars["String"]>;
  email_not?: Maybe<Scalars["String"]>;
  email_in?: Maybe<Array<Scalars["String"]>>;
  email_not_in?: Maybe<Array<Scalars["String"]>>;
  email_contains?: Maybe<Scalars["String"]>;
  email_not_contains?: Maybe<Scalars["String"]>;
  email_starts_with?: Maybe<Scalars["String"]>;
  email_not_starts_with?: Maybe<Scalars["String"]>;
  email_ends_with?: Maybe<Scalars["String"]>;
  email_not_ends_with?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["String"]>;
  first_not?: Maybe<Scalars["String"]>;
  first_in?: Maybe<Array<Scalars["String"]>>;
  first_not_in?: Maybe<Array<Scalars["String"]>>;
  first_contains?: Maybe<Scalars["String"]>;
  first_not_contains?: Maybe<Scalars["String"]>;
  first_starts_with?: Maybe<Scalars["String"]>;
  first_not_starts_with?: Maybe<Scalars["String"]>;
  first_ends_with?: Maybe<Scalars["String"]>;
  first_not_ends_with?: Maybe<Scalars["String"]>;
  fist?: Maybe<Scalars["String"]>;
  fist_not?: Maybe<Scalars["String"]>;
  fist_in?: Maybe<Array<Scalars["String"]>>;
  fist_not_in?: Maybe<Array<Scalars["String"]>>;
  fist_contains?: Maybe<Scalars["String"]>;
  fist_not_contains?: Maybe<Scalars["String"]>;
  fist_starts_with?: Maybe<Scalars["String"]>;
  fist_not_starts_with?: Maybe<Scalars["String"]>;
  fist_ends_with?: Maybe<Scalars["String"]>;
  fist_not_ends_with?: Maybe<Scalars["String"]>;
  last?: Maybe<Scalars["String"]>;
  last_not?: Maybe<Scalars["String"]>;
  last_in?: Maybe<Array<Scalars["String"]>>;
  last_not_in?: Maybe<Array<Scalars["String"]>>;
  last_contains?: Maybe<Scalars["String"]>;
  last_not_contains?: Maybe<Scalars["String"]>;
  last_starts_with?: Maybe<Scalars["String"]>;
  last_not_starts_with?: Maybe<Scalars["String"]>;
  last_ends_with?: Maybe<Scalars["String"]>;
  last_not_ends_with?: Maybe<Scalars["String"]>;
  middle?: Maybe<Scalars["String"]>;
  middle_not?: Maybe<Scalars["String"]>;
  middle_in?: Maybe<Array<Scalars["String"]>>;
  middle_not_in?: Maybe<Array<Scalars["String"]>>;
  middle_contains?: Maybe<Scalars["String"]>;
  middle_not_contains?: Maybe<Scalars["String"]>;
  middle_starts_with?: Maybe<Scalars["String"]>;
  middle_not_starts_with?: Maybe<Scalars["String"]>;
  middle_ends_with?: Maybe<Scalars["String"]>;
  middle_not_ends_with?: Maybe<Scalars["String"]>;
  suffix?: Maybe<Scalars["String"]>;
  suffix_not?: Maybe<Scalars["String"]>;
  suffix_in?: Maybe<Array<Scalars["String"]>>;
  suffix_not_in?: Maybe<Array<Scalars["String"]>>;
  suffix_contains?: Maybe<Scalars["String"]>;
  suffix_not_contains?: Maybe<Scalars["String"]>;
  suffix_starts_with?: Maybe<Scalars["String"]>;
  suffix_not_starts_with?: Maybe<Scalars["String"]>;
  suffix_ends_with?: Maybe<Scalars["String"]>;
  suffix_not_ends_with?: Maybe<Scalars["String"]>;
  collections?: Maybe<_AuthorCollectionFilter>;
  collections_not?: Maybe<_AuthorCollectionFilter>;
  collections_in?: Maybe<Array<_AuthorCollectionFilter>>;
  collections_not_in?: Maybe<Array<_AuthorCollectionFilter>>;
  collections_some?: Maybe<_AuthorCollectionFilter>;
  collections_none?: Maybe<_AuthorCollectionFilter>;
  collections_single?: Maybe<_AuthorCollectionFilter>;
  collections_every?: Maybe<_AuthorCollectionFilter>;
  affiliation?: Maybe<_AffiliationFilter>;
  affiliation_not?: Maybe<_AffiliationFilter>;
  affiliation_in?: Maybe<Array<_AffiliationFilter>>;
  affiliation_not_in?: Maybe<Array<_AffiliationFilter>>;
  affiliation_some?: Maybe<_AffiliationFilter>;
  affiliation_none?: Maybe<_AffiliationFilter>;
  affiliation_single?: Maybe<_AffiliationFilter>;
  affiliation_every?: Maybe<_AffiliationFilter>;
};

export type _AffiliationFilter = {
  AND?: Maybe<Array<_AffiliationFilter>>;
  OR?: Maybe<Array<_AffiliationFilter>>;
  _hash_id?: Maybe<Scalars["ID"]>;
  _hash_id_not?: Maybe<Scalars["ID"]>;
  _hash_id_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_contains?: Maybe<Scalars["ID"]>;
  _hash_id_not_contains?: Maybe<Scalars["ID"]>;
  _hash_id_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_ends_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_ends_with?: Maybe<Scalars["ID"]>;
  institution?: Maybe<Scalars["String"]>;
  institution_not?: Maybe<Scalars["String"]>;
  institution_in?: Maybe<Array<Scalars["String"]>>;
  institution_not_in?: Maybe<Array<Scalars["String"]>>;
  institution_contains?: Maybe<Scalars["String"]>;
  institution_not_contains?: Maybe<Scalars["String"]>;
  institution_starts_with?: Maybe<Scalars["String"]>;
  institution_not_starts_with?: Maybe<Scalars["String"]>;
  institution_ends_with?: Maybe<Scalars["String"]>;
  institution_not_ends_with?: Maybe<Scalars["String"]>;
  laboratory?: Maybe<Scalars["String"]>;
  laboratory_not?: Maybe<Scalars["String"]>;
  laboratory_in?: Maybe<Array<Scalars["String"]>>;
  laboratory_not_in?: Maybe<Array<Scalars["String"]>>;
  laboratory_contains?: Maybe<Scalars["String"]>;
  laboratory_not_contains?: Maybe<Scalars["String"]>;
  laboratory_starts_with?: Maybe<Scalars["String"]>;
  laboratory_not_starts_with?: Maybe<Scalars["String"]>;
  laboratory_ends_with?: Maybe<Scalars["String"]>;
  laboratory_not_ends_with?: Maybe<Scalars["String"]>;
  authors?: Maybe<_AuthorFilter>;
  authors_not?: Maybe<_AuthorFilter>;
  authors_in?: Maybe<Array<_AuthorFilter>>;
  authors_not_in?: Maybe<Array<_AuthorFilter>>;
  authors_some?: Maybe<_AuthorFilter>;
  authors_none?: Maybe<_AuthorFilter>;
  authors_single?: Maybe<_AuthorFilter>;
  authors_every?: Maybe<_AuthorFilter>;
  affiliation_has_location?: Maybe<_LocationFilter>;
  affiliation_has_location_not?: Maybe<_LocationFilter>;
  affiliation_has_location_in?: Maybe<Array<_LocationFilter>>;
  affiliation_has_location_not_in?: Maybe<Array<_LocationFilter>>;
  affiliation_has_location_some?: Maybe<_LocationFilter>;
  affiliation_has_location_none?: Maybe<_LocationFilter>;
  affiliation_has_location_single?: Maybe<_LocationFilter>;
  affiliation_has_location_every?: Maybe<_LocationFilter>;
};

export type _LocationFilter = {
  AND?: Maybe<Array<_LocationFilter>>;
  OR?: Maybe<Array<_LocationFilter>>;
  _hash_id?: Maybe<Scalars["ID"]>;
  _hash_id_not?: Maybe<Scalars["ID"]>;
  _hash_id_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_contains?: Maybe<Scalars["ID"]>;
  _hash_id_not_contains?: Maybe<Scalars["ID"]>;
  _hash_id_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_ends_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_ends_with?: Maybe<Scalars["ID"]>;
  addrLine?: Maybe<Scalars["String"]>;
  addrLine_not?: Maybe<Scalars["String"]>;
  addrLine_in?: Maybe<Array<Scalars["String"]>>;
  addrLine_not_in?: Maybe<Array<Scalars["String"]>>;
  addrLine_contains?: Maybe<Scalars["String"]>;
  addrLine_not_contains?: Maybe<Scalars["String"]>;
  addrLine_starts_with?: Maybe<Scalars["String"]>;
  addrLine_not_starts_with?: Maybe<Scalars["String"]>;
  addrLine_ends_with?: Maybe<Scalars["String"]>;
  addrLine_not_ends_with?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  country_not?: Maybe<Scalars["String"]>;
  country_in?: Maybe<Array<Scalars["String"]>>;
  country_not_in?: Maybe<Array<Scalars["String"]>>;
  country_contains?: Maybe<Scalars["String"]>;
  country_not_contains?: Maybe<Scalars["String"]>;
  country_starts_with?: Maybe<Scalars["String"]>;
  country_not_starts_with?: Maybe<Scalars["String"]>;
  country_ends_with?: Maybe<Scalars["String"]>;
  country_not_ends_with?: Maybe<Scalars["String"]>;
  postBox?: Maybe<Scalars["String"]>;
  postBox_not?: Maybe<Scalars["String"]>;
  postBox_in?: Maybe<Array<Scalars["String"]>>;
  postBox_not_in?: Maybe<Array<Scalars["String"]>>;
  postBox_contains?: Maybe<Scalars["String"]>;
  postBox_not_contains?: Maybe<Scalars["String"]>;
  postBox_starts_with?: Maybe<Scalars["String"]>;
  postBox_not_starts_with?: Maybe<Scalars["String"]>;
  postBox_ends_with?: Maybe<Scalars["String"]>;
  postBox_not_ends_with?: Maybe<Scalars["String"]>;
  postCode?: Maybe<Scalars["String"]>;
  postCode_not?: Maybe<Scalars["String"]>;
  postCode_in?: Maybe<Array<Scalars["String"]>>;
  postCode_not_in?: Maybe<Array<Scalars["String"]>>;
  postCode_contains?: Maybe<Scalars["String"]>;
  postCode_not_contains?: Maybe<Scalars["String"]>;
  postCode_starts_with?: Maybe<Scalars["String"]>;
  postCode_not_starts_with?: Maybe<Scalars["String"]>;
  postCode_ends_with?: Maybe<Scalars["String"]>;
  postCode_not_ends_with?: Maybe<Scalars["String"]>;
  region?: Maybe<Scalars["String"]>;
  region_not?: Maybe<Scalars["String"]>;
  region_in?: Maybe<Array<Scalars["String"]>>;
  region_not_in?: Maybe<Array<Scalars["String"]>>;
  region_contains?: Maybe<Scalars["String"]>;
  region_not_contains?: Maybe<Scalars["String"]>;
  region_starts_with?: Maybe<Scalars["String"]>;
  region_not_starts_with?: Maybe<Scalars["String"]>;
  region_ends_with?: Maybe<Scalars["String"]>;
  region_not_ends_with?: Maybe<Scalars["String"]>;
  settlement?: Maybe<Scalars["String"]>;
  settlement_not?: Maybe<Scalars["String"]>;
  settlement_in?: Maybe<Array<Scalars["String"]>>;
  settlement_not_in?: Maybe<Array<Scalars["String"]>>;
  settlement_contains?: Maybe<Scalars["String"]>;
  settlement_not_contains?: Maybe<Scalars["String"]>;
  settlement_starts_with?: Maybe<Scalars["String"]>;
  settlement_not_starts_with?: Maybe<Scalars["String"]>;
  settlement_ends_with?: Maybe<Scalars["String"]>;
  settlement_not_ends_with?: Maybe<Scalars["String"]>;
  affiliations?: Maybe<_AffiliationFilter>;
  affiliations_not?: Maybe<_AffiliationFilter>;
  affiliations_in?: Maybe<Array<_AffiliationFilter>>;
  affiliations_not_in?: Maybe<Array<_AffiliationFilter>>;
  affiliations_some?: Maybe<_AffiliationFilter>;
  affiliations_none?: Maybe<_AffiliationFilter>;
  affiliations_single?: Maybe<_AffiliationFilter>;
  affiliations_every?: Maybe<_AffiliationFilter>;
};

export type _AbstractCollectionFilter = {
  AND?: Maybe<Array<_AbstractCollectionFilter>>;
  OR?: Maybe<Array<_AbstractCollectionFilter>>;
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  papers?: Maybe<_PaperFilter>;
  papers_not?: Maybe<_PaperFilter>;
  papers_in?: Maybe<Array<_PaperFilter>>;
  papers_not_in?: Maybe<Array<_PaperFilter>>;
  papers_some?: Maybe<_PaperFilter>;
  papers_none?: Maybe<_PaperFilter>;
  papers_single?: Maybe<_PaperFilter>;
  papers_every?: Maybe<_PaperFilter>;
  abstracts?: Maybe<_AbstractCollectionHasAbstractFilter>;
  abstracts_not?: Maybe<_AbstractCollectionHasAbstractFilter>;
  abstracts_in?: Maybe<Array<_AbstractCollectionHasAbstractFilter>>;
  abstracts_not_in?: Maybe<Array<_AbstractCollectionHasAbstractFilter>>;
  abstracts_some?: Maybe<_AbstractCollectionHasAbstractFilter>;
  abstracts_none?: Maybe<_AbstractCollectionHasAbstractFilter>;
  abstracts_single?: Maybe<_AbstractCollectionHasAbstractFilter>;
  abstracts_every?: Maybe<_AbstractCollectionHasAbstractFilter>;
};

export type _AbstractCollectionHasAbstractFilter = {
  AND?: Maybe<Array<_AbstractCollectionHasAbstractFilter>>;
  OR?: Maybe<Array<_AbstractCollectionHasAbstractFilter>>;
  position?: Maybe<Scalars["Int"]>;
  position_not?: Maybe<Scalars["Int"]>;
  position_in?: Maybe<Array<Scalars["Int"]>>;
  position_not_in?: Maybe<Array<Scalars["Int"]>>;
  position_lt?: Maybe<Scalars["Int"]>;
  position_lte?: Maybe<Scalars["Int"]>;
  position_gt?: Maybe<Scalars["Int"]>;
  position_gte?: Maybe<Scalars["Int"]>;
  abstract?: Maybe<_AbstractFilter>;
};

export type _AbstractFilter = {
  AND?: Maybe<Array<_AbstractFilter>>;
  OR?: Maybe<Array<_AbstractFilter>>;
  _hash_id?: Maybe<Scalars["ID"]>;
  _hash_id_not?: Maybe<Scalars["ID"]>;
  _hash_id_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_contains?: Maybe<Scalars["ID"]>;
  _hash_id_not_contains?: Maybe<Scalars["ID"]>;
  _hash_id_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_ends_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_ends_with?: Maybe<Scalars["ID"]>;
  section?: Maybe<Scalars["String"]>;
  section_not?: Maybe<Scalars["String"]>;
  section_in?: Maybe<Array<Scalars["String"]>>;
  section_not_in?: Maybe<Array<Scalars["String"]>>;
  section_contains?: Maybe<Scalars["String"]>;
  section_not_contains?: Maybe<Scalars["String"]>;
  section_starts_with?: Maybe<Scalars["String"]>;
  section_not_starts_with?: Maybe<Scalars["String"]>;
  section_ends_with?: Maybe<Scalars["String"]>;
  section_not_ends_with?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  text_not?: Maybe<Scalars["String"]>;
  text_in?: Maybe<Array<Scalars["String"]>>;
  text_not_in?: Maybe<Array<Scalars["String"]>>;
  text_contains?: Maybe<Scalars["String"]>;
  text_not_contains?: Maybe<Scalars["String"]>;
  text_starts_with?: Maybe<Scalars["String"]>;
  text_not_starts_with?: Maybe<Scalars["String"]>;
  text_ends_with?: Maybe<Scalars["String"]>;
  text_not_ends_with?: Maybe<Scalars["String"]>;
  fragments?: Maybe<_FromAbstractFilter>;
  fragments_not?: Maybe<_FromAbstractFilter>;
  fragments_in?: Maybe<Array<_FromAbstractFilter>>;
  fragments_not_in?: Maybe<Array<_FromAbstractFilter>>;
  fragments_some?: Maybe<_FromAbstractFilter>;
  fragments_none?: Maybe<_FromAbstractFilter>;
  fragments_single?: Maybe<_FromAbstractFilter>;
  fragments_every?: Maybe<_FromAbstractFilter>;
  collections?: Maybe<_AbstractHasAbstractFilter>;
  collections_not?: Maybe<_AbstractHasAbstractFilter>;
  collections_in?: Maybe<Array<_AbstractHasAbstractFilter>>;
  collections_not_in?: Maybe<Array<_AbstractHasAbstractFilter>>;
  collections_some?: Maybe<_AbstractHasAbstractFilter>;
  collections_none?: Maybe<_AbstractHasAbstractFilter>;
  collections_single?: Maybe<_AbstractHasAbstractFilter>;
  collections_every?: Maybe<_AbstractHasAbstractFilter>;
  citation?: Maybe<_AbstractAbstractHasCitationFilter>;
  citation_not?: Maybe<_AbstractAbstractHasCitationFilter>;
  citation_in?: Maybe<Array<_AbstractAbstractHasCitationFilter>>;
  citation_not_in?: Maybe<Array<_AbstractAbstractHasCitationFilter>>;
  citation_some?: Maybe<_AbstractAbstractHasCitationFilter>;
  citation_none?: Maybe<_AbstractAbstractHasCitationFilter>;
  citation_single?: Maybe<_AbstractAbstractHasCitationFilter>;
  citation_every?: Maybe<_AbstractAbstractHasCitationFilter>;
  mentions?: Maybe<_AbstractAbstractMentionsFilter>;
  mentions_not?: Maybe<_AbstractAbstractMentionsFilter>;
  mentions_in?: Maybe<Array<_AbstractAbstractMentionsFilter>>;
  mentions_not_in?: Maybe<Array<_AbstractAbstractMentionsFilter>>;
  mentions_some?: Maybe<_AbstractAbstractMentionsFilter>;
  mentions_none?: Maybe<_AbstractAbstractMentionsFilter>;
  mentions_single?: Maybe<_AbstractAbstractMentionsFilter>;
  mentions_every?: Maybe<_AbstractAbstractMentionsFilter>;
};

export type _FromAbstractFilter = {
  AND?: Maybe<Array<_FromAbstractFilter>>;
  OR?: Maybe<Array<_FromAbstractFilter>>;
  text?: Maybe<Scalars["String"]>;
  text_not?: Maybe<Scalars["String"]>;
  text_in?: Maybe<Array<Scalars["String"]>>;
  text_not_in?: Maybe<Array<Scalars["String"]>>;
  text_contains?: Maybe<Scalars["String"]>;
  text_not_contains?: Maybe<Scalars["String"]>;
  text_starts_with?: Maybe<Scalars["String"]>;
  text_not_starts_with?: Maybe<Scalars["String"]>;
  text_ends_with?: Maybe<Scalars["String"]>;
  text_not_ends_with?: Maybe<Scalars["String"]>;
  sequence?: Maybe<Scalars["Int"]>;
  sequence_not?: Maybe<Scalars["Int"]>;
  sequence_in?: Maybe<Array<Scalars["Int"]>>;
  sequence_not_in?: Maybe<Array<Scalars["Int"]>>;
  sequence_lt?: Maybe<Scalars["Int"]>;
  sequence_lte?: Maybe<Scalars["Int"]>;
  sequence_gt?: Maybe<Scalars["Int"]>;
  sequence_gte?: Maybe<Scalars["Int"]>;
  kind?: Maybe<Scalars["String"]>;
  kind_not?: Maybe<Scalars["String"]>;
  kind_in?: Maybe<Array<Scalars["String"]>>;
  kind_not_in?: Maybe<Array<Scalars["String"]>>;
  kind_contains?: Maybe<Scalars["String"]>;
  kind_not_contains?: Maybe<Scalars["String"]>;
  kind_starts_with?: Maybe<Scalars["String"]>;
  kind_not_starts_with?: Maybe<Scalars["String"]>;
  kind_ends_with?: Maybe<Scalars["String"]>;
  kind_not_ends_with?: Maybe<Scalars["String"]>;
  next?: Maybe<_FromAbstractFilter>;
  next_not?: Maybe<_FromAbstractFilter>;
  next_in?: Maybe<Array<_FromAbstractFilter>>;
  next_not_in?: Maybe<Array<_FromAbstractFilter>>;
  abstracts?: Maybe<_AbstractFilter>;
  abstracts_not?: Maybe<_AbstractFilter>;
  abstracts_in?: Maybe<Array<_AbstractFilter>>;
  abstracts_not_in?: Maybe<Array<_AbstractFilter>>;
  abstracts_some?: Maybe<_AbstractFilter>;
  abstracts_none?: Maybe<_AbstractFilter>;
  abstracts_single?: Maybe<_AbstractFilter>;
  abstracts_every?: Maybe<_AbstractFilter>;
  mentionsGeneSymbols?: Maybe<_FromAbstractFromAbstractMentionsFilter>;
  mentionsGeneSymbols_not?: Maybe<_FromAbstractFromAbstractMentionsFilter>;
  mentionsGeneSymbols_in?: Maybe<
    Array<_FromAbstractFromAbstractMentionsFilter>
  >;
  mentionsGeneSymbols_not_in?: Maybe<
    Array<_FromAbstractFromAbstractMentionsFilter>
  >;
  mentionsGeneSymbols_some?: Maybe<_FromAbstractFromAbstractMentionsFilter>;
  mentionsGeneSymbols_none?: Maybe<_FromAbstractFromAbstractMentionsFilter>;
  mentionsGeneSymbols_single?: Maybe<_FromAbstractFromAbstractMentionsFilter>;
  mentionsGeneSymbols_every?: Maybe<_FromAbstractFromAbstractMentionsFilter>;
};

export type _FromAbstractFromAbstractMentionsFilter = {
  AND?: Maybe<Array<_FromAbstractFromAbstractMentionsFilter>>;
  OR?: Maybe<Array<_FromAbstractFromAbstractMentionsFilter>>;
  score?: Maybe<Scalars["Float"]>;
  score_not?: Maybe<Scalars["Float"]>;
  score_in?: Maybe<Array<Scalars["Float"]>>;
  score_not_in?: Maybe<Array<Scalars["Float"]>>;
  score_lt?: Maybe<Scalars["Float"]>;
  score_lte?: Maybe<Scalars["Float"]>;
  score_gt?: Maybe<Scalars["Float"]>;
  score_gte?: Maybe<Scalars["Float"]>;
  geneSymbol?: Maybe<_GeneSymbolFilter>;
};

export type _AbstractHasAbstractFilter = {
  AND?: Maybe<Array<_AbstractHasAbstractFilter>>;
  OR?: Maybe<Array<_AbstractHasAbstractFilter>>;
  position?: Maybe<Scalars["Int"]>;
  position_not?: Maybe<Scalars["Int"]>;
  position_in?: Maybe<Array<Scalars["Int"]>>;
  position_not_in?: Maybe<Array<Scalars["Int"]>>;
  position_lt?: Maybe<Scalars["Int"]>;
  position_lte?: Maybe<Scalars["Int"]>;
  position_gt?: Maybe<Scalars["Int"]>;
  position_gte?: Maybe<Scalars["Int"]>;
  collection?: Maybe<_AbstractCollectionFilter>;
};

export type _AbstractAbstractHasCitationFilter = {
  AND?: Maybe<Array<_AbstractAbstractHasCitationFilter>>;
  OR?: Maybe<Array<_AbstractAbstractHasCitationFilter>>;
  position?: Maybe<Scalars["Int"]>;
  position_not?: Maybe<Scalars["Int"]>;
  position_in?: Maybe<Array<Scalars["Int"]>>;
  position_not_in?: Maybe<Array<Scalars["Int"]>>;
  position_lt?: Maybe<Scalars["Int"]>;
  position_lte?: Maybe<Scalars["Int"]>;
  position_gt?: Maybe<Scalars["Int"]>;
  position_gte?: Maybe<Scalars["Int"]>;
  citation?: Maybe<_CitationFilter>;
};

export type _CitationFilter = {
  AND?: Maybe<Array<_CitationFilter>>;
  OR?: Maybe<Array<_CitationFilter>>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  _hash_id?: Maybe<Scalars["ID"]>;
  _hash_id_not?: Maybe<Scalars["ID"]>;
  _hash_id_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_contains?: Maybe<Scalars["ID"]>;
  _hash_id_not_contains?: Maybe<Scalars["ID"]>;
  _hash_id_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_ends_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_ends_with?: Maybe<Scalars["ID"]>;
  end?: Maybe<Scalars["Int"]>;
  end_not?: Maybe<Scalars["Int"]>;
  end_in?: Maybe<Array<Scalars["Int"]>>;
  end_not_in?: Maybe<Array<Scalars["Int"]>>;
  end_lt?: Maybe<Scalars["Int"]>;
  end_lte?: Maybe<Scalars["Int"]>;
  end_gt?: Maybe<Scalars["Int"]>;
  end_gte?: Maybe<Scalars["Int"]>;
  mention?: Maybe<Scalars["String"]>;
  mention_not?: Maybe<Scalars["String"]>;
  mention_in?: Maybe<Array<Scalars["String"]>>;
  mention_not_in?: Maybe<Array<Scalars["String"]>>;
  mention_contains?: Maybe<Scalars["String"]>;
  mention_not_contains?: Maybe<Scalars["String"]>;
  mention_starts_with?: Maybe<Scalars["String"]>;
  mention_not_starts_with?: Maybe<Scalars["String"]>;
  mention_ends_with?: Maybe<Scalars["String"]>;
  mention_not_ends_with?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  start_not?: Maybe<Scalars["Int"]>;
  start_in?: Maybe<Array<Scalars["Int"]>>;
  start_not_in?: Maybe<Array<Scalars["Int"]>>;
  start_lt?: Maybe<Scalars["Int"]>;
  start_lte?: Maybe<Scalars["Int"]>;
  start_gt?: Maybe<Scalars["Int"]>;
  start_gte?: Maybe<Scalars["Int"]>;
  text?: Maybe<Scalars["String"]>;
  text_not?: Maybe<Scalars["String"]>;
  text_in?: Maybe<Array<Scalars["String"]>>;
  text_not_in?: Maybe<Array<Scalars["String"]>>;
  text_contains?: Maybe<Scalars["String"]>;
  text_not_contains?: Maybe<Scalars["String"]>;
  text_starts_with?: Maybe<Scalars["String"]>;
  text_not_starts_with?: Maybe<Scalars["String"]>;
  text_ends_with?: Maybe<Scalars["String"]>;
  text_not_ends_with?: Maybe<Scalars["String"]>;
  bodyTexts?: Maybe<_BodyTextFilter>;
  bodyTexts_not?: Maybe<_BodyTextFilter>;
  bodyTexts_in?: Maybe<Array<_BodyTextFilter>>;
  bodyTexts_not_in?: Maybe<Array<_BodyTextFilter>>;
  bodyTexts_some?: Maybe<_BodyTextFilter>;
  bodyTexts_none?: Maybe<_BodyTextFilter>;
  bodyTexts_single?: Maybe<_BodyTextFilter>;
  bodyTexts_every?: Maybe<_BodyTextFilter>;
  abstracts?: Maybe<_AbstractFilter>;
  abstracts_not?: Maybe<_AbstractFilter>;
  abstracts_in?: Maybe<Array<_AbstractFilter>>;
  abstracts_not_in?: Maybe<Array<_AbstractFilter>>;
  abstracts_some?: Maybe<_AbstractFilter>;
  abstracts_none?: Maybe<_AbstractFilter>;
  abstracts_single?: Maybe<_AbstractFilter>;
  abstracts_every?: Maybe<_AbstractFilter>;
  references?: Maybe<_ReferenceFilter>;
  references_not?: Maybe<_ReferenceFilter>;
  references_in?: Maybe<Array<_ReferenceFilter>>;
  references_not_in?: Maybe<Array<_ReferenceFilter>>;
  references_some?: Maybe<_ReferenceFilter>;
  references_none?: Maybe<_ReferenceFilter>;
  references_single?: Maybe<_ReferenceFilter>;
  references_every?: Maybe<_ReferenceFilter>;
  isReferenceType?: Maybe<_ReferenceTypeFilter>;
  isReferenceType_not?: Maybe<_ReferenceTypeFilter>;
  isReferenceType_in?: Maybe<Array<_ReferenceTypeFilter>>;
  isReferenceType_not_in?: Maybe<Array<_ReferenceTypeFilter>>;
  isReferenceType_some?: Maybe<_ReferenceTypeFilter>;
  isReferenceType_none?: Maybe<_ReferenceTypeFilter>;
  isReferenceType_single?: Maybe<_ReferenceTypeFilter>;
  isReferenceType_every?: Maybe<_ReferenceTypeFilter>;
  hasPublicationId?: Maybe<_PaperIdFilter>;
  hasPublicationId_not?: Maybe<_PaperIdFilter>;
  hasPublicationId_in?: Maybe<Array<_PaperIdFilter>>;
  hasPublicationId_not_in?: Maybe<Array<_PaperIdFilter>>;
  hasPublicationId_some?: Maybe<_PaperIdFilter>;
  hasPublicationId_none?: Maybe<_PaperIdFilter>;
  hasPublicationId_single?: Maybe<_PaperIdFilter>;
  hasPublicationId_every?: Maybe<_PaperIdFilter>;
  clinicaltrials?: Maybe<_ClinicalTrialFilter>;
  clinicaltrials_not?: Maybe<_ClinicalTrialFilter>;
  clinicaltrials_in?: Maybe<Array<_ClinicalTrialFilter>>;
  clinicaltrials_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  clinicaltrials_some?: Maybe<_ClinicalTrialFilter>;
  clinicaltrials_none?: Maybe<_ClinicalTrialFilter>;
  clinicaltrials_single?: Maybe<_ClinicalTrialFilter>;
  clinicaltrials_every?: Maybe<_ClinicalTrialFilter>;
};

export type _ReferenceFilter = {
  AND?: Maybe<Array<_ReferenceFilter>>;
  OR?: Maybe<Array<_ReferenceFilter>>;
  _hash_id?: Maybe<Scalars["ID"]>;
  _hash_id_not?: Maybe<Scalars["ID"]>;
  _hash_id_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_contains?: Maybe<Scalars["ID"]>;
  _hash_id_not_contains?: Maybe<Scalars["ID"]>;
  _hash_id_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_ends_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_ends_with?: Maybe<Scalars["ID"]>;
  issn?: Maybe<Scalars["ID"]>;
  issn_not?: Maybe<Scalars["ID"]>;
  issn_in?: Maybe<Array<Scalars["ID"]>>;
  issn_not_in?: Maybe<Array<Scalars["ID"]>>;
  issn_contains?: Maybe<Scalars["ID"]>;
  issn_not_contains?: Maybe<Scalars["ID"]>;
  issn_starts_with?: Maybe<Scalars["ID"]>;
  issn_not_starts_with?: Maybe<Scalars["ID"]>;
  issn_ends_with?: Maybe<Scalars["ID"]>;
  issn_not_ends_with?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  pages?: Maybe<Scalars["String"]>;
  pages_not?: Maybe<Scalars["String"]>;
  pages_in?: Maybe<Array<Scalars["String"]>>;
  pages_not_in?: Maybe<Array<Scalars["String"]>>;
  pages_contains?: Maybe<Scalars["String"]>;
  pages_not_contains?: Maybe<Scalars["String"]>;
  pages_starts_with?: Maybe<Scalars["String"]>;
  pages_not_starts_with?: Maybe<Scalars["String"]>;
  pages_ends_with?: Maybe<Scalars["String"]>;
  pages_not_ends_with?: Maybe<Scalars["String"]>;
  ref_id?: Maybe<Scalars["ID"]>;
  ref_id_not?: Maybe<Scalars["ID"]>;
  ref_id_in?: Maybe<Array<Scalars["ID"]>>;
  ref_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  ref_id_contains?: Maybe<Scalars["ID"]>;
  ref_id_not_contains?: Maybe<Scalars["ID"]>;
  ref_id_starts_with?: Maybe<Scalars["ID"]>;
  ref_id_not_starts_with?: Maybe<Scalars["ID"]>;
  ref_id_ends_with?: Maybe<Scalars["ID"]>;
  ref_id_not_ends_with?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  title_not?: Maybe<Scalars["String"]>;
  title_in?: Maybe<Array<Scalars["String"]>>;
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  title_contains?: Maybe<Scalars["String"]>;
  title_not_contains?: Maybe<Scalars["String"]>;
  title_starts_with?: Maybe<Scalars["String"]>;
  title_not_starts_with?: Maybe<Scalars["String"]>;
  title_ends_with?: Maybe<Scalars["String"]>;
  title_not_ends_with?: Maybe<Scalars["String"]>;
  venue?: Maybe<Scalars["String"]>;
  venue_not?: Maybe<Scalars["String"]>;
  venue_in?: Maybe<Array<Scalars["String"]>>;
  venue_not_in?: Maybe<Array<Scalars["String"]>>;
  venue_contains?: Maybe<Scalars["String"]>;
  venue_not_contains?: Maybe<Scalars["String"]>;
  venue_starts_with?: Maybe<Scalars["String"]>;
  venue_not_starts_with?: Maybe<Scalars["String"]>;
  venue_ends_with?: Maybe<Scalars["String"]>;
  venue_not_ends_with?: Maybe<Scalars["String"]>;
  volume?: Maybe<Scalars["String"]>;
  volume_not?: Maybe<Scalars["String"]>;
  volume_in?: Maybe<Array<Scalars["String"]>>;
  volume_not_in?: Maybe<Array<Scalars["String"]>>;
  volume_contains?: Maybe<Scalars["String"]>;
  volume_not_contains?: Maybe<Scalars["String"]>;
  volume_starts_with?: Maybe<Scalars["String"]>;
  volume_not_starts_with?: Maybe<Scalars["String"]>;
  volume_ends_with?: Maybe<Scalars["String"]>;
  volume_not_ends_with?: Maybe<Scalars["String"]>;
  year?: Maybe<Scalars["Int"]>;
  year_not?: Maybe<Scalars["Int"]>;
  year_in?: Maybe<Array<Scalars["Int"]>>;
  year_not_in?: Maybe<Array<Scalars["Int"]>>;
  year_lt?: Maybe<Scalars["Int"]>;
  year_lte?: Maybe<Scalars["Int"]>;
  year_gt?: Maybe<Scalars["Int"]>;
  year_gte?: Maybe<Scalars["Int"]>;
  referenceCollections?: Maybe<_ReferenceCollectionFilter>;
  referenceCollections_not?: Maybe<_ReferenceCollectionFilter>;
  referenceCollections_in?: Maybe<Array<_ReferenceCollectionFilter>>;
  referenceCollections_not_in?: Maybe<Array<_ReferenceCollectionFilter>>;
  referenceCollections_some?: Maybe<_ReferenceCollectionFilter>;
  referenceCollections_none?: Maybe<_ReferenceCollectionFilter>;
  referenceCollections_single?: Maybe<_ReferenceCollectionFilter>;
  referenceCollections_every?: Maybe<_ReferenceCollectionFilter>;
  citations?: Maybe<_CitationFilter>;
  citations_not?: Maybe<_CitationFilter>;
  citations_in?: Maybe<Array<_CitationFilter>>;
  citations_not_in?: Maybe<Array<_CitationFilter>>;
  citations_some?: Maybe<_CitationFilter>;
  citations_none?: Maybe<_CitationFilter>;
  citations_single?: Maybe<_CitationFilter>;
  citations_every?: Maybe<_CitationFilter>;
  paperId?: Maybe<_ReferenceReferenceHasPaperidFilter>;
  paperId_not?: Maybe<_ReferenceReferenceHasPaperidFilter>;
  paperId_in?: Maybe<Array<_ReferenceReferenceHasPaperidFilter>>;
  paperId_not_in?: Maybe<Array<_ReferenceReferenceHasPaperidFilter>>;
  paperId_some?: Maybe<_ReferenceReferenceHasPaperidFilter>;
  paperId_none?: Maybe<_ReferenceReferenceHasPaperidFilter>;
  paperId_single?: Maybe<_ReferenceReferenceHasPaperidFilter>;
  paperId_every?: Maybe<_ReferenceReferenceHasPaperidFilter>;
};

export type _ReferenceCollectionFilter = {
  AND?: Maybe<Array<_ReferenceCollectionFilter>>;
  OR?: Maybe<Array<_ReferenceCollectionFilter>>;
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  papers?: Maybe<_PaperFilter>;
  papers_not?: Maybe<_PaperFilter>;
  papers_in?: Maybe<Array<_PaperFilter>>;
  papers_not_in?: Maybe<Array<_PaperFilter>>;
  papers_some?: Maybe<_PaperFilter>;
  papers_none?: Maybe<_PaperFilter>;
  papers_single?: Maybe<_PaperFilter>;
  papers_every?: Maybe<_PaperFilter>;
  references?: Maybe<_ReferenceCollectionHasReferenceFilter>;
  references_not?: Maybe<_ReferenceCollectionHasReferenceFilter>;
  references_in?: Maybe<Array<_ReferenceCollectionHasReferenceFilter>>;
  references_not_in?: Maybe<Array<_ReferenceCollectionHasReferenceFilter>>;
  references_some?: Maybe<_ReferenceCollectionHasReferenceFilter>;
  references_none?: Maybe<_ReferenceCollectionHasReferenceFilter>;
  references_single?: Maybe<_ReferenceCollectionHasReferenceFilter>;
  references_every?: Maybe<_ReferenceCollectionHasReferenceFilter>;
};

export type _ReferenceCollectionHasReferenceFilter = {
  AND?: Maybe<Array<_ReferenceCollectionHasReferenceFilter>>;
  OR?: Maybe<Array<_ReferenceCollectionHasReferenceFilter>>;
  position?: Maybe<Scalars["Int"]>;
  position_not?: Maybe<Scalars["Int"]>;
  position_in?: Maybe<Array<Scalars["Int"]>>;
  position_not_in?: Maybe<Array<Scalars["Int"]>>;
  position_lt?: Maybe<Scalars["Int"]>;
  position_lte?: Maybe<Scalars["Int"]>;
  position_gt?: Maybe<Scalars["Int"]>;
  position_gte?: Maybe<Scalars["Int"]>;
  reference?: Maybe<_ReferenceFilter>;
};

export type _ReferenceReferenceHasPaperidFilter = {
  AND?: Maybe<Array<_ReferenceReferenceHasPaperidFilter>>;
  OR?: Maybe<Array<_ReferenceReferenceHasPaperidFilter>>;
  position?: Maybe<Scalars["Int"]>;
  position_not?: Maybe<Scalars["Int"]>;
  position_in?: Maybe<Array<Scalars["Int"]>>;
  position_not_in?: Maybe<Array<Scalars["Int"]>>;
  position_lt?: Maybe<Scalars["Int"]>;
  position_lte?: Maybe<Scalars["Int"]>;
  position_gt?: Maybe<Scalars["Int"]>;
  position_gte?: Maybe<Scalars["Int"]>;
  id?: Maybe<_PaperIdFilter>;
};

export type _PaperIdFilter = {
  AND?: Maybe<Array<_PaperIdFilter>>;
  OR?: Maybe<Array<_PaperIdFilter>>;
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  type?: Maybe<Scalars["String"]>;
  type_not?: Maybe<Scalars["String"]>;
  type_in?: Maybe<Array<Scalars["String"]>>;
  type_not_in?: Maybe<Array<Scalars["String"]>>;
  type_contains?: Maybe<Scalars["String"]>;
  type_not_contains?: Maybe<Scalars["String"]>;
  type_starts_with?: Maybe<Scalars["String"]>;
  type_not_starts_with?: Maybe<Scalars["String"]>;
  type_ends_with?: Maybe<Scalars["String"]>;
  type_not_ends_with?: Maybe<Scalars["String"]>;
  papers?: Maybe<_PaperFilter>;
  papers_not?: Maybe<_PaperFilter>;
  papers_in?: Maybe<Array<_PaperFilter>>;
  papers_not_in?: Maybe<Array<_PaperFilter>>;
  papers_some?: Maybe<_PaperFilter>;
  papers_none?: Maybe<_PaperFilter>;
  papers_single?: Maybe<_PaperFilter>;
  papers_every?: Maybe<_PaperFilter>;
  references?: Maybe<_PaperIdReferenceHasPaperidFilter>;
  references_not?: Maybe<_PaperIdReferenceHasPaperidFilter>;
  references_in?: Maybe<Array<_PaperIdReferenceHasPaperidFilter>>;
  references_not_in?: Maybe<Array<_PaperIdReferenceHasPaperidFilter>>;
  references_some?: Maybe<_PaperIdReferenceHasPaperidFilter>;
  references_none?: Maybe<_PaperIdReferenceHasPaperidFilter>;
  references_single?: Maybe<_PaperIdReferenceHasPaperidFilter>;
  references_every?: Maybe<_PaperIdReferenceHasPaperidFilter>;
  hasPublicationId?: Maybe<_PaperIdFilter>;
  hasPublicationId_not?: Maybe<_PaperIdFilter>;
  hasPublicationId_in?: Maybe<Array<_PaperIdFilter>>;
  hasPublicationId_not_in?: Maybe<Array<_PaperIdFilter>>;
  hasPublicationId_some?: Maybe<_PaperIdFilter>;
  hasPublicationId_none?: Maybe<_PaperIdFilter>;
  hasPublicationId_single?: Maybe<_PaperIdFilter>;
  hasPublicationId_every?: Maybe<_PaperIdFilter>;
};

export type _PaperIdReferenceHasPaperidFilter = {
  AND?: Maybe<Array<_PaperIdReferenceHasPaperidFilter>>;
  OR?: Maybe<Array<_PaperIdReferenceHasPaperidFilter>>;
  position?: Maybe<Scalars["Int"]>;
  position_not?: Maybe<Scalars["Int"]>;
  position_in?: Maybe<Array<Scalars["Int"]>>;
  position_not_in?: Maybe<Array<Scalars["Int"]>>;
  position_lt?: Maybe<Scalars["Int"]>;
  position_lte?: Maybe<Scalars["Int"]>;
  position_gt?: Maybe<Scalars["Int"]>;
  position_gte?: Maybe<Scalars["Int"]>;
  reference?: Maybe<_ReferenceFilter>;
};

export type _ReferenceTypeFilter = {
  AND?: Maybe<Array<_ReferenceTypeFilter>>;
  OR?: Maybe<Array<_ReferenceTypeFilter>>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  citations?: Maybe<_CitationFilter>;
  citations_not?: Maybe<_CitationFilter>;
  citations_in?: Maybe<Array<_CitationFilter>>;
  citations_not_in?: Maybe<Array<_CitationFilter>>;
  citations_some?: Maybe<_CitationFilter>;
  citations_none?: Maybe<_CitationFilter>;
  citations_single?: Maybe<_CitationFilter>;
  citations_every?: Maybe<_CitationFilter>;
  trials?: Maybe<_ClinicalTrialFilter>;
  trials_not?: Maybe<_ClinicalTrialFilter>;
  trials_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_some?: Maybe<_ClinicalTrialFilter>;
  trials_none?: Maybe<_ClinicalTrialFilter>;
  trials_single?: Maybe<_ClinicalTrialFilter>;
  trials_every?: Maybe<_ClinicalTrialFilter>;
};

export type _ClinicalTrialFilter = {
  AND?: Maybe<Array<_ClinicalTrialFilter>>;
  OR?: Maybe<Array<_ClinicalTrialFilter>>;
  NCTId?: Maybe<Scalars["ID"]>;
  NCTId_not?: Maybe<Scalars["ID"]>;
  NCTId_in?: Maybe<Array<Scalars["ID"]>>;
  NCTId_not_in?: Maybe<Array<Scalars["ID"]>>;
  NCTId_contains?: Maybe<Scalars["ID"]>;
  NCTId_not_contains?: Maybe<Scalars["ID"]>;
  NCTId_starts_with?: Maybe<Scalars["ID"]>;
  NCTId_not_starts_with?: Maybe<Scalars["ID"]>;
  NCTId_ends_with?: Maybe<Scalars["ID"]>;
  NCTId_not_ends_with?: Maybe<Scalars["ID"]>;
  data_source?: Maybe<Scalars["String"]>;
  data_source_not?: Maybe<Scalars["String"]>;
  data_source_in?: Maybe<Array<Scalars["String"]>>;
  data_source_not_in?: Maybe<Array<Scalars["String"]>>;
  data_source_contains?: Maybe<Scalars["String"]>;
  data_source_not_contains?: Maybe<Scalars["String"]>;
  data_source_starts_with?: Maybe<Scalars["String"]>;
  data_source_not_starts_with?: Maybe<Scalars["String"]>;
  data_source_ends_with?: Maybe<Scalars["String"]>;
  data_source_not_ends_with?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  url_not?: Maybe<Scalars["String"]>;
  url_in?: Maybe<Array<Scalars["String"]>>;
  url_not_in?: Maybe<Array<Scalars["String"]>>;
  url_contains?: Maybe<Scalars["String"]>;
  url_not_contains?: Maybe<Scalars["String"]>;
  url_starts_with?: Maybe<Scalars["String"]>;
  url_not_starts_with?: Maybe<Scalars["String"]>;
  url_ends_with?: Maybe<Scalars["String"]>;
  url_not_ends_with?: Maybe<Scalars["String"]>;
  refersTo?: Maybe<_CitationFilter>;
  refersTo_not?: Maybe<_CitationFilter>;
  refersTo_in?: Maybe<Array<_CitationFilter>>;
  refersTo_not_in?: Maybe<Array<_CitationFilter>>;
  refersTo_some?: Maybe<_CitationFilter>;
  refersTo_none?: Maybe<_CitationFilter>;
  refersTo_single?: Maybe<_CitationFilter>;
  refersTo_every?: Maybe<_CitationFilter>;
  refersToUrl?: Maybe<_LinkFilter>;
  refersToUrl_not?: Maybe<_LinkFilter>;
  refersToUrl_in?: Maybe<Array<_LinkFilter>>;
  refersToUrl_not_in?: Maybe<Array<_LinkFilter>>;
  refersToUrl_some?: Maybe<_LinkFilter>;
  refersToUrl_none?: Maybe<_LinkFilter>;
  refersToUrl_single?: Maybe<_LinkFilter>;
  refersToUrl_every?: Maybe<_LinkFilter>;
  useReferenceAs?: Maybe<_ReferenceTypeFilter>;
  useReferenceAs_not?: Maybe<_ReferenceTypeFilter>;
  useReferenceAs_in?: Maybe<Array<_ReferenceTypeFilter>>;
  useReferenceAs_not_in?: Maybe<Array<_ReferenceTypeFilter>>;
  useReferenceAs_some?: Maybe<_ReferenceTypeFilter>;
  useReferenceAs_none?: Maybe<_ReferenceTypeFilter>;
  useReferenceAs_single?: Maybe<_ReferenceTypeFilter>;
  useReferenceAs_every?: Maybe<_ReferenceTypeFilter>;
  conductedAt?: Maybe<_FacilityFilter>;
  conductedAt_not?: Maybe<_FacilityFilter>;
  conductedAt_in?: Maybe<Array<_FacilityFilter>>;
  conductedAt_not_in?: Maybe<Array<_FacilityFilter>>;
  conductedAt_some?: Maybe<_FacilityFilter>;
  conductedAt_none?: Maybe<_FacilityFilter>;
  conductedAt_single?: Maybe<_FacilityFilter>;
  conductedAt_every?: Maybe<_FacilityFilter>;
  investigates?: Maybe<_InterventionFilter>;
  investigates_not?: Maybe<_InterventionFilter>;
  investigates_in?: Maybe<Array<_InterventionFilter>>;
  investigates_not_in?: Maybe<Array<_InterventionFilter>>;
  investigates_some?: Maybe<_InterventionFilter>;
  investigates_none?: Maybe<_InterventionFilter>;
  investigates_single?: Maybe<_InterventionFilter>;
  investigates_every?: Maybe<_InterventionFilter>;
  type?: Maybe<_StudyTypeFilter>;
  type_not?: Maybe<_StudyTypeFilter>;
  type_in?: Maybe<Array<_StudyTypeFilter>>;
  type_not_in?: Maybe<Array<_StudyTypeFilter>>;
  type_some?: Maybe<_StudyTypeFilter>;
  type_none?: Maybe<_StudyTypeFilter>;
  type_single?: Maybe<_StudyTypeFilter>;
  type_every?: Maybe<_StudyTypeFilter>;
  isSponsoredBy?: Maybe<_SponsorFilter>;
  isSponsoredBy_not?: Maybe<_SponsorFilter>;
  isSponsoredBy_in?: Maybe<Array<_SponsorFilter>>;
  isSponsoredBy_not_in?: Maybe<Array<_SponsorFilter>>;
  isSponsoredBy_some?: Maybe<_SponsorFilter>;
  isSponsoredBy_none?: Maybe<_SponsorFilter>;
  isSponsoredBy_single?: Maybe<_SponsorFilter>;
  isSponsoredBy_every?: Maybe<_SponsorFilter>;
  isSupportedBy?: Maybe<_CollaboratorFilter>;
  isSupportedBy_not?: Maybe<_CollaboratorFilter>;
  isSupportedBy_in?: Maybe<Array<_CollaboratorFilter>>;
  isSupportedBy_not_in?: Maybe<Array<_CollaboratorFilter>>;
  isSupportedBy_some?: Maybe<_CollaboratorFilter>;
  isSupportedBy_none?: Maybe<_CollaboratorFilter>;
  isSupportedBy_single?: Maybe<_CollaboratorFilter>;
  isSupportedBy_every?: Maybe<_CollaboratorFilter>;
  isFdaRegulatedDevice?: Maybe<_ResponseFilter>;
  isFdaRegulatedDevice_not?: Maybe<_ResponseFilter>;
  isFdaRegulatedDevice_in?: Maybe<Array<_ResponseFilter>>;
  isFdaRegulatedDevice_not_in?: Maybe<Array<_ResponseFilter>>;
  isFdaRegulatedDevice_some?: Maybe<_ResponseFilter>;
  isFdaRegulatedDevice_none?: Maybe<_ResponseFilter>;
  isFdaRegulatedDevice_single?: Maybe<_ResponseFilter>;
  isFdaRegulatedDevice_every?: Maybe<_ResponseFilter>;
  isUnapprovedDevice?: Maybe<_ResponseFilter>;
  isUnapprovedDevice_not?: Maybe<_ResponseFilter>;
  isUnapprovedDevice_in?: Maybe<Array<_ResponseFilter>>;
  isUnapprovedDevice_not_in?: Maybe<Array<_ResponseFilter>>;
  isUnapprovedDevice_some?: Maybe<_ResponseFilter>;
  isUnapprovedDevice_none?: Maybe<_ResponseFilter>;
  isUnapprovedDevice_single?: Maybe<_ResponseFilter>;
  isUnapprovedDevice_every?: Maybe<_ResponseFilter>;
  isFdaRegulatedDrug?: Maybe<_ResponseFilter>;
  isFdaRegulatedDrug_not?: Maybe<_ResponseFilter>;
  isFdaRegulatedDrug_in?: Maybe<Array<_ResponseFilter>>;
  isFdaRegulatedDrug_not_in?: Maybe<Array<_ResponseFilter>>;
  isFdaRegulatedDrug_some?: Maybe<_ResponseFilter>;
  isFdaRegulatedDrug_none?: Maybe<_ResponseFilter>;
  isFdaRegulatedDrug_single?: Maybe<_ResponseFilter>;
  isFdaRegulatedDrug_every?: Maybe<_ResponseFilter>;
  expandedAccess?: Maybe<_ResponseFilter>;
  expandedAccess_not?: Maybe<_ResponseFilter>;
  expandedAccess_in?: Maybe<Array<_ResponseFilter>>;
  expandedAccess_not_in?: Maybe<Array<_ResponseFilter>>;
  expandedAccess_some?: Maybe<_ResponseFilter>;
  expandedAccess_none?: Maybe<_ResponseFilter>;
  expandedAccess_single?: Maybe<_ResponseFilter>;
  expandedAccess_every?: Maybe<_ResponseFilter>;
  isStudying?: Maybe<_ConditionFilter>;
  isStudying_not?: Maybe<_ConditionFilter>;
  isStudying_in?: Maybe<Array<_ConditionFilter>>;
  isStudying_not_in?: Maybe<Array<_ConditionFilter>>;
  isStudying_some?: Maybe<_ConditionFilter>;
  isStudying_none?: Maybe<_ConditionFilter>;
  isStudying_single?: Maybe<_ConditionFilter>;
  isStudying_every?: Maybe<_ConditionFilter>;
  isPhase?: Maybe<_PhaseFilter>;
  isPhase_not?: Maybe<_PhaseFilter>;
  isPhase_in?: Maybe<Array<_PhaseFilter>>;
  isPhase_not_in?: Maybe<Array<_PhaseFilter>>;
  isPhase_some?: Maybe<_PhaseFilter>;
  isPhase_none?: Maybe<_PhaseFilter>;
  isPhase_single?: Maybe<_PhaseFilter>;
  isPhase_every?: Maybe<_PhaseFilter>;
  purpose?: Maybe<_PurposeFilter>;
  purpose_not?: Maybe<_PurposeFilter>;
  purpose_in?: Maybe<Array<_PurposeFilter>>;
  purpose_not_in?: Maybe<Array<_PurposeFilter>>;
  purpose_some?: Maybe<_PurposeFilter>;
  purpose_none?: Maybe<_PurposeFilter>;
  purpose_single?: Maybe<_PurposeFilter>;
  purpose_every?: Maybe<_PurposeFilter>;
  identifications?: Maybe<_StudyIdentificationFilter>;
  identifications_not?: Maybe<_StudyIdentificationFilter>;
  identifications_in?: Maybe<Array<_StudyIdentificationFilter>>;
  identifications_not_in?: Maybe<Array<_StudyIdentificationFilter>>;
  identifications_some?: Maybe<_StudyIdentificationFilter>;
  identifications_none?: Maybe<_StudyIdentificationFilter>;
  identifications_single?: Maybe<_StudyIdentificationFilter>;
  identifications_every?: Maybe<_StudyIdentificationFilter>;
  status?: Maybe<_StatusFilter>;
  status_not?: Maybe<_StatusFilter>;
  status_in?: Maybe<Array<_StatusFilter>>;
  status_not_in?: Maybe<Array<_StatusFilter>>;
  status_some?: Maybe<_StatusFilter>;
  status_none?: Maybe<_StatusFilter>;
  status_single?: Maybe<_StatusFilter>;
  status_every?: Maybe<_StatusFilter>;
  stopped?: Maybe<_StopReasonFilter>;
  stopped_not?: Maybe<_StopReasonFilter>;
  stopped_in?: Maybe<Array<_StopReasonFilter>>;
  stopped_not_in?: Maybe<Array<_StopReasonFilter>>;
  stopped_some?: Maybe<_StopReasonFilter>;
  stopped_none?: Maybe<_StopReasonFilter>;
  stopped_single?: Maybe<_StopReasonFilter>;
  stopped_every?: Maybe<_StopReasonFilter>;
  started?: Maybe<_StartFilter>;
  started_not?: Maybe<_StartFilter>;
  started_in?: Maybe<Array<_StartFilter>>;
  started_not_in?: Maybe<Array<_StartFilter>>;
  started_some?: Maybe<_StartFilter>;
  started_none?: Maybe<_StartFilter>;
  started_single?: Maybe<_StartFilter>;
  started_every?: Maybe<_StartFilter>;
  completed?: Maybe<_CompletedFilter>;
  completed_not?: Maybe<_CompletedFilter>;
  completed_in?: Maybe<Array<_CompletedFilter>>;
  completed_not_in?: Maybe<Array<_CompletedFilter>>;
  completed_some?: Maybe<_CompletedFilter>;
  completed_none?: Maybe<_CompletedFilter>;
  completed_single?: Maybe<_CompletedFilter>;
  completed_every?: Maybe<_CompletedFilter>;
  conductedBy?: Maybe<_InvestigatorFilter>;
  conductedBy_not?: Maybe<_InvestigatorFilter>;
  conductedBy_in?: Maybe<Array<_InvestigatorFilter>>;
  conductedBy_not_in?: Maybe<Array<_InvestigatorFilter>>;
  conductedBy_some?: Maybe<_InvestigatorFilter>;
  conductedBy_none?: Maybe<_InvestigatorFilter>;
  conductedBy_single?: Maybe<_InvestigatorFilter>;
  conductedBy_every?: Maybe<_InvestigatorFilter>;
  description?: Maybe<_DescriptionFilter>;
  description_not?: Maybe<_DescriptionFilter>;
  description_in?: Maybe<Array<_DescriptionFilter>>;
  description_not_in?: Maybe<Array<_DescriptionFilter>>;
  description_some?: Maybe<_DescriptionFilter>;
  description_none?: Maybe<_DescriptionFilter>;
  description_single?: Maybe<_DescriptionFilter>;
  description_every?: Maybe<_DescriptionFilter>;
  studyDesign?: Maybe<_DesignFilter>;
  studyDesign_not?: Maybe<_DesignFilter>;
  studyDesign_in?: Maybe<Array<_DesignFilter>>;
  studyDesign_not_in?: Maybe<Array<_DesignFilter>>;
  studyDesign_some?: Maybe<_DesignFilter>;
  studyDesign_none?: Maybe<_DesignFilter>;
  studyDesign_single?: Maybe<_DesignFilter>;
  studyDesign_every?: Maybe<_DesignFilter>;
  observationPeriod?: Maybe<_ObservationPeriodFilter>;
  observationPeriod_not?: Maybe<_ObservationPeriodFilter>;
  observationPeriod_in?: Maybe<Array<_ObservationPeriodFilter>>;
  observationPeriod_not_in?: Maybe<Array<_ObservationPeriodFilter>>;
  observationPeriod_some?: Maybe<_ObservationPeriodFilter>;
  observationPeriod_none?: Maybe<_ObservationPeriodFilter>;
  observationPeriod_single?: Maybe<_ObservationPeriodFilter>;
  observationPeriod_every?: Maybe<_ObservationPeriodFilter>;
  primaryOutcome?: Maybe<_OutcomeFilter>;
  primaryOutcome_not?: Maybe<_OutcomeFilter>;
  primaryOutcome_in?: Maybe<Array<_OutcomeFilter>>;
  primaryOutcome_not_in?: Maybe<Array<_OutcomeFilter>>;
  primaryOutcome_some?: Maybe<_OutcomeFilter>;
  primaryOutcome_none?: Maybe<_OutcomeFilter>;
  primaryOutcome_single?: Maybe<_OutcomeFilter>;
  primaryOutcome_every?: Maybe<_OutcomeFilter>;
  secondaryOutcome?: Maybe<_OutcomeFilter>;
  secondaryOutcome_not?: Maybe<_OutcomeFilter>;
  secondaryOutcome_in?: Maybe<Array<_OutcomeFilter>>;
  secondaryOutcome_not_in?: Maybe<Array<_OutcomeFilter>>;
  secondaryOutcome_some?: Maybe<_OutcomeFilter>;
  secondaryOutcome_none?: Maybe<_OutcomeFilter>;
  secondaryOutcome_single?: Maybe<_OutcomeFilter>;
  secondaryOutcome_every?: Maybe<_OutcomeFilter>;
  otherOutcome?: Maybe<_OutcomeFilter>;
  otherOutcome_not?: Maybe<_OutcomeFilter>;
  otherOutcome_in?: Maybe<Array<_OutcomeFilter>>;
  otherOutcome_not_in?: Maybe<Array<_OutcomeFilter>>;
  otherOutcome_some?: Maybe<_OutcomeFilter>;
  otherOutcome_none?: Maybe<_OutcomeFilter>;
  otherOutcome_single?: Maybe<_OutcomeFilter>;
  otherOutcome_every?: Maybe<_OutcomeFilter>;
  studyPopulation?: Maybe<_StudyPopulationFilter>;
  studyPopulation_not?: Maybe<_StudyPopulationFilter>;
  studyPopulation_in?: Maybe<Array<_StudyPopulationFilter>>;
  studyPopulation_not_in?: Maybe<Array<_StudyPopulationFilter>>;
  studyPopulation_some?: Maybe<_StudyPopulationFilter>;
  studyPopulation_none?: Maybe<_StudyPopulationFilter>;
  studyPopulation_single?: Maybe<_StudyPopulationFilter>;
  studyPopulation_every?: Maybe<_StudyPopulationFilter>;
  inclusionCriteria?: Maybe<_InclusionCriteriaFilter>;
  inclusionCriteria_not?: Maybe<_InclusionCriteriaFilter>;
  inclusionCriteria_in?: Maybe<Array<_InclusionCriteriaFilter>>;
  inclusionCriteria_not_in?: Maybe<Array<_InclusionCriteriaFilter>>;
  inclusionCriteria_some?: Maybe<_InclusionCriteriaFilter>;
  inclusionCriteria_none?: Maybe<_InclusionCriteriaFilter>;
  inclusionCriteria_single?: Maybe<_InclusionCriteriaFilter>;
  inclusionCriteria_every?: Maybe<_InclusionCriteriaFilter>;
  exclusionCriteria?: Maybe<_ExclusionCriteriaFilter>;
  exclusionCriteria_not?: Maybe<_ExclusionCriteriaFilter>;
  exclusionCriteria_in?: Maybe<Array<_ExclusionCriteriaFilter>>;
  exclusionCriteria_not_in?: Maybe<Array<_ExclusionCriteriaFilter>>;
  exclusionCriteria_some?: Maybe<_ExclusionCriteriaFilter>;
  exclusionCriteria_none?: Maybe<_ExclusionCriteriaFilter>;
  exclusionCriteria_single?: Maybe<_ExclusionCriteriaFilter>;
  exclusionCriteria_every?: Maybe<_ExclusionCriteriaFilter>;
  contactPerson?: Maybe<_ContactFilter>;
  contactPerson_not?: Maybe<_ContactFilter>;
  contactPerson_in?: Maybe<Array<_ContactFilter>>;
  contactPerson_not_in?: Maybe<Array<_ContactFilter>>;
  contactPerson_some?: Maybe<_ContactFilter>;
  contactPerson_none?: Maybe<_ContactFilter>;
  contactPerson_single?: Maybe<_ContactFilter>;
  contactPerson_every?: Maybe<_ContactFilter>;
  retainedBioSamples?: Maybe<_BioSpecimenFilter>;
  retainedBioSamples_not?: Maybe<_BioSpecimenFilter>;
  retainedBioSamples_in?: Maybe<Array<_BioSpecimenFilter>>;
  retainedBioSamples_not_in?: Maybe<Array<_BioSpecimenFilter>>;
  retainedBioSamples_some?: Maybe<_BioSpecimenFilter>;
  retainedBioSamples_none?: Maybe<_BioSpecimenFilter>;
  retainedBioSamples_single?: Maybe<_BioSpecimenFilter>;
  retainedBioSamples_every?: Maybe<_BioSpecimenFilter>;
  studyArms?: Maybe<_ArmFilter>;
  studyArms_not?: Maybe<_ArmFilter>;
  studyArms_in?: Maybe<Array<_ArmFilter>>;
  studyArms_not_in?: Maybe<Array<_ArmFilter>>;
  studyArms_some?: Maybe<_ArmFilter>;
  studyArms_none?: Maybe<_ArmFilter>;
  studyArms_single?: Maybe<_ArmFilter>;
  studyArms_every?: Maybe<_ArmFilter>;
};

export type _LinkFilter = {
  AND?: Maybe<Array<_LinkFilter>>;
  OR?: Maybe<Array<_LinkFilter>>;
  url?: Maybe<Scalars["String"]>;
  url_not?: Maybe<Scalars["String"]>;
  url_in?: Maybe<Array<Scalars["String"]>>;
  url_not_in?: Maybe<Array<Scalars["String"]>>;
  url_contains?: Maybe<Scalars["String"]>;
  url_not_contains?: Maybe<Scalars["String"]>;
  url_starts_with?: Maybe<Scalars["String"]>;
  url_not_starts_with?: Maybe<Scalars["String"]>;
  url_ends_with?: Maybe<Scalars["String"]>;
  url_not_ends_with?: Maybe<Scalars["String"]>;
  trials?: Maybe<_ClinicalTrialFilter>;
  trials_not?: Maybe<_ClinicalTrialFilter>;
  trials_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_some?: Maybe<_ClinicalTrialFilter>;
  trials_none?: Maybe<_ClinicalTrialFilter>;
  trials_single?: Maybe<_ClinicalTrialFilter>;
  trials_every?: Maybe<_ClinicalTrialFilter>;
};

export type _FacilityFilter = {
  AND?: Maybe<Array<_FacilityFilter>>;
  OR?: Maybe<Array<_FacilityFilter>>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  trials?: Maybe<_ClinicalTrialFilter>;
  trials_not?: Maybe<_ClinicalTrialFilter>;
  trials_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_some?: Maybe<_ClinicalTrialFilter>;
  trials_none?: Maybe<_ClinicalTrialFilter>;
  trials_single?: Maybe<_ClinicalTrialFilter>;
  trials_every?: Maybe<_ClinicalTrialFilter>;
  city?: Maybe<_CityFilter>;
  city_not?: Maybe<_CityFilter>;
  city_in?: Maybe<Array<_CityFilter>>;
  city_not_in?: Maybe<Array<_CityFilter>>;
};

export type _CityFilter = {
  AND?: Maybe<Array<_CityFilter>>;
  OR?: Maybe<Array<_CityFilter>>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  country?: Maybe<_CountryFilter>;
  country_not?: Maybe<_CountryFilter>;
  country_in?: Maybe<Array<_CountryFilter>>;
  country_not_in?: Maybe<Array<_CountryFilter>>;
  country_some?: Maybe<_CountryFilter>;
  country_none?: Maybe<_CountryFilter>;
  country_single?: Maybe<_CountryFilter>;
  country_every?: Maybe<_CountryFilter>;
  facilities?: Maybe<_FacilityFilter>;
  facilities_not?: Maybe<_FacilityFilter>;
  facilities_in?: Maybe<Array<_FacilityFilter>>;
  facilities_not_in?: Maybe<Array<_FacilityFilter>>;
  facilities_some?: Maybe<_FacilityFilter>;
  facilities_none?: Maybe<_FacilityFilter>;
  facilities_single?: Maybe<_FacilityFilter>;
  facilities_every?: Maybe<_FacilityFilter>;
};

export type _CountryFilter = {
  AND?: Maybe<Array<_CountryFilter>>;
  OR?: Maybe<Array<_CountryFilter>>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  un_id?: Maybe<Scalars["ID"]>;
  un_id_not?: Maybe<Scalars["ID"]>;
  un_id_in?: Maybe<Array<Scalars["ID"]>>;
  un_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  un_id_contains?: Maybe<Scalars["ID"]>;
  un_id_not_contains?: Maybe<Scalars["ID"]>;
  un_id_starts_with?: Maybe<Scalars["ID"]>;
  un_id_not_starts_with?: Maybe<Scalars["ID"]>;
  un_id_ends_with?: Maybe<Scalars["ID"]>;
  un_id_not_ends_with?: Maybe<Scalars["ID"]>;
  cities?: Maybe<_CityFilter>;
  cities_not?: Maybe<_CityFilter>;
  cities_in?: Maybe<Array<_CityFilter>>;
  cities_not_in?: Maybe<Array<_CityFilter>>;
  cities_some?: Maybe<_CityFilter>;
  cities_none?: Maybe<_CityFilter>;
  cities_single?: Maybe<_CityFilter>;
  cities_every?: Maybe<_CityFilter>;
  provinces?: Maybe<_CountryPartOfFilter>;
  provinces_not?: Maybe<_CountryPartOfFilter>;
  provinces_in?: Maybe<Array<_CountryPartOfFilter>>;
  provinces_not_in?: Maybe<Array<_CountryPartOfFilter>>;
  provinces_some?: Maybe<_CountryPartOfFilter>;
  provinces_none?: Maybe<_CountryPartOfFilter>;
  provinces_single?: Maybe<_CountryPartOfFilter>;
  provinces_every?: Maybe<_CountryPartOfFilter>;
  total?: Maybe<_CountryCurrentTotalFilter>;
  total_not?: Maybe<_CountryCurrentTotalFilter>;
  total_in?: Maybe<Array<_CountryCurrentTotalFilter>>;
  total_not_in?: Maybe<Array<_CountryCurrentTotalFilter>>;
  total_some?: Maybe<_CountryCurrentTotalFilter>;
  total_none?: Maybe<_CountryCurrentTotalFilter>;
  total_single?: Maybe<_CountryCurrentTotalFilter>;
  total_every?: Maybe<_CountryCurrentTotalFilter>;
  male?: Maybe<_CountryCurrentMaleFilter>;
  male_not?: Maybe<_CountryCurrentMaleFilter>;
  male_in?: Maybe<Array<_CountryCurrentMaleFilter>>;
  male_not_in?: Maybe<Array<_CountryCurrentMaleFilter>>;
  male_some?: Maybe<_CountryCurrentMaleFilter>;
  male_none?: Maybe<_CountryCurrentMaleFilter>;
  male_single?: Maybe<_CountryCurrentMaleFilter>;
  male_every?: Maybe<_CountryCurrentMaleFilter>;
  female?: Maybe<_CountryCurrentFemaleFilter>;
  female_not?: Maybe<_CountryCurrentFemaleFilter>;
  female_in?: Maybe<Array<_CountryCurrentFemaleFilter>>;
  female_not_in?: Maybe<Array<_CountryCurrentFemaleFilter>>;
  female_some?: Maybe<_CountryCurrentFemaleFilter>;
  female_none?: Maybe<_CountryCurrentFemaleFilter>;
  female_single?: Maybe<_CountryCurrentFemaleFilter>;
  female_every?: Maybe<_CountryCurrentFemaleFilter>;
};

export type _CountryPartOfFilter = {
  AND?: Maybe<Array<_CountryPartOfFilter>>;
  OR?: Maybe<Array<_CountryPartOfFilter>>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  province?: Maybe<_ProvinceFilter>;
};

export type _ProvinceFilter = {
  AND?: Maybe<Array<_ProvinceFilter>>;
  OR?: Maybe<Array<_ProvinceFilter>>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  latitude?: Maybe<Scalars["String"]>;
  latitude_not?: Maybe<Scalars["String"]>;
  latitude_in?: Maybe<Array<Scalars["String"]>>;
  latitude_not_in?: Maybe<Array<Scalars["String"]>>;
  latitude_contains?: Maybe<Scalars["String"]>;
  latitude_not_contains?: Maybe<Scalars["String"]>;
  latitude_starts_with?: Maybe<Scalars["String"]>;
  latitude_not_starts_with?: Maybe<Scalars["String"]>;
  latitude_ends_with?: Maybe<Scalars["String"]>;
  latitude_not_ends_with?: Maybe<Scalars["String"]>;
  longitude?: Maybe<Scalars["String"]>;
  longitude_not?: Maybe<Scalars["String"]>;
  longitude_in?: Maybe<Array<Scalars["String"]>>;
  longitude_not_in?: Maybe<Array<Scalars["String"]>>;
  longitude_contains?: Maybe<Scalars["String"]>;
  longitude_not_contains?: Maybe<Scalars["String"]>;
  longitude_starts_with?: Maybe<Scalars["String"]>;
  longitude_not_starts_with?: Maybe<Scalars["String"]>;
  longitude_ends_with?: Maybe<Scalars["String"]>;
  longitude_not_ends_with?: Maybe<Scalars["String"]>;
  country?: Maybe<_CountryFilter>;
  country_not?: Maybe<_CountryFilter>;
  country_in?: Maybe<Array<_CountryFilter>>;
  country_not_in?: Maybe<Array<_CountryFilter>>;
  country_some?: Maybe<_CountryFilter>;
  country_none?: Maybe<_CountryFilter>;
  country_single?: Maybe<_CountryFilter>;
  country_every?: Maybe<_CountryFilter>;
  reports?: Maybe<_ProvinceDailyReportedFilter>;
  reports_not?: Maybe<_ProvinceDailyReportedFilter>;
  reports_in?: Maybe<Array<_ProvinceDailyReportedFilter>>;
  reports_not_in?: Maybe<Array<_ProvinceDailyReportedFilter>>;
  reports_some?: Maybe<_ProvinceDailyReportedFilter>;
  reports_none?: Maybe<_ProvinceDailyReportedFilter>;
  reports_single?: Maybe<_ProvinceDailyReportedFilter>;
  reports_every?: Maybe<_ProvinceDailyReportedFilter>;
  latestReports?: Maybe<_ProvinceLatestReportedFilter>;
  latestReports_not?: Maybe<_ProvinceLatestReportedFilter>;
  latestReports_in?: Maybe<Array<_ProvinceLatestReportedFilter>>;
  latestReports_not_in?: Maybe<Array<_ProvinceLatestReportedFilter>>;
  latestReports_some?: Maybe<_ProvinceLatestReportedFilter>;
  latestReports_none?: Maybe<_ProvinceLatestReportedFilter>;
  latestReports_single?: Maybe<_ProvinceLatestReportedFilter>;
  latestReports_every?: Maybe<_ProvinceLatestReportedFilter>;
};

export type _ProvinceDailyReportedFilter = {
  AND?: Maybe<Array<_ProvinceDailyReportedFilter>>;
  OR?: Maybe<Array<_ProvinceDailyReportedFilter>>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  report?: Maybe<_DailyReportFilter>;
};

export type _DailyReportFilter = {
  AND?: Maybe<Array<_DailyReportFilter>>;
  OR?: Maybe<Array<_DailyReportFilter>>;
  uuid?: Maybe<Scalars["ID"]>;
  uuid_not?: Maybe<Scalars["ID"]>;
  uuid_in?: Maybe<Array<Scalars["ID"]>>;
  uuid_not_in?: Maybe<Array<Scalars["ID"]>>;
  uuid_contains?: Maybe<Scalars["ID"]>;
  uuid_not_contains?: Maybe<Scalars["ID"]>;
  uuid_starts_with?: Maybe<Scalars["ID"]>;
  uuid_not_starts_with?: Maybe<Scalars["ID"]>;
  uuid_ends_with?: Maybe<Scalars["ID"]>;
  uuid_not_ends_with?: Maybe<Scalars["ID"]>;
  date?: Maybe<_Neo4jLocalDateTimeInput>;
  date_not?: Maybe<_Neo4jLocalDateTimeInput>;
  date_in?: Maybe<Array<_Neo4jLocalDateTimeInput>>;
  date_not_in?: Maybe<Array<_Neo4jLocalDateTimeInput>>;
  date_lt?: Maybe<_Neo4jLocalDateTimeInput>;
  date_lte?: Maybe<_Neo4jLocalDateTimeInput>;
  date_gt?: Maybe<_Neo4jLocalDateTimeInput>;
  date_gte?: Maybe<_Neo4jLocalDateTimeInput>;
  confirmed?: Maybe<Scalars["Int"]>;
  confirmed_not?: Maybe<Scalars["Int"]>;
  confirmed_in?: Maybe<Array<Scalars["Int"]>>;
  confirmed_not_in?: Maybe<Array<Scalars["Int"]>>;
  confirmed_lt?: Maybe<Scalars["Int"]>;
  confirmed_lte?: Maybe<Scalars["Int"]>;
  confirmed_gt?: Maybe<Scalars["Int"]>;
  confirmed_gte?: Maybe<Scalars["Int"]>;
  death?: Maybe<Scalars["String"]>;
  death_not?: Maybe<Scalars["String"]>;
  death_in?: Maybe<Array<Scalars["String"]>>;
  death_not_in?: Maybe<Array<Scalars["String"]>>;
  death_contains?: Maybe<Scalars["String"]>;
  death_not_contains?: Maybe<Scalars["String"]>;
  death_starts_with?: Maybe<Scalars["String"]>;
  death_not_starts_with?: Maybe<Scalars["String"]>;
  death_ends_with?: Maybe<Scalars["String"]>;
  death_not_ends_with?: Maybe<Scalars["String"]>;
  recovered?: Maybe<Scalars["String"]>;
  recovered_not?: Maybe<Scalars["String"]>;
  recovered_in?: Maybe<Array<Scalars["String"]>>;
  recovered_not_in?: Maybe<Array<Scalars["String"]>>;
  recovered_contains?: Maybe<Scalars["String"]>;
  recovered_not_contains?: Maybe<Scalars["String"]>;
  recovered_starts_with?: Maybe<Scalars["String"]>;
  recovered_not_starts_with?: Maybe<Scalars["String"]>;
  recovered_ends_with?: Maybe<Scalars["String"]>;
  recovered_not_ends_with?: Maybe<Scalars["String"]>;
  province?: Maybe<_DailyReportDailyReportedFilter>;
  province_not?: Maybe<_DailyReportDailyReportedFilter>;
  province_in?: Maybe<Array<_DailyReportDailyReportedFilter>>;
  province_not_in?: Maybe<Array<_DailyReportDailyReportedFilter>>;
};

/** Generated LocalDateTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jLocalDateTimeInput = {
  year?: Maybe<Scalars["Int"]>;
  month?: Maybe<Scalars["Int"]>;
  day?: Maybe<Scalars["Int"]>;
  hour?: Maybe<Scalars["Int"]>;
  minute?: Maybe<Scalars["Int"]>;
  second?: Maybe<Scalars["Int"]>;
  millisecond?: Maybe<Scalars["Int"]>;
  microsecond?: Maybe<Scalars["Int"]>;
  nanosecond?: Maybe<Scalars["Int"]>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) LocalDateTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/localdatetime/#functions-localdatetime-create-string). */
  formatted?: Maybe<Scalars["String"]>;
};

export type _DailyReportDailyReportedFilter = {
  AND?: Maybe<Array<_DailyReportDailyReportedFilter>>;
  OR?: Maybe<Array<_DailyReportDailyReportedFilter>>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  province?: Maybe<_ProvinceFilter>;
};

export type _ProvinceLatestReportedFilter = {
  AND?: Maybe<Array<_ProvinceLatestReportedFilter>>;
  OR?: Maybe<Array<_ProvinceLatestReportedFilter>>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  report?: Maybe<_LatestFilter>;
};

export type _LatestFilter = {
  AND?: Maybe<Array<_LatestFilter>>;
  OR?: Maybe<Array<_LatestFilter>>;
  uuid?: Maybe<Scalars["ID"]>;
  uuid_not?: Maybe<Scalars["ID"]>;
  uuid_in?: Maybe<Array<Scalars["ID"]>>;
  uuid_not_in?: Maybe<Array<Scalars["ID"]>>;
  uuid_contains?: Maybe<Scalars["ID"]>;
  uuid_not_contains?: Maybe<Scalars["ID"]>;
  uuid_starts_with?: Maybe<Scalars["ID"]>;
  uuid_not_starts_with?: Maybe<Scalars["ID"]>;
  uuid_ends_with?: Maybe<Scalars["ID"]>;
  uuid_not_ends_with?: Maybe<Scalars["ID"]>;
  date?: Maybe<_Neo4jLocalDateTimeInput>;
  date_not?: Maybe<_Neo4jLocalDateTimeInput>;
  date_in?: Maybe<Array<_Neo4jLocalDateTimeInput>>;
  date_not_in?: Maybe<Array<_Neo4jLocalDateTimeInput>>;
  date_lt?: Maybe<_Neo4jLocalDateTimeInput>;
  date_lte?: Maybe<_Neo4jLocalDateTimeInput>;
  date_gt?: Maybe<_Neo4jLocalDateTimeInput>;
  date_gte?: Maybe<_Neo4jLocalDateTimeInput>;
  confirmed?: Maybe<Scalars["Int"]>;
  confirmed_not?: Maybe<Scalars["Int"]>;
  confirmed_in?: Maybe<Array<Scalars["Int"]>>;
  confirmed_not_in?: Maybe<Array<Scalars["Int"]>>;
  confirmed_lt?: Maybe<Scalars["Int"]>;
  confirmed_lte?: Maybe<Scalars["Int"]>;
  confirmed_gt?: Maybe<Scalars["Int"]>;
  confirmed_gte?: Maybe<Scalars["Int"]>;
  death?: Maybe<Scalars["String"]>;
  death_not?: Maybe<Scalars["String"]>;
  death_in?: Maybe<Array<Scalars["String"]>>;
  death_not_in?: Maybe<Array<Scalars["String"]>>;
  death_contains?: Maybe<Scalars["String"]>;
  death_not_contains?: Maybe<Scalars["String"]>;
  death_starts_with?: Maybe<Scalars["String"]>;
  death_not_starts_with?: Maybe<Scalars["String"]>;
  death_ends_with?: Maybe<Scalars["String"]>;
  death_not_ends_with?: Maybe<Scalars["String"]>;
  recovered?: Maybe<Scalars["String"]>;
  recovered_not?: Maybe<Scalars["String"]>;
  recovered_in?: Maybe<Array<Scalars["String"]>>;
  recovered_not_in?: Maybe<Array<Scalars["String"]>>;
  recovered_contains?: Maybe<Scalars["String"]>;
  recovered_not_contains?: Maybe<Scalars["String"]>;
  recovered_starts_with?: Maybe<Scalars["String"]>;
  recovered_not_starts_with?: Maybe<Scalars["String"]>;
  recovered_ends_with?: Maybe<Scalars["String"]>;
  recovered_not_ends_with?: Maybe<Scalars["String"]>;
  province?: Maybe<_LatestLatestReportedFilter>;
  province_not?: Maybe<_LatestLatestReportedFilter>;
  province_in?: Maybe<Array<_LatestLatestReportedFilter>>;
  province_not_in?: Maybe<Array<_LatestLatestReportedFilter>>;
};

export type _LatestLatestReportedFilter = {
  AND?: Maybe<Array<_LatestLatestReportedFilter>>;
  OR?: Maybe<Array<_LatestLatestReportedFilter>>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  province?: Maybe<_ProvinceFilter>;
};

export type _CountryCurrentTotalFilter = {
  AND?: Maybe<Array<_CountryCurrentTotalFilter>>;
  OR?: Maybe<Array<_CountryCurrentTotalFilter>>;
  count?: Maybe<Scalars["Int"]>;
  count_not?: Maybe<Scalars["Int"]>;
  count_in?: Maybe<Array<Scalars["Int"]>>;
  count_not_in?: Maybe<Array<Scalars["Int"]>>;
  count_lt?: Maybe<Scalars["Int"]>;
  count_lte?: Maybe<Scalars["Int"]>;
  count_gt?: Maybe<Scalars["Int"]>;
  count_gte?: Maybe<Scalars["Int"]>;
  ageGroup?: Maybe<_AgeGroupFilter>;
};

export type _AgeGroupFilter = {
  AND?: Maybe<Array<_AgeGroupFilter>>;
  OR?: Maybe<Array<_AgeGroupFilter>>;
  group?: Maybe<Scalars["String"]>;
  group_not?: Maybe<Scalars["String"]>;
  group_in?: Maybe<Array<Scalars["String"]>>;
  group_not_in?: Maybe<Array<Scalars["String"]>>;
  group_contains?: Maybe<Scalars["String"]>;
  group_not_contains?: Maybe<Scalars["String"]>;
  group_starts_with?: Maybe<Scalars["String"]>;
  group_not_starts_with?: Maybe<Scalars["String"]>;
  group_ends_with?: Maybe<Scalars["String"]>;
  group_not_ends_with?: Maybe<Scalars["String"]>;
  span?: Maybe<Scalars["String"]>;
  span_not?: Maybe<Scalars["String"]>;
  span_in?: Maybe<Array<Scalars["String"]>>;
  span_not_in?: Maybe<Array<Scalars["String"]>>;
  span_contains?: Maybe<Scalars["String"]>;
  span_not_contains?: Maybe<Scalars["String"]>;
  span_starts_with?: Maybe<Scalars["String"]>;
  span_not_starts_with?: Maybe<Scalars["String"]>;
  span_ends_with?: Maybe<Scalars["String"]>;
  span_not_ends_with?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  start_not?: Maybe<Scalars["Int"]>;
  start_in?: Maybe<Array<Scalars["Int"]>>;
  start_not_in?: Maybe<Array<Scalars["Int"]>>;
  start_lt?: Maybe<Scalars["Int"]>;
  start_lte?: Maybe<Scalars["Int"]>;
  start_gt?: Maybe<Scalars["Int"]>;
  start_gte?: Maybe<Scalars["Int"]>;
  total?: Maybe<_AgeGroupCurrentTotalFilter>;
  total_not?: Maybe<_AgeGroupCurrentTotalFilter>;
  total_in?: Maybe<Array<_AgeGroupCurrentTotalFilter>>;
  total_not_in?: Maybe<Array<_AgeGroupCurrentTotalFilter>>;
  total_some?: Maybe<_AgeGroupCurrentTotalFilter>;
  total_none?: Maybe<_AgeGroupCurrentTotalFilter>;
  total_single?: Maybe<_AgeGroupCurrentTotalFilter>;
  total_every?: Maybe<_AgeGroupCurrentTotalFilter>;
  male?: Maybe<_AgeGroupCurrentMaleFilter>;
  male_not?: Maybe<_AgeGroupCurrentMaleFilter>;
  male_in?: Maybe<Array<_AgeGroupCurrentMaleFilter>>;
  male_not_in?: Maybe<Array<_AgeGroupCurrentMaleFilter>>;
  male_some?: Maybe<_AgeGroupCurrentMaleFilter>;
  male_none?: Maybe<_AgeGroupCurrentMaleFilter>;
  male_single?: Maybe<_AgeGroupCurrentMaleFilter>;
  male_every?: Maybe<_AgeGroupCurrentMaleFilter>;
  female?: Maybe<_AgeGroupCurrentFemaleFilter>;
  female_not?: Maybe<_AgeGroupCurrentFemaleFilter>;
  female_in?: Maybe<Array<_AgeGroupCurrentFemaleFilter>>;
  female_not_in?: Maybe<Array<_AgeGroupCurrentFemaleFilter>>;
  female_some?: Maybe<_AgeGroupCurrentFemaleFilter>;
  female_none?: Maybe<_AgeGroupCurrentFemaleFilter>;
  female_single?: Maybe<_AgeGroupCurrentFemaleFilter>;
  female_every?: Maybe<_AgeGroupCurrentFemaleFilter>;
};

export type _AgeGroupCurrentTotalFilter = {
  AND?: Maybe<Array<_AgeGroupCurrentTotalFilter>>;
  OR?: Maybe<Array<_AgeGroupCurrentTotalFilter>>;
  count?: Maybe<Scalars["Int"]>;
  count_not?: Maybe<Scalars["Int"]>;
  count_in?: Maybe<Array<Scalars["Int"]>>;
  count_not_in?: Maybe<Array<Scalars["Int"]>>;
  count_lt?: Maybe<Scalars["Int"]>;
  count_lte?: Maybe<Scalars["Int"]>;
  count_gt?: Maybe<Scalars["Int"]>;
  count_gte?: Maybe<Scalars["Int"]>;
  country?: Maybe<_CountryFilter>;
};

export type _AgeGroupCurrentMaleFilter = {
  AND?: Maybe<Array<_AgeGroupCurrentMaleFilter>>;
  OR?: Maybe<Array<_AgeGroupCurrentMaleFilter>>;
  count?: Maybe<Scalars["Int"]>;
  count_not?: Maybe<Scalars["Int"]>;
  count_in?: Maybe<Array<Scalars["Int"]>>;
  count_not_in?: Maybe<Array<Scalars["Int"]>>;
  count_lt?: Maybe<Scalars["Int"]>;
  count_lte?: Maybe<Scalars["Int"]>;
  count_gt?: Maybe<Scalars["Int"]>;
  count_gte?: Maybe<Scalars["Int"]>;
  country?: Maybe<_CountryFilter>;
};

export type _AgeGroupCurrentFemaleFilter = {
  AND?: Maybe<Array<_AgeGroupCurrentFemaleFilter>>;
  OR?: Maybe<Array<_AgeGroupCurrentFemaleFilter>>;
  count?: Maybe<Scalars["Int"]>;
  count_not?: Maybe<Scalars["Int"]>;
  count_in?: Maybe<Array<Scalars["Int"]>>;
  count_not_in?: Maybe<Array<Scalars["Int"]>>;
  count_lt?: Maybe<Scalars["Int"]>;
  count_lte?: Maybe<Scalars["Int"]>;
  count_gt?: Maybe<Scalars["Int"]>;
  count_gte?: Maybe<Scalars["Int"]>;
  country?: Maybe<_CountryFilter>;
};

export type _CountryCurrentMaleFilter = {
  AND?: Maybe<Array<_CountryCurrentMaleFilter>>;
  OR?: Maybe<Array<_CountryCurrentMaleFilter>>;
  count?: Maybe<Scalars["Int"]>;
  count_not?: Maybe<Scalars["Int"]>;
  count_in?: Maybe<Array<Scalars["Int"]>>;
  count_not_in?: Maybe<Array<Scalars["Int"]>>;
  count_lt?: Maybe<Scalars["Int"]>;
  count_lte?: Maybe<Scalars["Int"]>;
  count_gt?: Maybe<Scalars["Int"]>;
  count_gte?: Maybe<Scalars["Int"]>;
  ageGroup?: Maybe<_AgeGroupFilter>;
};

export type _CountryCurrentFemaleFilter = {
  AND?: Maybe<Array<_CountryCurrentFemaleFilter>>;
  OR?: Maybe<Array<_CountryCurrentFemaleFilter>>;
  count?: Maybe<Scalars["Int"]>;
  count_not?: Maybe<Scalars["Int"]>;
  count_in?: Maybe<Array<Scalars["Int"]>>;
  count_not_in?: Maybe<Array<Scalars["Int"]>>;
  count_lt?: Maybe<Scalars["Int"]>;
  count_lte?: Maybe<Scalars["Int"]>;
  count_gt?: Maybe<Scalars["Int"]>;
  count_gte?: Maybe<Scalars["Int"]>;
  ageGroup?: Maybe<_AgeGroupFilter>;
};

export type _InterventionFilter = {
  AND?: Maybe<Array<_InterventionFilter>>;
  OR?: Maybe<Array<_InterventionFilter>>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  type_not?: Maybe<Scalars["String"]>;
  type_in?: Maybe<Array<Scalars["String"]>>;
  type_not_in?: Maybe<Array<Scalars["String"]>>;
  type_contains?: Maybe<Scalars["String"]>;
  type_not_contains?: Maybe<Scalars["String"]>;
  type_starts_with?: Maybe<Scalars["String"]>;
  type_not_starts_with?: Maybe<Scalars["String"]>;
  type_ends_with?: Maybe<Scalars["String"]>;
  type_not_ends_with?: Maybe<Scalars["String"]>;
  trials?: Maybe<_ClinicalTrialFilter>;
  trials_not?: Maybe<_ClinicalTrialFilter>;
  trials_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_some?: Maybe<_ClinicalTrialFilter>;
  trials_none?: Maybe<_ClinicalTrialFilter>;
  trials_single?: Maybe<_ClinicalTrialFilter>;
  trials_every?: Maybe<_ClinicalTrialFilter>;
};

export type _StudyTypeFilter = {
  AND?: Maybe<Array<_StudyTypeFilter>>;
  OR?: Maybe<Array<_StudyTypeFilter>>;
  type?: Maybe<Scalars["String"]>;
  type_not?: Maybe<Scalars["String"]>;
  type_in?: Maybe<Array<Scalars["String"]>>;
  type_not_in?: Maybe<Array<Scalars["String"]>>;
  type_contains?: Maybe<Scalars["String"]>;
  type_not_contains?: Maybe<Scalars["String"]>;
  type_starts_with?: Maybe<Scalars["String"]>;
  type_not_starts_with?: Maybe<Scalars["String"]>;
  type_ends_with?: Maybe<Scalars["String"]>;
  type_not_ends_with?: Maybe<Scalars["String"]>;
  trials?: Maybe<_ClinicalTrialFilter>;
  trials_not?: Maybe<_ClinicalTrialFilter>;
  trials_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_some?: Maybe<_ClinicalTrialFilter>;
  trials_none?: Maybe<_ClinicalTrialFilter>;
  trials_single?: Maybe<_ClinicalTrialFilter>;
  trials_every?: Maybe<_ClinicalTrialFilter>;
};

export type _SponsorFilter = {
  AND?: Maybe<Array<_SponsorFilter>>;
  OR?: Maybe<Array<_SponsorFilter>>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  trials?: Maybe<_ClinicalTrialFilter>;
  trials_not?: Maybe<_ClinicalTrialFilter>;
  trials_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_some?: Maybe<_ClinicalTrialFilter>;
  trials_none?: Maybe<_ClinicalTrialFilter>;
  trials_single?: Maybe<_ClinicalTrialFilter>;
  trials_every?: Maybe<_ClinicalTrialFilter>;
};

export type _CollaboratorFilter = {
  AND?: Maybe<Array<_CollaboratorFilter>>;
  OR?: Maybe<Array<_CollaboratorFilter>>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  trials?: Maybe<_ClinicalTrialFilter>;
  trials_not?: Maybe<_ClinicalTrialFilter>;
  trials_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_some?: Maybe<_ClinicalTrialFilter>;
  trials_none?: Maybe<_ClinicalTrialFilter>;
  trials_single?: Maybe<_ClinicalTrialFilter>;
  trials_every?: Maybe<_ClinicalTrialFilter>;
};

export type _ResponseFilter = {
  AND?: Maybe<Array<_ResponseFilter>>;
  OR?: Maybe<Array<_ResponseFilter>>;
  YN?: Maybe<Scalars["String"]>;
  YN_not?: Maybe<Scalars["String"]>;
  YN_in?: Maybe<Array<Scalars["String"]>>;
  YN_not_in?: Maybe<Array<Scalars["String"]>>;
  YN_contains?: Maybe<Scalars["String"]>;
  YN_not_contains?: Maybe<Scalars["String"]>;
  YN_starts_with?: Maybe<Scalars["String"]>;
  YN_not_starts_with?: Maybe<Scalars["String"]>;
  YN_ends_with?: Maybe<Scalars["String"]>;
  YN_not_ends_with?: Maybe<Scalars["String"]>;
  isFdaRegulatedDevice?: Maybe<_ClinicalTrialFilter>;
  isFdaRegulatedDevice_not?: Maybe<_ClinicalTrialFilter>;
  isFdaRegulatedDevice_in?: Maybe<Array<_ClinicalTrialFilter>>;
  isFdaRegulatedDevice_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  isFdaRegulatedDevice_some?: Maybe<_ClinicalTrialFilter>;
  isFdaRegulatedDevice_none?: Maybe<_ClinicalTrialFilter>;
  isFdaRegulatedDevice_single?: Maybe<_ClinicalTrialFilter>;
  isFdaRegulatedDevice_every?: Maybe<_ClinicalTrialFilter>;
  isUnapprovedDevice?: Maybe<_ClinicalTrialFilter>;
  isUnapprovedDevice_not?: Maybe<_ClinicalTrialFilter>;
  isUnapprovedDevice_in?: Maybe<Array<_ClinicalTrialFilter>>;
  isUnapprovedDevice_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  isUnapprovedDevice_some?: Maybe<_ClinicalTrialFilter>;
  isUnapprovedDevice_none?: Maybe<_ClinicalTrialFilter>;
  isUnapprovedDevice_single?: Maybe<_ClinicalTrialFilter>;
  isUnapprovedDevice_every?: Maybe<_ClinicalTrialFilter>;
  isFdaRegulatedDrug?: Maybe<_ClinicalTrialFilter>;
  isFdaRegulatedDrug_not?: Maybe<_ClinicalTrialFilter>;
  isFdaRegulatedDrug_in?: Maybe<Array<_ClinicalTrialFilter>>;
  isFdaRegulatedDrug_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  isFdaRegulatedDrug_some?: Maybe<_ClinicalTrialFilter>;
  isFdaRegulatedDrug_none?: Maybe<_ClinicalTrialFilter>;
  isFdaRegulatedDrug_single?: Maybe<_ClinicalTrialFilter>;
  isFdaRegulatedDrug_every?: Maybe<_ClinicalTrialFilter>;
  expandedAccess?: Maybe<_ClinicalTrialFilter>;
  expandedAccess_not?: Maybe<_ClinicalTrialFilter>;
  expandedAccess_in?: Maybe<Array<_ClinicalTrialFilter>>;
  expandedAccess_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  expandedAccess_some?: Maybe<_ClinicalTrialFilter>;
  expandedAccess_none?: Maybe<_ClinicalTrialFilter>;
  expandedAccess_single?: Maybe<_ClinicalTrialFilter>;
  expandedAccess_every?: Maybe<_ClinicalTrialFilter>;
};

export type _ConditionFilter = {
  AND?: Maybe<Array<_ConditionFilter>>;
  OR?: Maybe<Array<_ConditionFilter>>;
  disease?: Maybe<Scalars["String"]>;
  disease_not?: Maybe<Scalars["String"]>;
  disease_in?: Maybe<Array<Scalars["String"]>>;
  disease_not_in?: Maybe<Array<Scalars["String"]>>;
  disease_contains?: Maybe<Scalars["String"]>;
  disease_not_contains?: Maybe<Scalars["String"]>;
  disease_starts_with?: Maybe<Scalars["String"]>;
  disease_not_starts_with?: Maybe<Scalars["String"]>;
  disease_ends_with?: Maybe<Scalars["String"]>;
  disease_not_ends_with?: Maybe<Scalars["String"]>;
  keywords?: Maybe<_KeywordFilter>;
  keywords_not?: Maybe<_KeywordFilter>;
  keywords_in?: Maybe<Array<_KeywordFilter>>;
  keywords_not_in?: Maybe<Array<_KeywordFilter>>;
  keywords_some?: Maybe<_KeywordFilter>;
  keywords_none?: Maybe<_KeywordFilter>;
  keywords_single?: Maybe<_KeywordFilter>;
  keywords_every?: Maybe<_KeywordFilter>;
  trials?: Maybe<_ClinicalTrialFilter>;
  trials_not?: Maybe<_ClinicalTrialFilter>;
  trials_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_some?: Maybe<_ClinicalTrialFilter>;
  trials_none?: Maybe<_ClinicalTrialFilter>;
  trials_single?: Maybe<_ClinicalTrialFilter>;
  trials_every?: Maybe<_ClinicalTrialFilter>;
};

export type _KeywordFilter = {
  AND?: Maybe<Array<_KeywordFilter>>;
  OR?: Maybe<Array<_KeywordFilter>>;
  word?: Maybe<Scalars["String"]>;
  word_not?: Maybe<Scalars["String"]>;
  word_in?: Maybe<Array<Scalars["String"]>>;
  word_not_in?: Maybe<Array<Scalars["String"]>>;
  word_contains?: Maybe<Scalars["String"]>;
  word_not_contains?: Maybe<Scalars["String"]>;
  word_starts_with?: Maybe<Scalars["String"]>;
  word_not_starts_with?: Maybe<Scalars["String"]>;
  word_ends_with?: Maybe<Scalars["String"]>;
  word_not_ends_with?: Maybe<Scalars["String"]>;
  conditions?: Maybe<_ConditionFilter>;
  conditions_not?: Maybe<_ConditionFilter>;
  conditions_in?: Maybe<Array<_ConditionFilter>>;
  conditions_not_in?: Maybe<Array<_ConditionFilter>>;
  conditions_some?: Maybe<_ConditionFilter>;
  conditions_none?: Maybe<_ConditionFilter>;
  conditions_single?: Maybe<_ConditionFilter>;
  conditions_every?: Maybe<_ConditionFilter>;
};

export type _PhaseFilter = {
  AND?: Maybe<Array<_PhaseFilter>>;
  OR?: Maybe<Array<_PhaseFilter>>;
  phase?: Maybe<Scalars["String"]>;
  phase_not?: Maybe<Scalars["String"]>;
  phase_in?: Maybe<Array<Scalars["String"]>>;
  phase_not_in?: Maybe<Array<Scalars["String"]>>;
  phase_contains?: Maybe<Scalars["String"]>;
  phase_not_contains?: Maybe<Scalars["String"]>;
  phase_starts_with?: Maybe<Scalars["String"]>;
  phase_not_starts_with?: Maybe<Scalars["String"]>;
  phase_ends_with?: Maybe<Scalars["String"]>;
  phase_not_ends_with?: Maybe<Scalars["String"]>;
  trials?: Maybe<_ClinicalTrialFilter>;
  trials_not?: Maybe<_ClinicalTrialFilter>;
  trials_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_some?: Maybe<_ClinicalTrialFilter>;
  trials_none?: Maybe<_ClinicalTrialFilter>;
  trials_single?: Maybe<_ClinicalTrialFilter>;
  trials_every?: Maybe<_ClinicalTrialFilter>;
};

export type _PurposeFilter = {
  AND?: Maybe<Array<_PurposeFilter>>;
  OR?: Maybe<Array<_PurposeFilter>>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  trials?: Maybe<_ClinicalTrialFilter>;
  trials_not?: Maybe<_ClinicalTrialFilter>;
  trials_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_some?: Maybe<_ClinicalTrialFilter>;
  trials_none?: Maybe<_ClinicalTrialFilter>;
  trials_single?: Maybe<_ClinicalTrialFilter>;
  trials_every?: Maybe<_ClinicalTrialFilter>;
};

export type _StudyIdentificationFilter = {
  AND?: Maybe<Array<_StudyIdentificationFilter>>;
  OR?: Maybe<Array<_StudyIdentificationFilter>>;
  studyId?: Maybe<Scalars["String"]>;
  studyId_not?: Maybe<Scalars["String"]>;
  studyId_in?: Maybe<Array<Scalars["String"]>>;
  studyId_not_in?: Maybe<Array<Scalars["String"]>>;
  studyId_contains?: Maybe<Scalars["String"]>;
  studyId_not_contains?: Maybe<Scalars["String"]>;
  studyId_starts_with?: Maybe<Scalars["String"]>;
  studyId_not_starts_with?: Maybe<Scalars["String"]>;
  studyId_ends_with?: Maybe<Scalars["String"]>;
  studyId_not_ends_with?: Maybe<Scalars["String"]>;
  acronym?: Maybe<Scalars["String"]>;
  acronym_not?: Maybe<Scalars["String"]>;
  acronym_in?: Maybe<Array<Scalars["String"]>>;
  acronym_not_in?: Maybe<Array<Scalars["String"]>>;
  acronym_contains?: Maybe<Scalars["String"]>;
  acronym_not_contains?: Maybe<Scalars["String"]>;
  acronym_starts_with?: Maybe<Scalars["String"]>;
  acronym_not_starts_with?: Maybe<Scalars["String"]>;
  acronym_ends_with?: Maybe<Scalars["String"]>;
  acronym_not_ends_with?: Maybe<Scalars["String"]>;
  trials?: Maybe<_ClinicalTrialFilter>;
  trials_not?: Maybe<_ClinicalTrialFilter>;
  trials_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_some?: Maybe<_ClinicalTrialFilter>;
  trials_none?: Maybe<_ClinicalTrialFilter>;
  trials_single?: Maybe<_ClinicalTrialFilter>;
  trials_every?: Maybe<_ClinicalTrialFilter>;
  title?: Maybe<_TitleFilter>;
  title_not?: Maybe<_TitleFilter>;
  title_in?: Maybe<Array<_TitleFilter>>;
  title_not_in?: Maybe<Array<_TitleFilter>>;
  title_some?: Maybe<_TitleFilter>;
  title_none?: Maybe<_TitleFilter>;
  title_single?: Maybe<_TitleFilter>;
  title_every?: Maybe<_TitleFilter>;
};

export type _TitleFilter = {
  AND?: Maybe<Array<_TitleFilter>>;
  OR?: Maybe<Array<_TitleFilter>>;
  briefTitle?: Maybe<Scalars["String"]>;
  briefTitle_not?: Maybe<Scalars["String"]>;
  briefTitle_in?: Maybe<Array<Scalars["String"]>>;
  briefTitle_not_in?: Maybe<Array<Scalars["String"]>>;
  briefTitle_contains?: Maybe<Scalars["String"]>;
  briefTitle_not_contains?: Maybe<Scalars["String"]>;
  briefTitle_starts_with?: Maybe<Scalars["String"]>;
  briefTitle_not_starts_with?: Maybe<Scalars["String"]>;
  briefTitle_ends_with?: Maybe<Scalars["String"]>;
  briefTitle_not_ends_with?: Maybe<Scalars["String"]>;
  officialTitle?: Maybe<Scalars["String"]>;
  officialTitle_not?: Maybe<Scalars["String"]>;
  officialTitle_in?: Maybe<Array<Scalars["String"]>>;
  officialTitle_not_in?: Maybe<Array<Scalars["String"]>>;
  officialTitle_contains?: Maybe<Scalars["String"]>;
  officialTitle_not_contains?: Maybe<Scalars["String"]>;
  officialTitle_starts_with?: Maybe<Scalars["String"]>;
  officialTitle_not_starts_with?: Maybe<Scalars["String"]>;
  officialTitle_ends_with?: Maybe<Scalars["String"]>;
  officialTitle_not_ends_with?: Maybe<Scalars["String"]>;
  identifications?: Maybe<_StudyIdentificationFilter>;
  identifications_not?: Maybe<_StudyIdentificationFilter>;
  identifications_in?: Maybe<Array<_StudyIdentificationFilter>>;
  identifications_not_in?: Maybe<Array<_StudyIdentificationFilter>>;
  identifications_some?: Maybe<_StudyIdentificationFilter>;
  identifications_none?: Maybe<_StudyIdentificationFilter>;
  identifications_single?: Maybe<_StudyIdentificationFilter>;
  identifications_every?: Maybe<_StudyIdentificationFilter>;
};

export type _StatusFilter = {
  AND?: Maybe<Array<_StatusFilter>>;
  OR?: Maybe<Array<_StatusFilter>>;
  status?: Maybe<Scalars["String"]>;
  status_not?: Maybe<Scalars["String"]>;
  status_in?: Maybe<Array<Scalars["String"]>>;
  status_not_in?: Maybe<Array<Scalars["String"]>>;
  status_contains?: Maybe<Scalars["String"]>;
  status_not_contains?: Maybe<Scalars["String"]>;
  status_starts_with?: Maybe<Scalars["String"]>;
  status_not_starts_with?: Maybe<Scalars["String"]>;
  status_ends_with?: Maybe<Scalars["String"]>;
  status_not_ends_with?: Maybe<Scalars["String"]>;
  stopReason?: Maybe<_StopReasonFilter>;
  stopReason_not?: Maybe<_StopReasonFilter>;
  stopReason_in?: Maybe<Array<_StopReasonFilter>>;
  stopReason_not_in?: Maybe<Array<_StopReasonFilter>>;
  stopReason_some?: Maybe<_StopReasonFilter>;
  stopReason_none?: Maybe<_StopReasonFilter>;
  stopReason_single?: Maybe<_StopReasonFilter>;
  stopReason_every?: Maybe<_StopReasonFilter>;
  trials?: Maybe<_ClinicalTrialFilter>;
  trials_not?: Maybe<_ClinicalTrialFilter>;
  trials_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_some?: Maybe<_ClinicalTrialFilter>;
  trials_none?: Maybe<_ClinicalTrialFilter>;
  trials_single?: Maybe<_ClinicalTrialFilter>;
  trials_every?: Maybe<_ClinicalTrialFilter>;
};

export type _StopReasonFilter = {
  AND?: Maybe<Array<_StopReasonFilter>>;
  OR?: Maybe<Array<_StopReasonFilter>>;
  reason?: Maybe<Scalars["String"]>;
  reason_not?: Maybe<Scalars["String"]>;
  reason_in?: Maybe<Array<Scalars["String"]>>;
  reason_not_in?: Maybe<Array<Scalars["String"]>>;
  reason_contains?: Maybe<Scalars["String"]>;
  reason_not_contains?: Maybe<Scalars["String"]>;
  reason_starts_with?: Maybe<Scalars["String"]>;
  reason_not_starts_with?: Maybe<Scalars["String"]>;
  reason_ends_with?: Maybe<Scalars["String"]>;
  reason_not_ends_with?: Maybe<Scalars["String"]>;
  trials?: Maybe<_ClinicalTrialFilter>;
  trials_not?: Maybe<_ClinicalTrialFilter>;
  trials_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_some?: Maybe<_ClinicalTrialFilter>;
  trials_none?: Maybe<_ClinicalTrialFilter>;
  trials_single?: Maybe<_ClinicalTrialFilter>;
  trials_every?: Maybe<_ClinicalTrialFilter>;
  status?: Maybe<_StatusFilter>;
  status_not?: Maybe<_StatusFilter>;
  status_in?: Maybe<Array<_StatusFilter>>;
  status_not_in?: Maybe<Array<_StatusFilter>>;
  status_some?: Maybe<_StatusFilter>;
  status_none?: Maybe<_StatusFilter>;
  status_single?: Maybe<_StatusFilter>;
  status_every?: Maybe<_StatusFilter>;
};

export type _StartFilter = {
  AND?: Maybe<Array<_StartFilter>>;
  OR?: Maybe<Array<_StartFilter>>;
  date?: Maybe<Scalars["String"]>;
  date_not?: Maybe<Scalars["String"]>;
  date_in?: Maybe<Array<Scalars["String"]>>;
  date_not_in?: Maybe<Array<Scalars["String"]>>;
  date_contains?: Maybe<Scalars["String"]>;
  date_not_contains?: Maybe<Scalars["String"]>;
  date_starts_with?: Maybe<Scalars["String"]>;
  date_not_starts_with?: Maybe<Scalars["String"]>;
  date_ends_with?: Maybe<Scalars["String"]>;
  date_not_ends_with?: Maybe<Scalars["String"]>;
  trials?: Maybe<_ClinicalTrialFilter>;
  trials_not?: Maybe<_ClinicalTrialFilter>;
  trials_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_some?: Maybe<_ClinicalTrialFilter>;
  trials_none?: Maybe<_ClinicalTrialFilter>;
  trials_single?: Maybe<_ClinicalTrialFilter>;
  trials_every?: Maybe<_ClinicalTrialFilter>;
};

export type _CompletedFilter = {
  AND?: Maybe<Array<_CompletedFilter>>;
  OR?: Maybe<Array<_CompletedFilter>>;
  completionDate?: Maybe<Scalars["String"]>;
  completionDate_not?: Maybe<Scalars["String"]>;
  completionDate_in?: Maybe<Array<Scalars["String"]>>;
  completionDate_not_in?: Maybe<Array<Scalars["String"]>>;
  completionDate_contains?: Maybe<Scalars["String"]>;
  completionDate_not_contains?: Maybe<Scalars["String"]>;
  completionDate_starts_with?: Maybe<Scalars["String"]>;
  completionDate_not_starts_with?: Maybe<Scalars["String"]>;
  completionDate_ends_with?: Maybe<Scalars["String"]>;
  completionDate_not_ends_with?: Maybe<Scalars["String"]>;
  primaryCompletionDate?: Maybe<Scalars["String"]>;
  primaryCompletionDate_not?: Maybe<Scalars["String"]>;
  primaryCompletionDate_in?: Maybe<Array<Scalars["String"]>>;
  primaryCompletionDate_not_in?: Maybe<Array<Scalars["String"]>>;
  primaryCompletionDate_contains?: Maybe<Scalars["String"]>;
  primaryCompletionDate_not_contains?: Maybe<Scalars["String"]>;
  primaryCompletionDate_starts_with?: Maybe<Scalars["String"]>;
  primaryCompletionDate_not_starts_with?: Maybe<Scalars["String"]>;
  primaryCompletionDate_ends_with?: Maybe<Scalars["String"]>;
  primaryCompletionDate_not_ends_with?: Maybe<Scalars["String"]>;
  trials?: Maybe<_ClinicalTrialFilter>;
  trials_not?: Maybe<_ClinicalTrialFilter>;
  trials_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_some?: Maybe<_ClinicalTrialFilter>;
  trials_none?: Maybe<_ClinicalTrialFilter>;
  trials_single?: Maybe<_ClinicalTrialFilter>;
  trials_every?: Maybe<_ClinicalTrialFilter>;
};

export type _InvestigatorFilter = {
  AND?: Maybe<Array<_InvestigatorFilter>>;
  OR?: Maybe<Array<_InvestigatorFilter>>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  affiliation?: Maybe<Scalars["String"]>;
  affiliation_not?: Maybe<Scalars["String"]>;
  affiliation_in?: Maybe<Array<Scalars["String"]>>;
  affiliation_not_in?: Maybe<Array<Scalars["String"]>>;
  affiliation_contains?: Maybe<Scalars["String"]>;
  affiliation_not_contains?: Maybe<Scalars["String"]>;
  affiliation_starts_with?: Maybe<Scalars["String"]>;
  affiliation_not_starts_with?: Maybe<Scalars["String"]>;
  affiliation_ends_with?: Maybe<Scalars["String"]>;
  affiliation_not_ends_with?: Maybe<Scalars["String"]>;
  trials?: Maybe<_ClinicalTrialFilter>;
  trials_not?: Maybe<_ClinicalTrialFilter>;
  trials_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_some?: Maybe<_ClinicalTrialFilter>;
  trials_none?: Maybe<_ClinicalTrialFilter>;
  trials_single?: Maybe<_ClinicalTrialFilter>;
  trials_every?: Maybe<_ClinicalTrialFilter>;
  responsibilities?: Maybe<_ResponsibleFilter>;
  responsibilities_not?: Maybe<_ResponsibleFilter>;
  responsibilities_in?: Maybe<Array<_ResponsibleFilter>>;
  responsibilities_not_in?: Maybe<Array<_ResponsibleFilter>>;
  responsibilities_some?: Maybe<_ResponsibleFilter>;
  responsibilities_none?: Maybe<_ResponsibleFilter>;
  responsibilities_single?: Maybe<_ResponsibleFilter>;
  responsibilities_every?: Maybe<_ResponsibleFilter>;
};

export type _ResponsibleFilter = {
  AND?: Maybe<Array<_ResponsibleFilter>>;
  OR?: Maybe<Array<_ResponsibleFilter>>;
  type?: Maybe<Scalars["String"]>;
  type_not?: Maybe<Scalars["String"]>;
  type_in?: Maybe<Array<Scalars["String"]>>;
  type_not_in?: Maybe<Array<Scalars["String"]>>;
  type_contains?: Maybe<Scalars["String"]>;
  type_not_contains?: Maybe<Scalars["String"]>;
  type_starts_with?: Maybe<Scalars["String"]>;
  type_not_starts_with?: Maybe<Scalars["String"]>;
  type_ends_with?: Maybe<Scalars["String"]>;
  type_not_ends_with?: Maybe<Scalars["String"]>;
  investigator?: Maybe<_InvestigatorFilter>;
  investigator_not?: Maybe<_InvestigatorFilter>;
  investigator_in?: Maybe<Array<_InvestigatorFilter>>;
  investigator_not_in?: Maybe<Array<_InvestigatorFilter>>;
  investigator_some?: Maybe<_InvestigatorFilter>;
  investigator_none?: Maybe<_InvestigatorFilter>;
  investigator_single?: Maybe<_InvestigatorFilter>;
  investigator_every?: Maybe<_InvestigatorFilter>;
};

export type _DescriptionFilter = {
  AND?: Maybe<Array<_DescriptionFilter>>;
  OR?: Maybe<Array<_DescriptionFilter>>;
  detailed?: Maybe<Scalars["String"]>;
  detailed_not?: Maybe<Scalars["String"]>;
  detailed_in?: Maybe<Array<Scalars["String"]>>;
  detailed_not_in?: Maybe<Array<Scalars["String"]>>;
  detailed_contains?: Maybe<Scalars["String"]>;
  detailed_not_contains?: Maybe<Scalars["String"]>;
  detailed_starts_with?: Maybe<Scalars["String"]>;
  detailed_not_starts_with?: Maybe<Scalars["String"]>;
  detailed_ends_with?: Maybe<Scalars["String"]>;
  detailed_not_ends_with?: Maybe<Scalars["String"]>;
  summary?: Maybe<Scalars["String"]>;
  summary_not?: Maybe<Scalars["String"]>;
  summary_in?: Maybe<Array<Scalars["String"]>>;
  summary_not_in?: Maybe<Array<Scalars["String"]>>;
  summary_contains?: Maybe<Scalars["String"]>;
  summary_not_contains?: Maybe<Scalars["String"]>;
  summary_starts_with?: Maybe<Scalars["String"]>;
  summary_not_starts_with?: Maybe<Scalars["String"]>;
  summary_ends_with?: Maybe<Scalars["String"]>;
  summary_not_ends_with?: Maybe<Scalars["String"]>;
  trials?: Maybe<_ClinicalTrialFilter>;
  trials_not?: Maybe<_ClinicalTrialFilter>;
  trials_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_some?: Maybe<_ClinicalTrialFilter>;
  trials_none?: Maybe<_ClinicalTrialFilter>;
  trials_single?: Maybe<_ClinicalTrialFilter>;
  trials_every?: Maybe<_ClinicalTrialFilter>;
};

export type _DesignFilter = {
  AND?: Maybe<Array<_DesignFilter>>;
  OR?: Maybe<Array<_DesignFilter>>;
  model?: Maybe<Scalars["String"]>;
  model_not?: Maybe<Scalars["String"]>;
  model_in?: Maybe<Array<Scalars["String"]>>;
  model_not_in?: Maybe<Array<Scalars["String"]>>;
  model_contains?: Maybe<Scalars["String"]>;
  model_not_contains?: Maybe<Scalars["String"]>;
  model_starts_with?: Maybe<Scalars["String"]>;
  model_not_starts_with?: Maybe<Scalars["String"]>;
  model_ends_with?: Maybe<Scalars["String"]>;
  model_not_ends_with?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  trials?: Maybe<_ClinicalTrialFilter>;
  trials_not?: Maybe<_ClinicalTrialFilter>;
  trials_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_some?: Maybe<_ClinicalTrialFilter>;
  trials_none?: Maybe<_ClinicalTrialFilter>;
  trials_single?: Maybe<_ClinicalTrialFilter>;
  trials_every?: Maybe<_ClinicalTrialFilter>;
  arms?: Maybe<_ArmFilter>;
  arms_not?: Maybe<_ArmFilter>;
  arms_in?: Maybe<Array<_ArmFilter>>;
  arms_not_in?: Maybe<Array<_ArmFilter>>;
  arms_some?: Maybe<_ArmFilter>;
  arms_none?: Maybe<_ArmFilter>;
  arms_single?: Maybe<_ArmFilter>;
  arms_every?: Maybe<_ArmFilter>;
};

export type _ArmFilter = {
  AND?: Maybe<Array<_ArmFilter>>;
  OR?: Maybe<Array<_ArmFilter>>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  model?: Maybe<_DesignFilter>;
  model_not?: Maybe<_DesignFilter>;
  model_in?: Maybe<Array<_DesignFilter>>;
  model_not_in?: Maybe<Array<_DesignFilter>>;
  model_some?: Maybe<_DesignFilter>;
  model_none?: Maybe<_DesignFilter>;
  model_single?: Maybe<_DesignFilter>;
  model_every?: Maybe<_DesignFilter>;
  trials?: Maybe<_ClinicalTrialFilter>;
  trials_not?: Maybe<_ClinicalTrialFilter>;
  trials_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_some?: Maybe<_ClinicalTrialFilter>;
  trials_none?: Maybe<_ClinicalTrialFilter>;
  trials_single?: Maybe<_ClinicalTrialFilter>;
  trials_every?: Maybe<_ClinicalTrialFilter>;
};

export type _ObservationPeriodFilter = {
  AND?: Maybe<Array<_ObservationPeriodFilter>>;
  OR?: Maybe<Array<_ObservationPeriodFilter>>;
  time?: Maybe<Scalars["String"]>;
  time_not?: Maybe<Scalars["String"]>;
  time_in?: Maybe<Array<Scalars["String"]>>;
  time_not_in?: Maybe<Array<Scalars["String"]>>;
  time_contains?: Maybe<Scalars["String"]>;
  time_not_contains?: Maybe<Scalars["String"]>;
  time_starts_with?: Maybe<Scalars["String"]>;
  time_not_starts_with?: Maybe<Scalars["String"]>;
  time_ends_with?: Maybe<Scalars["String"]>;
  time_not_ends_with?: Maybe<Scalars["String"]>;
  trials?: Maybe<_ClinicalTrialFilter>;
  trials_not?: Maybe<_ClinicalTrialFilter>;
  trials_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_some?: Maybe<_ClinicalTrialFilter>;
  trials_none?: Maybe<_ClinicalTrialFilter>;
  trials_single?: Maybe<_ClinicalTrialFilter>;
  trials_every?: Maybe<_ClinicalTrialFilter>;
};

export type _OutcomeFilter = {
  AND?: Maybe<Array<_OutcomeFilter>>;
  OR?: Maybe<Array<_OutcomeFilter>>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  time?: Maybe<Scalars["String"]>;
  time_not?: Maybe<Scalars["String"]>;
  time_in?: Maybe<Array<Scalars["String"]>>;
  time_not_in?: Maybe<Array<Scalars["String"]>>;
  time_contains?: Maybe<Scalars["String"]>;
  time_not_contains?: Maybe<Scalars["String"]>;
  time_starts_with?: Maybe<Scalars["String"]>;
  time_not_starts_with?: Maybe<Scalars["String"]>;
  time_ends_with?: Maybe<Scalars["String"]>;
  time_not_ends_with?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  type_not?: Maybe<Scalars["String"]>;
  type_in?: Maybe<Array<Scalars["String"]>>;
  type_not_in?: Maybe<Array<Scalars["String"]>>;
  type_contains?: Maybe<Scalars["String"]>;
  type_not_contains?: Maybe<Scalars["String"]>;
  type_starts_with?: Maybe<Scalars["String"]>;
  type_not_starts_with?: Maybe<Scalars["String"]>;
  type_ends_with?: Maybe<Scalars["String"]>;
  type_not_ends_with?: Maybe<Scalars["String"]>;
  primaryOutcomes?: Maybe<_ClinicalTrialFilter>;
  primaryOutcomes_not?: Maybe<_ClinicalTrialFilter>;
  primaryOutcomes_in?: Maybe<Array<_ClinicalTrialFilter>>;
  primaryOutcomes_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  primaryOutcomes_some?: Maybe<_ClinicalTrialFilter>;
  primaryOutcomes_none?: Maybe<_ClinicalTrialFilter>;
  primaryOutcomes_single?: Maybe<_ClinicalTrialFilter>;
  primaryOutcomes_every?: Maybe<_ClinicalTrialFilter>;
  secondaryOutcomes?: Maybe<_ClinicalTrialFilter>;
  secondaryOutcomes_not?: Maybe<_ClinicalTrialFilter>;
  secondaryOutcomes_in?: Maybe<Array<_ClinicalTrialFilter>>;
  secondaryOutcomes_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  secondaryOutcomes_some?: Maybe<_ClinicalTrialFilter>;
  secondaryOutcomes_none?: Maybe<_ClinicalTrialFilter>;
  secondaryOutcomes_single?: Maybe<_ClinicalTrialFilter>;
  secondaryOutcomes_every?: Maybe<_ClinicalTrialFilter>;
  otherOutcomes?: Maybe<_ClinicalTrialFilter>;
  otherOutcomes_not?: Maybe<_ClinicalTrialFilter>;
  otherOutcomes_in?: Maybe<Array<_ClinicalTrialFilter>>;
  otherOutcomes_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  otherOutcomes_some?: Maybe<_ClinicalTrialFilter>;
  otherOutcomes_none?: Maybe<_ClinicalTrialFilter>;
  otherOutcomes_single?: Maybe<_ClinicalTrialFilter>;
  otherOutcomes_every?: Maybe<_ClinicalTrialFilter>;
};

export type _StudyPopulationFilter = {
  AND?: Maybe<Array<_StudyPopulationFilter>>;
  OR?: Maybe<Array<_StudyPopulationFilter>>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  sampling?: Maybe<Scalars["String"]>;
  sampling_not?: Maybe<Scalars["String"]>;
  sampling_in?: Maybe<Array<Scalars["String"]>>;
  sampling_not_in?: Maybe<Array<Scalars["String"]>>;
  sampling_contains?: Maybe<Scalars["String"]>;
  sampling_not_contains?: Maybe<Scalars["String"]>;
  sampling_starts_with?: Maybe<Scalars["String"]>;
  sampling_not_starts_with?: Maybe<Scalars["String"]>;
  sampling_ends_with?: Maybe<Scalars["String"]>;
  sampling_not_ends_with?: Maybe<Scalars["String"]>;
  genders?: Maybe<_GenderFilter>;
  genders_not?: Maybe<_GenderFilter>;
  genders_in?: Maybe<Array<_GenderFilter>>;
  genders_not_in?: Maybe<Array<_GenderFilter>>;
  genders_some?: Maybe<_GenderFilter>;
  genders_none?: Maybe<_GenderFilter>;
  genders_single?: Maybe<_GenderFilter>;
  genders_every?: Maybe<_GenderFilter>;
  ageRanges?: Maybe<_AgeRangeFilter>;
  ageRanges_not?: Maybe<_AgeRangeFilter>;
  ageRanges_in?: Maybe<Array<_AgeRangeFilter>>;
  ageRanges_not_in?: Maybe<Array<_AgeRangeFilter>>;
  ageRanges_some?: Maybe<_AgeRangeFilter>;
  ageRanges_none?: Maybe<_AgeRangeFilter>;
  ageRanges_single?: Maybe<_AgeRangeFilter>;
  ageRanges_every?: Maybe<_AgeRangeFilter>;
  trials?: Maybe<_ClinicalTrialFilter>;
  trials_not?: Maybe<_ClinicalTrialFilter>;
  trials_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_some?: Maybe<_ClinicalTrialFilter>;
  trials_none?: Maybe<_ClinicalTrialFilter>;
  trials_single?: Maybe<_ClinicalTrialFilter>;
  trials_every?: Maybe<_ClinicalTrialFilter>;
};

export type _GenderFilter = {
  AND?: Maybe<Array<_GenderFilter>>;
  OR?: Maybe<Array<_GenderFilter>>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  populations?: Maybe<_StudyPopulationFilter>;
  populations_not?: Maybe<_StudyPopulationFilter>;
  populations_in?: Maybe<Array<_StudyPopulationFilter>>;
  populations_not_in?: Maybe<Array<_StudyPopulationFilter>>;
  populations_some?: Maybe<_StudyPopulationFilter>;
  populations_none?: Maybe<_StudyPopulationFilter>;
  populations_single?: Maybe<_StudyPopulationFilter>;
  populations_every?: Maybe<_StudyPopulationFilter>;
};

export type _AgeRangeFilter = {
  AND?: Maybe<Array<_AgeRangeFilter>>;
  OR?: Maybe<Array<_AgeRangeFilter>>;
  maxAge?: Maybe<Scalars["String"]>;
  maxAge_not?: Maybe<Scalars["String"]>;
  maxAge_in?: Maybe<Array<Scalars["String"]>>;
  maxAge_not_in?: Maybe<Array<Scalars["String"]>>;
  maxAge_contains?: Maybe<Scalars["String"]>;
  maxAge_not_contains?: Maybe<Scalars["String"]>;
  maxAge_starts_with?: Maybe<Scalars["String"]>;
  maxAge_not_starts_with?: Maybe<Scalars["String"]>;
  maxAge_ends_with?: Maybe<Scalars["String"]>;
  maxAge_not_ends_with?: Maybe<Scalars["String"]>;
  minAge?: Maybe<Scalars["String"]>;
  minAge_not?: Maybe<Scalars["String"]>;
  minAge_in?: Maybe<Array<Scalars["String"]>>;
  minAge_not_in?: Maybe<Array<Scalars["String"]>>;
  minAge_contains?: Maybe<Scalars["String"]>;
  minAge_not_contains?: Maybe<Scalars["String"]>;
  minAge_starts_with?: Maybe<Scalars["String"]>;
  minAge_not_starts_with?: Maybe<Scalars["String"]>;
  minAge_ends_with?: Maybe<Scalars["String"]>;
  minAge_not_ends_with?: Maybe<Scalars["String"]>;
  populations?: Maybe<_StudyPopulationFilter>;
  populations_not?: Maybe<_StudyPopulationFilter>;
  populations_in?: Maybe<Array<_StudyPopulationFilter>>;
  populations_not_in?: Maybe<Array<_StudyPopulationFilter>>;
  populations_some?: Maybe<_StudyPopulationFilter>;
  populations_none?: Maybe<_StudyPopulationFilter>;
  populations_single?: Maybe<_StudyPopulationFilter>;
  populations_every?: Maybe<_StudyPopulationFilter>;
};

export type _InclusionCriteriaFilter = {
  AND?: Maybe<Array<_InclusionCriteriaFilter>>;
  OR?: Maybe<Array<_InclusionCriteriaFilter>>;
  criteria?: Maybe<Scalars["String"]>;
  criteria_not?: Maybe<Scalars["String"]>;
  criteria_in?: Maybe<Array<Scalars["String"]>>;
  criteria_not_in?: Maybe<Array<Scalars["String"]>>;
  criteria_contains?: Maybe<Scalars["String"]>;
  criteria_not_contains?: Maybe<Scalars["String"]>;
  criteria_starts_with?: Maybe<Scalars["String"]>;
  criteria_not_starts_with?: Maybe<Scalars["String"]>;
  criteria_ends_with?: Maybe<Scalars["String"]>;
  criteria_not_ends_with?: Maybe<Scalars["String"]>;
  trials?: Maybe<_ClinicalTrialFilter>;
  trials_not?: Maybe<_ClinicalTrialFilter>;
  trials_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_some?: Maybe<_ClinicalTrialFilter>;
  trials_none?: Maybe<_ClinicalTrialFilter>;
  trials_single?: Maybe<_ClinicalTrialFilter>;
  trials_every?: Maybe<_ClinicalTrialFilter>;
};

export type _ExclusionCriteriaFilter = {
  AND?: Maybe<Array<_ExclusionCriteriaFilter>>;
  OR?: Maybe<Array<_ExclusionCriteriaFilter>>;
  criteria?: Maybe<Scalars["String"]>;
  criteria_not?: Maybe<Scalars["String"]>;
  criteria_in?: Maybe<Array<Scalars["String"]>>;
  criteria_not_in?: Maybe<Array<Scalars["String"]>>;
  criteria_contains?: Maybe<Scalars["String"]>;
  criteria_not_contains?: Maybe<Scalars["String"]>;
  criteria_starts_with?: Maybe<Scalars["String"]>;
  criteria_not_starts_with?: Maybe<Scalars["String"]>;
  criteria_ends_with?: Maybe<Scalars["String"]>;
  criteria_not_ends_with?: Maybe<Scalars["String"]>;
  trials?: Maybe<_ClinicalTrialFilter>;
  trials_not?: Maybe<_ClinicalTrialFilter>;
  trials_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_some?: Maybe<_ClinicalTrialFilter>;
  trials_none?: Maybe<_ClinicalTrialFilter>;
  trials_single?: Maybe<_ClinicalTrialFilter>;
  trials_every?: Maybe<_ClinicalTrialFilter>;
};

export type _ContactFilter = {
  AND?: Maybe<Array<_ContactFilter>>;
  OR?: Maybe<Array<_ContactFilter>>;
  email?: Maybe<Scalars["String"]>;
  email_not?: Maybe<Scalars["String"]>;
  email_in?: Maybe<Array<Scalars["String"]>>;
  email_not_in?: Maybe<Array<Scalars["String"]>>;
  email_contains?: Maybe<Scalars["String"]>;
  email_not_contains?: Maybe<Scalars["String"]>;
  email_starts_with?: Maybe<Scalars["String"]>;
  email_not_starts_with?: Maybe<Scalars["String"]>;
  email_ends_with?: Maybe<Scalars["String"]>;
  email_not_ends_with?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  trials?: Maybe<_ClinicalTrialFilter>;
  trials_not?: Maybe<_ClinicalTrialFilter>;
  trials_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_some?: Maybe<_ClinicalTrialFilter>;
  trials_none?: Maybe<_ClinicalTrialFilter>;
  trials_single?: Maybe<_ClinicalTrialFilter>;
  trials_every?: Maybe<_ClinicalTrialFilter>;
};

export type _BioSpecimenFilter = {
  AND?: Maybe<Array<_BioSpecimenFilter>>;
  OR?: Maybe<Array<_BioSpecimenFilter>>;
  retension?: Maybe<Scalars["String"]>;
  retension_not?: Maybe<Scalars["String"]>;
  retension_in?: Maybe<Array<Scalars["String"]>>;
  retension_not_in?: Maybe<Array<Scalars["String"]>>;
  retension_contains?: Maybe<Scalars["String"]>;
  retension_not_contains?: Maybe<Scalars["String"]>;
  retension_starts_with?: Maybe<Scalars["String"]>;
  retension_not_starts_with?: Maybe<Scalars["String"]>;
  retension_ends_with?: Maybe<Scalars["String"]>;
  retension_not_ends_with?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  trials?: Maybe<_ClinicalTrialFilter>;
  trials_not?: Maybe<_ClinicalTrialFilter>;
  trials_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_not_in?: Maybe<Array<_ClinicalTrialFilter>>;
  trials_some?: Maybe<_ClinicalTrialFilter>;
  trials_none?: Maybe<_ClinicalTrialFilter>;
  trials_single?: Maybe<_ClinicalTrialFilter>;
  trials_every?: Maybe<_ClinicalTrialFilter>;
};

export type _AbstractAbstractMentionsFilter = {
  AND?: Maybe<Array<_AbstractAbstractMentionsFilter>>;
  OR?: Maybe<Array<_AbstractAbstractMentionsFilter>>;
  count?: Maybe<Scalars["Int"]>;
  count_not?: Maybe<Scalars["Int"]>;
  count_in?: Maybe<Array<Scalars["Int"]>>;
  count_not_in?: Maybe<Array<Scalars["Int"]>>;
  count_lt?: Maybe<Scalars["Int"]>;
  count_lte?: Maybe<Scalars["Int"]>;
  count_gt?: Maybe<Scalars["Int"]>;
  count_gte?: Maybe<Scalars["Int"]>;
  namedEntity?: Maybe<_NamedEntityFilter>;
};

export type _NamedEntityFilter = {
  AND?: Maybe<Array<_NamedEntityFilter>>;
  OR?: Maybe<Array<_NamedEntityFilter>>;
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  external_ids?: Maybe<Array<Scalars["ID"]>>;
  external_ids_not?: Maybe<Array<Scalars["ID"]>>;
  external_ids_contains?: Maybe<Array<Scalars["ID"]>>;
  external_ids_not_contains?: Maybe<Array<Scalars["ID"]>>;
  external_ids_starts_with?: Maybe<Array<Scalars["ID"]>>;
  external_ids_not_starts_with?: Maybe<Array<Scalars["ID"]>>;
  external_ids_ends_with?: Maybe<Array<Scalars["ID"]>>;
  external_ids_not_ends_with?: Maybe<Array<Scalars["ID"]>>;
  type?: Maybe<Scalars["String"]>;
  type_not?: Maybe<Scalars["String"]>;
  type_in?: Maybe<Array<Scalars["String"]>>;
  type_not_in?: Maybe<Array<Scalars["String"]>>;
  type_contains?: Maybe<Scalars["String"]>;
  type_not_contains?: Maybe<Scalars["String"]>;
  type_starts_with?: Maybe<Scalars["String"]>;
  type_not_starts_with?: Maybe<Scalars["String"]>;
  type_ends_with?: Maybe<Scalars["String"]>;
  type_not_ends_with?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
  value_not?: Maybe<Scalars["String"]>;
  value_in?: Maybe<Array<Scalars["String"]>>;
  value_not_in?: Maybe<Array<Scalars["String"]>>;
  value_contains?: Maybe<Scalars["String"]>;
  value_not_contains?: Maybe<Scalars["String"]>;
  value_starts_with?: Maybe<Scalars["String"]>;
  value_not_starts_with?: Maybe<Scalars["String"]>;
  value_ends_with?: Maybe<Scalars["String"]>;
  value_not_ends_with?: Maybe<Scalars["String"]>;
  mentionedInAbstracts?: Maybe<_NamedEntityAbstractMentionsFilter>;
  mentionedInAbstracts_not?: Maybe<_NamedEntityAbstractMentionsFilter>;
  mentionedInAbstracts_in?: Maybe<Array<_NamedEntityAbstractMentionsFilter>>;
  mentionedInAbstracts_not_in?: Maybe<
    Array<_NamedEntityAbstractMentionsFilter>
  >;
  mentionedInAbstracts_some?: Maybe<_NamedEntityAbstractMentionsFilter>;
  mentionedInAbstracts_none?: Maybe<_NamedEntityAbstractMentionsFilter>;
  mentionedInAbstracts_single?: Maybe<_NamedEntityAbstractMentionsFilter>;
  mentionedInAbstracts_every?: Maybe<_NamedEntityAbstractMentionsFilter>;
};

export type _NamedEntityAbstractMentionsFilter = {
  AND?: Maybe<Array<_NamedEntityAbstractMentionsFilter>>;
  OR?: Maybe<Array<_NamedEntityAbstractMentionsFilter>>;
  count?: Maybe<Scalars["Int"]>;
  count_not?: Maybe<Scalars["Int"]>;
  count_in?: Maybe<Array<Scalars["Int"]>>;
  count_not_in?: Maybe<Array<Scalars["Int"]>>;
  count_lt?: Maybe<Scalars["Int"]>;
  count_lte?: Maybe<Scalars["Int"]>;
  count_gt?: Maybe<Scalars["Int"]>;
  count_gte?: Maybe<Scalars["Int"]>;
  abstract?: Maybe<_AbstractFilter>;
};

export type _PaperHasPaperIdFilter = {
  AND?: Maybe<Array<_PaperHasPaperIdFilter>>;
  OR?: Maybe<Array<_PaperHasPaperIdFilter>>;
  position?: Maybe<Scalars["Int"]>;
  position_not?: Maybe<Scalars["Int"]>;
  position_in?: Maybe<Array<Scalars["Int"]>>;
  position_not_in?: Maybe<Array<Scalars["Int"]>>;
  position_lt?: Maybe<Scalars["Int"]>;
  position_lte?: Maybe<Scalars["Int"]>;
  position_gt?: Maybe<Scalars["Int"]>;
  position_gte?: Maybe<Scalars["Int"]>;
  id?: Maybe<_PaperIdFilter>;
};

export type _BodyTextCollectionHasBodyTextFilter = {
  AND?: Maybe<Array<_BodyTextCollectionHasBodyTextFilter>>;
  OR?: Maybe<Array<_BodyTextCollectionHasBodyTextFilter>>;
  position?: Maybe<Scalars["Int"]>;
  position_not?: Maybe<Scalars["Int"]>;
  position_in?: Maybe<Array<Scalars["Int"]>>;
  position_not_in?: Maybe<Array<Scalars["Int"]>>;
  position_lt?: Maybe<Scalars["Int"]>;
  position_lte?: Maybe<Scalars["Int"]>;
  position_gt?: Maybe<Scalars["Int"]>;
  position_gte?: Maybe<Scalars["Int"]>;
  bodyText?: Maybe<_BodyTextFilter>;
};

export type _BodyTextHasCitationFilter = {
  AND?: Maybe<Array<_BodyTextHasCitationFilter>>;
  OR?: Maybe<Array<_BodyTextHasCitationFilter>>;
  position?: Maybe<Scalars["Int"]>;
  position_not?: Maybe<Scalars["Int"]>;
  position_in?: Maybe<Array<Scalars["Int"]>>;
  position_not_in?: Maybe<Array<Scalars["Int"]>>;
  position_lt?: Maybe<Scalars["Int"]>;
  position_lte?: Maybe<Scalars["Int"]>;
  position_gt?: Maybe<Scalars["Int"]>;
  position_gte?: Maybe<Scalars["Int"]>;
  citation?: Maybe<_CitationFilter>;
};

export type _FromBodyTextFromBodyTextMentionsFilter = {
  AND?: Maybe<Array<_FromBodyTextFromBodyTextMentionsFilter>>;
  OR?: Maybe<Array<_FromBodyTextFromBodyTextMentionsFilter>>;
  score?: Maybe<Scalars["Float"]>;
  score_not?: Maybe<Scalars["Float"]>;
  score_in?: Maybe<Array<Scalars["Float"]>>;
  score_not_in?: Maybe<Array<Scalars["Float"]>>;
  score_lt?: Maybe<Scalars["Float"]>;
  score_lte?: Maybe<Scalars["Float"]>;
  score_gt?: Maybe<Scalars["Float"]>;
  score_gte?: Maybe<Scalars["Float"]>;
  geneSymbol?: Maybe<_GeneSymbolFilter>;
};

export type _GeneSymbolFromAbstractMentionsFilter = {
  AND?: Maybe<Array<_GeneSymbolFromAbstractMentionsFilter>>;
  OR?: Maybe<Array<_GeneSymbolFromAbstractMentionsFilter>>;
  score?: Maybe<Scalars["Float"]>;
  score_not?: Maybe<Scalars["Float"]>;
  score_in?: Maybe<Array<Scalars["Float"]>>;
  score_not_in?: Maybe<Array<Scalars["Float"]>>;
  score_lt?: Maybe<Scalars["Float"]>;
  score_lte?: Maybe<Scalars["Float"]>;
  score_gt?: Maybe<Scalars["Float"]>;
  score_gte?: Maybe<Scalars["Float"]>;
  fromAbstract?: Maybe<_FromAbstractFilter>;
};

export type _GeneSymbolPatentDescriptionMentionsGeneSymbolFilter = {
  AND?: Maybe<Array<_GeneSymbolPatentDescriptionMentionsGeneSymbolFilter>>;
  OR?: Maybe<Array<_GeneSymbolPatentDescriptionMentionsGeneSymbolFilter>>;
  score?: Maybe<Scalars["Float"]>;
  score_not?: Maybe<Scalars["Float"]>;
  score_in?: Maybe<Array<Scalars["Float"]>>;
  score_not_in?: Maybe<Array<Scalars["Float"]>>;
  score_lt?: Maybe<Scalars["Float"]>;
  score_lte?: Maybe<Scalars["Float"]>;
  score_gt?: Maybe<Scalars["Float"]>;
  score_gte?: Maybe<Scalars["Float"]>;
  description?: Maybe<_FromPatentDescriptionFilter>;
};

export type _FromPatentDescriptionFilter = {
  AND?: Maybe<Array<_FromPatentDescriptionFilter>>;
  OR?: Maybe<Array<_FromPatentDescriptionFilter>>;
  text?: Maybe<Scalars["String"]>;
  text_not?: Maybe<Scalars["String"]>;
  text_in?: Maybe<Array<Scalars["String"]>>;
  text_not_in?: Maybe<Array<Scalars["String"]>>;
  text_contains?: Maybe<Scalars["String"]>;
  text_not_contains?: Maybe<Scalars["String"]>;
  text_starts_with?: Maybe<Scalars["String"]>;
  text_not_starts_with?: Maybe<Scalars["String"]>;
  text_ends_with?: Maybe<Scalars["String"]>;
  text_not_ends_with?: Maybe<Scalars["String"]>;
  kind?: Maybe<Scalars["String"]>;
  kind_not?: Maybe<Scalars["String"]>;
  kind_in?: Maybe<Array<Scalars["String"]>>;
  kind_not_in?: Maybe<Array<Scalars["String"]>>;
  kind_contains?: Maybe<Scalars["String"]>;
  kind_not_contains?: Maybe<Scalars["String"]>;
  kind_starts_with?: Maybe<Scalars["String"]>;
  kind_not_starts_with?: Maybe<Scalars["String"]>;
  kind_ends_with?: Maybe<Scalars["String"]>;
  kind_not_ends_with?: Maybe<Scalars["String"]>;
  sequence?: Maybe<Scalars["Int"]>;
  sequence_not?: Maybe<Scalars["Int"]>;
  sequence_in?: Maybe<Array<Scalars["Int"]>>;
  sequence_not_in?: Maybe<Array<Scalars["Int"]>>;
  sequence_lt?: Maybe<Scalars["Int"]>;
  sequence_lte?: Maybe<Scalars["Int"]>;
  sequence_gt?: Maybe<Scalars["Int"]>;
  sequence_gte?: Maybe<Scalars["Int"]>;
  patentDescriptions?: Maybe<_PatentDescriptionFilter>;
  patentDescriptions_not?: Maybe<_PatentDescriptionFilter>;
  patentDescriptions_in?: Maybe<Array<_PatentDescriptionFilter>>;
  patentDescriptions_not_in?: Maybe<Array<_PatentDescriptionFilter>>;
  patentDescriptions_some?: Maybe<_PatentDescriptionFilter>;
  patentDescriptions_none?: Maybe<_PatentDescriptionFilter>;
  patentDescriptions_single?: Maybe<_PatentDescriptionFilter>;
  patentDescriptions_every?: Maybe<_PatentDescriptionFilter>;
  next?: Maybe<_FromPatentDescriptionFilter>;
  next_not?: Maybe<_FromPatentDescriptionFilter>;
  next_in?: Maybe<Array<_FromPatentDescriptionFilter>>;
  next_not_in?: Maybe<Array<_FromPatentDescriptionFilter>>;
  geneSymbols?: Maybe<_FromPatentDescriptionPatentDescriptionMentionsGeneSymbolFilter>;
  geneSymbols_not?: Maybe<_FromPatentDescriptionPatentDescriptionMentionsGeneSymbolFilter>;
  geneSymbols_in?: Maybe<
    Array<_FromPatentDescriptionPatentDescriptionMentionsGeneSymbolFilter>
  >;
  geneSymbols_not_in?: Maybe<
    Array<_FromPatentDescriptionPatentDescriptionMentionsGeneSymbolFilter>
  >;
  geneSymbols_some?: Maybe<_FromPatentDescriptionPatentDescriptionMentionsGeneSymbolFilter>;
  geneSymbols_none?: Maybe<_FromPatentDescriptionPatentDescriptionMentionsGeneSymbolFilter>;
  geneSymbols_single?: Maybe<_FromPatentDescriptionPatentDescriptionMentionsGeneSymbolFilter>;
  geneSymbols_every?: Maybe<_FromPatentDescriptionPatentDescriptionMentionsGeneSymbolFilter>;
};

export type _PatentDescriptionFilter = {
  AND?: Maybe<Array<_PatentDescriptionFilter>>;
  OR?: Maybe<Array<_PatentDescriptionFilter>>;
  _hash_id?: Maybe<Scalars["ID"]>;
  _hash_id_not?: Maybe<Scalars["ID"]>;
  _hash_id_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_contains?: Maybe<Scalars["ID"]>;
  _hash_id_not_contains?: Maybe<Scalars["ID"]>;
  _hash_id_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_ends_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_ends_with?: Maybe<Scalars["ID"]>;
  lang?: Maybe<Scalars["String"]>;
  lang_not?: Maybe<Scalars["String"]>;
  lang_in?: Maybe<Array<Scalars["String"]>>;
  lang_not_in?: Maybe<Array<Scalars["String"]>>;
  lang_contains?: Maybe<Scalars["String"]>;
  lang_not_contains?: Maybe<Scalars["String"]>;
  lang_starts_with?: Maybe<Scalars["String"]>;
  lang_not_starts_with?: Maybe<Scalars["String"]>;
  lang_ends_with?: Maybe<Scalars["String"]>;
  lang_not_ends_with?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  text_not?: Maybe<Scalars["String"]>;
  text_in?: Maybe<Array<Scalars["String"]>>;
  text_not_in?: Maybe<Array<Scalars["String"]>>;
  text_contains?: Maybe<Scalars["String"]>;
  text_not_contains?: Maybe<Scalars["String"]>;
  text_starts_with?: Maybe<Scalars["String"]>;
  text_not_starts_with?: Maybe<Scalars["String"]>;
  text_ends_with?: Maybe<Scalars["String"]>;
  text_not_ends_with?: Maybe<Scalars["String"]>;
  patents?: Maybe<_PatentFilter>;
  patents_not?: Maybe<_PatentFilter>;
  patents_in?: Maybe<Array<_PatentFilter>>;
  patents_not_in?: Maybe<Array<_PatentFilter>>;
  patents_some?: Maybe<_PatentFilter>;
  patents_none?: Maybe<_PatentFilter>;
  patents_single?: Maybe<_PatentFilter>;
  patents_every?: Maybe<_PatentFilter>;
  fragments?: Maybe<_FromPatentDescriptionFilter>;
  fragments_not?: Maybe<_FromPatentDescriptionFilter>;
  fragments_in?: Maybe<Array<_FromPatentDescriptionFilter>>;
  fragments_not_in?: Maybe<Array<_FromPatentDescriptionFilter>>;
  fragments_some?: Maybe<_FromPatentDescriptionFilter>;
  fragments_none?: Maybe<_FromPatentDescriptionFilter>;
  fragments_single?: Maybe<_FromPatentDescriptionFilter>;
  fragments_every?: Maybe<_FromPatentDescriptionFilter>;
};

export type _PatentFilter = {
  AND?: Maybe<Array<_PatentFilter>>;
  OR?: Maybe<Array<_PatentFilter>>;
  filing_key?: Maybe<Scalars["ID"]>;
  filing_key_not?: Maybe<Scalars["ID"]>;
  filing_key_in?: Maybe<Array<Scalars["ID"]>>;
  filing_key_not_in?: Maybe<Array<Scalars["ID"]>>;
  filing_key_contains?: Maybe<Scalars["ID"]>;
  filing_key_not_contains?: Maybe<Scalars["ID"]>;
  filing_key_starts_with?: Maybe<Scalars["ID"]>;
  filing_key_not_starts_with?: Maybe<Scalars["ID"]>;
  filing_key_ends_with?: Maybe<Scalars["ID"]>;
  filing_key_not_ends_with?: Maybe<Scalars["ID"]>;
  filing_date?: Maybe<Scalars["String"]>;
  filing_date_not?: Maybe<Scalars["String"]>;
  filing_date_in?: Maybe<Array<Scalars["String"]>>;
  filing_date_not_in?: Maybe<Array<Scalars["String"]>>;
  filing_date_contains?: Maybe<Scalars["String"]>;
  filing_date_not_contains?: Maybe<Scalars["String"]>;
  filing_date_starts_with?: Maybe<Scalars["String"]>;
  filing_date_not_starts_with?: Maybe<Scalars["String"]>;
  filing_date_ends_with?: Maybe<Scalars["String"]>;
  filing_date_not_ends_with?: Maybe<Scalars["String"]>;
  jurisdiction?: Maybe<Scalars["String"]>;
  jurisdiction_not?: Maybe<Scalars["String"]>;
  jurisdiction_in?: Maybe<Array<Scalars["String"]>>;
  jurisdiction_not_in?: Maybe<Array<Scalars["String"]>>;
  jurisdiction_contains?: Maybe<Scalars["String"]>;
  jurisdiction_not_contains?: Maybe<Scalars["String"]>;
  jurisdiction_starts_with?: Maybe<Scalars["String"]>;
  jurisdiction_not_starts_with?: Maybe<Scalars["String"]>;
  jurisdiction_ends_with?: Maybe<Scalars["String"]>;
  jurisdiction_not_ends_with?: Maybe<Scalars["String"]>;
  lens_id?: Maybe<Scalars["ID"]>;
  lens_id_not?: Maybe<Scalars["ID"]>;
  lens_id_in?: Maybe<Array<Scalars["ID"]>>;
  lens_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  lens_id_contains?: Maybe<Scalars["ID"]>;
  lens_id_not_contains?: Maybe<Scalars["ID"]>;
  lens_id_starts_with?: Maybe<Scalars["ID"]>;
  lens_id_not_starts_with?: Maybe<Scalars["ID"]>;
  lens_id_ends_with?: Maybe<Scalars["ID"]>;
  lens_id_not_ends_with?: Maybe<Scalars["ID"]>;
  lens_url?: Maybe<Scalars["String"]>;
  lens_url_not?: Maybe<Scalars["String"]>;
  lens_url_in?: Maybe<Array<Scalars["String"]>>;
  lens_url_not_in?: Maybe<Array<Scalars["String"]>>;
  lens_url_contains?: Maybe<Scalars["String"]>;
  lens_url_not_contains?: Maybe<Scalars["String"]>;
  lens_url_starts_with?: Maybe<Scalars["String"]>;
  lens_url_not_starts_with?: Maybe<Scalars["String"]>;
  lens_url_ends_with?: Maybe<Scalars["String"]>;
  lens_url_not_ends_with?: Maybe<Scalars["String"]>;
  pub_date?: Maybe<Scalars["String"]>;
  pub_date_not?: Maybe<Scalars["String"]>;
  pub_date_in?: Maybe<Array<Scalars["String"]>>;
  pub_date_not_in?: Maybe<Array<Scalars["String"]>>;
  pub_date_contains?: Maybe<Scalars["String"]>;
  pub_date_not_contains?: Maybe<Scalars["String"]>;
  pub_date_starts_with?: Maybe<Scalars["String"]>;
  pub_date_not_starts_with?: Maybe<Scalars["String"]>;
  pub_date_ends_with?: Maybe<Scalars["String"]>;
  pub_date_not_ends_with?: Maybe<Scalars["String"]>;
  pub_key?: Maybe<Scalars["ID"]>;
  pub_key_not?: Maybe<Scalars["ID"]>;
  pub_key_in?: Maybe<Array<Scalars["ID"]>>;
  pub_key_not_in?: Maybe<Array<Scalars["ID"]>>;
  pub_key_contains?: Maybe<Scalars["ID"]>;
  pub_key_not_contains?: Maybe<Scalars["ID"]>;
  pub_key_starts_with?: Maybe<Scalars["ID"]>;
  pub_key_not_starts_with?: Maybe<Scalars["ID"]>;
  pub_key_ends_with?: Maybe<Scalars["ID"]>;
  pub_key_not_ends_with?: Maybe<Scalars["ID"]>;
  type?: Maybe<Scalars["String"]>;
  type_not?: Maybe<Scalars["String"]>;
  type_in?: Maybe<Array<Scalars["String"]>>;
  type_not_in?: Maybe<Array<Scalars["String"]>>;
  type_contains?: Maybe<Scalars["String"]>;
  type_not_contains?: Maybe<Scalars["String"]>;
  type_starts_with?: Maybe<Scalars["String"]>;
  type_not_starts_with?: Maybe<Scalars["String"]>;
  type_ends_with?: Maybe<Scalars["String"]>;
  type_not_ends_with?: Maybe<Scalars["String"]>;
  lensId?: Maybe<_LensIdFilter>;
  lensId_not?: Maybe<_LensIdFilter>;
  lensId_in?: Maybe<Array<_LensIdFilter>>;
  lensId_not_in?: Maybe<Array<_LensIdFilter>>;
  lensId_some?: Maybe<_LensIdFilter>;
  lensId_none?: Maybe<_LensIdFilter>;
  lensId_single?: Maybe<_LensIdFilter>;
  lensId_every?: Maybe<_LensIdFilter>;
  number?: Maybe<_PatentNumberFilter>;
  number_not?: Maybe<_PatentNumberFilter>;
  number_in?: Maybe<Array<_PatentNumberFilter>>;
  number_not_in?: Maybe<Array<_PatentNumberFilter>>;
  number_some?: Maybe<_PatentNumberFilter>;
  number_none?: Maybe<_PatentNumberFilter>;
  number_single?: Maybe<_PatentNumberFilter>;
  number_every?: Maybe<_PatentNumberFilter>;
  classifications?: Maybe<_PatentClassificationCollectionFilter>;
  classifications_not?: Maybe<_PatentClassificationCollectionFilter>;
  classifications_in?: Maybe<Array<_PatentClassificationCollectionFilter>>;
  classifications_not_in?: Maybe<Array<_PatentClassificationCollectionFilter>>;
  classifications_some?: Maybe<_PatentClassificationCollectionFilter>;
  classifications_none?: Maybe<_PatentClassificationCollectionFilter>;
  classifications_single?: Maybe<_PatentClassificationCollectionFilter>;
  classifications_every?: Maybe<_PatentClassificationCollectionFilter>;
  citations?: Maybe<_PatentCitationCollectionFilter>;
  citations_not?: Maybe<_PatentCitationCollectionFilter>;
  citations_in?: Maybe<Array<_PatentCitationCollectionFilter>>;
  citations_not_in?: Maybe<Array<_PatentCitationCollectionFilter>>;
  citations_some?: Maybe<_PatentCitationCollectionFilter>;
  citations_none?: Maybe<_PatentCitationCollectionFilter>;
  citations_single?: Maybe<_PatentCitationCollectionFilter>;
  citations_every?: Maybe<_PatentCitationCollectionFilter>;
  abstracts?: Maybe<_PatentHasPatentAbstractFilter>;
  abstracts_not?: Maybe<_PatentHasPatentAbstractFilter>;
  abstracts_in?: Maybe<Array<_PatentHasPatentAbstractFilter>>;
  abstracts_not_in?: Maybe<Array<_PatentHasPatentAbstractFilter>>;
  abstracts_some?: Maybe<_PatentHasPatentAbstractFilter>;
  abstracts_none?: Maybe<_PatentHasPatentAbstractFilter>;
  abstracts_single?: Maybe<_PatentHasPatentAbstractFilter>;
  abstracts_every?: Maybe<_PatentHasPatentAbstractFilter>;
  inventors?: Maybe<_PatentInventorFilter>;
  inventors_not?: Maybe<_PatentInventorFilter>;
  inventors_in?: Maybe<Array<_PatentInventorFilter>>;
  inventors_not_in?: Maybe<Array<_PatentInventorFilter>>;
  inventors_some?: Maybe<_PatentInventorFilter>;
  inventors_none?: Maybe<_PatentInventorFilter>;
  inventors_single?: Maybe<_PatentInventorFilter>;
  inventors_every?: Maybe<_PatentInventorFilter>;
  applicants?: Maybe<_PatentApplicantFilter>;
  applicants_not?: Maybe<_PatentApplicantFilter>;
  applicants_in?: Maybe<Array<_PatentApplicantFilter>>;
  applicants_not_in?: Maybe<Array<_PatentApplicantFilter>>;
  applicants_some?: Maybe<_PatentApplicantFilter>;
  applicants_none?: Maybe<_PatentApplicantFilter>;
  applicants_single?: Maybe<_PatentApplicantFilter>;
  applicants_every?: Maybe<_PatentApplicantFilter>;
  titles?: Maybe<_PatentHasPatentTitleFilter>;
  titles_not?: Maybe<_PatentHasPatentTitleFilter>;
  titles_in?: Maybe<Array<_PatentHasPatentTitleFilter>>;
  titles_not_in?: Maybe<Array<_PatentHasPatentTitleFilter>>;
  titles_some?: Maybe<_PatentHasPatentTitleFilter>;
  titles_none?: Maybe<_PatentHasPatentTitleFilter>;
  titles_single?: Maybe<_PatentHasPatentTitleFilter>;
  titles_every?: Maybe<_PatentHasPatentTitleFilter>;
  descriptions?: Maybe<_PatentHasPatentDescriptionFilter>;
  descriptions_not?: Maybe<_PatentHasPatentDescriptionFilter>;
  descriptions_in?: Maybe<Array<_PatentHasPatentDescriptionFilter>>;
  descriptions_not_in?: Maybe<Array<_PatentHasPatentDescriptionFilter>>;
  descriptions_some?: Maybe<_PatentHasPatentDescriptionFilter>;
  descriptions_none?: Maybe<_PatentHasPatentDescriptionFilter>;
  descriptions_single?: Maybe<_PatentHasPatentDescriptionFilter>;
  descriptions_every?: Maybe<_PatentHasPatentDescriptionFilter>;
  claims?: Maybe<_PatentHasPatentClaimFilter>;
  claims_not?: Maybe<_PatentHasPatentClaimFilter>;
  claims_in?: Maybe<Array<_PatentHasPatentClaimFilter>>;
  claims_not_in?: Maybe<Array<_PatentHasPatentClaimFilter>>;
  claims_some?: Maybe<_PatentHasPatentClaimFilter>;
  claims_none?: Maybe<_PatentHasPatentClaimFilter>;
  claims_single?: Maybe<_PatentHasPatentClaimFilter>;
  claims_every?: Maybe<_PatentHasPatentClaimFilter>;
  owner?: Maybe<_PatentOwnerFilter>;
  owner_not?: Maybe<_PatentOwnerFilter>;
  owner_in?: Maybe<Array<_PatentOwnerFilter>>;
  owner_not_in?: Maybe<Array<_PatentOwnerFilter>>;
  owner_some?: Maybe<_PatentOwnerFilter>;
  owner_none?: Maybe<_PatentOwnerFilter>;
  owner_single?: Maybe<_PatentOwnerFilter>;
  owner_every?: Maybe<_PatentOwnerFilter>;
};

export type _LensIdFilter = {
  AND?: Maybe<Array<_LensIdFilter>>;
  OR?: Maybe<Array<_LensIdFilter>>;
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  patents?: Maybe<_PatentFilter>;
  patents_not?: Maybe<_PatentFilter>;
  patents_in?: Maybe<Array<_PatentFilter>>;
  patents_not_in?: Maybe<Array<_PatentFilter>>;
  patents_some?: Maybe<_PatentFilter>;
  patents_none?: Maybe<_PatentFilter>;
  patents_single?: Maybe<_PatentFilter>;
  patents_every?: Maybe<_PatentFilter>;
  familys?: Maybe<_PatentFamilyFilter>;
  familys_not?: Maybe<_PatentFamilyFilter>;
  familys_in?: Maybe<Array<_PatentFamilyFilter>>;
  familys_not_in?: Maybe<Array<_PatentFamilyFilter>>;
  familys_some?: Maybe<_PatentFamilyFilter>;
  familys_none?: Maybe<_PatentFamilyFilter>;
  familys_single?: Maybe<_PatentFamilyFilter>;
  familys_every?: Maybe<_PatentFamilyFilter>;
};

export type _PatentFamilyFilter = {
  AND?: Maybe<Array<_PatentFamilyFilter>>;
  OR?: Maybe<Array<_PatentFamilyFilter>>;
  family_id?: Maybe<Scalars["Int"]>;
  family_id_not?: Maybe<Scalars["Int"]>;
  family_id_in?: Maybe<Array<Scalars["Int"]>>;
  family_id_not_in?: Maybe<Array<Scalars["Int"]>>;
  family_id_lt?: Maybe<Scalars["Int"]>;
  family_id_lte?: Maybe<Scalars["Int"]>;
  family_id_gt?: Maybe<Scalars["Int"]>;
  family_id_gte?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["Int"]>;
  size_not?: Maybe<Scalars["Int"]>;
  size_in?: Maybe<Array<Scalars["Int"]>>;
  size_not_in?: Maybe<Array<Scalars["Int"]>>;
  size_lt?: Maybe<Scalars["Int"]>;
  size_lte?: Maybe<Scalars["Int"]>;
  size_gt?: Maybe<Scalars["Int"]>;
  size_gte?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
  type_not?: Maybe<Scalars["String"]>;
  type_in?: Maybe<Array<Scalars["String"]>>;
  type_not_in?: Maybe<Array<Scalars["String"]>>;
  type_contains?: Maybe<Scalars["String"]>;
  type_not_contains?: Maybe<Scalars["String"]>;
  type_starts_with?: Maybe<Scalars["String"]>;
  type_not_starts_with?: Maybe<Scalars["String"]>;
  type_ends_with?: Maybe<Scalars["String"]>;
  type_not_ends_with?: Maybe<Scalars["String"]>;
  lensId?: Maybe<_PatentFamilyHasLensIdFilter>;
  lensId_not?: Maybe<_PatentFamilyHasLensIdFilter>;
  lensId_in?: Maybe<Array<_PatentFamilyHasLensIdFilter>>;
  lensId_not_in?: Maybe<Array<_PatentFamilyHasLensIdFilter>>;
  lensId_some?: Maybe<_PatentFamilyHasLensIdFilter>;
  lensId_none?: Maybe<_PatentFamilyHasLensIdFilter>;
  lensId_single?: Maybe<_PatentFamilyHasLensIdFilter>;
  lensId_every?: Maybe<_PatentFamilyHasLensIdFilter>;
};

export type _PatentFamilyHasLensIdFilter = {
  AND?: Maybe<Array<_PatentFamilyHasLensIdFilter>>;
  OR?: Maybe<Array<_PatentFamilyHasLensIdFilter>>;
  position?: Maybe<Scalars["Int"]>;
  position_not?: Maybe<Scalars["Int"]>;
  position_in?: Maybe<Array<Scalars["Int"]>>;
  position_not_in?: Maybe<Array<Scalars["Int"]>>;
  position_lt?: Maybe<Scalars["Int"]>;
  position_lte?: Maybe<Scalars["Int"]>;
  position_gt?: Maybe<Scalars["Int"]>;
  position_gte?: Maybe<Scalars["Int"]>;
  id?: Maybe<_LensIdFilter>;
};

export type _PatentNumberFilter = {
  AND?: Maybe<Array<_PatentNumberFilter>>;
  OR?: Maybe<Array<_PatentNumberFilter>>;
  pub_key?: Maybe<Scalars["ID"]>;
  pub_key_not?: Maybe<Scalars["ID"]>;
  pub_key_in?: Maybe<Array<Scalars["ID"]>>;
  pub_key_not_in?: Maybe<Array<Scalars["ID"]>>;
  pub_key_contains?: Maybe<Scalars["ID"]>;
  pub_key_not_contains?: Maybe<Scalars["ID"]>;
  pub_key_starts_with?: Maybe<Scalars["ID"]>;
  pub_key_not_starts_with?: Maybe<Scalars["ID"]>;
  pub_key_ends_with?: Maybe<Scalars["ID"]>;
  pub_key_not_ends_with?: Maybe<Scalars["ID"]>;
  patents?: Maybe<_PatentFilter>;
  patents_not?: Maybe<_PatentFilter>;
  patents_in?: Maybe<Array<_PatentFilter>>;
  patents_not_in?: Maybe<Array<_PatentFilter>>;
  patents_some?: Maybe<_PatentFilter>;
  patents_none?: Maybe<_PatentFilter>;
  patents_single?: Maybe<_PatentFilter>;
  patents_every?: Maybe<_PatentFilter>;
  citations?: Maybe<_PatentLiteratureCitationFilter>;
  citations_not?: Maybe<_PatentLiteratureCitationFilter>;
  citations_in?: Maybe<Array<_PatentLiteratureCitationFilter>>;
  citations_not_in?: Maybe<Array<_PatentLiteratureCitationFilter>>;
  citations_some?: Maybe<_PatentLiteratureCitationFilter>;
  citations_none?: Maybe<_PatentLiteratureCitationFilter>;
  citations_single?: Maybe<_PatentLiteratureCitationFilter>;
  citations_every?: Maybe<_PatentLiteratureCitationFilter>;
};

export type _PatentLiteratureCitationFilter = {
  AND?: Maybe<Array<_PatentLiteratureCitationFilter>>;
  OR?: Maybe<Array<_PatentLiteratureCitationFilter>>;
  _hash_id?: Maybe<Scalars["ID"]>;
  _hash_id_not?: Maybe<Scalars["ID"]>;
  _hash_id_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_contains?: Maybe<Scalars["ID"]>;
  _hash_id_not_contains?: Maybe<Scalars["ID"]>;
  _hash_id_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_ends_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_ends_with?: Maybe<Scalars["ID"]>;
  lens_id?: Maybe<Scalars["ID"]>;
  lens_id_not?: Maybe<Scalars["ID"]>;
  lens_id_in?: Maybe<Array<Scalars["ID"]>>;
  lens_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  lens_id_contains?: Maybe<Scalars["ID"]>;
  lens_id_not_contains?: Maybe<Scalars["ID"]>;
  lens_id_starts_with?: Maybe<Scalars["ID"]>;
  lens_id_not_starts_with?: Maybe<Scalars["ID"]>;
  lens_id_ends_with?: Maybe<Scalars["ID"]>;
  lens_id_not_ends_with?: Maybe<Scalars["ID"]>;
  pub_key?: Maybe<Scalars["ID"]>;
  pub_key_not?: Maybe<Scalars["ID"]>;
  pub_key_in?: Maybe<Array<Scalars["ID"]>>;
  pub_key_not_in?: Maybe<Array<Scalars["ID"]>>;
  pub_key_contains?: Maybe<Scalars["ID"]>;
  pub_key_not_contains?: Maybe<Scalars["ID"]>;
  pub_key_starts_with?: Maybe<Scalars["ID"]>;
  pub_key_not_starts_with?: Maybe<Scalars["ID"]>;
  pub_key_ends_with?: Maybe<Scalars["ID"]>;
  pub_key_not_ends_with?: Maybe<Scalars["ID"]>;
  citations?: Maybe<_PatentCitationCollectionFilter>;
  citations_not?: Maybe<_PatentCitationCollectionFilter>;
  citations_in?: Maybe<Array<_PatentCitationCollectionFilter>>;
  citations_not_in?: Maybe<Array<_PatentCitationCollectionFilter>>;
  citations_some?: Maybe<_PatentCitationCollectionFilter>;
  citations_none?: Maybe<_PatentCitationCollectionFilter>;
  citations_single?: Maybe<_PatentCitationCollectionFilter>;
  citations_every?: Maybe<_PatentCitationCollectionFilter>;
  number?: Maybe<_PatentNumberFilter>;
  number_not?: Maybe<_PatentNumberFilter>;
  number_in?: Maybe<Array<_PatentNumberFilter>>;
  number_not_in?: Maybe<Array<_PatentNumberFilter>>;
  number_some?: Maybe<_PatentNumberFilter>;
  number_none?: Maybe<_PatentNumberFilter>;
  number_single?: Maybe<_PatentNumberFilter>;
  number_every?: Maybe<_PatentNumberFilter>;
};

export type _PatentCitationCollectionFilter = {
  AND?: Maybe<Array<_PatentCitationCollectionFilter>>;
  OR?: Maybe<Array<_PatentCitationCollectionFilter>>;
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  patents?: Maybe<_PatentFilter>;
  patents_not?: Maybe<_PatentFilter>;
  patents_in?: Maybe<Array<_PatentFilter>>;
  patents_not_in?: Maybe<Array<_PatentFilter>>;
  patents_some?: Maybe<_PatentFilter>;
  patents_none?: Maybe<_PatentFilter>;
  patents_single?: Maybe<_PatentFilter>;
  patents_every?: Maybe<_PatentFilter>;
  patentLiteratureCitations?: Maybe<_PatentCitationCollectionHasPatentLiteratureCitationFilter>;
  patentLiteratureCitations_not?: Maybe<_PatentCitationCollectionHasPatentLiteratureCitationFilter>;
  patentLiteratureCitations_in?: Maybe<
    Array<_PatentCitationCollectionHasPatentLiteratureCitationFilter>
  >;
  patentLiteratureCitations_not_in?: Maybe<
    Array<_PatentCitationCollectionHasPatentLiteratureCitationFilter>
  >;
  patentLiteratureCitations_some?: Maybe<_PatentCitationCollectionHasPatentLiteratureCitationFilter>;
  patentLiteratureCitations_none?: Maybe<_PatentCitationCollectionHasPatentLiteratureCitationFilter>;
  patentLiteratureCitations_single?: Maybe<_PatentCitationCollectionHasPatentLiteratureCitationFilter>;
  patentLiteratureCitations_every?: Maybe<_PatentCitationCollectionHasPatentLiteratureCitationFilter>;
  nonPatentLiteratureCitations?: Maybe<_PatentCitationCollectionHasNonPatentLiteratureCitationFilter>;
  nonPatentLiteratureCitations_not?: Maybe<_PatentCitationCollectionHasNonPatentLiteratureCitationFilter>;
  nonPatentLiteratureCitations_in?: Maybe<
    Array<_PatentCitationCollectionHasNonPatentLiteratureCitationFilter>
  >;
  nonPatentLiteratureCitations_not_in?: Maybe<
    Array<_PatentCitationCollectionHasNonPatentLiteratureCitationFilter>
  >;
  nonPatentLiteratureCitations_some?: Maybe<_PatentCitationCollectionHasNonPatentLiteratureCitationFilter>;
  nonPatentLiteratureCitations_none?: Maybe<_PatentCitationCollectionHasNonPatentLiteratureCitationFilter>;
  nonPatentLiteratureCitations_single?: Maybe<_PatentCitationCollectionHasNonPatentLiteratureCitationFilter>;
  nonPatentLiteratureCitations_every?: Maybe<_PatentCitationCollectionHasNonPatentLiteratureCitationFilter>;
};

export type _PatentCitationCollectionHasPatentLiteratureCitationFilter = {
  AND?: Maybe<
    Array<_PatentCitationCollectionHasPatentLiteratureCitationFilter>
  >;
  OR?: Maybe<Array<_PatentCitationCollectionHasPatentLiteratureCitationFilter>>;
  position?: Maybe<Scalars["Int"]>;
  position_not?: Maybe<Scalars["Int"]>;
  position_in?: Maybe<Array<Scalars["Int"]>>;
  position_not_in?: Maybe<Array<Scalars["Int"]>>;
  position_lt?: Maybe<Scalars["Int"]>;
  position_lte?: Maybe<Scalars["Int"]>;
  position_gt?: Maybe<Scalars["Int"]>;
  position_gte?: Maybe<Scalars["Int"]>;
  citation?: Maybe<_PatentLiteratureCitationFilter>;
};

export type _PatentCitationCollectionHasNonPatentLiteratureCitationFilter = {
  AND?: Maybe<
    Array<_PatentCitationCollectionHasNonPatentLiteratureCitationFilter>
  >;
  OR?: Maybe<
    Array<_PatentCitationCollectionHasNonPatentLiteratureCitationFilter>
  >;
  position?: Maybe<Scalars["Int"]>;
  position_not?: Maybe<Scalars["Int"]>;
  position_in?: Maybe<Array<Scalars["Int"]>>;
  position_not_in?: Maybe<Array<Scalars["Int"]>>;
  position_lt?: Maybe<Scalars["Int"]>;
  position_lte?: Maybe<Scalars["Int"]>;
  position_gt?: Maybe<Scalars["Int"]>;
  position_gte?: Maybe<Scalars["Int"]>;
  citation?: Maybe<_NonPatentLiteratureCitationFilter>;
};

export type _NonPatentLiteratureCitationFilter = {
  AND?: Maybe<Array<_NonPatentLiteratureCitationFilter>>;
  OR?: Maybe<Array<_NonPatentLiteratureCitationFilter>>;
  _hash_id?: Maybe<Scalars["ID"]>;
  _hash_id_not?: Maybe<Scalars["ID"]>;
  _hash_id_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_contains?: Maybe<Scalars["ID"]>;
  _hash_id_not_contains?: Maybe<Scalars["ID"]>;
  _hash_id_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_ends_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_ends_with?: Maybe<Scalars["ID"]>;
  cit_text?: Maybe<Scalars["String"]>;
  cit_text_not?: Maybe<Scalars["String"]>;
  cit_text_in?: Maybe<Array<Scalars["String"]>>;
  cit_text_not_in?: Maybe<Array<Scalars["String"]>>;
  cit_text_contains?: Maybe<Scalars["String"]>;
  cit_text_not_contains?: Maybe<Scalars["String"]>;
  cit_text_starts_with?: Maybe<Scalars["String"]>;
  cit_text_not_starts_with?: Maybe<Scalars["String"]>;
  cit_text_ends_with?: Maybe<Scalars["String"]>;
  cit_text_not_ends_with?: Maybe<Scalars["String"]>;
  patentCitationCollections?: Maybe<_PatentCitationCollectionFilter>;
  patentCitationCollections_not?: Maybe<_PatentCitationCollectionFilter>;
  patentCitationCollections_in?: Maybe<Array<_PatentCitationCollectionFilter>>;
  patentCitationCollections_not_in?: Maybe<
    Array<_PatentCitationCollectionFilter>
  >;
  patentCitationCollections_some?: Maybe<_PatentCitationCollectionFilter>;
  patentCitationCollections_none?: Maybe<_PatentCitationCollectionFilter>;
  patentCitationCollections_single?: Maybe<_PatentCitationCollectionFilter>;
  patentCitationCollections_every?: Maybe<_PatentCitationCollectionFilter>;
};

export type _PatentClassificationCollectionFilter = {
  AND?: Maybe<Array<_PatentClassificationCollectionFilter>>;
  OR?: Maybe<Array<_PatentClassificationCollectionFilter>>;
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Scalars["ID"]>>;
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  id_contains?: Maybe<Scalars["ID"]>;
  id_not_contains?: Maybe<Scalars["ID"]>;
  id_starts_with?: Maybe<Scalars["ID"]>;
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  id_ends_with?: Maybe<Scalars["ID"]>;
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  patents?: Maybe<_PatentFilter>;
  patents_not?: Maybe<_PatentFilter>;
  patents_in?: Maybe<Array<_PatentFilter>>;
  patents_not_in?: Maybe<Array<_PatentFilter>>;
  patents_some?: Maybe<_PatentFilter>;
  patents_none?: Maybe<_PatentFilter>;
  patents_single?: Maybe<_PatentFilter>;
  patents_every?: Maybe<_PatentFilter>;
  cooperativePatentClassification?: Maybe<_PatentClassificationCollectionHasCooperativePatentClassificationFilter>;
  cooperativePatentClassification_not?: Maybe<_PatentClassificationCollectionHasCooperativePatentClassificationFilter>;
  cooperativePatentClassification_in?: Maybe<
    Array<_PatentClassificationCollectionHasCooperativePatentClassificationFilter>
  >;
  cooperativePatentClassification_not_in?: Maybe<
    Array<_PatentClassificationCollectionHasCooperativePatentClassificationFilter>
  >;
  cooperativePatentClassification_some?: Maybe<_PatentClassificationCollectionHasCooperativePatentClassificationFilter>;
  cooperativePatentClassification_none?: Maybe<_PatentClassificationCollectionHasCooperativePatentClassificationFilter>;
  cooperativePatentClassification_single?: Maybe<_PatentClassificationCollectionHasCooperativePatentClassificationFilter>;
  cooperativePatentClassification_every?: Maybe<_PatentClassificationCollectionHasCooperativePatentClassificationFilter>;
  internationalPatentClassification?: Maybe<_PatentClassificationCollectionHasInternationalPatentClassificationFilter>;
  internationalPatentClassification_not?: Maybe<_PatentClassificationCollectionHasInternationalPatentClassificationFilter>;
  internationalPatentClassification_in?: Maybe<
    Array<_PatentClassificationCollectionHasInternationalPatentClassificationFilter>
  >;
  internationalPatentClassification_not_in?: Maybe<
    Array<_PatentClassificationCollectionHasInternationalPatentClassificationFilter>
  >;
  internationalPatentClassification_some?: Maybe<_PatentClassificationCollectionHasInternationalPatentClassificationFilter>;
  internationalPatentClassification_none?: Maybe<_PatentClassificationCollectionHasInternationalPatentClassificationFilter>;
  internationalPatentClassification_single?: Maybe<_PatentClassificationCollectionHasInternationalPatentClassificationFilter>;
  internationalPatentClassification_every?: Maybe<_PatentClassificationCollectionHasInternationalPatentClassificationFilter>;
  usPatentClassification?: Maybe<_PatentClassificationCollectionHasUsPatentClassificationFilter>;
  usPatentClassification_not?: Maybe<_PatentClassificationCollectionHasUsPatentClassificationFilter>;
  usPatentClassification_in?: Maybe<
    Array<_PatentClassificationCollectionHasUsPatentClassificationFilter>
  >;
  usPatentClassification_not_in?: Maybe<
    Array<_PatentClassificationCollectionHasUsPatentClassificationFilter>
  >;
  usPatentClassification_some?: Maybe<_PatentClassificationCollectionHasUsPatentClassificationFilter>;
  usPatentClassification_none?: Maybe<_PatentClassificationCollectionHasUsPatentClassificationFilter>;
  usPatentClassification_single?: Maybe<_PatentClassificationCollectionHasUsPatentClassificationFilter>;
  usPatentClassification_every?: Maybe<_PatentClassificationCollectionHasUsPatentClassificationFilter>;
};

export type _PatentClassificationCollectionHasCooperativePatentClassificationFilter = {
  AND?: Maybe<
    Array<_PatentClassificationCollectionHasCooperativePatentClassificationFilter>
  >;
  OR?: Maybe<
    Array<_PatentClassificationCollectionHasCooperativePatentClassificationFilter>
  >;
  position?: Maybe<Scalars["Int"]>;
  position_not?: Maybe<Scalars["Int"]>;
  position_in?: Maybe<Array<Scalars["Int"]>>;
  position_not_in?: Maybe<Array<Scalars["Int"]>>;
  position_lt?: Maybe<Scalars["Int"]>;
  position_lte?: Maybe<Scalars["Int"]>;
  position_gt?: Maybe<Scalars["Int"]>;
  position_gte?: Maybe<Scalars["Int"]>;
  classification?: Maybe<_CooperativePatentClassificationFilter>;
};

export type _CooperativePatentClassificationFilter = {
  AND?: Maybe<Array<_CooperativePatentClassificationFilter>>;
  OR?: Maybe<Array<_CooperativePatentClassificationFilter>>;
  classification_cpc?: Maybe<Scalars["String"]>;
  classification_cpc_not?: Maybe<Scalars["String"]>;
  classification_cpc_in?: Maybe<Array<Scalars["String"]>>;
  classification_cpc_not_in?: Maybe<Array<Scalars["String"]>>;
  classification_cpc_contains?: Maybe<Scalars["String"]>;
  classification_cpc_not_contains?: Maybe<Scalars["String"]>;
  classification_cpc_starts_with?: Maybe<Scalars["String"]>;
  classification_cpc_not_starts_with?: Maybe<Scalars["String"]>;
  classification_cpc_ends_with?: Maybe<Scalars["String"]>;
  classification_cpc_not_ends_with?: Maybe<Scalars["String"]>;
  patentClassificationCollections?: Maybe<_PatentClassificationCollectionFilter>;
  patentClassificationCollections_not?: Maybe<_PatentClassificationCollectionFilter>;
  patentClassificationCollections_in?: Maybe<
    Array<_PatentClassificationCollectionFilter>
  >;
  patentClassificationCollections_not_in?: Maybe<
    Array<_PatentClassificationCollectionFilter>
  >;
  patentClassificationCollections_some?: Maybe<_PatentClassificationCollectionFilter>;
  patentClassificationCollections_none?: Maybe<_PatentClassificationCollectionFilter>;
  patentClassificationCollections_single?: Maybe<_PatentClassificationCollectionFilter>;
  patentClassificationCollections_every?: Maybe<_PatentClassificationCollectionFilter>;
};

export type _PatentClassificationCollectionHasInternationalPatentClassificationFilter = {
  AND?: Maybe<
    Array<_PatentClassificationCollectionHasInternationalPatentClassificationFilter>
  >;
  OR?: Maybe<
    Array<_PatentClassificationCollectionHasInternationalPatentClassificationFilter>
  >;
  position?: Maybe<Scalars["Int"]>;
  position_not?: Maybe<Scalars["Int"]>;
  position_in?: Maybe<Array<Scalars["Int"]>>;
  position_not_in?: Maybe<Array<Scalars["Int"]>>;
  position_lt?: Maybe<Scalars["Int"]>;
  position_lte?: Maybe<Scalars["Int"]>;
  position_gt?: Maybe<Scalars["Int"]>;
  position_gte?: Maybe<Scalars["Int"]>;
  classification?: Maybe<_InternationalPatentClassificationFilter>;
};

export type _InternationalPatentClassificationFilter = {
  AND?: Maybe<Array<_InternationalPatentClassificationFilter>>;
  OR?: Maybe<Array<_InternationalPatentClassificationFilter>>;
  classification_ipc?: Maybe<Scalars["String"]>;
  classification_ipc_not?: Maybe<Scalars["String"]>;
  classification_ipc_in?: Maybe<Array<Scalars["String"]>>;
  classification_ipc_not_in?: Maybe<Array<Scalars["String"]>>;
  classification_ipc_contains?: Maybe<Scalars["String"]>;
  classification_ipc_not_contains?: Maybe<Scalars["String"]>;
  classification_ipc_starts_with?: Maybe<Scalars["String"]>;
  classification_ipc_not_starts_with?: Maybe<Scalars["String"]>;
  classification_ipc_ends_with?: Maybe<Scalars["String"]>;
  classification_ipc_not_ends_with?: Maybe<Scalars["String"]>;
  patentClassificationCollections?: Maybe<_PatentClassificationCollectionFilter>;
  patentClassificationCollections_not?: Maybe<_PatentClassificationCollectionFilter>;
  patentClassificationCollections_in?: Maybe<
    Array<_PatentClassificationCollectionFilter>
  >;
  patentClassificationCollections_not_in?: Maybe<
    Array<_PatentClassificationCollectionFilter>
  >;
  patentClassificationCollections_some?: Maybe<_PatentClassificationCollectionFilter>;
  patentClassificationCollections_none?: Maybe<_PatentClassificationCollectionFilter>;
  patentClassificationCollections_single?: Maybe<_PatentClassificationCollectionFilter>;
  patentClassificationCollections_every?: Maybe<_PatentClassificationCollectionFilter>;
};

export type _PatentClassificationCollectionHasUsPatentClassificationFilter = {
  AND?: Maybe<
    Array<_PatentClassificationCollectionHasUsPatentClassificationFilter>
  >;
  OR?: Maybe<
    Array<_PatentClassificationCollectionHasUsPatentClassificationFilter>
  >;
  position?: Maybe<Scalars["Int"]>;
  position_not?: Maybe<Scalars["Int"]>;
  position_in?: Maybe<Array<Scalars["Int"]>>;
  position_not_in?: Maybe<Array<Scalars["Int"]>>;
  position_lt?: Maybe<Scalars["Int"]>;
  position_lte?: Maybe<Scalars["Int"]>;
  position_gt?: Maybe<Scalars["Int"]>;
  position_gte?: Maybe<Scalars["Int"]>;
  classification?: Maybe<_UsPatentClassificationFilter>;
};

export type _UsPatentClassificationFilter = {
  AND?: Maybe<Array<_UsPatentClassificationFilter>>;
  OR?: Maybe<Array<_UsPatentClassificationFilter>>;
  classification_us?: Maybe<Scalars["String"]>;
  classification_us_not?: Maybe<Scalars["String"]>;
  classification_us_in?: Maybe<Array<Scalars["String"]>>;
  classification_us_not_in?: Maybe<Array<Scalars["String"]>>;
  classification_us_contains?: Maybe<Scalars["String"]>;
  classification_us_not_contains?: Maybe<Scalars["String"]>;
  classification_us_starts_with?: Maybe<Scalars["String"]>;
  classification_us_not_starts_with?: Maybe<Scalars["String"]>;
  classification_us_ends_with?: Maybe<Scalars["String"]>;
  classification_us_not_ends_with?: Maybe<Scalars["String"]>;
  patentClassificationCollections?: Maybe<_PatentClassificationCollectionFilter>;
  patentClassificationCollections_not?: Maybe<_PatentClassificationCollectionFilter>;
  patentClassificationCollections_in?: Maybe<
    Array<_PatentClassificationCollectionFilter>
  >;
  patentClassificationCollections_not_in?: Maybe<
    Array<_PatentClassificationCollectionFilter>
  >;
  patentClassificationCollections_some?: Maybe<_PatentClassificationCollectionFilter>;
  patentClassificationCollections_none?: Maybe<_PatentClassificationCollectionFilter>;
  patentClassificationCollections_single?: Maybe<_PatentClassificationCollectionFilter>;
  patentClassificationCollections_every?: Maybe<_PatentClassificationCollectionFilter>;
};

export type _PatentHasPatentAbstractFilter = {
  AND?: Maybe<Array<_PatentHasPatentAbstractFilter>>;
  OR?: Maybe<Array<_PatentHasPatentAbstractFilter>>;
  position?: Maybe<Scalars["Int"]>;
  position_not?: Maybe<Scalars["Int"]>;
  position_in?: Maybe<Array<Scalars["Int"]>>;
  position_not_in?: Maybe<Array<Scalars["Int"]>>;
  position_lt?: Maybe<Scalars["Int"]>;
  position_lte?: Maybe<Scalars["Int"]>;
  position_gt?: Maybe<Scalars["Int"]>;
  position_gte?: Maybe<Scalars["Int"]>;
  abstract?: Maybe<_PatentAbstractFilter>;
};

export type _PatentAbstractFilter = {
  AND?: Maybe<Array<_PatentAbstractFilter>>;
  OR?: Maybe<Array<_PatentAbstractFilter>>;
  _hash_id?: Maybe<Scalars["ID"]>;
  _hash_id_not?: Maybe<Scalars["ID"]>;
  _hash_id_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_contains?: Maybe<Scalars["ID"]>;
  _hash_id_not_contains?: Maybe<Scalars["ID"]>;
  _hash_id_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_ends_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_ends_with?: Maybe<Scalars["ID"]>;
  lang?: Maybe<Scalars["String"]>;
  lang_not?: Maybe<Scalars["String"]>;
  lang_in?: Maybe<Array<Scalars["String"]>>;
  lang_not_in?: Maybe<Array<Scalars["String"]>>;
  lang_contains?: Maybe<Scalars["String"]>;
  lang_not_contains?: Maybe<Scalars["String"]>;
  lang_starts_with?: Maybe<Scalars["String"]>;
  lang_not_starts_with?: Maybe<Scalars["String"]>;
  lang_ends_with?: Maybe<Scalars["String"]>;
  lang_not_ends_with?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  text_not?: Maybe<Scalars["String"]>;
  text_in?: Maybe<Array<Scalars["String"]>>;
  text_not_in?: Maybe<Array<Scalars["String"]>>;
  text_contains?: Maybe<Scalars["String"]>;
  text_not_contains?: Maybe<Scalars["String"]>;
  text_starts_with?: Maybe<Scalars["String"]>;
  text_not_starts_with?: Maybe<Scalars["String"]>;
  text_ends_with?: Maybe<Scalars["String"]>;
  text_not_ends_with?: Maybe<Scalars["String"]>;
  patents?: Maybe<_PatentFilter>;
  patents_not?: Maybe<_PatentFilter>;
  patents_in?: Maybe<Array<_PatentFilter>>;
  patents_not_in?: Maybe<Array<_PatentFilter>>;
  patents_some?: Maybe<_PatentFilter>;
  patents_none?: Maybe<_PatentFilter>;
  patents_single?: Maybe<_PatentFilter>;
  patents_every?: Maybe<_PatentFilter>;
  fragments?: Maybe<_FromPatentAbstractFilter>;
  fragments_not?: Maybe<_FromPatentAbstractFilter>;
  fragments_in?: Maybe<Array<_FromPatentAbstractFilter>>;
  fragments_not_in?: Maybe<Array<_FromPatentAbstractFilter>>;
  fragments_some?: Maybe<_FromPatentAbstractFilter>;
  fragments_none?: Maybe<_FromPatentAbstractFilter>;
  fragments_single?: Maybe<_FromPatentAbstractFilter>;
  fragments_every?: Maybe<_FromPatentAbstractFilter>;
};

export type _FromPatentAbstractFilter = {
  AND?: Maybe<Array<_FromPatentAbstractFilter>>;
  OR?: Maybe<Array<_FromPatentAbstractFilter>>;
  text?: Maybe<Scalars["String"]>;
  text_not?: Maybe<Scalars["String"]>;
  text_in?: Maybe<Array<Scalars["String"]>>;
  text_not_in?: Maybe<Array<Scalars["String"]>>;
  text_contains?: Maybe<Scalars["String"]>;
  text_not_contains?: Maybe<Scalars["String"]>;
  text_starts_with?: Maybe<Scalars["String"]>;
  text_not_starts_with?: Maybe<Scalars["String"]>;
  text_ends_with?: Maybe<Scalars["String"]>;
  text_not_ends_with?: Maybe<Scalars["String"]>;
  sequence?: Maybe<Scalars["Int"]>;
  sequence_not?: Maybe<Scalars["Int"]>;
  sequence_in?: Maybe<Array<Scalars["Int"]>>;
  sequence_not_in?: Maybe<Array<Scalars["Int"]>>;
  sequence_lt?: Maybe<Scalars["Int"]>;
  sequence_lte?: Maybe<Scalars["Int"]>;
  sequence_gt?: Maybe<Scalars["Int"]>;
  sequence_gte?: Maybe<Scalars["Int"]>;
  kind?: Maybe<Scalars["String"]>;
  kind_not?: Maybe<Scalars["String"]>;
  kind_in?: Maybe<Array<Scalars["String"]>>;
  kind_not_in?: Maybe<Array<Scalars["String"]>>;
  kind_contains?: Maybe<Scalars["String"]>;
  kind_not_contains?: Maybe<Scalars["String"]>;
  kind_starts_with?: Maybe<Scalars["String"]>;
  kind_not_starts_with?: Maybe<Scalars["String"]>;
  kind_ends_with?: Maybe<Scalars["String"]>;
  kind_not_ends_with?: Maybe<Scalars["String"]>;
  patentAbstracts?: Maybe<_PatentAbstractFilter>;
  patentAbstracts_not?: Maybe<_PatentAbstractFilter>;
  patentAbstracts_in?: Maybe<Array<_PatentAbstractFilter>>;
  patentAbstracts_not_in?: Maybe<Array<_PatentAbstractFilter>>;
  patentAbstracts_some?: Maybe<_PatentAbstractFilter>;
  patentAbstracts_none?: Maybe<_PatentAbstractFilter>;
  patentAbstracts_single?: Maybe<_PatentAbstractFilter>;
  patentAbstracts_every?: Maybe<_PatentAbstractFilter>;
  next?: Maybe<_FromPatentAbstractFilter>;
  next_not?: Maybe<_FromPatentAbstractFilter>;
  next_in?: Maybe<Array<_FromPatentAbstractFilter>>;
  next_not_in?: Maybe<Array<_FromPatentAbstractFilter>>;
  geneSymbols?: Maybe<_FromPatentAbstractPatentAbstractMentionsGeneSymbolFilter>;
  geneSymbols_not?: Maybe<_FromPatentAbstractPatentAbstractMentionsGeneSymbolFilter>;
  geneSymbols_in?: Maybe<
    Array<_FromPatentAbstractPatentAbstractMentionsGeneSymbolFilter>
  >;
  geneSymbols_not_in?: Maybe<
    Array<_FromPatentAbstractPatentAbstractMentionsGeneSymbolFilter>
  >;
  geneSymbols_some?: Maybe<_FromPatentAbstractPatentAbstractMentionsGeneSymbolFilter>;
  geneSymbols_none?: Maybe<_FromPatentAbstractPatentAbstractMentionsGeneSymbolFilter>;
  geneSymbols_single?: Maybe<_FromPatentAbstractPatentAbstractMentionsGeneSymbolFilter>;
  geneSymbols_every?: Maybe<_FromPatentAbstractPatentAbstractMentionsGeneSymbolFilter>;
};

export type _FromPatentAbstractPatentAbstractMentionsGeneSymbolFilter = {
  AND?: Maybe<Array<_FromPatentAbstractPatentAbstractMentionsGeneSymbolFilter>>;
  OR?: Maybe<Array<_FromPatentAbstractPatentAbstractMentionsGeneSymbolFilter>>;
  score?: Maybe<Scalars["Float"]>;
  score_not?: Maybe<Scalars["Float"]>;
  score_in?: Maybe<Array<Scalars["Float"]>>;
  score_not_in?: Maybe<Array<Scalars["Float"]>>;
  score_lt?: Maybe<Scalars["Float"]>;
  score_lte?: Maybe<Scalars["Float"]>;
  score_gt?: Maybe<Scalars["Float"]>;
  score_gte?: Maybe<Scalars["Float"]>;
  symbol?: Maybe<_GeneSymbolFilter>;
};

export type _PatentInventorFilter = {
  AND?: Maybe<Array<_PatentInventorFilter>>;
  OR?: Maybe<Array<_PatentInventorFilter>>;
  position?: Maybe<Scalars["Int"]>;
  position_not?: Maybe<Scalars["Int"]>;
  position_in?: Maybe<Array<Scalars["Int"]>>;
  position_not_in?: Maybe<Array<Scalars["Int"]>>;
  position_lt?: Maybe<Scalars["Int"]>;
  position_lte?: Maybe<Scalars["Int"]>;
  position_gt?: Maybe<Scalars["Int"]>;
  position_gte?: Maybe<Scalars["Int"]>;
  entity?: Maybe<_EntityFilter>;
};

export type _EntityFilter = {
  AND?: Maybe<Array<_EntityFilter>>;
  OR?: Maybe<Array<_EntityFilter>>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  patentsInventor?: Maybe<_PatentFilter>;
  patentsInventor_not?: Maybe<_PatentFilter>;
  patentsInventor_in?: Maybe<Array<_PatentFilter>>;
  patentsInventor_not_in?: Maybe<Array<_PatentFilter>>;
  patentsInventor_some?: Maybe<_PatentFilter>;
  patentsInventor_none?: Maybe<_PatentFilter>;
  patentsInventor_single?: Maybe<_PatentFilter>;
  patentsInventor_every?: Maybe<_PatentFilter>;
  patentsApplicant?: Maybe<_PatentFilter>;
  patentsApplicant_not?: Maybe<_PatentFilter>;
  patentsApplicant_in?: Maybe<Array<_PatentFilter>>;
  patentsApplicant_not_in?: Maybe<Array<_PatentFilter>>;
  patentsApplicant_some?: Maybe<_PatentFilter>;
  patentsApplicant_none?: Maybe<_PatentFilter>;
  patentsApplicant_single?: Maybe<_PatentFilter>;
  patentsApplicant_every?: Maybe<_PatentFilter>;
  patentsOwner?: Maybe<_PatentFilter>;
  patentsOwner_not?: Maybe<_PatentFilter>;
  patentsOwner_in?: Maybe<Array<_PatentFilter>>;
  patentsOwner_not_in?: Maybe<Array<_PatentFilter>>;
  patentsOwner_some?: Maybe<_PatentFilter>;
  patentsOwner_none?: Maybe<_PatentFilter>;
  patentsOwner_single?: Maybe<_PatentFilter>;
  patentsOwner_every?: Maybe<_PatentFilter>;
};

export type _PatentApplicantFilter = {
  AND?: Maybe<Array<_PatentApplicantFilter>>;
  OR?: Maybe<Array<_PatentApplicantFilter>>;
  position?: Maybe<Scalars["Int"]>;
  position_not?: Maybe<Scalars["Int"]>;
  position_in?: Maybe<Array<Scalars["Int"]>>;
  position_not_in?: Maybe<Array<Scalars["Int"]>>;
  position_lt?: Maybe<Scalars["Int"]>;
  position_lte?: Maybe<Scalars["Int"]>;
  position_gt?: Maybe<Scalars["Int"]>;
  position_gte?: Maybe<Scalars["Int"]>;
  entity?: Maybe<_EntityFilter>;
};

export type _PatentHasPatentTitleFilter = {
  AND?: Maybe<Array<_PatentHasPatentTitleFilter>>;
  OR?: Maybe<Array<_PatentHasPatentTitleFilter>>;
  position?: Maybe<Scalars["Int"]>;
  position_not?: Maybe<Scalars["Int"]>;
  position_in?: Maybe<Array<Scalars["Int"]>>;
  position_not_in?: Maybe<Array<Scalars["Int"]>>;
  position_lt?: Maybe<Scalars["Int"]>;
  position_lte?: Maybe<Scalars["Int"]>;
  position_gt?: Maybe<Scalars["Int"]>;
  position_gte?: Maybe<Scalars["Int"]>;
  title?: Maybe<_PatentTitleFilter>;
};

export type _PatentTitleFilter = {
  AND?: Maybe<Array<_PatentTitleFilter>>;
  OR?: Maybe<Array<_PatentTitleFilter>>;
  _hash_id?: Maybe<Scalars["ID"]>;
  _hash_id_not?: Maybe<Scalars["ID"]>;
  _hash_id_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_contains?: Maybe<Scalars["ID"]>;
  _hash_id_not_contains?: Maybe<Scalars["ID"]>;
  _hash_id_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_ends_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_ends_with?: Maybe<Scalars["ID"]>;
  lang?: Maybe<Scalars["String"]>;
  lang_not?: Maybe<Scalars["String"]>;
  lang_in?: Maybe<Array<Scalars["String"]>>;
  lang_not_in?: Maybe<Array<Scalars["String"]>>;
  lang_contains?: Maybe<Scalars["String"]>;
  lang_not_contains?: Maybe<Scalars["String"]>;
  lang_starts_with?: Maybe<Scalars["String"]>;
  lang_not_starts_with?: Maybe<Scalars["String"]>;
  lang_ends_with?: Maybe<Scalars["String"]>;
  lang_not_ends_with?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  text_not?: Maybe<Scalars["String"]>;
  text_in?: Maybe<Array<Scalars["String"]>>;
  text_not_in?: Maybe<Array<Scalars["String"]>>;
  text_contains?: Maybe<Scalars["String"]>;
  text_not_contains?: Maybe<Scalars["String"]>;
  text_starts_with?: Maybe<Scalars["String"]>;
  text_not_starts_with?: Maybe<Scalars["String"]>;
  text_ends_with?: Maybe<Scalars["String"]>;
  text_not_ends_with?: Maybe<Scalars["String"]>;
  patents?: Maybe<_PatentFilter>;
  patents_not?: Maybe<_PatentFilter>;
  patents_in?: Maybe<Array<_PatentFilter>>;
  patents_not_in?: Maybe<Array<_PatentFilter>>;
  patents_some?: Maybe<_PatentFilter>;
  patents_none?: Maybe<_PatentFilter>;
  patents_single?: Maybe<_PatentFilter>;
  patents_every?: Maybe<_PatentFilter>;
  fragments?: Maybe<_FromPatentTitleFilter>;
  fragments_not?: Maybe<_FromPatentTitleFilter>;
  fragments_in?: Maybe<Array<_FromPatentTitleFilter>>;
  fragments_not_in?: Maybe<Array<_FromPatentTitleFilter>>;
  fragments_some?: Maybe<_FromPatentTitleFilter>;
  fragments_none?: Maybe<_FromPatentTitleFilter>;
  fragments_single?: Maybe<_FromPatentTitleFilter>;
  fragments_every?: Maybe<_FromPatentTitleFilter>;
};

export type _FromPatentTitleFilter = {
  AND?: Maybe<Array<_FromPatentTitleFilter>>;
  OR?: Maybe<Array<_FromPatentTitleFilter>>;
  text?: Maybe<Scalars["String"]>;
  text_not?: Maybe<Scalars["String"]>;
  text_in?: Maybe<Array<Scalars["String"]>>;
  text_not_in?: Maybe<Array<Scalars["String"]>>;
  text_contains?: Maybe<Scalars["String"]>;
  text_not_contains?: Maybe<Scalars["String"]>;
  text_starts_with?: Maybe<Scalars["String"]>;
  text_not_starts_with?: Maybe<Scalars["String"]>;
  text_ends_with?: Maybe<Scalars["String"]>;
  text_not_ends_with?: Maybe<Scalars["String"]>;
  kind?: Maybe<Scalars["String"]>;
  kind_not?: Maybe<Scalars["String"]>;
  kind_in?: Maybe<Array<Scalars["String"]>>;
  kind_not_in?: Maybe<Array<Scalars["String"]>>;
  kind_contains?: Maybe<Scalars["String"]>;
  kind_not_contains?: Maybe<Scalars["String"]>;
  kind_starts_with?: Maybe<Scalars["String"]>;
  kind_not_starts_with?: Maybe<Scalars["String"]>;
  kind_ends_with?: Maybe<Scalars["String"]>;
  kind_not_ends_with?: Maybe<Scalars["String"]>;
  sequence?: Maybe<Scalars["Int"]>;
  sequence_not?: Maybe<Scalars["Int"]>;
  sequence_in?: Maybe<Array<Scalars["Int"]>>;
  sequence_not_in?: Maybe<Array<Scalars["Int"]>>;
  sequence_lt?: Maybe<Scalars["Int"]>;
  sequence_lte?: Maybe<Scalars["Int"]>;
  sequence_gt?: Maybe<Scalars["Int"]>;
  sequence_gte?: Maybe<Scalars["Int"]>;
  patentTitles?: Maybe<_PatentTitleFilter>;
  patentTitles_not?: Maybe<_PatentTitleFilter>;
  patentTitles_in?: Maybe<Array<_PatentTitleFilter>>;
  patentTitles_not_in?: Maybe<Array<_PatentTitleFilter>>;
  patentTitles_some?: Maybe<_PatentTitleFilter>;
  patentTitles_none?: Maybe<_PatentTitleFilter>;
  patentTitles_single?: Maybe<_PatentTitleFilter>;
  patentTitles_every?: Maybe<_PatentTitleFilter>;
  next?: Maybe<_FromPatentTitleFilter>;
  next_not?: Maybe<_FromPatentTitleFilter>;
  next_in?: Maybe<Array<_FromPatentTitleFilter>>;
  next_not_in?: Maybe<Array<_FromPatentTitleFilter>>;
  geneSymbols?: Maybe<_FromPatentTitlePatentTitleMentionsGeneSymbolFilter>;
  geneSymbols_not?: Maybe<_FromPatentTitlePatentTitleMentionsGeneSymbolFilter>;
  geneSymbols_in?: Maybe<
    Array<_FromPatentTitlePatentTitleMentionsGeneSymbolFilter>
  >;
  geneSymbols_not_in?: Maybe<
    Array<_FromPatentTitlePatentTitleMentionsGeneSymbolFilter>
  >;
  geneSymbols_some?: Maybe<_FromPatentTitlePatentTitleMentionsGeneSymbolFilter>;
  geneSymbols_none?: Maybe<_FromPatentTitlePatentTitleMentionsGeneSymbolFilter>;
  geneSymbols_single?: Maybe<_FromPatentTitlePatentTitleMentionsGeneSymbolFilter>;
  geneSymbols_every?: Maybe<_FromPatentTitlePatentTitleMentionsGeneSymbolFilter>;
};

export type _FromPatentTitlePatentTitleMentionsGeneSymbolFilter = {
  AND?: Maybe<Array<_FromPatentTitlePatentTitleMentionsGeneSymbolFilter>>;
  OR?: Maybe<Array<_FromPatentTitlePatentTitleMentionsGeneSymbolFilter>>;
  score?: Maybe<Scalars["Float"]>;
  score_not?: Maybe<Scalars["Float"]>;
  score_in?: Maybe<Array<Scalars["Float"]>>;
  score_not_in?: Maybe<Array<Scalars["Float"]>>;
  score_lt?: Maybe<Scalars["Float"]>;
  score_lte?: Maybe<Scalars["Float"]>;
  score_gt?: Maybe<Scalars["Float"]>;
  score_gte?: Maybe<Scalars["Float"]>;
  symbol?: Maybe<_GeneSymbolFilter>;
};

export type _PatentHasPatentDescriptionFilter = {
  AND?: Maybe<Array<_PatentHasPatentDescriptionFilter>>;
  OR?: Maybe<Array<_PatentHasPatentDescriptionFilter>>;
  position?: Maybe<Scalars["Int"]>;
  position_not?: Maybe<Scalars["Int"]>;
  position_in?: Maybe<Array<Scalars["Int"]>>;
  position_not_in?: Maybe<Array<Scalars["Int"]>>;
  position_lt?: Maybe<Scalars["Int"]>;
  position_lte?: Maybe<Scalars["Int"]>;
  position_gt?: Maybe<Scalars["Int"]>;
  position_gte?: Maybe<Scalars["Int"]>;
  description?: Maybe<_PatentDescriptionFilter>;
};

export type _PatentHasPatentClaimFilter = {
  AND?: Maybe<Array<_PatentHasPatentClaimFilter>>;
  OR?: Maybe<Array<_PatentHasPatentClaimFilter>>;
  position?: Maybe<Scalars["Int"]>;
  position_not?: Maybe<Scalars["Int"]>;
  position_in?: Maybe<Array<Scalars["Int"]>>;
  position_not_in?: Maybe<Array<Scalars["Int"]>>;
  position_lt?: Maybe<Scalars["Int"]>;
  position_lte?: Maybe<Scalars["Int"]>;
  position_gt?: Maybe<Scalars["Int"]>;
  position_gte?: Maybe<Scalars["Int"]>;
  claim?: Maybe<_PatentClaimFilter>;
};

export type _PatentClaimFilter = {
  AND?: Maybe<Array<_PatentClaimFilter>>;
  OR?: Maybe<Array<_PatentClaimFilter>>;
  _hash_id?: Maybe<Scalars["ID"]>;
  _hash_id_not?: Maybe<Scalars["ID"]>;
  _hash_id_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  _hash_id_contains?: Maybe<Scalars["ID"]>;
  _hash_id_not_contains?: Maybe<Scalars["ID"]>;
  _hash_id_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_starts_with?: Maybe<Scalars["ID"]>;
  _hash_id_ends_with?: Maybe<Scalars["ID"]>;
  _hash_id_not_ends_with?: Maybe<Scalars["ID"]>;
  lang?: Maybe<Scalars["String"]>;
  lang_not?: Maybe<Scalars["String"]>;
  lang_in?: Maybe<Array<Scalars["String"]>>;
  lang_not_in?: Maybe<Array<Scalars["String"]>>;
  lang_contains?: Maybe<Scalars["String"]>;
  lang_not_contains?: Maybe<Scalars["String"]>;
  lang_starts_with?: Maybe<Scalars["String"]>;
  lang_not_starts_with?: Maybe<Scalars["String"]>;
  lang_ends_with?: Maybe<Scalars["String"]>;
  lang_not_ends_with?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  text_not?: Maybe<Scalars["String"]>;
  text_in?: Maybe<Array<Scalars["String"]>>;
  text_not_in?: Maybe<Array<Scalars["String"]>>;
  text_contains?: Maybe<Scalars["String"]>;
  text_not_contains?: Maybe<Scalars["String"]>;
  text_starts_with?: Maybe<Scalars["String"]>;
  text_not_starts_with?: Maybe<Scalars["String"]>;
  text_ends_with?: Maybe<Scalars["String"]>;
  text_not_ends_with?: Maybe<Scalars["String"]>;
  patents?: Maybe<_PatentFilter>;
  patents_not?: Maybe<_PatentFilter>;
  patents_in?: Maybe<Array<_PatentFilter>>;
  patents_not_in?: Maybe<Array<_PatentFilter>>;
  patents_some?: Maybe<_PatentFilter>;
  patents_none?: Maybe<_PatentFilter>;
  patents_single?: Maybe<_PatentFilter>;
  patents_every?: Maybe<_PatentFilter>;
  fragments?: Maybe<_FromPatentClaimFilter>;
  fragments_not?: Maybe<_FromPatentClaimFilter>;
  fragments_in?: Maybe<Array<_FromPatentClaimFilter>>;
  fragments_not_in?: Maybe<Array<_FromPatentClaimFilter>>;
  fragments_some?: Maybe<_FromPatentClaimFilter>;
  fragments_none?: Maybe<_FromPatentClaimFilter>;
  fragments_single?: Maybe<_FromPatentClaimFilter>;
  fragments_every?: Maybe<_FromPatentClaimFilter>;
};

export type _FromPatentClaimFilter = {
  AND?: Maybe<Array<_FromPatentClaimFilter>>;
  OR?: Maybe<Array<_FromPatentClaimFilter>>;
  text?: Maybe<Scalars["String"]>;
  text_not?: Maybe<Scalars["String"]>;
  text_in?: Maybe<Array<Scalars["String"]>>;
  text_not_in?: Maybe<Array<Scalars["String"]>>;
  text_contains?: Maybe<Scalars["String"]>;
  text_not_contains?: Maybe<Scalars["String"]>;
  text_starts_with?: Maybe<Scalars["String"]>;
  text_not_starts_with?: Maybe<Scalars["String"]>;
  text_ends_with?: Maybe<Scalars["String"]>;
  text_not_ends_with?: Maybe<Scalars["String"]>;
  sequence?: Maybe<Scalars["Int"]>;
  sequence_not?: Maybe<Scalars["Int"]>;
  sequence_in?: Maybe<Array<Scalars["Int"]>>;
  sequence_not_in?: Maybe<Array<Scalars["Int"]>>;
  sequence_lt?: Maybe<Scalars["Int"]>;
  sequence_lte?: Maybe<Scalars["Int"]>;
  sequence_gt?: Maybe<Scalars["Int"]>;
  sequence_gte?: Maybe<Scalars["Int"]>;
  kind?: Maybe<Scalars["String"]>;
  kind_not?: Maybe<Scalars["String"]>;
  kind_in?: Maybe<Array<Scalars["String"]>>;
  kind_not_in?: Maybe<Array<Scalars["String"]>>;
  kind_contains?: Maybe<Scalars["String"]>;
  kind_not_contains?: Maybe<Scalars["String"]>;
  kind_starts_with?: Maybe<Scalars["String"]>;
  kind_not_starts_with?: Maybe<Scalars["String"]>;
  kind_ends_with?: Maybe<Scalars["String"]>;
  kind_not_ends_with?: Maybe<Scalars["String"]>;
  patentClaims?: Maybe<_PatentClaimFilter>;
  patentClaims_not?: Maybe<_PatentClaimFilter>;
  patentClaims_in?: Maybe<Array<_PatentClaimFilter>>;
  patentClaims_not_in?: Maybe<Array<_PatentClaimFilter>>;
  patentClaims_some?: Maybe<_PatentClaimFilter>;
  patentClaims_none?: Maybe<_PatentClaimFilter>;
  patentClaims_single?: Maybe<_PatentClaimFilter>;
  patentClaims_every?: Maybe<_PatentClaimFilter>;
  next?: Maybe<_FromPatentClaimFilter>;
  next_not?: Maybe<_FromPatentClaimFilter>;
  next_in?: Maybe<Array<_FromPatentClaimFilter>>;
  next_not_in?: Maybe<Array<_FromPatentClaimFilter>>;
  geneSymbols?: Maybe<_FromPatentClaimPatentClaimMentionsGeneSymbolFilter>;
  geneSymbols_not?: Maybe<_FromPatentClaimPatentClaimMentionsGeneSymbolFilter>;
  geneSymbols_in?: Maybe<
    Array<_FromPatentClaimPatentClaimMentionsGeneSymbolFilter>
  >;
  geneSymbols_not_in?: Maybe<
    Array<_FromPatentClaimPatentClaimMentionsGeneSymbolFilter>
  >;
  geneSymbols_some?: Maybe<_FromPatentClaimPatentClaimMentionsGeneSymbolFilter>;
  geneSymbols_none?: Maybe<_FromPatentClaimPatentClaimMentionsGeneSymbolFilter>;
  geneSymbols_single?: Maybe<_FromPatentClaimPatentClaimMentionsGeneSymbolFilter>;
  geneSymbols_every?: Maybe<_FromPatentClaimPatentClaimMentionsGeneSymbolFilter>;
};

export type _FromPatentClaimPatentClaimMentionsGeneSymbolFilter = {
  AND?: Maybe<Array<_FromPatentClaimPatentClaimMentionsGeneSymbolFilter>>;
  OR?: Maybe<Array<_FromPatentClaimPatentClaimMentionsGeneSymbolFilter>>;
  score?: Maybe<Scalars["Float"]>;
  score_not?: Maybe<Scalars["Float"]>;
  score_in?: Maybe<Array<Scalars["Float"]>>;
  score_not_in?: Maybe<Array<Scalars["Float"]>>;
  score_lt?: Maybe<Scalars["Float"]>;
  score_lte?: Maybe<Scalars["Float"]>;
  score_gt?: Maybe<Scalars["Float"]>;
  score_gte?: Maybe<Scalars["Float"]>;
  symbol?: Maybe<_GeneSymbolFilter>;
};

export type _PatentOwnerFilter = {
  AND?: Maybe<Array<_PatentOwnerFilter>>;
  OR?: Maybe<Array<_PatentOwnerFilter>>;
  position?: Maybe<Scalars["Int"]>;
  position_not?: Maybe<Scalars["Int"]>;
  position_in?: Maybe<Array<Scalars["Int"]>>;
  position_not_in?: Maybe<Array<Scalars["Int"]>>;
  position_lt?: Maybe<Scalars["Int"]>;
  position_lte?: Maybe<Scalars["Int"]>;
  position_gt?: Maybe<Scalars["Int"]>;
  position_gte?: Maybe<Scalars["Int"]>;
  entity?: Maybe<_EntityFilter>;
};

export type _FromPatentDescriptionPatentDescriptionMentionsGeneSymbolFilter = {
  AND?: Maybe<
    Array<_FromPatentDescriptionPatentDescriptionMentionsGeneSymbolFilter>
  >;
  OR?: Maybe<
    Array<_FromPatentDescriptionPatentDescriptionMentionsGeneSymbolFilter>
  >;
  score?: Maybe<Scalars["Float"]>;
  score_not?: Maybe<Scalars["Float"]>;
  score_in?: Maybe<Array<Scalars["Float"]>>;
  score_not_in?: Maybe<Array<Scalars["Float"]>>;
  score_lt?: Maybe<Scalars["Float"]>;
  score_lte?: Maybe<Scalars["Float"]>;
  score_gt?: Maybe<Scalars["Float"]>;
  score_gte?: Maybe<Scalars["Float"]>;
  symbol?: Maybe<_GeneSymbolFilter>;
};

export type _GeneSymbolPatentTitleMentionsGeneSymbolFilter = {
  AND?: Maybe<Array<_GeneSymbolPatentTitleMentionsGeneSymbolFilter>>;
  OR?: Maybe<Array<_GeneSymbolPatentTitleMentionsGeneSymbolFilter>>;
  score?: Maybe<Scalars["Float"]>;
  score_not?: Maybe<Scalars["Float"]>;
  score_in?: Maybe<Array<Scalars["Float"]>>;
  score_not_in?: Maybe<Array<Scalars["Float"]>>;
  score_lt?: Maybe<Scalars["Float"]>;
  score_lte?: Maybe<Scalars["Float"]>;
  score_gt?: Maybe<Scalars["Float"]>;
  score_gte?: Maybe<Scalars["Float"]>;
  title?: Maybe<_FromPatentTitleFilter>;
};

export type _GeneSymbolPatentAbstractMentionsGeneSymbolFilter = {
  AND?: Maybe<Array<_GeneSymbolPatentAbstractMentionsGeneSymbolFilter>>;
  OR?: Maybe<Array<_GeneSymbolPatentAbstractMentionsGeneSymbolFilter>>;
  score?: Maybe<Scalars["Float"]>;
  score_not?: Maybe<Scalars["Float"]>;
  score_in?: Maybe<Array<Scalars["Float"]>>;
  score_not_in?: Maybe<Array<Scalars["Float"]>>;
  score_lt?: Maybe<Scalars["Float"]>;
  score_lte?: Maybe<Scalars["Float"]>;
  score_gt?: Maybe<Scalars["Float"]>;
  score_gte?: Maybe<Scalars["Float"]>;
  abstract?: Maybe<_FromPatentAbstractFilter>;
};

export type _GeneSymbolPatentClaimMentionsGeneSymbolFilter = {
  AND?: Maybe<Array<_GeneSymbolPatentClaimMentionsGeneSymbolFilter>>;
  OR?: Maybe<Array<_GeneSymbolPatentClaimMentionsGeneSymbolFilter>>;
  score?: Maybe<Scalars["Float"]>;
  score_not?: Maybe<Scalars["Float"]>;
  score_in?: Maybe<Array<Scalars["Float"]>>;
  score_not_in?: Maybe<Array<Scalars["Float"]>>;
  score_lt?: Maybe<Scalars["Float"]>;
  score_lte?: Maybe<Scalars["Float"]>;
  score_gt?: Maybe<Scalars["Float"]>;
  score_gte?: Maybe<Scalars["Float"]>;
  claim?: Maybe<_FromPatentClaimFilter>;
};

export type _GeneMapsGeneSymbolsWithOmitedSpecialCharFilter = {
  AND?: Maybe<Array<_GeneMapsGeneSymbolsWithOmitedSpecialCharFilter>>;
  OR?: Maybe<Array<_GeneMapsGeneSymbolsWithOmitedSpecialCharFilter>>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  symbol?: Maybe<_OmitSpecialCharFilter>;
};

export type _GeneMapsGeneSymbolsWithOmitLengthFilter = {
  AND?: Maybe<Array<_GeneMapsGeneSymbolsWithOmitLengthFilter>>;
  OR?: Maybe<Array<_GeneMapsGeneSymbolsWithOmitLengthFilter>>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  symbol?: Maybe<_OmitLengthFilter>;
};

export type _GeneMapsGeneSymbolsWithOmitWordFilter = {
  AND?: Maybe<Array<_GeneMapsGeneSymbolsWithOmitWordFilter>>;
  OR?: Maybe<Array<_GeneMapsGeneSymbolsWithOmitWordFilter>>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  symbol?: Maybe<_OmitWordFilter>;
};

export type _GeneAssociatesDaGFilter = {
  AND?: Maybe<Array<_GeneAssociatesDaGFilter>>;
  OR?: Maybe<Array<_GeneAssociatesDaGFilter>>;
  high_confidence?: Maybe<Scalars["Int"]>;
  high_confidence_not?: Maybe<Scalars["Int"]>;
  high_confidence_in?: Maybe<Array<Scalars["Int"]>>;
  high_confidence_not_in?: Maybe<Array<Scalars["Int"]>>;
  high_confidence_lt?: Maybe<Scalars["Int"]>;
  high_confidence_lte?: Maybe<Scalars["Int"]>;
  high_confidence_gt?: Maybe<Scalars["Int"]>;
  high_confidence_gte?: Maybe<Scalars["Int"]>;
  locus?: Maybe<Scalars["Int"]>;
  locus_not?: Maybe<Scalars["Int"]>;
  locus_in?: Maybe<Array<Scalars["Int"]>>;
  locus_not_in?: Maybe<Array<Scalars["Int"]>>;
  locus_lt?: Maybe<Scalars["Int"]>;
  locus_lte?: Maybe<Scalars["Int"]>;
  locus_gt?: Maybe<Scalars["Int"]>;
  locus_gte?: Maybe<Scalars["Int"]>;
  primary?: Maybe<Scalars["Int"]>;
  primary_not?: Maybe<Scalars["Int"]>;
  primary_in?: Maybe<Array<Scalars["Int"]>>;
  primary_not_in?: Maybe<Array<Scalars["Int"]>>;
  primary_lt?: Maybe<Scalars["Int"]>;
  primary_lte?: Maybe<Scalars["Int"]>;
  primary_gt?: Maybe<Scalars["Int"]>;
  primary_gte?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["String"]>;
  status_not?: Maybe<Scalars["String"]>;
  status_in?: Maybe<Array<Scalars["String"]>>;
  status_not_in?: Maybe<Array<Scalars["String"]>>;
  status_contains?: Maybe<Scalars["String"]>;
  status_not_contains?: Maybe<Scalars["String"]>;
  status_starts_with?: Maybe<Scalars["String"]>;
  status_not_starts_with?: Maybe<Scalars["String"]>;
  status_ends_with?: Maybe<Scalars["String"]>;
  status_not_ends_with?: Maybe<Scalars["String"]>;
  disease?: Maybe<_DiseaseFilter>;
};

export type _DiseaseFilter = {
  AND?: Maybe<Array<_DiseaseFilter>>;
  OR?: Maybe<Array<_DiseaseFilter>>;
  definition?: Maybe<Scalars["String"]>;
  definition_not?: Maybe<Scalars["String"]>;
  definition_in?: Maybe<Array<Scalars["String"]>>;
  definition_not_in?: Maybe<Array<Scalars["String"]>>;
  definition_contains?: Maybe<Scalars["String"]>;
  definition_not_contains?: Maybe<Scalars["String"]>;
  definition_starts_with?: Maybe<Scalars["String"]>;
  definition_not_starts_with?: Maybe<Scalars["String"]>;
  definition_ends_with?: Maybe<Scalars["String"]>;
  definition_not_ends_with?: Maybe<Scalars["String"]>;
  doid?: Maybe<Scalars["String"]>;
  doid_not?: Maybe<Scalars["String"]>;
  doid_in?: Maybe<Array<Scalars["String"]>>;
  doid_not_in?: Maybe<Array<Scalars["String"]>>;
  doid_contains?: Maybe<Scalars["String"]>;
  doid_not_contains?: Maybe<Scalars["String"]>;
  doid_starts_with?: Maybe<Scalars["String"]>;
  doid_not_starts_with?: Maybe<Scalars["String"]>;
  doid_ends_with?: Maybe<Scalars["String"]>;
  doid_not_ends_with?: Maybe<Scalars["String"]>;
  license?: Maybe<Scalars["String"]>;
  license_not?: Maybe<Scalars["String"]>;
  license_in?: Maybe<Array<Scalars["String"]>>;
  license_not_in?: Maybe<Array<Scalars["String"]>>;
  license_contains?: Maybe<Scalars["String"]>;
  license_not_contains?: Maybe<Scalars["String"]>;
  license_starts_with?: Maybe<Scalars["String"]>;
  license_not_starts_with?: Maybe<Scalars["String"]>;
  license_ends_with?: Maybe<Scalars["String"]>;
  license_not_ends_with?: Maybe<Scalars["String"]>;
  link?: Maybe<Scalars["String"]>;
  link_not?: Maybe<Scalars["String"]>;
  link_in?: Maybe<Array<Scalars["String"]>>;
  link_not_in?: Maybe<Array<Scalars["String"]>>;
  link_contains?: Maybe<Scalars["String"]>;
  link_not_contains?: Maybe<Scalars["String"]>;
  link_starts_with?: Maybe<Scalars["String"]>;
  link_not_starts_with?: Maybe<Scalars["String"]>;
  link_ends_with?: Maybe<Scalars["String"]>;
  link_not_ends_with?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  isA?: Maybe<_DiseaseIsADirectionsFilter>;
  isA_not?: Maybe<_DiseaseIsADirectionsFilter>;
  isA_in?: Maybe<Array<_DiseaseIsADirectionsFilter>>;
  isA_not_in?: Maybe<Array<_DiseaseIsADirectionsFilter>>;
  isA_some?: Maybe<_DiseaseIsADirectionsFilter>;
  isA_none?: Maybe<_DiseaseIsADirectionsFilter>;
  isA_single?: Maybe<_DiseaseIsADirectionsFilter>;
  isA_every?: Maybe<_DiseaseIsADirectionsFilter>;
  associatatesDaG?: Maybe<_DiseaseAssociatesDaGFilter>;
  associatatesDaG_not?: Maybe<_DiseaseAssociatesDaGFilter>;
  associatatesDaG_in?: Maybe<Array<_DiseaseAssociatesDaGFilter>>;
  associatatesDaG_not_in?: Maybe<Array<_DiseaseAssociatesDaGFilter>>;
  associatatesDaG_some?: Maybe<_DiseaseAssociatesDaGFilter>;
  associatatesDaG_none?: Maybe<_DiseaseAssociatesDaGFilter>;
  associatatesDaG_single?: Maybe<_DiseaseAssociatesDaGFilter>;
  associatatesDaG_every?: Maybe<_DiseaseAssociatesDaGFilter>;
  localizesDla?: Maybe<_DiseaseLocalizesDlaFilter>;
  localizesDla_not?: Maybe<_DiseaseLocalizesDlaFilter>;
  localizesDla_in?: Maybe<Array<_DiseaseLocalizesDlaFilter>>;
  localizesDla_not_in?: Maybe<Array<_DiseaseLocalizesDlaFilter>>;
  localizesDla_some?: Maybe<_DiseaseLocalizesDlaFilter>;
  localizesDla_none?: Maybe<_DiseaseLocalizesDlaFilter>;
  localizesDla_single?: Maybe<_DiseaseLocalizesDlaFilter>;
  localizesDla_every?: Maybe<_DiseaseLocalizesDlaFilter>;
};

export type _DiseaseIsADirectionsFilter = {
  isDisease?: Maybe<_DiseaseIsAFilter>;
  disease?: Maybe<_DiseaseIsAFilter>;
};

export type _DiseaseIsAFilter = {
  AND?: Maybe<Array<_DiseaseIsAFilter>>;
  OR?: Maybe<Array<_DiseaseIsAFilter>>;
  position?: Maybe<Scalars["Int"]>;
  position_not?: Maybe<Scalars["Int"]>;
  position_in?: Maybe<Array<Scalars["Int"]>>;
  position_not_in?: Maybe<Array<Scalars["Int"]>>;
  position_lt?: Maybe<Scalars["Int"]>;
  position_lte?: Maybe<Scalars["Int"]>;
  position_gt?: Maybe<Scalars["Int"]>;
  position_gte?: Maybe<Scalars["Int"]>;
  Disease?: Maybe<_DiseaseFilter>;
};

export type _DiseaseAssociatesDaGFilter = {
  AND?: Maybe<Array<_DiseaseAssociatesDaGFilter>>;
  OR?: Maybe<Array<_DiseaseAssociatesDaGFilter>>;
  high_confidence?: Maybe<Scalars["Int"]>;
  high_confidence_not?: Maybe<Scalars["Int"]>;
  high_confidence_in?: Maybe<Array<Scalars["Int"]>>;
  high_confidence_not_in?: Maybe<Array<Scalars["Int"]>>;
  high_confidence_lt?: Maybe<Scalars["Int"]>;
  high_confidence_lte?: Maybe<Scalars["Int"]>;
  high_confidence_gt?: Maybe<Scalars["Int"]>;
  high_confidence_gte?: Maybe<Scalars["Int"]>;
  locus?: Maybe<Scalars["Int"]>;
  locus_not?: Maybe<Scalars["Int"]>;
  locus_in?: Maybe<Array<Scalars["Int"]>>;
  locus_not_in?: Maybe<Array<Scalars["Int"]>>;
  locus_lt?: Maybe<Scalars["Int"]>;
  locus_lte?: Maybe<Scalars["Int"]>;
  locus_gt?: Maybe<Scalars["Int"]>;
  locus_gte?: Maybe<Scalars["Int"]>;
  primary?: Maybe<Scalars["Int"]>;
  primary_not?: Maybe<Scalars["Int"]>;
  primary_in?: Maybe<Array<Scalars["Int"]>>;
  primary_not_in?: Maybe<Array<Scalars["Int"]>>;
  primary_lt?: Maybe<Scalars["Int"]>;
  primary_lte?: Maybe<Scalars["Int"]>;
  primary_gt?: Maybe<Scalars["Int"]>;
  primary_gte?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["String"]>;
  status_not?: Maybe<Scalars["String"]>;
  status_in?: Maybe<Array<Scalars["String"]>>;
  status_not_in?: Maybe<Array<Scalars["String"]>>;
  status_contains?: Maybe<Scalars["String"]>;
  status_not_contains?: Maybe<Scalars["String"]>;
  status_starts_with?: Maybe<Scalars["String"]>;
  status_not_starts_with?: Maybe<Scalars["String"]>;
  status_ends_with?: Maybe<Scalars["String"]>;
  status_not_ends_with?: Maybe<Scalars["String"]>;
  gene?: Maybe<_GeneFilter>;
};

export type _DiseaseLocalizesDlaFilter = {
  AND?: Maybe<Array<_DiseaseLocalizesDlaFilter>>;
  OR?: Maybe<Array<_DiseaseLocalizesDlaFilter>>;
  cooccurrence?: Maybe<Scalars["Int"]>;
  cooccurrence_not?: Maybe<Scalars["Int"]>;
  cooccurrence_in?: Maybe<Array<Scalars["Int"]>>;
  cooccurrence_not_in?: Maybe<Array<Scalars["Int"]>>;
  cooccurrence_lt?: Maybe<Scalars["Int"]>;
  cooccurrence_lte?: Maybe<Scalars["Int"]>;
  cooccurrence_gt?: Maybe<Scalars["Int"]>;
  cooccurrence_gte?: Maybe<Scalars["Int"]>;
  expected?: Maybe<Scalars["Float"]>;
  expected_not?: Maybe<Scalars["Float"]>;
  expected_in?: Maybe<Array<Scalars["Float"]>>;
  expected_not_in?: Maybe<Array<Scalars["Float"]>>;
  expected_lt?: Maybe<Scalars["Float"]>;
  expected_lte?: Maybe<Scalars["Float"]>;
  expected_gt?: Maybe<Scalars["Float"]>;
  expected_gte?: Maybe<Scalars["Float"]>;
  p_fisher?: Maybe<Scalars["Float"]>;
  p_fisher_not?: Maybe<Scalars["Float"]>;
  p_fisher_in?: Maybe<Array<Scalars["Float"]>>;
  p_fisher_not_in?: Maybe<Array<Scalars["Float"]>>;
  p_fisher_lt?: Maybe<Scalars["Float"]>;
  p_fisher_lte?: Maybe<Scalars["Float"]>;
  p_fisher_gt?: Maybe<Scalars["Float"]>;
  p_fisher_gte?: Maybe<Scalars["Float"]>;
  anatomy?: Maybe<_AnatomyFilter>;
};

export type _AnatomyFilter = {
  AND?: Maybe<Array<_AnatomyFilter>>;
  OR?: Maybe<Array<_AnatomyFilter>>;
  bto_id?: Maybe<Scalars["ID"]>;
  bto_id_not?: Maybe<Scalars["ID"]>;
  bto_id_in?: Maybe<Array<Scalars["ID"]>>;
  bto_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  bto_id_contains?: Maybe<Scalars["ID"]>;
  bto_id_not_contains?: Maybe<Scalars["ID"]>;
  bto_id_starts_with?: Maybe<Scalars["ID"]>;
  bto_id_not_starts_with?: Maybe<Scalars["ID"]>;
  bto_id_ends_with?: Maybe<Scalars["ID"]>;
  bto_id_not_ends_with?: Maybe<Scalars["ID"]>;
  mesh_id?: Maybe<Scalars["ID"]>;
  mesh_id_not?: Maybe<Scalars["ID"]>;
  mesh_id_in?: Maybe<Array<Scalars["ID"]>>;
  mesh_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  mesh_id_contains?: Maybe<Scalars["ID"]>;
  mesh_id_not_contains?: Maybe<Scalars["ID"]>;
  mesh_id_starts_with?: Maybe<Scalars["ID"]>;
  mesh_id_not_starts_with?: Maybe<Scalars["ID"]>;
  mesh_id_ends_with?: Maybe<Scalars["ID"]>;
  mesh_id_not_ends_with?: Maybe<Scalars["ID"]>;
  mesh_name?: Maybe<Scalars["String"]>;
  mesh_name_not?: Maybe<Scalars["String"]>;
  mesh_name_in?: Maybe<Array<Scalars["String"]>>;
  mesh_name_not_in?: Maybe<Array<Scalars["String"]>>;
  mesh_name_contains?: Maybe<Scalars["String"]>;
  mesh_name_not_contains?: Maybe<Scalars["String"]>;
  mesh_name_starts_with?: Maybe<Scalars["String"]>;
  mesh_name_not_starts_with?: Maybe<Scalars["String"]>;
  mesh_name_ends_with?: Maybe<Scalars["String"]>;
  mesh_name_not_ends_with?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  uberon_id?: Maybe<Scalars["ID"]>;
  uberon_id_not?: Maybe<Scalars["ID"]>;
  uberon_id_in?: Maybe<Array<Scalars["ID"]>>;
  uberon_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  uberon_id_contains?: Maybe<Scalars["ID"]>;
  uberon_id_not_contains?: Maybe<Scalars["ID"]>;
  uberon_id_starts_with?: Maybe<Scalars["ID"]>;
  uberon_id_not_starts_with?: Maybe<Scalars["ID"]>;
  uberon_id_ends_with?: Maybe<Scalars["ID"]>;
  uberon_id_not_ends_with?: Maybe<Scalars["ID"]>;
  diseases?: Maybe<_AnatomyLocalizesDlaFilter>;
  diseases_not?: Maybe<_AnatomyLocalizesDlaFilter>;
  diseases_in?: Maybe<Array<_AnatomyLocalizesDlaFilter>>;
  diseases_not_in?: Maybe<Array<_AnatomyLocalizesDlaFilter>>;
  diseases_some?: Maybe<_AnatomyLocalizesDlaFilter>;
  diseases_none?: Maybe<_AnatomyLocalizesDlaFilter>;
  diseases_single?: Maybe<_AnatomyLocalizesDlaFilter>;
  diseases_every?: Maybe<_AnatomyLocalizesDlaFilter>;
};

export type _AnatomyLocalizesDlaFilter = {
  AND?: Maybe<Array<_AnatomyLocalizesDlaFilter>>;
  OR?: Maybe<Array<_AnatomyLocalizesDlaFilter>>;
  cooccurrence?: Maybe<Scalars["Int"]>;
  cooccurrence_not?: Maybe<Scalars["Int"]>;
  cooccurrence_in?: Maybe<Array<Scalars["Int"]>>;
  cooccurrence_not_in?: Maybe<Array<Scalars["Int"]>>;
  cooccurrence_lt?: Maybe<Scalars["Int"]>;
  cooccurrence_lte?: Maybe<Scalars["Int"]>;
  cooccurrence_gt?: Maybe<Scalars["Int"]>;
  cooccurrence_gte?: Maybe<Scalars["Int"]>;
  expected?: Maybe<Scalars["Float"]>;
  expected_not?: Maybe<Scalars["Float"]>;
  expected_in?: Maybe<Array<Scalars["Float"]>>;
  expected_not_in?: Maybe<Array<Scalars["Float"]>>;
  expected_lt?: Maybe<Scalars["Float"]>;
  expected_lte?: Maybe<Scalars["Float"]>;
  expected_gt?: Maybe<Scalars["Float"]>;
  expected_gte?: Maybe<Scalars["Float"]>;
  p_fisher?: Maybe<Scalars["Float"]>;
  p_fisher_not?: Maybe<Scalars["Float"]>;
  p_fisher_in?: Maybe<Array<Scalars["Float"]>>;
  p_fisher_not_in?: Maybe<Array<Scalars["Float"]>>;
  p_fisher_lt?: Maybe<Scalars["Float"]>;
  p_fisher_lte?: Maybe<Scalars["Float"]>;
  p_fisher_gt?: Maybe<Scalars["Float"]>;
  p_fisher_gte?: Maybe<Scalars["Float"]>;
  disease?: Maybe<_DiseaseFilter>;
};

export type _TranscriptProteinCodesFilter = {
  AND?: Maybe<Array<_TranscriptProteinCodesFilter>>;
  OR?: Maybe<Array<_TranscriptProteinCodesFilter>>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  taxid?: Maybe<Scalars["String"]>;
  taxid_not?: Maybe<Scalars["String"]>;
  taxid_in?: Maybe<Array<Scalars["String"]>>;
  taxid_not_in?: Maybe<Array<Scalars["String"]>>;
  taxid_contains?: Maybe<Scalars["String"]>;
  taxid_not_contains?: Maybe<Scalars["String"]>;
  taxid_starts_with?: Maybe<Scalars["String"]>;
  taxid_not_starts_with?: Maybe<Scalars["String"]>;
  taxid_ends_with?: Maybe<Scalars["String"]>;
  taxid_not_ends_with?: Maybe<Scalars["String"]>;
  protein?: Maybe<_ProteinFilter>;
};

export type _MapsTranscriptDirectionsFilter = {
  mappedBy?: Maybe<_MapsTranscriptFilter>;
  transcript?: Maybe<_MapsTranscriptFilter>;
};

export type _MapsTranscriptFilter = {
  AND?: Maybe<Array<_MapsTranscriptFilter>>;
  OR?: Maybe<Array<_MapsTranscriptFilter>>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  status_not?: Maybe<Scalars["String"]>;
  status_in?: Maybe<Array<Scalars["String"]>>;
  status_not_in?: Maybe<Array<Scalars["String"]>>;
  status_contains?: Maybe<Scalars["String"]>;
  status_not_contains?: Maybe<Scalars["String"]>;
  status_starts_with?: Maybe<Scalars["String"]>;
  status_not_starts_with?: Maybe<Scalars["String"]>;
  status_ends_with?: Maybe<Scalars["String"]>;
  status_not_ends_with?: Maybe<Scalars["String"]>;
  Transcript?: Maybe<_TranscriptFilter>;
};

export type _MapsProteinDirectionsFilter = {
  mappedBy?: Maybe<_MapsProteinFilter>;
  protein?: Maybe<_MapsProteinFilter>;
};

export type _MapsProteinFilter = {
  AND?: Maybe<Array<_MapsProteinFilter>>;
  OR?: Maybe<Array<_MapsProteinFilter>>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  taxid?: Maybe<Scalars["String"]>;
  taxid_not?: Maybe<Scalars["String"]>;
  taxid_in?: Maybe<Array<Scalars["String"]>>;
  taxid_not_in?: Maybe<Array<Scalars["String"]>>;
  taxid_contains?: Maybe<Scalars["String"]>;
  taxid_not_contains?: Maybe<Scalars["String"]>;
  taxid_starts_with?: Maybe<Scalars["String"]>;
  taxid_not_starts_with?: Maybe<Scalars["String"]>;
  taxid_ends_with?: Maybe<Scalars["String"]>;
  taxid_not_ends_with?: Maybe<Scalars["String"]>;
  Protein?: Maybe<_ProteinFilter>;
};

export type _IsADirectionsFilter = {
  subTerm?: Maybe<_IsAFilter>;
  term?: Maybe<_IsAFilter>;
};

export type _IsAFilter = {
  AND?: Maybe<Array<_IsAFilter>>;
  OR?: Maybe<Array<_IsAFilter>>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  GOTerm?: Maybe<_GoTermFilter>;
};

export type GoTerm = {
  __typename?: "GOTerm";
  sid: Scalars["String"];
  name: Scalars["String"];
  namespace: Scalars["String"];
  obsolete: Scalars["Boolean"];
  subsets: Array<Maybe<Scalars["String"]>>;
  associations?: Maybe<Array<Maybe<_GoTermAssociations>>>;
  is?: Maybe<_GoTermIsDirections>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type GoTermAssociationsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_AssociationOrdering>>>;
  filter?: Maybe<_GoTermAssociationFilter>;
};

export enum _AssociationOrdering {
  EvidenceAsc = "evidence_asc",
  EvidenceDesc = "evidence_desc",
  QualifierAsc = "qualifier_asc",
  QualifierDesc = "qualifier_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _GoTermAssociations = {
  __typename?: "_GOTermAssociations";
  evidence: Scalars["String"];
  qualifier?: Maybe<Scalars["String"]>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Protein node this ASSOCIATION [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  protein?: Maybe<Protein>;
};

export type Protein = {
  __typename?: "Protein";
  sid: Scalars["String"];
  category?: Maybe<Scalars["String"]>;
  desc?: Maybe<Scalars["String"]>;
  length?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  source: Scalars["String"];
  status?: Maybe<Scalars["String"]>;
  taxid: Scalars["String"];
  version?: Maybe<Scalars["String"]>;
  associations?: Maybe<Array<Maybe<_ProteinAssociations>>>;
  transcripts?: Maybe<Array<Maybe<_ProteinTranscripts>>>;
  mapsProteins?: Maybe<_ProteinMapsProteinsDirections>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type ProteinAssociationsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_AssociationOrdering>>>;
  filter?: Maybe<_ProteinAssociationFilter>;
};

export type ProteinTranscriptsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ProteinCodesOrdering>>>;
  filter?: Maybe<_ProteinProteinCodesFilter>;
};

export type _ProteinAssociations = {
  __typename?: "_ProteinAssociations";
  evidence: Scalars["String"];
  qualifier?: Maybe<Scalars["String"]>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the GOTerm node this ASSOCIATION [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  term?: Maybe<GoTerm>;
};

export enum _ProteinCodesOrdering {
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
  TaxidAsc = "taxid_asc",
  TaxidDesc = "taxid_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _ProteinTranscripts = {
  __typename?: "_ProteinTranscripts";
  source: Scalars["String"];
  taxid?: Maybe<Scalars["String"]>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Transcript node this CODES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  transcript?: Maybe<Transcript>;
};

export type Transcript = {
  __typename?: "Transcript";
  sid: Scalars["ID"];
  length?: Maybe<Scalars["String"]>;
  source: Scalars["String"];
  status?: Maybe<Scalars["String"]>;
  taxid: Scalars["String"];
  version?: Maybe<Scalars["String"]>;
  genes?: Maybe<Array<Maybe<_TranscriptGenes>>>;
  proteins?: Maybe<Array<Maybe<_TranscriptProteins>>>;
  mapsTranscripts?: Maybe<_TranscriptMapsTranscriptsDirections>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type TranscriptGenesArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_GeneCodesOrdering>>>;
  filter?: Maybe<_TranscriptGeneCodesFilter>;
};

export type TranscriptProteinsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ProteinCodesOrdering>>>;
  filter?: Maybe<_TranscriptProteinCodesFilter>;
};

export enum _GeneCodesOrdering {
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
  TaxidAsc = "taxid_asc",
  TaxidDesc = "taxid_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _TranscriptGenes = {
  __typename?: "_TranscriptGenes";
  source: Scalars["String"];
  taxid?: Maybe<Scalars["String"]>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Gene node this CODES [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  gene?: Maybe<Gene>;
};

export type Gene = {
  __typename?: "Gene";
  sid: Scalars["ID"];
  Feature_type?: Maybe<Scalars["String"]>;
  Full_name_from_nomenclature_authority?: Maybe<Scalars["String"]>;
  GeneID?: Maybe<Scalars["String"]>;
  LocusTag?: Maybe<Scalars["String"]>;
  Modification_date?: Maybe<Scalars["String"]>;
  Nomenclature_status?: Maybe<Scalars["String"]>;
  Other_designations?: Maybe<Scalars["String"]>;
  Symbol?: Maybe<Scalars["String"]>;
  Symbol_from_nomenclature_authority?: Maybe<Scalars["String"]>;
  Synonyms?: Maybe<Scalars["String"]>;
  chromosome?: Maybe<Scalars["String"]>;
  dbXrefs?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  map_location?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  source: Scalars["String"];
  tax_id?: Maybe<Scalars["String"]>;
  taxid?: Maybe<Scalars["String"]>;
  type_of_gene?: Maybe<Scalars["String"]>;
  transcripts?: Maybe<Array<Maybe<_GeneTranscripts>>>;
  expressedTissues?: Maybe<Array<Maybe<_GeneExpressedTissues>>>;
  pathways?: Maybe<Array<Maybe<_GenePathways>>>;
  mapsGenes?: Maybe<_GeneMapsGenesDirections>;
  mapsGeneSymbols?: Maybe<Array<Maybe<_GeneMapsGeneSymbols>>>;
  mapsGeneSymbolsWithOmitSpecialChar?: Maybe<
    Array<Maybe<_GeneMapsGeneSymbolsWithOmitSpecialChar>>
  >;
  mapsGeneSymbolsWithOmitLength?: Maybe<
    Array<Maybe<_GeneMapsGeneSymbolsWithOmitLength>>
  >;
  mapsGeneSymbolsWithOmitWord?: Maybe<
    Array<Maybe<_GeneMapsGeneSymbolsWithOmitWord>>
  >;
  diseases?: Maybe<Array<Maybe<_GeneDiseases>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type GeneTranscriptsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_GeneCodesOrdering>>>;
  filter?: Maybe<_GeneGeneCodesFilter>;
};

export type GeneExpressedTissuesArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ExpressedOrdering>>>;
  filter?: Maybe<_GeneExpressedFilter>;
};

export type GenePathwaysArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_MemberOrdering>>>;
  filter?: Maybe<_GeneMemberFilter>;
};

export type GeneMapsGeneSymbolsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_MapsGeneSymbolOrdering>>>;
  filter?: Maybe<_GeneMapsGeneSymbolFilter>;
};

export type GeneMapsGeneSymbolsWithOmitSpecialCharArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_MapsGeneSymbolsWithOmitedSpecialCharOrdering>>>;
  filter?: Maybe<_GeneMapsGeneSymbolsWithOmitedSpecialCharFilter>;
};

export type GeneMapsGeneSymbolsWithOmitLengthArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_MapsGeneSymbolsWithOmitLengthOrdering>>>;
  filter?: Maybe<_GeneMapsGeneSymbolsWithOmitLengthFilter>;
};

export type GeneMapsGeneSymbolsWithOmitWordArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_MapsGeneSymbolsWithOmitWordOrdering>>>;
  filter?: Maybe<_GeneMapsGeneSymbolsWithOmitWordFilter>;
};

export type GeneDiseasesArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_AssociatesDaGOrdering>>>;
  filter?: Maybe<_GeneAssociatesDaGFilter>;
};

export type _GeneTranscripts = {
  __typename?: "_GeneTranscripts";
  source: Scalars["String"];
  taxid?: Maybe<Scalars["String"]>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Transcript node this CODES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  transcript?: Maybe<Transcript>;
};

export enum _ExpressedOrdering {
  ValAsc = "val_asc",
  ValDesc = "val_desc",
  ValToStringAsc = "valToString_asc",
  ValToStringDesc = "valToString_desc",
  ValueAsc = "value_asc",
  ValueDesc = "value_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _GeneExpressedTissues = {
  __typename?: "_GeneExpressedTissues";
  val?: Maybe<Scalars["String"]>;
  valToString?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["Float"]>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the GtexDetailedTissue node this EXPRESSED [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  tissue?: Maybe<GtexDetailedTissue>;
};

export type GtexDetailedTissue = {
  __typename?: "GtexDetailedTissue";
  name: Scalars["String"];
  genes?: Maybe<Array<Maybe<_GtexDetailedTissueGenes>>>;
  tissues?: Maybe<Array<Maybe<GtexTissue>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type GtexDetailedTissueGenesArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ExpressedOrdering>>>;
  filter?: Maybe<_GtexDetailedTissueExpressedFilter>;
};

export type GtexDetailedTissueTissuesArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_GtexTissueOrdering>>>;
  filter?: Maybe<_GtexTissueFilter>;
};

export type _GtexDetailedTissueGenes = {
  __typename?: "_GtexDetailedTissueGenes";
  val?: Maybe<Scalars["String"]>;
  valToString?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["Float"]>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Gene node this EXPRESSED [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  gene?: Maybe<Gene>;
};

export enum _GtexTissueOrdering {
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type GtexTissue = {
  __typename?: "GtexTissue";
  name: Scalars["String"];
  detail?: Maybe<Array<Maybe<GtexDetailedTissue>>>;
  samples?: Maybe<Array<Maybe<GtexSample>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type GtexTissueDetailArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_GtexDetailedTissueOrdering>>>;
  filter?: Maybe<_GtexDetailedTissueFilter>;
};

export type GtexTissueSamplesArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_GtexSampleOrdering>>>;
  filter?: Maybe<_GtexSampleFilter>;
};

export enum _GtexDetailedTissueOrdering {
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export enum _GtexSampleOrdering {
  SidAsc = "sid_asc",
  SidDesc = "sid_desc",
  Sm350NrmAsc = "SM350NRM_asc",
  Sm350NrmDesc = "SM350NRM_desc",
  Sm550NrmAsc = "SM550NRM_asc",
  Sm550NrmDesc = "SM550NRM_desc",
  SmafrzeAsc = "SMAFRZE_asc",
  SmafrzeDesc = "SMAFRZE_desc",
  SmaltalgAsc = "SMALTALG_asc",
  SmaltalgDesc = "SMALTALG_desc",
  SmatsscrAsc = "SMATSSCR_asc",
  SmatsscrDesc = "SMATSSCR_desc",
  SmbsmmrtAsc = "SMBSMMRT_asc",
  SmbsmmrtDesc = "SMBSMMRT_desc",
  SmcenterAsc = "SMCENTER_asc",
  SmcenterDesc = "SMCENTER_desc",
  SmcglgthAsc = "SMCGLGTH_asc",
  SmcglgthDesc = "SMCGLGTH_desc",
  SmchmprsAsc = "SMCHMPRS_asc",
  SmchmprsDesc = "SMCHMPRS_desc",
  SmdpmprtAsc = "SMDPMPRT_asc",
  SmdpmprtDesc = "SMDPMPRT_desc",
  Sme1AntiAsc = "SME1ANTI_asc",
  Sme1AntiDesc = "SME1ANTI_desc",
  Sme1MmrtAsc = "SME1MMRT_asc",
  Sme1MmrtDesc = "SME1MMRT_desc",
  Sme1MprtAsc = "SME1MPRT_asc",
  Sme1MprtDesc = "SME1MPRT_desc",
  Sme1PctsAsc = "SME1PCTS_asc",
  Sme1PctsDesc = "SME1PCTS_desc",
  Sme1SnseAsc = "SME1SNSE_asc",
  Sme1SnseDesc = "SME1SNSE_desc",
  Sme2AntiAsc = "SME2ANTI_asc",
  Sme2AntiDesc = "SME2ANTI_desc",
  Sme2MmrtAsc = "SME2MMRT_asc",
  Sme2MmrtDesc = "SME2MMRT_desc",
  Sme2MprtAsc = "SME2MPRT_asc",
  Sme2MprtDesc = "SME2MPRT_desc",
  Sme2PctsAsc = "SME2PCTS_asc",
  Sme2PctsDesc = "SME2PCTS_desc",
  Sme2SnseAsc = "SME2SNSE_asc",
  Sme2SnseDesc = "SME2SNSE_desc",
  SmestlbsAsc = "SMESTLBS_asc",
  SmestlbsDesc = "SMESTLBS_desc",
  SmexncrtAsc = "SMEXNCRT_asc",
  SmexncrtDesc = "SMEXNCRT_desc",
  SmexpeffAsc = "SMEXPEFF_asc",
  SmexpeffDesc = "SMEXPEFF_desc",
  SmgappctAsc = "SMGAPPCT_asc",
  SmgappctDesc = "SMGAPPCT_desc",
  SmgebtchAsc = "SMGEBTCH_asc",
  SmgebtchDesc = "SMGEBTCH_desc",
  SmgebtchdAsc = "SMGEBTCHD_asc",
  SmgebtchdDesc = "SMGEBTCHD_desc",
  SmgebtchtAsc = "SMGEBTCHT_asc",
  SmgebtchtDesc = "SMGEBTCHT_desc",
  SmgnsdtcAsc = "SMGNSDTC_asc",
  SmgnsdtcDesc = "SMGNSDTC_desc",
  SmgtcAsc = "SMGTC_asc",
  SmgtcDesc = "SMGTC_desc",
  SmmaprtAsc = "SMMAPRT_asc",
  SmmaprtDesc = "SMMAPRT_desc",
  SmmflgthAsc = "SMMFLGTH_asc",
  SmmflgthDesc = "SMMFLGTH_desc",
  SmmncpbAsc = "SMMNCPB_asc",
  SmmncpbDesc = "SMMNCPB_desc",
  SmmncvAsc = "SMMNCV_asc",
  SmmncvDesc = "SMMNCV_desc",
  SmmppdAsc = "SMMPPD_asc",
  SmmppdDesc = "SMMPPD_desc",
  SmmppdprAsc = "SMMPPDPR_asc",
  SmmppdprDesc = "SMMPPDPR_desc",
  SmmppdunAsc = "SMMPPDUN_asc",
  SmmppdunDesc = "SMMPPDUN_desc",
  SmmpunrtAsc = "SMMPUNRT_asc",
  SmmpunrtDesc = "SMMPUNRT_desc",
  SmnabtchAsc = "SMNABTCH_asc",
  SmnabtchDesc = "SMNABTCH_desc",
  SmnabtchdAsc = "SMNABTCHD_asc",
  SmnabtchdDesc = "SMNABTCHD_desc",
  SmnabtchtAsc = "SMNABTCHT_asc",
  SmnabtchtDesc = "SMNABTCHT_desc",
  SmnterrtAsc = "SMNTERRT_asc",
  SmnterrtDesc = "SMNTERRT_desc",
  SmntrartAsc = "SMNTRART_asc",
  SmntrartDesc = "SMNTRART_desc",
  SmntrnrtAsc = "SMNTRNRT_asc",
  SmntrnrtDesc = "SMNTRNRT_desc",
  Smnum5CdAsc = "SMNUM5CD_asc",
  Smnum5CdDesc = "SMNUM5CD_desc",
  SmnumgpsAsc = "SMNUMGPS_asc",
  SmnumgpsDesc = "SMNUMGPS_desc",
  SmpthntsAsc = "SMPTHNTS_asc",
  SmpthntsDesc = "SMPTHNTS_desc",
  SmrdlgthAsc = "SMRDLGTH_asc",
  SmrdlgthDesc = "SMRDLGTH_desc",
  SmrdttlAsc = "SMRDTTL_asc",
  SmrdttlDesc = "SMRDTTL_desc",
  SmrinAsc = "SMRIN_asc",
  SmrinDesc = "SMRIN_desc",
  SmrrnanmAsc = "SMRRNANM_asc",
  SmrrnanmDesc = "SMRRNANM_desc",
  SmrrnartAsc = "SMRRNART_asc",
  SmrrnartDesc = "SMRRNART_desc",
  SmsflgthAsc = "SMSFLGTH_asc",
  SmsflgthDesc = "SMSFLGTH_desc",
  SmspltrdAsc = "SMSPLTRD_asc",
  SmspltrdDesc = "SMSPLTRD_desc",
  SmtrscptAsc = "SMTRSCPT_asc",
  SmtrscptDesc = "SMTRSCPT_desc",
  SmtsAsc = "SMTS_asc",
  SmtsDesc = "SMTS_desc",
  SmtsdAsc = "SMTSD_asc",
  SmtsdDesc = "SMTSD_desc",
  SmtsischAsc = "SMTSISCH_asc",
  SmtsischDesc = "SMTSISCH_desc",
  SmtspaxAsc = "SMTSPAX_asc",
  SmtspaxDesc = "SMTSPAX_desc",
  SmubridAsc = "SMUBRID_asc",
  SmubridDesc = "SMUBRID_desc",
  SmunmprtAsc = "SMUNMPRT_asc",
  SmunmprtDesc = "SMUNMPRT_desc",
  SmunpdrdAsc = "SMUNPDRD_asc",
  SmunpdrdDesc = "SMUNPDRD_desc",
  SmvqcflAsc = "SMVQCFL_asc",
  SmvqcflDesc = "SMVQCFL_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type GtexSample = {
  __typename?: "GtexSample";
  sid: Scalars["ID"];
  SM350NRM: Scalars["Float"];
  SM550NRM: Scalars["Float"];
  SMAFRZE: Scalars["String"];
  SMALTALG: Scalars["Float"];
  SMATSSCR: Scalars["Float"];
  SMBSMMRT: Scalars["Float"];
  SMCENTER: Scalars["String"];
  SMCGLGTH: Scalars["Float"];
  SMCHMPRS: Scalars["Float"];
  SMDPMPRT: Scalars["Float"];
  SME1ANTI: Scalars["Float"];
  SME1MMRT: Scalars["Float"];
  SME1MPRT: Scalars["Float"];
  SME1PCTS: Scalars["Float"];
  SME1SNSE: Scalars["Float"];
  SME2ANTI: Scalars["Float"];
  SME2MMRT: Scalars["Float"];
  SME2MPRT: Scalars["Float"];
  SME2PCTS: Scalars["Float"];
  SME2SNSE: Scalars["Float"];
  SMESTLBS: Scalars["Float"];
  SMEXNCRT: Scalars["Float"];
  SMEXPEFF: Scalars["Float"];
  SMGAPPCT: Scalars["Float"];
  SMGEBTCH: Scalars["String"];
  SMGEBTCHD: Scalars["String"];
  SMGEBTCHT: Scalars["String"];
  SMGNSDTC: Scalars["Float"];
  SMGTC: Scalars["String"];
  SMMAPRT: Scalars["Float"];
  SMMFLGTH: Scalars["Float"];
  SMMNCPB: Scalars["Float"];
  SMMNCV: Scalars["Float"];
  SMMPPD: Scalars["Float"];
  SMMPPDPR: Scalars["Float"];
  SMMPPDUN: Scalars["Float"];
  SMMPUNRT: Scalars["Float"];
  SMNABTCH: Scalars["String"];
  SMNABTCHD: Scalars["String"];
  SMNABTCHT: Scalars["String"];
  SMNTERRT: Scalars["Float"];
  SMNTRART: Scalars["Float"];
  SMNTRNRT: Scalars["Float"];
  SMNUM5CD: Scalars["Float"];
  SMNUMGPS: Scalars["Float"];
  SMPTHNTS: Scalars["String"];
  SMRDLGTH: Scalars["Float"];
  SMRDTTL: Scalars["Float"];
  SMRIN: Scalars["Float"];
  SMRRNANM: Scalars["Float"];
  SMRRNART: Scalars["Float"];
  SMSFLGTH: Scalars["Float"];
  SMSPLTRD: Scalars["Float"];
  SMTRSCPT: Scalars["Float"];
  SMTS: Scalars["String"];
  SMTSD: Scalars["String"];
  SMTSISCH: Scalars["Float"];
  SMTSPAX: Scalars["Float"];
  SMUBRID: Scalars["String"];
  SMUNMPRT: Scalars["Float"];
  SMUNPDRD: Scalars["Float"];
  SMVQCFL: Scalars["Float"];
  measures?: Maybe<Array<Maybe<GtexTissue>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type GtexSampleMeasuresArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_GtexTissueOrdering>>>;
  filter?: Maybe<_GtexTissueFilter>;
};

export enum _MemberOrdering {
  EvidenceAsc = "evidence_asc",
  EvidenceDesc = "evidence_desc",
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _GenePathways = {
  __typename?: "_GenePathways";
  evidence: Scalars["String"];
  source: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Pathway node this MEMBER [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  pathway?: Maybe<Pathway>;
};

export type Pathway = {
  __typename?: "Pathway";
  sid: Scalars["ID"];
  name: Scalars["String"];
  org: Scalars["String"];
  source: Scalars["String"];
  taxid: Scalars["String"];
  genes?: Maybe<Array<Maybe<_PathwayGenes>>>;
  pathways?: Maybe<_PathwayPathwaysDirections>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type PathwayGenesArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_MemberOrdering>>>;
  filter?: Maybe<_PathwayMemberFilter>;
};

export type _PathwayGenes = {
  __typename?: "_PathwayGenes";
  evidence: Scalars["String"];
  source: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Gene node this MEMBER [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  gene?: Maybe<Gene>;
};

export type _PathwayPathwaysDirections = {
  __typename?: "_PathwayPathwaysDirections";
  /** Field for the Pathway node this CHILD [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  child?: Maybe<Array<Maybe<_PathwayPathways>>>;
  /** Field for the Pathway node this CHILD [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  parent?: Maybe<Array<Maybe<_PathwayPathways>>>;
};

export type _PathwayPathwaysDirectionsChildArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ChildOrdering>>>;
  filter?: Maybe<_ChildFilter>;
};

export type _PathwayPathwaysDirectionsParentArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ChildOrdering>>>;
  filter?: Maybe<_ChildFilter>;
};

export enum _ChildOrdering {
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _PathwayPathways = {
  __typename?: "_PathwayPathways";
  source: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Pathway node this CHILD [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  Pathway?: Maybe<Pathway>;
};

export type _GeneMapsGenesDirections = {
  __typename?: "_GeneMapsGenesDirections";
  /** Field for the Gene node this MAPS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  mappedBy?: Maybe<Array<Maybe<_GeneMapsGenes>>>;
  /** Field for the Gene node this MAPS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  gene?: Maybe<Array<Maybe<_GeneMapsGenes>>>;
};

export type _GeneMapsGenesDirectionsMappedByArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_MapsGeneOrdering>>>;
  filter?: Maybe<_MapsGeneFilter>;
};

export type _GeneMapsGenesDirectionsGeneArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_MapsGeneOrdering>>>;
  filter?: Maybe<_MapsGeneFilter>;
};

export enum _MapsGeneOrdering {
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _GeneMapsGenes = {
  __typename?: "_GeneMapsGenes";
  source: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Gene node this MAPS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  Gene?: Maybe<Gene>;
};

export enum _MapsGeneSymbolOrdering {
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _GeneMapsGeneSymbols = {
  __typename?: "_GeneMapsGeneSymbols";
  source: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the GeneSymbol node this MAPS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  symbol?: Maybe<GeneSymbol>;
};

export type GeneSymbol = {
  __typename?: "GeneSymbol";
  sid: Scalars["String"];
  status?: Maybe<Scalars["String"]>;
  taxid: Scalars["String"];
  synonyms?: Maybe<_GeneSymbolSynonymsDirections>;
  synonymsSpecialCharOmitted?: Maybe<
    Array<Maybe<_GeneSymbolSynonymsSpecialCharOmitted>>
  >;
  synonymsLengthOmitted?: Maybe<Array<Maybe<_GeneSymbolSynonymsLengthOmitted>>>;
  synonymsWordOmitted?: Maybe<Array<Maybe<_GeneSymbolSynonymsWordOmitted>>>;
  mentionedInFragments?: Maybe<Array<Maybe<Fragment>>>;
  mentionedInBodyTextFragments?: Maybe<
    Array<Maybe<_GeneSymbolMentionedInBodyTextFragments>>
  >;
  mentionedInAbstractFragments?: Maybe<
    Array<Maybe<_GeneSymbolMentionedInAbstractFragments>>
  >;
  mentionedInPatentDescriptions?: Maybe<
    Array<Maybe<_GeneSymbolMentionedInPatentDescriptions>>
  >;
  mentionedInPatentTitles?: Maybe<
    Array<Maybe<_GeneSymbolMentionedInPatentTitles>>
  >;
  mentionedInPatentAbstracts?: Maybe<
    Array<Maybe<_GeneSymbolMentionedInPatentAbstracts>>
  >;
  mentionedInPatentClaims?: Maybe<
    Array<Maybe<_GeneSymbolMentionedInPatentClaims>>
  >;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type GeneSymbolSynonymsSpecialCharOmittedArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_SynonymSpecialCharOmittedOrdering>>>;
  filter?: Maybe<_GeneSymbolSynonymSpecialCharOmittedFilter>;
};

export type GeneSymbolSynonymsLengthOmittedArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_SynonymLengthOmittedOrdering>>>;
  filter?: Maybe<_GeneSymbolSynonymLengthOmittedFilter>;
};

export type GeneSymbolSynonymsWordOmittedArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_SynonymWordOmittedOrdering>>>;
  filter?: Maybe<_GeneSymbolSynonymWordOmittedFilter>;
};

export type GeneSymbolMentionedInFragmentsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_FragmentOrdering>>>;
  filter?: Maybe<_FragmentFilter>;
};

export type GeneSymbolMentionedInBodyTextFragmentsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_FromBodyTextMentionsOrdering>>>;
  filter?: Maybe<_GeneSymbolFromBodyTextMentionsFilter>;
};

export type GeneSymbolMentionedInAbstractFragmentsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_FromAbstractMentionsOrdering>>>;
  filter?: Maybe<_GeneSymbolFromAbstractMentionsFilter>;
};

export type GeneSymbolMentionedInPatentDescriptionsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentDescriptionMentionsGeneSymbolOrdering>>>;
  filter?: Maybe<_GeneSymbolPatentDescriptionMentionsGeneSymbolFilter>;
};

export type GeneSymbolMentionedInPatentTitlesArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentTitleMentionsGeneSymbolOrdering>>>;
  filter?: Maybe<_GeneSymbolPatentTitleMentionsGeneSymbolFilter>;
};

export type GeneSymbolMentionedInPatentAbstractsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentAbstractMentionsGeneSymbolOrdering>>>;
  filter?: Maybe<_GeneSymbolPatentAbstractMentionsGeneSymbolFilter>;
};

export type GeneSymbolMentionedInPatentClaimsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentClaimMentionsGeneSymbolOrdering>>>;
  filter?: Maybe<_GeneSymbolPatentClaimMentionsGeneSymbolFilter>;
};

export type _GeneSymbolSynonymsDirections = {
  __typename?: "_GeneSymbolSynonymsDirections";
  /** Field for the GeneSymbol node this SYNONYM [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  synonymOf?: Maybe<Array<Maybe<_GeneSymbolSynonyms>>>;
  /** Field for the GeneSymbol node this SYNONYM [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  synonym?: Maybe<Array<Maybe<_GeneSymbolSynonyms>>>;
};

export type _GeneSymbolSynonymsDirectionsSynonymOfArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_SynonymOrdering>>>;
  filter?: Maybe<_SynonymFilter>;
};

export type _GeneSymbolSynonymsDirectionsSynonymArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_SynonymOrdering>>>;
  filter?: Maybe<_SynonymFilter>;
};

export enum _SynonymOrdering {
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _GeneSymbolSynonyms = {
  __typename?: "_GeneSymbolSynonyms";
  source: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the GeneSymbol node this SYNONYM [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  GeneSymbol?: Maybe<GeneSymbol>;
};

export enum _SynonymSpecialCharOmittedOrdering {
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _GeneSymbolSynonymsSpecialCharOmitted = {
  __typename?: "_GeneSymbolSynonymsSpecialCharOmitted";
  source: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the OmitSpecialChar node this SYNONYM [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  synonymOf?: Maybe<OmitSpecialChar>;
};

export type OmitSpecialChar = {
  __typename?: "OmitSpecialChar";
  sid: Scalars["String"];
  status?: Maybe<Scalars["String"]>;
  taxid: Scalars["String"];
  synonyms?: Maybe<_OmitSpecialCharSynonymsDirections>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type _OmitSpecialCharSynonymsDirections = {
  __typename?: "_OmitSpecialCharSynonymsDirections";
  /** Field for the GeneSymbol node this SYNONYM [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  synonymOf?: Maybe<Array<Maybe<_OmitSpecialCharSynonyms>>>;
  /** Field for the GeneSymbol node this SYNONYM [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  synonym?: Maybe<Array<Maybe<_OmitSpecialCharSynonyms>>>;
};

export type _OmitSpecialCharSynonymsDirectionsSynonymOfArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_SynonymOrdering>>>;
  filter?: Maybe<_SynonymFilter>;
};

export type _OmitSpecialCharSynonymsDirectionsSynonymArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_SynonymOrdering>>>;
  filter?: Maybe<_SynonymFilter>;
};

export type _OmitSpecialCharSynonyms = {
  __typename?: "_OmitSpecialCharSynonyms";
  source: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the GeneSymbol node this SYNONYM [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  GeneSymbol?: Maybe<GeneSymbol>;
};

export enum _SynonymLengthOmittedOrdering {
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _GeneSymbolSynonymsLengthOmitted = {
  __typename?: "_GeneSymbolSynonymsLengthOmitted";
  source: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the OmitLength node this SYNONYM [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  synonymOf?: Maybe<OmitLength>;
};

export type OmitLength = {
  __typename?: "OmitLength";
  sid: Scalars["String"];
  status: Scalars["String"];
  taxid: Scalars["String"];
  synonyms?: Maybe<_OmitLengthSynonymsDirections>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type _OmitLengthSynonymsDirections = {
  __typename?: "_OmitLengthSynonymsDirections";
  /** Field for the GeneSymbol node this SYNONYM [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  synonymOf?: Maybe<Array<Maybe<_OmitLengthSynonyms>>>;
  /** Field for the GeneSymbol node this SYNONYM [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  synonym?: Maybe<Array<Maybe<_OmitLengthSynonyms>>>;
};

export type _OmitLengthSynonymsDirectionsSynonymOfArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_SynonymOrdering>>>;
  filter?: Maybe<_SynonymFilter>;
};

export type _OmitLengthSynonymsDirectionsSynonymArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_SynonymOrdering>>>;
  filter?: Maybe<_SynonymFilter>;
};

export type _OmitLengthSynonyms = {
  __typename?: "_OmitLengthSynonyms";
  source: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the GeneSymbol node this SYNONYM [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  GeneSymbol?: Maybe<GeneSymbol>;
};

export enum _SynonymWordOmittedOrdering {
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _GeneSymbolSynonymsWordOmitted = {
  __typename?: "_GeneSymbolSynonymsWordOmitted";
  source: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the OmitWord node this SYNONYM [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  synonymOf?: Maybe<OmitWord>;
};

export type OmitWord = {
  __typename?: "OmitWord";
  sid: Scalars["String"];
  status?: Maybe<Scalars["String"]>;
  taxid: Scalars["String"];
  synonyms?: Maybe<_OmitWordSynonymsDirections>;
  synonymsWordOmitted?: Maybe<Array<Maybe<_OmitWordSynonymsWordOmitted>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type OmitWordSynonymsWordOmittedArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_SynonymWordOmittedOrdering>>>;
  filter?: Maybe<_OmitWordSynonymWordOmittedFilter>;
};

export type _OmitWordSynonymsDirections = {
  __typename?: "_OmitWordSynonymsDirections";
  /** Field for the GeneSymbol node this SYNONYM [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  synonymOf?: Maybe<Array<Maybe<_OmitWordSynonyms>>>;
  /** Field for the GeneSymbol node this SYNONYM [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  synonym?: Maybe<Array<Maybe<_OmitWordSynonyms>>>;
};

export type _OmitWordSynonymsDirectionsSynonymOfArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_SynonymOrdering>>>;
  filter?: Maybe<_SynonymFilter>;
};

export type _OmitWordSynonymsDirectionsSynonymArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_SynonymOrdering>>>;
  filter?: Maybe<_SynonymFilter>;
};

export type _OmitWordSynonyms = {
  __typename?: "_OmitWordSynonyms";
  source: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the GeneSymbol node this SYNONYM [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  GeneSymbol?: Maybe<GeneSymbol>;
};

export type _OmitWordSynonymsWordOmitted = {
  __typename?: "_OmitWordSynonymsWordOmitted";
  source: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the GeneSymbol node this SYNONYM [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  synonym?: Maybe<GeneSymbol>;
};

export enum _FromBodyTextMentionsOrdering {
  ScoreAsc = "score_asc",
  ScoreDesc = "score_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _GeneSymbolMentionedInBodyTextFragments = {
  __typename?: "_GeneSymbolMentionedInBodyTextFragments";
  score: Scalars["Float"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the FromBodyText node this MENTIONS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  fromBodyText?: Maybe<FromBodyText>;
};

export type FromBodyText = Fragment & {
  __typename?: "FromBodyText";
  text: Scalars["String"];
  sequence: Scalars["Int"];
  kind: Scalars["String"];
  bodyTexts?: Maybe<Array<Maybe<BodyText>>>;
  next?: Maybe<FromBodyText>;
  mentionsGeneSymbols?: Maybe<Array<Maybe<_FromBodyTextMentionsGeneSymbols>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type FromBodyTextBodyTextsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_BodyTextOrdering>>>;
  filter?: Maybe<_BodyTextFilter>;
};

export type FromBodyTextNextArgs = {
  filter?: Maybe<_FromBodyTextFilter>;
};

export type FromBodyTextMentionsGeneSymbolsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_FromBodyTextMentionsOrdering>>>;
  filter?: Maybe<_FromBodyTextFromBodyTextMentionsFilter>;
};

export enum _BodyTextOrdering {
  HashIdAsc = "_hash_id_asc",
  HashIdDesc = "_hash_id_desc",
  SectionAsc = "section_asc",
  SectionDesc = "section_desc",
  TextAsc = "text_asc",
  TextDesc = "text_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type BodyText = {
  __typename?: "BodyText";
  _hash_id?: Maybe<Scalars["ID"]>;
  section: Scalars["String"];
  text: Scalars["String"];
  bodyTextCollections?: Maybe<Array<Maybe<BodyTextCollection>>>;
  fragments?: Maybe<Array<Maybe<FromBodyText>>>;
  citations?: Maybe<Array<Maybe<_BodyTextCitations>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type BodyTextBodyTextCollectionsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_BodyTextCollectionOrdering>>>;
  filter?: Maybe<_BodyTextCollectionFilter>;
};

export type BodyTextFragmentsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_FromBodyTextOrdering>>>;
  filter?: Maybe<_FromBodyTextFilter>;
};

export type BodyTextCitationsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_HasCitationOrdering>>>;
  filter?: Maybe<_BodyTextHasCitationFilter>;
};

export enum _BodyTextCollectionOrdering {
  IdAsc = "id_asc",
  IdDesc = "id_desc",
  // IdAsc = '_id_asc',
  // IdDesc = '_id_desc'
}

export type BodyTextCollection = {
  __typename?: "BodyTextCollection";
  id: Scalars["ID"];
  papers?: Maybe<Array<Maybe<Paper>>>;
  bodyTexts?: Maybe<Array<Maybe<_BodyTextCollectionBodyTexts>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type BodyTextCollectionPapersArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PaperOrdering>>>;
  filter?: Maybe<_PaperFilter>;
};

export type BodyTextCollectionBodyTextsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_HasBodyTextOrdering>>>;
  filter?: Maybe<_BodyTextCollectionHasBodyTextFilter>;
};

export enum _PaperOrdering {
  HashIdAsc = "_hash_id_asc",
  HashIdDesc = "_hash_id_desc",
  CordUidAsc = "cord_uid_asc",
  CordUidDesc = "cord_uid_desc",
  JournalAsc = "journal_asc",
  JournalDesc = "journal_desc",
  PublishTimeAsc = "publish_time_asc",
  PublishTimeDesc = "publish_time_desc",
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
  TitleAsc = "title_asc",
  TitleDesc = "title_desc",
  UrlAsc = "url_asc",
  UrlDesc = "url_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Paper = {
  __typename?: "Paper";
  _hash_id?: Maybe<Scalars["ID"]>;
  cord_uid: Scalars["ID"];
  journal?: Maybe<Scalars["String"]>;
  publish_time?: Maybe<Scalars["String"]>;
  source: Scalars["String"];
  title?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  authorCollection?: Maybe<Array<Maybe<AuthorCollection>>>;
  abstractCollection?: Maybe<Array<Maybe<AbstractCollection>>>;
  referenceCollection?: Maybe<Array<Maybe<ReferenceCollection>>>;
  bodyTextCollection?: Maybe<Array<Maybe<BodyTextCollection>>>;
  paperId?: Maybe<Array<Maybe<_PaperPaperId>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type PaperAuthorCollectionArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_AuthorCollectionOrdering>>>;
  filter?: Maybe<_AuthorCollectionFilter>;
};

export type PaperAbstractCollectionArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_AbstractCollectionOrdering>>>;
  filter?: Maybe<_AbstractCollectionFilter>;
};

export type PaperReferenceCollectionArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ReferenceCollectionOrdering>>>;
  filter?: Maybe<_ReferenceCollectionFilter>;
};

export type PaperBodyTextCollectionArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_BodyTextCollectionOrdering>>>;
  filter?: Maybe<_BodyTextCollectionFilter>;
};

export type PaperPaperIdArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_HasPaperIdOrdering>>>;
  filter?: Maybe<_PaperHasPaperIdFilter>;
};

export enum _AuthorCollectionOrdering {
  IdAsc = "id_asc",
  IdDesc = "id_desc",
  // IdAsc = '_id_asc',
  // IdDesc = '_id_desc'
}

export type AuthorCollection = {
  __typename?: "AuthorCollection";
  id: Scalars["ID"];
  papers?: Maybe<Array<Maybe<Paper>>>;
  authors?: Maybe<Array<Maybe<_AuthorCollectionAuthors>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type AuthorCollectionPapersArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PaperOrdering>>>;
  filter?: Maybe<_PaperFilter>;
};

export type AuthorCollectionAuthorsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_HasAuthorOrdering>>>;
  filter?: Maybe<_AuthorCollectionHasAuthorFilter>;
};

export enum _HasAuthorOrdering {
  PositionAsc = "position_asc",
  PositionDesc = "position_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _AuthorCollectionAuthors = {
  __typename?: "_AuthorCollectionAuthors";
  position: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Author node this AUTHORCOLLECTION_HAS_AUTHOR [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  author?: Maybe<Author>;
};

export type Author = {
  __typename?: "Author";
  _hash_id?: Maybe<Scalars["ID"]>;
  email?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["String"]>;
  fist?: Maybe<Scalars["String"]>;
  last?: Maybe<Scalars["String"]>;
  middle?: Maybe<Scalars["String"]>;
  suffix?: Maybe<Scalars["String"]>;
  collections?: Maybe<Array<Maybe<AuthorCollection>>>;
  affiliation?: Maybe<Array<Maybe<Affiliation>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type AuthorCollectionsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_AuthorCollectionOrdering>>>;
  filter?: Maybe<_AuthorCollectionFilter>;
};

export type AuthorAffiliationArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_AffiliationOrdering>>>;
  filter?: Maybe<_AffiliationFilter>;
};

export enum _AffiliationOrdering {
  HashIdAsc = "_hash_id_asc",
  HashIdDesc = "_hash_id_desc",
  InstitutionAsc = "institution_asc",
  InstitutionDesc = "institution_desc",
  LaboratoryAsc = "laboratory_asc",
  LaboratoryDesc = "laboratory_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Affiliation = {
  __typename?: "Affiliation";
  _hash_id?: Maybe<Scalars["ID"]>;
  institution: Scalars["String"];
  laboratory: Scalars["String"];
  authors?: Maybe<Array<Maybe<Author>>>;
  affiliation_has_location?: Maybe<Array<Maybe<Location>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type AffiliationAuthorsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_AuthorOrdering>>>;
  filter?: Maybe<_AuthorFilter>;
};

export type AffiliationAffiliation_Has_LocationArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_LocationOrdering>>>;
  filter?: Maybe<_LocationFilter>;
};

export enum _AuthorOrdering {
  HashIdAsc = "_hash_id_asc",
  HashIdDesc = "_hash_id_desc",
  EmailAsc = "email_asc",
  EmailDesc = "email_desc",
  FirstAsc = "first_asc",
  FirstDesc = "first_desc",
  FistAsc = "fist_asc",
  FistDesc = "fist_desc",
  LastAsc = "last_asc",
  LastDesc = "last_desc",
  MiddleAsc = "middle_asc",
  MiddleDesc = "middle_desc",
  SuffixAsc = "suffix_asc",
  SuffixDesc = "suffix_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export enum _LocationOrdering {
  HashIdAsc = "_hash_id_asc",
  HashIdDesc = "_hash_id_desc",
  AddrLineAsc = "addrLine_asc",
  AddrLineDesc = "addrLine_desc",
  CountryAsc = "country_asc",
  CountryDesc = "country_desc",
  PostBoxAsc = "postBox_asc",
  PostBoxDesc = "postBox_desc",
  PostCodeAsc = "postCode_asc",
  PostCodeDesc = "postCode_desc",
  RegionAsc = "region_asc",
  RegionDesc = "region_desc",
  SettlementAsc = "settlement_asc",
  SettlementDesc = "settlement_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Location = {
  __typename?: "Location";
  _hash_id?: Maybe<Scalars["ID"]>;
  addrLine?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  postBox?: Maybe<Scalars["String"]>;
  postCode?: Maybe<Scalars["String"]>;
  region?: Maybe<Scalars["String"]>;
  settlement?: Maybe<Scalars["String"]>;
  affiliations?: Maybe<Array<Maybe<Affiliation>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type LocationAffiliationsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_AffiliationOrdering>>>;
  filter?: Maybe<_AffiliationFilter>;
};

export enum _AbstractCollectionOrdering {
  IdAsc = "id_asc",
  IdDesc = "id_desc",
  // IdAsc = '_id_asc',
  // IdDesc = '_id_desc'
}

export type AbstractCollection = {
  __typename?: "AbstractCollection";
  id: Scalars["ID"];
  papers?: Maybe<Array<Maybe<Paper>>>;
  abstracts?: Maybe<Array<Maybe<_AbstractCollectionAbstracts>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type AbstractCollectionPapersArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PaperOrdering>>>;
  filter?: Maybe<_PaperFilter>;
};

export type AbstractCollectionAbstractsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_HasAbstractOrdering>>>;
  filter?: Maybe<_AbstractCollectionHasAbstractFilter>;
};

export enum _HasAbstractOrdering {
  PositionAsc = "position_asc",
  PositionDesc = "position_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _AbstractCollectionAbstracts = {
  __typename?: "_AbstractCollectionAbstracts";
  position: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Abstract node this ABSTRACTCOLLECTION_HAS_ABSTRACT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  abstract?: Maybe<Abstract>;
};

export type Abstract = {
  __typename?: "Abstract";
  _hash_id?: Maybe<Scalars["ID"]>;
  section?: Maybe<Scalars["String"]>;
  text: Scalars["String"];
  fragments?: Maybe<Array<Maybe<FromAbstract>>>;
  collections?: Maybe<Array<Maybe<_AbstractCollections>>>;
  citation?: Maybe<Array<Maybe<_AbstractCitation>>>;
  mentions?: Maybe<Array<Maybe<_AbstractMentions>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type AbstractFragmentsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_FromAbstractOrdering>>>;
  filter?: Maybe<_FromAbstractFilter>;
};

export type AbstractCollectionsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_HasAbstractOrdering>>>;
  filter?: Maybe<_AbstractHasAbstractFilter>;
};

export type AbstractCitationArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_AbstractHasCitationOrdering>>>;
  filter?: Maybe<_AbstractAbstractHasCitationFilter>;
};

export type AbstractMentionsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_AbstractMentionsOrdering>>>;
  filter?: Maybe<_AbstractAbstractMentionsFilter>;
};

export enum _FromAbstractOrdering {
  TextAsc = "text_asc",
  TextDesc = "text_desc",
  SequenceAsc = "sequence_asc",
  SequenceDesc = "sequence_desc",
  KindAsc = "kind_asc",
  KindDesc = "kind_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type FromAbstract = Fragment & {
  __typename?: "FromAbstract";
  text: Scalars["String"];
  sequence: Scalars["Int"];
  kind: Scalars["String"];
  next?: Maybe<FromAbstract>;
  abstracts?: Maybe<Array<Maybe<Abstract>>>;
  mentionsGeneSymbols?: Maybe<Array<Maybe<_FromAbstractMentionsGeneSymbols>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type FromAbstractNextArgs = {
  filter?: Maybe<_FromAbstractFilter>;
};

export type FromAbstractAbstractsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_AbstractOrdering>>>;
  filter?: Maybe<_AbstractFilter>;
};

export type FromAbstractMentionsGeneSymbolsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_FromAbstractMentionsOrdering>>>;
  filter?: Maybe<_FromAbstractFromAbstractMentionsFilter>;
};

export enum _AbstractOrdering {
  HashIdAsc = "_hash_id_asc",
  HashIdDesc = "_hash_id_desc",
  SectionAsc = "section_asc",
  SectionDesc = "section_desc",
  TextAsc = "text_asc",
  TextDesc = "text_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export enum _FromAbstractMentionsOrdering {
  ScoreAsc = "score_asc",
  ScoreDesc = "score_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _FromAbstractMentionsGeneSymbols = {
  __typename?: "_FromAbstractMentionsGeneSymbols";
  score: Scalars["Float"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the GeneSymbol node this MENTIONS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  geneSymbol?: Maybe<GeneSymbol>;
};

export type _AbstractCollections = {
  __typename?: "_AbstractCollections";
  position: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the AbstractCollection node this ABSTRACTCOLLECTION_HAS_ABSTRACT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  collection?: Maybe<AbstractCollection>;
};

export enum _AbstractHasCitationOrdering {
  PositionAsc = "position_asc",
  PositionDesc = "position_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _AbstractCitation = {
  __typename?: "_AbstractCitation";
  position: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Citation node this ABSTRACT_HAS_CITATION [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  citation?: Maybe<Citation>;
};

export type Citation = {
  __typename?: "Citation";
  name?: Maybe<Scalars["String"]>;
  _hash_id?: Maybe<Scalars["ID"]>;
  end?: Maybe<Scalars["Int"]>;
  mention?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  text?: Maybe<Scalars["String"]>;
  bodyTexts?: Maybe<Array<Maybe<BodyText>>>;
  abstracts?: Maybe<Array<Maybe<Abstract>>>;
  references?: Maybe<Array<Maybe<Reference>>>;
  isReferenceType?: Maybe<Array<Maybe<ReferenceType>>>;
  hasPublicationId?: Maybe<Array<Maybe<PaperId>>>;
  clinicaltrials?: Maybe<Array<Maybe<ClinicalTrial>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type CitationBodyTextsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_BodyTextOrdering>>>;
  filter?: Maybe<_BodyTextFilter>;
};

export type CitationAbstractsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_AbstractOrdering>>>;
  filter?: Maybe<_AbstractFilter>;
};

export type CitationReferencesArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ReferenceOrdering>>>;
  filter?: Maybe<_ReferenceFilter>;
};

export type CitationIsReferenceTypeArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ReferenceTypeOrdering>>>;
  filter?: Maybe<_ReferenceTypeFilter>;
};

export type CitationHasPublicationIdArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PaperIdOrdering>>>;
  filter?: Maybe<_PaperIdFilter>;
};

export type CitationClinicaltrialsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export enum _ReferenceOrdering {
  HashIdAsc = "_hash_id_asc",
  HashIdDesc = "_hash_id_desc",
  IssnAsc = "issn_asc",
  IssnDesc = "issn_desc",
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  PagesAsc = "pages_asc",
  PagesDesc = "pages_desc",
  RefIdAsc = "ref_id_asc",
  RefIdDesc = "ref_id_desc",
  TitleAsc = "title_asc",
  TitleDesc = "title_desc",
  VenueAsc = "venue_asc",
  VenueDesc = "venue_desc",
  VolumeAsc = "volume_asc",
  VolumeDesc = "volume_desc",
  YearAsc = "year_asc",
  YearDesc = "year_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Reference = {
  __typename?: "Reference";
  _hash_id?: Maybe<Scalars["ID"]>;
  issn?: Maybe<Scalars["ID"]>;
  name: Scalars["String"];
  pages?: Maybe<Scalars["String"]>;
  ref_id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  venue?: Maybe<Scalars["String"]>;
  volume?: Maybe<Scalars["String"]>;
  year?: Maybe<Scalars["Int"]>;
  referenceCollections?: Maybe<Array<Maybe<ReferenceCollection>>>;
  citations?: Maybe<Array<Maybe<Citation>>>;
  paperId?: Maybe<Array<Maybe<_ReferencePaperId>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type ReferenceReferenceCollectionsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ReferenceCollectionOrdering>>>;
  filter?: Maybe<_ReferenceCollectionFilter>;
};

export type ReferenceCitationsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_CitationOrdering>>>;
  filter?: Maybe<_CitationFilter>;
};

export type ReferencePaperIdArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ReferenceHasPaperidOrdering>>>;
  filter?: Maybe<_ReferenceReferenceHasPaperidFilter>;
};

export enum _ReferenceCollectionOrdering {
  IdAsc = "id_asc",
  IdDesc = "id_desc",
  // IdAsc = '_id_asc',
  // IdDesc = '_id_desc'
}

export type ReferenceCollection = {
  __typename?: "ReferenceCollection";
  id: Scalars["ID"];
  papers?: Maybe<Array<Maybe<Paper>>>;
  references?: Maybe<Array<Maybe<_ReferenceCollectionReferences>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type ReferenceCollectionPapersArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PaperOrdering>>>;
  filter?: Maybe<_PaperFilter>;
};

export type ReferenceCollectionReferencesArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_HasReferenceOrdering>>>;
  filter?: Maybe<_ReferenceCollectionHasReferenceFilter>;
};

export enum _HasReferenceOrdering {
  PositionAsc = "position_asc",
  PositionDesc = "position_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _ReferenceCollectionReferences = {
  __typename?: "_ReferenceCollectionReferences";
  position: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Reference node this REFERENCECOLLECTION_HAS_REFERENCE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  reference?: Maybe<Reference>;
};

export enum _CitationOrdering {
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  HashIdAsc = "_hash_id_asc",
  HashIdDesc = "_hash_id_desc",
  EndAsc = "end_asc",
  EndDesc = "end_desc",
  MentionAsc = "mention_asc",
  MentionDesc = "mention_desc",
  StartAsc = "start_asc",
  StartDesc = "start_desc",
  TextAsc = "text_asc",
  TextDesc = "text_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export enum _ReferenceHasPaperidOrdering {
  PositionAsc = "position_asc",
  PositionDesc = "position_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _ReferencePaperId = {
  __typename?: "_ReferencePaperId";
  position: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the PaperID node this REFERENCE_HAS_PAPERID [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  id?: Maybe<PaperId>;
};

export type PaperId = {
  __typename?: "PaperID";
  id: Scalars["ID"];
  type: Scalars["String"];
  papers?: Maybe<Array<Maybe<Paper>>>;
  references?: Maybe<Array<Maybe<_PaperIdReferences>>>;
  hasPublicationId?: Maybe<Array<Maybe<PaperId>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type PaperIdPapersArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PaperOrdering>>>;
  filter?: Maybe<_PaperFilter>;
};

export type PaperIdReferencesArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ReferenceHasPaperidOrdering>>>;
  filter?: Maybe<_PaperIdReferenceHasPaperidFilter>;
};

export type PaperIdHasPublicationIdArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PaperIdOrdering>>>;
  filter?: Maybe<_PaperIdFilter>;
};

export type _PaperIdReferences = {
  __typename?: "_PaperIDReferences";
  position: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Reference node this REFERENCE_HAS_PAPERID [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  reference?: Maybe<Reference>;
};

export enum _PaperIdOrdering {
  IdAsc = "id_asc",
  IdDesc = "id_desc",
  TypeAsc = "type_asc",
  TypeDesc = "type_desc",
  // IdAsc = '_id_asc',
  // IdDesc = '_id_desc'
}

export enum _ReferenceTypeOrdering {
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type ReferenceType = {
  __typename?: "ReferenceType";
  name: Scalars["String"];
  citations?: Maybe<Array<Maybe<Citation>>>;
  trials?: Maybe<Array<Maybe<ClinicalTrial>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type ReferenceTypeCitationsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_CitationOrdering>>>;
  filter?: Maybe<_CitationFilter>;
};

export type ReferenceTypeTrialsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export enum _ClinicalTrialOrdering {
  NctIdAsc = "NCTId_asc",
  NctIdDesc = "NCTId_desc",
  DataSourceAsc = "data_source_asc",
  DataSourceDesc = "data_source_desc",
  UrlAsc = "url_asc",
  UrlDesc = "url_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type ClinicalTrial = {
  __typename?: "ClinicalTrial";
  NCTId: Scalars["ID"];
  data_source: Scalars["String"];
  url: Scalars["String"];
  refersTo?: Maybe<Array<Maybe<Citation>>>;
  refersToUrl?: Maybe<Array<Maybe<Link>>>;
  useReferenceAs?: Maybe<Array<Maybe<ReferenceType>>>;
  conductedAt?: Maybe<Array<Maybe<Facility>>>;
  investigates?: Maybe<Array<Maybe<Intervention>>>;
  type?: Maybe<Array<Maybe<StudyType>>>;
  isSponsoredBy?: Maybe<Array<Maybe<Sponsor>>>;
  isSupportedBy?: Maybe<Array<Maybe<Collaborator>>>;
  isFdaRegulatedDevice?: Maybe<Array<Maybe<Response>>>;
  isUnapprovedDevice?: Maybe<Array<Maybe<Response>>>;
  isFdaRegulatedDrug?: Maybe<Array<Maybe<Response>>>;
  expandedAccess?: Maybe<Array<Maybe<Response>>>;
  isStudying?: Maybe<Array<Maybe<Condition>>>;
  isPhase?: Maybe<Array<Maybe<Phase>>>;
  purpose?: Maybe<Array<Maybe<Purpose>>>;
  identifications?: Maybe<Array<Maybe<StudyIdentification>>>;
  status?: Maybe<Array<Maybe<Status>>>;
  stopped?: Maybe<Array<Maybe<StopReason>>>;
  started?: Maybe<Array<Maybe<Start>>>;
  completed?: Maybe<Array<Maybe<Completed>>>;
  conductedBy?: Maybe<Array<Maybe<Investigator>>>;
  description?: Maybe<Array<Maybe<Description>>>;
  studyDesign?: Maybe<Array<Maybe<Design>>>;
  observationPeriod?: Maybe<Array<Maybe<ObservationPeriod>>>;
  primaryOutcome?: Maybe<Array<Maybe<Outcome>>>;
  secondaryOutcome?: Maybe<Array<Maybe<Outcome>>>;
  otherOutcome?: Maybe<Array<Maybe<Outcome>>>;
  studyPopulation?: Maybe<Array<Maybe<StudyPopulation>>>;
  inclusionCriteria?: Maybe<Array<Maybe<InclusionCriteria>>>;
  exclusionCriteria?: Maybe<Array<Maybe<ExclusionCriteria>>>;
  contactPerson?: Maybe<Array<Maybe<Contact>>>;
  retainedBioSamples?: Maybe<Array<Maybe<BioSpecimen>>>;
  studyArms?: Maybe<Array<Maybe<Arm>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type ClinicalTrialRefersToArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_CitationOrdering>>>;
  filter?: Maybe<_CitationFilter>;
};

export type ClinicalTrialRefersToUrlArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_LinkOrdering>>>;
  filter?: Maybe<_LinkFilter>;
};

export type ClinicalTrialUseReferenceAsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ReferenceTypeOrdering>>>;
  filter?: Maybe<_ReferenceTypeFilter>;
};

export type ClinicalTrialConductedAtArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_FacilityOrdering>>>;
  filter?: Maybe<_FacilityFilter>;
};

export type ClinicalTrialInvestigatesArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_InterventionOrdering>>>;
  filter?: Maybe<_InterventionFilter>;
};

export type ClinicalTrialTypeArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_StudyTypeOrdering>>>;
  filter?: Maybe<_StudyTypeFilter>;
};

export type ClinicalTrialIsSponsoredByArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_SponsorOrdering>>>;
  filter?: Maybe<_SponsorFilter>;
};

export type ClinicalTrialIsSupportedByArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_CollaboratorOrdering>>>;
  filter?: Maybe<_CollaboratorFilter>;
};

export type ClinicalTrialIsFdaRegulatedDeviceArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ResponseOrdering>>>;
  filter?: Maybe<_ResponseFilter>;
};

export type ClinicalTrialIsUnapprovedDeviceArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ResponseOrdering>>>;
  filter?: Maybe<_ResponseFilter>;
};

export type ClinicalTrialIsFdaRegulatedDrugArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ResponseOrdering>>>;
  filter?: Maybe<_ResponseFilter>;
};

export type ClinicalTrialExpandedAccessArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ResponseOrdering>>>;
  filter?: Maybe<_ResponseFilter>;
};

export type ClinicalTrialIsStudyingArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ConditionOrdering>>>;
  filter?: Maybe<_ConditionFilter>;
};

export type ClinicalTrialIsPhaseArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PhaseOrdering>>>;
  filter?: Maybe<_PhaseFilter>;
};

export type ClinicalTrialPurposeArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PurposeOrdering>>>;
  filter?: Maybe<_PurposeFilter>;
};

export type ClinicalTrialIdentificationsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_StudyIdentificationOrdering>>>;
  filter?: Maybe<_StudyIdentificationFilter>;
};

export type ClinicalTrialStatusArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_StatusOrdering>>>;
  filter?: Maybe<_StatusFilter>;
};

export type ClinicalTrialStoppedArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_StopReasonOrdering>>>;
  filter?: Maybe<_StopReasonFilter>;
};

export type ClinicalTrialStartedArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_StartOrdering>>>;
  filter?: Maybe<_StartFilter>;
};

export type ClinicalTrialCompletedArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_CompletedOrdering>>>;
  filter?: Maybe<_CompletedFilter>;
};

export type ClinicalTrialConductedByArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_InvestigatorOrdering>>>;
  filter?: Maybe<_InvestigatorFilter>;
};

export type ClinicalTrialDescriptionArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_DescriptionOrdering>>>;
  filter?: Maybe<_DescriptionFilter>;
};

export type ClinicalTrialStudyDesignArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_DesignOrdering>>>;
  filter?: Maybe<_DesignFilter>;
};

export type ClinicalTrialObservationPeriodArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ObservationPeriodOrdering>>>;
  filter?: Maybe<_ObservationPeriodFilter>;
};

export type ClinicalTrialPrimaryOutcomeArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_OutcomeOrdering>>>;
  filter?: Maybe<_OutcomeFilter>;
};

export type ClinicalTrialSecondaryOutcomeArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_OutcomeOrdering>>>;
  filter?: Maybe<_OutcomeFilter>;
};

export type ClinicalTrialOtherOutcomeArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_OutcomeOrdering>>>;
  filter?: Maybe<_OutcomeFilter>;
};

export type ClinicalTrialStudyPopulationArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_StudyPopulationOrdering>>>;
  filter?: Maybe<_StudyPopulationFilter>;
};

export type ClinicalTrialInclusionCriteriaArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_InclusionCriteriaOrdering>>>;
  filter?: Maybe<_InclusionCriteriaFilter>;
};

export type ClinicalTrialExclusionCriteriaArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ExclusionCriteriaOrdering>>>;
  filter?: Maybe<_ExclusionCriteriaFilter>;
};

export type ClinicalTrialContactPersonArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ContactOrdering>>>;
  filter?: Maybe<_ContactFilter>;
};

export type ClinicalTrialRetainedBioSamplesArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_BioSpecimenOrdering>>>;
  filter?: Maybe<_BioSpecimenFilter>;
};

export type ClinicalTrialStudyArmsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ArmOrdering>>>;
  filter?: Maybe<_ArmFilter>;
};

export enum _LinkOrdering {
  UrlAsc = "url_asc",
  UrlDesc = "url_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Link = {
  __typename?: "Link";
  url: Scalars["String"];
  trials?: Maybe<Array<Maybe<ClinicalTrial>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type LinkTrialsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export enum _FacilityOrdering {
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Facility = {
  __typename?: "Facility";
  name: Scalars["String"];
  trials?: Maybe<Array<Maybe<ClinicalTrial>>>;
  city?: Maybe<City>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type FacilityTrialsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export type FacilityCityArgs = {
  filter?: Maybe<_CityFilter>;
};

export type City = {
  __typename?: "City";
  name: Scalars["String"];
  country?: Maybe<Array<Maybe<Country>>>;
  facilities?: Maybe<Array<Maybe<Facility>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type CityCountryArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_CountryOrdering>>>;
  filter?: Maybe<_CountryFilter>;
};

export type CityFacilitiesArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_FacilityOrdering>>>;
  filter?: Maybe<_FacilityFilter>;
};

export enum _CountryOrdering {
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  UnIdAsc = "un_id_asc",
  UnIdDesc = "un_id_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Country = {
  __typename?: "Country";
  name: Scalars["String"];
  un_id?: Maybe<Scalars["ID"]>;
  cities?: Maybe<Array<Maybe<City>>>;
  provinces?: Maybe<Array<Maybe<_CountryProvinces>>>;
  total?: Maybe<Array<Maybe<_CountryTotal>>>;
  male?: Maybe<Array<Maybe<_CountryMale>>>;
  female?: Maybe<Array<Maybe<_CountryFemale>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type CountryCitiesArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_CityOrdering>>>;
  filter?: Maybe<_CityFilter>;
};

export type CountryProvincesArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PartOfOrdering>>>;
  filter?: Maybe<_CountryPartOfFilter>;
};

export type CountryTotalArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_CurrentTotalOrdering>>>;
  filter?: Maybe<_CountryCurrentTotalFilter>;
};

export type CountryMaleArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_CurrentMaleOrdering>>>;
  filter?: Maybe<_CountryCurrentMaleFilter>;
};

export type CountryFemaleArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_CurrentFemaleOrdering>>>;
  filter?: Maybe<_CountryCurrentFemaleFilter>;
};

export enum _CityOrdering {
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export enum _PartOfOrdering {
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _CountryProvinces = {
  __typename?: "_CountryProvinces";
  source: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Province node this PART_OF [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  province?: Maybe<Province>;
};

export type Province = {
  __typename?: "Province";
  name: Scalars["String"];
  latitude?: Maybe<Scalars["String"]>;
  longitude?: Maybe<Scalars["String"]>;
  country?: Maybe<Array<Maybe<Country>>>;
  reports?: Maybe<Array<Maybe<_ProvinceReports>>>;
  latestReports?: Maybe<Array<Maybe<_ProvinceLatestReports>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type ProvinceCountryArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_CountryOrdering>>>;
  filter?: Maybe<_CountryFilter>;
};

export type ProvinceReportsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_DailyReportedOrdering>>>;
  filter?: Maybe<_ProvinceDailyReportedFilter>;
};

export type ProvinceLatestReportsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_LatestReportedOrdering>>>;
  filter?: Maybe<_ProvinceLatestReportedFilter>;
};

export enum _DailyReportedOrdering {
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _ProvinceReports = {
  __typename?: "_ProvinceReports";
  source: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the DailyReport node this REPORTED [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  report?: Maybe<DailyReport>;
};

export type DailyReport = {
  __typename?: "DailyReport";
  uuid: Scalars["ID"];
  date: _Neo4jLocalDateTime;
  confirmed: Scalars["Int"];
  death: Scalars["String"];
  recovered: Scalars["String"];
  province?: Maybe<_DailyReportProvince>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type DailyReportProvinceArgs = {
  filter?: Maybe<_DailyReportDailyReportedFilter>;
};

/** Generated LocalDateTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jLocalDateTime = {
  __typename?: "_Neo4jLocalDateTime";
  year?: Maybe<Scalars["Int"]>;
  month?: Maybe<Scalars["Int"]>;
  day?: Maybe<Scalars["Int"]>;
  hour?: Maybe<Scalars["Int"]>;
  minute?: Maybe<Scalars["Int"]>;
  second?: Maybe<Scalars["Int"]>;
  millisecond?: Maybe<Scalars["Int"]>;
  microsecond?: Maybe<Scalars["Int"]>;
  nanosecond?: Maybe<Scalars["Int"]>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) LocalDateTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted?: Maybe<Scalars["String"]>;
};

export type _DailyReportProvince = {
  __typename?: "_DailyReportProvince";
  source: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Province node this REPORTED [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  province?: Maybe<Province>;
};

export enum _LatestReportedOrdering {
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _ProvinceLatestReports = {
  __typename?: "_ProvinceLatestReports";
  source: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Latest node this REPORTED [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  report?: Maybe<Latest>;
};

export type Latest = {
  __typename?: "Latest";
  uuid: Scalars["ID"];
  date: _Neo4jLocalDateTime;
  confirmed: Scalars["Int"];
  death: Scalars["String"];
  recovered: Scalars["String"];
  province?: Maybe<_LatestProvince>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type LatestProvinceArgs = {
  filter?: Maybe<_LatestLatestReportedFilter>;
};

export type _LatestProvince = {
  __typename?: "_LatestProvince";
  source: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Province node this REPORTED [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  province?: Maybe<Province>;
};

export enum _CurrentTotalOrdering {
  CountAsc = "count_asc",
  CountDesc = "count_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _CountryTotal = {
  __typename?: "_CountryTotal";
  count: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the AgeGroup node this CURRENT_TOTAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  ageGroup?: Maybe<AgeGroup>;
};

export type AgeGroup = {
  __typename?: "AgeGroup";
  group: Scalars["String"];
  span: Scalars["String"];
  start: Scalars["Int"];
  total?: Maybe<Array<Maybe<_AgeGroupTotal>>>;
  male?: Maybe<Array<Maybe<_AgeGroupMale>>>;
  female?: Maybe<Array<Maybe<_AgeGroupFemale>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type AgeGroupTotalArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_CurrentTotalOrdering>>>;
  filter?: Maybe<_AgeGroupCurrentTotalFilter>;
};

export type AgeGroupMaleArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_CurrentMaleOrdering>>>;
  filter?: Maybe<_AgeGroupCurrentMaleFilter>;
};

export type AgeGroupFemaleArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_CurrentFemaleOrdering>>>;
  filter?: Maybe<_AgeGroupCurrentFemaleFilter>;
};

export type _AgeGroupTotal = {
  __typename?: "_AgeGroupTotal";
  count: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Country node this CURRENT_TOTAL [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  country?: Maybe<Country>;
};

export enum _CurrentMaleOrdering {
  CountAsc = "count_asc",
  CountDesc = "count_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _AgeGroupMale = {
  __typename?: "_AgeGroupMale";
  count: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Country node this CURRENT_MALE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  country?: Maybe<Country>;
};

export enum _CurrentFemaleOrdering {
  CountAsc = "count_asc",
  CountDesc = "count_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _AgeGroupFemale = {
  __typename?: "_AgeGroupFemale";
  count: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Country node this CURRENT_FEMALE [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  country?: Maybe<Country>;
};

export type _CountryMale = {
  __typename?: "_CountryMale";
  count: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the AgeGroup node this CURRENT_MALE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  ageGroup?: Maybe<AgeGroup>;
};

export type _CountryFemale = {
  __typename?: "_CountryFemale";
  count: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the AgeGroup node this CURRENT_FEMALE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  ageGroup?: Maybe<AgeGroup>;
};

export enum _InterventionOrdering {
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  DescriptionAsc = "description_asc",
  DescriptionDesc = "description_desc",
  TypeAsc = "type_asc",
  TypeDesc = "type_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Intervention = {
  __typename?: "Intervention";
  name: Scalars["String"];
  description: Scalars["String"];
  type: Scalars["String"];
  trials?: Maybe<Array<Maybe<ClinicalTrial>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type InterventionTrialsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export enum _StudyTypeOrdering {
  TypeAsc = "type_asc",
  TypeDesc = "type_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type StudyType = {
  __typename?: "StudyType";
  type: Scalars["String"];
  trials?: Maybe<Array<Maybe<ClinicalTrial>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type StudyTypeTrialsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export enum _SponsorOrdering {
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Sponsor = {
  __typename?: "Sponsor";
  name: Scalars["String"];
  trials?: Maybe<Array<Maybe<ClinicalTrial>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type SponsorTrialsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export enum _CollaboratorOrdering {
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Collaborator = {
  __typename?: "Collaborator";
  name: Scalars["String"];
  trials?: Maybe<Array<Maybe<ClinicalTrial>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type CollaboratorTrialsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export enum _ResponseOrdering {
  YnAsc = "YN_asc",
  YnDesc = "YN_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Response = {
  __typename?: "Response";
  YN: Scalars["String"];
  isFdaRegulatedDevice?: Maybe<Array<Maybe<ClinicalTrial>>>;
  isUnapprovedDevice?: Maybe<Array<Maybe<ClinicalTrial>>>;
  isFdaRegulatedDrug?: Maybe<Array<Maybe<ClinicalTrial>>>;
  expandedAccess?: Maybe<Array<Maybe<ClinicalTrial>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type ResponseIsFdaRegulatedDeviceArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export type ResponseIsUnapprovedDeviceArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export type ResponseIsFdaRegulatedDrugArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export type ResponseExpandedAccessArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export enum _ConditionOrdering {
  DiseaseAsc = "disease_asc",
  DiseaseDesc = "disease_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Condition = {
  __typename?: "Condition";
  disease: Scalars["String"];
  keywords?: Maybe<Array<Maybe<Keyword>>>;
  trials?: Maybe<Array<Maybe<ClinicalTrial>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type ConditionKeywordsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_KeywordOrdering>>>;
  filter?: Maybe<_KeywordFilter>;
};

export type ConditionTrialsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export enum _KeywordOrdering {
  WordAsc = "word_asc",
  WordDesc = "word_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Keyword = {
  __typename?: "Keyword";
  word: Scalars["String"];
  conditions?: Maybe<Array<Maybe<Condition>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type KeywordConditionsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ConditionOrdering>>>;
  filter?: Maybe<_ConditionFilter>;
};

export enum _PhaseOrdering {
  PhaseAsc = "phase_asc",
  PhaseDesc = "phase_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Phase = {
  __typename?: "Phase";
  phase: Scalars["String"];
  trials?: Maybe<Array<Maybe<ClinicalTrial>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type PhaseTrialsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export enum _PurposeOrdering {
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Purpose = {
  __typename?: "Purpose";
  name: Scalars["String"];
  trials?: Maybe<Array<Maybe<ClinicalTrial>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type PurposeTrialsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export enum _StudyIdentificationOrdering {
  StudyIdAsc = "studyId_asc",
  StudyIdDesc = "studyId_desc",
  AcronymAsc = "acronym_asc",
  AcronymDesc = "acronym_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type StudyIdentification = {
  __typename?: "StudyIdentification";
  studyId: Scalars["String"];
  acronym: Scalars["String"];
  trials?: Maybe<Array<Maybe<ClinicalTrial>>>;
  title?: Maybe<Array<Maybe<Title>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type StudyIdentificationTrialsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export type StudyIdentificationTitleArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_TitleOrdering>>>;
  filter?: Maybe<_TitleFilter>;
};

export enum _TitleOrdering {
  BriefTitleAsc = "briefTitle_asc",
  BriefTitleDesc = "briefTitle_desc",
  OfficialTitleAsc = "officialTitle_asc",
  OfficialTitleDesc = "officialTitle_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Title = {
  __typename?: "Title";
  briefTitle: Scalars["String"];
  officialTitle: Scalars["String"];
  identifications?: Maybe<Array<Maybe<StudyIdentification>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type TitleIdentificationsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_StudyIdentificationOrdering>>>;
  filter?: Maybe<_StudyIdentificationFilter>;
};

export enum _StatusOrdering {
  StatusAsc = "status_asc",
  StatusDesc = "status_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Status = {
  __typename?: "Status";
  status: Scalars["String"];
  stopReason?: Maybe<Array<Maybe<StopReason>>>;
  trials?: Maybe<Array<Maybe<ClinicalTrial>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type StatusStopReasonArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_StopReasonOrdering>>>;
  filter?: Maybe<_StopReasonFilter>;
};

export type StatusTrialsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export enum _StopReasonOrdering {
  ReasonAsc = "reason_asc",
  ReasonDesc = "reason_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type StopReason = {
  __typename?: "StopReason";
  reason: Scalars["String"];
  trials?: Maybe<Array<Maybe<ClinicalTrial>>>;
  status?: Maybe<Array<Maybe<Status>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type StopReasonTrialsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export type StopReasonStatusArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_StatusOrdering>>>;
  filter?: Maybe<_StatusFilter>;
};

export enum _StartOrdering {
  DateAsc = "date_asc",
  DateDesc = "date_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Start = {
  __typename?: "Start";
  date: Scalars["String"];
  trials?: Maybe<Array<Maybe<ClinicalTrial>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type StartTrialsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export enum _CompletedOrdering {
  CompletionDateAsc = "completionDate_asc",
  CompletionDateDesc = "completionDate_desc",
  PrimaryCompletionDateAsc = "primaryCompletionDate_asc",
  PrimaryCompletionDateDesc = "primaryCompletionDate_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Completed = {
  __typename?: "Completed";
  completionDate: Scalars["String"];
  primaryCompletionDate: Scalars["String"];
  trials?: Maybe<Array<Maybe<ClinicalTrial>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type CompletedTrialsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export enum _InvestigatorOrdering {
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  AffiliationAsc = "affiliation_asc",
  AffiliationDesc = "affiliation_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Investigator = {
  __typename?: "Investigator";
  name: Scalars["String"];
  affiliation: Scalars["String"];
  trials?: Maybe<Array<Maybe<ClinicalTrial>>>;
  responsibilities?: Maybe<Array<Maybe<Responsible>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type InvestigatorTrialsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export type InvestigatorResponsibilitiesArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ResponsibleOrdering>>>;
  filter?: Maybe<_ResponsibleFilter>;
};

export enum _ResponsibleOrdering {
  TypeAsc = "type_asc",
  TypeDesc = "type_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Responsible = {
  __typename?: "Responsible";
  type: Scalars["String"];
  investigator?: Maybe<Array<Maybe<Investigator>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type ResponsibleInvestigatorArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_InvestigatorOrdering>>>;
  filter?: Maybe<_InvestigatorFilter>;
};

export enum _DescriptionOrdering {
  DetailedAsc = "detailed_asc",
  DetailedDesc = "detailed_desc",
  SummaryAsc = "summary_asc",
  SummaryDesc = "summary_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Description = {
  __typename?: "Description";
  detailed: Scalars["String"];
  summary: Scalars["String"];
  trials?: Maybe<Array<Maybe<ClinicalTrial>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type DescriptionTrialsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export enum _DesignOrdering {
  ModelAsc = "model_asc",
  ModelDesc = "model_desc",
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  DescriptionAsc = "description_asc",
  DescriptionDesc = "description_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Design = {
  __typename?: "Design";
  model?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  trials?: Maybe<Array<Maybe<ClinicalTrial>>>;
  arms?: Maybe<Array<Maybe<Arm>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type DesignTrialsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export type DesignArmsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ArmOrdering>>>;
  filter?: Maybe<_ArmFilter>;
};

export enum _ArmOrdering {
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  DescriptionAsc = "description_asc",
  DescriptionDesc = "description_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Arm = {
  __typename?: "Arm";
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  model?: Maybe<Array<Maybe<Design>>>;
  trials?: Maybe<Array<Maybe<ClinicalTrial>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type ArmModelArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_DesignOrdering>>>;
  filter?: Maybe<_DesignFilter>;
};

export type ArmTrialsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export enum _ObservationPeriodOrdering {
  TimeAsc = "time_asc",
  TimeDesc = "time_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type ObservationPeriod = {
  __typename?: "ObservationPeriod";
  time: Scalars["String"];
  trials?: Maybe<Array<Maybe<ClinicalTrial>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type ObservationPeriodTrialsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export enum _OutcomeOrdering {
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  DescriptionAsc = "description_asc",
  DescriptionDesc = "description_desc",
  TimeAsc = "time_asc",
  TimeDesc = "time_desc",
  TypeAsc = "type_asc",
  TypeDesc = "type_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Outcome = {
  __typename?: "Outcome";
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  time: Scalars["String"];
  type: Scalars["String"];
  primaryOutcomes?: Maybe<Array<Maybe<ClinicalTrial>>>;
  secondaryOutcomes?: Maybe<Array<Maybe<ClinicalTrial>>>;
  otherOutcomes?: Maybe<Array<Maybe<ClinicalTrial>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type OutcomePrimaryOutcomesArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export type OutcomeSecondaryOutcomesArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export type OutcomeOtherOutcomesArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export enum _StudyPopulationOrdering {
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  SamplingAsc = "sampling_asc",
  SamplingDesc = "sampling_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type StudyPopulation = {
  __typename?: "StudyPopulation";
  name: Scalars["String"];
  sampling: Scalars["String"];
  genders?: Maybe<Array<Maybe<Gender>>>;
  ageRanges?: Maybe<Array<Maybe<AgeRange>>>;
  trials?: Maybe<Array<Maybe<ClinicalTrial>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type StudyPopulationGendersArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_GenderOrdering>>>;
  filter?: Maybe<_GenderFilter>;
};

export type StudyPopulationAgeRangesArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_AgeRangeOrdering>>>;
  filter?: Maybe<_AgeRangeFilter>;
};

export type StudyPopulationTrialsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export enum _GenderOrdering {
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  DescriptionAsc = "description_asc",
  DescriptionDesc = "description_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Gender = {
  __typename?: "Gender";
  name: Scalars["String"];
  description: Scalars["String"];
  populations?: Maybe<Array<Maybe<StudyPopulation>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type GenderPopulationsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_StudyPopulationOrdering>>>;
  filter?: Maybe<_StudyPopulationFilter>;
};

export enum _AgeRangeOrdering {
  MaxAgeAsc = "maxAge_asc",
  MaxAgeDesc = "maxAge_desc",
  MinAgeAsc = "minAge_asc",
  MinAgeDesc = "minAge_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type AgeRange = {
  __typename?: "AgeRange";
  maxAge: Scalars["String"];
  minAge: Scalars["String"];
  populations?: Maybe<Array<Maybe<StudyPopulation>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type AgeRangePopulationsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_StudyPopulationOrdering>>>;
  filter?: Maybe<_StudyPopulationFilter>;
};

export enum _InclusionCriteriaOrdering {
  CriteriaAsc = "criteria_asc",
  CriteriaDesc = "criteria_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type InclusionCriteria = {
  __typename?: "InclusionCriteria";
  criteria: Scalars["String"];
  trials?: Maybe<Array<Maybe<ClinicalTrial>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type InclusionCriteriaTrialsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export enum _ExclusionCriteriaOrdering {
  CriteriaAsc = "criteria_asc",
  CriteriaDesc = "criteria_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type ExclusionCriteria = {
  __typename?: "ExclusionCriteria";
  criteria: Scalars["String"];
  trials?: Maybe<Array<Maybe<ClinicalTrial>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type ExclusionCriteriaTrialsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export enum _ContactOrdering {
  EmailAsc = "email_asc",
  EmailDesc = "email_desc",
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Contact = {
  __typename?: "Contact";
  email: Scalars["String"];
  name: Scalars["String"];
  trials?: Maybe<Array<Maybe<ClinicalTrial>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type ContactTrialsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export enum _BioSpecimenOrdering {
  RetensionAsc = "retension_asc",
  RetensionDesc = "retension_desc",
  DescriptionAsc = "description_asc",
  DescriptionDesc = "description_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type BioSpecimen = {
  __typename?: "BioSpecimen";
  retension: Scalars["String"];
  description: Scalars["String"];
  trials?: Maybe<Array<Maybe<ClinicalTrial>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type BioSpecimenTrialsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
};

export enum _AbstractMentionsOrdering {
  CountAsc = "count_asc",
  CountDesc = "count_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _AbstractMentions = {
  __typename?: "_AbstractMentions";
  count: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the NamedEntity node this MENTIONS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  namedEntity?: Maybe<NamedEntity>;
};

export type NamedEntity = {
  __typename?: "NamedEntity";
  id: Scalars["ID"];
  external_ids?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  type: Scalars["String"];
  value: Scalars["String"];
  mentionedInAbstracts?: Maybe<Array<Maybe<_NamedEntityMentionedInAbstracts>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type NamedEntityMentionedInAbstractsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_AbstractMentionsOrdering>>>;
  filter?: Maybe<_NamedEntityAbstractMentionsFilter>;
};

export type _NamedEntityMentionedInAbstracts = {
  __typename?: "_NamedEntityMentionedInAbstracts";
  count: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Abstract node this MENTIONS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  abstract?: Maybe<Abstract>;
};

export enum _HasPaperIdOrdering {
  PositionAsc = "position_asc",
  PositionDesc = "position_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _PaperPaperId = {
  __typename?: "_PaperPaperId";
  position: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the PaperID node this PAPER_HAS_PAPERID [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  id?: Maybe<PaperId>;
};

export enum _HasBodyTextOrdering {
  PositionAsc = "position_asc",
  PositionDesc = "position_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _BodyTextCollectionBodyTexts = {
  __typename?: "_BodyTextCollectionBodyTexts";
  position: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the BodyText node this BODYTEXTCOLLECTION_HAS_BODYTEXT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  bodyText?: Maybe<BodyText>;
};

export enum _FromBodyTextOrdering {
  TextAsc = "text_asc",
  TextDesc = "text_desc",
  SequenceAsc = "sequence_asc",
  SequenceDesc = "sequence_desc",
  KindAsc = "kind_asc",
  KindDesc = "kind_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export enum _HasCitationOrdering {
  PositionAsc = "position_asc",
  PositionDesc = "position_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _BodyTextCitations = {
  __typename?: "_BodyTextCitations";
  position: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Citation node this BODYTEXT_HAS_CITATION [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  citation?: Maybe<Citation>;
};

export type _FromBodyTextMentionsGeneSymbols = {
  __typename?: "_FromBodyTextMentionsGeneSymbols";
  score: Scalars["Float"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the GeneSymbol node this MENTIONS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  geneSymbol?: Maybe<GeneSymbol>;
};

export type _GeneSymbolMentionedInAbstractFragments = {
  __typename?: "_GeneSymbolMentionedInAbstractFragments";
  score: Scalars["Float"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the FromAbstract node this MENTIONS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  fromAbstract?: Maybe<FromAbstract>;
};

export enum _PatentDescriptionMentionsGeneSymbolOrdering {
  ScoreAsc = "score_asc",
  ScoreDesc = "score_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _GeneSymbolMentionedInPatentDescriptions = {
  __typename?: "_GeneSymbolMentionedInPatentDescriptions";
  score: Scalars["Float"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the FromPatentDescription node this MENTIONS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  description?: Maybe<FromPatentDescription>;
};

export type FromPatentDescription = Fragment & {
  __typename?: "FromPatentDescription";
  text: Scalars["String"];
  kind: Scalars["String"];
  sequence: Scalars["Int"];
  patentDescriptions?: Maybe<Array<Maybe<PatentDescription>>>;
  next?: Maybe<FromPatentDescription>;
  geneSymbols?: Maybe<Array<Maybe<_FromPatentDescriptionGeneSymbols>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type FromPatentDescriptionPatentDescriptionsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentDescriptionOrdering>>>;
  filter?: Maybe<_PatentDescriptionFilter>;
};

export type FromPatentDescriptionNextArgs = {
  filter?: Maybe<_FromPatentDescriptionFilter>;
};

export type FromPatentDescriptionGeneSymbolsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentDescriptionMentionsGeneSymbolOrdering>>>;
  filter?: Maybe<_FromPatentDescriptionPatentDescriptionMentionsGeneSymbolFilter>;
};

export enum _PatentDescriptionOrdering {
  HashIdAsc = "_hash_id_asc",
  HashIdDesc = "_hash_id_desc",
  LangAsc = "lang_asc",
  LangDesc = "lang_desc",
  TextAsc = "text_asc",
  TextDesc = "text_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type PatentDescription = {
  __typename?: "PatentDescription";
  _hash_id: Scalars["ID"];
  lang: Scalars["String"];
  text: Scalars["String"];
  patents?: Maybe<Array<Maybe<Patent>>>;
  fragments?: Maybe<Array<Maybe<FromPatentDescription>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type PatentDescriptionPatentsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentOrdering>>>;
  filter?: Maybe<_PatentFilter>;
};

export type PatentDescriptionFragmentsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_FromPatentDescriptionOrdering>>>;
  filter?: Maybe<_FromPatentDescriptionFilter>;
};

export enum _PatentOrdering {
  FilingKeyAsc = "filing_key_asc",
  FilingKeyDesc = "filing_key_desc",
  FilingDateAsc = "filing_date_asc",
  FilingDateDesc = "filing_date_desc",
  JurisdictionAsc = "jurisdiction_asc",
  JurisdictionDesc = "jurisdiction_desc",
  LensIdAsc = "lens_id_asc",
  LensIdDesc = "lens_id_desc",
  LensUrlAsc = "lens_url_asc",
  LensUrlDesc = "lens_url_desc",
  PubDateAsc = "pub_date_asc",
  PubDateDesc = "pub_date_desc",
  PubKeyAsc = "pub_key_asc",
  PubKeyDesc = "pub_key_desc",
  TypeAsc = "type_asc",
  TypeDesc = "type_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type Patent = {
  __typename?: "Patent";
  filing_key: Scalars["ID"];
  filing_date?: Maybe<Scalars["String"]>;
  jurisdiction: Scalars["String"];
  lens_id: Scalars["ID"];
  lens_url: Scalars["String"];
  pub_date?: Maybe<Scalars["String"]>;
  pub_key: Scalars["ID"];
  type: Scalars["String"];
  lensId?: Maybe<Array<Maybe<LensId>>>;
  number?: Maybe<Array<Maybe<PatentNumber>>>;
  classifications?: Maybe<Array<Maybe<PatentClassificationCollection>>>;
  citations?: Maybe<Array<Maybe<PatentCitationCollection>>>;
  abstracts?: Maybe<Array<Maybe<_PatentAbstracts>>>;
  inventors?: Maybe<Array<Maybe<_PatentInventors>>>;
  applicants?: Maybe<Array<Maybe<_PatentApplicants>>>;
  titles?: Maybe<Array<Maybe<_PatentTitles>>>;
  descriptions?: Maybe<Array<Maybe<_PatentDescriptions>>>;
  claims?: Maybe<Array<Maybe<_PatentClaims>>>;
  owner?: Maybe<Array<Maybe<_PatentOwner>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type PatentLensIdArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_LensIdOrdering>>>;
  filter?: Maybe<_LensIdFilter>;
};

export type PatentNumberArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentNumberOrdering>>>;
  filter?: Maybe<_PatentNumberFilter>;
};

export type PatentClassificationsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentClassificationCollectionOrdering>>>;
  filter?: Maybe<_PatentClassificationCollectionFilter>;
};

export type PatentCitationsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentCitationCollectionOrdering>>>;
  filter?: Maybe<_PatentCitationCollectionFilter>;
};

export type PatentAbstractsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_HasPatentAbstractOrdering>>>;
  filter?: Maybe<_PatentHasPatentAbstractFilter>;
};

export type PatentInventorsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_InventorOrdering>>>;
  filter?: Maybe<_PatentInventorFilter>;
};

export type PatentApplicantsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_ApplicantOrdering>>>;
  filter?: Maybe<_PatentApplicantFilter>;
};

export type PatentTitlesArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_HasPatentTitleOrdering>>>;
  filter?: Maybe<_PatentHasPatentTitleFilter>;
};

export type PatentDescriptionsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_HasPatentDescriptionOrdering>>>;
  filter?: Maybe<_PatentHasPatentDescriptionFilter>;
};

export type PatentClaimsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_HasPatentClaimOrdering>>>;
  filter?: Maybe<_PatentHasPatentClaimFilter>;
};

export type PatentOwnerArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_OwnerOrdering>>>;
  filter?: Maybe<_PatentOwnerFilter>;
};

export enum _LensIdOrdering {
  IdAsc = "id_asc",
  IdDesc = "id_desc",
  // IdAsc = '_id_asc',
  // IdDesc = '_id_desc'
}

export type LensId = {
  __typename?: "LensID";
  id: Scalars["ID"];
  patents?: Maybe<Array<Maybe<Patent>>>;
  familys?: Maybe<Array<Maybe<PatentFamily>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type LensIdPatentsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentOrdering>>>;
  filter?: Maybe<_PatentFilter>;
};

export type LensIdFamilysArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentFamilyOrdering>>>;
  filter?: Maybe<_PatentFamilyFilter>;
};

export enum _PatentFamilyOrdering {
  FamilyIdAsc = "family_id_asc",
  FamilyIdDesc = "family_id_desc",
  SizeAsc = "size_asc",
  SizeDesc = "size_desc",
  TypeAsc = "type_asc",
  TypeDesc = "type_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type PatentFamily = {
  __typename?: "PatentFamily";
  family_id: Scalars["Int"];
  size: Scalars["Int"];
  type: Scalars["String"];
  lensId?: Maybe<Array<Maybe<_PatentFamilyLensId>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type PatentFamilyLensIdArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_HasLensIdOrdering>>>;
  filter?: Maybe<_PatentFamilyHasLensIdFilter>;
};

export enum _HasLensIdOrdering {
  PositionAsc = "position_asc",
  PositionDesc = "position_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _PatentFamilyLensId = {
  __typename?: "_PatentFamilyLensId";
  position: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the LensID node this PATENTFAMILY_HAS_LENSID [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  id?: Maybe<LensId>;
};

export enum _PatentNumberOrdering {
  PubKeyAsc = "pub_key_asc",
  PubKeyDesc = "pub_key_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type PatentNumber = {
  __typename?: "PatentNumber";
  pub_key: Scalars["ID"];
  patents?: Maybe<Array<Maybe<Patent>>>;
  citations?: Maybe<Array<Maybe<PatentLiteratureCitation>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type PatentNumberPatentsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentOrdering>>>;
  filter?: Maybe<_PatentFilter>;
};

export type PatentNumberCitationsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentLiteratureCitationOrdering>>>;
  filter?: Maybe<_PatentLiteratureCitationFilter>;
};

export enum _PatentLiteratureCitationOrdering {
  HashIdAsc = "_hash_id_asc",
  HashIdDesc = "_hash_id_desc",
  LensIdAsc = "lens_id_asc",
  LensIdDesc = "lens_id_desc",
  PubKeyAsc = "pub_key_asc",
  PubKeyDesc = "pub_key_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type PatentLiteratureCitation = {
  __typename?: "PatentLiteratureCitation";
  _hash_id: Scalars["ID"];
  lens_id?: Maybe<Scalars["ID"]>;
  pub_key: Scalars["ID"];
  citations?: Maybe<Array<Maybe<PatentCitationCollection>>>;
  number?: Maybe<Array<Maybe<PatentNumber>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type PatentLiteratureCitationCitationsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentCitationCollectionOrdering>>>;
  filter?: Maybe<_PatentCitationCollectionFilter>;
};

export type PatentLiteratureCitationNumberArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentNumberOrdering>>>;
  filter?: Maybe<_PatentNumberFilter>;
};

export enum _PatentCitationCollectionOrdering {
  IdAsc = "id_asc",
  IdDesc = "id_desc",
  // IdAsc = '_id_asc',
  // IdDesc = '_id_desc'
}

export type PatentCitationCollection = {
  __typename?: "PatentCitationCollection";
  id: Scalars["ID"];
  patents?: Maybe<Array<Maybe<Patent>>>;
  patentLiteratureCitations?: Maybe<
    Array<Maybe<_PatentCitationCollectionPatentLiteratureCitations>>
  >;
  nonPatentLiteratureCitations?: Maybe<
    Array<Maybe<_PatentCitationCollectionNonPatentLiteratureCitations>>
  >;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type PatentCitationCollectionPatentsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentOrdering>>>;
  filter?: Maybe<_PatentFilter>;
};

export type PatentCitationCollectionPatentLiteratureCitationsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_HasPatentLiteratureCitationOrdering>>>;
  filter?: Maybe<_PatentCitationCollectionHasPatentLiteratureCitationFilter>;
};

export type PatentCitationCollectionNonPatentLiteratureCitationsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_HasNonPatentLiteratureCitationOrdering>>>;
  filter?: Maybe<_PatentCitationCollectionHasNonPatentLiteratureCitationFilter>;
};

export enum _HasPatentLiteratureCitationOrdering {
  PositionAsc = "position_asc",
  PositionDesc = "position_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _PatentCitationCollectionPatentLiteratureCitations = {
  __typename?: "_PatentCitationCollectionPatentLiteratureCitations";
  position: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the PatentLiteratureCitation node this PATENTCITATIONCOLLECTION_HAS_PATENTLITERATURECITATION [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  citation?: Maybe<PatentLiteratureCitation>;
};

export enum _HasNonPatentLiteratureCitationOrdering {
  PositionAsc = "position_asc",
  PositionDesc = "position_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _PatentCitationCollectionNonPatentLiteratureCitations = {
  __typename?: "_PatentCitationCollectionNonPatentLiteratureCitations";
  position: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the NonPatentLiteratureCitation node this PATENTCITATIONCOLLECTION_HAS_NONPATENTLITERATURECITATION [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  citation?: Maybe<NonPatentLiteratureCitation>;
};

export type NonPatentLiteratureCitation = {
  __typename?: "NonPatentLiteratureCitation";
  _hash_id: Scalars["ID"];
  cit_text: Scalars["String"];
  patentCitationCollections?: Maybe<Array<Maybe<PatentCitationCollection>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type NonPatentLiteratureCitationPatentCitationCollectionsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentCitationCollectionOrdering>>>;
  filter?: Maybe<_PatentCitationCollectionFilter>;
};

export enum _PatentClassificationCollectionOrdering {
  IdAsc = "id_asc",
  IdDesc = "id_desc",
  // IdAsc = '_id_asc',
  // IdDesc = '_id_desc'
}

export type PatentClassificationCollection = {
  __typename?: "PatentClassificationCollection";
  id: Scalars["ID"];
  patents?: Maybe<Array<Maybe<Patent>>>;
  cooperativePatentClassification?: Maybe<
    Array<Maybe<_PatentClassificationCollectionCooperativePatentClassification>>
  >;
  internationalPatentClassification?: Maybe<
    Array<
      Maybe<_PatentClassificationCollectionInternationalPatentClassification>
    >
  >;
  usPatentClassification?: Maybe<
    Array<Maybe<_PatentClassificationCollectionUsPatentClassification>>
  >;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type PatentClassificationCollectionPatentsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentOrdering>>>;
  filter?: Maybe<_PatentFilter>;
};

export type PatentClassificationCollectionCooperativePatentClassificationArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_HasCooperativePatentClassificationOrdering>>>;
  filter?: Maybe<_PatentClassificationCollectionHasCooperativePatentClassificationFilter>;
};

export type PatentClassificationCollectionInternationalPatentClassificationArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_HasInternationalPatentClassificationOrdering>>>;
  filter?: Maybe<_PatentClassificationCollectionHasInternationalPatentClassificationFilter>;
};

export type PatentClassificationCollectionUsPatentClassificationArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_HasUsPatentClassificationOrdering>>>;
  filter?: Maybe<_PatentClassificationCollectionHasUsPatentClassificationFilter>;
};

export enum _HasCooperativePatentClassificationOrdering {
  PositionAsc = "position_asc",
  PositionDesc = "position_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _PatentClassificationCollectionCooperativePatentClassification = {
  __typename?: "_PatentClassificationCollectionCooperativePatentClassification";
  position: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the CooperativePatentClassification node this PATENTCLASSIFICATIONCOLLECTION_HAS_COOPERATIVEPATENTCLASSIFICATION [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  classification?: Maybe<CooperativePatentClassification>;
};

export type CooperativePatentClassification = {
  __typename?: "CooperativePatentClassification";
  classification_cpc: Scalars["String"];
  patentClassificationCollections?: Maybe<
    Array<Maybe<PatentClassificationCollection>>
  >;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type CooperativePatentClassificationPatentClassificationCollectionsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentClassificationCollectionOrdering>>>;
  filter?: Maybe<_PatentClassificationCollectionFilter>;
};

export enum _HasInternationalPatentClassificationOrdering {
  PositionAsc = "position_asc",
  PositionDesc = "position_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _PatentClassificationCollectionInternationalPatentClassification = {
  __typename?: "_PatentClassificationCollectionInternationalPatentClassification";
  position: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the InternationalPatentClassification node this PATENTCLASSIFICATIONCOLLECTION_HAS_INTERNATIONALPATENTCLASSIFICATION [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  classification?: Maybe<InternationalPatentClassification>;
};

export type InternationalPatentClassification = {
  __typename?: "InternationalPatentClassification";
  classification_ipc: Scalars["String"];
  patentClassificationCollections?: Maybe<
    Array<Maybe<PatentClassificationCollection>>
  >;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type InternationalPatentClassificationPatentClassificationCollectionsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentClassificationCollectionOrdering>>>;
  filter?: Maybe<_PatentClassificationCollectionFilter>;
};

export enum _HasUsPatentClassificationOrdering {
  PositionAsc = "position_asc",
  PositionDesc = "position_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _PatentClassificationCollectionUsPatentClassification = {
  __typename?: "_PatentClassificationCollectionUsPatentClassification";
  position: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the USPatentClassification node this PATENTCLASSIFICATIONCOLLECTION_HAS_USPATENTCLASSIFICATION [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  classification?: Maybe<UsPatentClassification>;
};

export type UsPatentClassification = {
  __typename?: "USPatentClassification";
  classification_us: Scalars["String"];
  patentClassificationCollections?: Maybe<
    Array<Maybe<PatentClassificationCollection>>
  >;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type UsPatentClassificationPatentClassificationCollectionsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentClassificationCollectionOrdering>>>;
  filter?: Maybe<_PatentClassificationCollectionFilter>;
};

export enum _HasPatentAbstractOrdering {
  PositionAsc = "position_asc",
  PositionDesc = "position_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _PatentAbstracts = {
  __typename?: "_PatentAbstracts";
  position: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the PatentAbstract node this PATENT_HAS_PATENTABSTRACT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  abstract?: Maybe<PatentAbstract>;
};

export type PatentAbstract = {
  __typename?: "PatentAbstract";
  _hash_id: Scalars["ID"];
  lang: Scalars["String"];
  text: Scalars["String"];
  patents?: Maybe<Array<Maybe<Patent>>>;
  fragments?: Maybe<Array<Maybe<FromPatentAbstract>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type PatentAbstractPatentsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentOrdering>>>;
  filter?: Maybe<_PatentFilter>;
};

export type PatentAbstractFragmentsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_FromPatentAbstractOrdering>>>;
  filter?: Maybe<_FromPatentAbstractFilter>;
};

export enum _FromPatentAbstractOrdering {
  TextAsc = "text_asc",
  TextDesc = "text_desc",
  SequenceAsc = "sequence_asc",
  SequenceDesc = "sequence_desc",
  KindAsc = "kind_asc",
  KindDesc = "kind_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type FromPatentAbstract = Fragment & {
  __typename?: "FromPatentAbstract";
  text: Scalars["String"];
  sequence: Scalars["Int"];
  kind: Scalars["String"];
  patentAbstracts?: Maybe<Array<Maybe<PatentAbstract>>>;
  next?: Maybe<FromPatentAbstract>;
  geneSymbols?: Maybe<Array<Maybe<_FromPatentAbstractGeneSymbols>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type FromPatentAbstractPatentAbstractsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentAbstractOrdering>>>;
  filter?: Maybe<_PatentAbstractFilter>;
};

export type FromPatentAbstractNextArgs = {
  filter?: Maybe<_FromPatentAbstractFilter>;
};

export type FromPatentAbstractGeneSymbolsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentAbstractMentionsGeneSymbolOrdering>>>;
  filter?: Maybe<_FromPatentAbstractPatentAbstractMentionsGeneSymbolFilter>;
};

export enum _PatentAbstractOrdering {
  HashIdAsc = "_hash_id_asc",
  HashIdDesc = "_hash_id_desc",
  LangAsc = "lang_asc",
  LangDesc = "lang_desc",
  TextAsc = "text_asc",
  TextDesc = "text_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export enum _PatentAbstractMentionsGeneSymbolOrdering {
  ScoreAsc = "score_asc",
  ScoreDesc = "score_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _FromPatentAbstractGeneSymbols = {
  __typename?: "_FromPatentAbstractGeneSymbols";
  score: Scalars["Float"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the GeneSymbol node this MENTIONS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  symbol?: Maybe<GeneSymbol>;
};

export enum _InventorOrdering {
  PositionAsc = "position_asc",
  PositionDesc = "position_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _PatentInventors = {
  __typename?: "_PatentInventors";
  position: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Entity node this INVENTOR [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  entity?: Maybe<Entity>;
};

export type Entity = {
  __typename?: "Entity";
  name: Scalars["String"];
  patentsInventor?: Maybe<Array<Maybe<Patent>>>;
  patentsApplicant?: Maybe<Array<Maybe<Patent>>>;
  patentsOwner?: Maybe<Array<Maybe<Patent>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type EntityPatentsInventorArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentOrdering>>>;
  filter?: Maybe<_PatentFilter>;
};

export type EntityPatentsApplicantArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentOrdering>>>;
  filter?: Maybe<_PatentFilter>;
};

export type EntityPatentsOwnerArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentOrdering>>>;
  filter?: Maybe<_PatentFilter>;
};

export enum _ApplicantOrdering {
  PositionAsc = "position_asc",
  PositionDesc = "position_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _PatentApplicants = {
  __typename?: "_PatentApplicants";
  position: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Entity node this APPLICANT [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  entity?: Maybe<Entity>;
};

export enum _HasPatentTitleOrdering {
  PositionAsc = "position_asc",
  PositionDesc = "position_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _PatentTitles = {
  __typename?: "_PatentTitles";
  position: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the PatentTitle node this PATENT_HAS_PATENTTITLE [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  title?: Maybe<PatentTitle>;
};

export type PatentTitle = {
  __typename?: "PatentTitle";
  _hash_id: Scalars["ID"];
  lang: Scalars["String"];
  text: Scalars["String"];
  patents?: Maybe<Array<Maybe<Patent>>>;
  fragments?: Maybe<Array<Maybe<FromPatentTitle>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type PatentTitlePatentsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentOrdering>>>;
  filter?: Maybe<_PatentFilter>;
};

export type PatentTitleFragmentsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_FromPatentTitleOrdering>>>;
  filter?: Maybe<_FromPatentTitleFilter>;
};

export enum _FromPatentTitleOrdering {
  TextAsc = "text_asc",
  TextDesc = "text_desc",
  KindAsc = "kind_asc",
  KindDesc = "kind_desc",
  SequenceAsc = "sequence_asc",
  SequenceDesc = "sequence_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type FromPatentTitle = Fragment & {
  __typename?: "FromPatentTitle";
  text: Scalars["String"];
  kind: Scalars["String"];
  sequence: Scalars["Int"];
  patentTitles?: Maybe<Array<Maybe<PatentTitle>>>;
  next?: Maybe<FromPatentTitle>;
  geneSymbols?: Maybe<Array<Maybe<_FromPatentTitleGeneSymbols>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type FromPatentTitlePatentTitlesArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentTitleOrdering>>>;
  filter?: Maybe<_PatentTitleFilter>;
};

export type FromPatentTitleNextArgs = {
  filter?: Maybe<_FromPatentTitleFilter>;
};

export type FromPatentTitleGeneSymbolsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentTitleMentionsGeneSymbolOrdering>>>;
  filter?: Maybe<_FromPatentTitlePatentTitleMentionsGeneSymbolFilter>;
};

export enum _PatentTitleOrdering {
  HashIdAsc = "_hash_id_asc",
  HashIdDesc = "_hash_id_desc",
  LangAsc = "lang_asc",
  LangDesc = "lang_desc",
  TextAsc = "text_asc",
  TextDesc = "text_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export enum _PatentTitleMentionsGeneSymbolOrdering {
  ScoreAsc = "score_asc",
  ScoreDesc = "score_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _FromPatentTitleGeneSymbols = {
  __typename?: "_FromPatentTitleGeneSymbols";
  score: Scalars["Float"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the GeneSymbol node this MENTIONS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  symbol?: Maybe<GeneSymbol>;
};

export enum _HasPatentDescriptionOrdering {
  PositionAsc = "position_asc",
  PositionDesc = "position_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _PatentDescriptions = {
  __typename?: "_PatentDescriptions";
  position: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the PatentDescription node this PATENT_HAS_PATENTDESCRIPTION [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  description?: Maybe<PatentDescription>;
};

export enum _HasPatentClaimOrdering {
  PositionAsc = "position_asc",
  PositionDesc = "position_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _PatentClaims = {
  __typename?: "_PatentClaims";
  position: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the PatentClaim node this PATENT_HAS_PATENTCLAIM [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  claim?: Maybe<PatentClaim>;
};

export type PatentClaim = {
  __typename?: "PatentClaim";
  _hash_id: Scalars["ID"];
  lang: Scalars["String"];
  text: Scalars["String"];
  patents?: Maybe<Array<Maybe<Patent>>>;
  fragments?: Maybe<Array<Maybe<FromPatentClaim>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type PatentClaimPatentsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentOrdering>>>;
  filter?: Maybe<_PatentFilter>;
};

export type PatentClaimFragmentsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_FromPatentClaimOrdering>>>;
  filter?: Maybe<_FromPatentClaimFilter>;
};

export enum _FromPatentClaimOrdering {
  TextAsc = "text_asc",
  TextDesc = "text_desc",
  SequenceAsc = "sequence_asc",
  SequenceDesc = "sequence_desc",
  KindAsc = "kind_asc",
  KindDesc = "kind_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type FromPatentClaim = Fragment & {
  __typename?: "FromPatentClaim";
  text: Scalars["String"];
  sequence: Scalars["Int"];
  kind: Scalars["String"];
  patentClaims?: Maybe<Array<Maybe<PatentClaim>>>;
  next?: Maybe<FromPatentClaim>;
  geneSymbols?: Maybe<Array<Maybe<_FromPatentClaimGeneSymbols>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export type FromPatentClaimPatentClaimsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentClaimOrdering>>>;
  filter?: Maybe<_PatentClaimFilter>;
};

export type FromPatentClaimNextArgs = {
  filter?: Maybe<_FromPatentClaimFilter>;
};

export type FromPatentClaimGeneSymbolsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_PatentClaimMentionsGeneSymbolOrdering>>>;
  filter?: Maybe<_FromPatentClaimPatentClaimMentionsGeneSymbolFilter>;
};

export enum _PatentClaimOrdering {
  HashIdAsc = "_hash_id_asc",
  HashIdDesc = "_hash_id_desc",
  LangAsc = "lang_asc",
  LangDesc = "lang_desc",
  TextAsc = "text_asc",
  TextDesc = "text_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export enum _PatentClaimMentionsGeneSymbolOrdering {
  ScoreAsc = "score_asc",
  ScoreDesc = "score_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _FromPatentClaimGeneSymbols = {
  __typename?: "_FromPatentClaimGeneSymbols";
  score: Scalars["Float"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the GeneSymbol node this MENTIONS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  symbol?: Maybe<GeneSymbol>;
};

export enum _OwnerOrdering {
  PositionAsc = "position_asc",
  PositionDesc = "position_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _PatentOwner = {
  __typename?: "_PatentOwner";
  position: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Entity node this OWNER [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  entity?: Maybe<Entity>;
};

export enum _FromPatentDescriptionOrdering {
  TextAsc = "text_asc",
  TextDesc = "text_desc",
  KindAsc = "kind_asc",
  KindDesc = "kind_desc",
  SequenceAsc = "sequence_asc",
  SequenceDesc = "sequence_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _FromPatentDescriptionGeneSymbols = {
  __typename?: "_FromPatentDescriptionGeneSymbols";
  score: Scalars["Float"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the GeneSymbol node this MENTIONS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  symbol?: Maybe<GeneSymbol>;
};

export type _GeneSymbolMentionedInPatentTitles = {
  __typename?: "_GeneSymbolMentionedInPatentTitles";
  score: Scalars["Float"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the FromPatentTitle node this MENTIONS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  title?: Maybe<FromPatentTitle>;
};

export type _GeneSymbolMentionedInPatentAbstracts = {
  __typename?: "_GeneSymbolMentionedInPatentAbstracts";
  score: Scalars["Float"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the FromPatentAbstract node this MENTIONS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  abstract?: Maybe<FromPatentAbstract>;
};

export type _GeneSymbolMentionedInPatentClaims = {
  __typename?: "_GeneSymbolMentionedInPatentClaims";
  score: Scalars["Float"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the FromPatentClaim node this MENTIONS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  claim?: Maybe<FromPatentClaim>;
};

export enum _MapsGeneSymbolsWithOmitedSpecialCharOrdering {
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _GeneMapsGeneSymbolsWithOmitSpecialChar = {
  __typename?: "_GeneMapsGeneSymbolsWithOmitSpecialChar";
  source: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the OmitSpecialChar node this MAPS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  symbol?: Maybe<OmitSpecialChar>;
};

export enum _MapsGeneSymbolsWithOmitLengthOrdering {
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _GeneMapsGeneSymbolsWithOmitLength = {
  __typename?: "_GeneMapsGeneSymbolsWithOmitLength";
  source: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the OmitLength node this MAPS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  symbol?: Maybe<OmitLength>;
};

export enum _MapsGeneSymbolsWithOmitWordOrdering {
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _GeneMapsGeneSymbolsWithOmitWord = {
  __typename?: "_GeneMapsGeneSymbolsWithOmitWord";
  source: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the OmitWord node this MAPS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  symbol?: Maybe<OmitWord>;
};

export enum _AssociatesDaGOrdering {
  HighConfidenceAsc = "high_confidence_asc",
  HighConfidenceDesc = "high_confidence_desc",
  LocusAsc = "locus_asc",
  LocusDesc = "locus_desc",
  PrimaryAsc = "primary_asc",
  PrimaryDesc = "primary_desc",
  StatusAsc = "status_asc",
  StatusDesc = "status_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _GeneDiseases = {
  __typename?: "_GeneDiseases";
  high_confidence: Scalars["Int"];
  locus: Scalars["Int"];
  primary: Scalars["Int"];
  status: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Disease node this ASSOCIATES_DaG [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  disease?: Maybe<Disease>;
};

export type Disease = {
  __typename?: "Disease";
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
  definition?: Maybe<Scalars["String"]>;
  doid: Scalars["String"];
  license?: Maybe<Scalars["String"]>;
  link?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  isA?: Maybe<_DiseaseIsADirections>;
  associatatesDaG?: Maybe<Array<Maybe<_DiseaseAssociatatesDaG>>>;
  localizesDla?: Maybe<Array<Maybe<_DiseaseLocalizesDla>>>;
};

export type DiseaseAssociatatesDaGArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_AssociatesDaGOrdering>>>;
  filter?: Maybe<_DiseaseAssociatesDaGFilter>;
};

export type DiseaseLocalizesDlaArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_LocalizesDlaOrdering>>>;
  filter?: Maybe<_DiseaseLocalizesDlaFilter>;
};

export type _DiseaseIsADirections = {
  __typename?: "_DiseaseIsADirections";
  /** Field for the Disease node this IS_A [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  isDisease?: Maybe<Array<Maybe<_DiseaseIsA>>>;
  /** Field for the Disease node this IS_A [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  disease?: Maybe<Array<Maybe<_DiseaseIsA>>>;
};

export type _DiseaseIsADirectionsIsDiseaseArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_DiseaseIsAOrdering>>>;
  filter?: Maybe<_DiseaseIsAFilter>;
};

export type _DiseaseIsADirectionsDiseaseArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_DiseaseIsAOrdering>>>;
  filter?: Maybe<_DiseaseIsAFilter>;
};

export enum _DiseaseIsAOrdering {
  PositionAsc = "position_asc",
  PositionDesc = "position_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _DiseaseIsA = {
  __typename?: "_DiseaseIsA";
  position: Scalars["Int"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Disease node this IS_A [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  Disease?: Maybe<Disease>;
};

export type _DiseaseAssociatatesDaG = {
  __typename?: "_DiseaseAssociatatesDaG";
  high_confidence: Scalars["Int"];
  locus: Scalars["Int"];
  primary: Scalars["Int"];
  status: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Gene node this ASSOCIATES_DaG [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  gene?: Maybe<Gene>;
};

export enum _LocalizesDlaOrdering {
  CooccurrenceAsc = "cooccurrence_asc",
  CooccurrenceDesc = "cooccurrence_desc",
  ExpectedAsc = "expected_asc",
  ExpectedDesc = "expected_desc",
  PFisherAsc = "p_fisher_asc",
  PFisherDesc = "p_fisher_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _DiseaseLocalizesDla = {
  __typename?: "_DiseaseLocalizesDla";
  cooccurrence: Scalars["Int"];
  expected: Scalars["Float"];
  p_fisher: Scalars["Float"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Anatomy node this LOCALIZES_DlA [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  anatomy?: Maybe<Anatomy>;
};

export type Anatomy = {
  __typename?: "Anatomy";
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
  bto_id?: Maybe<Scalars["ID"]>;
  mesh_id: Scalars["ID"];
  mesh_name: Scalars["String"];
  name: Scalars["String"];
  uberon_id: Scalars["ID"];
  diseases?: Maybe<Array<Maybe<_AnatomyDiseases>>>;
};

export type AnatomyDiseasesArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_LocalizesDlaOrdering>>>;
  filter?: Maybe<_AnatomyLocalizesDlaFilter>;
};

export type _AnatomyDiseases = {
  __typename?: "_AnatomyDiseases";
  cooccurrence: Scalars["Int"];
  expected: Scalars["Float"];
  p_fisher: Scalars["Float"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Disease node this LOCALIZES_DlA [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  disease?: Maybe<Disease>;
};

export type _TranscriptProteins = {
  __typename?: "_TranscriptProteins";
  source: Scalars["String"];
  taxid?: Maybe<Scalars["String"]>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Protein node this CODES [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  protein?: Maybe<Protein>;
};

export type _TranscriptMapsTranscriptsDirections = {
  __typename?: "_TranscriptMapsTranscriptsDirections";
  /** Field for the Transcript node this MAPS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  mappedBy?: Maybe<Array<Maybe<_TranscriptMapsTranscripts>>>;
  /** Field for the Transcript node this MAPS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  transcript?: Maybe<Array<Maybe<_TranscriptMapsTranscripts>>>;
};

export type _TranscriptMapsTranscriptsDirectionsMappedByArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_MapsTranscriptOrdering>>>;
  filter?: Maybe<_MapsTranscriptFilter>;
};

export type _TranscriptMapsTranscriptsDirectionsTranscriptArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_MapsTranscriptOrdering>>>;
  filter?: Maybe<_MapsTranscriptFilter>;
};

export enum _MapsTranscriptOrdering {
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
  StatusAsc = "status_asc",
  StatusDesc = "status_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _TranscriptMapsTranscripts = {
  __typename?: "_TranscriptMapsTranscripts";
  source: Scalars["String"];
  status?: Maybe<Scalars["String"]>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Transcript node this MAPS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  Transcript?: Maybe<Transcript>;
};

export type _ProteinMapsProteinsDirections = {
  __typename?: "_ProteinMapsProteinsDirections";
  /** Field for the Protein node this MAPS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  mappedBy?: Maybe<Array<Maybe<_ProteinMapsProteins>>>;
  /** Field for the Protein node this MAPS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  protein?: Maybe<Array<Maybe<_ProteinMapsProteins>>>;
};

export type _ProteinMapsProteinsDirectionsMappedByArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_MapsProteinOrdering>>>;
  filter?: Maybe<_MapsProteinFilter>;
};

export type _ProteinMapsProteinsDirectionsProteinArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_MapsProteinOrdering>>>;
  filter?: Maybe<_MapsProteinFilter>;
};

export enum _MapsProteinOrdering {
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
  TaxidAsc = "taxid_asc",
  TaxidDesc = "taxid_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _ProteinMapsProteins = {
  __typename?: "_ProteinMapsProteins";
  source: Scalars["String"];
  taxid?: Maybe<Scalars["String"]>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Protein node this MAPS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  Protein?: Maybe<Protein>;
};

export type _GoTermIsDirections = {
  __typename?: "_GOTermIsDirections";
  /** Field for the GOTerm node this IS_A [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  subTerm?: Maybe<Array<Maybe<_GoTermIs>>>;
  /** Field for the GOTerm node this IS_A [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  term?: Maybe<Array<Maybe<_GoTermIs>>>;
};

export type _GoTermIsDirectionsSubTermArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_IsAOrdering>>>;
  filter?: Maybe<_IsAFilter>;
};

export type _GoTermIsDirectionsTermArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_IsAOrdering>>>;
  filter?: Maybe<_IsAFilter>;
};

export enum _IsAOrdering {
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _GoTermIs = {
  __typename?: "_GOTermIs";
  source: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the GOTerm node this IS_A [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  GOTerm?: Maybe<GoTerm>;
};

export enum _NamedEntityOrdering {
  IdAsc = "id_asc",
  IdDesc = "id_desc",
  TypeAsc = "type_asc",
  TypeDesc = "type_desc",
  ValueAsc = "value_asc",
  ValueDesc = "value_desc",
  // IdAsc = '_id_asc',
  // IdDesc = '_id_desc'
}

export enum _WordOrdering {
  ValueAsc = "value_asc",
  ValueDesc = "value_desc",
  Match10Asc = "match10_asc",
  Match10Desc = "match10_desc",
  Match11Asc = "match11_asc",
  Match11Desc = "match11_desc",
  Match12Asc = "match12_asc",
  Match12Desc = "match12_desc",
  Match3Asc = "match3_asc",
  Match3Desc = "match3_desc",
  Match4Asc = "match4_asc",
  Match4Desc = "match4_desc",
  Match5Asc = "match5_asc",
  Match5Desc = "match5_desc",
  Match6Asc = "match6_asc",
  Match6Desc = "match6_desc",
  Match7Asc = "match7_asc",
  Match7Desc = "match7_desc",
  Match8Asc = "match8_asc",
  Match8Desc = "match8_desc",
  Match9Asc = "match9_asc",
  Match9Desc = "match9_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _WordFilter = {
  AND?: Maybe<Array<_WordFilter>>;
  OR?: Maybe<Array<_WordFilter>>;
  value?: Maybe<Scalars["String"]>;
  value_not?: Maybe<Scalars["String"]>;
  value_in?: Maybe<Array<Scalars["String"]>>;
  value_not_in?: Maybe<Array<Scalars["String"]>>;
  value_contains?: Maybe<Scalars["String"]>;
  value_not_contains?: Maybe<Scalars["String"]>;
  value_starts_with?: Maybe<Scalars["String"]>;
  value_not_starts_with?: Maybe<Scalars["String"]>;
  value_ends_with?: Maybe<Scalars["String"]>;
  value_not_ends_with?: Maybe<Scalars["String"]>;
  match10?: Maybe<Scalars["Boolean"]>;
  match10_not?: Maybe<Scalars["Boolean"]>;
  match11?: Maybe<Scalars["Boolean"]>;
  match11_not?: Maybe<Scalars["Boolean"]>;
  match12?: Maybe<Scalars["Boolean"]>;
  match12_not?: Maybe<Scalars["Boolean"]>;
  match3?: Maybe<Scalars["Boolean"]>;
  match3_not?: Maybe<Scalars["Boolean"]>;
  match4?: Maybe<Scalars["Boolean"]>;
  match4_not?: Maybe<Scalars["Boolean"]>;
  match5?: Maybe<Scalars["Boolean"]>;
  match5_not?: Maybe<Scalars["Boolean"]>;
  match6?: Maybe<Scalars["Boolean"]>;
  match6_not?: Maybe<Scalars["Boolean"]>;
  match7?: Maybe<Scalars["Boolean"]>;
  match7_not?: Maybe<Scalars["Boolean"]>;
  match8?: Maybe<Scalars["Boolean"]>;
  match8_not?: Maybe<Scalars["Boolean"]>;
  match9?: Maybe<Scalars["Boolean"]>;
  match9_not?: Maybe<Scalars["Boolean"]>;
};

export type Word = {
  __typename?: "Word";
  value: Scalars["String"];
  match10?: Maybe<Scalars["Boolean"]>;
  match11?: Maybe<Scalars["Boolean"]>;
  match12?: Maybe<Scalars["Boolean"]>;
  match3: Scalars["Boolean"];
  match4?: Maybe<Scalars["Boolean"]>;
  match5?: Maybe<Scalars["Boolean"]>;
  match6?: Maybe<Scalars["Boolean"]>;
  match7?: Maybe<Scalars["Boolean"]>;
  match8?: Maybe<Scalars["Boolean"]>;
  match9?: Maybe<Scalars["Boolean"]>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
};

export enum _DiseaseOrdering {
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
  DefinitionAsc = "definition_asc",
  DefinitionDesc = "definition_desc",
  DoidAsc = "doid_asc",
  DoidDesc = "doid_desc",
  LicenseAsc = "license_asc",
  LicenseDesc = "license_desc",
  LinkAsc = "link_asc",
  LinkDesc = "link_desc",
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
}

export enum _AnatomyOrdering {
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
  BtoIdAsc = "bto_id_asc",
  BtoIdDesc = "bto_id_desc",
  MeshIdAsc = "mesh_id_asc",
  MeshIdDesc = "mesh_id_desc",
  MeshNameAsc = "mesh_name_asc",
  MeshNameDesc = "mesh_name_desc",
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  UberonIdAsc = "uberon_id_asc",
  UberonIdDesc = "uberon_id_desc",
}

export enum _GeneOrdering {
  SidAsc = "sid_asc",
  SidDesc = "sid_desc",
  FeatureTypeAsc = "Feature_type_asc",
  FeatureTypeDesc = "Feature_type_desc",
  FullNameFromNomenclatureAuthorityAsc = "Full_name_from_nomenclature_authority_asc",
  FullNameFromNomenclatureAuthorityDesc = "Full_name_from_nomenclature_authority_desc",
  GeneIdAsc = "GeneID_asc",
  GeneIdDesc = "GeneID_desc",
  LocusTagAsc = "LocusTag_asc",
  LocusTagDesc = "LocusTag_desc",
  ModificationDateAsc = "Modification_date_asc",
  ModificationDateDesc = "Modification_date_desc",
  NomenclatureStatusAsc = "Nomenclature_status_asc",
  NomenclatureStatusDesc = "Nomenclature_status_desc",
  OtherDesignationsAsc = "Other_designations_asc",
  OtherDesignationsDesc = "Other_designations_desc",
  SymbolAsc = "Symbol_asc",
  SymbolDesc = "Symbol_desc",
  SymbolFromNomenclatureAuthorityAsc = "Symbol_from_nomenclature_authority_asc",
  SymbolFromNomenclatureAuthorityDesc = "Symbol_from_nomenclature_authority_desc",
  SynonymsAsc = "Synonyms_asc",
  SynonymsDesc = "Synonyms_desc",
  ChromosomeAsc = "chromosome_asc",
  ChromosomeDesc = "chromosome_desc",
  DbXrefsAsc = "dbXrefs_asc",
  DbXrefsDesc = "dbXrefs_desc",
  DescriptionAsc = "description_asc",
  DescriptionDesc = "description_desc",
  MapLocationAsc = "map_location_asc",
  MapLocationDesc = "map_location_desc",
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
  TaxIdAsc = "tax_id_asc",
  TaxIdDesc = "tax_id_desc",
  TaxidAsc = "taxid_asc",
  TaxidDesc = "taxid_desc",
  TypeOfGeneAsc = "type_of_gene_asc",
  TypeOfGeneDesc = "type_of_gene_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export enum _TranscriptOrdering {
  SidAsc = "sid_asc",
  SidDesc = "sid_desc",
  LengthAsc = "length_asc",
  LengthDesc = "length_desc",
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
  StatusAsc = "status_asc",
  StatusDesc = "status_desc",
  TaxidAsc = "taxid_asc",
  TaxidDesc = "taxid_desc",
  VersionAsc = "version_asc",
  VersionDesc = "version_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export enum _PathwayOrdering {
  SidAsc = "sid_asc",
  SidDesc = "sid_desc",
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  OrgAsc = "org_asc",
  OrgDesc = "org_desc",
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
  TaxidAsc = "taxid_asc",
  TaxidDesc = "taxid_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export enum _GeneSymbolOrdering {
  SidAsc = "sid_asc",
  SidDesc = "sid_desc",
  StatusAsc = "status_asc",
  StatusDesc = "status_desc",
  TaxidAsc = "taxid_asc",
  TaxidDesc = "taxid_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export enum _OmitSpecialCharOrdering {
  SidAsc = "sid_asc",
  SidDesc = "sid_desc",
  StatusAsc = "status_asc",
  StatusDesc = "status_desc",
  TaxidAsc = "taxid_asc",
  TaxidDesc = "taxid_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export enum _OmitLengthOrdering {
  SidAsc = "sid_asc",
  SidDesc = "sid_desc",
  StatusAsc = "status_asc",
  StatusDesc = "status_desc",
  TaxidAsc = "taxid_asc",
  TaxidDesc = "taxid_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export enum _OmitWordOrdering {
  SidAsc = "sid_asc",
  SidDesc = "sid_desc",
  StatusAsc = "status_asc",
  StatusDesc = "status_desc",
  TaxidAsc = "taxid_asc",
  TaxidDesc = "taxid_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export enum _ProteinOrdering {
  SidAsc = "sid_asc",
  SidDesc = "sid_desc",
  CategoryAsc = "category_asc",
  CategoryDesc = "category_desc",
  DescAsc = "desc_asc",
  DescDesc = "desc_desc",
  LengthAsc = "length_asc",
  LengthDesc = "length_desc",
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
  StatusAsc = "status_asc",
  StatusDesc = "status_desc",
  TaxidAsc = "taxid_asc",
  TaxidDesc = "taxid_desc",
  VersionAsc = "version_asc",
  VersionDesc = "version_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export enum _ProvinceOrdering {
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  LatitudeAsc = "latitude_asc",
  LatitudeDesc = "latitude_desc",
  LongitudeAsc = "longitude_asc",
  LongitudeDesc = "longitude_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export enum _DailyReportOrdering {
  UuidAsc = "uuid_asc",
  UuidDesc = "uuid_desc",
  DateAsc = "date_asc",
  DateDesc = "date_desc",
  ConfirmedAsc = "confirmed_asc",
  ConfirmedDesc = "confirmed_desc",
  DeathAsc = "death_asc",
  DeathDesc = "death_desc",
  RecoveredAsc = "recovered_asc",
  RecoveredDesc = "recovered_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export enum _LatestOrdering {
  UuidAsc = "uuid_asc",
  UuidDesc = "uuid_desc",
  DateAsc = "date_asc",
  DateDesc = "date_desc",
  ConfirmedAsc = "confirmed_asc",
  ConfirmedDesc = "confirmed_desc",
  DeathAsc = "death_asc",
  DeathDesc = "death_desc",
  RecoveredAsc = "recovered_asc",
  RecoveredDesc = "recovered_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export enum _AgeGroupOrdering {
  GroupAsc = "group_asc",
  GroupDesc = "group_desc",
  SpanAsc = "span_asc",
  SpanDesc = "span_desc",
  StartAsc = "start_asc",
  StartDesc = "start_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export enum _CompoundOrdering {
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
  DescriptionAsc = "description_asc",
  DescriptionDesc = "description_desc",
  TypeAsc = "type_asc",
  TypeDesc = "type_desc",
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
  CompanyAsc = "company_asc",
  CompanyDesc = "company_desc",
  TtdIdAsc = "ttd_id_asc",
  TtdIdDesc = "ttd_id_desc",
  ChebiIdAsc = "chebi_id_asc",
  ChebiIdDesc = "chebi_id_desc",
  ChemspiderIdAsc = "chemspider_id_asc",
  ChemspiderIdDesc = "chemspider_id_desc",
  DrugbankIdAsc = "drugbank_id_asc",
  DrugbankIdDesc = "drugbank_id_desc",
  KeggDrugIdAsc = "kegg_drug_id_asc",
  KeggDrugIdDesc = "kegg_drug_id_desc",
  KeggIdAsc = "kegg_id_asc",
  KeggIdDesc = "kegg_id_desc",
  PubchemIdAsc = "pubchem_id_asc",
  PubchemIdDesc = "pubchem_id_desc",
  UniiAsc = "unii_asc",
  UniiDesc = "unii_desc",
  InchiAsc = "inchi_asc",
  InchiDesc = "inchi_desc",
  InchikeyAsc = "inchikey_asc",
  InchikeyDesc = "inchikey_desc",
  CasNumberAsc = "cas_number_asc",
  CasNumberDesc = "cas_number_desc",
  AccessionNumbersAsc = "accession_numbers_asc",
  AccessionNumbersDesc = "accession_numbers_desc",
  TherapeuticClassAsc = "therapeutic_class_asc",
  TherapeuticClassDesc = "therapeutic_class_desc",
  DrugClassAsc = "drug_class_asc",
  DrugClassDesc = "drug_class_desc",
  CompoundClassAsc = "compound_class_asc",
  CompoundClassDesc = "compound_class_desc",
  GroupsAsc = "groups_asc",
  GroupsDesc = "groups_desc",
  CategoriesAsc = "categories_asc",
  CategoriesDesc = "categories_desc",
  AtcCodesAsc = "atc_codes_asc",
  AtcCodesDesc = "atc_codes_desc",
  SourceUrlAsc = "source_url_asc",
  SourceUrlDesc = "source_url_desc",
  DrugFormulaAsc = "drug_formula_asc",
  DrugFormulaDesc = "drug_formula_desc",
  DrugSmilesAsc = "drug_smiles_asc",
  DrugSmilesDesc = "drug_smiles_desc",
  DrugTypeAsc = "drug_type_asc",
  DrugTypeDesc = "drug_type_desc",
  HighestStatAsc = "highest_stat_asc",
  HighestStatDesc = "highest_stat_desc",
  IndicationAsc = "indication_asc",
  IndicationDesc = "indication_desc",
  MechanismAsc = "mechanism_asc",
  MechanismDesc = "mechanism_desc",
  SynonymsAsc = "synonyms_asc",
  SynonymsDesc = "synonyms_desc",
}

export type _CompoundFilter = {
  AND?: Maybe<Array<_CompoundFilter>>;
  OR?: Maybe<Array<_CompoundFilter>>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Scalars["String"]>>;
  description_not_in?: Maybe<Array<Scalars["String"]>>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  type_not?: Maybe<Scalars["String"]>;
  type_in?: Maybe<Array<Scalars["String"]>>;
  type_not_in?: Maybe<Array<Scalars["String"]>>;
  type_contains?: Maybe<Scalars["String"]>;
  type_not_contains?: Maybe<Scalars["String"]>;
  type_starts_with?: Maybe<Scalars["String"]>;
  type_not_starts_with?: Maybe<Scalars["String"]>;
  type_ends_with?: Maybe<Scalars["String"]>;
  type_not_ends_with?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  company?: Maybe<Scalars["String"]>;
  company_not?: Maybe<Scalars["String"]>;
  company_in?: Maybe<Array<Scalars["String"]>>;
  company_not_in?: Maybe<Array<Scalars["String"]>>;
  company_contains?: Maybe<Scalars["String"]>;
  company_not_contains?: Maybe<Scalars["String"]>;
  company_starts_with?: Maybe<Scalars["String"]>;
  company_not_starts_with?: Maybe<Scalars["String"]>;
  company_ends_with?: Maybe<Scalars["String"]>;
  company_not_ends_with?: Maybe<Scalars["String"]>;
  ttd_id?: Maybe<Scalars["ID"]>;
  ttd_id_not?: Maybe<Scalars["ID"]>;
  ttd_id_in?: Maybe<Array<Scalars["ID"]>>;
  ttd_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  ttd_id_contains?: Maybe<Scalars["ID"]>;
  ttd_id_not_contains?: Maybe<Scalars["ID"]>;
  ttd_id_starts_with?: Maybe<Scalars["ID"]>;
  ttd_id_not_starts_with?: Maybe<Scalars["ID"]>;
  ttd_id_ends_with?: Maybe<Scalars["ID"]>;
  ttd_id_not_ends_with?: Maybe<Scalars["ID"]>;
  chebi_id?: Maybe<Scalars["ID"]>;
  chebi_id_not?: Maybe<Scalars["ID"]>;
  chebi_id_in?: Maybe<Array<Scalars["ID"]>>;
  chebi_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  chebi_id_contains?: Maybe<Scalars["ID"]>;
  chebi_id_not_contains?: Maybe<Scalars["ID"]>;
  chebi_id_starts_with?: Maybe<Scalars["ID"]>;
  chebi_id_not_starts_with?: Maybe<Scalars["ID"]>;
  chebi_id_ends_with?: Maybe<Scalars["ID"]>;
  chebi_id_not_ends_with?: Maybe<Scalars["ID"]>;
  chemspider_id?: Maybe<Scalars["Float"]>;
  chemspider_id_not?: Maybe<Scalars["Float"]>;
  chemspider_id_in?: Maybe<Array<Scalars["Float"]>>;
  chemspider_id_not_in?: Maybe<Array<Scalars["Float"]>>;
  chemspider_id_lt?: Maybe<Scalars["Float"]>;
  chemspider_id_lte?: Maybe<Scalars["Float"]>;
  chemspider_id_gt?: Maybe<Scalars["Float"]>;
  chemspider_id_gte?: Maybe<Scalars["Float"]>;
  drugbank_id?: Maybe<Scalars["ID"]>;
  drugbank_id_not?: Maybe<Scalars["ID"]>;
  drugbank_id_in?: Maybe<Array<Scalars["ID"]>>;
  drugbank_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  drugbank_id_contains?: Maybe<Scalars["ID"]>;
  drugbank_id_not_contains?: Maybe<Scalars["ID"]>;
  drugbank_id_starts_with?: Maybe<Scalars["ID"]>;
  drugbank_id_not_starts_with?: Maybe<Scalars["ID"]>;
  drugbank_id_ends_with?: Maybe<Scalars["ID"]>;
  drugbank_id_not_ends_with?: Maybe<Scalars["ID"]>;
  kegg_drug_id?: Maybe<Scalars["ID"]>;
  kegg_drug_id_not?: Maybe<Scalars["ID"]>;
  kegg_drug_id_in?: Maybe<Array<Scalars["ID"]>>;
  kegg_drug_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  kegg_drug_id_contains?: Maybe<Scalars["ID"]>;
  kegg_drug_id_not_contains?: Maybe<Scalars["ID"]>;
  kegg_drug_id_starts_with?: Maybe<Scalars["ID"]>;
  kegg_drug_id_not_starts_with?: Maybe<Scalars["ID"]>;
  kegg_drug_id_ends_with?: Maybe<Scalars["ID"]>;
  kegg_drug_id_not_ends_with?: Maybe<Scalars["ID"]>;
  kegg_id?: Maybe<Scalars["ID"]>;
  kegg_id_not?: Maybe<Scalars["ID"]>;
  kegg_id_in?: Maybe<Array<Scalars["ID"]>>;
  kegg_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  kegg_id_contains?: Maybe<Scalars["ID"]>;
  kegg_id_not_contains?: Maybe<Scalars["ID"]>;
  kegg_id_starts_with?: Maybe<Scalars["ID"]>;
  kegg_id_not_starts_with?: Maybe<Scalars["ID"]>;
  kegg_id_ends_with?: Maybe<Scalars["ID"]>;
  kegg_id_not_ends_with?: Maybe<Scalars["ID"]>;
  pubchem_id?: Maybe<Scalars["ID"]>;
  pubchem_id_not?: Maybe<Scalars["ID"]>;
  pubchem_id_in?: Maybe<Array<Scalars["ID"]>>;
  pubchem_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  pubchem_id_contains?: Maybe<Scalars["ID"]>;
  pubchem_id_not_contains?: Maybe<Scalars["ID"]>;
  pubchem_id_starts_with?: Maybe<Scalars["ID"]>;
  pubchem_id_not_starts_with?: Maybe<Scalars["ID"]>;
  pubchem_id_ends_with?: Maybe<Scalars["ID"]>;
  pubchem_id_not_ends_with?: Maybe<Scalars["ID"]>;
  unii?: Maybe<Scalars["ID"]>;
  unii_not?: Maybe<Scalars["ID"]>;
  unii_in?: Maybe<Array<Scalars["ID"]>>;
  unii_not_in?: Maybe<Array<Scalars["ID"]>>;
  unii_contains?: Maybe<Scalars["ID"]>;
  unii_not_contains?: Maybe<Scalars["ID"]>;
  unii_starts_with?: Maybe<Scalars["ID"]>;
  unii_not_starts_with?: Maybe<Scalars["ID"]>;
  unii_ends_with?: Maybe<Scalars["ID"]>;
  unii_not_ends_with?: Maybe<Scalars["ID"]>;
  inchi?: Maybe<Scalars["ID"]>;
  inchi_not?: Maybe<Scalars["ID"]>;
  inchi_in?: Maybe<Array<Scalars["ID"]>>;
  inchi_not_in?: Maybe<Array<Scalars["ID"]>>;
  inchi_contains?: Maybe<Scalars["ID"]>;
  inchi_not_contains?: Maybe<Scalars["ID"]>;
  inchi_starts_with?: Maybe<Scalars["ID"]>;
  inchi_not_starts_with?: Maybe<Scalars["ID"]>;
  inchi_ends_with?: Maybe<Scalars["ID"]>;
  inchi_not_ends_with?: Maybe<Scalars["ID"]>;
  inchikey?: Maybe<Scalars["ID"]>;
  inchikey_not?: Maybe<Scalars["ID"]>;
  inchikey_in?: Maybe<Array<Scalars["ID"]>>;
  inchikey_not_in?: Maybe<Array<Scalars["ID"]>>;
  inchikey_contains?: Maybe<Scalars["ID"]>;
  inchikey_not_contains?: Maybe<Scalars["ID"]>;
  inchikey_starts_with?: Maybe<Scalars["ID"]>;
  inchikey_not_starts_with?: Maybe<Scalars["ID"]>;
  inchikey_ends_with?: Maybe<Scalars["ID"]>;
  inchikey_not_ends_with?: Maybe<Scalars["ID"]>;
  cas_number?: Maybe<Scalars["String"]>;
  cas_number_not?: Maybe<Scalars["String"]>;
  cas_number_in?: Maybe<Array<Scalars["String"]>>;
  cas_number_not_in?: Maybe<Array<Scalars["String"]>>;
  cas_number_contains?: Maybe<Scalars["String"]>;
  cas_number_not_contains?: Maybe<Scalars["String"]>;
  cas_number_starts_with?: Maybe<Scalars["String"]>;
  cas_number_not_starts_with?: Maybe<Scalars["String"]>;
  cas_number_ends_with?: Maybe<Scalars["String"]>;
  cas_number_not_ends_with?: Maybe<Scalars["String"]>;
  accession_numbers?: Maybe<Scalars["String"]>;
  accession_numbers_not?: Maybe<Scalars["String"]>;
  accession_numbers_in?: Maybe<Array<Scalars["String"]>>;
  accession_numbers_not_in?: Maybe<Array<Scalars["String"]>>;
  accession_numbers_contains?: Maybe<Scalars["String"]>;
  accession_numbers_not_contains?: Maybe<Scalars["String"]>;
  accession_numbers_starts_with?: Maybe<Scalars["String"]>;
  accession_numbers_not_starts_with?: Maybe<Scalars["String"]>;
  accession_numbers_ends_with?: Maybe<Scalars["String"]>;
  accession_numbers_not_ends_with?: Maybe<Scalars["String"]>;
  therapeutic_class?: Maybe<Scalars["String"]>;
  therapeutic_class_not?: Maybe<Scalars["String"]>;
  therapeutic_class_in?: Maybe<Array<Scalars["String"]>>;
  therapeutic_class_not_in?: Maybe<Array<Scalars["String"]>>;
  therapeutic_class_contains?: Maybe<Scalars["String"]>;
  therapeutic_class_not_contains?: Maybe<Scalars["String"]>;
  therapeutic_class_starts_with?: Maybe<Scalars["String"]>;
  therapeutic_class_not_starts_with?: Maybe<Scalars["String"]>;
  therapeutic_class_ends_with?: Maybe<Scalars["String"]>;
  therapeutic_class_not_ends_with?: Maybe<Scalars["String"]>;
  drug_class?: Maybe<Scalars["String"]>;
  drug_class_not?: Maybe<Scalars["String"]>;
  drug_class_in?: Maybe<Array<Scalars["String"]>>;
  drug_class_not_in?: Maybe<Array<Scalars["String"]>>;
  drug_class_contains?: Maybe<Scalars["String"]>;
  drug_class_not_contains?: Maybe<Scalars["String"]>;
  drug_class_starts_with?: Maybe<Scalars["String"]>;
  drug_class_not_starts_with?: Maybe<Scalars["String"]>;
  drug_class_ends_with?: Maybe<Scalars["String"]>;
  drug_class_not_ends_with?: Maybe<Scalars["String"]>;
  compound_class?: Maybe<Scalars["String"]>;
  compound_class_not?: Maybe<Scalars["String"]>;
  compound_class_in?: Maybe<Array<Scalars["String"]>>;
  compound_class_not_in?: Maybe<Array<Scalars["String"]>>;
  compound_class_contains?: Maybe<Scalars["String"]>;
  compound_class_not_contains?: Maybe<Scalars["String"]>;
  compound_class_starts_with?: Maybe<Scalars["String"]>;
  compound_class_not_starts_with?: Maybe<Scalars["String"]>;
  compound_class_ends_with?: Maybe<Scalars["String"]>;
  compound_class_not_ends_with?: Maybe<Scalars["String"]>;
  groups?: Maybe<Scalars["String"]>;
  groups_not?: Maybe<Scalars["String"]>;
  groups_in?: Maybe<Array<Scalars["String"]>>;
  groups_not_in?: Maybe<Array<Scalars["String"]>>;
  groups_contains?: Maybe<Scalars["String"]>;
  groups_not_contains?: Maybe<Scalars["String"]>;
  groups_starts_with?: Maybe<Scalars["String"]>;
  groups_not_starts_with?: Maybe<Scalars["String"]>;
  groups_ends_with?: Maybe<Scalars["String"]>;
  groups_not_ends_with?: Maybe<Scalars["String"]>;
  categories?: Maybe<Scalars["String"]>;
  categories_not?: Maybe<Scalars["String"]>;
  categories_in?: Maybe<Array<Scalars["String"]>>;
  categories_not_in?: Maybe<Array<Scalars["String"]>>;
  categories_contains?: Maybe<Scalars["String"]>;
  categories_not_contains?: Maybe<Scalars["String"]>;
  categories_starts_with?: Maybe<Scalars["String"]>;
  categories_not_starts_with?: Maybe<Scalars["String"]>;
  categories_ends_with?: Maybe<Scalars["String"]>;
  categories_not_ends_with?: Maybe<Scalars["String"]>;
  atc_codes?: Maybe<Scalars["String"]>;
  atc_codes_not?: Maybe<Scalars["String"]>;
  atc_codes_in?: Maybe<Array<Scalars["String"]>>;
  atc_codes_not_in?: Maybe<Array<Scalars["String"]>>;
  atc_codes_contains?: Maybe<Scalars["String"]>;
  atc_codes_not_contains?: Maybe<Scalars["String"]>;
  atc_codes_starts_with?: Maybe<Scalars["String"]>;
  atc_codes_not_starts_with?: Maybe<Scalars["String"]>;
  atc_codes_ends_with?: Maybe<Scalars["String"]>;
  atc_codes_not_ends_with?: Maybe<Scalars["String"]>;
  source_url?: Maybe<Scalars["String"]>;
  source_url_not?: Maybe<Scalars["String"]>;
  source_url_in?: Maybe<Array<Scalars["String"]>>;
  source_url_not_in?: Maybe<Array<Scalars["String"]>>;
  source_url_contains?: Maybe<Scalars["String"]>;
  source_url_not_contains?: Maybe<Scalars["String"]>;
  source_url_starts_with?: Maybe<Scalars["String"]>;
  source_url_not_starts_with?: Maybe<Scalars["String"]>;
  source_url_ends_with?: Maybe<Scalars["String"]>;
  source_url_not_ends_with?: Maybe<Scalars["String"]>;
  drug_formula?: Maybe<Scalars["String"]>;
  drug_formula_not?: Maybe<Scalars["String"]>;
  drug_formula_in?: Maybe<Array<Scalars["String"]>>;
  drug_formula_not_in?: Maybe<Array<Scalars["String"]>>;
  drug_formula_contains?: Maybe<Scalars["String"]>;
  drug_formula_not_contains?: Maybe<Scalars["String"]>;
  drug_formula_starts_with?: Maybe<Scalars["String"]>;
  drug_formula_not_starts_with?: Maybe<Scalars["String"]>;
  drug_formula_ends_with?: Maybe<Scalars["String"]>;
  drug_formula_not_ends_with?: Maybe<Scalars["String"]>;
  drug_smiles?: Maybe<Scalars["String"]>;
  drug_smiles_not?: Maybe<Scalars["String"]>;
  drug_smiles_in?: Maybe<Array<Scalars["String"]>>;
  drug_smiles_not_in?: Maybe<Array<Scalars["String"]>>;
  drug_smiles_contains?: Maybe<Scalars["String"]>;
  drug_smiles_not_contains?: Maybe<Scalars["String"]>;
  drug_smiles_starts_with?: Maybe<Scalars["String"]>;
  drug_smiles_not_starts_with?: Maybe<Scalars["String"]>;
  drug_smiles_ends_with?: Maybe<Scalars["String"]>;
  drug_smiles_not_ends_with?: Maybe<Scalars["String"]>;
  drug_type?: Maybe<Scalars["String"]>;
  drug_type_not?: Maybe<Scalars["String"]>;
  drug_type_in?: Maybe<Array<Scalars["String"]>>;
  drug_type_not_in?: Maybe<Array<Scalars["String"]>>;
  drug_type_contains?: Maybe<Scalars["String"]>;
  drug_type_not_contains?: Maybe<Scalars["String"]>;
  drug_type_starts_with?: Maybe<Scalars["String"]>;
  drug_type_not_starts_with?: Maybe<Scalars["String"]>;
  drug_type_ends_with?: Maybe<Scalars["String"]>;
  drug_type_not_ends_with?: Maybe<Scalars["String"]>;
  highest_stat?: Maybe<Scalars["String"]>;
  highest_stat_not?: Maybe<Scalars["String"]>;
  highest_stat_in?: Maybe<Array<Scalars["String"]>>;
  highest_stat_not_in?: Maybe<Array<Scalars["String"]>>;
  highest_stat_contains?: Maybe<Scalars["String"]>;
  highest_stat_not_contains?: Maybe<Scalars["String"]>;
  highest_stat_starts_with?: Maybe<Scalars["String"]>;
  highest_stat_not_starts_with?: Maybe<Scalars["String"]>;
  highest_stat_ends_with?: Maybe<Scalars["String"]>;
  highest_stat_not_ends_with?: Maybe<Scalars["String"]>;
  indication?: Maybe<Scalars["String"]>;
  indication_not?: Maybe<Scalars["String"]>;
  indication_in?: Maybe<Array<Scalars["String"]>>;
  indication_not_in?: Maybe<Array<Scalars["String"]>>;
  indication_contains?: Maybe<Scalars["String"]>;
  indication_not_contains?: Maybe<Scalars["String"]>;
  indication_starts_with?: Maybe<Scalars["String"]>;
  indication_not_starts_with?: Maybe<Scalars["String"]>;
  indication_ends_with?: Maybe<Scalars["String"]>;
  indication_not_ends_with?: Maybe<Scalars["String"]>;
  mechanism?: Maybe<Scalars["String"]>;
  mechanism_not?: Maybe<Scalars["String"]>;
  mechanism_in?: Maybe<Array<Scalars["String"]>>;
  mechanism_not_in?: Maybe<Array<Scalars["String"]>>;
  mechanism_contains?: Maybe<Scalars["String"]>;
  mechanism_not_contains?: Maybe<Scalars["String"]>;
  mechanism_starts_with?: Maybe<Scalars["String"]>;
  mechanism_not_starts_with?: Maybe<Scalars["String"]>;
  mechanism_ends_with?: Maybe<Scalars["String"]>;
  mechanism_not_ends_with?: Maybe<Scalars["String"]>;
  synonyms?: Maybe<Scalars["String"]>;
  synonyms_not?: Maybe<Scalars["String"]>;
  synonyms_in?: Maybe<Array<Scalars["String"]>>;
  synonyms_not_in?: Maybe<Array<Scalars["String"]>>;
  synonyms_contains?: Maybe<Scalars["String"]>;
  synonyms_not_contains?: Maybe<Scalars["String"]>;
  synonyms_starts_with?: Maybe<Scalars["String"]>;
  synonyms_not_starts_with?: Maybe<Scalars["String"]>;
  synonyms_ends_with?: Maybe<Scalars["String"]>;
  synonyms_not_ends_with?: Maybe<Scalars["String"]>;
  targets?: Maybe<_CompoundTargetsFilter>;
  targets_not?: Maybe<_CompoundTargetsFilter>;
  targets_in?: Maybe<Array<_CompoundTargetsFilter>>;
  targets_not_in?: Maybe<Array<_CompoundTargetsFilter>>;
  targets_some?: Maybe<_CompoundTargetsFilter>;
  targets_none?: Maybe<_CompoundTargetsFilter>;
  targets_single?: Maybe<_CompoundTargetsFilter>;
  targets_every?: Maybe<_CompoundTargetsFilter>;
  isInhibitor?: Maybe<_CompoundIsInhibitorFilter>;
  isInhibitor_not?: Maybe<_CompoundIsInhibitorFilter>;
  isInhibitor_in?: Maybe<Array<_CompoundIsInhibitorFilter>>;
  isInhibitor_not_in?: Maybe<Array<_CompoundIsInhibitorFilter>>;
  isInhibitor_some?: Maybe<_CompoundIsInhibitorFilter>;
  isInhibitor_none?: Maybe<_CompoundIsInhibitorFilter>;
  isInhibitor_single?: Maybe<_CompoundIsInhibitorFilter>;
  isInhibitor_every?: Maybe<_CompoundIsInhibitorFilter>;
  isAntagonist?: Maybe<_CompoundIsAntagonistFilter>;
  isAntagonist_not?: Maybe<_CompoundIsAntagonistFilter>;
  isAntagonist_in?: Maybe<Array<_CompoundIsAntagonistFilter>>;
  isAntagonist_not_in?: Maybe<Array<_CompoundIsAntagonistFilter>>;
  isAntagonist_some?: Maybe<_CompoundIsAntagonistFilter>;
  isAntagonist_none?: Maybe<_CompoundIsAntagonistFilter>;
  isAntagonist_single?: Maybe<_CompoundIsAntagonistFilter>;
  isAntagonist_every?: Maybe<_CompoundIsAntagonistFilter>;
  isAgonist?: Maybe<_CompoundIsAgonistFilter>;
  isAgonist_not?: Maybe<_CompoundIsAgonistFilter>;
  isAgonist_in?: Maybe<Array<_CompoundIsAgonistFilter>>;
  isAgonist_not_in?: Maybe<Array<_CompoundIsAgonistFilter>>;
  isAgonist_some?: Maybe<_CompoundIsAgonistFilter>;
  isAgonist_none?: Maybe<_CompoundIsAgonistFilter>;
  isAgonist_single?: Maybe<_CompoundIsAgonistFilter>;
  isAgonist_every?: Maybe<_CompoundIsAgonistFilter>;
  isActivator?: Maybe<_CompoundIsActivatorFilter>;
  isActivator_not?: Maybe<_CompoundIsActivatorFilter>;
  isActivator_in?: Maybe<Array<_CompoundIsActivatorFilter>>;
  isActivator_not_in?: Maybe<Array<_CompoundIsActivatorFilter>>;
  isActivator_some?: Maybe<_CompoundIsActivatorFilter>;
  isActivator_none?: Maybe<_CompoundIsActivatorFilter>;
  isActivator_single?: Maybe<_CompoundIsActivatorFilter>;
  isActivator_every?: Maybe<_CompoundIsActivatorFilter>;
  isBinder?: Maybe<_CompoundIsBinderFilter>;
  isBinder_not?: Maybe<_CompoundIsBinderFilter>;
  isBinder_in?: Maybe<Array<_CompoundIsBinderFilter>>;
  isBinder_not_in?: Maybe<Array<_CompoundIsBinderFilter>>;
  isBinder_some?: Maybe<_CompoundIsBinderFilter>;
  isBinder_none?: Maybe<_CompoundIsBinderFilter>;
  isBinder_single?: Maybe<_CompoundIsBinderFilter>;
  isBinder_every?: Maybe<_CompoundIsBinderFilter>;
};

export type _CompoundTargetsFilter = {
  AND?: Maybe<Array<_CompoundTargetsFilter>>;
  OR?: Maybe<Array<_CompoundTargetsFilter>>;
  activity?: Maybe<Scalars["String"]>;
  activity_not?: Maybe<Scalars["String"]>;
  activity_in?: Maybe<Array<Scalars["String"]>>;
  activity_not_in?: Maybe<Array<Scalars["String"]>>;
  activity_contains?: Maybe<Scalars["String"]>;
  activity_not_contains?: Maybe<Scalars["String"]>;
  activity_starts_with?: Maybe<Scalars["String"]>;
  activity_not_starts_with?: Maybe<Scalars["String"]>;
  activity_ends_with?: Maybe<Scalars["String"]>;
  activity_not_ends_with?: Maybe<Scalars["String"]>;
  moa?: Maybe<Scalars["String"]>;
  moa_not?: Maybe<Scalars["String"]>;
  moa_in?: Maybe<Array<Scalars["String"]>>;
  moa_not_in?: Maybe<Array<Scalars["String"]>>;
  moa_contains?: Maybe<Scalars["String"]>;
  moa_not_contains?: Maybe<Scalars["String"]>;
  moa_starts_with?: Maybe<Scalars["String"]>;
  moa_not_starts_with?: Maybe<Scalars["String"]>;
  moa_ends_with?: Maybe<Scalars["String"]>;
  moa_not_ends_with?: Maybe<Scalars["String"]>;
  reference?: Maybe<Scalars["String"]>;
  reference_not?: Maybe<Scalars["String"]>;
  reference_in?: Maybe<Array<Scalars["String"]>>;
  reference_not_in?: Maybe<Array<Scalars["String"]>>;
  reference_contains?: Maybe<Scalars["String"]>;
  reference_not_contains?: Maybe<Scalars["String"]>;
  reference_starts_with?: Maybe<Scalars["String"]>;
  reference_not_starts_with?: Maybe<Scalars["String"]>;
  reference_ends_with?: Maybe<Scalars["String"]>;
  reference_not_ends_with?: Maybe<Scalars["String"]>;
  target?: Maybe<_TargetFilter>;
};

export type _TargetFilter = {
  AND?: Maybe<Array<_TargetFilter>>;
  OR?: Maybe<Array<_TargetFilter>>;
  ttd_id?: Maybe<Scalars["ID"]>;
  ttd_id_not?: Maybe<Scalars["ID"]>;
  ttd_id_in?: Maybe<Array<Scalars["ID"]>>;
  ttd_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  ttd_id_contains?: Maybe<Scalars["ID"]>;
  ttd_id_not_contains?: Maybe<Scalars["ID"]>;
  ttd_id_starts_with?: Maybe<Scalars["ID"]>;
  ttd_id_not_starts_with?: Maybe<Scalars["ID"]>;
  ttd_id_ends_with?: Maybe<Scalars["ID"]>;
  ttd_id_not_ends_with?: Maybe<Scalars["ID"]>;
  uniprot_id?: Maybe<Scalars["ID"]>;
  uniprot_id_not?: Maybe<Scalars["ID"]>;
  uniprot_id_in?: Maybe<Array<Scalars["ID"]>>;
  uniprot_id_not_in?: Maybe<Array<Scalars["ID"]>>;
  uniprot_id_contains?: Maybe<Scalars["ID"]>;
  uniprot_id_not_contains?: Maybe<Scalars["ID"]>;
  uniprot_id_starts_with?: Maybe<Scalars["ID"]>;
  uniprot_id_not_starts_with?: Maybe<Scalars["ID"]>;
  uniprot_id_ends_with?: Maybe<Scalars["ID"]>;
  uniprot_id_not_ends_with?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Scalars["String"]>>;
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  type_not?: Maybe<Scalars["String"]>;
  type_in?: Maybe<Array<Scalars["String"]>>;
  type_not_in?: Maybe<Array<Scalars["String"]>>;
  type_contains?: Maybe<Scalars["String"]>;
  type_not_contains?: Maybe<Scalars["String"]>;
  type_starts_with?: Maybe<Scalars["String"]>;
  type_not_starts_with?: Maybe<Scalars["String"]>;
  type_ends_with?: Maybe<Scalars["String"]>;
  type_not_ends_with?: Maybe<Scalars["String"]>;
  geneName?: Maybe<Scalars["String"]>;
  geneName_not?: Maybe<Scalars["String"]>;
  geneName_in?: Maybe<Array<Scalars["String"]>>;
  geneName_not_in?: Maybe<Array<Scalars["String"]>>;
  geneName_contains?: Maybe<Scalars["String"]>;
  geneName_not_contains?: Maybe<Scalars["String"]>;
  geneName_starts_with?: Maybe<Scalars["String"]>;
  geneName_not_starts_with?: Maybe<Scalars["String"]>;
  geneName_ends_with?: Maybe<Scalars["String"]>;
  geneName_not_ends_with?: Maybe<Scalars["String"]>;
  function?: Maybe<Scalars["String"]>;
  function_not?: Maybe<Scalars["String"]>;
  function_in?: Maybe<Array<Scalars["String"]>>;
  function_not_in?: Maybe<Array<Scalars["String"]>>;
  function_contains?: Maybe<Scalars["String"]>;
  function_not_contains?: Maybe<Scalars["String"]>;
  function_starts_with?: Maybe<Scalars["String"]>;
  function_not_starts_with?: Maybe<Scalars["String"]>;
  function_ends_with?: Maybe<Scalars["String"]>;
  function_not_ends_with?: Maybe<Scalars["String"]>;
  sequence?: Maybe<Scalars["String"]>;
  sequence_not?: Maybe<Scalars["String"]>;
  sequence_in?: Maybe<Array<Scalars["String"]>>;
  sequence_not_in?: Maybe<Array<Scalars["String"]>>;
  sequence_contains?: Maybe<Scalars["String"]>;
  sequence_not_contains?: Maybe<Scalars["String"]>;
  sequence_starts_with?: Maybe<Scalars["String"]>;
  sequence_not_starts_with?: Maybe<Scalars["String"]>;
  sequence_ends_with?: Maybe<Scalars["String"]>;
  sequence_not_ends_with?: Maybe<Scalars["String"]>;
  license?: Maybe<Scalars["String"]>;
  license_not?: Maybe<Scalars["String"]>;
  license_in?: Maybe<Array<Scalars["String"]>>;
  license_not_in?: Maybe<Array<Scalars["String"]>>;
  license_contains?: Maybe<Scalars["String"]>;
  license_not_contains?: Maybe<Scalars["String"]>;
  license_starts_with?: Maybe<Scalars["String"]>;
  license_not_starts_with?: Maybe<Scalars["String"]>;
  license_ends_with?: Maybe<Scalars["String"]>;
  license_not_ends_with?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  source_not?: Maybe<Scalars["String"]>;
  source_in?: Maybe<Array<Scalars["String"]>>;
  source_not_in?: Maybe<Array<Scalars["String"]>>;
  source_contains?: Maybe<Scalars["String"]>;
  source_not_contains?: Maybe<Scalars["String"]>;
  source_starts_with?: Maybe<Scalars["String"]>;
  source_not_starts_with?: Maybe<Scalars["String"]>;
  source_ends_with?: Maybe<Scalars["String"]>;
  source_not_ends_with?: Maybe<Scalars["String"]>;
  ec_number?: Maybe<Scalars["String"]>;
  ec_number_not?: Maybe<Scalars["String"]>;
  ec_number_in?: Maybe<Array<Scalars["String"]>>;
  ec_number_not_in?: Maybe<Array<Scalars["String"]>>;
  ec_number_contains?: Maybe<Scalars["String"]>;
  ec_number_not_contains?: Maybe<Scalars["String"]>;
  ec_number_starts_with?: Maybe<Scalars["String"]>;
  ec_number_not_starts_with?: Maybe<Scalars["String"]>;
  ec_number_ends_with?: Maybe<Scalars["String"]>;
  ec_number_not_ends_with?: Maybe<Scalars["String"]>;
  bio_class?: Maybe<Scalars["String"]>;
  bio_class_not?: Maybe<Scalars["String"]>;
  bio_class_in?: Maybe<Array<Scalars["String"]>>;
  bio_class_not_in?: Maybe<Array<Scalars["String"]>>;
  bio_class_contains?: Maybe<Scalars["String"]>;
  bio_class_not_contains?: Maybe<Scalars["String"]>;
  bio_class_starts_with?: Maybe<Scalars["String"]>;
  bio_class_not_starts_with?: Maybe<Scalars["String"]>;
  bio_class_ends_with?: Maybe<Scalars["String"]>;
  bio_class_not_ends_with?: Maybe<Scalars["String"]>;
  synonyms?: Maybe<Scalars["String"]>;
  synonyms_not?: Maybe<Scalars["String"]>;
  synonyms_in?: Maybe<Array<Scalars["String"]>>;
  synonyms_not_in?: Maybe<Array<Scalars["String"]>>;
  synonyms_contains?: Maybe<Scalars["String"]>;
  synonyms_not_contains?: Maybe<Scalars["String"]>;
  synonyms_starts_with?: Maybe<Scalars["String"]>;
  synonyms_not_starts_with?: Maybe<Scalars["String"]>;
  synonyms_ends_with?: Maybe<Scalars["String"]>;
  synonyms_not_ends_with?: Maybe<Scalars["String"]>;
  targets?: Maybe<_TargetTargetsFilter>;
  targets_not?: Maybe<_TargetTargetsFilter>;
  targets_in?: Maybe<Array<_TargetTargetsFilter>>;
  targets_not_in?: Maybe<Array<_TargetTargetsFilter>>;
  targets_some?: Maybe<_TargetTargetsFilter>;
  targets_none?: Maybe<_TargetTargetsFilter>;
  targets_single?: Maybe<_TargetTargetsFilter>;
  targets_every?: Maybe<_TargetTargetsFilter>;
  inhibitors?: Maybe<_TargetIsInhibitorFilter>;
  inhibitors_not?: Maybe<_TargetIsInhibitorFilter>;
  inhibitors_in?: Maybe<Array<_TargetIsInhibitorFilter>>;
  inhibitors_not_in?: Maybe<Array<_TargetIsInhibitorFilter>>;
  inhibitors_some?: Maybe<_TargetIsInhibitorFilter>;
  inhibitors_none?: Maybe<_TargetIsInhibitorFilter>;
  inhibitors_single?: Maybe<_TargetIsInhibitorFilter>;
  inhibitors_every?: Maybe<_TargetIsInhibitorFilter>;
  antagonists?: Maybe<_TargetIsAntagonistFilter>;
  antagonists_not?: Maybe<_TargetIsAntagonistFilter>;
  antagonists_in?: Maybe<Array<_TargetIsAntagonistFilter>>;
  antagonists_not_in?: Maybe<Array<_TargetIsAntagonistFilter>>;
  antagonists_some?: Maybe<_TargetIsAntagonistFilter>;
  antagonists_none?: Maybe<_TargetIsAntagonistFilter>;
  antagonists_single?: Maybe<_TargetIsAntagonistFilter>;
  antagonists_every?: Maybe<_TargetIsAntagonistFilter>;
  agonists?: Maybe<_TargetIsAgonistFilter>;
  agonists_not?: Maybe<_TargetIsAgonistFilter>;
  agonists_in?: Maybe<Array<_TargetIsAgonistFilter>>;
  agonists_not_in?: Maybe<Array<_TargetIsAgonistFilter>>;
  agonists_some?: Maybe<_TargetIsAgonistFilter>;
  agonists_none?: Maybe<_TargetIsAgonistFilter>;
  agonists_single?: Maybe<_TargetIsAgonistFilter>;
  agonists_every?: Maybe<_TargetIsAgonistFilter>;
  activators?: Maybe<_TargetIsActivatorFilter>;
  activators_not?: Maybe<_TargetIsActivatorFilter>;
  activators_in?: Maybe<Array<_TargetIsActivatorFilter>>;
  activators_not_in?: Maybe<Array<_TargetIsActivatorFilter>>;
  activators_some?: Maybe<_TargetIsActivatorFilter>;
  activators_none?: Maybe<_TargetIsActivatorFilter>;
  activators_single?: Maybe<_TargetIsActivatorFilter>;
  activators_every?: Maybe<_TargetIsActivatorFilter>;
  binders?: Maybe<_TargetIsBinderFilter>;
  binders_not?: Maybe<_TargetIsBinderFilter>;
  binders_in?: Maybe<Array<_TargetIsBinderFilter>>;
  binders_not_in?: Maybe<Array<_TargetIsBinderFilter>>;
  binders_some?: Maybe<_TargetIsBinderFilter>;
  binders_none?: Maybe<_TargetIsBinderFilter>;
  binders_single?: Maybe<_TargetIsBinderFilter>;
  binders_every?: Maybe<_TargetIsBinderFilter>;
};

export type _TargetTargetsFilter = {
  AND?: Maybe<Array<_TargetTargetsFilter>>;
  OR?: Maybe<Array<_TargetTargetsFilter>>;
  activity?: Maybe<Scalars["String"]>;
  activity_not?: Maybe<Scalars["String"]>;
  activity_in?: Maybe<Array<Scalars["String"]>>;
  activity_not_in?: Maybe<Array<Scalars["String"]>>;
  activity_contains?: Maybe<Scalars["String"]>;
  activity_not_contains?: Maybe<Scalars["String"]>;
  activity_starts_with?: Maybe<Scalars["String"]>;
  activity_not_starts_with?: Maybe<Scalars["String"]>;
  activity_ends_with?: Maybe<Scalars["String"]>;
  activity_not_ends_with?: Maybe<Scalars["String"]>;
  moa?: Maybe<Scalars["String"]>;
  moa_not?: Maybe<Scalars["String"]>;
  moa_in?: Maybe<Array<Scalars["String"]>>;
  moa_not_in?: Maybe<Array<Scalars["String"]>>;
  moa_contains?: Maybe<Scalars["String"]>;
  moa_not_contains?: Maybe<Scalars["String"]>;
  moa_starts_with?: Maybe<Scalars["String"]>;
  moa_not_starts_with?: Maybe<Scalars["String"]>;
  moa_ends_with?: Maybe<Scalars["String"]>;
  moa_not_ends_with?: Maybe<Scalars["String"]>;
  reference?: Maybe<Scalars["String"]>;
  reference_not?: Maybe<Scalars["String"]>;
  reference_in?: Maybe<Array<Scalars["String"]>>;
  reference_not_in?: Maybe<Array<Scalars["String"]>>;
  reference_contains?: Maybe<Scalars["String"]>;
  reference_not_contains?: Maybe<Scalars["String"]>;
  reference_starts_with?: Maybe<Scalars["String"]>;
  reference_not_starts_with?: Maybe<Scalars["String"]>;
  reference_ends_with?: Maybe<Scalars["String"]>;
  reference_not_ends_with?: Maybe<Scalars["String"]>;
  compound?: Maybe<_CompoundFilter>;
};

export type _TargetIsInhibitorFilter = {
  AND?: Maybe<Array<_TargetIsInhibitorFilter>>;
  OR?: Maybe<Array<_TargetIsInhibitorFilter>>;
  activity?: Maybe<Scalars["String"]>;
  activity_not?: Maybe<Scalars["String"]>;
  activity_in?: Maybe<Array<Scalars["String"]>>;
  activity_not_in?: Maybe<Array<Scalars["String"]>>;
  activity_contains?: Maybe<Scalars["String"]>;
  activity_not_contains?: Maybe<Scalars["String"]>;
  activity_starts_with?: Maybe<Scalars["String"]>;
  activity_not_starts_with?: Maybe<Scalars["String"]>;
  activity_ends_with?: Maybe<Scalars["String"]>;
  activity_not_ends_with?: Maybe<Scalars["String"]>;
  moa?: Maybe<Scalars["String"]>;
  moa_not?: Maybe<Scalars["String"]>;
  moa_in?: Maybe<Array<Scalars["String"]>>;
  moa_not_in?: Maybe<Array<Scalars["String"]>>;
  moa_contains?: Maybe<Scalars["String"]>;
  moa_not_contains?: Maybe<Scalars["String"]>;
  moa_starts_with?: Maybe<Scalars["String"]>;
  moa_not_starts_with?: Maybe<Scalars["String"]>;
  moa_ends_with?: Maybe<Scalars["String"]>;
  moa_not_ends_with?: Maybe<Scalars["String"]>;
  reference?: Maybe<Scalars["String"]>;
  reference_not?: Maybe<Scalars["String"]>;
  reference_in?: Maybe<Array<Scalars["String"]>>;
  reference_not_in?: Maybe<Array<Scalars["String"]>>;
  reference_contains?: Maybe<Scalars["String"]>;
  reference_not_contains?: Maybe<Scalars["String"]>;
  reference_starts_with?: Maybe<Scalars["String"]>;
  reference_not_starts_with?: Maybe<Scalars["String"]>;
  reference_ends_with?: Maybe<Scalars["String"]>;
  reference_not_ends_with?: Maybe<Scalars["String"]>;
  compound?: Maybe<_CompoundFilter>;
};

export type _TargetIsAntagonistFilter = {
  AND?: Maybe<Array<_TargetIsAntagonistFilter>>;
  OR?: Maybe<Array<_TargetIsAntagonistFilter>>;
  activity?: Maybe<Scalars["String"]>;
  activity_not?: Maybe<Scalars["String"]>;
  activity_in?: Maybe<Array<Scalars["String"]>>;
  activity_not_in?: Maybe<Array<Scalars["String"]>>;
  activity_contains?: Maybe<Scalars["String"]>;
  activity_not_contains?: Maybe<Scalars["String"]>;
  activity_starts_with?: Maybe<Scalars["String"]>;
  activity_not_starts_with?: Maybe<Scalars["String"]>;
  activity_ends_with?: Maybe<Scalars["String"]>;
  activity_not_ends_with?: Maybe<Scalars["String"]>;
  moa?: Maybe<Scalars["String"]>;
  moa_not?: Maybe<Scalars["String"]>;
  moa_in?: Maybe<Array<Scalars["String"]>>;
  moa_not_in?: Maybe<Array<Scalars["String"]>>;
  moa_contains?: Maybe<Scalars["String"]>;
  moa_not_contains?: Maybe<Scalars["String"]>;
  moa_starts_with?: Maybe<Scalars["String"]>;
  moa_not_starts_with?: Maybe<Scalars["String"]>;
  moa_ends_with?: Maybe<Scalars["String"]>;
  moa_not_ends_with?: Maybe<Scalars["String"]>;
  reference?: Maybe<Scalars["String"]>;
  reference_not?: Maybe<Scalars["String"]>;
  reference_in?: Maybe<Array<Scalars["String"]>>;
  reference_not_in?: Maybe<Array<Scalars["String"]>>;
  reference_contains?: Maybe<Scalars["String"]>;
  reference_not_contains?: Maybe<Scalars["String"]>;
  reference_starts_with?: Maybe<Scalars["String"]>;
  reference_not_starts_with?: Maybe<Scalars["String"]>;
  reference_ends_with?: Maybe<Scalars["String"]>;
  reference_not_ends_with?: Maybe<Scalars["String"]>;
  compound?: Maybe<_CompoundFilter>;
};

export type _TargetIsAgonistFilter = {
  AND?: Maybe<Array<_TargetIsAgonistFilter>>;
  OR?: Maybe<Array<_TargetIsAgonistFilter>>;
  activity?: Maybe<Scalars["String"]>;
  activity_not?: Maybe<Scalars["String"]>;
  activity_in?: Maybe<Array<Scalars["String"]>>;
  activity_not_in?: Maybe<Array<Scalars["String"]>>;
  activity_contains?: Maybe<Scalars["String"]>;
  activity_not_contains?: Maybe<Scalars["String"]>;
  activity_starts_with?: Maybe<Scalars["String"]>;
  activity_not_starts_with?: Maybe<Scalars["String"]>;
  activity_ends_with?: Maybe<Scalars["String"]>;
  activity_not_ends_with?: Maybe<Scalars["String"]>;
  moa?: Maybe<Scalars["String"]>;
  moa_not?: Maybe<Scalars["String"]>;
  moa_in?: Maybe<Array<Scalars["String"]>>;
  moa_not_in?: Maybe<Array<Scalars["String"]>>;
  moa_contains?: Maybe<Scalars["String"]>;
  moa_not_contains?: Maybe<Scalars["String"]>;
  moa_starts_with?: Maybe<Scalars["String"]>;
  moa_not_starts_with?: Maybe<Scalars["String"]>;
  moa_ends_with?: Maybe<Scalars["String"]>;
  moa_not_ends_with?: Maybe<Scalars["String"]>;
  reference?: Maybe<Scalars["String"]>;
  reference_not?: Maybe<Scalars["String"]>;
  reference_in?: Maybe<Array<Scalars["String"]>>;
  reference_not_in?: Maybe<Array<Scalars["String"]>>;
  reference_contains?: Maybe<Scalars["String"]>;
  reference_not_contains?: Maybe<Scalars["String"]>;
  reference_starts_with?: Maybe<Scalars["String"]>;
  reference_not_starts_with?: Maybe<Scalars["String"]>;
  reference_ends_with?: Maybe<Scalars["String"]>;
  reference_not_ends_with?: Maybe<Scalars["String"]>;
  compound?: Maybe<_CompoundFilter>;
};

export type _TargetIsActivatorFilter = {
  AND?: Maybe<Array<_TargetIsActivatorFilter>>;
  OR?: Maybe<Array<_TargetIsActivatorFilter>>;
  activity?: Maybe<Scalars["String"]>;
  activity_not?: Maybe<Scalars["String"]>;
  activity_in?: Maybe<Array<Scalars["String"]>>;
  activity_not_in?: Maybe<Array<Scalars["String"]>>;
  activity_contains?: Maybe<Scalars["String"]>;
  activity_not_contains?: Maybe<Scalars["String"]>;
  activity_starts_with?: Maybe<Scalars["String"]>;
  activity_not_starts_with?: Maybe<Scalars["String"]>;
  activity_ends_with?: Maybe<Scalars["String"]>;
  activity_not_ends_with?: Maybe<Scalars["String"]>;
  moa?: Maybe<Scalars["String"]>;
  moa_not?: Maybe<Scalars["String"]>;
  moa_in?: Maybe<Array<Scalars["String"]>>;
  moa_not_in?: Maybe<Array<Scalars["String"]>>;
  moa_contains?: Maybe<Scalars["String"]>;
  moa_not_contains?: Maybe<Scalars["String"]>;
  moa_starts_with?: Maybe<Scalars["String"]>;
  moa_not_starts_with?: Maybe<Scalars["String"]>;
  moa_ends_with?: Maybe<Scalars["String"]>;
  moa_not_ends_with?: Maybe<Scalars["String"]>;
  reference?: Maybe<Scalars["String"]>;
  reference_not?: Maybe<Scalars["String"]>;
  reference_in?: Maybe<Array<Scalars["String"]>>;
  reference_not_in?: Maybe<Array<Scalars["String"]>>;
  reference_contains?: Maybe<Scalars["String"]>;
  reference_not_contains?: Maybe<Scalars["String"]>;
  reference_starts_with?: Maybe<Scalars["String"]>;
  reference_not_starts_with?: Maybe<Scalars["String"]>;
  reference_ends_with?: Maybe<Scalars["String"]>;
  reference_not_ends_with?: Maybe<Scalars["String"]>;
  compound?: Maybe<_CompoundFilter>;
};

export type _TargetIsBinderFilter = {
  AND?: Maybe<Array<_TargetIsBinderFilter>>;
  OR?: Maybe<Array<_TargetIsBinderFilter>>;
  activity?: Maybe<Scalars["String"]>;
  activity_not?: Maybe<Scalars["String"]>;
  activity_in?: Maybe<Array<Scalars["String"]>>;
  activity_not_in?: Maybe<Array<Scalars["String"]>>;
  activity_contains?: Maybe<Scalars["String"]>;
  activity_not_contains?: Maybe<Scalars["String"]>;
  activity_starts_with?: Maybe<Scalars["String"]>;
  activity_not_starts_with?: Maybe<Scalars["String"]>;
  activity_ends_with?: Maybe<Scalars["String"]>;
  activity_not_ends_with?: Maybe<Scalars["String"]>;
  moa?: Maybe<Scalars["String"]>;
  moa_not?: Maybe<Scalars["String"]>;
  moa_in?: Maybe<Array<Scalars["String"]>>;
  moa_not_in?: Maybe<Array<Scalars["String"]>>;
  moa_contains?: Maybe<Scalars["String"]>;
  moa_not_contains?: Maybe<Scalars["String"]>;
  moa_starts_with?: Maybe<Scalars["String"]>;
  moa_not_starts_with?: Maybe<Scalars["String"]>;
  moa_ends_with?: Maybe<Scalars["String"]>;
  moa_not_ends_with?: Maybe<Scalars["String"]>;
  reference?: Maybe<Scalars["String"]>;
  reference_not?: Maybe<Scalars["String"]>;
  reference_in?: Maybe<Array<Scalars["String"]>>;
  reference_not_in?: Maybe<Array<Scalars["String"]>>;
  reference_contains?: Maybe<Scalars["String"]>;
  reference_not_contains?: Maybe<Scalars["String"]>;
  reference_starts_with?: Maybe<Scalars["String"]>;
  reference_not_starts_with?: Maybe<Scalars["String"]>;
  reference_ends_with?: Maybe<Scalars["String"]>;
  reference_not_ends_with?: Maybe<Scalars["String"]>;
  compound?: Maybe<_CompoundFilter>;
};

export type _CompoundIsInhibitorFilter = {
  AND?: Maybe<Array<_CompoundIsInhibitorFilter>>;
  OR?: Maybe<Array<_CompoundIsInhibitorFilter>>;
  activity?: Maybe<Scalars["String"]>;
  activity_not?: Maybe<Scalars["String"]>;
  activity_in?: Maybe<Array<Scalars["String"]>>;
  activity_not_in?: Maybe<Array<Scalars["String"]>>;
  activity_contains?: Maybe<Scalars["String"]>;
  activity_not_contains?: Maybe<Scalars["String"]>;
  activity_starts_with?: Maybe<Scalars["String"]>;
  activity_not_starts_with?: Maybe<Scalars["String"]>;
  activity_ends_with?: Maybe<Scalars["String"]>;
  activity_not_ends_with?: Maybe<Scalars["String"]>;
  moa?: Maybe<Scalars["String"]>;
  moa_not?: Maybe<Scalars["String"]>;
  moa_in?: Maybe<Array<Scalars["String"]>>;
  moa_not_in?: Maybe<Array<Scalars["String"]>>;
  moa_contains?: Maybe<Scalars["String"]>;
  moa_not_contains?: Maybe<Scalars["String"]>;
  moa_starts_with?: Maybe<Scalars["String"]>;
  moa_not_starts_with?: Maybe<Scalars["String"]>;
  moa_ends_with?: Maybe<Scalars["String"]>;
  moa_not_ends_with?: Maybe<Scalars["String"]>;
  reference?: Maybe<Scalars["String"]>;
  reference_not?: Maybe<Scalars["String"]>;
  reference_in?: Maybe<Array<Scalars["String"]>>;
  reference_not_in?: Maybe<Array<Scalars["String"]>>;
  reference_contains?: Maybe<Scalars["String"]>;
  reference_not_contains?: Maybe<Scalars["String"]>;
  reference_starts_with?: Maybe<Scalars["String"]>;
  reference_not_starts_with?: Maybe<Scalars["String"]>;
  reference_ends_with?: Maybe<Scalars["String"]>;
  reference_not_ends_with?: Maybe<Scalars["String"]>;
  target?: Maybe<_TargetFilter>;
};

export type _CompoundIsAntagonistFilter = {
  AND?: Maybe<Array<_CompoundIsAntagonistFilter>>;
  OR?: Maybe<Array<_CompoundIsAntagonistFilter>>;
  activity?: Maybe<Scalars["String"]>;
  activity_not?: Maybe<Scalars["String"]>;
  activity_in?: Maybe<Array<Scalars["String"]>>;
  activity_not_in?: Maybe<Array<Scalars["String"]>>;
  activity_contains?: Maybe<Scalars["String"]>;
  activity_not_contains?: Maybe<Scalars["String"]>;
  activity_starts_with?: Maybe<Scalars["String"]>;
  activity_not_starts_with?: Maybe<Scalars["String"]>;
  activity_ends_with?: Maybe<Scalars["String"]>;
  activity_not_ends_with?: Maybe<Scalars["String"]>;
  moa?: Maybe<Scalars["String"]>;
  moa_not?: Maybe<Scalars["String"]>;
  moa_in?: Maybe<Array<Scalars["String"]>>;
  moa_not_in?: Maybe<Array<Scalars["String"]>>;
  moa_contains?: Maybe<Scalars["String"]>;
  moa_not_contains?: Maybe<Scalars["String"]>;
  moa_starts_with?: Maybe<Scalars["String"]>;
  moa_not_starts_with?: Maybe<Scalars["String"]>;
  moa_ends_with?: Maybe<Scalars["String"]>;
  moa_not_ends_with?: Maybe<Scalars["String"]>;
  reference?: Maybe<Scalars["String"]>;
  reference_not?: Maybe<Scalars["String"]>;
  reference_in?: Maybe<Array<Scalars["String"]>>;
  reference_not_in?: Maybe<Array<Scalars["String"]>>;
  reference_contains?: Maybe<Scalars["String"]>;
  reference_not_contains?: Maybe<Scalars["String"]>;
  reference_starts_with?: Maybe<Scalars["String"]>;
  reference_not_starts_with?: Maybe<Scalars["String"]>;
  reference_ends_with?: Maybe<Scalars["String"]>;
  reference_not_ends_with?: Maybe<Scalars["String"]>;
  target?: Maybe<_TargetFilter>;
};

export type _CompoundIsAgonistFilter = {
  AND?: Maybe<Array<_CompoundIsAgonistFilter>>;
  OR?: Maybe<Array<_CompoundIsAgonistFilter>>;
  activity?: Maybe<Scalars["String"]>;
  activity_not?: Maybe<Scalars["String"]>;
  activity_in?: Maybe<Array<Scalars["String"]>>;
  activity_not_in?: Maybe<Array<Scalars["String"]>>;
  activity_contains?: Maybe<Scalars["String"]>;
  activity_not_contains?: Maybe<Scalars["String"]>;
  activity_starts_with?: Maybe<Scalars["String"]>;
  activity_not_starts_with?: Maybe<Scalars["String"]>;
  activity_ends_with?: Maybe<Scalars["String"]>;
  activity_not_ends_with?: Maybe<Scalars["String"]>;
  moa?: Maybe<Scalars["String"]>;
  moa_not?: Maybe<Scalars["String"]>;
  moa_in?: Maybe<Array<Scalars["String"]>>;
  moa_not_in?: Maybe<Array<Scalars["String"]>>;
  moa_contains?: Maybe<Scalars["String"]>;
  moa_not_contains?: Maybe<Scalars["String"]>;
  moa_starts_with?: Maybe<Scalars["String"]>;
  moa_not_starts_with?: Maybe<Scalars["String"]>;
  moa_ends_with?: Maybe<Scalars["String"]>;
  moa_not_ends_with?: Maybe<Scalars["String"]>;
  reference?: Maybe<Scalars["String"]>;
  reference_not?: Maybe<Scalars["String"]>;
  reference_in?: Maybe<Array<Scalars["String"]>>;
  reference_not_in?: Maybe<Array<Scalars["String"]>>;
  reference_contains?: Maybe<Scalars["String"]>;
  reference_not_contains?: Maybe<Scalars["String"]>;
  reference_starts_with?: Maybe<Scalars["String"]>;
  reference_not_starts_with?: Maybe<Scalars["String"]>;
  reference_ends_with?: Maybe<Scalars["String"]>;
  reference_not_ends_with?: Maybe<Scalars["String"]>;
  target?: Maybe<_TargetFilter>;
};

export type _CompoundIsActivatorFilter = {
  AND?: Maybe<Array<_CompoundIsActivatorFilter>>;
  OR?: Maybe<Array<_CompoundIsActivatorFilter>>;
  activity?: Maybe<Scalars["String"]>;
  activity_not?: Maybe<Scalars["String"]>;
  activity_in?: Maybe<Array<Scalars["String"]>>;
  activity_not_in?: Maybe<Array<Scalars["String"]>>;
  activity_contains?: Maybe<Scalars["String"]>;
  activity_not_contains?: Maybe<Scalars["String"]>;
  activity_starts_with?: Maybe<Scalars["String"]>;
  activity_not_starts_with?: Maybe<Scalars["String"]>;
  activity_ends_with?: Maybe<Scalars["String"]>;
  activity_not_ends_with?: Maybe<Scalars["String"]>;
  moa?: Maybe<Scalars["String"]>;
  moa_not?: Maybe<Scalars["String"]>;
  moa_in?: Maybe<Array<Scalars["String"]>>;
  moa_not_in?: Maybe<Array<Scalars["String"]>>;
  moa_contains?: Maybe<Scalars["String"]>;
  moa_not_contains?: Maybe<Scalars["String"]>;
  moa_starts_with?: Maybe<Scalars["String"]>;
  moa_not_starts_with?: Maybe<Scalars["String"]>;
  moa_ends_with?: Maybe<Scalars["String"]>;
  moa_not_ends_with?: Maybe<Scalars["String"]>;
  reference?: Maybe<Scalars["String"]>;
  reference_not?: Maybe<Scalars["String"]>;
  reference_in?: Maybe<Array<Scalars["String"]>>;
  reference_not_in?: Maybe<Array<Scalars["String"]>>;
  reference_contains?: Maybe<Scalars["String"]>;
  reference_not_contains?: Maybe<Scalars["String"]>;
  reference_starts_with?: Maybe<Scalars["String"]>;
  reference_not_starts_with?: Maybe<Scalars["String"]>;
  reference_ends_with?: Maybe<Scalars["String"]>;
  reference_not_ends_with?: Maybe<Scalars["String"]>;
  target?: Maybe<_TargetFilter>;
};

export type _CompoundIsBinderFilter = {
  AND?: Maybe<Array<_CompoundIsBinderFilter>>;
  OR?: Maybe<Array<_CompoundIsBinderFilter>>;
  activity?: Maybe<Scalars["String"]>;
  activity_not?: Maybe<Scalars["String"]>;
  activity_in?: Maybe<Array<Scalars["String"]>>;
  activity_not_in?: Maybe<Array<Scalars["String"]>>;
  activity_contains?: Maybe<Scalars["String"]>;
  activity_not_contains?: Maybe<Scalars["String"]>;
  activity_starts_with?: Maybe<Scalars["String"]>;
  activity_not_starts_with?: Maybe<Scalars["String"]>;
  activity_ends_with?: Maybe<Scalars["String"]>;
  activity_not_ends_with?: Maybe<Scalars["String"]>;
  moa?: Maybe<Scalars["String"]>;
  moa_not?: Maybe<Scalars["String"]>;
  moa_in?: Maybe<Array<Scalars["String"]>>;
  moa_not_in?: Maybe<Array<Scalars["String"]>>;
  moa_contains?: Maybe<Scalars["String"]>;
  moa_not_contains?: Maybe<Scalars["String"]>;
  moa_starts_with?: Maybe<Scalars["String"]>;
  moa_not_starts_with?: Maybe<Scalars["String"]>;
  moa_ends_with?: Maybe<Scalars["String"]>;
  moa_not_ends_with?: Maybe<Scalars["String"]>;
  reference?: Maybe<Scalars["String"]>;
  reference_not?: Maybe<Scalars["String"]>;
  reference_in?: Maybe<Array<Scalars["String"]>>;
  reference_not_in?: Maybe<Array<Scalars["String"]>>;
  reference_contains?: Maybe<Scalars["String"]>;
  reference_not_contains?: Maybe<Scalars["String"]>;
  reference_starts_with?: Maybe<Scalars["String"]>;
  reference_not_starts_with?: Maybe<Scalars["String"]>;
  reference_ends_with?: Maybe<Scalars["String"]>;
  reference_not_ends_with?: Maybe<Scalars["String"]>;
  target?: Maybe<_TargetFilter>;
};

export type Compound = {
  __typename?: "Compound";
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  source: Scalars["String"];
  company?: Maybe<Scalars["String"]>;
  ttd_id?: Maybe<Scalars["ID"]>;
  chebi_id?: Maybe<Scalars["ID"]>;
  chemspider_id?: Maybe<Scalars["Float"]>;
  drugbank_id?: Maybe<Scalars["ID"]>;
  kegg_drug_id?: Maybe<Scalars["ID"]>;
  kegg_id?: Maybe<Scalars["ID"]>;
  pubchem_id?: Maybe<Scalars["ID"]>;
  unii?: Maybe<Scalars["ID"]>;
  inchi?: Maybe<Scalars["ID"]>;
  inchikey?: Maybe<Scalars["ID"]>;
  cas_number?: Maybe<Scalars["String"]>;
  accession_numbers?: Maybe<Scalars["String"]>;
  therapeutic_class?: Maybe<Scalars["String"]>;
  drug_class?: Maybe<Scalars["String"]>;
  compound_class?: Maybe<Scalars["String"]>;
  groups?: Maybe<Scalars["String"]>;
  categories?: Maybe<Scalars["String"]>;
  atc_codes?: Maybe<Scalars["String"]>;
  source_url: Scalars["String"];
  drug_formula?: Maybe<Scalars["String"]>;
  drug_smiles?: Maybe<Scalars["String"]>;
  drug_type?: Maybe<Scalars["String"]>;
  highest_stat?: Maybe<Scalars["String"]>;
  indication?: Maybe<Scalars["String"]>;
  mechanism?: Maybe<Scalars["String"]>;
  synonyms?: Maybe<Scalars["String"]>;
  targets?: Maybe<Array<Maybe<_CompoundTargets>>>;
  isInhibitor?: Maybe<Array<Maybe<_CompoundIsInhibitor>>>;
  isAntagonist?: Maybe<Array<Maybe<_CompoundIsAntagonist>>>;
  isAgonist?: Maybe<Array<Maybe<_CompoundIsAgonist>>>;
  isActivator?: Maybe<Array<Maybe<_CompoundIsActivator>>>;
  isBinder?: Maybe<Array<Maybe<_CompoundIsBinder>>>;
};

export type CompoundTargetsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_TargetsOrdering>>>;
  filter?: Maybe<_CompoundTargetsFilter>;
};

export type CompoundIsInhibitorArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_IsInhibitorOrdering>>>;
  filter?: Maybe<_CompoundIsInhibitorFilter>;
};

export type CompoundIsAntagonistArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_IsAntagonistOrdering>>>;
  filter?: Maybe<_CompoundIsAntagonistFilter>;
};

export type CompoundIsAgonistArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_IsAgonistOrdering>>>;
  filter?: Maybe<_CompoundIsAgonistFilter>;
};

export type CompoundIsActivatorArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_IsActivatorOrdering>>>;
  filter?: Maybe<_CompoundIsActivatorFilter>;
};

export type CompoundIsBinderArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_IsBinderOrdering>>>;
  filter?: Maybe<_CompoundIsBinderFilter>;
};

export enum _TargetsOrdering {
  ActivityAsc = "activity_asc",
  ActivityDesc = "activity_desc",
  MoaAsc = "moa_asc",
  MoaDesc = "moa_desc",
  ReferenceAsc = "reference_asc",
  ReferenceDesc = "reference_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _CompoundTargets = {
  __typename?: "_CompoundTargets";
  activity: Scalars["String"];
  moa?: Maybe<Scalars["String"]>;
  reference: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Target node this TARGETS [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  target?: Maybe<Target>;
};

export type Target = {
  __typename?: "Target";
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars["String"]>;
  ttd_id: Scalars["ID"];
  uniprot_id?: Maybe<Scalars["ID"]>;
  name: Scalars["String"];
  type: Scalars["String"];
  geneName?: Maybe<Scalars["String"]>;
  function?: Maybe<Scalars["String"]>;
  sequence?: Maybe<Scalars["String"]>;
  license: Scalars["String"];
  source: Scalars["String"];
  ec_number?: Maybe<Scalars["String"]>;
  bio_class?: Maybe<Scalars["String"]>;
  synonyms?: Maybe<Scalars["String"]>;
  targets?: Maybe<Array<Maybe<_TargetTargets>>>;
  inhibitors?: Maybe<Array<Maybe<_TargetInhibitors>>>;
  antagonists?: Maybe<Array<Maybe<_TargetAntagonists>>>;
  agonists?: Maybe<Array<Maybe<_TargetAgonists>>>;
  activators?: Maybe<Array<Maybe<_TargetActivators>>>;
  binders?: Maybe<Array<Maybe<_TargetBinders>>>;
};

export type TargetTargetsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_TargetsOrdering>>>;
  filter?: Maybe<_TargetTargetsFilter>;
};

export type TargetInhibitorsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_IsInhibitorOrdering>>>;
  filter?: Maybe<_TargetIsInhibitorFilter>;
};

export type TargetAntagonistsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_IsAntagonistOrdering>>>;
  filter?: Maybe<_TargetIsAntagonistFilter>;
};

export type TargetAgonistsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_IsAgonistOrdering>>>;
  filter?: Maybe<_TargetIsAgonistFilter>;
};

export type TargetActivatorsArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_IsActivatorOrdering>>>;
  filter?: Maybe<_TargetIsActivatorFilter>;
};

export type TargetBindersArgs = {
  first?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Maybe<_IsBinderOrdering>>>;
  filter?: Maybe<_TargetIsBinderFilter>;
};

export type _TargetTargets = {
  __typename?: "_TargetTargets";
  activity: Scalars["String"];
  moa?: Maybe<Scalars["String"]>;
  reference: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Compound node this TARGETS [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  compound?: Maybe<Compound>;
};

export enum _IsInhibitorOrdering {
  ActivityAsc = "activity_asc",
  ActivityDesc = "activity_desc",
  MoaAsc = "moa_asc",
  MoaDesc = "moa_desc",
  ReferenceAsc = "reference_asc",
  ReferenceDesc = "reference_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _TargetInhibitors = {
  __typename?: "_TargetInhibitors";
  activity: Scalars["String"];
  moa: Scalars["String"];
  reference: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Compound node this IS_INHIBITOR [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  compound?: Maybe<Compound>;
};

export enum _IsAntagonistOrdering {
  ActivityAsc = "activity_asc",
  ActivityDesc = "activity_desc",
  MoaAsc = "moa_asc",
  MoaDesc = "moa_desc",
  ReferenceAsc = "reference_asc",
  ReferenceDesc = "reference_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _TargetAntagonists = {
  __typename?: "_TargetAntagonists";
  activity: Scalars["String"];
  moa: Scalars["String"];
  reference: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Compound node this IS_ANTAGONIST [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  compound?: Maybe<Compound>;
};

export enum _IsAgonistOrdering {
  ActivityAsc = "activity_asc",
  ActivityDesc = "activity_desc",
  MoaAsc = "moa_asc",
  MoaDesc = "moa_desc",
  ReferenceAsc = "reference_asc",
  ReferenceDesc = "reference_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _TargetAgonists = {
  __typename?: "_TargetAgonists";
  activity: Scalars["String"];
  moa: Scalars["String"];
  reference: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Compound node this IS_AGONIST [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  compound?: Maybe<Compound>;
};

export enum _IsActivatorOrdering {
  ActivityAsc = "activity_asc",
  ActivityDesc = "activity_desc",
  MoaAsc = "moa_asc",
  MoaDesc = "moa_desc",
  ReferenceAsc = "reference_asc",
  ReferenceDesc = "reference_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _TargetActivators = {
  __typename?: "_TargetActivators";
  activity: Scalars["String"];
  moa: Scalars["String"];
  reference: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Compound node this IS_ACTIVATOR [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  compound?: Maybe<Compound>;
};

export enum _IsBinderOrdering {
  ActivityAsc = "activity_asc",
  ActivityDesc = "activity_desc",
  MoaAsc = "moa_asc",
  MoaDesc = "moa_desc",
  ReferenceAsc = "reference_asc",
  ReferenceDesc = "reference_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type _TargetBinders = {
  __typename?: "_TargetBinders";
  activity: Scalars["String"];
  moa: Scalars["String"];
  reference: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Compound node this IS_BINDER [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  compound?: Maybe<Compound>;
};

export type _CompoundIsInhibitor = {
  __typename?: "_CompoundIsInhibitor";
  activity: Scalars["String"];
  moa: Scalars["String"];
  reference: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Target node this IS_INHIBITOR [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  target?: Maybe<Target>;
};

export type _CompoundIsAntagonist = {
  __typename?: "_CompoundIsAntagonist";
  activity: Scalars["String"];
  moa: Scalars["String"];
  reference: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Target node this IS_ANTAGONIST [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  target?: Maybe<Target>;
};

export type _CompoundIsAgonist = {
  __typename?: "_CompoundIsAgonist";
  activity: Scalars["String"];
  moa: Scalars["String"];
  reference: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Target node this IS_AGONIST [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  target?: Maybe<Target>;
};

export type _CompoundIsActivator = {
  __typename?: "_CompoundIsActivator";
  activity: Scalars["String"];
  moa: Scalars["String"];
  reference: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Target node this IS_ACTIVATOR [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  target?: Maybe<Target>;
};

export type _CompoundIsBinder = {
  __typename?: "_CompoundIsBinder";
  activity: Scalars["String"];
  moa: Scalars["String"];
  reference: Scalars["String"];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars["String"]>;
  /** Field for the Target node this IS_BINDER [relationship](https://grandstack.io/docs/graphql-relationship-types) is going to. */
  target?: Maybe<Target>;
};

export enum _TargetOrdering {
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
  TtdIdAsc = "ttd_id_asc",
  TtdIdDesc = "ttd_id_desc",
  UniprotIdAsc = "uniprot_id_asc",
  UniprotIdDesc = "uniprot_id_desc",
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  TypeAsc = "type_asc",
  TypeDesc = "type_desc",
  GeneNameAsc = "geneName_asc",
  GeneNameDesc = "geneName_desc",
  FunctionAsc = "function_asc",
  FunctionDesc = "function_desc",
  SequenceAsc = "sequence_asc",
  SequenceDesc = "sequence_desc",
  LicenseAsc = "license_asc",
  LicenseDesc = "license_desc",
  SourceAsc = "source_asc",
  SourceDesc = "source_desc",
  EcNumberAsc = "ec_number_asc",
  EcNumberDesc = "ec_number_desc",
  BioClassAsc = "bio_class_asc",
  BioClassDesc = "bio_class_desc",
  SynonymsAsc = "synonyms_asc",
  SynonymsDesc = "synonyms_desc",
}

export enum _NonPatentLiteratureCitationOrdering {
  HashIdAsc = "_hash_id_asc",
  HashIdDesc = "_hash_id_desc",
  CitTextAsc = "cit_text_asc",
  CitTextDesc = "cit_text_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export enum _CooperativePatentClassificationOrdering {
  ClassificationCpcAsc = "classification_cpc_asc",
  ClassificationCpcDesc = "classification_cpc_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export enum _InternationalPatentClassificationOrdering {
  ClassificationIpcAsc = "classification_ipc_asc",
  ClassificationIpcDesc = "classification_ipc_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export enum _UsPatentClassificationOrdering {
  ClassificationUsAsc = "classification_us_asc",
  ClassificationUsDesc = "classification_us_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export enum _EntityOrdering {
  NameAsc = "name_asc",
  NameDesc = "name_desc",
  IdAsc = "_id_asc",
  IdDesc = "_id_desc",
}

export type IsA = {
  __typename?: "IsA";
  subTerm: GoTerm;
  source: Scalars["String"];
  term: GoTerm;
};

export type DiseaseIsA = {
  __typename?: "DiseaseIsA";
  isDisease: Disease;
  position: Scalars["Int"];
  disease: Disease;
};

export type AssociatesDaG = {
  __typename?: "AssociatesDaG";
  disease: Disease;
  high_confidence: Scalars["Int"];
  locus: Scalars["Int"];
  primary: Scalars["Int"];
  status: Scalars["String"];
  gene: Gene;
};

export type LocalizesDla = {
  __typename?: "LocalizesDla";
  disease: Disease;
  cooccurrence: Scalars["Int"];
  expected: Scalars["Float"];
  p_fisher: Scalars["Float"];
  anatomy: Anatomy;
};

export type GeneCodes = {
  __typename?: "GeneCodes";
  gene: Gene;
  source: Scalars["String"];
  taxid?: Maybe<Scalars["String"]>;
  transcript: Transcript;
};

export type MapsTranscript = {
  __typename?: "MapsTranscript";
  mappedBy: Transcript;
  source: Scalars["String"];
  status?: Maybe<Scalars["String"]>;
  transcript: Transcript;
};

export type ProteinCodes = {
  __typename?: "ProteinCodes";
  transcript: Transcript;
  source: Scalars["String"];
  taxid?: Maybe<Scalars["String"]>;
  protein: Protein;
};

export type Expressed = {
  __typename?: "Expressed";
  gene: Gene;
  val?: Maybe<Scalars["String"]>;
  valToString?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["Float"]>;
  tissue: GtexDetailedTissue;
};

export type Member = {
  __typename?: "Member";
  gene: Gene;
  evidence: Scalars["String"];
  source: Scalars["String"];
  pathway: Pathway;
};

export type Child = {
  __typename?: "Child";
  child: Pathway;
  source: Scalars["String"];
  parent: Pathway;
};

export type MapsGene = {
  __typename?: "MapsGene";
  mappedBy: Gene;
  source: Scalars["String"];
  gene: Gene;
};

export type MapsGeneSymbol = {
  __typename?: "MapsGeneSymbol";
  mappedBy: Gene;
  source: Scalars["String"];
  symbol: GeneSymbol;
};

export type MapsGeneSymbolsWithOmitedSpecialChar = {
  __typename?: "MapsGeneSymbolsWithOmitedSpecialChar";
  mappedBy: Gene;
  source: Scalars["String"];
  symbol: OmitSpecialChar;
};

export type MapsGeneSymbolsWithOmitLength = {
  __typename?: "MapsGeneSymbolsWithOmitLength";
  mappedBy: Gene;
  source: Scalars["String"];
  symbol: OmitLength;
};

export type MapsGeneSymbolsWithOmitWord = {
  __typename?: "MapsGeneSymbolsWithOmitWord";
  mappedBy: Gene;
  source: Scalars["String"];
  symbol: OmitWord;
};

export type Synonym = {
  __typename?: "Synonym";
  synonymOf?: Maybe<GeneSymbol>;
  source: Scalars["String"];
  synonym?: Maybe<GeneSymbol>;
};

export type SynonymSpecialCharOmitted = {
  __typename?: "SynonymSpecialCharOmitted";
  synonymOf?: Maybe<OmitSpecialChar>;
  source: Scalars["String"];
  synonym?: Maybe<GeneSymbol>;
};

export type SynonymLengthOmitted = {
  __typename?: "SynonymLengthOmitted";
  synonymOf?: Maybe<OmitLength>;
  source: Scalars["String"];
  synonym?: Maybe<GeneSymbol>;
};

export type SynonymWordOmitted = {
  __typename?: "SynonymWordOmitted";
  synonymOf?: Maybe<OmitWord>;
  source: Scalars["String"];
  synonym?: Maybe<GeneSymbol>;
};

export type Association = {
  __typename?: "Association";
  protein: Protein;
  evidence: Scalars["String"];
  qualifier?: Maybe<Scalars["String"]>;
  term: GoTerm;
};

export type MapsProtein = {
  __typename?: "MapsProtein";
  mappedBy: Protein;
  source: Scalars["String"];
  taxid?: Maybe<Scalars["String"]>;
  protein: Protein;
};

export type PartOf = {
  __typename?: "PartOf";
  province: Province;
  source: Scalars["String"];
  country: Country;
};

export type DailyReported = {
  __typename?: "DailyReported";
  province: Province;
  source: Scalars["String"];
  report: DailyReport;
};

export type LatestReported = {
  __typename?: "LatestReported";
  province: Province;
  source: Scalars["String"];
  report: Latest;
};

export type CurrentTotal = {
  __typename?: "CurrentTotal";
  country: Country;
  count: Scalars["Int"];
  ageGroup: AgeGroup;
};

export type CurrentMale = {
  __typename?: "CurrentMale";
  country: Country;
  count: Scalars["Int"];
  ageGroup: AgeGroup;
};

export type CurrentFemale = {
  __typename?: "CurrentFemale";
  country: Country;
  count: Scalars["Int"];
  ageGroup: AgeGroup;
};

export type Targets = {
  __typename?: "Targets";
  compound: Compound;
  activity: Scalars["String"];
  moa?: Maybe<Scalars["String"]>;
  reference: Scalars["String"];
  target: Target;
};

export type IsInhibitor = {
  __typename?: "IsInhibitor";
  compound: Compound;
  activity: Scalars["String"];
  moa: Scalars["String"];
  reference: Scalars["String"];
  target: Target;
};

export type IsAntagonist = {
  __typename?: "IsAntagonist";
  compound: Compound;
  activity: Scalars["String"];
  moa: Scalars["String"];
  reference: Scalars["String"];
  target: Target;
};

export type IsAgonist = {
  __typename?: "IsAgonist";
  compound: Compound;
  activity: Scalars["String"];
  moa: Scalars["String"];
  reference: Scalars["String"];
  target: Target;
};

export type IsActivator = {
  __typename?: "IsActivator";
  compound: Compound;
  activity: Scalars["String"];
  moa: Scalars["String"];
  reference: Scalars["String"];
  target: Target;
};

export type IsBinder = {
  __typename?: "IsBinder";
  compound: Compound;
  activity: Scalars["String"];
  moa: Scalars["String"];
  reference: Scalars["String"];
  target: Target;
};

export type FromAbstractMentions = {
  __typename?: "FromAbstractMentions";
  fromAbstract: FromAbstract;
  score: Scalars["Float"];
  geneSymbol: GeneSymbol;
};

export type FromBodyTextMentions = {
  __typename?: "FromBodyTextMentions";
  fromBodyText: FromBodyText;
  score: Scalars["Float"];
  geneSymbol: GeneSymbol;
};

export type HasAuthor = {
  __typename?: "HasAuthor";
  collection: AuthorCollection;
  position: Scalars["Int"];
  author: Author;
};

export type HasPaperId = {
  __typename?: "HasPaperId";
  paper: Paper;
  position: Scalars["Int"];
  id: PaperId;
};

export type HasReference = {
  __typename?: "HasReference";
  collection: ReferenceCollection;
  position: Scalars["Int"];
  reference: Reference;
};

export type ReferenceHasPaperid = {
  __typename?: "ReferenceHasPaperid";
  reference: Reference;
  position: Scalars["Int"];
  id: PaperId;
};

export type HasAbstract = {
  __typename?: "HasAbstract";
  collection: AbstractCollection;
  position: Scalars["Int"];
  abstract: Abstract;
};

export type AbstractMentions = {
  __typename?: "AbstractMentions";
  abstract: Abstract;
  count: Scalars["Int"];
  namedEntity: NamedEntity;
};

export type AbstractHasCitation = {
  __typename?: "AbstractHasCitation";
  abstract: Abstract;
  position: Scalars["Int"];
  citation: Citation;
};

export type HasCitation = {
  __typename?: "HasCitation";
  bodyText: BodyText;
  position: Scalars["Int"];
  citation: Citation;
};

export type HasBodyText = {
  __typename?: "HasBodyText";
  collection: BodyTextCollection;
  position: Scalars["Int"];
  bodyText: BodyText;
};

export type PatentDescriptionMentionsGeneSymbol = {
  __typename?: "PatentDescriptionMentionsGeneSymbol";
  description: FromPatentDescription;
  score: Scalars["Float"];
  symbol: GeneSymbol;
};

export type PatentTitleMentionsGeneSymbol = {
  __typename?: "PatentTitleMentionsGeneSymbol";
  title: FromPatentTitle;
  score: Scalars["Float"];
  symbol: GeneSymbol;
};

export type PatentAbstractMentionsGeneSymbol = {
  __typename?: "PatentAbstractMentionsGeneSymbol";
  abstract: FromPatentAbstract;
  score: Scalars["Float"];
  symbol: GeneSymbol;
};

export type PatentClaimMentionsGeneSymbol = {
  __typename?: "PatentClaimMentionsGeneSymbol";
  claim: FromPatentClaim;
  score: Scalars["Float"];
  symbol: GeneSymbol;
};

export type HasLensId = {
  __typename?: "HasLensId";
  patentFamily: PatentFamily;
  position: Scalars["Int"];
  id: LensId;
};

export type HasPatentLiteratureCitation = {
  __typename?: "HasPatentLiteratureCitation";
  collection: PatentCitationCollection;
  position: Scalars["Int"];
  citation: PatentLiteratureCitation;
};

export type HasNonPatentLiteratureCitation = {
  __typename?: "HasNonPatentLiteratureCitation";
  collection: PatentCitationCollection;
  position: Scalars["Int"];
  citation: NonPatentLiteratureCitation;
};

export type HasCooperativePatentClassification = {
  __typename?: "HasCooperativePatentClassification";
  collection: PatentClassificationCollection;
  position: Scalars["Int"];
  classification: CooperativePatentClassification;
};

export type HasInternationalPatentClassification = {
  __typename?: "HasInternationalPatentClassification";
  collection: PatentClassificationCollection;
  position: Scalars["Int"];
  classification: InternationalPatentClassification;
};

export type HasUsPatentClassification = {
  __typename?: "HasUSPatentClassification";
  collection: PatentClassificationCollection;
  position: Scalars["Int"];
  classification: UsPatentClassification;
};

export type HasPatentAbstract = {
  __typename?: "HasPatentAbstract";
  patent: Patent;
  position: Scalars["Int"];
  abstract: PatentAbstract;
};

export type Inventor = {
  __typename?: "Inventor";
  patent: Patent;
  position: Scalars["Int"];
  entity: Entity;
};

export type Applicant = {
  __typename?: "Applicant";
  patent: Patent;
  position: Scalars["Int"];
  entity: Entity;
};

export type HasPatentTitle = {
  __typename?: "HasPatentTitle";
  patent: Patent;
  position: Scalars["Int"];
  title: PatentTitle;
};

export type HasPatentClaim = {
  __typename?: "HasPatentClaim";
  patent: Patent;
  position: Scalars["Int"];
  claim: PatentClaim;
};

export type HasPatentDescription = {
  __typename?: "HasPatentDescription";
  patent: Patent;
  position: Scalars["Int"];
  description: PatentDescription;
};

export type Owner = {
  __typename?: "Owner";
  patent: Patent;
  position: Scalars["Int"];
  entity: Entity;
};

/** Generated Time input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jTimeInput = {
  hour?: Maybe<Scalars["Int"]>;
  minute?: Maybe<Scalars["Int"]>;
  second?: Maybe<Scalars["Int"]>;
  millisecond?: Maybe<Scalars["Int"]>;
  microsecond?: Maybe<Scalars["Int"]>;
  nanosecond?: Maybe<Scalars["Int"]>;
  timezone?: Maybe<Scalars["String"]>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) Time value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/time/#functions-time-create-string). */
  formatted?: Maybe<Scalars["String"]>;
};

/** Generated Time object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jTime = {
  __typename?: "_Neo4jTime";
  hour?: Maybe<Scalars["Int"]>;
  minute?: Maybe<Scalars["Int"]>;
  second?: Maybe<Scalars["Int"]>;
  millisecond?: Maybe<Scalars["Int"]>;
  microsecond?: Maybe<Scalars["Int"]>;
  nanosecond?: Maybe<Scalars["Int"]>;
  timezone?: Maybe<Scalars["String"]>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) Time value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted?: Maybe<Scalars["String"]>;
};

/** Generated Date input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jDateInput = {
  year?: Maybe<Scalars["Int"]>;
  month?: Maybe<Scalars["Int"]>;
  day?: Maybe<Scalars["Int"]>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) Date value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/date/#functions-date-create-string). */
  formatted?: Maybe<Scalars["String"]>;
};

/** Generated Date object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jDate = {
  __typename?: "_Neo4jDate";
  year?: Maybe<Scalars["Int"]>;
  month?: Maybe<Scalars["Int"]>;
  day?: Maybe<Scalars["Int"]>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) Date value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted?: Maybe<Scalars["String"]>;
};

/** Generated DateTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jDateTimeInput = {
  year?: Maybe<Scalars["Int"]>;
  month?: Maybe<Scalars["Int"]>;
  day?: Maybe<Scalars["Int"]>;
  hour?: Maybe<Scalars["Int"]>;
  minute?: Maybe<Scalars["Int"]>;
  second?: Maybe<Scalars["Int"]>;
  millisecond?: Maybe<Scalars["Int"]>;
  microsecond?: Maybe<Scalars["Int"]>;
  nanosecond?: Maybe<Scalars["Int"]>;
  timezone?: Maybe<Scalars["String"]>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) DateTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/datetime/#functions-datetime-create-string). */
  formatted?: Maybe<Scalars["String"]>;
};

/** Generated DateTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jDateTime = {
  __typename?: "_Neo4jDateTime";
  year?: Maybe<Scalars["Int"]>;
  month?: Maybe<Scalars["Int"]>;
  day?: Maybe<Scalars["Int"]>;
  hour?: Maybe<Scalars["Int"]>;
  minute?: Maybe<Scalars["Int"]>;
  second?: Maybe<Scalars["Int"]>;
  millisecond?: Maybe<Scalars["Int"]>;
  microsecond?: Maybe<Scalars["Int"]>;
  nanosecond?: Maybe<Scalars["Int"]>;
  timezone?: Maybe<Scalars["String"]>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) DateTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted?: Maybe<Scalars["String"]>;
};

/** Generated LocalTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jLocalTimeInput = {
  hour?: Maybe<Scalars["Int"]>;
  minute?: Maybe<Scalars["Int"]>;
  second?: Maybe<Scalars["Int"]>;
  millisecond?: Maybe<Scalars["Int"]>;
  microsecond?: Maybe<Scalars["Int"]>;
  nanosecond?: Maybe<Scalars["Int"]>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) LocalTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/localtime/#functions-localtime-create-string). */
  formatted?: Maybe<Scalars["String"]>;
};

/** Generated LocalTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jLocalTime = {
  __typename?: "_Neo4jLocalTime";
  hour?: Maybe<Scalars["Int"]>;
  minute?: Maybe<Scalars["Int"]>;
  second?: Maybe<Scalars["Int"]>;
  millisecond?: Maybe<Scalars["Int"]>;
  microsecond?: Maybe<Scalars["Int"]>;
  nanosecond?: Maybe<Scalars["Int"]>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) LocalTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted?: Maybe<Scalars["String"]>;
};

export type _Neo4jPointDistanceFilter = {
  point: _Neo4jPointInput;
  distance: Scalars["Float"];
};

/** Generated Point input object for Neo4j [Spatial field arguments](https://grandstack.io/docs/graphql-spatial-types/#point-query-arguments). */
export type _Neo4jPointInput = {
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  z?: Maybe<Scalars["Float"]>;
  longitude?: Maybe<Scalars["Float"]>;
  latitude?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  crs?: Maybe<Scalars["String"]>;
  srid?: Maybe<Scalars["Int"]>;
};

/** Generated Point object type for Neo4j [Spatial fields](https://grandstack.io/docs/graphql-spatial-types#using-point-in-queries). */
export type _Neo4jPoint = {
  __typename?: "_Neo4jPoint";
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
  z?: Maybe<Scalars["Float"]>;
  longitude?: Maybe<Scalars["Float"]>;
  latitude?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  crs?: Maybe<Scalars["String"]>;
  srid?: Maybe<Scalars["Int"]>;
};

export enum _RelationDirections {
  In = "IN",
  Out = "OUT",
}
