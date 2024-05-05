package com.example.tpfinn.model;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "itemCategory")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ItemCategoryModel {
 @Id
    private String id;
    private String name;
}