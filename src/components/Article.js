import React from 'react';

// export const Article = props => {
export const Article = ({title, author, text}) => {

  // const {title, author, text} = props;

  const styles = {
    marginTop: 40
  }

  return ( 
    <article style={styles}>
      <h3 style={{
        marginBottom: 3,
        textTransform: 'uppercase',
      }}>{title}</h3>
      <span style={{
        display: 'block',
        marginBottom: 10,
        fontSize: 12,
      }}><em>Autor: {author}</em></span>
      <p style={{fontSize: 16}}>{text}</p>
    </article>
   );
}
 
// export default Article;