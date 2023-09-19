package com.drogeria.backend.serviceImp;

import com.drogeria.backend.dto.CategoryDTO;
import com.drogeria.backend.mapper.CategoryMapper;
import com.drogeria.backend.mapper.MedicamentoMapper;
import com.drogeria.backend.repository.CategoryRepository;
import com.drogeria.backend.repository.MedicationRepository;
import com.drogeria.backend.service.CategoryService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@AllArgsConstructor
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public CategoryDTO saveCategory(CategoryDTO category) throws IOException {
        return CategoryMapper.INSTANCE.mapToDto(categoryRepository.
                save(CategoryMapper.INSTANCE.DtoToEntity(category)));
    }
}
