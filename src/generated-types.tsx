import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import * as React from 'react'
import * as ApolloReactComponents from '@apollo/client/react/components'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any
  Hex: any
  /** Raw JSON value */
  Json: any
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any
  RGBAHue: any
  RGBATransparency: any
  /** Slate-compatible RichText AST */
  RichTextAST: any
}

export type Aggregate = {
  __typename?: 'Aggregate'
  count: Scalars['Int']
}

export type Article = Node & {
  __typename?: 'Article'
  /** System stage field */
  stage: Stage
  /** Get the document in other stages */
  documentInStages: Array<Article>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** List of Article versions */
  history: Array<Version>
}

export type ArticleDocumentInStagesArgs = {
  stages?: Array<Stage>
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
}

export type ArticleHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<Stage>
}

/** A connection to a list of items. */
export type ArticleConnection = {
  __typename?: 'ArticleConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<ArticleEdge>
  aggregate: Aggregate
}

export type ArticleCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

/** An edge in a connection. */
export type ArticleEdge = {
  __typename?: 'ArticleEdge'
  /** The item at the end of the edge. */
  node: Article
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Identifies documents */
export type ArticleManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ArticleWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ArticleWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ArticleWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
}

export enum ArticleOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC'
}

export type ArticleUpdateInput = {
  /** No fields in update input */
  _?: Maybe<Scalars['String']>
}

export type ArticleUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>
}

export type ArticleUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: ArticleWhereInput
  /** Update many input */
  data: ArticleUpdateManyInput
}

export type ArticleUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ArticleWhereUniqueInput
  /** Document to update */
  data: ArticleUpdateInput
}

export type ArticleUpsertInput = {
  /** Create document if it didn't exist */
  create: ArticleCreateInput
  /** Update document if it exists */
  update: ArticleUpdateInput
}

export type ArticleUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: ArticleWhereUniqueInput
  /** Upsert data */
  data: ArticleUpsertInput
}

/** Identifies documents */
export type ArticleWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ArticleWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ArticleWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ArticleWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
}

/** References Article record uniquely */
export type ArticleWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset'
  /** System stage field */
  stage: Stage
  /** System Locale field */
  locale: Locale
  /** Get the other localizations for this document */
  localizations: Array<Asset>
  /** Get the document in other stages */
  documentInStages: Array<Asset>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** The file handle */
  handle: Scalars['String']
  /** The file name */
  fileName: Scalars['String']
  /** The height of the file */
  height?: Maybe<Scalars['Float']>
  /** The file width */
  width?: Maybe<Scalars['Float']>
  /** The file size */
  size?: Maybe<Scalars['Float']>
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>
  /** List of Asset versions */
  history: Array<Version>
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']
}

/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>
  includeCurrent?: Scalars['Boolean']
}

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
}

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<Stage>
}

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>
}

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<AssetEdge>
  aggregate: Aggregate
}

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  fileName: Scalars['String']
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>
}

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  handle: Scalars['String']
  fileName: Scalars['String']
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
}

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput
  locale: Locale
}

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>
}

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge'
  /** The item at the end of the edge. */
  node: Asset
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
}

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>
  document?: Maybe<DocumentTransformationInput>
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>
}

export type AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>
  fileName?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>
}

export type AssetUpdateLocalizationDataInput = {
  handle?: Maybe<Scalars['String']>
  fileName?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
}

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput
  locale: Locale
}

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>
}

export type AssetUpdateManyInput = {
  fileName?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>
}

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
}

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput
  locale: Locale
}

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>
}

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput
  /** Update many input */
  data: AssetUpdateManyInput
}

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput
  /** Document to update */
  data: AssetUpdateInput
}

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput
  /** Update document if it exists */
  update: AssetUpdateInput
}

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput
  create: AssetCreateLocalizationDataInput
  locale: Locale
}

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput
  /** Upsert data */
  data: AssetUpsertInput
}

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  handle?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>
  fileName?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>
  mimeType?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>
}

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export type BatchPayload = {
  __typename?: 'BatchPayload'
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color'
  hex: Scalars['Hex']
  rgba: Rgba
  css: Scalars['String']
}

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>
  rgba?: Maybe<RgbaInput>
}

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>
}

export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Pdf = 'pdf',
  Html = 'html',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: Maybe<DocumentFileTypes>
}

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>
}

export type DocumentVersion = {
  __typename?: 'DocumentVersion'
  id: Scalars['ID']
  stage: Stage
  revision: Scalars['Int']
  createdAt: Scalars['DateTime']
  data?: Maybe<Scalars['Json']>
}

export type Form = Node & {
  __typename?: 'Form'
  /** System stage field */
  stage: Stage
  /** Get the document in other stages */
  documentInStages: Array<Form>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  page?: Maybe<Page>
  fields: Array<FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxes>
  submissions: Array<Submission>
  /** List of Form versions */
  history: Array<Version>
}

export type FormDocumentInStagesArgs = {
  stages?: Array<Stage>
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
}

export type FormPageArgs = {
  locales?: Maybe<Array<Locale>>
}

export type FormFieldsArgs = {
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Maybe<Array<Locale>>
}

export type FormSubmissionsArgs = {
  where?: Maybe<SubmissionWhereInput>
  orderBy?: Maybe<SubmissionOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Maybe<Array<Locale>>
}

export type FormHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<Stage>
}

export type FormCheckbox = Node & {
  __typename?: 'FormCheckbox'
  /** System stage field */
  stage: Stage
  /** Get the document in other stages */
  documentInStages: Array<FormCheckbox>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  form?: Maybe<Form>
  /** List of FormCheckbox versions */
  history: Array<Version>
}

export type FormCheckboxDocumentInStagesArgs = {
  stages?: Array<Stage>
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
}

export type FormCheckboxFormArgs = {
  locales?: Maybe<Array<Locale>>
}

export type FormCheckboxHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<Stage>
}

export type FormCheckboxConnectInput = {
  /** Document to connect */
  where: FormCheckboxWhereUniqueInput
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>
}

/** A connection to a list of items. */
export type FormCheckboxConnection = {
  __typename?: 'FormCheckboxConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<FormCheckboxEdge>
  aggregate: Aggregate
}

export type FormCheckboxCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  form?: Maybe<FormCreateOneInlineInput>
}

export type FormCheckboxCreateManyInlineInput = {
  /** Create and connect multiple existing FormCheckbox documents */
  create?: Maybe<Array<FormCheckboxCreateInput>>
  /** Connect multiple existing FormCheckbox documents */
  connect?: Maybe<Array<FormCheckboxWhereUniqueInput>>
}

export type FormCheckboxCreateOneInlineInput = {
  /** Create and connect one FormCheckbox document */
  create?: Maybe<FormCheckboxCreateInput>
  /** Connect one existing FormCheckbox document */
  connect?: Maybe<FormCheckboxWhereUniqueInput>
}

/** An edge in a connection. */
export type FormCheckboxEdge = {
  __typename?: 'FormCheckboxEdge'
  /** The item at the end of the edge. */
  node: FormCheckbox
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Identifies documents */
export type FormCheckboxManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FormCheckboxWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FormCheckboxWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FormCheckboxWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  form?: Maybe<FormWhereInput>
}

export enum FormCheckboxOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC'
}

export type FormCheckboxUpdateInput = {
  form?: Maybe<FormUpdateOneInlineInput>
}

export type FormCheckboxUpdateManyInlineInput = {
  /** Create and connect multiple FormCheckbox documents */
  create?: Maybe<Array<FormCheckboxCreateInput>>
  /** Connect multiple existing FormCheckbox documents */
  connect?: Maybe<Array<FormCheckboxConnectInput>>
  /** Override currently-connected documents with multiple existing FormCheckbox documents */
  set?: Maybe<Array<FormCheckboxWhereUniqueInput>>
  /** Update multiple FormCheckbox documents */
  update?: Maybe<Array<FormCheckboxUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple FormCheckbox documents */
  upsert?: Maybe<Array<FormCheckboxUpsertWithNestedWhereUniqueInput>>
  /** Disconnect multiple FormCheckbox documents */
  disconnect?: Maybe<Array<FormCheckboxWhereUniqueInput>>
  /** Delete multiple FormCheckbox documents */
  delete?: Maybe<Array<FormCheckboxWhereUniqueInput>>
}

export type FormCheckboxUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>
}

export type FormCheckboxUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: FormCheckboxWhereInput
  /** Update many input */
  data: FormCheckboxUpdateManyInput
}

export type FormCheckboxUpdateOneInlineInput = {
  /** Create and connect one FormCheckbox document */
  create?: Maybe<FormCheckboxCreateInput>
  /** Update single FormCheckbox document */
  update?: Maybe<FormCheckboxUpdateWithNestedWhereUniqueInput>
  /** Upsert single FormCheckbox document */
  upsert?: Maybe<FormCheckboxUpsertWithNestedWhereUniqueInput>
  /** Connect existing FormCheckbox document */
  connect?: Maybe<FormCheckboxWhereUniqueInput>
  /** Disconnect currently connected FormCheckbox document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Delete currently connected FormCheckbox document */
  delete?: Maybe<Scalars['Boolean']>
}

export type FormCheckboxUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FormCheckboxWhereUniqueInput
  /** Document to update */
  data: FormCheckboxUpdateInput
}

export type FormCheckboxUpsertInput = {
  /** Create document if it didn't exist */
  create: FormCheckboxCreateInput
  /** Update document if it exists */
  update: FormCheckboxUpdateInput
}

export type FormCheckboxUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FormCheckboxWhereUniqueInput
  /** Upsert data */
  data: FormCheckboxUpsertInput
}

/** Identifies documents */
export type FormCheckboxWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FormCheckboxWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FormCheckboxWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FormCheckboxWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  form?: Maybe<FormWhereInput>
}

/** References FormCheckbox record uniquely */
export type FormCheckboxWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export type FormConnectInput = {
  /** Document to connect */
  where: FormWhereUniqueInput
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>
}

/** A connection to a list of items. */
export type FormConnection = {
  __typename?: 'FormConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<FormEdge>
  aggregate: Aggregate
}

export type FormCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  page?: Maybe<PageCreateOneInlineInput>
  fields?: Maybe<FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesCreateManyInlineInput>
  submissions?: Maybe<SubmissionCreateManyInlineInput>
}

export type FormCreateManyInlineInput = {
  /** Create and connect multiple existing Form documents */
  create?: Maybe<Array<FormCreateInput>>
  /** Connect multiple existing Form documents */
  connect?: Maybe<Array<FormWhereUniqueInput>>
}

export type FormCreateOneInlineInput = {
  /** Create and connect one Form document */
  create?: Maybe<FormCreateInput>
  /** Connect one existing Form document */
  connect?: Maybe<FormWhereUniqueInput>
}

/** An edge in a connection. */
export type FormEdge = {
  __typename?: 'FormEdge'
  /** The item at the end of the edge. */
  node: Form
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export type FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxes =
  | FormCheckbox
  | FormInput
  | FormOption
  | FormSelect
  | FormTextarea

export type FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesConnectInput = {
  FormInput?: Maybe<FormInputConnectInput>
  FormTextarea?: Maybe<FormTextareaConnectInput>
  FormSelect?: Maybe<FormSelectConnectInput>
  FormOption?: Maybe<FormOptionConnectInput>
  FormCheckbox?: Maybe<FormCheckboxConnectInput>
}

export type FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesCreateInput = {
  FormInput?: Maybe<FormInputCreateInput>
  FormTextarea?: Maybe<FormTextareaCreateInput>
  FormSelect?: Maybe<FormSelectCreateInput>
  FormOption?: Maybe<FormOptionCreateInput>
  FormCheckbox?: Maybe<FormCheckboxCreateInput>
}

export type FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesCreateManyInlineInput = {
  /** Create and connect multiple existing FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxes documents */
  create?: Maybe<
    Array<FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesCreateInput>
  >
  /** Connect multiple existing FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxes documents */
  connect?: Maybe<
    Array<FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesWhereUniqueInput>
  >
}

export type FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesCreateOneInlineInput = {
  /** Create and connect one FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxes document */
  create?: Maybe<FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesCreateInput>
  /** Connect one existing FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxes document */
  connect?: Maybe<FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesWhereUniqueInput>
}

export type FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesUpdateInput = {
  FormInput?: Maybe<FormInputUpdateInput>
  FormTextarea?: Maybe<FormTextareaUpdateInput>
  FormSelect?: Maybe<FormSelectUpdateInput>
  FormOption?: Maybe<FormOptionUpdateInput>
  FormCheckbox?: Maybe<FormCheckboxUpdateInput>
}

export type FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesUpdateManyInlineInput = {
  /** Create and connect multiple FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxes documents */
  create?: Maybe<
    Array<FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesCreateInput>
  >
  /** Connect multiple existing FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxes documents */
  connect?: Maybe<
    Array<FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesConnectInput>
  >
  /** Override currently-connected documents with multiple existing FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxes documents */
  set?: Maybe<
    Array<FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesWhereUniqueInput>
  >
  /** Update multiple FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxes documents */
  update?: Maybe<
    Array<FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesUpdateWithNestedWhereUniqueInput>
  >
  /** Upsert multiple FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxes documents */
  upsert?: Maybe<
    Array<FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesUpsertWithNestedWhereUniqueInput>
  >
  /** Disconnect multiple FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxes documents */
  disconnect?: Maybe<
    Array<FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesWhereUniqueInput>
  >
  /** Delete multiple FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxes documents */
  delete?: Maybe<
    Array<FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesWhereUniqueInput>
  >
}

export type FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesUpdateManyWithNestedWhereInput = {
  FormInput?: Maybe<FormInputUpdateManyWithNestedWhereInput>
  FormTextarea?: Maybe<FormTextareaUpdateManyWithNestedWhereInput>
  FormSelect?: Maybe<FormSelectUpdateManyWithNestedWhereInput>
  FormOption?: Maybe<FormOptionUpdateManyWithNestedWhereInput>
  FormCheckbox?: Maybe<FormCheckboxUpdateManyWithNestedWhereInput>
}

export type FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesUpdateOneInlineInput = {
  /** Create and connect one FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxes document */
  create?: Maybe<FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesCreateInput>
  /** Update single FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxes document */
  update?: Maybe<FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesUpdateWithNestedWhereUniqueInput>
  /** Upsert single FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxes document */
  upsert?: Maybe<FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesUpsertWithNestedWhereUniqueInput>
  /** Connect existing FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxes document */
  connect?: Maybe<FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesWhereUniqueInput>
  /** Disconnect currently connected FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxes document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Delete currently connected FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxes document */
  delete?: Maybe<Scalars['Boolean']>
}

export type FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesUpdateWithNestedWhereUniqueInput = {
  FormInput?: Maybe<FormInputUpdateWithNestedWhereUniqueInput>
  FormTextarea?: Maybe<FormTextareaUpdateWithNestedWhereUniqueInput>
  FormSelect?: Maybe<FormSelectUpdateWithNestedWhereUniqueInput>
  FormOption?: Maybe<FormOptionUpdateWithNestedWhereUniqueInput>
  FormCheckbox?: Maybe<FormCheckboxUpdateWithNestedWhereUniqueInput>
}

export type FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesUpsertWithNestedWhereUniqueInput = {
  FormInput?: Maybe<FormInputUpsertWithNestedWhereUniqueInput>
  FormTextarea?: Maybe<FormTextareaUpsertWithNestedWhereUniqueInput>
  FormSelect?: Maybe<FormSelectUpsertWithNestedWhereUniqueInput>
  FormOption?: Maybe<FormOptionUpsertWithNestedWhereUniqueInput>
  FormCheckbox?: Maybe<FormCheckboxUpsertWithNestedWhereUniqueInput>
}

export type FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesWhereInput = {
  FormInput?: Maybe<FormInputWhereInput>
  FormTextarea?: Maybe<FormTextareaWhereInput>
  FormSelect?: Maybe<FormSelectWhereInput>
  FormOption?: Maybe<FormOptionWhereInput>
  FormCheckbox?: Maybe<FormCheckboxWhereInput>
}

export type FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesWhereUniqueInput = {
  FormInput?: Maybe<FormInputWhereUniqueInput>
  FormTextarea?: Maybe<FormTextareaWhereUniqueInput>
  FormSelect?: Maybe<FormSelectWhereUniqueInput>
  FormOption?: Maybe<FormOptionWhereUniqueInput>
  FormCheckbox?: Maybe<FormCheckboxWhereUniqueInput>
}

export type FormInput = Node & {
  __typename?: 'FormInput'
  /** System stage field */
  stage: Stage
  /** Get the document in other stages */
  documentInStages: Array<FormInput>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  form?: Maybe<Form>
  name?: Maybe<Scalars['String']>
  type?: Maybe<FormInputType>
  placeholder?: Maybe<Scalars['String']>
  required: Scalars['Boolean']
  label?: Maybe<Scalars['String']>
  rules?: Maybe<Scalars['Json']>
  /** List of FormInput versions */
  history: Array<Version>
}

export type FormInputDocumentInStagesArgs = {
  stages?: Array<Stage>
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
}

export type FormInputFormArgs = {
  locales?: Maybe<Array<Locale>>
}

export type FormInputHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<Stage>
}

export type FormInputConnectInput = {
  /** Document to connect */
  where: FormInputWhereUniqueInput
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>
}

/** A connection to a list of items. */
export type FormInputConnection = {
  __typename?: 'FormInputConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<FormInputEdge>
  aggregate: Aggregate
}

export type FormInputCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  form?: Maybe<FormCreateOneInlineInput>
  name?: Maybe<Scalars['String']>
  type?: Maybe<FormInputType>
  placeholder?: Maybe<Scalars['String']>
  required: Scalars['Boolean']
  label?: Maybe<Scalars['String']>
  rules?: Maybe<Scalars['Json']>
}

export type FormInputCreateManyInlineInput = {
  /** Create and connect multiple existing FormInput documents */
  create?: Maybe<Array<FormInputCreateInput>>
  /** Connect multiple existing FormInput documents */
  connect?: Maybe<Array<FormInputWhereUniqueInput>>
}

export type FormInputCreateOneInlineInput = {
  /** Create and connect one FormInput document */
  create?: Maybe<FormInputCreateInput>
  /** Connect one existing FormInput document */
  connect?: Maybe<FormInputWhereUniqueInput>
}

/** An edge in a connection. */
export type FormInputEdge = {
  __typename?: 'FormInputEdge'
  /** The item at the end of the edge. */
  node: FormInput
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Identifies documents */
export type FormInputManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FormInputWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FormInputWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FormInputWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  form?: Maybe<FormWhereInput>
  name?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>
  type?: Maybe<FormInputType>
  /** All values that are not equal to given value. */
  type_not?: Maybe<FormInputType>
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<FormInputType>>
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<FormInputType>>
  placeholder?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  placeholder_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  placeholder_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  placeholder_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  placeholder_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  placeholder_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  placeholder_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  placeholder_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  placeholder_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  placeholder_not_ends_with?: Maybe<Scalars['String']>
  required?: Maybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  required_not?: Maybe<Scalars['Boolean']>
  label?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  label_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  label_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  label_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  label_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  label_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  label_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  label_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  label_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  label_not_ends_with?: Maybe<Scalars['String']>
}

export enum FormInputOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  PlaceholderAsc = 'placeholder_ASC',
  PlaceholderDesc = 'placeholder_DESC',
  RequiredAsc = 'required_ASC',
  RequiredDesc = 'required_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC'
}

export enum FormInputType {
  Email = 'EMAIL',
  Tel = 'TEL',
  Text = 'TEXT'
}

export type FormInputUpdateInput = {
  form?: Maybe<FormUpdateOneInlineInput>
  name?: Maybe<Scalars['String']>
  type?: Maybe<FormInputType>
  placeholder?: Maybe<Scalars['String']>
  required?: Maybe<Scalars['Boolean']>
  label?: Maybe<Scalars['String']>
  rules?: Maybe<Scalars['Json']>
}

export type FormInputUpdateManyInlineInput = {
  /** Create and connect multiple FormInput documents */
  create?: Maybe<Array<FormInputCreateInput>>
  /** Connect multiple existing FormInput documents */
  connect?: Maybe<Array<FormInputConnectInput>>
  /** Override currently-connected documents with multiple existing FormInput documents */
  set?: Maybe<Array<FormInputWhereUniqueInput>>
  /** Update multiple FormInput documents */
  update?: Maybe<Array<FormInputUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple FormInput documents */
  upsert?: Maybe<Array<FormInputUpsertWithNestedWhereUniqueInput>>
  /** Disconnect multiple FormInput documents */
  disconnect?: Maybe<Array<FormInputWhereUniqueInput>>
  /** Delete multiple FormInput documents */
  delete?: Maybe<Array<FormInputWhereUniqueInput>>
}

export type FormInputUpdateManyInput = {
  name?: Maybe<Scalars['String']>
  type?: Maybe<FormInputType>
  placeholder?: Maybe<Scalars['String']>
  required?: Maybe<Scalars['Boolean']>
  label?: Maybe<Scalars['String']>
  rules?: Maybe<Scalars['Json']>
}

export type FormInputUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: FormInputWhereInput
  /** Update many input */
  data: FormInputUpdateManyInput
}

export type FormInputUpdateOneInlineInput = {
  /** Create and connect one FormInput document */
  create?: Maybe<FormInputCreateInput>
  /** Update single FormInput document */
  update?: Maybe<FormInputUpdateWithNestedWhereUniqueInput>
  /** Upsert single FormInput document */
  upsert?: Maybe<FormInputUpsertWithNestedWhereUniqueInput>
  /** Connect existing FormInput document */
  connect?: Maybe<FormInputWhereUniqueInput>
  /** Disconnect currently connected FormInput document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Delete currently connected FormInput document */
  delete?: Maybe<Scalars['Boolean']>
}

export type FormInputUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FormInputWhereUniqueInput
  /** Document to update */
  data: FormInputUpdateInput
}

export type FormInputUpsertInput = {
  /** Create document if it didn't exist */
  create: FormInputCreateInput
  /** Update document if it exists */
  update: FormInputUpdateInput
}

export type FormInputUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FormInputWhereUniqueInput
  /** Upsert data */
  data: FormInputUpsertInput
}

/** Identifies documents */
export type FormInputWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FormInputWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FormInputWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FormInputWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  form?: Maybe<FormWhereInput>
  name?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>
  type?: Maybe<FormInputType>
  /** All values that are not equal to given value. */
  type_not?: Maybe<FormInputType>
  /** All values that are contained in given list. */
  type_in?: Maybe<Array<FormInputType>>
  /** All values that are not contained in given list. */
  type_not_in?: Maybe<Array<FormInputType>>
  placeholder?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  placeholder_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  placeholder_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  placeholder_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  placeholder_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  placeholder_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  placeholder_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  placeholder_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  placeholder_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  placeholder_not_ends_with?: Maybe<Scalars['String']>
  required?: Maybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  required_not?: Maybe<Scalars['Boolean']>
  label?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  label_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  label_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  label_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  label_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  label_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  label_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  label_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  label_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  label_not_ends_with?: Maybe<Scalars['String']>
}

/** References FormInput record uniquely */
export type FormInputWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

/** Identifies documents */
export type FormManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FormWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FormWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FormWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  page?: Maybe<PageWhereInput>
  submissions_every?: Maybe<SubmissionWhereInput>
  submissions_some?: Maybe<SubmissionWhereInput>
  submissions_none?: Maybe<SubmissionWhereInput>
}

export type FormOption = Node & {
  __typename?: 'FormOption'
  /** System stage field */
  stage: Stage
  /** Get the document in other stages */
  documentInStages: Array<FormOption>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  form?: Maybe<Form>
  formSelect?: Maybe<FormSelect>
  value: Scalars['String']
  option?: Maybe<Scalars['String']>
  /** List of FormOption versions */
  history: Array<Version>
}

export type FormOptionDocumentInStagesArgs = {
  stages?: Array<Stage>
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
}

export type FormOptionFormArgs = {
  locales?: Maybe<Array<Locale>>
}

export type FormOptionFormSelectArgs = {
  locales?: Maybe<Array<Locale>>
}

export type FormOptionHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<Stage>
}

export type FormOptionConnectInput = {
  /** Document to connect */
  where: FormOptionWhereUniqueInput
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>
}

/** A connection to a list of items. */
export type FormOptionConnection = {
  __typename?: 'FormOptionConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<FormOptionEdge>
  aggregate: Aggregate
}

export type FormOptionCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  form?: Maybe<FormCreateOneInlineInput>
  formSelect?: Maybe<FormSelectCreateOneInlineInput>
  value: Scalars['String']
  option?: Maybe<Scalars['String']>
}

export type FormOptionCreateManyInlineInput = {
  /** Create and connect multiple existing FormOption documents */
  create?: Maybe<Array<FormOptionCreateInput>>
  /** Connect multiple existing FormOption documents */
  connect?: Maybe<Array<FormOptionWhereUniqueInput>>
}

export type FormOptionCreateOneInlineInput = {
  /** Create and connect one FormOption document */
  create?: Maybe<FormOptionCreateInput>
  /** Connect one existing FormOption document */
  connect?: Maybe<FormOptionWhereUniqueInput>
}

/** An edge in a connection. */
export type FormOptionEdge = {
  __typename?: 'FormOptionEdge'
  /** The item at the end of the edge. */
  node: FormOption
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Identifies documents */
export type FormOptionManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FormOptionWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FormOptionWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FormOptionWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  form?: Maybe<FormWhereInput>
  formSelect?: Maybe<FormSelectWhereInput>
  value?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  value_not_ends_with?: Maybe<Scalars['String']>
  option?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  option_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  option_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  option_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  option_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  option_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  option_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  option_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  option_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  option_not_ends_with?: Maybe<Scalars['String']>
}

export enum FormOptionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC',
  OptionAsc = 'option_ASC',
  OptionDesc = 'option_DESC'
}

export type FormOptionUpdateInput = {
  form?: Maybe<FormUpdateOneInlineInput>
  formSelect?: Maybe<FormSelectUpdateOneInlineInput>
  value?: Maybe<Scalars['String']>
  option?: Maybe<Scalars['String']>
}

export type FormOptionUpdateManyInlineInput = {
  /** Create and connect multiple FormOption documents */
  create?: Maybe<Array<FormOptionCreateInput>>
  /** Connect multiple existing FormOption documents */
  connect?: Maybe<Array<FormOptionConnectInput>>
  /** Override currently-connected documents with multiple existing FormOption documents */
  set?: Maybe<Array<FormOptionWhereUniqueInput>>
  /** Update multiple FormOption documents */
  update?: Maybe<Array<FormOptionUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple FormOption documents */
  upsert?: Maybe<Array<FormOptionUpsertWithNestedWhereUniqueInput>>
  /** Disconnect multiple FormOption documents */
  disconnect?: Maybe<Array<FormOptionWhereUniqueInput>>
  /** Delete multiple FormOption documents */
  delete?: Maybe<Array<FormOptionWhereUniqueInput>>
}

export type FormOptionUpdateManyInput = {
  value?: Maybe<Scalars['String']>
  option?: Maybe<Scalars['String']>
}

export type FormOptionUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: FormOptionWhereInput
  /** Update many input */
  data: FormOptionUpdateManyInput
}

export type FormOptionUpdateOneInlineInput = {
  /** Create and connect one FormOption document */
  create?: Maybe<FormOptionCreateInput>
  /** Update single FormOption document */
  update?: Maybe<FormOptionUpdateWithNestedWhereUniqueInput>
  /** Upsert single FormOption document */
  upsert?: Maybe<FormOptionUpsertWithNestedWhereUniqueInput>
  /** Connect existing FormOption document */
  connect?: Maybe<FormOptionWhereUniqueInput>
  /** Disconnect currently connected FormOption document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Delete currently connected FormOption document */
  delete?: Maybe<Scalars['Boolean']>
}

export type FormOptionUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FormOptionWhereUniqueInput
  /** Document to update */
  data: FormOptionUpdateInput
}

export type FormOptionUpsertInput = {
  /** Create document if it didn't exist */
  create: FormOptionCreateInput
  /** Update document if it exists */
  update: FormOptionUpdateInput
}

export type FormOptionUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FormOptionWhereUniqueInput
  /** Upsert data */
  data: FormOptionUpsertInput
}

/** Identifies documents */
export type FormOptionWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FormOptionWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FormOptionWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FormOptionWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  form?: Maybe<FormWhereInput>
  formSelect?: Maybe<FormSelectWhereInput>
  value?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  value_not_ends_with?: Maybe<Scalars['String']>
  option?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  option_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  option_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  option_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  option_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  option_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  option_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  option_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  option_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  option_not_ends_with?: Maybe<Scalars['String']>
}

/** References FormOption record uniquely */
export type FormOptionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export enum FormOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC'
}

export type FormSelect = Node & {
  __typename?: 'FormSelect'
  /** System stage field */
  stage: Stage
  /** Get the document in other stages */
  documentInStages: Array<FormSelect>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  form?: Maybe<Form>
  options: Array<FormOption>
  label?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  required: Scalars['Boolean']
  rules?: Maybe<Scalars['Json']>
  placeholder?: Maybe<Scalars['String']>
  /** List of FormSelect versions */
  history: Array<Version>
}

export type FormSelectDocumentInStagesArgs = {
  stages?: Array<Stage>
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
}

export type FormSelectFormArgs = {
  locales?: Maybe<Array<Locale>>
}

export type FormSelectOptionsArgs = {
  where?: Maybe<FormOptionWhereInput>
  orderBy?: Maybe<FormOptionOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  locales?: Maybe<Array<Locale>>
}

export type FormSelectHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<Stage>
}

export type FormSelectConnectInput = {
  /** Document to connect */
  where: FormSelectWhereUniqueInput
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>
}

/** A connection to a list of items. */
export type FormSelectConnection = {
  __typename?: 'FormSelectConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<FormSelectEdge>
  aggregate: Aggregate
}

export type FormSelectCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  form?: Maybe<FormCreateOneInlineInput>
  options?: Maybe<FormOptionCreateManyInlineInput>
  label?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  required: Scalars['Boolean']
  rules?: Maybe<Scalars['Json']>
  placeholder?: Maybe<Scalars['String']>
}

export type FormSelectCreateManyInlineInput = {
  /** Create and connect multiple existing FormSelect documents */
  create?: Maybe<Array<FormSelectCreateInput>>
  /** Connect multiple existing FormSelect documents */
  connect?: Maybe<Array<FormSelectWhereUniqueInput>>
}

export type FormSelectCreateOneInlineInput = {
  /** Create and connect one FormSelect document */
  create?: Maybe<FormSelectCreateInput>
  /** Connect one existing FormSelect document */
  connect?: Maybe<FormSelectWhereUniqueInput>
}

/** An edge in a connection. */
export type FormSelectEdge = {
  __typename?: 'FormSelectEdge'
  /** The item at the end of the edge. */
  node: FormSelect
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Identifies documents */
export type FormSelectManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FormSelectWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FormSelectWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FormSelectWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  form?: Maybe<FormWhereInput>
  options_every?: Maybe<FormOptionWhereInput>
  options_some?: Maybe<FormOptionWhereInput>
  options_none?: Maybe<FormOptionWhereInput>
  label?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  label_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  label_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  label_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  label_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  label_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  label_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  label_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  label_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  label_not_ends_with?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>
  required?: Maybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  required_not?: Maybe<Scalars['Boolean']>
  placeholder?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  placeholder_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  placeholder_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  placeholder_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  placeholder_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  placeholder_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  placeholder_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  placeholder_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  placeholder_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  placeholder_not_ends_with?: Maybe<Scalars['String']>
}

export enum FormSelectOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RequiredAsc = 'required_ASC',
  RequiredDesc = 'required_DESC',
  PlaceholderAsc = 'placeholder_ASC',
  PlaceholderDesc = 'placeholder_DESC'
}

export type FormSelectUpdateInput = {
  form?: Maybe<FormUpdateOneInlineInput>
  options?: Maybe<FormOptionUpdateManyInlineInput>
  label?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  required?: Maybe<Scalars['Boolean']>
  rules?: Maybe<Scalars['Json']>
  placeholder?: Maybe<Scalars['String']>
}

export type FormSelectUpdateManyInlineInput = {
  /** Create and connect multiple FormSelect documents */
  create?: Maybe<Array<FormSelectCreateInput>>
  /** Connect multiple existing FormSelect documents */
  connect?: Maybe<Array<FormSelectConnectInput>>
  /** Override currently-connected documents with multiple existing FormSelect documents */
  set?: Maybe<Array<FormSelectWhereUniqueInput>>
  /** Update multiple FormSelect documents */
  update?: Maybe<Array<FormSelectUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple FormSelect documents */
  upsert?: Maybe<Array<FormSelectUpsertWithNestedWhereUniqueInput>>
  /** Disconnect multiple FormSelect documents */
  disconnect?: Maybe<Array<FormSelectWhereUniqueInput>>
  /** Delete multiple FormSelect documents */
  delete?: Maybe<Array<FormSelectWhereUniqueInput>>
}

export type FormSelectUpdateManyInput = {
  label?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  required?: Maybe<Scalars['Boolean']>
  rules?: Maybe<Scalars['Json']>
  placeholder?: Maybe<Scalars['String']>
}

export type FormSelectUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: FormSelectWhereInput
  /** Update many input */
  data: FormSelectUpdateManyInput
}

export type FormSelectUpdateOneInlineInput = {
  /** Create and connect one FormSelect document */
  create?: Maybe<FormSelectCreateInput>
  /** Update single FormSelect document */
  update?: Maybe<FormSelectUpdateWithNestedWhereUniqueInput>
  /** Upsert single FormSelect document */
  upsert?: Maybe<FormSelectUpsertWithNestedWhereUniqueInput>
  /** Connect existing FormSelect document */
  connect?: Maybe<FormSelectWhereUniqueInput>
  /** Disconnect currently connected FormSelect document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Delete currently connected FormSelect document */
  delete?: Maybe<Scalars['Boolean']>
}

export type FormSelectUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FormSelectWhereUniqueInput
  /** Document to update */
  data: FormSelectUpdateInput
}

export type FormSelectUpsertInput = {
  /** Create document if it didn't exist */
  create: FormSelectCreateInput
  /** Update document if it exists */
  update: FormSelectUpdateInput
}

export type FormSelectUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FormSelectWhereUniqueInput
  /** Upsert data */
  data: FormSelectUpsertInput
}

/** Identifies documents */
export type FormSelectWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FormSelectWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FormSelectWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FormSelectWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  form?: Maybe<FormWhereInput>
  options_every?: Maybe<FormOptionWhereInput>
  options_some?: Maybe<FormOptionWhereInput>
  options_none?: Maybe<FormOptionWhereInput>
  label?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  label_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  label_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  label_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  label_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  label_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  label_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  label_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  label_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  label_not_ends_with?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars['String']>
  required?: Maybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  required_not?: Maybe<Scalars['Boolean']>
  placeholder?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  placeholder_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  placeholder_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  placeholder_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  placeholder_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  placeholder_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  placeholder_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  placeholder_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  placeholder_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  placeholder_not_ends_with?: Maybe<Scalars['String']>
}

/** References FormSelect record uniquely */
export type FormSelectWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export type FormTextarea = Node & {
  __typename?: 'FormTextarea'
  /** System stage field */
  stage: Stage
  /** Get the document in other stages */
  documentInStages: Array<FormTextarea>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  form?: Maybe<Form>
  /** List of FormTextarea versions */
  history: Array<Version>
}

export type FormTextareaDocumentInStagesArgs = {
  stages?: Array<Stage>
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
}

export type FormTextareaFormArgs = {
  locales?: Maybe<Array<Locale>>
}

export type FormTextareaHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<Stage>
}

export type FormTextareaConnectInput = {
  /** Document to connect */
  where: FormTextareaWhereUniqueInput
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>
}

/** A connection to a list of items. */
export type FormTextareaConnection = {
  __typename?: 'FormTextareaConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<FormTextareaEdge>
  aggregate: Aggregate
}

export type FormTextareaCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  form?: Maybe<FormCreateOneInlineInput>
}

export type FormTextareaCreateManyInlineInput = {
  /** Create and connect multiple existing FormTextarea documents */
  create?: Maybe<Array<FormTextareaCreateInput>>
  /** Connect multiple existing FormTextarea documents */
  connect?: Maybe<Array<FormTextareaWhereUniqueInput>>
}

export type FormTextareaCreateOneInlineInput = {
  /** Create and connect one FormTextarea document */
  create?: Maybe<FormTextareaCreateInput>
  /** Connect one existing FormTextarea document */
  connect?: Maybe<FormTextareaWhereUniqueInput>
}

/** An edge in a connection. */
export type FormTextareaEdge = {
  __typename?: 'FormTextareaEdge'
  /** The item at the end of the edge. */
  node: FormTextarea
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Identifies documents */
export type FormTextareaManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FormTextareaWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FormTextareaWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FormTextareaWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  form?: Maybe<FormWhereInput>
}

export enum FormTextareaOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC'
}

export type FormTextareaUpdateInput = {
  form?: Maybe<FormUpdateOneInlineInput>
}

export type FormTextareaUpdateManyInlineInput = {
  /** Create and connect multiple FormTextarea documents */
  create?: Maybe<Array<FormTextareaCreateInput>>
  /** Connect multiple existing FormTextarea documents */
  connect?: Maybe<Array<FormTextareaConnectInput>>
  /** Override currently-connected documents with multiple existing FormTextarea documents */
  set?: Maybe<Array<FormTextareaWhereUniqueInput>>
  /** Update multiple FormTextarea documents */
  update?: Maybe<Array<FormTextareaUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple FormTextarea documents */
  upsert?: Maybe<Array<FormTextareaUpsertWithNestedWhereUniqueInput>>
  /** Disconnect multiple FormTextarea documents */
  disconnect?: Maybe<Array<FormTextareaWhereUniqueInput>>
  /** Delete multiple FormTextarea documents */
  delete?: Maybe<Array<FormTextareaWhereUniqueInput>>
}

export type FormTextareaUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>
}

export type FormTextareaUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: FormTextareaWhereInput
  /** Update many input */
  data: FormTextareaUpdateManyInput
}

export type FormTextareaUpdateOneInlineInput = {
  /** Create and connect one FormTextarea document */
  create?: Maybe<FormTextareaCreateInput>
  /** Update single FormTextarea document */
  update?: Maybe<FormTextareaUpdateWithNestedWhereUniqueInput>
  /** Upsert single FormTextarea document */
  upsert?: Maybe<FormTextareaUpsertWithNestedWhereUniqueInput>
  /** Connect existing FormTextarea document */
  connect?: Maybe<FormTextareaWhereUniqueInput>
  /** Disconnect currently connected FormTextarea document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Delete currently connected FormTextarea document */
  delete?: Maybe<Scalars['Boolean']>
}

export type FormTextareaUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FormTextareaWhereUniqueInput
  /** Document to update */
  data: FormTextareaUpdateInput
}

export type FormTextareaUpsertInput = {
  /** Create document if it didn't exist */
  create: FormTextareaCreateInput
  /** Update document if it exists */
  update: FormTextareaUpdateInput
}

export type FormTextareaUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FormTextareaWhereUniqueInput
  /** Upsert data */
  data: FormTextareaUpsertInput
}

/** Identifies documents */
export type FormTextareaWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FormTextareaWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FormTextareaWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FormTextareaWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  form?: Maybe<FormWhereInput>
}

/** References FormTextarea record uniquely */
export type FormTextareaWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export type FormUpdateInput = {
  page?: Maybe<PageUpdateOneInlineInput>
  fields?: Maybe<FormFormInputsFormTextareasFormSelectsFormOptionsFormCheckboxesUpdateManyInlineInput>
  submissions?: Maybe<SubmissionUpdateManyInlineInput>
}

export type FormUpdateManyInlineInput = {
  /** Create and connect multiple Form documents */
  create?: Maybe<Array<FormCreateInput>>
  /** Connect multiple existing Form documents */
  connect?: Maybe<Array<FormConnectInput>>
  /** Override currently-connected documents with multiple existing Form documents */
  set?: Maybe<Array<FormWhereUniqueInput>>
  /** Update multiple Form documents */
  update?: Maybe<Array<FormUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Form documents */
  upsert?: Maybe<Array<FormUpsertWithNestedWhereUniqueInput>>
  /** Disconnect multiple Form documents */
  disconnect?: Maybe<Array<FormWhereUniqueInput>>
  /** Delete multiple Form documents */
  delete?: Maybe<Array<FormWhereUniqueInput>>
}

export type FormUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: Maybe<Scalars['String']>
}

export type FormUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: FormWhereInput
  /** Update many input */
  data: FormUpdateManyInput
}

export type FormUpdateOneInlineInput = {
  /** Create and connect one Form document */
  create?: Maybe<FormCreateInput>
  /** Update single Form document */
  update?: Maybe<FormUpdateWithNestedWhereUniqueInput>
  /** Upsert single Form document */
  upsert?: Maybe<FormUpsertWithNestedWhereUniqueInput>
  /** Connect existing Form document */
  connect?: Maybe<FormWhereUniqueInput>
  /** Disconnect currently connected Form document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Delete currently connected Form document */
  delete?: Maybe<Scalars['Boolean']>
}

export type FormUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FormWhereUniqueInput
  /** Document to update */
  data: FormUpdateInput
}

export type FormUpsertInput = {
  /** Create document if it didn't exist */
  create: FormCreateInput
  /** Update document if it exists */
  update: FormUpdateInput
}

export type FormUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: FormWhereUniqueInput
  /** Upsert data */
  data: FormUpsertInput
}

/** Identifies documents */
export type FormWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<FormWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<FormWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<FormWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  page?: Maybe<PageWhereInput>
  submissions_every?: Maybe<SubmissionWhereInput>
  submissions_some?: Maybe<SubmissionWhereInput>
  submissions_none?: Maybe<SubmissionWhereInput>
}

/** References Form record uniquely */
export type FormWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max'
}

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>
}

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>
}

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
  De = 'de'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location'
  latitude: Scalars['Float']
  longitude: Scalars['Float']
  distance: Scalars['Float']
}

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput
}

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']
  longitude: Scalars['Float']
}

export type Mutation = {
  __typename?: 'Mutation'
  /** Create one article */
  createArticle?: Maybe<Article>
  /** Update one article */
  updateArticle?: Maybe<Article>
  /** Delete one article from _all_ existing stages. Returns deleted document. */
  deleteArticle?: Maybe<Article>
  /** Upsert one article */
  upsertArticle?: Maybe<Article>
  /** Publish one article */
  publishArticle?: Maybe<Article>
  /** Unpublish one article from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishArticle?: Maybe<Article>
  /** Update many Article documents */
  updateManyArticlesConnection: ArticleConnection
  /** Delete many Article documents, return deleted documents */
  deleteManyArticlesConnection: ArticleConnection
  /** Publish many Article documents */
  publishManyArticlesConnection: ArticleConnection
  /** Find many Article documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyArticlesConnection: ArticleConnection
  /**
   * Update many articles
   * @deprecated Please use the new paginated many mutation (updateManyArticlesConnection)
   */
  updateManyArticles: BatchPayload
  /**
   * Delete many Article documents
   * @deprecated Please use the new paginated many mutation (deleteManyArticlesConnection)
   */
  deleteManyArticles: BatchPayload
  /**
   * Publish many Article documents
   * @deprecated Please use the new paginated many mutation (publishManyArticlesConnection)
   */
  publishManyArticles: BatchPayload
  /**
   * Unpublish many Article documents
   * @deprecated Please use the new paginated many mutation (unpublishManyArticlesConnection)
   */
  unpublishManyArticles: BatchPayload
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>
  /** Update one asset */
  updateAsset?: Maybe<Asset>
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>
  /** Publish one asset */
  publishAsset?: Maybe<Asset>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload
  /** Create one form */
  createForm?: Maybe<Form>
  /** Update one form */
  updateForm?: Maybe<Form>
  /** Delete one form from _all_ existing stages. Returns deleted document. */
  deleteForm?: Maybe<Form>
  /** Upsert one form */
  upsertForm?: Maybe<Form>
  /** Publish one form */
  publishForm?: Maybe<Form>
  /** Unpublish one form from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishForm?: Maybe<Form>
  /** Update many Form documents */
  updateManyFormsConnection: FormConnection
  /** Delete many Form documents, return deleted documents */
  deleteManyFormsConnection: FormConnection
  /** Publish many Form documents */
  publishManyFormsConnection: FormConnection
  /** Find many Form documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFormsConnection: FormConnection
  /**
   * Update many forms
   * @deprecated Please use the new paginated many mutation (updateManyFormsConnection)
   */
  updateManyForms: BatchPayload
  /**
   * Delete many Form documents
   * @deprecated Please use the new paginated many mutation (deleteManyFormsConnection)
   */
  deleteManyForms: BatchPayload
  /**
   * Publish many Form documents
   * @deprecated Please use the new paginated many mutation (publishManyFormsConnection)
   */
  publishManyForms: BatchPayload
  /**
   * Unpublish many Form documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFormsConnection)
   */
  unpublishManyForms: BatchPayload
  /** Create one formCheckbox */
  createFormCheckbox?: Maybe<FormCheckbox>
  /** Update one formCheckbox */
  updateFormCheckbox?: Maybe<FormCheckbox>
  /** Delete one formCheckbox from _all_ existing stages. Returns deleted document. */
  deleteFormCheckbox?: Maybe<FormCheckbox>
  /** Upsert one formCheckbox */
  upsertFormCheckbox?: Maybe<FormCheckbox>
  /** Publish one formCheckbox */
  publishFormCheckbox?: Maybe<FormCheckbox>
  /** Unpublish one formCheckbox from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFormCheckbox?: Maybe<FormCheckbox>
  /** Update many FormCheckbox documents */
  updateManyFormCheckboxesConnection: FormCheckboxConnection
  /** Delete many FormCheckbox documents, return deleted documents */
  deleteManyFormCheckboxesConnection: FormCheckboxConnection
  /** Publish many FormCheckbox documents */
  publishManyFormCheckboxesConnection: FormCheckboxConnection
  /** Find many FormCheckbox documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFormCheckboxesConnection: FormCheckboxConnection
  /**
   * Update many formCheckboxes
   * @deprecated Please use the new paginated many mutation (updateManyFormCheckboxesConnection)
   */
  updateManyFormCheckboxes: BatchPayload
  /**
   * Delete many FormCheckbox documents
   * @deprecated Please use the new paginated many mutation (deleteManyFormCheckboxesConnection)
   */
  deleteManyFormCheckboxes: BatchPayload
  /**
   * Publish many FormCheckbox documents
   * @deprecated Please use the new paginated many mutation (publishManyFormCheckboxesConnection)
   */
  publishManyFormCheckboxes: BatchPayload
  /**
   * Unpublish many FormCheckbox documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFormCheckboxesConnection)
   */
  unpublishManyFormCheckboxes: BatchPayload
  /** Create one formInput */
  createFormInput?: Maybe<FormInput>
  /** Update one formInput */
  updateFormInput?: Maybe<FormInput>
  /** Delete one formInput from _all_ existing stages. Returns deleted document. */
  deleteFormInput?: Maybe<FormInput>
  /** Upsert one formInput */
  upsertFormInput?: Maybe<FormInput>
  /** Publish one formInput */
  publishFormInput?: Maybe<FormInput>
  /** Unpublish one formInput from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFormInput?: Maybe<FormInput>
  /** Update many FormInput documents */
  updateManyFormInputsConnection: FormInputConnection
  /** Delete many FormInput documents, return deleted documents */
  deleteManyFormInputsConnection: FormInputConnection
  /** Publish many FormInput documents */
  publishManyFormInputsConnection: FormInputConnection
  /** Find many FormInput documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFormInputsConnection: FormInputConnection
  /**
   * Update many formInputs
   * @deprecated Please use the new paginated many mutation (updateManyFormInputsConnection)
   */
  updateManyFormInputs: BatchPayload
  /**
   * Delete many FormInput documents
   * @deprecated Please use the new paginated many mutation (deleteManyFormInputsConnection)
   */
  deleteManyFormInputs: BatchPayload
  /**
   * Publish many FormInput documents
   * @deprecated Please use the new paginated many mutation (publishManyFormInputsConnection)
   */
  publishManyFormInputs: BatchPayload
  /**
   * Unpublish many FormInput documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFormInputsConnection)
   */
  unpublishManyFormInputs: BatchPayload
  /** Create one formOption */
  createFormOption?: Maybe<FormOption>
  /** Update one formOption */
  updateFormOption?: Maybe<FormOption>
  /** Delete one formOption from _all_ existing stages. Returns deleted document. */
  deleteFormOption?: Maybe<FormOption>
  /** Upsert one formOption */
  upsertFormOption?: Maybe<FormOption>
  /** Publish one formOption */
  publishFormOption?: Maybe<FormOption>
  /** Unpublish one formOption from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFormOption?: Maybe<FormOption>
  /** Update many FormOption documents */
  updateManyFormOptionsConnection: FormOptionConnection
  /** Delete many FormOption documents, return deleted documents */
  deleteManyFormOptionsConnection: FormOptionConnection
  /** Publish many FormOption documents */
  publishManyFormOptionsConnection: FormOptionConnection
  /** Find many FormOption documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFormOptionsConnection: FormOptionConnection
  /**
   * Update many formOptions
   * @deprecated Please use the new paginated many mutation (updateManyFormOptionsConnection)
   */
  updateManyFormOptions: BatchPayload
  /**
   * Delete many FormOption documents
   * @deprecated Please use the new paginated many mutation (deleteManyFormOptionsConnection)
   */
  deleteManyFormOptions: BatchPayload
  /**
   * Publish many FormOption documents
   * @deprecated Please use the new paginated many mutation (publishManyFormOptionsConnection)
   */
  publishManyFormOptions: BatchPayload
  /**
   * Unpublish many FormOption documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFormOptionsConnection)
   */
  unpublishManyFormOptions: BatchPayload
  /** Create one formSelect */
  createFormSelect?: Maybe<FormSelect>
  /** Update one formSelect */
  updateFormSelect?: Maybe<FormSelect>
  /** Delete one formSelect from _all_ existing stages. Returns deleted document. */
  deleteFormSelect?: Maybe<FormSelect>
  /** Upsert one formSelect */
  upsertFormSelect?: Maybe<FormSelect>
  /** Publish one formSelect */
  publishFormSelect?: Maybe<FormSelect>
  /** Unpublish one formSelect from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFormSelect?: Maybe<FormSelect>
  /** Update many FormSelect documents */
  updateManyFormSelectsConnection: FormSelectConnection
  /** Delete many FormSelect documents, return deleted documents */
  deleteManyFormSelectsConnection: FormSelectConnection
  /** Publish many FormSelect documents */
  publishManyFormSelectsConnection: FormSelectConnection
  /** Find many FormSelect documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFormSelectsConnection: FormSelectConnection
  /**
   * Update many formSelects
   * @deprecated Please use the new paginated many mutation (updateManyFormSelectsConnection)
   */
  updateManyFormSelects: BatchPayload
  /**
   * Delete many FormSelect documents
   * @deprecated Please use the new paginated many mutation (deleteManyFormSelectsConnection)
   */
  deleteManyFormSelects: BatchPayload
  /**
   * Publish many FormSelect documents
   * @deprecated Please use the new paginated many mutation (publishManyFormSelectsConnection)
   */
  publishManyFormSelects: BatchPayload
  /**
   * Unpublish many FormSelect documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFormSelectsConnection)
   */
  unpublishManyFormSelects: BatchPayload
  /** Create one formTextarea */
  createFormTextarea?: Maybe<FormTextarea>
  /** Update one formTextarea */
  updateFormTextarea?: Maybe<FormTextarea>
  /** Delete one formTextarea from _all_ existing stages. Returns deleted document. */
  deleteFormTextarea?: Maybe<FormTextarea>
  /** Upsert one formTextarea */
  upsertFormTextarea?: Maybe<FormTextarea>
  /** Publish one formTextarea */
  publishFormTextarea?: Maybe<FormTextarea>
  /** Unpublish one formTextarea from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFormTextarea?: Maybe<FormTextarea>
  /** Update many FormTextarea documents */
  updateManyFormTextareasConnection: FormTextareaConnection
  /** Delete many FormTextarea documents, return deleted documents */
  deleteManyFormTextareasConnection: FormTextareaConnection
  /** Publish many FormTextarea documents */
  publishManyFormTextareasConnection: FormTextareaConnection
  /** Find many FormTextarea documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFormTextareasConnection: FormTextareaConnection
  /**
   * Update many formTextareas
   * @deprecated Please use the new paginated many mutation (updateManyFormTextareasConnection)
   */
  updateManyFormTextareas: BatchPayload
  /**
   * Delete many FormTextarea documents
   * @deprecated Please use the new paginated many mutation (deleteManyFormTextareasConnection)
   */
  deleteManyFormTextareas: BatchPayload
  /**
   * Publish many FormTextarea documents
   * @deprecated Please use the new paginated many mutation (publishManyFormTextareasConnection)
   */
  publishManyFormTextareas: BatchPayload
  /**
   * Unpublish many FormTextarea documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFormTextareasConnection)
   */
  unpublishManyFormTextareas: BatchPayload
  /** Create one page */
  createPage?: Maybe<Page>
  /** Update one page */
  updatePage?: Maybe<Page>
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>
  /** Upsert one page */
  upsertPage?: Maybe<Page>
  /** Publish one page */
  publishPage?: Maybe<Page>
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload
  /** Create one submission */
  createSubmission?: Maybe<Submission>
  /** Update one submission */
  updateSubmission?: Maybe<Submission>
  /** Delete one submission from _all_ existing stages. Returns deleted document. */
  deleteSubmission?: Maybe<Submission>
  /** Upsert one submission */
  upsertSubmission?: Maybe<Submission>
  /** Publish one submission */
  publishSubmission?: Maybe<Submission>
  /** Unpublish one submission from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSubmission?: Maybe<Submission>
  /** Update many Submission documents */
  updateManySubmissionsConnection: SubmissionConnection
  /** Delete many Submission documents, return deleted documents */
  deleteManySubmissionsConnection: SubmissionConnection
  /** Publish many Submission documents */
  publishManySubmissionsConnection: SubmissionConnection
  /** Find many Submission documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySubmissionsConnection: SubmissionConnection
  /**
   * Update many submissions
   * @deprecated Please use the new paginated many mutation (updateManySubmissionsConnection)
   */
  updateManySubmissions: BatchPayload
  /**
   * Delete many Submission documents
   * @deprecated Please use the new paginated many mutation (deleteManySubmissionsConnection)
   */
  deleteManySubmissions: BatchPayload
  /**
   * Publish many Submission documents
   * @deprecated Please use the new paginated many mutation (publishManySubmissionsConnection)
   */
  publishManySubmissions: BatchPayload
  /**
   * Unpublish many Submission documents
   * @deprecated Please use the new paginated many mutation (unpublishManySubmissionsConnection)
   */
  unpublishManySubmissions: BatchPayload
}

export type MutationCreateArticleArgs = {
  data: ArticleCreateInput
}

export type MutationUpdateArticleArgs = {
  where: ArticleWhereUniqueInput
  data: ArticleUpdateInput
}

export type MutationDeleteArticleArgs = {
  where: ArticleWhereUniqueInput
}

export type MutationUpsertArticleArgs = {
  where: ArticleWhereUniqueInput
  upsert: ArticleUpsertInput
}

export type MutationPublishArticleArgs = {
  where: ArticleWhereUniqueInput
  to?: Array<Stage>
}

export type MutationUnpublishArticleArgs = {
  where: ArticleWhereUniqueInput
  from?: Array<Stage>
}

export type MutationUpdateManyArticlesConnectionArgs = {
  where?: Maybe<ArticleManyWhereInput>
  data: ArticleUpdateManyInput
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationDeleteManyArticlesConnectionArgs = {
  where?: Maybe<ArticleManyWhereInput>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationPublishManyArticlesConnectionArgs = {
  where?: Maybe<ArticleManyWhereInput>
  from?: Maybe<Stage>
  to?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationUnpublishManyArticlesConnectionArgs = {
  where?: Maybe<ArticleManyWhereInput>
  stage?: Maybe<Stage>
  from?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationUpdateManyArticlesArgs = {
  where?: Maybe<ArticleManyWhereInput>
  data: ArticleUpdateManyInput
}

export type MutationDeleteManyArticlesArgs = {
  where?: Maybe<ArticleManyWhereInput>
}

export type MutationPublishManyArticlesArgs = {
  where?: Maybe<ArticleManyWhereInput>
  to?: Array<Stage>
}

export type MutationUnpublishManyArticlesArgs = {
  where?: Maybe<ArticleManyWhereInput>
  from?: Array<Stage>
}

export type MutationCreateAssetArgs = {
  data: AssetCreateInput
}

export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput
  data: AssetUpdateInput
}

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput
}

export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput
  upsert: AssetUpsertInput
}

export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput
  locales?: Maybe<Array<Locale>>
  publishBase?: Maybe<Scalars['Boolean']>
  withDefaultLocale?: Maybe<Scalars['Boolean']>
  to?: Array<Stage>
}

export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput
  from?: Array<Stage>
  locales?: Maybe<Array<Locale>>
  unpublishBase?: Maybe<Scalars['Boolean']>
}

export type MutationUpdateManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>
  data: AssetUpdateManyInput
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationDeleteManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationPublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>
  from?: Maybe<Stage>
  to?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
  locales?: Maybe<Array<Locale>>
  publishBase?: Maybe<Scalars['Boolean']>
  withDefaultLocale?: Maybe<Scalars['Boolean']>
}

export type MutationUnpublishManyAssetsConnectionArgs = {
  where?: Maybe<AssetManyWhereInput>
  stage?: Maybe<Stage>
  from?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
  locales?: Maybe<Array<Locale>>
  unpublishBase?: Maybe<Scalars['Boolean']>
}

export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>
  data: AssetUpdateManyInput
}

export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>
}

export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>
  to?: Array<Stage>
  locales?: Maybe<Array<Locale>>
  publishBase?: Maybe<Scalars['Boolean']>
  withDefaultLocale?: Maybe<Scalars['Boolean']>
}

export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>
  from?: Array<Stage>
  locales?: Maybe<Array<Locale>>
  unpublishBase?: Maybe<Scalars['Boolean']>
}

export type MutationCreateFormArgs = {
  data: FormCreateInput
}

export type MutationUpdateFormArgs = {
  where: FormWhereUniqueInput
  data: FormUpdateInput
}

export type MutationDeleteFormArgs = {
  where: FormWhereUniqueInput
}

export type MutationUpsertFormArgs = {
  where: FormWhereUniqueInput
  upsert: FormUpsertInput
}

export type MutationPublishFormArgs = {
  where: FormWhereUniqueInput
  to?: Array<Stage>
}

export type MutationUnpublishFormArgs = {
  where: FormWhereUniqueInput
  from?: Array<Stage>
}

export type MutationUpdateManyFormsConnectionArgs = {
  where?: Maybe<FormManyWhereInput>
  data: FormUpdateManyInput
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationDeleteManyFormsConnectionArgs = {
  where?: Maybe<FormManyWhereInput>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationPublishManyFormsConnectionArgs = {
  where?: Maybe<FormManyWhereInput>
  from?: Maybe<Stage>
  to?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationUnpublishManyFormsConnectionArgs = {
  where?: Maybe<FormManyWhereInput>
  stage?: Maybe<Stage>
  from?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationUpdateManyFormsArgs = {
  where?: Maybe<FormManyWhereInput>
  data: FormUpdateManyInput
}

export type MutationDeleteManyFormsArgs = {
  where?: Maybe<FormManyWhereInput>
}

export type MutationPublishManyFormsArgs = {
  where?: Maybe<FormManyWhereInput>
  to?: Array<Stage>
}

export type MutationUnpublishManyFormsArgs = {
  where?: Maybe<FormManyWhereInput>
  from?: Array<Stage>
}

export type MutationCreateFormCheckboxArgs = {
  data: FormCheckboxCreateInput
}

export type MutationUpdateFormCheckboxArgs = {
  where: FormCheckboxWhereUniqueInput
  data: FormCheckboxUpdateInput
}

export type MutationDeleteFormCheckboxArgs = {
  where: FormCheckboxWhereUniqueInput
}

export type MutationUpsertFormCheckboxArgs = {
  where: FormCheckboxWhereUniqueInput
  upsert: FormCheckboxUpsertInput
}

export type MutationPublishFormCheckboxArgs = {
  where: FormCheckboxWhereUniqueInput
  to?: Array<Stage>
}

export type MutationUnpublishFormCheckboxArgs = {
  where: FormCheckboxWhereUniqueInput
  from?: Array<Stage>
}

export type MutationUpdateManyFormCheckboxesConnectionArgs = {
  where?: Maybe<FormCheckboxManyWhereInput>
  data: FormCheckboxUpdateManyInput
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationDeleteManyFormCheckboxesConnectionArgs = {
  where?: Maybe<FormCheckboxManyWhereInput>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationPublishManyFormCheckboxesConnectionArgs = {
  where?: Maybe<FormCheckboxManyWhereInput>
  from?: Maybe<Stage>
  to?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationUnpublishManyFormCheckboxesConnectionArgs = {
  where?: Maybe<FormCheckboxManyWhereInput>
  stage?: Maybe<Stage>
  from?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationUpdateManyFormCheckboxesArgs = {
  where?: Maybe<FormCheckboxManyWhereInput>
  data: FormCheckboxUpdateManyInput
}

export type MutationDeleteManyFormCheckboxesArgs = {
  where?: Maybe<FormCheckboxManyWhereInput>
}

export type MutationPublishManyFormCheckboxesArgs = {
  where?: Maybe<FormCheckboxManyWhereInput>
  to?: Array<Stage>
}

export type MutationUnpublishManyFormCheckboxesArgs = {
  where?: Maybe<FormCheckboxManyWhereInput>
  from?: Array<Stage>
}

export type MutationCreateFormInputArgs = {
  data: FormInputCreateInput
}

export type MutationUpdateFormInputArgs = {
  where: FormInputWhereUniqueInput
  data: FormInputUpdateInput
}

export type MutationDeleteFormInputArgs = {
  where: FormInputWhereUniqueInput
}

export type MutationUpsertFormInputArgs = {
  where: FormInputWhereUniqueInput
  upsert: FormInputUpsertInput
}

export type MutationPublishFormInputArgs = {
  where: FormInputWhereUniqueInput
  to?: Array<Stage>
}

export type MutationUnpublishFormInputArgs = {
  where: FormInputWhereUniqueInput
  from?: Array<Stage>
}

export type MutationUpdateManyFormInputsConnectionArgs = {
  where?: Maybe<FormInputManyWhereInput>
  data: FormInputUpdateManyInput
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationDeleteManyFormInputsConnectionArgs = {
  where?: Maybe<FormInputManyWhereInput>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationPublishManyFormInputsConnectionArgs = {
  where?: Maybe<FormInputManyWhereInput>
  from?: Maybe<Stage>
  to?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationUnpublishManyFormInputsConnectionArgs = {
  where?: Maybe<FormInputManyWhereInput>
  stage?: Maybe<Stage>
  from?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationUpdateManyFormInputsArgs = {
  where?: Maybe<FormInputManyWhereInput>
  data: FormInputUpdateManyInput
}

export type MutationDeleteManyFormInputsArgs = {
  where?: Maybe<FormInputManyWhereInput>
}

export type MutationPublishManyFormInputsArgs = {
  where?: Maybe<FormInputManyWhereInput>
  to?: Array<Stage>
}

export type MutationUnpublishManyFormInputsArgs = {
  where?: Maybe<FormInputManyWhereInput>
  from?: Array<Stage>
}

export type MutationCreateFormOptionArgs = {
  data: FormOptionCreateInput
}

export type MutationUpdateFormOptionArgs = {
  where: FormOptionWhereUniqueInput
  data: FormOptionUpdateInput
}

export type MutationDeleteFormOptionArgs = {
  where: FormOptionWhereUniqueInput
}

export type MutationUpsertFormOptionArgs = {
  where: FormOptionWhereUniqueInput
  upsert: FormOptionUpsertInput
}

export type MutationPublishFormOptionArgs = {
  where: FormOptionWhereUniqueInput
  to?: Array<Stage>
}

export type MutationUnpublishFormOptionArgs = {
  where: FormOptionWhereUniqueInput
  from?: Array<Stage>
}

export type MutationUpdateManyFormOptionsConnectionArgs = {
  where?: Maybe<FormOptionManyWhereInput>
  data: FormOptionUpdateManyInput
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationDeleteManyFormOptionsConnectionArgs = {
  where?: Maybe<FormOptionManyWhereInput>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationPublishManyFormOptionsConnectionArgs = {
  where?: Maybe<FormOptionManyWhereInput>
  from?: Maybe<Stage>
  to?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationUnpublishManyFormOptionsConnectionArgs = {
  where?: Maybe<FormOptionManyWhereInput>
  stage?: Maybe<Stage>
  from?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationUpdateManyFormOptionsArgs = {
  where?: Maybe<FormOptionManyWhereInput>
  data: FormOptionUpdateManyInput
}

export type MutationDeleteManyFormOptionsArgs = {
  where?: Maybe<FormOptionManyWhereInput>
}

export type MutationPublishManyFormOptionsArgs = {
  where?: Maybe<FormOptionManyWhereInput>
  to?: Array<Stage>
}

export type MutationUnpublishManyFormOptionsArgs = {
  where?: Maybe<FormOptionManyWhereInput>
  from?: Array<Stage>
}

export type MutationCreateFormSelectArgs = {
  data: FormSelectCreateInput
}

export type MutationUpdateFormSelectArgs = {
  where: FormSelectWhereUniqueInput
  data: FormSelectUpdateInput
}

export type MutationDeleteFormSelectArgs = {
  where: FormSelectWhereUniqueInput
}

export type MutationUpsertFormSelectArgs = {
  where: FormSelectWhereUniqueInput
  upsert: FormSelectUpsertInput
}

export type MutationPublishFormSelectArgs = {
  where: FormSelectWhereUniqueInput
  to?: Array<Stage>
}

export type MutationUnpublishFormSelectArgs = {
  where: FormSelectWhereUniqueInput
  from?: Array<Stage>
}

export type MutationUpdateManyFormSelectsConnectionArgs = {
  where?: Maybe<FormSelectManyWhereInput>
  data: FormSelectUpdateManyInput
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationDeleteManyFormSelectsConnectionArgs = {
  where?: Maybe<FormSelectManyWhereInput>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationPublishManyFormSelectsConnectionArgs = {
  where?: Maybe<FormSelectManyWhereInput>
  from?: Maybe<Stage>
  to?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationUnpublishManyFormSelectsConnectionArgs = {
  where?: Maybe<FormSelectManyWhereInput>
  stage?: Maybe<Stage>
  from?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationUpdateManyFormSelectsArgs = {
  where?: Maybe<FormSelectManyWhereInput>
  data: FormSelectUpdateManyInput
}

export type MutationDeleteManyFormSelectsArgs = {
  where?: Maybe<FormSelectManyWhereInput>
}

export type MutationPublishManyFormSelectsArgs = {
  where?: Maybe<FormSelectManyWhereInput>
  to?: Array<Stage>
}

export type MutationUnpublishManyFormSelectsArgs = {
  where?: Maybe<FormSelectManyWhereInput>
  from?: Array<Stage>
}

export type MutationCreateFormTextareaArgs = {
  data: FormTextareaCreateInput
}

export type MutationUpdateFormTextareaArgs = {
  where: FormTextareaWhereUniqueInput
  data: FormTextareaUpdateInput
}

export type MutationDeleteFormTextareaArgs = {
  where: FormTextareaWhereUniqueInput
}

export type MutationUpsertFormTextareaArgs = {
  where: FormTextareaWhereUniqueInput
  upsert: FormTextareaUpsertInput
}

export type MutationPublishFormTextareaArgs = {
  where: FormTextareaWhereUniqueInput
  to?: Array<Stage>
}

export type MutationUnpublishFormTextareaArgs = {
  where: FormTextareaWhereUniqueInput
  from?: Array<Stage>
}

export type MutationUpdateManyFormTextareasConnectionArgs = {
  where?: Maybe<FormTextareaManyWhereInput>
  data: FormTextareaUpdateManyInput
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationDeleteManyFormTextareasConnectionArgs = {
  where?: Maybe<FormTextareaManyWhereInput>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationPublishManyFormTextareasConnectionArgs = {
  where?: Maybe<FormTextareaManyWhereInput>
  from?: Maybe<Stage>
  to?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationUnpublishManyFormTextareasConnectionArgs = {
  where?: Maybe<FormTextareaManyWhereInput>
  stage?: Maybe<Stage>
  from?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationUpdateManyFormTextareasArgs = {
  where?: Maybe<FormTextareaManyWhereInput>
  data: FormTextareaUpdateManyInput
}

export type MutationDeleteManyFormTextareasArgs = {
  where?: Maybe<FormTextareaManyWhereInput>
}

export type MutationPublishManyFormTextareasArgs = {
  where?: Maybe<FormTextareaManyWhereInput>
  to?: Array<Stage>
}

export type MutationUnpublishManyFormTextareasArgs = {
  where?: Maybe<FormTextareaManyWhereInput>
  from?: Array<Stage>
}

export type MutationCreatePageArgs = {
  data: PageCreateInput
}

export type MutationUpdatePageArgs = {
  where: PageWhereUniqueInput
  data: PageUpdateInput
}

export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput
}

export type MutationUpsertPageArgs = {
  where: PageWhereUniqueInput
  upsert: PageUpsertInput
}

export type MutationPublishPageArgs = {
  where: PageWhereUniqueInput
  locales?: Maybe<Array<Locale>>
  publishBase?: Maybe<Scalars['Boolean']>
  withDefaultLocale?: Maybe<Scalars['Boolean']>
  to?: Array<Stage>
}

export type MutationUnpublishPageArgs = {
  where: PageWhereUniqueInput
  from?: Array<Stage>
  locales?: Maybe<Array<Locale>>
  unpublishBase?: Maybe<Scalars['Boolean']>
}

export type MutationUpdateManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>
  data: PageUpdateManyInput
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationDeleteManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationPublishManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>
  from?: Maybe<Stage>
  to?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
  locales?: Maybe<Array<Locale>>
  publishBase?: Maybe<Scalars['Boolean']>
  withDefaultLocale?: Maybe<Scalars['Boolean']>
}

export type MutationUnpublishManyPagesConnectionArgs = {
  where?: Maybe<PageManyWhereInput>
  stage?: Maybe<Stage>
  from?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
  locales?: Maybe<Array<Locale>>
  unpublishBase?: Maybe<Scalars['Boolean']>
}

export type MutationUpdateManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>
  data: PageUpdateManyInput
}

export type MutationDeleteManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>
}

export type MutationPublishManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>
  to?: Array<Stage>
  locales?: Maybe<Array<Locale>>
  publishBase?: Maybe<Scalars['Boolean']>
  withDefaultLocale?: Maybe<Scalars['Boolean']>
}

export type MutationUnpublishManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>
  from?: Array<Stage>
  locales?: Maybe<Array<Locale>>
  unpublishBase?: Maybe<Scalars['Boolean']>
}

export type MutationCreateSubmissionArgs = {
  data: SubmissionCreateInput
}

export type MutationUpdateSubmissionArgs = {
  where: SubmissionWhereUniqueInput
  data: SubmissionUpdateInput
}

export type MutationDeleteSubmissionArgs = {
  where: SubmissionWhereUniqueInput
}

export type MutationUpsertSubmissionArgs = {
  where: SubmissionWhereUniqueInput
  upsert: SubmissionUpsertInput
}

export type MutationPublishSubmissionArgs = {
  where: SubmissionWhereUniqueInput
  to?: Array<Stage>
}

export type MutationUnpublishSubmissionArgs = {
  where: SubmissionWhereUniqueInput
  from?: Array<Stage>
}

export type MutationUpdateManySubmissionsConnectionArgs = {
  where?: Maybe<SubmissionManyWhereInput>
  data: SubmissionUpdateManyInput
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationDeleteManySubmissionsConnectionArgs = {
  where?: Maybe<SubmissionManyWhereInput>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationPublishManySubmissionsConnectionArgs = {
  where?: Maybe<SubmissionManyWhereInput>
  from?: Maybe<Stage>
  to?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationUnpublishManySubmissionsConnectionArgs = {
  where?: Maybe<SubmissionManyWhereInput>
  stage?: Maybe<Stage>
  from?: Array<Stage>
  skip?: Maybe<Scalars['Int']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['ID']>
  after?: Maybe<Scalars['ID']>
}

export type MutationUpdateManySubmissionsArgs = {
  where?: Maybe<SubmissionManyWhereInput>
  data: SubmissionUpdateManyInput
}

export type MutationDeleteManySubmissionsArgs = {
  where?: Maybe<SubmissionManyWhereInput>
}

export type MutationPublishManySubmissionsArgs = {
  where?: Maybe<SubmissionManyWhereInput>
  to?: Array<Stage>
}

export type MutationUnpublishManySubmissionsArgs = {
  where?: Maybe<SubmissionManyWhereInput>
  from?: Array<Stage>
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']
  /** The Stage of an object */
  stage: Stage
}

export type Page = Node & {
  __typename?: 'Page'
  /** System stage field */
  stage: Stage
  /** System Locale field */
  locale: Locale
  /** Get the other localizations for this document */
  localizations: Array<Page>
  /** Get the document in other stages */
  documentInStages: Array<Page>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  slug: Scalars['String']
  title: Scalars['String']
  isNavigation: Scalars['Boolean']
  isHeader: Scalars['Boolean']
  content: Array<Scalars['String']>
  form?: Maybe<Form>
  /** List of Page versions */
  history: Array<Version>
}

export type PageLocalizationsArgs = {
  locales?: Array<Locale>
  includeCurrent?: Scalars['Boolean']
}

export type PageDocumentInStagesArgs = {
  stages?: Array<Stage>
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
}

export type PageCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

export type PageUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

export type PagePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

export type PageFormArgs = {
  locales?: Maybe<Array<Locale>>
}

export type PageHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<Stage>
}

export type PageConnectInput = {
  /** Document to connect */
  where: PageWhereUniqueInput
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>
}

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: 'PageConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<PageEdge>
  aggregate: Aggregate
}

export type PageCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  slug: Scalars['String']
  /** title input for default locale (en) */
  title: Scalars['String']
  isNavigation: Scalars['Boolean']
  isHeader: Scalars['Boolean']
  /** content input for default locale (en) */
  content?: Maybe<Array<Scalars['String']>>
  form?: Maybe<FormCreateOneInlineInput>
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<PageCreateLocalizationsInput>
}

export type PageCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  title: Scalars['String']
  content?: Maybe<Array<Scalars['String']>>
}

export type PageCreateLocalizationInput = {
  /** Localization input */
  data: PageCreateLocalizationDataInput
  locale: Locale
}

export type PageCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<PageCreateLocalizationInput>>
}

export type PageCreateManyInlineInput = {
  /** Create and connect multiple existing Page documents */
  create?: Maybe<Array<PageCreateInput>>
  /** Connect multiple existing Page documents */
  connect?: Maybe<Array<PageWhereUniqueInput>>
}

export type PageCreateOneInlineInput = {
  /** Create and connect one Page document */
  create?: Maybe<PageCreateInput>
  /** Connect one existing Page document */
  connect?: Maybe<PageWhereUniqueInput>
}

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge'
  /** The item at the end of the edge. */
  node: Page
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>
}

/** Identifies documents */
export type PageManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  slug?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>
  isNavigation?: Maybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isNavigation_not?: Maybe<Scalars['Boolean']>
  isHeader?: Maybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isHeader_not?: Maybe<Scalars['Boolean']>
  form?: Maybe<FormWhereInput>
}

export enum PageOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  IsNavigationAsc = 'isNavigation_ASC',
  IsNavigationDesc = 'isNavigation_DESC',
  IsHeaderAsc = 'isHeader_ASC',
  IsHeaderDesc = 'isHeader_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC'
}

export type PageUpdateInput = {
  slug?: Maybe<Scalars['String']>
  /** title input for default locale (en) */
  title?: Maybe<Scalars['String']>
  isNavigation?: Maybe<Scalars['Boolean']>
  isHeader?: Maybe<Scalars['Boolean']>
  /** content input for default locale (en) */
  content?: Maybe<Array<Scalars['String']>>
  form?: Maybe<FormUpdateOneInlineInput>
  /** Manage document localizations */
  localizations?: Maybe<PageUpdateLocalizationsInput>
}

export type PageUpdateLocalizationDataInput = {
  title?: Maybe<Scalars['String']>
  content?: Maybe<Array<Scalars['String']>>
}

export type PageUpdateLocalizationInput = {
  data: PageUpdateLocalizationDataInput
  locale: Locale
}

export type PageUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<PageCreateLocalizationInput>>
  /** Localizations to update */
  update?: Maybe<Array<PageUpdateLocalizationInput>>
  upsert?: Maybe<Array<PageUpsertLocalizationInput>>
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>
}

export type PageUpdateManyInlineInput = {
  /** Create and connect multiple Page documents */
  create?: Maybe<Array<PageCreateInput>>
  /** Connect multiple existing Page documents */
  connect?: Maybe<Array<PageConnectInput>>
  /** Override currently-connected documents with multiple existing Page documents */
  set?: Maybe<Array<PageWhereUniqueInput>>
  /** Update multiple Page documents */
  update?: Maybe<Array<PageUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Page documents */
  upsert?: Maybe<Array<PageUpsertWithNestedWhereUniqueInput>>
  /** Disconnect multiple Page documents */
  disconnect?: Maybe<Array<PageWhereUniqueInput>>
  /** Delete multiple Page documents */
  delete?: Maybe<Array<PageWhereUniqueInput>>
}

export type PageUpdateManyInput = {
  isNavigation?: Maybe<Scalars['Boolean']>
  isHeader?: Maybe<Scalars['Boolean']>
  /** content input for default locale (en) */
  content?: Maybe<Array<Scalars['String']>>
  /** Optional updates to localizations */
  localizations?: Maybe<PageUpdateManyLocalizationsInput>
}

export type PageUpdateManyLocalizationDataInput = {
  content?: Maybe<Array<Scalars['String']>>
}

export type PageUpdateManyLocalizationInput = {
  data: PageUpdateManyLocalizationDataInput
  locale: Locale
}

export type PageUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<PageUpdateManyLocalizationInput>>
}

export type PageUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: PageWhereInput
  /** Update many input */
  data: PageUpdateManyInput
}

export type PageUpdateOneInlineInput = {
  /** Create and connect one Page document */
  create?: Maybe<PageCreateInput>
  /** Update single Page document */
  update?: Maybe<PageUpdateWithNestedWhereUniqueInput>
  /** Upsert single Page document */
  upsert?: Maybe<PageUpsertWithNestedWhereUniqueInput>
  /** Connect existing Page document */
  connect?: Maybe<PageWhereUniqueInput>
  /** Disconnect currently connected Page document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Delete currently connected Page document */
  delete?: Maybe<Scalars['Boolean']>
}

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PageWhereUniqueInput
  /** Document to update */
  data: PageUpdateInput
}

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput
  /** Update document if it exists */
  update: PageUpdateInput
}

export type PageUpsertLocalizationInput = {
  update: PageUpdateLocalizationDataInput
  create: PageCreateLocalizationDataInput
  locale: Locale
}

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: PageWhereUniqueInput
  /** Upsert data */
  data: PageUpsertInput
}

/** Identifies documents */
export type PageWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  slug?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>
  isNavigation?: Maybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isNavigation_not?: Maybe<Scalars['Boolean']>
  isHeader?: Maybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isHeader_not?: Maybe<Scalars['Boolean']>
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  content?: Maybe<Array<Scalars['String']>>
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  content_not?: Maybe<Array<Scalars['String']>>
  /** Matches if the field array contains *all* items provided to the filter */
  content_contains_all?: Maybe<Array<Scalars['String']>>
  /** Matches if the field array contains at least one item provided to the filter */
  content_contains_some?: Maybe<Array<Scalars['String']>>
  /** Matches if the field array does not contain any of the items provided to the filter */
  content_contains_none?: Maybe<Array<Scalars['String']>>
  form?: Maybe<FormWhereInput>
}

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
  slug?: Maybe<Scalars['String']>
}

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale
  /** Stages to publish selected locales to */
  stages: Array<Stage>
}

export type Query = {
  __typename?: 'Query'
  /** Fetches an object given its ID */
  node?: Maybe<Node>
  /** Retrieve multiple articles */
  articles: Array<Article>
  /** Retrieve a single article */
  article?: Maybe<Article>
  /** Retrieve multiple articles using the Relay connection interface */
  articlesConnection: ArticleConnection
  /** Retrieve document version */
  articleVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple assets */
  assets: Array<Asset>
  /** Retrieve a single asset */
  asset?: Maybe<Asset>
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple forms */
  forms: Array<Form>
  /** Retrieve a single form */
  form?: Maybe<Form>
  /** Retrieve multiple forms using the Relay connection interface */
  formsConnection: FormConnection
  /** Retrieve document version */
  formVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple formCheckboxes */
  formCheckboxes: Array<FormCheckbox>
  /** Retrieve a single formCheckbox */
  formCheckbox?: Maybe<FormCheckbox>
  /** Retrieve multiple formCheckboxes using the Relay connection interface */
  formCheckboxesConnection: FormCheckboxConnection
  /** Retrieve document version */
  formCheckboxVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple formInputs */
  formInputs: Array<FormInput>
  /** Retrieve a single formInput */
  formInput?: Maybe<FormInput>
  /** Retrieve multiple formInputs using the Relay connection interface */
  formInputsConnection: FormInputConnection
  /** Retrieve document version */
  formInputVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple formOptions */
  formOptions: Array<FormOption>
  /** Retrieve a single formOption */
  formOption?: Maybe<FormOption>
  /** Retrieve multiple formOptions using the Relay connection interface */
  formOptionsConnection: FormOptionConnection
  /** Retrieve document version */
  formOptionVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple formSelects */
  formSelects: Array<FormSelect>
  /** Retrieve a single formSelect */
  formSelect?: Maybe<FormSelect>
  /** Retrieve multiple formSelects using the Relay connection interface */
  formSelectsConnection: FormSelectConnection
  /** Retrieve document version */
  formSelectVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple formTextareas */
  formTextareas: Array<FormTextarea>
  /** Retrieve a single formTextarea */
  formTextarea?: Maybe<FormTextarea>
  /** Retrieve multiple formTextareas using the Relay connection interface */
  formTextareasConnection: FormTextareaConnection
  /** Retrieve document version */
  formTextareaVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple pages */
  pages: Array<Page>
  /** Retrieve a single page */
  page?: Maybe<Page>
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple submissions */
  submissions: Array<Submission>
  /** Retrieve a single submission */
  submission?: Maybe<Submission>
  /** Retrieve multiple submissions using the Relay connection interface */
  submissionsConnection: SubmissionConnection
  /** Retrieve document version */
  submissionVersion?: Maybe<DocumentVersion>
}

export type QueryNodeArgs = {
  id: Scalars['ID']
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryArticlesArgs = {
  where?: Maybe<ArticleWhereInput>
  orderBy?: Maybe<ArticleOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryArticleArgs = {
  where: ArticleWhereUniqueInput
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryArticlesConnectionArgs = {
  where?: Maybe<ArticleWhereInput>
  orderBy?: Maybe<ArticleOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryArticleVersionArgs = {
  where: VersionWhereInput
}

export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>
  orderBy?: Maybe<AssetOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryAssetArgs = {
  where: AssetWhereUniqueInput
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>
  orderBy?: Maybe<AssetOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryAssetVersionArgs = {
  where: VersionWhereInput
}

export type QueryFormsArgs = {
  where?: Maybe<FormWhereInput>
  orderBy?: Maybe<FormOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryFormArgs = {
  where: FormWhereUniqueInput
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryFormsConnectionArgs = {
  where?: Maybe<FormWhereInput>
  orderBy?: Maybe<FormOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryFormVersionArgs = {
  where: VersionWhereInput
}

export type QueryFormCheckboxesArgs = {
  where?: Maybe<FormCheckboxWhereInput>
  orderBy?: Maybe<FormCheckboxOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryFormCheckboxArgs = {
  where: FormCheckboxWhereUniqueInput
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryFormCheckboxesConnectionArgs = {
  where?: Maybe<FormCheckboxWhereInput>
  orderBy?: Maybe<FormCheckboxOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryFormCheckboxVersionArgs = {
  where: VersionWhereInput
}

export type QueryFormInputsArgs = {
  where?: Maybe<FormInputWhereInput>
  orderBy?: Maybe<FormInputOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryFormInputArgs = {
  where: FormInputWhereUniqueInput
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryFormInputsConnectionArgs = {
  where?: Maybe<FormInputWhereInput>
  orderBy?: Maybe<FormInputOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryFormInputVersionArgs = {
  where: VersionWhereInput
}

export type QueryFormOptionsArgs = {
  where?: Maybe<FormOptionWhereInput>
  orderBy?: Maybe<FormOptionOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryFormOptionArgs = {
  where: FormOptionWhereUniqueInput
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryFormOptionsConnectionArgs = {
  where?: Maybe<FormOptionWhereInput>
  orderBy?: Maybe<FormOptionOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryFormOptionVersionArgs = {
  where: VersionWhereInput
}

export type QueryFormSelectsArgs = {
  where?: Maybe<FormSelectWhereInput>
  orderBy?: Maybe<FormSelectOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryFormSelectArgs = {
  where: FormSelectWhereUniqueInput
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryFormSelectsConnectionArgs = {
  where?: Maybe<FormSelectWhereInput>
  orderBy?: Maybe<FormSelectOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryFormSelectVersionArgs = {
  where: VersionWhereInput
}

export type QueryFormTextareasArgs = {
  where?: Maybe<FormTextareaWhereInput>
  orderBy?: Maybe<FormTextareaOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryFormTextareaArgs = {
  where: FormTextareaWhereUniqueInput
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryFormTextareasConnectionArgs = {
  where?: Maybe<FormTextareaWhereInput>
  orderBy?: Maybe<FormTextareaOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryFormTextareaVersionArgs = {
  where: VersionWhereInput
}

export type QueryPagesArgs = {
  where?: Maybe<PageWhereInput>
  orderBy?: Maybe<PageOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryPageArgs = {
  where: PageWhereUniqueInput
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryPagesConnectionArgs = {
  where?: Maybe<PageWhereInput>
  orderBy?: Maybe<PageOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QueryPageVersionArgs = {
  where: VersionWhereInput
}

export type QuerySubmissionsArgs = {
  where?: Maybe<SubmissionWhereInput>
  orderBy?: Maybe<SubmissionOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QuerySubmissionArgs = {
  where: SubmissionWhereUniqueInput
  stage?: Stage
  locales?: Array<Locale>
}

export type QuerySubmissionsConnectionArgs = {
  where?: Maybe<SubmissionWhereInput>
  orderBy?: Maybe<SubmissionOrderByInput>
  skip?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  stage?: Stage
  locales?: Array<Locale>
}

export type QuerySubmissionVersionArgs = {
  where: VersionWhereInput
}

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA'
  r: Scalars['RGBAHue']
  g: Scalars['RGBAHue']
  b: Scalars['RGBAHue']
  a: Scalars['RGBATransparency']
}

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue']
  g: Scalars['RGBAHue']
  b: Scalars['RGBAHue']
  a: Scalars['RGBATransparency']
}

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText'
  /** Returns AST representation */
  raw: Scalars['RichTextAST']
  /** Returns HTMl representation */
  html: Scalars['String']
  /** Returns Markdown representation */
  markdown: Scalars['String']
  /** Returns plain-text contents of RichText */
  text: Scalars['String']
}

/** Stage system enumeration */
export enum Stage {
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED',
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT'
}

export type Submission = Node & {
  __typename?: 'Submission'
  /** System stage field */
  stage: Stage
  /** Get the document in other stages */
  documentInStages: Array<Submission>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  formData?: Maybe<Scalars['Json']>
  form?: Maybe<Form>
  /** List of Submission versions */
  history: Array<Version>
}

export type SubmissionDocumentInStagesArgs = {
  stages?: Array<Stage>
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
}

export type SubmissionFormArgs = {
  locales?: Maybe<Array<Locale>>
}

export type SubmissionHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: Maybe<Stage>
}

export type SubmissionConnectInput = {
  /** Document to connect */
  where: SubmissionWhereUniqueInput
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>
}

/** A connection to a list of items. */
export type SubmissionConnection = {
  __typename?: 'SubmissionConnection'
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges: Array<SubmissionEdge>
  aggregate: Aggregate
}

export type SubmissionCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  formData?: Maybe<Scalars['Json']>
  form?: Maybe<FormCreateOneInlineInput>
}

export type SubmissionCreateManyInlineInput = {
  /** Create and connect multiple existing Submission documents */
  create?: Maybe<Array<SubmissionCreateInput>>
  /** Connect multiple existing Submission documents */
  connect?: Maybe<Array<SubmissionWhereUniqueInput>>
}

export type SubmissionCreateOneInlineInput = {
  /** Create and connect one Submission document */
  create?: Maybe<SubmissionCreateInput>
  /** Connect one existing Submission document */
  connect?: Maybe<SubmissionWhereUniqueInput>
}

/** An edge in a connection. */
export type SubmissionEdge = {
  __typename?: 'SubmissionEdge'
  /** The item at the end of the edge. */
  node: Submission
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Identifies documents */
export type SubmissionManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SubmissionWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SubmissionWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SubmissionWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  form?: Maybe<FormWhereInput>
}

export enum SubmissionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC'
}

export type SubmissionUpdateInput = {
  formData?: Maybe<Scalars['Json']>
  form?: Maybe<FormUpdateOneInlineInput>
}

export type SubmissionUpdateManyInlineInput = {
  /** Create and connect multiple Submission documents */
  create?: Maybe<Array<SubmissionCreateInput>>
  /** Connect multiple existing Submission documents */
  connect?: Maybe<Array<SubmissionConnectInput>>
  /** Override currently-connected documents with multiple existing Submission documents */
  set?: Maybe<Array<SubmissionWhereUniqueInput>>
  /** Update multiple Submission documents */
  update?: Maybe<Array<SubmissionUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Submission documents */
  upsert?: Maybe<Array<SubmissionUpsertWithNestedWhereUniqueInput>>
  /** Disconnect multiple Submission documents */
  disconnect?: Maybe<Array<SubmissionWhereUniqueInput>>
  /** Delete multiple Submission documents */
  delete?: Maybe<Array<SubmissionWhereUniqueInput>>
}

export type SubmissionUpdateManyInput = {
  formData?: Maybe<Scalars['Json']>
}

export type SubmissionUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: SubmissionWhereInput
  /** Update many input */
  data: SubmissionUpdateManyInput
}

export type SubmissionUpdateOneInlineInput = {
  /** Create and connect one Submission document */
  create?: Maybe<SubmissionCreateInput>
  /** Update single Submission document */
  update?: Maybe<SubmissionUpdateWithNestedWhereUniqueInput>
  /** Upsert single Submission document */
  upsert?: Maybe<SubmissionUpsertWithNestedWhereUniqueInput>
  /** Connect existing Submission document */
  connect?: Maybe<SubmissionWhereUniqueInput>
  /** Disconnect currently connected Submission document */
  disconnect?: Maybe<Scalars['Boolean']>
  /** Delete currently connected Submission document */
  delete?: Maybe<Scalars['Boolean']>
}

export type SubmissionUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SubmissionWhereUniqueInput
  /** Document to update */
  data: SubmissionUpdateInput
}

export type SubmissionUpsertInput = {
  /** Create document if it didn't exist */
  create: SubmissionCreateInput
  /** Update document if it exists */
  update: SubmissionUpdateInput
}

export type SubmissionUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: SubmissionWhereUniqueInput
  /** Upsert data */
  data: SubmissionUpsertInput
}

/** Identifies documents */
export type SubmissionWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SubmissionWhereInput>>
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SubmissionWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SubmissionWhereInput>>
  id?: Maybe<Scalars['ID']>
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt?: Maybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  form?: Maybe<FormWhereInput>
}

/** References Submission record uniquely */
export type SubmissionWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Localization = 'LOCALIZATION',
  Combined = 'COMBINED'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>
}

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

export type Version = {
  __typename?: 'Version'
  id: Scalars['ID']
  stage: Stage
  revision: Scalars['Int']
  createdAt: Scalars['DateTime']
}

export type VersionWhereInput = {
  id: Scalars['ID']
  stage: Stage
  revision: Scalars['Int']
}

export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none'
}

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Localization = 'localization',
  Combined = 'combined'
}

export type CreateSubmissionMutationVariables = Exact<{
  formData: Scalars['Json']
  formId: Scalars['ID']
}>

export type CreateSubmissionMutation = { __typename?: 'Mutation' } & {
  createSubmission?: Maybe<
    { __typename?: 'Submission' } & Pick<Submission, 'id'>
  >
}

export type LayoutQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>
}>

export type LayoutQuery = { __typename?: 'Query' } & {
  pages: Array<{ __typename?: 'Page' } & Pick<Page, 'id' | 'title' | 'slug'>>
  page?: Maybe<
    { __typename?: 'Page' } & Pick<
      Page,
      'id' | 'title' | 'slug' | 'content'
    > & {
        form?: Maybe<
          { __typename?: 'Form' } & Pick<Form, 'id'> & {
              fields: Array<
                | { __typename: 'FormCheckbox' }
                | ({ __typename: 'FormInput' } & Pick<
                    FormInput,
                    | 'name'
                    | 'type'
                    | 'label'
                    | 'rules'
                    | 'placeholder'
                    | 'required'
                  >)
                | { __typename: 'FormOption' }
                | ({ __typename: 'FormSelect' } & Pick<
                    FormSelect,
                    'name' | 'label' | 'rules' | 'required'
                  > & {
                      options: Array<
                        { __typename?: 'FormOption' } & Pick<
                          FormOption,
                          'value' | 'option'
                        >
                      >
                    })
                | { __typename: 'FormTextarea' }
              >
            }
        >
      }
  >
}

export const CreateSubmissionDocument = gql`
  mutation createSubmission($formData: Json!, $formId: ID!) {
    createSubmission(
      data: { formData: $formData, form: { connect: { id: $formId } } }
    ) {
      id
    }
  }
`
export type CreateSubmissionMutationFn = Apollo.MutationFunction<
  CreateSubmissionMutation,
  CreateSubmissionMutationVariables
>
export type CreateSubmissionComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateSubmissionMutation,
    CreateSubmissionMutationVariables
  >,
  'mutation'
>

export const CreateSubmissionComponent = (
  props: CreateSubmissionComponentProps
) => (
  <ApolloReactComponents.Mutation<
    CreateSubmissionMutation,
    CreateSubmissionMutationVariables
  >
    mutation={CreateSubmissionDocument}
    {...props}
  />
)

/**
 * __useCreateSubmissionMutation__
 *
 * To run a mutation, you first call `useCreateSubmissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubmissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubmissionMutation, { data, loading, error }] = useCreateSubmissionMutation({
 *   variables: {
 *      formData: // value for 'formData'
 *      formId: // value for 'formId'
 *   },
 * });
 */
export function useCreateSubmissionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSubmissionMutation,
    CreateSubmissionMutationVariables
  >
) {
  return Apollo.useMutation<
    CreateSubmissionMutation,
    CreateSubmissionMutationVariables
  >(CreateSubmissionDocument, baseOptions)
}
export type CreateSubmissionMutationHookResult = ReturnType<
  typeof useCreateSubmissionMutation
>
export type CreateSubmissionMutationResult = Apollo.MutationResult<CreateSubmissionMutation>
export type CreateSubmissionMutationOptions = Apollo.BaseMutationOptions<
  CreateSubmissionMutation,
  CreateSubmissionMutationVariables
>
export const LayoutDocument = gql`
  query Layout($slug: String = "home") {
    pages(where: { isNavigation: true }, orderBy: slug_ASC) {
      id
      title
      slug
    }
    page(where: { slug: $slug }, stage: PUBLISHED) {
      id
      title
      slug
      content
      form {
        id
        fields {
          __typename
          ... on FormInput {
            name
            type
            label
            rules
            placeholder
            required
          }
          ... on FormSelect {
            name
            label
            rules
            options {
              value
              option
            }
            required
          }
        }
      }
    }
  }
`
export type LayoutComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    LayoutQuery,
    LayoutQueryVariables
  >,
  'query'
>

export const LayoutComponent = (props: LayoutComponentProps) => (
  <ApolloReactComponents.Query<LayoutQuery, LayoutQueryVariables>
    query={LayoutDocument}
    {...props}
  />
)

/**
 * __useLayoutQuery__
 *
 * To run a query within a React component, call `useLayoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useLayoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLayoutQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useLayoutQuery(
  baseOptions?: Apollo.QueryHookOptions<LayoutQuery, LayoutQueryVariables>
) {
  return Apollo.useQuery<LayoutQuery, LayoutQueryVariables>(
    LayoutDocument,
    baseOptions
  )
}
export function useLayoutLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<LayoutQuery, LayoutQueryVariables>
) {
  return Apollo.useLazyQuery<LayoutQuery, LayoutQueryVariables>(
    LayoutDocument,
    baseOptions
  )
}
export type LayoutQueryHookResult = ReturnType<typeof useLayoutQuery>
export type LayoutLazyQueryHookResult = ReturnType<typeof useLayoutLazyQuery>
export type LayoutQueryResult = Apollo.QueryResult<
  LayoutQuery,
  LayoutQueryVariables
>
