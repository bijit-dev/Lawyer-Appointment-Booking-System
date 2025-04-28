import React from 'react';

const Post = ({ post }) => {
    const { answer, question } = post;
    return (
        
            <div className="collapse collapse-arrow join-item border-base-400 border rounded-xl">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title Mulish font-medium text-xl md:text-2xl text-black border-b border-dashed">&#9745; {question}</div>
                <div className="collapse-content Mulish font-medium text-xl md:text-base text-gray-600 pt-4">{answer}</div>
            </div>
    
    );
};

export default Post;