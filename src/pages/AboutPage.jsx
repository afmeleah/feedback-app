import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About this app</h1>
                <p>This is a React app to get feedback on my D&D games</p>
                <p>Version 1.0.0</p>
                <p>
                    <Link to="/">Back to Home</Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage
