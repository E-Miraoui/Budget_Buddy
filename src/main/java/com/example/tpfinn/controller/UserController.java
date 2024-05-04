package com.example.tpfinn.controller;

import com.example.tpfinn.model.ItemCategoryModel;
import com.example.tpfinn.model.ItemModel;
import com.example.tpfinn.model.UserModel;
import com.example.tpfinn.repository.ItemCategoryRepository;
import com.example.tpfinn.repository.ItemRepository;
import com.example.tpfinn.repository.UserRepository;
import com.example.tpfinn.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/addUser")
    public String saveUser(@RequestBody UserModel user){
        UserModel savedItem = userRepository.insert(user);
        return "Added Successfully";
    }

    @GetMapping("/user/{id}/items")
    public List<String> getUseritems(@PathVariable String id) {
        UserModel userModel=userRepository.findById(id).orElseThrow(() -> new RuntimeException("Cannot Find Item By ID: " + id));
        return userModel.getItems();
    }

   /* @GetMapping("/login")
    public ResponseEntity<UserModel> login(@RequestBody UserModel userModel) {
        String username = userModel.getUsername();
    return
    }*/


    }


