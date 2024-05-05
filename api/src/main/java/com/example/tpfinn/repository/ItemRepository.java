package com.example.tpfinn.repository;

import com.example.tpfinn.model.ItemModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface ItemRepository extends MongoRepository<ItemModel, String> {
    void deleteAllByCategoryId(String categoryId);
    List<ItemModel> findAllByCategoryId(String categoryId);
}
