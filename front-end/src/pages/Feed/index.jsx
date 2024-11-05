// src/pages/Feed/index.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Postagem from '../../components/Postagem';
import styles from './Feed.module.css';

function Feed() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newPostContent, setNewPostContent] = useState('');

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/postagens/${id}`);
            setPosts(response.data);
        } catch (error) {
            console.error("Erro ao buscar posts :(", error);
        } finally {
            setLoading(false);
        }
    };

    const createPost = async () => {
        try {
            const response = await axios.post(`http://localhost:8080/postagens/${id}`, { content: newPostContent });
            setPosts([response.data, ...posts]);
            setNewPostContent('');
        } catch (error) {
            console.error("Erro ao criar post :(", error);
        }
    };

    const updatePost = async (id, updatedContent) => {
        try {
            await axios.put(`http://localhost:8080/postagens/${id}`, { content: updatedContent });
            setPosts(posts.map(post => post.id === id ? { ...post, content: updatedContent } : post));
        } catch (error) {
            console.error("Erro ao atualizar post :(", error);
        }
    };

    const deletePost = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/postagens/${id}`);
            setPosts(posts.filter(post => post.id !== id));
        } catch (error) {
            console.error("Erro ao deletar post :(", error);
        }
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <div className={styles.feed}>
            <div className={styles.newPost}>
                <textarea 
                    placeholder="O que você está pensando?" 
                    value={newPostContent} 
                    onChange={(e) => setNewPostContent(e.target.value)}
                />
                <button onClick={createPost}>Postar</button>
            </div>

            {posts.map((post) => (
                <Postagem 
                    key={post.id} 
                    data={post} 
                    onUpdate={updatePost} 
                    onDelete={deletePost} 
                />
            ))}
        </div>
    );
}

export default Feed;
