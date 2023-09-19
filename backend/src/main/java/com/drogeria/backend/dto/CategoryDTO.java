package com.drogeria.backend.dto;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.*;

import java.io.Serializable;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CategoryDTO implements Serializable {
    private Long id;

    @NotBlank(message = "Nombre cannot be null")
    @Pattern(regexp = "^[a-zA-Z\\s-]*$", message = "Nombre cannot be null")
    private String name;
}
