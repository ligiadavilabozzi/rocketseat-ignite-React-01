const repositoryName = 'unform2'
export function RepositoryList(){
    return(
        <section className="repository-list">
            <h1>Lista de repositório</h1>
        
        <ul> {/* lista não ordenada*/}
            <li> {/* li para cada repositório com */}
                <strong>{repositoryName}</strong> {/* nome do repositório que puxaremos da api do git hub */}
                <p>Forms in React</p> {/* descrição do repositório */}

                <a href="">
                    Acessar Respositório
                </a>
            </li>

            <li> {/* li para cada repositório com */}
                <strong>unform</strong> {/* nome do repositório que puxaremos da api do git hub */}
                <p>Forms in React</p> {/* descrição do repositório */}

                <a href="">
                    Acessar Respositório
                </a>
            </li>

            <li> {/* li para cada repositório com */}
                <strong>unform</strong> {/* nome do repositório que puxaremos da api do git hub */}
                <p>Forms in React</p> {/* descrição do repositório */}

                <a href="">
                    Acessar Respositório
                </a>
            </li>

        </ul>
        
        </section>
    )
}