package com.example.tpfinn.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "item")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class ItemModel {
    @Id
    private String id;
    private String name;
    private String description;
    private float price;
    private String categoryId;
}
