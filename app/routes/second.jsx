import { Link } from "@remix-run/react"

export default function Index() {
    return (
        <div>
            <h1>This is the second page</h1>
            <p>
                <Link to="/">Go back home!</Link>
            </p>
        </div>
    )
}