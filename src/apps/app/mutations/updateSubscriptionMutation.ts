import { gql } from '@apollo/client'

export default gql`
  mutation updateSubscriptionMutation($subscription_id: String!) {
    update_incomplete_subscription(
      input: { subscription_id: $subscription_id }
    ) {
      subscription {
        id
      }
    }
  }
`
