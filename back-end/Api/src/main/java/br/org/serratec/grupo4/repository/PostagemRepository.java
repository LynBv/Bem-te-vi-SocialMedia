package br.org.serratec.grupo4.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.org.serratec.grupo4.domain.Postagem;
import br.org.serratec.grupo4.dto.PostagemIntefaceDto;

@Repository
public interface PostagemRepository extends JpaRepository<Postagem, Long> {

    @Query(value = """
            SELECT 
                P.ID AS id_postagem,
                P.ID_USUARIO AS id_Usuario, 
                U.NOME AS nome_usuario, 
                P.CONTEUDO AS conteudo, 
                P.DATA_CRIACAO AS data_criacao
            FROM 
                POSTAGEM AS P
                INNER JOIN RELACIONAMENTO AS R ON R.ID_SEGUIDO = P.ID_USUARIO 
                INNER JOIN USUARIO AS U ON R.ID_SEGUIDO = U.ID_USUARIO
            WHERE 
                ID_SEGUIDOR = :seguidorId
    """, nativeQuery = true)
    List<PostagemIntefaceDto> ListarPostagensSeguidos(@Param("seguidorId") Long usuarioId);
}
