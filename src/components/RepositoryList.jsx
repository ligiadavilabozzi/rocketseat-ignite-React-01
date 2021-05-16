import { RepositoryItem } from "./RepositiryItem"


export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositório</h1>

            <ul>
                <RepositoryItem
                    repository="unform2"
                    description="Forms in React"
                    link="http://github.com/unform/unform"
                />
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
            </ul>

        </section>
    )
}