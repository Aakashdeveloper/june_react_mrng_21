import React from 'react';

const NewsDisplay = (props) => {
    console.log(">>>inside newsdispaly",props)
    const renderNews = props.newsData.map((data,index) => {
        return(
            <div key={data.id}>
                <h3>{data.title}</h3>
                <p>{data.feed}</p>
            </div>
        )
    })

    return(
        <div>
            {renderNews}
        </div>
    )
}

export default NewsDisplay