package com.example.tpfinn.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Item")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class ItemModel {
    @Id
    private String id;
    private String name;
    private String description;
    private Double price;
    private String categoryId;
}
