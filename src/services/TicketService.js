import axios from "axios";

const BASE_API_URL= 'http://localhost:8888/';
class TicketService{
    getAllTicketsByUserId(id){
        return axios.get(BASE_API_URL+ 'tickets/byAssignee/'+id)
        .catch(error => {
            console.error('Error getting all tickets by user id:', error);
        });
    }
    saveTicket(ticket){
        console.log(ticket);
        return axios.get(BASE_API_URL+ 'tickets', ticket)
        .catch(error => {
            console.error('Error saving ticket', error);
        });
    }
    fetchUserList(){
        return axios.get(BASE_API_URL+ 'users')
        .catch(error => {
            console.error('Error fetching user list', error);
        });
    }
    fetchProjectList(){
        return axios.get(BASE_API_URL+ 'projects')
        .catch(error => {
            console.error('Error fetching project list', error);
        });
    }
    updateTicket(id, editableTask){
        return axios.put(BASE_API_URL+ 'tickets/'+id, editableTask)
        .catch(error => {
            console.error('Error update ticket', error);
        });
    }
    loadTicket(id){
        return axios.get(BASE_API_URL+ 'tickets/'+id)
        .catch(error => {
            console.error('Error loading updated data', error);
        });
    }
}

export default new TicketService;