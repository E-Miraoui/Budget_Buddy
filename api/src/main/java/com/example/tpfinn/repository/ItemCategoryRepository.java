package com.example.tpfinn.repository;

import com.example.tpfinn.model.ItemCategoryModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ItemCategoryRepository extends MongoRepository<ItemCategoryModel, String> {
}
