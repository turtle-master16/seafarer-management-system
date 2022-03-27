import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <div>
                <table>
                    <tr>
                        <td>Ship Name</td>
                        <td>Crew Name</td>
                        <td>Rank</td>
                    </tr>
                    <tr>
                        <td>Awesome Ship</td>
                        <td>Jack Russell</td>
                        <td>Captain</td>
                    </tr>
                </table>
            </div>
        </Layout>
    )
}

export default IndexPage