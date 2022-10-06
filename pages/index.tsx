import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Lista from '../src/components/Lista/Lista'




const Home: NextPage = () => {
  const professores: Professor[]= [
    {
      id:1,
      nome:"Júlio Mattos",
      foto:"https://github.com/jcastellobranco.png",
      descricao:"Descrição do Júlio",
      valor_hora:120
    },
    {
      id:2,
      nome:"Professor 2",
      foto:"https://github.com/jcastellobranco.png",
      descricao:"Descrição do professor 2",
      valor_hora:100
    },
    {
      id:3,
      nome:"Professor 3",
      foto:"https://github.com/jcastellobranco.png",
      descricao:"Descrição do professor 3",
      valor_hora:120
    },
    {
      id:4,
      nome:"Professor 4",
      foto:"https://github.com/jcastellobranco.png",
      descricao:"Descrição do professor 4",
      valor_hora:120
    },
  ]
  return (
    <Box sx={{backgroundColor:'secondary.main'}}>
      <Lista professores={professores} />
    </Box>
  )
}

export default Home
