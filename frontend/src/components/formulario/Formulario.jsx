import React from 'react'
import { useState, useRef } from 'react';
import database from '../../data/seed';

const Formulario = () => {

  const[titulo, setTitulo] = useState('');
  const[conteudo, setConteudo] = useState('');
  const tituloInputRef = useRef(null);
  const conteudoInputRef = useRef(null);

  function handleSubmit(e)
  {
    e.preventDefault();
    if(titulo==="" || conteudo===""){
      
      return
    }
    database.push({titulo:titulo, conteudo:conteudo});
    tituloInputRef.current.value = '';
    conteudoInputRef.current.value = '';
    tituloInputRef.current.focus();
  
  }
  return (
    <div className='flex w-full justify-center'>
        
        <form className='p-3 shadow-md w-1/4 flex flex-col border-solid border-gray-300 border-[1px] gap-2'>
            <label className='text-gray-600'>Titulo</label>
            <input ref={tituloInputRef} onChange={(e) => setTitulo(e.target.value)} name="titulo" type='text' className='border-solid border-gray-300 border-[1px] rounded-md' ></input>
            <label className='text-gray-600'>Conteúdo</label>
            <input  ref={conteudoInputRef} onChange={(e) => setConteudo(e.target.value)} name="conteudo" type='text' className='border-solid border-gray-300 border-[1px] rounded-md'></input >
            <button onClick={handleSubmit} className='bg-slate-600 font-normal text-white rounded-md'>Postar</button>
        </form>
    </div>
  )
}

export default Formulario