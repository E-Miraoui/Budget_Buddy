package com.example.tpfinn.repository;

import com.example.tpfinn.model.UserModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<UserModel, String> {

}
