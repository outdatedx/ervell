/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CustomBadge
// ====================================================

export interface CustomBadge_can {
  __typename: "UserCan";
  set_custom_badge: boolean;
}

export interface CustomBadge {
  __typename: "Me";
  id: number;
  custom_badge: string | null;
  badge: string | null;
  can: CustomBadge_can;
}
