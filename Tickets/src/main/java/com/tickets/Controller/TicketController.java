package com.tickets.Controller;

import com.tickets.Entity.Ticket;
import com.tickets.Repository.TicketRepo;
import com.tickets.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/tickets")
public class TicketController {

    @Autowired
    private TicketService ticketService;

    /**
     * to create a new ticket
     * @param ticket
     * @return created ticket
     */
    @PostMapping
    public Ticket createTicket(@RequestBody Ticket ticket) {
        System.out.println(ticket);
        System.out.println("hi this post ticket");
        return ticketService.createTicket(ticket);
    }

    /**
     * gives the list of tickets
     * @return
     */
    @GetMapping
    public List<Ticket> getTickets() {
        return ticketService.getTickets();
    }

    /**
     * is to find a ticket by its id
     * @param id
     * @return ticket
     */
    @GetMapping("/{id}")
    public Optional<Ticket> getTicketById(@PathVariable String id) {
        return ticketService.getTicketById(id);
    }

    /**
     * update a ticket
     * @param id
     * @param ticket
     * @return new ticket
     */
    @PutMapping("/{id}")
    public Ticket updateTicket(@PathVariable String id, @RequestBody Ticket ticket) {
        return ticketService.updateTicket(id, ticket);
    }

    /**
     * delete a ticket by ticket id
     * @param id
     * @return
     */
    @DeleteMapping("/{id}")
    public String deleteTicket(@PathVariable String id) {
       boolean status= ticketService.deleteTicket(id);
       if(status==true)
        return "Ticket with ID " + id + " has been deleted.";
       else
           return "error occur while delelting";
    }

    /**
     * this is to get all the tickets from user id
     * @param userId
     * @return list of tickets
     */
    @GetMapping("/byAssignee/{userId}")
    public List<Ticket> getTicketsByAssignee(@PathVariable String userId) {
        System.out.println("hi this is find by user id");
        return ticketService.getTicketsByAssignee(userId);
    }

    /**
     * this is to get all the tickets from project id
     * @param projectId
     * @return list of tickets
     */
    @GetMapping("/byProject/{projectId}")
    public List<Ticket> getTicketsByProject(@PathVariable String projectId) {
        return ticketService.getTicketsByProject(projectId);
    }

    /**
     * this is to get tickets by parent id
     * @param parentId
     * @return
     */

    @GetMapping("/byParent/{parentId}")
    public List<Ticket> getTicketsByParent(@PathVariable String parentId) {
        return ticketService.getTicketsByParent(parentId);
    }

}
