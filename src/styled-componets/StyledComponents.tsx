import styled from 'styled-components'

export const Modal = styled.div`
    display: block; 
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4); 
`

export const Input =  styled.input`
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin: auto;
`

export const GridContainer = styled.form`
  display: grid;
`

export const Button = styled.button`
    padding: 12px 20px;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 2px 2px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`

export const Label = styled.label`
    padding: 12px 20px;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 12px auto;
` 