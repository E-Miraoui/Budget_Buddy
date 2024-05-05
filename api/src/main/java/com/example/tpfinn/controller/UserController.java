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
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ItemRepository itemRepository;
    @PostMapping("/addUser")
    public String saveUser(@RequestBody UserModel user){
        UserModel savedItem = userRepository.insert(user);
        return "Added Successfully";
    }

    @GetMapping("/user/{id}/items")
    public List<ItemModel> getUserItemsById(@PathVariable String id) {
        UserModel userModel = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cannot Find User By ID: " + id));

        List<ItemModel> userItems = new ArrayList<>();

        for (String itemId : userModel.getItems()) {
            ItemModel foundItem = itemRepository.findById(itemId)
                    .orElseThrow(() -> new RuntimeException("Cannot Find Item By ID: " + id));
            userItems.add(foundItem);
        }
        return userItems;
    }
    @PostMapping("/user/{id}/addItem")
    public ResponseEntity<String> addItemToUser(@PathVariable String id, @RequestBody String itemId) {
        // Find the user by ID
        System.out.println(itemId);

        ItemModel item = itemRepository.findById(itemId)
                .orElseThrow(() -> new RuntimeException("Item not found with ID: " + itemId));

        UserModel user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with ID: " + id));

        // Check if the user has enough budget to buy the item
        if (userHasEnoughBudget(user, item)) {
            // Add the item to the user's list
            List<String> items = user.getItems();
            user.setBudget(user.getBudget()- item.getPrice());
            items.add(item.getId()); // Assuming you want to add the ID of the item to the user's list
            user.setItems(items);

            // Save the updated user
            userRepository.save(user);

            // Construct the URI for the newly created resource
            URI location = ServletUriComponentsBuilder
                    .fromCurrentRequest()
                    .path("/{itemId}")
                    .buildAndExpand(item.getId())
                    .toUri();

            // Return a response with status 201 Created
            return ResponseEntity.created(location).body("Item added to user's list successfully");
        } else {
            // Return a response with status 400 Bad Request
            return ResponseEntity.badRequest().body("User does not have enough budget to buy the item");
        }
    }

    // Method to check if the user has enough budget to buy the item
    private boolean userHasEnoughBudget(UserModel user, ItemModel item) {
        // Compare the user's budget with the price of the item
        return user.getBudget() >= item.getPrice();
    }

   /* @GetMapping("/login")
    public ResponseEntity<UserModel> login(@RequestBody UserModel userModel) {
        String username = userModel.getUsername();
    return
    }*/


    }


