import React, { useEffect, useState } from "react";
import axios from "axios";
import Postagem from "../../components/Postagem";
import styles from "./Feed.module.css";
import { useNavigate } from "react-router-dom";
import LayoutPrincipal from "../../components/LayoutPrincipal";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [conteudo, setConteudo] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token").substring(7);
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/postagens");
      setPosts(response.data);
    } catch (error) {
      console.error("Erro ao buscar posts :(", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  const handlePost = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      conteudo: conteudo,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/postagens",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false);
      console.log(response.data);
      setPosts([response.data, ...posts]);
      setConteudo("");
      console.log(response.data);
    } catch (error) {
      console.error("Erro :(", error.message);
      setLoading(false);
    }
  };

  const goToCommentsPage = (postId) => {
    navigate(`/post/${postId}`);
  };

  return (
    <LayoutPrincipal>
      <div className={styles.feed}>
        <div className={styles.newPost}>
          <form onSubmit={handlePost}>
            <textarea
              placeholder="O que você está pensando?"
              value={conteudo}
              onChange={(e) => setConteudo(e.target.value)}
            />
            <button>Postar</button>
          </form>
        </div>
        {posts && (
          <>
            {posts.map((postagem) => (
              <div
                key={postagem.id}
                onClick={() => goToCommentsPage(postagem.id)}
              >
                <Postagem postagem={postagem} />
              </div>
            ))}
          </>
        )}
      </div>
    </LayoutPrincipal>
  );
}
