/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ExpandedBlockRow
// ====================================================

export interface ExpandedBlockRow_Channel_user {
  __typename: "User";
  name: string;
}

export interface ExpandedBlockRow_Channel {
  __typename: "Channel";
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  user: ExpandedBlockRow_Channel_user;
}

export interface ExpandedBlockRow_Attachment_counts {
  __typename: "BlockCounts";
  public_channels: number;
}

export interface ExpandedBlockRow_Attachment_source {
  __typename: "ConnectableSource";
  url: string | null;
  provider_url: string | null;
}

export interface ExpandedBlockRow_Attachment_user {
  __typename: "User";
  name: string;
}

export interface ExpandedBlockRow_Attachment {
  __typename: "Attachment";
  id: number;
  counts: ExpandedBlockRow_Attachment_counts;
  created_at: string;
  updated_at: string;
  file_url: string | null;
  image_url: string | null;
  source: ExpandedBlockRow_Attachment_source | null;
  title: string;
  user: ExpandedBlockRow_Attachment_user;
}

export interface ExpandedBlockRow_Embed_counts {
  __typename: "BlockCounts";
  public_channels: number;
}

export interface ExpandedBlockRow_Embed_source {
  __typename: "ConnectableSource";
  url: string | null;
  provider_url: string | null;
}

export interface ExpandedBlockRow_Embed_user {
  __typename: "User";
  name: string;
}

export interface ExpandedBlockRow_Embed {
  __typename: "Embed";
  id: number;
  counts: ExpandedBlockRow_Embed_counts;
  created_at: string;
  updated_at: string;
  embed_html: string | null;
  image_url: string | null;
  source: ExpandedBlockRow_Embed_source | null;
  title: string;
  user: ExpandedBlockRow_Embed_user;
}

export interface ExpandedBlockRow_Image_counts {
  __typename: "BlockCounts";
  public_channels: number;
}

export interface ExpandedBlockRow_Image_source {
  __typename: "ConnectableSource";
  url: string | null;
  provider_url: string | null;
}

export interface ExpandedBlockRow_Image_user {
  __typename: "User";
  name: string;
}

export interface ExpandedBlockRow_Image {
  __typename: "Image";
  id: number;
  counts: ExpandedBlockRow_Image_counts;
  created_at: string;
  updated_at: string;
  image_url: string | null;
  source: ExpandedBlockRow_Image_source | null;
  title: string;
  user: ExpandedBlockRow_Image_user;
}

export interface ExpandedBlockRow_Link_counts {
  __typename: "BlockCounts";
  public_channels: number;
}

export interface ExpandedBlockRow_Link_source {
  __typename: "ConnectableSource";
  url: string | null;
  provider_url: string | null;
}

export interface ExpandedBlockRow_Link_user {
  __typename: "User";
  name: string;
}

export interface ExpandedBlockRow_Link {
  __typename: "Link";
  id: number;
  counts: ExpandedBlockRow_Link_counts;
  created_at: string;
  updated_at: string;
  image_url: string | null;
  content: string | null;
  source: ExpandedBlockRow_Link_source | null;
  title: string;
  user: ExpandedBlockRow_Link_user;
}

export interface ExpandedBlockRow_PendingBlock_counts {
  __typename: "BlockCounts";
  public_channels: number;
}

export interface ExpandedBlockRow_PendingBlock_user {
  __typename: "User";
  name: string;
}

export interface ExpandedBlockRow_PendingBlock {
  __typename: "PendingBlock";
  id: number;
  counts: ExpandedBlockRow_PendingBlock_counts;
  created_at: string;
  updated_at: string;
  title: string;
  user: ExpandedBlockRow_PendingBlock_user;
}

export interface ExpandedBlockRow_Text_counts {
  __typename: "BlockCounts";
  public_channels: number;
}

export interface ExpandedBlockRow_Text_user {
  __typename: "User";
  name: string;
}

export interface ExpandedBlockRow_Text {
  __typename: "Text";
  id: number;
  counts: ExpandedBlockRow_Text_counts;
  created_at: string;
  updated_at: string;
  content: string;
  html: string;
  title: string;
  user: ExpandedBlockRow_Text_user;
}

export type ExpandedBlockRow = ExpandedBlockRow_Channel | ExpandedBlockRow_Attachment | ExpandedBlockRow_Embed | ExpandedBlockRow_Image | ExpandedBlockRow_Link | ExpandedBlockRow_PendingBlock | ExpandedBlockRow_Text;
