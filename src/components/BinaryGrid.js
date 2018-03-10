import React from 'react';
import { validateMatrix } from '../modules/board';

const PrintRow = (props) => {
    const size = props.row.length;
    const classButtons = "button wrapper_button" + (
        size !== 5 ? (size === 7 ? " grid_6x6" : " grid_8x8") : ""
    );
    const { horizontal, vertical } = props.validateData;
    return (
        <div className="rows">
        {
            props.row.map((valRow, i) => {
                const styles = {
                    background : "", 
                    cursor : "pointer"
                };
                styles.background = size - 1 === props.indice ? (
                    "#6d4c41"
                ) : (
                    size - 1 === i ? (
                        "#6d4c41"
                    ) : (
                        +valRow === 1 ? "#ff8f00" : "#2196f3"
                    )
                );
                if(props.indice < size - 1) {
                    if(i === size - 1) {
                        if(horizontal[props.indice]) {
                            styles.background = "#31d1d5";
                        }
                    }
                } else {
                    if(i < size - 1) {
                        if(vertical[i]) {
                            styles.background = "#31d1d5";
                        }
                    }
                }
                if(props.indice === size - 1 && i === size - 1) {
                    styles.background = "#383646";
                    styles.cursor = "auto";
                } else if(props.indice === size - 1 || i === size - 1) {
                    styles.cursor = "auto";
                }
                return (
                    <div
                        key={`${props.indice}_${i}`} 
                        className={classButtons}
                        style={styles}
                        onClick={() => {
                            if((props.indice < size - 1 && i < size - 1) && !props.finishBoard) {
                                props.handleClick(props.indice, i)
                            }
                        }}
                    >
                        {valRow}
                    </div>
                )
            })
        }
        </div>
    )
};

const BinaryGrid = (props) => {
    const validateData = validateMatrix(props.board);
    return (
        <div className="grid">
            {
                props.board.map((row, i) => 
                    <PrintRow 
                        row={row}
                        indice={i}
                        validateData={validateData}
                        handleClick={props.handleClick}
                        finishBoard={props.finishBoard}
                        key={i}
                    />
                )
            }
        </div>
    );
};

export default BinaryGrid;