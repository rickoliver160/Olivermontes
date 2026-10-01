export function templateInicio() {
    return `
        <section id="sobre">
            <h2>Sobre a ONG Olivermontes</h2>

            <p>
                A ONG Olivermontes atua na promoção do bem-estar
                e na transformação social, desenvolvendo projetos
                e ações para apoiar a comunidade.
            </p>

            <img
                src="../imagens/ongolivermontes.jpg"
                alt="Voluntários da ONG Olivermontes reunidos durante uma ação comunitária"
                width="400"
            >
        </section>

        <section id="contato">
            <h2>Entre em contato</h2>

            <p>
                <strong>Endereço:</strong>
                Rua Oliveira, 100 - Montes Claros/MG
            </p>

            <p>
                <strong>Telefone:</strong>
                (38) 99999-9999
            </p>

            <p>
                <strong>E-mail:</strong>
                contato@olivermontes.org.br
            </p>

            <p>
                <a href="mailto:contato@olivermontes.org.br">
                    Enviar e-mail
                </a>
            </p>
        </section>
    `;
}


export function templateProjetos() {
    return `
        <h2>Projetos e formas de participação</h2>

        <section id="doacao">

            <h3>Campanhas de doação</h3>

            <p>
                A ONG Olivermontes realiza campanhas de doação para arrecadar
                recursos e materiais destinados às ações sociais e ao apoio
                da comunidade.
            </p>

            <h3>Como realizar uma doação</h3>

            <p>
                Para realizar uma doação, entre em contato com a ONG
                Olivermontes pelos canais disponíveis na página de contato.
                As doações podem contribuir para a realização dos projetos
                e campanhas da organização.
            </p>

        </section>


        <section id="voluntariado">

            <h3>Atividades de voluntariado</h3>

            <p>
                Os voluntários podem participar de ações comunitárias,
                campanhas de arrecadação, eventos sociais e outras atividades
                desenvolvidas pela ONG Olivermontes.
            </p>

            <h3>Como se tornar voluntário</h3>

            <p>
                Para se tornar voluntário, o interessado deve realizar seu
                cadastro e informar seus dados e áreas de interesse.
                Após o cadastro, poderá receber informações sobre as
                atividades disponíveis.
            </p>

        </section>


        <section id="participacao">

            <h3>Formas de Participação</h3>

            <p>
                Existem diferentes formas de participar das ações da
                Olivermontes. É possível contribuir por meio de doações,
                trabalho voluntário, divulgação das campanhas e participação
                nas atividades comunitárias.
            </p>

            <ul>
                <li>Realizar doações</li>
                <li>Participar como voluntário</li>
                <li>Divulgar as campanhas</li>
                <li>Participar das ações comunitárias</li>
            </ul>

        </section>


        <section id="feedback">

            <h2>Feedbacks do sistema</h2>

            <h3>Badges</h3>

            <p>
                <span class="badge sucesso">Sucesso</span>
                <span class="badge informacao">Informação</span>
                <span class="badge atencao">Atenção</span>
            </p>

            <h3>Alertas</h3>

            <aside class="alerta">
                <strong>Atenção:</strong>
                Verifique as informações antes de realizar o cadastro.
            </aside>

            <aside class="sucesso">
                <strong>Sucesso:</strong>
                Sua solicitação foi realizada com sucesso.
            </aside>

            <h3>Toast</h3>

            <aside class="toast">
                Cadastro realizado com sucesso!
            </aside>

            <h3>Modal</h3>

            <dialog open class="modal">
                <h4>Informação</h4>

                <p>
                    Obrigado por participar das ações da ONG Olivermontes.
                </p>

                <button type="button">
                    Fechar
                </button>
            </dialog>

        </section>
    `;
}


export function templateCadastro() {
    return `
        <section>
            <h2>Cadastro</h2>

            <p>
                Preencha os dados abaixo para realizar
                seu cadastro na ONG Olivermontes.
            </p>

            <form id="formCadastro">

                <fieldset>
                    <legend>Dados pessoais</legend>

                    <p>
                        <label for="nome">
                            Nome completo:
                        </label>
                        <br>

                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            required
                        >
                    </p>

                    <p>
                        <label for="cpf">
                            CPF:
                        </label>
                        <br>

                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            placeholder="000.000.000-00"
                            maxlength="14"
                            required
                        >
                    </p>

                    <p>
                        <label for="nascimento">
                            Data de nascimento:
                        </label>
                        <br>

                        <input
                            type="date"
                            id="nascimento"
                            name="nascimento"
                            required
                        >
                    </p>
                </fieldset>

                <fieldset>
                    <legend>Contato</legend>

                    <p>
                        <label for="email">
                            E-mail:
                        </label>
                        <br>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="seuemail@exemplo.com"
                            required
                        >
                    </p>

                    <p>
                        <label for="telefone">
                            Telefone:
                        </label>
                        <br>

                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            placeholder="(38) 99999-9999"
                            maxlength="15"
                            required
                        >
                    </p>
                </fieldset>

                <fieldset>
                    <legend>Endereço</legend>

                    <p>
                        <label for="endereco">
                            Endereço:
                        </label>
                        <br>

                        <input
                            type="text"
                            id="endereco"
                            name="endereco"
                            required
                        >
                    </p>

                    <p>
                        <label for="cidade">
                            Cidade:
                        </label>
                        <br>

                        <input
                            type="text"
                            id="cidade"
                            name="cidade"
                            required
                        >
                    </p>

                    <p>
                        <label for="estado">
                            Estado:
                        </label>
                        <br>

                        <select
                            id="estado"
                            name="estado"
                            required
                        >
                            <option value="">Selecione</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="SP">São Paulo</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="BA">Bahia</option>
                            <option value="GO">Goiás</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="PR">Paraná</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="RS">Rio Grande do Sul</option>
                        </select>
                    </p>

                    <p>
                        <label for="cep">
                            CEP:
                        </label>
                        <br>

                        <input
                            type="text"
                            id="cep"
                            name="cep"
                            placeholder="39400-000"
                            maxlength="9"
                            required
                        >
                    </p>
                </fieldset>

                <p>
                    <button type="submit">
                        Enviar cadastro
                    </button>

                    <button type="reset">
                        Limpar formulário
                    </button>
                </p>

            </form>
        </section>
    `;
}