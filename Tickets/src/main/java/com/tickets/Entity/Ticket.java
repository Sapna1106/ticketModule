package com.tickets.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@Document(collection = "tickets")
public class Ticket {
    @Id
    private String id;
    private String name;
    private String description;
    private String createdBy;
    private Date startDate;
    private Date endDate;
    @DBRef
    private Project projectIn;
    private String stage;
    private Priority priority;
    @DBRef
    private Ticket blockedBy;

    @DBRef
    private Ticket parent;

    @DBRef
    private List<User> usersAssignedTo;

}
