package br.org.serratec.grupo4.domain;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.validation.Valid;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Valid
public class Postagem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include
	@Schema(description="Id da Postagem")
	private Long id;
	

	@Column(name = "conteudo", nullable = false, length = 400)	
	@Schema(description="Conteudo da Postagem")
	private String conteudo;
	

	@Column(name = "data_criacao", nullable = false, updatable = true)
	@Schema(description="Data de Criação da Postagem")
	private LocalDate dataCriacao;


	@OneToMany(mappedBy = "postagem", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@Schema(description="Comentario Usuario")
	private List<Comentario> comentarios = new ArrayList<>();

	@ManyToOne
	@JoinColumn(name = "id_usuario", nullable = false)
	@Schema(description="Id Usuario")
	private Usuario usuario; // id do usuário que fez a postagem 

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getConteudo() {
		return conteudo;
	}

	public void setConteudo(String conteudo) {
		this.conteudo = conteudo;
	}

	public LocalDate getDataCriacao() {
		return dataCriacao;
	}

	public void setDataCriacao(LocalDate dataCriacao) {
		this.dataCriacao = dataCriacao;
	}

	public List<Comentario> getComentarios() {
		return comentarios;
	}

	public void setComentarios(List<Comentario> comentarios) {
		this.comentarios = comentarios;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	
	

	
}
