/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SetHasSeenNewGroupExplanation
// ====================================================

export interface SetHasSeenNewGroupExplanation_set_me_flags_me {
  __typename: "Me";
  id: number;
  has_seen_new_group_explanation: boolean;
}

export interface SetHasSeenNewGroupExplanation_set_me_flags {
  __typename: "SetMeFlagsMutationPayload";
  me: SetHasSeenNewGroupExplanation_set_me_flags_me;
}

export interface SetHasSeenNewGroupExplanation {
  set_me_flags: SetHasSeenNewGroupExplanation_set_me_flags | null;
}
