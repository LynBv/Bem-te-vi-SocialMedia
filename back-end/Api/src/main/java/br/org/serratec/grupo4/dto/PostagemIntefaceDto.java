package br.org.serratec.grupo4.dto;

import java.time.LocalDate;

public interface PostagemIntefaceDto {

    public Long getIdPostagem();

    public Long getIdUsuario();

    public String getNomeUsuario();

    public String getConteudo();

    public LocalDate getDataCriacao();

}
