import React, { Component } from 'react';
import BinaryGrid from './BinaryGrid';
import { board } from '../modules/board';
import { Link } from "react-router-dom";
import { validateMatrix } from '../modules/board';
import '../styles/components/GamePage.css';
import swal from 'sweetalert';

class GamePage extends Component {
    state = {
        board : [], 
        answer : [],
        counter : 0, 
        giveup : false, 
        finish : false,
        size : 0
    };

    handleClick = (row, column) => {
        //Saber el valor que hay en esa posició en estado...
        const board = JSON.parse(JSON.stringify(this.state.board));
        board[row][column] = String(+!(+this.state.board[row][column]));
        const { finishBoard } = validateMatrix(board);
        this.setState(() => ({ board, finish : finishBoard}));
        //Saber si ha terminado la board...
        if(finishBoard) {
            clearInterval(this.interval);
            swal({
                title: "Congratulations!",
                text: `You have solved the level in ${this.state.counter} seconds\nDo you want to make another game?`,
                icon: "success",
                buttons: true,
                dangerMode: true,
            }).then((yes) => {
                if (yes) {
                    this.createNewBoard(this.state.size);
                } else {
                    this.props.history.push('/');
                }
            });
        }
    };

    handleGiveUp = () => {
        if(!this.state.giveup) {
            this.setState((prevState) => ({ 
                board : prevState.answer, 
                giveup : true, 
                finish : true
            }));
            clearInterval(this.interval);
        } else {
            this.createNewBoard(this.state.size);
        }
    }

    createNewBoard = (size) => {
        const newBoard = board(size);
        this.setState(() => ({ 
            board : newBoard.matrixGame, 
            answer : newBoard.results, 
            counter : 0, 
            giveup : false, 
            finish : false,
            size
        }));
        this.interval = setInterval(() => {
            this.setState((prevState) => ({
                counter : prevState.counter + 1
            }));
        }, 1000);
    };
    
    componentDidMount() {
        const { size } = this.props.match.params;
        const isValidSize = +size === 4 || +size === 6 || +size === 8;
        if(isValidSize) {
            this.createNewBoard(+size);
        } else {
            this.props.history.push('/');
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render () {
        return (
            <div>
                <h1 className="counter">{this.state.counter <= 9 ? `0${this.state.counter}` : this.state.counter}</h1>
                <BinaryGrid
                    className="grid"
                    board={this.state.board}
                    finishBoard={this.state.finish}
                    handleClick={this.handleClick}
                /> 
                <div className="buttons">
                    <Link to="/" className="button button__inline">Home</Link>
                    <div 
                        className="button button__inline"
                        onClick={this.handleGiveUp}
                    >
                    {
                        !this.state.giveup ? "Give Up!" : "Retry"
                    }
                    </div>
                </div>
            </div>
        );
    }
};

export default GamePage;