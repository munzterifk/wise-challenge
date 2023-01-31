import { gql } from "@apollo/client"


// trial
export const GET_GRAPHS = gql`
    query {
        epoches (orderBy: startBlock) {
            id
            startBlock
            totalRewards
            stakeDeposited
            taxedQueryFees
            totalIndexerRewards
            endBlock
        }
    }
`