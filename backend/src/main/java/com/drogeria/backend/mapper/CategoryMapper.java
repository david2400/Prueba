package com.drogeria.backend.mapper;

import com.drogeria.backend.dto.CategoryDTO;
import com.drogeria.backend.entity.Category;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface CategoryMapper {
    CategoryMapper INSTANCE= Mappers.getMapper(CategoryMapper.class);

    Category DtoToEntity(CategoryDTO medicamentoDTO);

    CategoryDTO mapToDto(Category medicamento);

    List<CategoryDTO> mapToDto(List<Category> medicamentos);

}
