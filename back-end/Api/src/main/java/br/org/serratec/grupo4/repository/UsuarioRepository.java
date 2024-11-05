package br.org.serratec.grupo4.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.org.serratec.grupo4.domain.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

	Usuario findByEmail(String email);

	Usuario findByNome(String nome);

	@Query("SELECT u FROM Usuario u WHERE u.nome LIKE %:letra%")
	List<Usuario> findUsuariosComLetra(@Param("letra") String letra);
}
