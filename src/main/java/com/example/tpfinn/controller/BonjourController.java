package com.example.tpfinn.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")

public class BonjourController {
    @GetMapping("/")
    public String sayBonjour() {
        return "Bonjour !";
    }
}
