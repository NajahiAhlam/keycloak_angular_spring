package com.example.demo.controller;

import com.example.demo.models.SenderResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class SenderResponseController {
    @GetMapping("/admin")
    public SenderResponse adminEndPoint()
    {
        return new SenderResponse("Message de la part d'admin");
    }
    @GetMapping("/manager")
    public SenderResponse managerEndPoint()
    {
        return new SenderResponse("Message de la part de manager");
    }

}
