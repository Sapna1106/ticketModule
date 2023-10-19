package com.tickets.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
@AllArgsConstructor
public class ResponseEntity<T> {
    private String message;
    private T data;
    private HttpStatus status;


}
