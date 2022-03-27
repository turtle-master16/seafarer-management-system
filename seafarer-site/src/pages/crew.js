import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const CrewPage = ({ data }) => {
    return (
        <Layout pageTitle="List of Crews">
            <table>
                <tr>
                    <td>Name</td>
                    <td>Rank</td>
                </tr>
                {
                    data.allCrews.nodes.map(node => (
                        <tr key={node.id__normalized}>
                            <td>{node.crewname}</td>
                            <td>{node.crewrank}</td>
                        </tr>
                    ))
                }
            </table>
        </Layout>
    )
}

export const query = graphql`
    query {
        allCrews(sort: {fields: id, order: ASC}) {
            nodes {
                id__normalized
                crewname
                crewrank
            }
        }
    }
`

export default CrewPage