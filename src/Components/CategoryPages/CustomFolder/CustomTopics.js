import React from 'react'

function CustomTopics(topics) {

   

  return (
    <div className='container'>
    <div className='list'>
        {topics.map(( topic, index ) => (
            <div key={index}>
                <strong>Topic name:</strong>{topic.topicName}
                <strong>keywords</strong>{topic.keywords}
            </div>
        ))}
    </div>
      
    </div>
  )
}

export default CustomTopics
