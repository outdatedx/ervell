/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: KonnectableCell
// ====================================================

export interface KonnectableCell_Attachment_counts {
  __typename: "BlockCounts";
  comments: number;
}

export interface KonnectableCell_Attachment_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface KonnectableCell_Attachment_connection_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface KonnectableCell_Attachment_connection {
  __typename: "Connection";
  created_at: string;
  user: KonnectableCell_Attachment_connection_user | null;
}

export interface KonnectableCell_Attachment_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface KonnectableCell_Attachment {
  __typename: "Attachment";
  id: number;
  href: string;
  counts: KonnectableCell_Attachment_counts;
  updated_at: string;
  title: string;
  user: KonnectableCell_Attachment_user;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: KonnectableCell_Attachment_connection | null;
  src: string | null;
  src_1x: string | null;
  src_2x: string | null;
  src_3x: string | null;
  file_extension: string | null;
  source: KonnectableCell_Attachment_source | null;
}

export interface KonnectableCell_Embed_counts {
  __typename: "BlockCounts";
  comments: number;
}

export interface KonnectableCell_Embed_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface KonnectableCell_Embed_connection_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface KonnectableCell_Embed_connection {
  __typename: "Connection";
  created_at: string;
  user: KonnectableCell_Embed_connection_user | null;
}

export interface KonnectableCell_Embed_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface KonnectableCell_Embed {
  __typename: "Embed";
  id: number;
  href: string;
  counts: KonnectableCell_Embed_counts;
  updated_at: string;
  title: string;
  user: KonnectableCell_Embed_user;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: KonnectableCell_Embed_connection | null;
  src: string | null;
  src_1x: string | null;
  src_2x: string | null;
  src_3x: string | null;
  source: KonnectableCell_Embed_source | null;
}

export interface KonnectableCell_Image_counts {
  __typename: "BlockCounts";
  comments: number;
}

export interface KonnectableCell_Image_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface KonnectableCell_Image_connection_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface KonnectableCell_Image_connection {
  __typename: "Connection";
  created_at: string;
  user: KonnectableCell_Image_connection_user | null;
}

export interface KonnectableCell_Image_original_dimensions {
  __typename: "Dimensions";
  width: number | null;
  height: number | null;
}

export interface KonnectableCell_Image_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface KonnectableCell_Image {
  __typename: "Image";
  id: number;
  href: string;
  counts: KonnectableCell_Image_counts;
  updated_at: string;
  title: string;
  user: KonnectableCell_Image_user;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: KonnectableCell_Image_connection | null;
  alt_text: string | null;
  src: string | null;
  src_1x: string | null;
  src_2x: string | null;
  src_3x: string | null;
  original_dimensions: KonnectableCell_Image_original_dimensions | null;
  source: KonnectableCell_Image_source | null;
}

export interface KonnectableCell_Link_counts {
  __typename: "BlockCounts";
  comments: number;
}

export interface KonnectableCell_Link_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface KonnectableCell_Link_connection_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface KonnectableCell_Link_connection {
  __typename: "Connection";
  created_at: string;
  user: KonnectableCell_Link_connection_user | null;
}

export interface KonnectableCell_Link_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface KonnectableCell_Link {
  __typename: "Link";
  id: number;
  href: string;
  counts: KonnectableCell_Link_counts;
  updated_at: string;
  title: string;
  user: KonnectableCell_Link_user;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: KonnectableCell_Link_connection | null;
  src: string | null;
  src_1x: string | null;
  src_2x: string | null;
  src_3x: string | null;
  external_url: string | null;
  content: string | null;
  source_url: string | null;
  source: KonnectableCell_Link_source | null;
}

export interface KonnectableCell_PendingBlock_counts {
  __typename: "BlockCounts";
  comments: number;
}

export interface KonnectableCell_PendingBlock_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface KonnectableCell_PendingBlock_connection_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface KonnectableCell_PendingBlock_connection {
  __typename: "Connection";
  created_at: string;
  user: KonnectableCell_PendingBlock_connection_user | null;
}

export interface KonnectableCell_PendingBlock_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface KonnectableCell_PendingBlock {
  __typename: "PendingBlock";
  id: number;
  href: string;
  counts: KonnectableCell_PendingBlock_counts;
  updated_at: string;
  title: string;
  user: KonnectableCell_PendingBlock_user;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: KonnectableCell_PendingBlock_connection | null;
  source: KonnectableCell_PendingBlock_source | null;
}

export interface KonnectableCell_Text_counts {
  __typename: "BlockCounts";
  comments: number;
}

export interface KonnectableCell_Text_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface KonnectableCell_Text_connection_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface KonnectableCell_Text_connection {
  __typename: "Connection";
  created_at: string;
  user: KonnectableCell_Text_connection_user | null;
}

export interface KonnectableCell_Text_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface KonnectableCell_Text {
  __typename: "Text";
  id: number;
  href: string;
  counts: KonnectableCell_Text_counts;
  updated_at: string;
  title: string;
  user: KonnectableCell_Text_user;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: KonnectableCell_Text_connection | null;
  content: string;
  raw: string;
  source: KonnectableCell_Text_source | null;
}

export interface KonnectableCell_Channel_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface KonnectableCell_Channel_connection_user {
  __typename: "User";
  id: number;
  name: string;
}

export interface KonnectableCell_Channel_connection {
  __typename: "Connection";
  created_at: string;
  user: KonnectableCell_Channel_connection_user | null;
}

export interface KonnectableCell_Channel_counts {
  __typename: "ChannelCounts";
  contents: number;
}

export interface KonnectableCell_Channel_owner_Group {
  __typename: "Group";
  id: number;
  name: string;
  visibility: string;
}

export interface KonnectableCell_Channel_owner_User {
  __typename: "User";
  id: number;
  name: string;
}

export type KonnectableCell_Channel_owner = KonnectableCell_Channel_owner_Group | KonnectableCell_Channel_owner_User;

export interface KonnectableCell_Channel_source {
  __typename: "ConnectableSource";
  url: string | null;
}

export interface KonnectableCell_Channel {
  __typename: "Channel";
  id: number;
  href: string;
  updated_at: string;
  title: string;
  user: KonnectableCell_Channel_user;
  /**
   * Returns the outer channel if we are inside of one
   */
  connection: KonnectableCell_Channel_connection | null;
  truncatedTitle: string;
  visibility: string;
  counts: KonnectableCell_Channel_counts;
  owner: KonnectableCell_Channel_owner;
  label: string;
  source: KonnectableCell_Channel_source | null;
}

export type KonnectableCell = KonnectableCell_Attachment | KonnectableCell_Embed | KonnectableCell_Image | KonnectableCell_Link | KonnectableCell_PendingBlock | KonnectableCell_Text | KonnectableCell_Channel;
