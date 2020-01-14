package com.example.webshop.dto;

import lombok.Data;

@Data
public class CasopisDTO {
    private Long id;
    private String naziv;
    private Double clanarina;
    private String komeSeNaplacuje;
    private Long issn;
    private Boolean aktiviran;
}
