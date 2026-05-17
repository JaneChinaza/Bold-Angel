import React from 'react'
import './Title.css'

const Title = ({ subTitle, title }) => {
  
  const renderFormattedTitle = (text) => {
    if (text && text.includes('Your Success')) {
      const formattedText = text.replace(
        'Your Success', 
        `<span class="title-highlight">Your Success</span>`
      );
      return <h2 dangerouslySetInnerHTML={{ __html: formattedText }} />;
    }
    
    return <h2>{text}</h2>;
  };

  return (
    <div className='title'>
      <p>{subTitle}</p>
      {renderFormattedTitle(title)}
    </div>
  )
}

export default Title