import { appointmentsSeeder } from "./appointmentsSeeder";
import { artistSeeder } from "./artistsSeeder";
import { rolesSeeder } from "./rolesSeeder";
import { servicesSeeder } from "./servicesSeeder";
import { usersSeeder } from "./usersSeeder";

(async () => { 
    console.log("Starting seeders...")
    await rolesSeeder();
    await usersSeeder();
    await servicesSeeder();
    await artistSeeder();
    await appointmentsSeeder();
})();