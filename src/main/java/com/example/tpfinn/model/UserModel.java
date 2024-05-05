package com.example.tpfinn.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import java.util.List;

@Document(collection ="user" )
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserModel {
    @Id
    private String id;
    private String fullName;
    private int age;
    private String password;
    private String address;
    private List<String> items;

}
