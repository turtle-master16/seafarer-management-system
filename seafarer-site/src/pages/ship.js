import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const ShipPage = ({ data }) => {
    return (
        <Layout pageTitle="List of Ships">
            <table>
                <tr>
                    <td>Name</td>
                    <td>Speed</td>
                </tr>
                {
                    data.allShips.nodes.map(node => (
                        <tr key={node.id__normalized}>
                            <td>{node.shipname}</td>
                            <td>{node.shipspeed}</td>
                        </tr>
                    ))
                }
            </table>
        </Layout>
    )
}

export const query = graphql`
    query {
        allShips(sort: {fields: id, order: ASC}) {
            nodes {
                id__normalized
                shipname
                shipspeed
            }
        }
    }
`

export default ShipPage