package br.org.serratec.grupo4.dto;

import java.time.LocalDate;

public interface RelacionamentoDTO {

//    public String getNomeSeguidor();

	public String getNomeSeguido();

	public String getSobrenome();

	public String getIdSeguido();

	public LocalDate getDataInicioSeguimento();

	public boolean getStatus();

}
