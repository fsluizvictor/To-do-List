import React, { Component, Fragment } from 'react'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import { getHours, getDate, parseISO } from 'date-fns'

import './global.css'
import './styles.css'

export default class Tarefas extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tarefa: "",
            tarefas: ["tarefa 1", "tarefa 2", "tarefa 3", "tarefa 4"],
            descricao: "",
            descricoes: ["descrição 1", "descrição 2", "descrição 3", "descrição 4"],
            tag: "",
            tags: ["tag 1", "tag 2", "tag 3", "tag 4"],
            data: "",
            datas: [getDate, getDate, getDate, getDate],
            hora: "", 
            horas: [getHours, getHours, getHours, getHours]
        }

        //alteração do escopo da função 
        this.handleTarefa = this.handleTarefa.bind(this)
        this.handleDescription = this.handleDescription.bind(this)
        this.handleTag = this.handleTag.bind(this)
        this.addTarefa = this.addTarefa.bind(this)
        this.addDescription = this.addDescription.bind(this)
        this.addTag = this.addTag.bind(this)
        this.handleDeleteTarefa = this.handleDeleteTarefa.bind(this)
    }

    //vale ressaltar que tive um grande problema com a tag form, ela não está  enviando o valor do arquivo,
    //logo não consigo atualizar a página, mesmo manipulando a função onSubmit não obteve sucesso até o momento

    render() {
        return (
            <div className="new-incident-container">
                <div className="content">
                    <div className="profile-container" >
                        <form onSubmit={this.addTarefa} >
                            <h1>Registre suas Anotações</h1>

                            <input
                                placeholder="Título da Anotação"
                                onChange={this.handleTarefa}
                                value={this.state.tarefa}
                            />

                            <textarea
                                placeholder="Descrição"
                                onChange={this.handleDescription}
                                value={this.state.descricao}
                            />

                            <input
                                placeholder="Tag"
                                onChange={this.handleTag}
                                value={this.state.tag}
                            />

                            <button
                                className="button"
                                type="submit"
                                onClick={this.addTarefa, this.addDescription, this.addTag}>
                                Cadastrar Anotação
                        </button>

                        </form>

                        <section>

                            <h1>Anotações</h1>

                            <ul>
                                {this.state.tarefas.map(tarefa =>
                                    <li key={tarefa} >
                                        <strong>Título</strong>
                                        <p>{tarefa}</p>

                                        <strong>Tag:</strong>
                                        <p>{this.state.tags[this.state.tarefas.indexOf(tarefa)]}</p>

                                        <button onClick={this.handleDeleteTarefa(this.state.tarefa)} type="button">
                                            <FiTrash2 size={20} color="#a8a8ab3" />
                                        </button>

                                    </li>)}
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        )
    }

    handleDeleteTarefa(tarefa) {
        const pos = this.state.tarefas.indexOf(tarefa)
        //this.state.tarefas.splice(pos, 1)
        // this.state.descricoes.splice(pos, 1)
        //this.state.tags.splice(pos, 1)
    }

    handleTarefa(event) {
        this.setState({ tarefa: event.target.value })
    }

    handleDescription(event) {
        this.setState({ descricao: event.target.value })
    }

    handleTag(event) {
        this.setState({ tag: event.target.value })
    }

    //Tive problemas com a manipulação de datas e não obtive sucesso ao tentar pegar o horário atual do computador
    //vale ressaltar que utilizei duas biblioteocas, sendo elas a Moment e a date-fns

    // handleDataHora() {
    //     const dataAtual = getDate()
    //     const horaAtual = getHours()
    //     this.setState({ data: dataAtual })
    //     this.setState({ hora: horaAtual })
    // }

    // addDataHora() {
    //     this.setState({
    //         horas: [].concat(this.states.horas, this.states.hora)
    //     })
    //     this.setState({
    //         datas: [].concat(this.states.datas, this.states.data)
    //     })
    // }


    addTarefa() {
        this.setState({
            //tarefa === title
            tarefa: "",
            tarefas: [].concat(this.state.tarefas, this.state.tarefa)
        })
    }

    addDescription() {
        this.setState({
            //tarefa === title
            descricao: "",
            descricoes: [].concat(this.state.descricoes, this.state.descricao),
        })
    }

    addTag() {
        this.setState({
            //tarefa === title
            tag: "",
            tags: [].concat(this.state.tags, this.state.tag),
        })
    }
}
