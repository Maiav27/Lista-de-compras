import styled from 'styled-components'

export const  Wrapper = styled.div`
   display : flex;
   position : relative;
   align-itens : center;
   justify-content: center;
   border : 1px solid blue ;
   width : 400px;
   border-radius : 5px;
  
   top : 50%;

   left : 50%;
   transform : translate(-50%, 50%)

`
export const  WrapperTable = styled.div`
   display : flex;
   align-itens : center;
   justify-content: center;
   border : 1px solid blue ;
   width : 400px;
   border-radius : 5px;
   position : absolute;
   top : 50%;

   left : 50%;
   transform : translate(-0%, 0%)

`

export const Button = styled.button`
   color : white;
   background-color : blue;
   border-radius : 5px;
   height : 38px;
   margin-top : 9px;
`

export const ButtonLimpar = styled.button`
   display : flex;
   color : white;
   background-color : red;
   border-radius : 5px;
   height : 38px;
   margin-top : 9px;
   align-itens : end;
`

