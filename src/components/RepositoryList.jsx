import { RepositoryItem } from "./RepositiryItem"

const repository = {
    name: "unform", 
    descriptio: "Forms in React",
    link: "http://github.com/unform/unform"
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositório</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>

        </section>
    )
}