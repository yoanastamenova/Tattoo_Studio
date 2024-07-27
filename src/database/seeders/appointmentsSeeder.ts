import { AppDataSource } from "../db"
import { Appointment } from "../models/Appointment";

export const appointmentsSeeder = async () => {
    try {
        await AppDataSource.initialize();
        
        const appointment1 = new Appointment();
        appointment1.appointment_date = new Date("2024-04-02");  
        appointment1.user_id = 2;  
        appointment1.service_id = 2;  
        appointment1.artist_id = 1; 
        await appointment1.save(); 

        const appointment2 = new Appointment();
        appointment2.appointment_date = new Date("2024-04-02");
        appointment2.user_id = 2;
        appointment2.service_id = 1;
        appointment2.artist_id = 3;
        await appointment2.save();  

        const appointment3 = new Appointment();
        appointment3.appointment_date = new Date("2024-04-02");
        appointment3.user_id = 2;
        appointment3.service_id = 1;
        appointment3.artist_id = 2;
        await appointment3.save();  

        console.log("===========================");
        console.log("Appointments seeder executed successfully");
        console.log("===========================");
          
    } catch (error: any) {
        const message = error instanceof Error ? error.message : `${error}`;
        console.error("---------------");
        console.error("Error in appointments seeder execution:", message);
        console.error("---------------");
    } finally {
        await AppDataSource.destroy();
    }    
}