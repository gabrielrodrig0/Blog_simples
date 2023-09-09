import React from 'react'

const Postagem = ({titulo, conteudo}) => {
  return (
    <div className='flex justify-center mb-4'>

        <div className='shadow-md p-3 w-1/4 border-solid border-gray-300 border-[1px]'>
            <h1 className=' text-gray-600'>Título: {titulo}</h1>
            
            <p className='text-gray-600'>Conteúdo: {conteudo}</p>
        </div>

    </div>
  )
}

export default Postagem