import React from 'react';
import Postagem from '../postagem/Postagem';
import database from '../../data/seed';

const Postagens = () => {
  return (
    <div>
      {database.map((post) => (
        <Postagem titulo={post.titulo} conteudo={post.conteudo} key={post.titulo} />
      ))}
    </div>
  );
};

export default Postagens;
