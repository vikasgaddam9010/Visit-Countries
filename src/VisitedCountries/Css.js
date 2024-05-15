import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: #161624;
  padding: 20px;
  color: #f8fafc;
`

export const Div = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeadElement = styled.h1``

export const UnorderList = styled.ul`
  height: 300px;
  overflow: auto;
  list-style-type: none;
  padding: 0px;
  border: 1px solid #334155;
  border-radius: 5px;
`
export const ListItem = styled.li`
  width: 100%;
  padding-left: 45px;
  padding-right: 45px;
  border: 1px solid #334155;
  background-color: #1f1f2f;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Para = styled.p`
  margin-right: 18px;
`
export const VisitedButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 80px;
`
export const UnorderListForVisitedList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  list-style-type: none;
  padding: 0px;
  color: white;
`
export const VisistedCoutryItem = styled.li`
  margin-bottom: 20px;
  background-color: #1f1f2f;
  width: 350px; ;
`
export const ThumbImg = styled.img`
  width: 100%;
`
export const DivForNameAndremovBtn = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #cbd5e1;
`

export const RemoveBtn = styled.button`
  border: 1px solid #cbd5e1;
  background-color: transparent;
  border-radius: 4px;
  color: #cbd5e1;
  font-weight: bold;
  padding: 4px;
  width: 85px;
`
