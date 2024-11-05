package br.org.serratec.grupo4.domain;

import java.io.Serializable;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
@Embeddable
public class UsuarioRelacionamentoPK implements Serializable {

	private static final long serialVersionUID = 1L;

	@ManyToOne
	@JoinColumn(name = "id_seguidor", nullable = false)
	@Schema(description = "Seguidor")
	private Usuario seguidor; // to chamando o seguidor

	@ManyToOne
	@JoinColumn(name = "id_seguido", nullable = false)
	@Schema(description = "Id_Seguido")
	private Usuario seguido; // to chamando o seguido

	public Usuario getSeguidor() {
		return seguidor;
	}

	public void setSeguidor(Usuario seguidor) {
		this.seguidor = seguidor;
	}

	public Usuario getSeguido() {
		return seguido;
	}

	public void setSeguido(Usuario seguido) {
		this.seguido = seguido;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
