package com.tickets.service;

import com.tickets.Entity.Ticket;
import com.tickets.Repository.TicketRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@Service
public class TicketService {
    @Autowired
    private TicketRepo ticketRepository;

    /**
     * to create a new ticket
     * @param ticket
     * @return created ticket
     */
    public Ticket createTicket(@RequestBody Ticket ticket) {
        System.out.println(ticket);
        System.out.println("hi this post ticket");
        return ticketRepository.save(ticket);
    }

    /**
     * gives the list of tickets
     * @return
     */
    public List<Ticket> getTickets() {
        return ticketRepository.findAll();
    }

    /**
     * is to find a ticket by its id
     * @param id
     * @return ticket
     */
    public Optional<Ticket> getTicketById( String id) {
        return ticketRepository.findById(id);
    }

    /**
     * update a ticket
     * @param id
     * @param ticket
     * @return new ticket
     */
    public Ticket updateTicket( String id,  Ticket ticket) {
        Optional<Ticket> existingTicket = ticketRepository.findById(id);
        if (existingTicket.isPresent()) {
            Ticket updatedTicket = existingTicket.get();
            updatedTicket.setName(ticket.getName());
            updatedTicket.setDescription(ticket.getDescription());
            return ticketRepository.save(updatedTicket);
        }
        return null;
    }

    /**
     * delete a ticket by ticket id
     * @param id
     * @return
     */
    public Boolean deleteTicket( String id) {
        try {
            ticketRepository.deleteById(id);
            return  true;
        }catch (Exception e){
            return  false;
        }
    }

    /**
     * this is to get all the tickets from user id
     * @param userId
     * @return list of tickets
     */
    public List<Ticket> getTicketsByAssignee( String userId) {
        System.out.println("hi this is find by user id");
        return ticketRepository.findByUsersAssignedTo_Id(userId);
    }

    /**
     * this is to get all the tickets from project id
     * @param projectId
     * @return list of tickets
     */
    public List<Ticket> getTicketsByProject( String projectId) {
        return ticketRepository.findByProjectIn_Id(projectId);
    }

    /**
     * this is to get tickets by parent id
     * @param parentId
     * @return
     */
    public List<Ticket> getTicketsByParent( String parentId) {
        return ticketRepository.findByParent_Id(parentId);
    }

    public void deleteTicketsByProjectId(String projectId) {
        ticketRepository.deleteByProjectIn_Id(projectId);
    }
}
