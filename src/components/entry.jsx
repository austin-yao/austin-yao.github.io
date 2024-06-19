import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './header.jsx'
import '../styles/Entry.css'

function Entry() {
    let { title } = useParams();
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchHTML = async () => {
            try {
                const response = await fetch(`/entries/${title}.html`);
                if (response.ok) {
                    const html = await response.text();
                    setContent(html);
                } else {
                    setContent('<h2>Article not found</h2>');
                }
            } catch (error) {
                // console.error(error);
                setContent('<h2>Error loading article</h2>');
            }
        };

        fetchHTML();
    }, [title]);

    return (
        <div className="articleParent">
            < Header />
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div >
    );
}

export default Entry